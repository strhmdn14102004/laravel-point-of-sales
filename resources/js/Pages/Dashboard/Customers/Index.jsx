import React from 'react'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head, usePage } from '@inertiajs/react'
import { IconCirclePlus, IconDatabaseOff, IconEdit, IconTrash, IconSearch, IconUser, IconPhone, IconMapPin } from '@tabler/icons-react'

export default function Index({ customers }) {
    const { roles, permissions, errors } = usePage().props;

    return (
        <>
            <Head title="Manajemen Pelanggan" />
            <div className="space-y-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Daftar Pelanggan</h1>
                        <p className="text-gray-600 dark:text-gray-400">Kelola data pelanggan Anda</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <a
                            href={route('customers.create')}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                        >
                            <IconCirclePlus size={20} />
                            <span>Tambah Pelanggan</span>
                        </a>
                        <div className="relative w-full sm:w-64">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <IconSearch className="text-gray-400" size={20} />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
                                placeholder="Cari pelanggan..."
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        router.get(route('customers.index'), { search: e.target.value });
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Customers Table */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">No</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        <div className="flex items-center">
                                            <IconUser className="mr-2" size={16} />
                                            Nama
                                        </div>
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        <div className="flex items-center">
                                            <IconPhone className="mr-2" size={16} />
                                            No. Handphone
                                        </div>
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        <div className="flex items-center">
                                            <IconMapPin className="mr-2" size={16} />
                                            Alamat
                                        </div>
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                {customers.data.length > 0 ? (
                                    customers.data.map((customer, i) => (
                                        <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                {++i + (customers.current_page - 1) * customers.per_page}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {customer.name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                                {customer.no_telp}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                                    {customer.address}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex justify-end space-x-2">
                                                    <a
                                                        href={route('customers.edit', customer.id)}
                                                        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
                                                    >
                                                        <IconEdit size={18} />
                                                    </a>
                                                    <button
                                                        onClick={() => {
                                                            if (confirm('Apakah Anda yakin ingin menghapus pelanggan ini?')) {
                                                                router.delete(route('customers.destroy', customer.id));
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
                                        <td colSpan="5" className="px-6 py-12 text-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <IconDatabaseOff size={48} className="text-gray-400 dark:text-gray-500 mb-4" />
                                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Tidak ada data pelanggan</h3>
                                                <p className="text-gray-500 dark:text-gray-400 mt-1">
                                                    Tidak ditemukan pelanggan yang cocok dengan pencarian Anda
                                                </p>
                                                <a
                                                    href={route('customers.create')}
                                                    className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                                                >
                                                    <IconCirclePlus size={20} className="mr-2" />
                                                    Tambah Pelanggan Baru
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {customers.last_page > 1 && (
                        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                            <div className="flex flex-col sm:flex-row items-center justify-between">
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-0">
                                    Menampilkan <span className="font-medium">{customers.from}</span> sampai <span className="font-medium">{customers.to}</span> dari <span className="font-medium">{customers.total}</span> pelanggan
                                </div>
                                <div className="flex space-x-1">
                                    {customers.links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url || '#'}
                                            className={`px-3 py-1 rounded-md ${link.active ? 'bg-indigo-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
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