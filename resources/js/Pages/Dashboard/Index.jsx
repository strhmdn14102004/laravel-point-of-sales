import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import { IconBox, IconCategory, IconMoneybag, IconUsers, IconTrendingUp } from '@tabler/icons-react';

export default function Dashboard() {
    // Sample data - replace with your actual data
    const stats = [
        { 
            title: 'Kategori', 
            value: 20, 
            change: 12, 
            icon: <IconCategory size={24} strokeWidth={1.5} />,
            color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
        },
        { 
            title: 'Produk', 
            value: 30, 
            change: 5, 
            icon: <IconBox size={24} strokeWidth={1.5} />,
            color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
        },
        { 
            title: 'Transaksi', 
            value: 45, 
            change: 24, 
            icon: <IconMoneybag size={24} strokeWidth={1.5} />,
            color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'
        },
        { 
            title: 'Pengguna', 
            value: 2, 
            change: 1, 
            icon: <IconUsers size={24} strokeWidth={1.5} />,
            color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400'
        }
    ];

    return (
        <>
            <Head title="Dashboard" />
            <div className="space-y-6">
                {/* Welcome Header */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Selamat Datang!</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Ringkasan aktivitas sistem hari ini</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div 
                            key={index}
                            className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border-l-4 ${stat.color.split(' ')[0]}`}
                        >
                            <div className="p-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className={`p-3 rounded-lg ${stat.color}`}>
                                            {stat.icon}
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                {stat.title}
                                            </p>
                                            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                                                {stat.value}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center">
                                    <span className={`text-sm font-medium ${
                                        stat.change >= 0 
                                            ? 'text-green-600 dark:text-green-400' 
                                            : 'text-red-600 dark:text-red-400'
                                    }`}>
                                        <IconTrendingUp size={16} className="inline mr-1" />
                                        {stat.change}% dari kemarin
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                
            </div>
        </>
    );
}

Dashboard.layout = page => <DashboardLayout children={page} />;