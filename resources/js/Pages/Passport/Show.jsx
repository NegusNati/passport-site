import Authenticated from "@/Layouts/AuthenticatedLayout";

function Show({ auth, passports, search }) {
    const { applicationNumber, firstName, middleName, lastName } = search;
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
                   { applicationNumber && <div>Application Number: {applicationNumber}</div>}
                   { firstName && <div>First Name: {firstName}</div>}
                   { middleName && <div>Middle Name: {middleName}</div>}
                   { lastName && <div>Last Name: {lastName}</div>}

                </h2>
            }
        >
            <main className="mt-8 max-w-[990px] m-auto">
                {passports.length > 0 &&
                    passports.map((passport) => (
                        <div
                            className=" bg-white/80 text-black  p-4 rounded-2xl  border border-transparent  hover:border-blue-500 transition-colors duration-300 group my-3  "
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
                                        Application Number :  <strong>{passport.applicationNumber}</strong>
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
        </Authenticated>
    );
}

export default Show;
