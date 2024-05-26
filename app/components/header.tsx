import { ChangeEventHandler, useState } from "react";
import { Input } from "@/app/components/input";
import { DispatchAction } from "@/app/reducer";

type Props = {
  dispatch: DispatchAction;
};

export function Header({ dispatch }: Props) {
  const [newTitle, setNewTitle] = useState("");

  const submitItem = (title: string) => {
    dispatch({ type: "ADD_ITEM", data: { title } });
    setNewTitle("");
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNewTitle(event.currentTarget.value);
  };

  return (
    <header className="header">
      <h1>todos</h1>

      <Input
        label="New Todo Input"
        placeholder="What needs to be done?"
        autoFocus
        submitItem={submitItem}
        value={newTitle}
        onChange={onChange}
      />
    </header>
  );
}
