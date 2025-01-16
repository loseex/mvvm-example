import { Todo } from "@/models/todo.model";
import { makeAutoObservable } from "mobx";

class TodoStore {
  constructor() {
    makeAutoObservable(this);
  }

  array: Todo[] = this.init();

  /**
   * Метод для добавления новой задачи в список.
   * @param { Todo } payload
   * @returns void
   */
  create(payload: Todo): void {
    this.array.push(payload);
    this.save();
  }

  /**
   * Метод для сохранения данных в localStorage.
   * @returns void
   */
  save(): void {
    const string = JSON.stringify(this.array);
    localStorage.setItem("todo-array", string);
  }

  /**
   * Метод для очистки массива.
   * @returns void
   */
  clear(): void {
    this.array = [];
    this.save();
  }

  /**
   * Метод для получения данных из localStorage.
   * @returns void
   */
  private init() {
    const local = localStorage.getItem("todo-array");
    return local ? JSON.parse(local!) : [];
  }
}

export default new TodoStore();
