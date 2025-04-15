import React from 'react'
import { router } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head, usePage } from '@inertiajs/react'
import { IconCirclePlus, IconDatabaseOff, IconEdit, IconTrash, IconSearch } from '@tabler/icons-react'
import Barcode from '@/Components/Dashboard/Barcode'

export default function Index({ products }) {
    const { roles, permissions, errors } = usePage().props;

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(value);
    };

    return (
        <>
            <Head title="Manajemen Produk" />
            <div className="space-y-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Daftar Produk</h1>
                        <p className="text-gray-600 dark:text-gray-400">Kelola produk Anda dengan mudah</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <a
                            href={route('products.create')}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                        >
                            <IconCirclePlus size={20} />
                            <span>Tambah Produk</span>
                        </a>
                        <div className="relative w-full sm:w-64">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <IconSearch className="text-gray-400" size={20} />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
                                placeholder="Cari produk..."
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        router.get(route('products.index'), { search: e.target.value });
                                    }
                                }}
                                
                            />
                        </div>
                    </div>
                </div>

                {/* Products Table */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">No</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Barcode</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Kategori</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nama Produk</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Harga Beli</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Harga Jual</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Stok</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                {products.data.length > 0 ? (
                                    products.data.map((product, i) => (
                                        <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                {++i + (products.current_page - 1) * products.per_page}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex justify-center bg-white p-1 rounded">
                                                    <Barcode
                                                        value={product.barcode}
                                                        format="CODE39"
                                                        width={1.5}
                                                        height={40}
                                                        lineColor="#000000" // Black barcode on white background
                                                        background="#FFFFFF"
                                                        displayValue={false}
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 dark:text-white">
                                                    {product.category.name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {product.name}
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                                                    {product.description}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                                {formatCurrency(product.buy_price)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400">
                                                {formatCurrency(product.sell_price)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 py-1 text-xs rounded-full ${
                                                    product.stock > 10 
                                                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                        : product.stock > 0
                                                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                                                            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                                }`}>
                                                    {product.stock} pcs
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex justify-end space-x-2">
                                                    <a
                                                        href={route('products.edit', product.id)}
                                                        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
                                                    >
                                                        <IconEdit size={18} />
                                                    </a>
                                                    <button
    onClick={() => {
        if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
            router.delete(route('products.destroy', product.id));
        }
    }}

    className="text-rose-600 hover:text-rose-900 dark:text-rose-400 dark:hover:text-rose-300 p-2 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/30"
>
    <IconTrash size={18} />
</button>

                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="px-6 py-12 text-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <IconDatabaseOff size={48} className="text-gray-400 dark:text-gray-500 mb-4" />
                                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Tidak ada data produk</h3>
                                                <p className="text-gray-500 dark:text-gray-400 mt-1">
                                                    Tidak ditemukan produk yang cocok dengan pencarian Anda
                                                </p>
                                                <a
                                                    href={route('products.create')}
                                                    className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                                                >
                                                    <IconCirclePlus size={20} className="mr-2" />
                                                    Tambah Produk Baru
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {products.last_page > 1 && (
                        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                            <div className="flex flex-col sm:flex-row items-center justify-between">
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-0">
                                    Menampilkan <span className="font-medium">{products.from}</span> sampai <span className="font-medium">{products.to}</span> dari <span className="font-medium">{products.total}</span> produk
                                </div>
                                <div className="flex space-x-1">
                                    {products.links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url || '#'}
                                            className={`px-3 py-1 rounded-md ${
                                                link.active 
                                                    ? 'bg-indigo-600 text-white' 
                                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                                            }`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

Index.layout = page => <DashboardLayout children={page} />