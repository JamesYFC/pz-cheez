import useImageFetch from "../hooks/useImageFetch";

const LoadableImage: React.FC<{
    url: string | undefined,
    altText: string,
    className?: string
}> = ({
    url,
    altText,
    className
}) => {
        console.log("name", altText, "url", url)
        if (!url)
            return <img
                src="cheese-icon.png"
                className={className}
            />
        const { loading, blobUrl } = useImageFetch(url);
        return (
            loading || blobUrl === null
                ? <h2>Loading...</h2>
                : <img
                    src={blobUrl}
                    alt={altText}
                    className={className}
                />
        );
    }

export default LoadableImage;