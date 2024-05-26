import { Dispatch, Reducer } from "react";
import { WebStorage } from "./webStorage";
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

const storage = new WebStorage();

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const todos = state.todos.concat({
        id: newId(),
        title: action.data.title,
        completed: false,
      });
      storage.todos = todos;
      return {
        ...state,
        todos,
      };
    }

    case "TOGGLE_ALL": {
      const { completed } = action.data;
      const todos = state.todos.map((todo) => {
        if (todo.completed !== completed) return { ...todo, completed };
        return todo;
      });
      storage.todos = todos;
      return {
        ...state,
        todos,
      };
    }
    case "TOGGLE_ITEM": {
      const todos = state.todos.map((todo) => {
        if (todo.id === action.data.id)
          return { ...todo, completed: !todo.completed };
        return todo;
      });
      storage.todos = todos;
      return {
        ...state,
        todos,
      };
    }

    case "REMOVE_ALL_ITEMS": {
      const todos: Todo[] = [];
      storage.todos = todos;
      return {
        ...state,
        todos,
      };
    }

    case "REMOVE_COMPLETED_ITEMS": {
      const todos = state.todos.filter((todo) => !todo.completed);
      storage.todos = todos;
      return {
        ...state,
        todos,
      };
    }

    case "REMOVE_ITEM": {
      const todos = state.todos.filter((todo) => todo.id !== action.data.id);
      storage.todos = todos;
      return {
        ...state,
        todos,
      };
    }

    case "UPDATE_ITEM": {
      const todos = state.todos.map((todo) => {
        if (todo.id === action.data.id)
          return { ...todo, title: action.data.title };
        return todo;
      });
      storage.todos = todos;
      return {
        ...state,
        todos,
      };
    }

    default:
      return state;
  }
};
