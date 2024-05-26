import { Todo } from "@/app/models";
import { Header } from "@/app/components/header";
import { Main } from "@/app/components/main";
import { Footer } from "@/app/components/footer";
import axios from "@/app/axios";

export async function Todos() {
  const todos = (await axios
    .get("/api/todos")
    .then((res) => res.data)) as Todo[];

  return (
    <>
      <Header />

      <Main todos={todos} />

      <Footer todos={todos} />
    </>
  );
}
