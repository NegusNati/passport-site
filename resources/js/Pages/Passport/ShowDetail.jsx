import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import formatDate from "@/helpers/formarDate";

function ShowDetail({ auth, passport }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight py-4">
                    Passport Details
                </h2>
            }
        >
            <Head title="Details" />
            <main className="mt-10 max-w-[990px] m-auto  mb-20 bg-white/80  rounded-2xl border border-transparent  hover:border-blue-500 transition-colors duration-300 group mt-8 py-8 selection:bg-[#FF2D20] selection:text-white ">

                    <div className=" space-y-4 pb-2  flex flex-col space-x-2 justify-between py-6 ">
                        {/* <div className="flex items-center lg:w-[200px] ">
                                <img src={`https://picsum.photos/seed/${Math.random(1,100)}/200`} width="50" className="rounded-xl w-10 h-10 object-cover " />
                            </div> */}
                        <div className="space-y-2 font-bold text-2xl hover:text-red-800 transition-colors duration-500 uppercase flex flex-col items-center">
                            <p>

                            <span className="font-bold text-2xl hover:text-red-800 transition-colors duration-500 uppercase ">
                                {" "}
                                Federal Democratic Republic of Ethiopia
                            </span>
                            </p>
                            <p  className="text-xl text-center ">
                                Passport
                            </p>
                        </div>
                        <div className="space-y-2  text-sm pb-8 pt-8 m-4 pl-4 capitalize ">
                            <p className=" ">
                                First Name :{" "}
                                <strong>{passport.firstName}</strong>
                            </p>
                            <p className=" ">
                                Middle Name :{" "}
                                <strong>{passport.middleName}</strong>
                            </p>
                            <p className=" ">
                                Last Name : <strong>{passport.lastName}</strong>
                            </p>

                            <p className="  ">
                                You Can Rrecive After :{" "}
                                <strong className="" >{formatDate(passport.dateOfPublish)} G.C.</strong>
                            </p>
                        </div>
                        <div className=" space-y-2 font-light text-sm pb-1 mt-4  pt-4 flex flex-col items-center">
                            <p className="text-xs capitalize font-semibold ">
                                Issuing Authority :{" "}

                                <strong className="text-red-800 hover:text-red-800 transition-colors font-semibold duration-500 uppercase ">
                                    {" "}
                                    MAIN DEPARTMENT FOR IMMIGRATION & NATIONALITY AFFAIRS
                                </strong>
                            </p>
                            <p>
                                published on { formatDate(passport.created_at)}
                            </p>
                        </div>
                    </div>

            </main>
        </Authenticated>
    );
}

export default ShowDetail;
