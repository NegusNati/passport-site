import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/Footer";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };
    // const { props } = usePage();
    // const form = useForm({
    //     // Add any form fields you need here
    // });

    // const submit = () => {
    //     form.post(route("pay"));
    // };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gradient-to-r from-slate-100 to-slate-300 dark:from-slate-700 dark:to-zinc-900 dark:text-white/90 pb-10  rounded-xl pb-10">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[1100px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative min-h-screen pt-4 px-1 pt-50 selection:bg-[#FF2D20] selection:text-white sm:px-4 sm:px-6 lg:px-8">
                    {/* <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl"> */}
                    <header className="flex justify-between space-x-8 items-center gap-2  lg:grid-cols-3 ">
                        <div className="mr-auto pt-2">
                            {/* <svg
                                width="150"
                                height="150"
                                viewBox="0 0 100 70"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width="100"
                                    height="70"
                                    fill="#c71508"
                                    rx="5"
                                />
                                <circle cx="50" cy="35" r="10" fill="#F8E231" />
                                <path
                                    d="M45 30 L55 30 L55 40 L45 40 Z"
                                    fill="#F8E231"
                                />
                                <path
                                    d="M50 27.5 L51.76 32.45 L56.97 32.45 L52.60 35.55 L54.36 40.5 L50 37.5 L45.64 40.5 L47.40 35.55 L43.03 32.45 L48.24 32.45 Z"
                                    fill="none"
                                    stroke="black"
                                    strokeWidth="1"
                                />
                                <text
                                    x="50"
                                    y="15"
                                    fontSize="6"
                                    fontFamily="Arial"
                                    fill="#FFFFFF"
                                    textAnchor="middle"
                                >
                                    REPUBLIC OF ETHIOPIA
                                </text>
                                <text
                                    x="50"
                                    y="60"
                                    fontSize="6"
                                    fontFamily="Arial"
                                    fill="#FFFFFF"
                                    textAnchor="middle"
                                >
                                    PASSPORT
                                </text>
                                <line
                                    x1="10"
                                    y1="19"
                                    x2="90"
                                    y2="19"
                                    stroke="#FFFFFF"
                                    strokeWidth="2"
                                />
                                <line
                                    x1="10"
                                    y1="50"
                                    x2="90"
                                    y2="50"
                                    stroke="#FFFFFF"
                                    strokeWidth="2"
                                />
                            </svg> */}

                            <ApplicationLogo />
                        </div>
                        <nav className="ml-auto flex justify-between space-x-4 ">
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </header>
                    <main className="bg-gray-50 bg-transparent w-full sm:py-20 lg:px-8 ">
                        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center mb-20 ">
                            <div className="mx-auto max-w-xl text-center">
                                <h1 className="text-3xl font-extrabold sm:text-5xl capitalize">
                                    Is your Passport Ready?
                                    <strong className="font-extrabold text-red-700 sm:block">
                                        {" "}
                                        Find Out Now.{" "}
                                    </strong>
                                </h1>

                                <p className="mt-4 sm:text-xl/relaxed">
                                    You can look at the most recent passports
                                    published by the government of Ethiopia.
                                </p>

                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <a
                                        className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                                        href="#payment"
                                    >
                                        Find Passport
                                    </a>

                                    <a
                                        className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 bg-gray-100 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto  transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:bg-red-700 hover:text-white duration-300"
                                        href={route("login")}
                                    >
                                        {auth ? "Dashboard" : "Log In"}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>

                    <section className="dark:bg-gradient-to-r from-slate-700 to-zinc-900  dark:text-white/90 py-12 pb-8 m-auto bg-gradient-to-b from-slate-600 to-slate-300 dark:from-slate-600 dark:black/80 dark:text-white/90 rounded-xl pb-10">
                        <div className="mx-auto max-w-3xl px-4 pt-8 mb-8 sm:px-6 sm:py-20 lg:px-8">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8 ">
                                <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12 bg-white/80 dark:bg-black/80 text-black/80 dark:text-white/80">
                                    <div className="text-center">
                                        <h2 className="text-lg font-medium">
                                            Premium
                                            <span className="sr-only">
                                                Plan
                                            </span>
                                        </h2>

                                        <p className="mt-2 sm:mt-4">
                                            <strong className="text-3xl font-bold sm:text-4xl">
                                                {" "}
                                                20 Birr{" "}
                                            </strong>

                                            <span className="text-sm font-medium  capitalize">
                                                for a Full month
                                            </span>
                                        </p>
                                    </div>

                                    <ul className="mt-6 space-y-2">
                                        <li className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-5 text-indigo-700"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span className=" capitalize">
                                                {" "}
                                                Latest passport information{" "}
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-5 text-indigo-700"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span className=" capitalize">
                                                {" "}
                                                1000 queries per hour{" "}
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-5 text-indigo-700"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span className=" capitalize">
                                                {" "}
                                                Date of receival{" "}
                                            </span>
                                        </li>

                                        <li className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-5 text-indigo-700"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span className=" capitalize">
                                                {" "}
                                                Detailed information{" "}
                                            </span>
                                        </li>

                                        <li className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-5 text-indigo-700"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span className=" capitalize">
                                                {" "}
                                                community support{" "}
                                            </span>
                                        </li>

                                        <li className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-5 text-indigo-700"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span className="">
                                                {" "}
                                                24/7 support{" "}
                                            </span>
                                        </li>
                                    </ul>

                                    <a
                                        id="payment"
                                        // href="/payment"
                                        href={route("register", { amount: 20 })}
                                        // href={route("payment", { amount: 20 })}
                                        className="mt-8 block rounded-full border border-indigo-600  px-12 py-3 text-center text-sm font-medium text-white  hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500  transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                                    >
                                        Get Started
                                    </a>
                                </div>

                                <div className="rounded-2xl border border-blue-200 p-6 shadow-sm sm:px-8 lg:p-12 bg-white/80 dark:bg-black/80 text-black/80 dark:text-white/80">
                                    <div className="text-center">
                                        <h2 className="text-lg font-medium ">
                                            Standard
                                            <span className="sr-only">
                                                Plan
                                            </span>
                                        </h2>

                                        <p className="mt-2 sm:mt-4">
                                            <strong className="text-3xl font-bold sm:text-4xl">
                                                {" "}
                                                Free
                                            </strong>

                                            <span className="text-sm font-medium">
                                                {" "}
                                                For limited time
                                            </span>
                                        </p>
                                    </div>

                                    <ul className="mt-6 space-y-2">
                                        <li className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-5 text-indigo-700"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span className=" capitalize">
                                                {" "}
                                                passport information{" "}
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-5 text-indigo-700"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span className=" capitalize">
                                                {" "}
                                                120 queries per hour{" "}
                                            </span>
                                        </li>

                                        <li className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-5 text-indigo-700"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span className=" capitalize">
                                                {" "}
                                                Date of receival{" "}
                                            </span>
                                        </li>

                                        <li className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-5 text-indigo-700"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span className=" capitalize">
                                                {" "}
                                                Detailed information{" "}
                                            </span>
                                        </li>

                                        <li className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-5 text-indigo-700"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span className="">
                                                {" "}
                                                Help center access{" "}
                                            </span>
                                        </li>
                                    </ul>

                                    <a
                                        // href={route("payment", { amount: 10 })}
                                        href={route("register")}
                                        className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500  transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        </>
    );
}
