import { useEffect, useState } from "react";

function useImageFetch(url: string) {
    const [loading, setLoading] = useState(true);
    const [blobUrl, setBlobUrl] = useState<string | null>(null);

    const fetchImage = async () => {
        console.log("fetching image from url", url)
        const result = await fetch(url);
        const blob = await result.blob();
        setLoading(false);
        setBlobUrl(URL.createObjectURL(blob));
    };

    useEffect(() => {
        fetchImage();
        return () => {
            console.log("cleaning up blob url");
            if (blobUrl) {
                URL.revokeObjectURL(blobUrl);
            }
        }
    }, []);

    return { loading, blobUrl }
};

export default useImageFetch;