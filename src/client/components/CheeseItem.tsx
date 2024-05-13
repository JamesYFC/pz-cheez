import { Cheese } from "../../definitions/swagger";
import LoadableImage from "./LoadableImage";

export const CheeseItem: React.FC<{
    cheese: Cheese,
    quantity: number,
    onQuantityChange: (value: number) => void
}> = ({
    cheese,
    quantity,
    onQuantityChange: onValueChange
}) => {
    // todo show colour in a more interesting way
    return (
        <div className=" bg-slate-100 border border-slate-400 rounded-lg p-2 m-3 flex flex-col items-center space-y-1">
            <LoadableImage
                className="my-1 w-32 h-32 object-cover h-f"
                url={cheese.imageUrl}
                altText={"image of " + cheese.name} />
            <h2 className="text-lg font-semibold">{cheese.name}</h2>
            <div className="text-slate-500">{cheese.color}</div>
            <form className="w-24 flex flex-col items-end">
                <div className="flex items-baseline justify-end">
                    <input
                        className="bg-transparent border-b border-slate-600 w-1/2 text-right"
                        type="number"
                        placeholder="0"
                        aria-label="Cheese quantity"
                        value={quantity}
                        onChange={(e) => onValueChange(e.target.valueAsNumber)}
                    />
                    <p className="text-xs ml-1">kg</p>
                </div>
                <div className="flex items-baseline justify-end">
                    <p className="">x ${cheese.price.toFixed(2)}</p>
                    <p className="text-xs ml-1">/ kg</p>
                </div>
            </form>
        </div>
    );
}

export default CheeseItem;