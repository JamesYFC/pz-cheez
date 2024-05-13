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
            return <img
                src="cheese-icon.png"
                className="my-1 w-32 h-32"
            />
        const { loading, blobUrl } = useImageFetch(url);
        return (
            loading || blobUrl === null
                ? <h2>Loading...</h2>
                : <img
                    src={blobUrl}
                    alt={altText}
                    className="my-1 w-32 h-32"
                />
        );
    }

export default LoadableImage;