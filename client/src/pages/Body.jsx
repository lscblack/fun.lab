import React, { useState, useEffect } from "react";
import Load from "./Load";
import OfflinePage from "./OffilinePage";
import LoginPage from "./LoginPage";
function Body() {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        setTimeout(() => setLoad(true), 2000);
    }, [load])
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    return (
        <div Style="bg-black bg-opacity-50 p-4">
            {
                // **************** Loading Page Call *****************
            }
            {isOnline ? (
                load ? (
                    <LoginPage></LoginPage>
                ) : (
                    <Load />
                )
            ) : (
                <OfflinePage></OfflinePage>
            )}
            {
                // **************** End Loading Page Call *****************
            }
        </div>
    );
}
export default Body;