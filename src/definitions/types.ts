import { Cheese } from "./swagger.js";

export type CheeseInput = Omit<Cheese, "id">;