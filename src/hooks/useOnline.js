import { useEffect, useState } from 'react';
const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  // online and offline logic

  useEffect(() => {
    window.addEventListener('online', () => {
      setIsOnline(true);
    });
    window.addEventListener('offline', () => {
      setIsOnline(false);
    });
    return () => {
        //Always write cleanup for addEventListener
      console.log('Clean-up');
    };
  }, []);

  return Boolean(isOnline);
};
export default useOnline;

// we need function
// we need react state
// isOnline and is Offline status
// build logic for user is on line or offline
// we need return statement
