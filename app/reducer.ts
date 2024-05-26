import { Dispatch, Reducer } from "react";
import { newId, Todo } from "./models";

export type Action =
  | {
      type: "ADD_ITEM";
      data: Pick<Todo, "title">;
    }
  | {
      type: "TOGGLE_ALL";
      data: Pick<Todo, "completed">;
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
      type: "REMOVE_ITEM";
      data: Pick<Todo, "id">;
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
        todos: state.todos.concat({
          id: newId(),
          title: action.data.title,
          completed: false,
        }),
      };
    }

    case "TOGGLE_ALL": {
      const { completed } = action.data;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.completed !== completed) return { ...todo, completed };
          return todo;
        }),
      };
    }
    case "TOGGLE_ITEM": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.data.id)
            return { ...todo, completed: !todo.completed };
          return todo;
        }),
      };
    }

    case "REMOVE_ALL_ITEMS": {
      return {
        ...state,
        todos: [],
      };
    }

    case "REMOVE_COMPLETED_ITEMS": {
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    }

    case "REMOVE_ITEM": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.data.id),
      };
    }

    case "UPDATE_ITEM": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.data.id)
            return { ...todo, title: action.data.title };
          return todo;
        }),
      };
    }

    default:
      return state;
  }
};
