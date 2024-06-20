import React, { useState, useEffect } from 'react';

const DismissibleBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const isBannerDismissed = localStorage.getItem('bannerDismissed');
        if (!isBannerDismissed) {
            setIsVisible(true);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem('bannerDismissed', 'true');
    };

    return (
        isVisible && (
            <div
                className={`fixed top-0 left-0 right-0 bg-indigo-600 text-white p-4 flex justify-between items-center transition-transform duration-300 transform ${
                    isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
                style={{ zIndex: 1000 }} // Ensure it stays on top of other content
            >
                <span className=' text-center'>
                    This is a test banner. It will be removed when you close it.
                </span>
                <button
                    onClick={handleDismiss}
                    className="bg-transparent border-0 text-white text-2xl"
                >
                    &times;
                </button>
            </div>
        )
    );
};

export default DismissibleBanner;
