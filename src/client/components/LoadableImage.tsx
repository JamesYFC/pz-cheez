import useImageFetch from "../hooks/useImageFetch";

const LoadableImage: React.FC<{
    url: string | undefined,
    altText: string
}> = ({
    url,
    altText
}) => {
        console.log("name", altText, "url", url)
        if (!url)
            return <img src="cheese-icon.png" style={{ width: 100, height: 100 }} />
        const { loading, blobUrl } = useImageFetch(url);
        return (
            <div style={{ border: `1px solid black` }}>
                {loading || blobUrl === null
                    ? <h2>Loading...</h2>
                    : <img src={blobUrl} alt={altText} style={{ width: 100, height: 100 }} />}
            </div>
        );
    }

export default LoadableImage;