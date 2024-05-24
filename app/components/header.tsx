import { FC } from "react";
import { Input } from "./input";

export const Header: FC = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      <Input
        label="New Todo Input"
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
};
