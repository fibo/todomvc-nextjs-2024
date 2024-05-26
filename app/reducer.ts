import { Dispatch, Reducer } from "react";
import { Todo } from "@/app/models/todo";

export type Action =
  | {
      type: "ADD_ITEM";
      data: Pick<Todo, "title">;
    }
  | {
      type: "REMOVE_COMPLETED_ITEMS";
    };

export type DispatchAction = Dispatch<Action>;

export type State = {
  todos: Todo[];
};

const newId = () =>
  "000000".replace(/0/g, () =>
    (Math.floor(Date.now() + Math.random() * 16) % 16).toString(16),
  );

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        todos: state.todos.concat({
          id: newId(),
          title: action.data.title,
          completed: false,
        }),
      };
    }
    default:
      return state;
  }
};
