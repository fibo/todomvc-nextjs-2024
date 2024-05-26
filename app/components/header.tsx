import { Input } from "@/app/components/input";

export function Header() {
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
}
