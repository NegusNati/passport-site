import Authenticated from "@/Layouts/AuthenticatedLayout";

function Show({ auth, passports, search }) {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Results for Application Number: {search}
                </h2>
            }
        >
            <div className="py-12   sm:px-6 lg:px-8 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                        {passports.map((passport) => (
                            <div key={passport.id}>
                                <h2>{passport.applicationNumber}</h2>
                                <h2>{passport.firstName}</h2>
                                <h2>{passport.lastName}</h2>
                                <h2>{passport.dateOfPublish}</h2>
                                <h2>{formatDate(passport.dateOfPublish)}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

export default Show;
