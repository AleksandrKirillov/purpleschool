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

    updateTask: function (id, title, priority) {
        const index = this.tasks.findIndex((object) => object.id === id);
        if (index >= 0) {
            if (title) {
                this.tasks[index].title = title;
            };
            if (priority) {
                this.tasks[index].priority = priority;
            };
        }
    },

    sortPriority: function () {
        this.tasks.sort((objectA, objectB) => {
            return objectA.priority - objectB.priority;
        });
    },
};

console.log(toDoList);
const task1 = {
    title: "Убрать вещи",
    priority: 2,
};
const task2 = {
    title: "Почистить ванну",
    priority: 1,
};
toDoList.addTask(task1);
toDoList.addTask(task2);
toDoList.deleteTask(2);
toDoList.updateTask(1, "test", 1);
toDoList.sortPriority();
console.log(toDoList);
