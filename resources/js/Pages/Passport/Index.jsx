import { useEffect } from 'react';

import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';

function Index({auth}) {

    const { data, setData, post, processing, errors, reset } = useForm({
        applicationNumber : '',

    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('passport.show'));
    };
    return (
        <Authenticated
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Register" />

            <form onSubmit={submit} className="py-12   sm:px-6 lg:px-8 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div>
                    <InputLabel htmlFor="applicationNumber" value="Application Number" />

                    <TextInput
                        id="applicationNumber"
                        name="applicationNumber"
                        value={data.applicationNumber}
                        className="mt-1 block w-full"
                        autoComplete="applicationNumber"
                        isFocused={true}
                        onChange={(e) => setData("applicationNumber", e.target.value)}
                        required
                    />

                    <InputError message={errors.applicationNumber} className="mt-2" />
                </div>

                {/* <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div> */}
                <div className="flex items-center justify-end mt-4">
                <PrimaryButton className="mt-4"> Register</PrimaryButton>
                </div>
            </form>
        </Authenticated>
    );
}

export default Index;
