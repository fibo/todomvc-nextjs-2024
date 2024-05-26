import read from "read-file-utf8";
import write from "write-file-utf8";
import { Todo } from "@/app/models";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await read<{ todos: Todo[] }>("db.json");
    return Response.json(data.todos);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      const todos: Todo[] = [];
      await write("db.json", JSON.stringify({ todos }));
      return Response.json(todos);
    }
  }
}
