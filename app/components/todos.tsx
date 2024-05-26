"use client";
import { useReducer } from "react";
import { Main } from "@/app/components/main";
import { Footer } from "@/app/components/footer";
import { reducer } from "@/app/reducer";

export function Todos() {
  const [state, dispatch] = useReducer(reducer, {
    todos: [
      {
        id: 1,
        title: "Todo 1",
        completed: false,
      },
    ],
  });

  return (
    <>
      <Main dispatch={dispatch} todos={state.todos} />

      <Footer dispatch={dispatch} todos={state.todos} />
    </>
  );
}
