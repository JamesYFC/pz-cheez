import { CheeseInput } from "../definitions/types.js";
import { URL } from "url";

const stringIsValidUrl = (url: string): boolean => {
    try {
        const myURL = new URL(url);
    } catch (e) {
        console.log(`Error while validating url ${url}: ${e}`);
        return false;
    }
    return true;
};

export function isCheeseInput(obj: any): obj is CheeseInput {
    return (
        typeof obj === "object" &&
        typeof obj.name === "string" &&
        typeof obj.price === "number" &&
        typeof obj.color === "string" &&
        typeof obj.imageUrl === "string"
        && stringIsValidUrl(obj.imageUrl)
    );
}
