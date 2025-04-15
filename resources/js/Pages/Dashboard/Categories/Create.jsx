import React, { useState } from 'react'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head, useForm, usePage } from '@inertiajs/react'
import { IconPencilPlus, IconPhoto, IconUpload, IconX } from '@tabler/icons-react'
import toast from 'react-hot-toast'

export default function Create() {
    const { errors } = usePage().props
    const [previewImage, setPreviewImage] = useState(null)

    const { data, setData, post, processing } = useForm({
        name: '',
        description: '',
        image: null,
    })

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setData('image', file)
            setPreviewImage(URL.createObjectURL(file))
        }
    }

    const removeImage = () => {
        setData('image', null)
        setPreviewImage(null)
    }

    const submit = (e) => {
        e.preventDefault()
        post(route('categories.store'), {
            onSuccess: () => {
                if (Object.keys(errors).length === 0) {
                    toast.success('Kategori berhasil dibuat!', {
                        position: 'top-right',
                        style: {
                            borderRadius: '10px',
                            background: '#1C1F29',
                            color: '#fff',
                        },
                    })
                }
            },
            onError: () => {
                toast.error('Gagal membuat kategori. Silakan cek kembali data Anda.', {
                    position: 'top-right',
                })
            },
        })
    }

    return (
        <>
            <Head title="Tambah Kategori Baru" />
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Tambah Kategori Baru</h1>
                        <p className="text-gray-600 dark:text-gray-400">Isi form berikut untuk menambahkan kategori produk baru</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                    <form onSubmit={submit} className="p-6 space-y-6">
                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Gambar Kategori
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
                                                    <span>Upload gambar</span>
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

                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Nama Kategori
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200"
                                    placeholder="Contoh: Elektronik"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                            </div>
                            {errors.name && (
                                <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">{errors.name}</p>
                            )}
                        </div>

                        {/* Description Textarea */}
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Deskripsi
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={4}
                                    className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200"
                                    placeholder="Deskripsi singkat tentang kategori ini"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                />
                            </div>
                            {errors.description && (
                                <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">{errors.description}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-4">
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
                                        <IconPencilPlus className="-ml-1 mr-2 h-5 w-5" />
                                        Simpan Kategori
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

Create.layout = page => <DashboardLayout children={page} />