"use client";
import { InputHTMLAttributes, KeyboardEvent } from "react";

export type InputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "autoFocus" | "defaultValue" | "onBlur" | "placeholder"
> & {
  label: string;
} & Partial<{
    onSubmit: (value: string) => void;
  }>;

export function Input({
  autoFocus,
  defaultValue,
  label,
  onBlur,
  placeholder,
  onSubmit,
}: Props) {
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (typeof onSubmit !== "function") return;
    if (event.key === "Enter") {
      const value = event.currentTarget.value.trim();
      onSubmit(value);
    }
  };

  return (
    <div className="input-container">
      <input
        className="new-todo"
        id="todo-input"
        type="text"
        autoFocus={autoFocus}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      <label className="visually-hidden" htmlFor="todo-input">
        {label}
      </label>
    </div>
  );
}
