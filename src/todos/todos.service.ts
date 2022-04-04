import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodosService {
  private todos: any[] = [];

  getTodos(title: string, sequence: number): any[] {
    const todos = this.todos.filter((todo) => {
      let isMatch = true;
      if (title && todo.title != title) {
        isMatch = false;
      }

      if (sequence && todo.sequence != sequence) {
        isMatch = false;
      }

      return isMatch;
    })

    return todos;
  }

  getTodo(id: string) {
    const todoIdx = this.findTodoById(id);
    return this.todos[todoIdx];
  }

  createTodo(title: string, sequence: number) {
    this.todos.push({
      id: uuidv4(),
      title,
      sequence,
    });
  }

  updateTodo(id: string, title: string, sequence: number) {
    const todoIdx = this.findTodoById(id);
    this.todos[todoIdx].title = title;
    this.todos[todoIdx].sequence = sequence;
  }

  findTodoById(id: string) {
    const todoIdx = this.todos.findIndex((todo) => todo.id === id);
    if (todoIdx === -1) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }

    return todoIdx;
  }

  deleteTodo(id: string) {
    const todoIdx = this.findTodoById(id);
    this.todos.splice(todoIdx, 1); 
  }
}