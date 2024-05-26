"use client";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";
import { Input } from "@/app/components/input";
import { useFilter } from "@/app/hooks/useFilter";
import axios from "@/app/axios";

export function Header() {
  const router = useRouter();

  const filter = useFilter();

  const [newTitle, setNewTitle] = useState("");

  const submitItem = async (title: string) => {
    await axios
      .post("/api/action", {
        type: "ADD_ITEM",
        data: { title },
      })
      .then(() => {
        setNewTitle("");
        router.refresh();
      });
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNewTitle(event.currentTarget.value);
  };

  const autoFocus = filter === "all";

  const onFocus = () => {
    if (filter !== "all") router.push("/");
  };

  return (
    <header className="header">
      <h1>todos</h1>

      <Input
        label="New Todo Input"
        placeholder="What needs to be done?"
        autoFocus={autoFocus}
        onFocus={onFocus}
        submitItem={submitItem}
        value={newTitle}
        onChange={onChange}
      />
    </header>
  );
}
