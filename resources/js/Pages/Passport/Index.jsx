import { useEffect } from "react";

import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

function Index({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        requestNumber: "",
        firstName: "",
        middleName: "",
        lastName: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("passport.show"));
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Is Your Passport Ready? Let's find out!
                </h2>
            }
        >
            <Head title="Find Passport" />

            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative min-h-screen flex flex-col  selection:bg-[#FF2D20] selection:text-white">
                <main className="mt-6">
                        <form
                            onSubmit={submit}
                            className="py-12   sm:px-6 lg:px-8 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg font-semibold text-black/50 dark:text-white/50"
                        >
                            <div className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]">
                                <InputLabel
                                    htmlFor="requestNumber"
                                    value="Request Number"
                                />

                                <TextInput
                                    id="requestNumber"
                                    name="requestNumber"
                                    value={data.requestNumber}
                                    className="mt-1 block w-full"
                                    autoComplete="requestNumber"
                                    isFocused={true}
                                    placeholder="AAL3912660"
                                    onChange={(e) =>
                                        setData("requestNumber", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.requestNumber}
                                    className="mt-2"
                                />
                            </div>
                            <div className=" mt-4">
                                <p>Or Find By Name</p>
                            </div>
                            <div className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]">
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="firstName"
                                        value="First Name"
                                    />

                                    <TextInput
                                        id="firstName"
                                        name="firstName"
                                        value={data.firstName}
                                        className="mt-1 block w-full"
                                        autoComplete="firstName"
                                        placeholder="Natnael"
                                        onChange={(e) =>
                                            setData("firstName", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.firstName}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="middleName"
                                        value="Middle Name/Father's Name"
                                    />

                                    <TextInput
                                        id="middleName"
                                        name="middleName"
                                        value={data.middleName}
                                        className="mt-1 block w-full"
                                        autoComplete="middleName"
                                        placeholder="Birhanu"
                                        onChange={(e) =>
                                            setData(
                                                "middleName",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.middleName}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="lastName"
                                        value="Last Name/Grandfather's Name"
                                    />

                                    <TextInput
                                        id="lastName"
                                        name="lastName"
                                        value={data.lastName}
                                        className="mt-1 block w-full"
                                        autoComplete="lastName"
                                        placeholder="Gezahegn"
                                        onChange={(e) =>
                                            setData("lastName", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.lastName}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton className="mt-4">
                                    Find Passport
                                </PrimaryButton>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </Authenticated>
    );
}

export default Index;
