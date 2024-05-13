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
    return (
        <div style={{ border: `1px solid black`, padding: 10, margin: 10 }}>
            <h2 className="text-lg font-semibold">{cheese.name}</h2>
            <LoadableImage url={cheese.imageUrl} altText={"image of " + cheese.name} />
            <div>{cheese.color}</div>
            <form className="w-full max-w-sm">
                <input
                    className="bg-transparent border-b border-slate-600 w-1/4 text-right mr-4"
                    type="number"
                    placeholder="0"
                    aria-label="Cheese quantity"
                    value={quantity}
                    onChange={(e) => onValueChange(e.target.valueAsNumber)}
                />
                x ${cheese.price.toFixed(2)} / kg
                <div className="flex items-center justify-end">
                    <div className="mr-2">= ${(cheese.price * quantity).toFixed(2)}</div>
                    <button
                        className="font-semibold py-2 px-3 rounded bg-slate-600 hover:bg-slate-500 text-slate-50"
                        disabled
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CheeseItem;