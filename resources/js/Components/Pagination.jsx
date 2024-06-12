import { Link } from "@inertiajs/react";

const Pagination = ({ passports }) => {
    return (
        <div className=" font-semibold text-sm text-gray-700 dark:text-gray-300 flex justify-between border-t border-gray-200 pt-4 px-4 ">
            
            {passports.prev_page_url && (
                <Link
                    href={passports.prev_page_url}
                    className="pagination-link"
                >
                    Previous
                </Link>
            )}
            {Array.from({ length: passports.last_page }, (_, i) => (
                <Link
                    key={i + 1}
                    href={passports.path + `?page=${i + 1}`}
                    className={`pagination-link ${
                        i + 1 === passports.current_page ? "active" : ""
                    }`}
                >
                    {i + 1}
                </Link>
            ))}
            <p>{passports.from + " - " + passports.to}</p>
            {passports.next_page_url && (
                <Link
                    href={passports.next_page_url}
                    className="pagination-link"
                >
                    Next
                </Link>
            )}
        </div>
    );
};

export default Pagination;
