import { Dispatch, Reducer } from "react";
import { newId, Todo } from "./models";

export type Action =
  | {
      type: "ADD_ITEM";
      data: Pick<Todo, "title">;
    }
  | {
      type: "TOGGLE_ITEM";
      data: Pick<Todo, "id">;
    }
  | {
      type: "REMOVE_ALL_ITEMS";
    }
  | {
      type: "REMOVE_COMPLETED_ITEMS";
    }
  | {
      type: "UPDATE_ITEM";
      data: Pick<Todo, "id" | "title">;
    };

export type DispatchAction = Dispatch<Action>;

export type State = {
  todos: Todo[];
};

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
      };
    }

    case "TOGGLE_ITEM": {
      return {
        ...state,
      };
    }

    case "REMOVE_ALL_ITEMS": {
      return {
        ...state,
      };
    }

    case "REMOVE_COMPLETED_ITEMS": {
      return {
        ...state,
      };
    }

    case "UPDATE_ITEM": {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
