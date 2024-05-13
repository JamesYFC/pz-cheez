import { Cheese } from "../../definitions/swagger";
import LoadableImage from "./LoadableImage";

export const CheeseItem: React.FC<{ cheese: Cheese }> = ({ cheese }) => {
    return (
        <div style={{ border: `1px solid black`, padding: 10, margin: 10 }}>
            <h2>{cheese.name}</h2>
            <p>Price: ${cheese.price}</p>
            <LoadableImage url={cheese.imageUrl} altText={"image of " + cheese.name} />
        </div>
    );
}

export default CheeseItem;