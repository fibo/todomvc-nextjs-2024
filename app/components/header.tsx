"use client";
import { ChangeEventHandler, useState } from "react";
import { Input } from "@/app/components/input";
import axios from "@/app/axios";

export function Header() {
  const [newTitle, setNewTitle] = useState("");

  const submitItem = async (title: string) => {
    await axios.post("/api/action", {
      type: "ADD_ITEM",
      data: { title },
    });
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
