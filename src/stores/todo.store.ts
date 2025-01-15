import { Todo } from "@/models/todo.model";
import { makeAutoObservable } from "mobx";

class TodoStore {
  private array: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Метод для получения всего массива.
   * @returns Список Todo
   */
  findAll(): Todo[] {
    return this.array;
  }

  /**
   * Метод для получения одного объекта из массива.
   * @param { number } id
   * @returns Todo
   */
  findOne(id: number): Todo {
    return this.array[id];
  }

  /**
   * Метод для добавления новой задачи в список.
   * @param { Todo } payload
   * @returns void
   */
  create(payload: Todo): void {
    this.array.push(payload);
  }

  /**
   * Метод для сохранения данных в localStorage.
   * @returns void
   */
  save(): void {
    const string = JSON.stringify(this.array);
    localStorage.setItem("data", string);
  }

  /**
   * Метод для получения данных из localStorage.
   * @returns void
   */
  init(): void {
    const local = localStorage.getItem("data");
    if (local) {
      const json: Todo[] = JSON.parse(local);
      this.array = json;
    }
    return void 0;
  }
}

export default new TodoStore();
