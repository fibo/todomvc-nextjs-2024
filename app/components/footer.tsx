import Link from "next/link";
import { redirect } from "next/navigation";
import { DispatchAction } from "@/app/reducer";
import { useFilter } from "@/app/hooks/useFilter";
import { Todo } from "@/app/models";

type Props = {
  dispatch: DispatchAction;
  todos: Todo[];
};

export function Footer({ dispatch, todos }: Props) {
  const filter = useFilter();
  if (!filter) redirect("/");

  const activeTodos = () => todos.filter((todo) => !todo.completed);

  const removeCompleted = () => dispatch({ type: "REMOVE_COMPLETED_ITEMS" });

  const cannotRemoveCompleted = activeTodos().length === todos.length;

  const summary = `${activeTodos.length} ${activeTodos.length === 1 ? "item" : "items"} left!`;

  if (todos.length === 0) return null;

  return (
    <footer className="footer">
      <span className="todo-count">{summary}</span>

      <ul className="filters">
        <li>
          <Link href="/">All</Link>
        </li>

        <li>
          <Link href="/active">Active</Link>
        </li>

        <li>
          <Link href="/completed">Completed</Link>
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
