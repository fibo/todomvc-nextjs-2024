"use client";
import { ChangeEventHandler, useMemo } from "react";
import { useRouter } from "next/navigation";
import axios from "@/app/axios";
import { useFilter } from "@/app/hooks/useFilter";
import { Todo } from "@/app/models";
import { Item } from "@/app/components/item";

type Props = {
  todos: Todo[];
};

export function Main({ todos }: Props) {
  const router = useRouter();

  const filter = useFilter();

  const { checked, visibleTodos } = useMemo(() => {
    const visibleTodos = todos.filter((todo) => {
      if (filter === "completed") return todo.completed;
      if (filter === "active") return !todo.completed;
      // filter === "all"
      return true;
    });
    return {
      checked: visibleTodos.every((todo) => todo.completed),
      visibleTodos,
    };
  }, [filter, todos]);

  const toggleAll: ChangeEventHandler<HTMLInputElement> = async (event) => {
    await axios
      .post("/api/action", {
        type: "TOGGLE_ALL",
        data: {
          completed: event.currentTarget.checked,
        },
      })
      .then(() => {
        router.refresh();
      });
  };

  return (
    <main className="main">
      {visibleTodos.length > 0 ? (
        <div className="toggle-all-container">
          <input
            className="toggle-all"
            type="checkbox"
            checked={checked}
            onChange={toggleAll}
          />
          <label className="toggle-all-label" htmlFor="toggle-all">
            Toggle All Input
          </label>
        </div>
      ) : null}

      <ul className="todo-list">
        {visibleTodos.map((todo, index) => (
          <Item key={todo.id} todo={todo} index={index} />
        ))}
      </ul>
    </main>
  );
}
