import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Selamat Datang" />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute left-0 top-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:bg-blue-900 dark:opacity-10"></div>
                    <div className="absolute right-0 bottom-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:bg-indigo-900 dark:opacity-10"></div>
                </div>

                <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
                    <div className="w-full max-w-md space-y-8">
                        <div className="text-center">
                            <svg
                                className="mx-auto h-16 w-auto text-indigo-600 dark:text-indigo-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                            <h2 className="mt-6 text-4xl font-extrabold text-gray-900 dark:text-white">
                                Selamat Datang
                            </h2>
                            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                                Sistem Kasir Modern
                            </p>
                        </div>

                        <div className="mt-8 space-y-6">
                            {auth.user ? (
                                <div className="text-center">
                                    <Link
                                        href={route('dashboard')}
                                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                                    >
                                        Masuk ke Dashboard
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    <div>
                                        <Link
                                            href={route('login')}
                                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                                        >
                                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                <svg
                                                    className="h-5 w-5 text-indigo-400 group-hover:text-indigo-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            Login
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            href={route('register')}
                                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 dark:text-white dark:bg-indigo-800 dark:hover:bg-indigo-700"
                                        >
                                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                <svg
                                                    className="h-5 w-5 text-indigo-600 group-hover:text-indigo-500 dark:text-indigo-400 dark:group-hover:text-indigo-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            Register
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Sistem kasir modern untuk kebutuhan bisnis Anda
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}