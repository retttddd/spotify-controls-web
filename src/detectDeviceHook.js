import { useState, useEffect } from 'react';

const useDeviceDetection = () => {
    const [device, setDevice] = useState('');

    useEffect(() => {
        const handleDeviceDetection = () => {
            const width = window.innerWidth;

            if (width <= 1000) {
                setDevice('Mobile');
            } else if (width > 1000 && width <= 1500) {
                setDevice('Tablet');
            } else {
                setDevice('Desktop');
            }
        };

        handleDeviceDetection();
        window.addEventListener('resize', handleDeviceDetection);

        return () => {
            window.removeEventListener('resize', handleDeviceDetection);
        };
    }, []);

    return device;
};

export default useDeviceDetection;
