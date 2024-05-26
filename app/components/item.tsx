import { useState } from "react";
import { DispatchAction } from "@/app/reducer";
import { Todo } from "@/app/models/todo";
import { Input, InputProps } from "@/app/components/input";

type Props = {
  index: number;
  dispatch: DispatchAction;
  todo: Todo;
};

export function Item({ todo: { title, completed, id } }: Props) {
  const [isWritable, setIsWritable] = useState(false);

  const setWritable = () => {
    setIsWritable(true);
  };

  const setReadonly = () => {
    setIsWritable(false);
  };

  const toggleItem = () => {};
  const removeItem = (id: Todo["id"]) => {};
  const updateItem = (id: Todo["id"], title: Todo["title"]) => {};

  const onSubmit: NonNullable<InputProps["onSubmit"]> = (title) => {
    if (title.length === 0) removeItem(id);
    else updateItem(id, title);

    setIsWritable(false);
  };

  const onClickDestroy = () => {
    removeItem(id);
  };

  return (
    <li className={completed ? "completed" : undefined}>
      <div className="view">
        {isWritable ? (
          <Input
            onSubmit={onSubmit}
            label="Edit Todo Input"
            defaultValue={title}
            onBlur={setReadonly}
          />
        ) : (
          <>
            <input
              className="toggle"
              type="checkbox"
              checked={completed}
              onChange={toggleItem}
            />
            <label onDoubleClick={setWritable}>{title}</label>
            <button className="destroy" onClick={onClickDestroy} />
          </>
        )}
      </div>
    </li>
  );
}
