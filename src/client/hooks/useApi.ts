import { useEffect, useState } from "react";
import { Api } from "../../swagger/api";

const useApi = (url: string) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const fetchApi = () => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log(json);
                setLoading(false);
                setData(json);
            })
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return { loading, data }
};

const useApiNew = () => {
    const api = new Api();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    var x = 3;
}

export default useApi;
