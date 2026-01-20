import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useAnalytics() {
    const location = useLocation();

    useEffect(() => {
        if (window.gtag) {
            window.gtag("config", "G-9V8QYDZSNY", {
                page_path: location.pathname + location.search,
            });
        }
    }, [location]);
}