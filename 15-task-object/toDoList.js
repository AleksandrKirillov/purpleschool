'use strict';

const toDoList = {
    tasks: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 3
        }
    ],
    addTask: function(title, priority){
        
        let maxId = this.tasks
                    .map((object) => object.id )
                    .reduce((acc, val) => acc < val ? val : acc);

        maxId++;

        this.tasks.push({
            title: title,
            id:maxId,
            priority: priority
        });
    },

    deleteTask: function(id) {
        this.tasks = this.tasks.filter((object) => object.id !== id);
    },

    updateTask: function(id, title, priority) {
        const index = this.tasks.findIndex((object) => object.id === id );
        if(index < 0){
            return false;
        };

        if (title){
            this.tasks[index].title = title;
        }

        if(priority){
            this.tasks[index].priority = priority;
        }
    },

    sortPriority: function() {
        this.tasks.sort((objectA, objectB) => {
            return objectA.priority - objectB.priority;
        });
    }


}

console.log(toDoList);
toDoList.addTask('Убрать вещи', 2);
toDoList.addTask('Почистить ванну', 1);
console.log(toDoList);
toDoList.deleteTask(2);
toDoList.updateTask(1, 'test', 1);
toDoList.sortPriority();
console.log(toDoList);