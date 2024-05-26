"use client";
import { useReducer } from "react";
import { Header } from "@/app/components/header";
import { Main } from "@/app/components/main";
import { Footer } from "@/app/components/footer";
import { reducer } from "@/app/reducer";
import { WebStorage } from "@/app/webStorage";

const storage = new WebStorage();

export function Todos() {
  const [state, dispatch] = useReducer(reducer, { todos: storage.todos });

  return (
    <>
      <Header dispatch={dispatch} />

      <Main dispatch={dispatch} todos={state.todos} />

      <Footer dispatch={dispatch} todos={state.todos} />
    </>
  );
}
