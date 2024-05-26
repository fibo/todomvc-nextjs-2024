import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { Action, State, reducer } from "./reducer.js";

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
    assert.equal(todo.completed, false);
    assert.equal(todo.title, title);
    assert.ok(typeof todo.id === "string");
    assert.ok(todo.id.length > 0);
  });
});
