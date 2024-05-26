import read from "read-file-utf8";
import write from "write-file-utf8";
import { Todo } from "@/app/models";
import { Action, reducer } from "@/app/reducer";

export async function POST(request: Request) {
  const action: Action = await request.json();
  const previousState = await read<{ todos: Todo[] }>("db.json");
  const nextState = reducer(previousState, action);
  await write("db.json", JSON.stringify(nextState));
  return Response.json(nextState);
}
