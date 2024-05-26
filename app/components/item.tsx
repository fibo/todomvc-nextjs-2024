"use client";
import { ChangeEventHandler, useState } from "react";
import { Todo } from "@/app/models";
import { Input, InputProps } from "@/app/components/input";

type Props = {
  index: number;
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

  const toggleItem: ChangeEventHandler<HTMLInputElement> = () => {
    // dispatch({ type: "TOGGLE_ITEM", data: { id } });
  };

  const removeItem = (id: Todo["id"]) => {
    // dispatch({ type: "REMOVE_ITEM", data: { id } });
  };

  const updateItem = (id: Todo["id"], title: Todo["title"]) => {
    // dispatch({ type: "UPDATE_ITEM", data: { id, title } });
  };

  const submitItem: NonNullable<InputProps["submitItem"]> = (title) => {
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
            submitItem={submitItem}
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
