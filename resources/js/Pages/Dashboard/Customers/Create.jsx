import React from 'react'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head, useForm, usePage } from '@inertiajs/react'
import { IconPencilPlus, IconUser, IconPhone, IconMapPin, IconCheck } from '@tabler/icons-react'
import toast from 'react-hot-toast'

export default function Create() {
    const { errors } = usePage().props

    const { data, setData, post, processing } = useForm({
        name: '',
        no_telp: '',
        address: ''
    })

    const submit = (e) => {
        e.preventDefault()
        post(route('customers.store'), {
            onSuccess: () => {
                if (Object.keys(errors).length === 0) {
                    toast.success('Pelanggan berhasil ditambahkan!', {
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
                toast.error('Gagal menambahkan pelanggan. Silakan cek kembali data Anda.', {
                    position: 'top-right',
                })
            },
        })
    }

    return (
        <>
            <Head title="Tambah Pelanggan Baru" />
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Tambah Pelanggan Baru</h1>
                        <p className="text-gray-600 dark:text-gray-400">Isi form berikut untuk menambahkan pelanggan baru</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                    <form onSubmit={submit} className="p-6 space-y-6">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Nama Pelanggan
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <IconUser className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="Nama lengkap pelanggan"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                            </div>
                            {errors.name && (
                                <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">{errors.name}</p>
                            )}
                        </div>

                        {/* Phone Number Input */}
                        <div>
                            <label htmlFor="no_telp" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Nomor Handphone
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <IconPhone className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="no_telp"
                                    name="no_telp"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="Contoh: 081234567890"
                                    value={data.no_telp}
                                    onChange={(e) => setData('no_telp', e.target.value)}
                                />
                            </div>
                            {errors.no_telp && (
                                <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">{errors.no_telp}</p>
                            )}
                        </div>

                        {/* Address Textarea */}
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Alamat
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                                    <IconMapPin className="h-5 w-5 text-gray-400" />
                                </div>
                                <textarea
                                    id="address"
                                    name="address"
                                    rows={4}
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="Alamat lengkap pelanggan"
                                    value={data.address}
                                    onChange={(e) => setData('address', e.target.value)}
                                />
                            </div>
                            {errors.address && (
                                <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">{errors.address}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-4 space-x-3">
                            <a
                                href={route('customers.index')}
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
                                        Simpan Pelanggan
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