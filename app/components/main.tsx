import { useMemo } from "react";
import { DispatchAction } from "@/app/reducer";
import { Todo } from "@/app/models/todo";
import { Item } from "@/app/components/item";

type Props = {
  dispatch: DispatchAction;
  todos: Todo[];
};

export function Main({ dispatch, todos }: Props) {
  const { checked, visibleTodos } = useMemo(() => {
    const visibleTodos = todos.filter((todo) => !todo.completed);
    return {
      checked: visibleTodos.every((todo) => todo.completed),
      visibleTodos,
    };
  }, [todos]);

  const toggleAll = () => {};

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
          <Item key={todo.id} todo={todo} dispatch={dispatch} index={index} />
        ))}
      </ul>
    </main>
  );
}
