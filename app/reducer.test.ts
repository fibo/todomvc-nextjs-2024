import { describe, expect, test } from "vitest";
import { Action, State, reducer } from "./reducer";
import exp from "constants";

describe("reducer", () => {
  test("ADD_ITEM", () => {
    const title = "Title";
    const state: State = {
      todos: [],
    };
    const action: Action = {
      type: "ADD_ITEM",
      data: {
        title,
      },
    };
    const nextState = reducer(state, action);
    const todo = nextState.todos[0];
    expect(todo.completed).toBe(false);
    expect(todo.id).toBeDefined();
    expect(todo.title).toBe(title);
  });

  test("TOGGLE_ITEM", () => {
    const id = "abc123";
    const state: State = {
      todos: [{ id, title: "Title", completed: false }],
    };
    const action: Action = {
      type: "TOGGLE_ITEM",
      data: {
        id,
      },
    };
    const nextState = reducer(state, action);
    const todo = nextState.todos.find((todo) => todo.id === id);
    expect(todo?.completed).toBe(true);
  });

  test("REMOVE_ALL_ITEMS", () => {
    const state: State = {
      todos: [
        {
          id: "abc123",
          title: "Title",
          completed: false,
        },
      ],
    };
    const action: Action = {
      type: "REMOVE_ALL_ITEMS",
    };
    const nextState = reducer(state, action);
    expect(nextState.todos.length).toBe(0);
  });

  test("REMOVE_COMPLETED_ITEMS", () => {
    const state: State = {
      todos: [
        {
          id: "abc123",
          title: "Title 1",
          completed: false,
        },
        {
          id: "def456",
          title: "Title 2",
          completed: true,
        },
      ],
    };
    const action: Action = {
      type: "REMOVE_COMPLETED_ITEMS",
    };
    const nextState = reducer(state, action);
    expect(nextState.todos.length).toBe(1);
    expect(nextState.todos[0].id).toBe("abc123");
  });

  test("UPDATE_ITEM", () => {
    const newTitle = "New Title";
    const id = "abc123";
    const state: State = {
      todos: [
        {
          id,
          title: "Title 1",
          completed: false,
        },
      ],
    };
    const action: Action = {
      type: "UPDATE_ITEM",
      data: {
        id,
        title: newTitle,
      },
    };
    const nextState = reducer(state, action);
    expect(nextState.todos[0].title).toBe(newTitle);
  });
});