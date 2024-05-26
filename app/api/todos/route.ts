import read from "read-file-utf8";
import { Todo } from "@/app/models";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await read<{ todos: Todo[] }>("db.json");
  return Response.json(data.todos);
}
