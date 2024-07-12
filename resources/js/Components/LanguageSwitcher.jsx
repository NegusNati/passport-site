import { Link } from '@inertiajs/react';

const LanguageSwitcher = () => {
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'am', name: 'Amharic' },
        { code: 'om', name: 'Oromiffa' },
        { code: 'ti', name: 'Tigrinya' },
    ];

    const currentLanguage = languages.find(
        (lang) => lang.code === window.navigator.language.substr(0, 2)
    );

    return (
        <div className="relative inline-block">
            <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"
            >
                {currentLanguage ? currentLanguage.name : 'English'}
                <svg
                    className="ml-2 -mr-0.5 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    {languages.map((lang) => (
                        <Link
                            key={lang.code}
                            href={route('language.switch', lang.code)}
                            method="post"
                            as="button"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                            role="menuitem"
                        >
                            {lang.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
