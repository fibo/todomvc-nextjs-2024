import { DispatchAction } from "../reducer";
import { Todo } from "./item";

type Props = {
  dispatch: DispatchAction;
  todos: Todo[];
};

export function Footer({ dispatch, todos }: Props) {
  const activeTodos = () => todos.filter((todo) => !todo.completed);

  const removeCompleted = () => dispatch({ type: "REMOVE_COMPLETED_ITEMS" });

  if (todos.length === 0) return null;

  return (
    <footer className="footer" data-testid="footer">
      <span className="todo-count">{`${activeTodos.length} ${activeTodos.length === 1 ? "item" : "items"} left!`}</span>
      <ul className="filters" data-testid="footer-navigation">
        <li>
          <a href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button
        className="clear-completed"
        disabled={activeTodos.length === todos.length}
        onClick={removeCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}
