import { Item } from "./item";

export type Todo = Item & {
  completed: boolean;
  title: string;
};
