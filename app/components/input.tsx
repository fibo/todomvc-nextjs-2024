"use client";
import { InputHTMLAttributes, KeyboardEvent } from "react";
import { Todo } from "@/app/models";

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "onKeyDown" | "type" | "id"
> & {
  label: string;
} & Partial<{
    submitItem: (title: Todo["title"]) => void;
  }>;

export function Input({ label, submitItem, ...props }: InputProps) {
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (typeof submitItem !== "function") return;
    if (event.key === "Enter") {
      const value = event.currentTarget.value.trim();
      submitItem(value);
    }
  };

  return (
    <div className="input-container">
      <input
        className="new-todo"
        id="todo-input"
        type="text"
        onKeyDown={onKeyDown}
        {...props}
      />
      <label className="visually-hidden" htmlFor="todo-input">
        {label}
      </label>
    </div>
  );
}
