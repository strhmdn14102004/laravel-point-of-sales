import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { IconArrowRight, IconMoneybag, IconPencilPlus, IconReceipt, IconShoppingCart, IconShoppingCartPlus, IconTrash, IconSearch, IconUser, IconDiscount } from '@tabler/icons-react';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function Index({ carts, carts_total, customers }) {
    const { errors, auth } = usePage().props;
    const [barcode, setBarcode] = useState('');
    const [product, setProduct] = useState({});
    const [qty, setQty] = useState(1);
    const [grandTotal, setGrandTotal] = useState(carts_total);
    const [cash, setCash] = useState(0);
    const [change, setChange] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    };

    const { data, setData } = useForm({
        customer_id: '',
        product_id: '',
        sell_price: '',
        qty: '',
        discount: '',
        cash: '',
        change: '',
    });

    const setSelectedCustomerHandler = (value) => {
        setSelectedCustomer(value);
        setData('customer_id', value.id);
    };

    useEffect(() => {
        setGrandTotal(carts_total - discount);
        setChange(cash - (carts_total - discount));
    }, [carts_total, discount, cash]);

    const searchProduct = (e) => {
        e.preventDefault();
        axios.post('/dashboard/transactions/searchProduct', { barcode })
            .then(response => {
                if (response.data.success) {
                    setProduct(response.data.data);
                } else {
                    setProduct({});
                    toast.error('Produk tidak ditemukan');
                }
            });
    };

    const addToCart = (e) => {
        e.preventDefault();
        if (!product.id) return;
        
        router.post(route('transactions.addToCart'), {
            product_id: product.id,
            sell_price: product.sell_price,
            qty,
        }, {
            onSuccess: () => {
                setBarcode('');
                setProduct({});
                setQty(1);
            }
        });
    };

    const storeTransaction = (e) => {
        e.preventDefault();
        if (!selectedCustomer) {
            toast.error('Pilih pelanggan terlebih dahulu');
            return;
        }
        
        if (cash < grandTotal) {
            toast.error('Uang pembayaran kurang');
            return;
        }

        router.post(route('transactions.store'), {
            customer_id: selectedCustomer.id,
            discount,
            grand_total: grandTotal,
            cash,
            change,
        }, {
            onSuccess: () => {
                toast.success('Transaksi berhasil disimpan');
            }
        });
    };

    return (
        <>
            <Head title="Transaksi Kasir" />
            <div className="flex flex-col lg:flex-row gap-6 p-4">
                {/* Product Section */}
                <div className="w-full lg:w-1/3">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <div className="flex items-center mb-6">
                            <IconShoppingCart className="text-indigo-600 dark:text-indigo-400 mr-2" size={24} />
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Tambah Produk</h2>
                        </div>
                        
                        <form onSubmit={searchProduct} className="mb-6">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <IconSearch className="text-gray-400" size={20} />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
                                    placeholder="Scan/Input Barcode"
                                    value={barcode}
                                    onChange={(e) => setBarcode(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && searchProduct(e)}
                                />
                            </div>
                        </form>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Produk</label>
                                <input
                                    type="text"
                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                                    disabled
                                    value={product.title || 'Tidak ada produk'}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Harga</label>
                                <input
                                    type="text"
                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                                    disabled
                                    value={product.sell_price ? formatPrice(product.sell_price) : 'Rp 0'}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Kuantitas</label>
                                <div className="flex items-center">
                                    <button 
                                        onClick={() => setQty(Math.max(1, qty - 1))}
                                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-l-lg"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        className="flex-1 px-3 py-1 text-center border-t border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white"
                                        value={qty}
                                        onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                                        min="1"
                                    />
                                    <button 
                                        onClick={() => setQty(qty + 1)}
                                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-r-lg"
                                    >
                                        +
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Stok: {product.stock || 0}</p>
                            </div>

                            <button
                                onClick={addToCart}
                                disabled={!product.id}
                                className={`w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
                                    !product.id 
                                        ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                }`}
                            >
                                <IconShoppingCartPlus size={20} />
                                Tambah ke Keranjang
                            </button>
                        </div>
                    </div>
                </div>

                {/* Transaction Section */}
                <div className="w-full lg:w-2/3 space-y-6">
                    {/* Customer & Cashier Info */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <div className="flex items-center mb-6">
                            <IconUser className="text-indigo-600 dark:text-indigo-400 mr-2" size={24} />
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Informasi Transaksi</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Kasir</label>
                                <input
                                    type="text"
                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                                    disabled
                                    value={auth.user.name}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pelanggan</label>
                                <div className="relative">
                                    <select
                                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white appearance-none"
                                        value={selectedCustomer?.id || ''}
                                        onChange={(e) => {
                                            const customer = customers.find(c => c.id === parseInt(e.target.value));
                                            setSelectedCustomerHandler(customer || null);
                                        }}
                                    >
                                        <option value="">Pilih Pelanggan</option>
                                        {customers.map(customer => (
                                            <option key={customer.id} value={customer.id}>{customer.name}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cart Items */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center mb-6">
                                <IconShoppingCart className="text-indigo-600 dark:text-indigo-400 mr-2" size={24} />
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Keranjang Belanja</h2>
                            </div>

                            {carts.length === 0 ? (
                                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                                    Keranjang belanja kosong
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-700">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">No</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Produk</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Harga</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Qty</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Subtotal</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                            {carts.map((item, index) => (
                                                <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{index + 1}</td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{item.product.title}</td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{formatPrice(item.price)}</td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{item.qty}</td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{formatPrice(item.price * item.qty)}</td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                                                        <button
                                                            onClick={() => router.delete(route('transactions.destroyCart', item.id))}
                                                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                                                        >
                                                            <IconTrash size={18} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot className="bg-gray-50 dark:bg-gray-700">
                                            <tr>
                                                <td colSpan="4" className="px-4 py-3 text-right text-sm font-medium text-gray-900 dark:text-white">Total</td>
                                                <td className="px-4 py-3 text-sm font-bold text-indigo-600 dark:text-indigo-400">{formatPrice(carts_total)}</td>
                                                <td></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Payment Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <div className="flex items-center mb-6">
                            <IconMoneybag className="text-indigo-600 dark:text-indigo-400 mr-2" size={24} />
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Pembayaran</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Total Belanja</label>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {formatPrice(carts_total)}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Diskon</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <IconDiscount className="text-gray-400" size={20} />
                                    </div>
                                    <input
                                        type="number"
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white"
                                        placeholder="0"
                                        value={discount}
                                        onChange={(e) => setDiscount(parseInt(e.target.value) || 0)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Grand Total</label>
                                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                                    {formatPrice(grandTotal)}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bayar</label>
                                <input
                                    type="number"
                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white"
                                    placeholder="0"
                                    value={cash}
                                    onChange={(e) => setCash(parseInt(e.target.value) || 0)}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Kembalian</label>
                                <div className={`text-2xl font-bold ${
                                    change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                                }`}>
                                    {formatPrice(change)}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={storeTransaction}
                            disabled={!selectedCustomer || cash < grandTotal || carts.length === 0}
                            className={`w-full py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors ${
                                (!selectedCustomer || cash < grandTotal || carts.length === 0)
                                    ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                            }`}
                        >
                            <IconReceipt size={20} />
                            Proses Pembayaran
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

Index.layout = page => <DashboardLayout children={page} />;