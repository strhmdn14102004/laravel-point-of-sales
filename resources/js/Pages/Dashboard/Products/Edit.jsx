import React, { useState, useEffect } from 'react'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head, useForm, usePage } from '@inertiajs/react'
import { IconPencil, IconPhoto, IconUpload, IconX, IconCheck, IconBarcode, IconCategory, IconCoin, IconStack } from '@tabler/icons-react'
import toast from 'react-hot-toast'

export default function Edit({ categories, product }) {
    const { errors } = usePage().props
    const [previewImage, setPreviewImage] = useState(product.image || null)
    const [selectedCategory, setSelectedCategory] = useState(null)

    const { data, setData, post, processing } = useForm({
        image: null,
        barcode: product.barcode,
        title: product.title,
        category_id: product.category_id,
        description: product.description,
        buy_price: product.buy_price,
        sell_price: product.sell_price,
        stock: product.stock,
        _method: 'PUT'
    })

    useEffect(() => {
        if (product.category_id) {
            const category = categories.find(c => c.id === product.category_id)
            setSelectedCategory(category)
        }
    }, [product.category_id])

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setData('image', file)
            setPreviewImage(URL.createObjectURL(file))
        }
    }

    const removeImage = () => {
        setData('image', null)
        setPreviewImage(product.image || null)
    }

    const setSelectedCategoryHandler = (value) => {
        setSelectedCategory(value)
        setData('category_id', value.id)
    }

    const submit = (e) => {
        e.preventDefault()
        post(route('products.update', product.id), {
            onSuccess: () => {
                if (Object.keys(errors).length === 0) {
                    toast.success('Produk berhasil diperbarui!', {
                        position: 'top-right',
                        style: {
                            borderRadius: '10px',
                            background: '#10B981',
                            color: '#fff',
                        },
                    })
                }
            },
            onError: () => {
                toast.error('Gagal memperbarui produk. Silakan cek kembali data Anda.', {
                    position: 'top-right',
                })
            },
        })
    }

    return (
        <>
            <Head title={`Edit ${product.title}`} />
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Edit Produk</h1>
                        <p className="text-gray-600 dark:text-gray-400">Perbarui informasi produk {product.title}</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                    <form onSubmit={submit} className="p-6 space-y-6">
                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Gambar Produk
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-xl">
                                <div className="space-y-1 text-center">
                                    {previewImage ? (
                                        <div className="relative">
                                            <img
                                                src={previewImage}
                                                alt="Preview"
                                                className="mx-auto h-40 w-40 object-cover rounded-lg"
                                            />
                                            <button
                                                type="button"
                                                onClick={removeImage}
                                                className="absolute -top-2 -right-2 p-1 bg-rose-500 rounded-full text-white hover:bg-rose-600"
                                            >
                                                <IconX size={16} />
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex justify-center">
                                                <IconPhoto className="mx-auto h-12 w-12 text-gray-400" />
                                            </div>
                                            <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                                <label
                                                    htmlFor="image-upload"
                                                    className="relative cursor-pointer bg-white dark:bg-gray-700 rounded-md font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 focus-within:outline-none"
                                                >
                                                    <span>Upload gambar baru</span>
                                                    <input
                                                        id="image-upload"
                                                        name="image"
                                                        type="file"
                                                        className="sr-only"
                                                        onChange={handleImageChange}
                                                        accept="image/*"
                                                    />
                                                </label>
                                                <p className="pl-1">atau drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                PNG, JPG, GIF up to 2MB
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                            {errors.image && (
                                <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">{errors.image}</p>
                            )}
                        </div>

                        {/* Category Selector */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Kategori Produk
                            </label>
                            <div className="relative">
                                <select
                                    className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 appearance-none"
                                    value={selectedCategory?.id || ''}
                                    onChange={(e) => {
                                        const category = categories.find(c => c.id === parseInt(e.target.value))
                                        setSelectedCategoryHandler(category || null)
                                    }}
                                >
                                    <option value="">Pilih Kategori</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <IconCategory className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                            {errors.category_id && (
                                <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">{errors.category_id}</p>
                            )}
                        </div>

                        {/* Product Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Kode Produk / Barcode
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <IconBarcode className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200"
                                        placeholder="Masukkan barcode"
                                        value={data.barcode}
                                        onChange={(e) => setData('barcode', e.target.value)}
                                    />
                                </div>
                                {errors.barcode && (
                                    <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">{errors.barcode}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Nama Produk
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200"
                                    placeholder="Nama produk"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                />
                                {errors.title && (
                                    <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">{errors.title}</p>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Deskripsi Produk
                            </label>
                            <textarea
                                rows={4}
                                className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200"
                                placeholder="Deskripsi lengkap produk"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                            />
                            {errors.description && (
                                <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">{errors.description}</p>
                            )}
                        </div>

                        {/* Pricing & Stock */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Harga Beli
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500 dark:text-gray-400">Rp</span>
                                    </div>
                                    <input
                                        type="number"
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200"
                                        placeholder="0"
                                        value={data.buy_price}
                                        onChange={(e) => setData('buy_price', e.target.value)}
                                    />
                                </div>
                                {errors.buy_price && (
                                    <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">{errors.buy_price}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Harga Jual
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500 dark:text-gray-400">Rp</span>
                                    </div>
                                    <input
                                        type="number"
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200"
                                        placeholder="0"
                                        value={data.sell_price}
                                        onChange={(e) => setData('sell_price', e.target.value)}
                                    />
                                </div>
                                {errors.sell_price && (
                                    <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">{errors.sell_price}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Stok
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <IconStack className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="number"
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200"
                                        placeholder="0"
                                        value={data.stock}
                                        onChange={(e) => setData('stock', e.target.value)}
                                    />
                                </div>
                                {errors.stock && (
                                    <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">{errors.stock}</p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-4 space-x-3">
                            <a
                                href={route('products.index')}
                                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Batal
                            </a>
                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {processing ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Memproses...
                                    </>
                                ) : (
                                    <>
                                        <IconCheck className="-ml-1 mr-2 h-5 w-5" />
                                        Simpan Perubahan
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

Edit.layout = page => <DashboardLayout children={page} />