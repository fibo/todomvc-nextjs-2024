"use client";
import { useReducer } from "react";
import { Main } from "./main";
import { Footer } from "./footer";

import { reducer } from "../reducer";

export function Todos() {
  const [state, dispatch] = useReducer(reducer, { todos: [] });

  return (
    <>
      <Main dispatch={dispatch} todos={state.todos} />
      <Footer dispatch={dispatch} todos={state.todos} />
    </>
  );
}
