"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useFilter } from "@/app/hooks/useFilter";
import { Todo } from "@/app/models";

type Props = {
  todos: Todo[];
};

export function Footer({ todos }: Props) {
  const filter = useFilter();
  if (!filter) redirect("/");

  const activeTodos = () => todos.filter((todo) => !todo.completed);

  const removeCompleted = () => {
    //dispatch({ type: "REMOVE_COMPLETED_ITEMS" });
  };

  const cannotRemoveCompleted = activeTodos().length === todos.length;

  const summary = `${activeTodos.length} ${activeTodos.length === 1 ? "item" : "items"} left!`;

  if (todos.length === 0) return null;

  return (
    <footer className="footer">
      <span className="todo-count">{summary}</span>

      <ul className="filters">
        <li>
          <Link href="/" className={filter === "all" ? "selected" : undefined}>
            All
          </Link>
        </li>

        <li>
          <Link
            href="/active"
            className={filter === "active" ? "selected" : undefined}
          >
            Active
          </Link>
        </li>

        <li>
          <Link
            href="/completed"
            className={filter === "completed" ? "selected" : undefined}
          >
            Completed
          </Link>
        </li>
      </ul>

      <button
        className="clear-completed"
        disabled={cannotRemoveCompleted}
        onClick={removeCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}
