import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm,  } from "@inertiajs/react";
import formatDate from "@/helpers/formarDate";

function TableView({ auth, passports }) {
    console.log(passports);
    const { data, links  } = passports;

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight py-4">
                    Latest Passports
                </h2>
            }
        >
            <Head title="All Passports" />
            <main className="mt-10 max-w-[990px] m-auto  mb-20 bg-white/80  rounded-2xl border border-transparent  hover:border-blue-500 transition-colors duration-300 group mt-8 py-8 selection:bg-[#FF2D20] selection:text-white ">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm p-4">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr className="font-semibold">
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    ID
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    First Name
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Middle Name
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Last Name
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Date
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Request Number
                                </th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>
                        {data?.map((passport) => (
                            <tbody
                                className="divide-y divide-gray-200 pl-4"
                                key={passport.id}
                            >
                                <tr
                                    key={passport.id}
                                    className="hover:bg-gray-100 cursor-pointer pl-4"
                                >
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {passport.id}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {passport.firstName}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {passport.middleName}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {passport.lastName}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {formatDate(passport.dateOfPublish)}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {passport.requestNumber}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <Link
                                            href={route("passport.showDetail", {
                                                id: passport.id,
                                            })}
                                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                    <div className="p-4">
                        {links?.map((link, i) => (
                            <Link
                                key={i}
                                href={link.url}
                                className={`px-4 py-2 ${
                                    link.active
                                        ? "bg-blue-500 text-white"
                                        : "bg-white text-blue-500"
                                } rounded`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </Authenticated>
    );
}

export default TableView;
