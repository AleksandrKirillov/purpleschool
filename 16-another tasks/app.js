"use strict";

const toDoList = {
  lastId: 1,
  tasks: [
    {
      title: "Помыть посуду",
      id: 1,
      priority: 3,
    },
  ],
  addTask: function (task) {
    this.lastId++;
    task.id = this.lastId;
    this.tasks.push(task);
  },

  deleteTask: function (id) {
    this.tasks = this.tasks.filter((object) => object.id !== id);
  },

  updateTask: function (id, field, value) {
    const index = this.tasks.findIndex((object) => object.id === id);
    if (index >= 0) {
      if (field) {
        this.tasks[index][field] = value;
      }
    }
  },

  sortPriority: function () {
    this.tasks.sort((objectA, objectB) => {
      return objectA.priority - objectB.priority;
    });
  },
};

const newTask = {
  lastId: 1,
  tasks: [
    {
      id: 1,
      title: "тест",
      desctiption: "описание",
      priority: 0,
    },
  ],
};

toDoList.addTask.call(newTask, {
  title: "Тестовый",
  desctiption: "Описание тестового",
  priority: 2,
});

toDoList.addTask.call(newTask, {
  name: "Тестовый2",
  desctiption: "Описание тестового2",
  priority: 0,
});

toDoList.deleteTask.call(newTask, 2);
toDoList.updateTask.call(newTask, 3, "title", "Проба пера");
toDoList.sortPriority.call(newTask);

console.log(newTask);
