import { Dispatch, Reducer } from "react";
import { Todo } from "@/app/models/todo";

type Action =
  | {
      type: "ADD_ITEM";
      data: Pick<Todo, "title">;
    }
  | {
      type: "REMOVE_COMPLETED_ITEMS";
    };

export type DispatchAction = Dispatch<Action>;

type State = {
  todos: Todo[];
};

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
