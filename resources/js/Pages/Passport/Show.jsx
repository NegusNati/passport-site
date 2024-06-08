import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

function Show({ auth, passports, search }) {
    const { requestNumber, firstName, middleName, lastName } = search;
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight py-4">
                    {/* Display search parameters */}
                   { requestNumber && <div>Request Number: {requestNumber}</div>}
                   { firstName && <div>First Name: {firstName}</div>}
                   { middleName && <div>Middle Name: {middleName}</div>}
                   { lastName && <div>Last Name: {lastName}</div>}

                </h2>
            }
        >
              <Head title="Results" />

            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative min-h-screen flex flex-col  selection:bg-[#FF2D20] selection:text-white">
            <main className="mt-8 max-w-[990px] m-auto">
                {passports.length > 0 &&
                    passports.map((passport) => (
                        <div
                            className=" bg-white/80 text-black my-2  p-4 rounded-2xl  border border-transparent  hover:border-blue-500 transition-colors duration-300 group shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20] "

                            key={passport.id}
                        >
                            <div class="flex items-center"></div>
                            <div class="px-4 w-full ">
                                <div class=" space-y-2 pb-2  flex space-x-2 justify-around py-4">
                                    <div className="space-y-2 ">
                                        <p class="text-xs capitalize ">
                                            First Name :     <strong>{passport.firstName}</strong>
                                        </p>
                                        <p class="text-xs capitalize ">
                                            Middle Name : <strong>{passport.middleName}</strong>
                                        </p>
                                        <p class="text-xs capitalize ">
                                            Last Name : <strong>{passport.lastName}</strong>
                                        </p>
                                    </div>
                                    <div className=" ">
                                        <p class="text-xs capitalize ">
                                        Request Number :  <strong>{passport.requestNumber}</strong>
                                        </p>
                                        <p class="text-xs capitalize ">
                                            can riceive after:{" "}
                                            <strong className="text-blue-500 dark:text-blue-400 font-bold">
                                                {" "}
                                                {formatDate(
                                                    passport.dateOfPublish
                                                )}
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </main>
            </div>
            </div>
        </Authenticated>
    );
}

export default Show;
