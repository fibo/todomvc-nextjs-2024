import { Todo } from "@/app/models";

export class WebStorage {
  static todoStorageKey = "todos";

  get todos(): Todo[] {
    const storedData = localStorage.getItem(WebStorage.todoStorageKey);
    if (!storedData) return [];
    return JSON.parse(storedData);
  }

  set todos(data: Todo[]) {
    localStorage.setItem(WebStorage.todoStorageKey, JSON.stringify(data));
  }
}
