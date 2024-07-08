import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

function Index({ auth }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Telegram Notification
                </h2>
            }
        >
            <Head title="Telegram Notification" />
            <div className="pt-12 py-12 pb-20 mb-40 bg-gradient-to-r from-slate-100 to-slate-300 dark:from-slate-700 dark:to-zinc-900 dark:text-white/90">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-8 text-center text-red-800">
                        Under Construction
                    </h1>
                    <div className="relative w-64 h-64">
                        <svg
                            className="animate-spin"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M50 10C27.0883 10 8.8628 28.2256 8.8628 51.1372C8.8628 74.0488 27.0883 92.2744 50 92.2744C72.9117 92.2744 91.1372 74.0488 91.1372 51.1372C91.1372 28.2256 72.9117 10 50 10ZM50 86.0465C30.6512 86.0465 14.8605 70.2558 14.8605 51.1372C14.8605 32.0186 30.6512 16.2279 50 16.2279C69.3488 16.2279 85.1395 32.0186 85.1395 51.1372C85.1395 70.2558 69.3488 86.0465 50 86.0465Z"
                                fill="#FF2D20"
                            />
                            <path
                                d="M50 20.9302C33.8457 20.9302 20.9302 33.8457 20.9302 50C20.9302 66.1543 33.8457 79.0698 50 79.0698C66.1543 79.0698 79.0698 66.1543 79.0698 50C79.0698 33.8457 66.1543 20.9302 50 20.9302ZM50 72.8419C37.4919 72.8419 27.1628 62.5128 27.1628 50C27.1628 37.4872 37.4919 27.1581 50 27.1581C62.5081 27.1581 72.8372 37.4872 72.8372 50C72.8372 62.5128 62.5081 72.8419 50 72.8419Z"
                                fill="#FF2D20"
                            />
                            <path
                                d="M50 34.8837C42.8605 34.8837 37.0233 40.7209 37.0233 47.8605C37.0233 55 42.8605 60.8372 50 60.8372C57.1395 60.8372 62.9767 55 62.9767 47.8605C62.9767 40.7209 57.1395 34.8837 50 34.8837ZM50 54.6093C46.5116 54.6093 43.2558 51.3535 43.2558 47.8605C43.2558 44.3675 46.5116 41.1116 50 41.1116C53.4884 41.1116 56.7442 44.3675 56.7442 47.8605C56.7442 51.3535 53.4884 54.6093 50 54.6093Z"
                                fill="#FF2D20"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                                <svg
                                    className="w-12 h-12 text-[#FF2D20]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21 6H16V4.33333C16 3.62928 15.3707 3 14.6667 3H9.33333C8.62928 3 8 3.62928 8 4.33333V6H3C2.44772 6 2 6.44772 2 7V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V7C22 6.44772 21.5523 6 21 6ZM10 4.33333H14V6H10V4.33333ZM20 18H4C3.44772 18 3 17.5523 3 17V8H21V17C21 17.5523 20.5523 18 20 18Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="text-lg text-center mt-1 pt-8">
                        Our Telegram Notification feature is currently under
                        construction. <br /> Please check back soon for updates!
                    </p>
                </div>
            </div>
        </Authenticated>
    );
}

export default Index;
