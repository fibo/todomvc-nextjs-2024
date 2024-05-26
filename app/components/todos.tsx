"use client";
import { useReducer } from "react";
import { Header } from "@/app/components/header";
import { Main } from "@/app/components/main";
import { Footer } from "@/app/components/footer";
import { reducer } from "@/app/reducer";

export function Todos() {
  const [state, dispatch] = useReducer(reducer, { todos: [] });

  return (
    <>
      <Header dispatch={dispatch} />

      <Main dispatch={dispatch} todos={state.todos} />

      <Footer dispatch={dispatch} todos={state.todos} />
    </>
  );
}
