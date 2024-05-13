import { useEffect, useState } from "react";

function useApi<T = unknown>(url: string, initData: T) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<T>(initData);

    // todo handle api call errors
    const fetchApi = async () => {
        const result = await fetch(url);
        const json = await result.json();
        setLoading(false);
        setData(json);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return { loading, data }
};

export default useApi;
