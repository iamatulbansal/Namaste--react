import { useEffect, useState } from 'react';
const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);
    // online and offline logic

    useEffect(() => {

        const handleOnline = () => {
            setIsOnline(true);
        }
        const handleOffline = () => {
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            //Always write cleanup for addEventListener

            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)

            console.log('Clean-up');
        };
    }, []);
    //pass here ! this operator 
    return Boolean(isOnline);
};
export default useOnline;

// we need function
// we need react state
// isOnline and is Offline status
// build logic for user is on line or offline
// we need return statement
