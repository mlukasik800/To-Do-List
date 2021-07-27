import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Task from './Task';

class App extends Component {
  counter = 9

  state = { 
    tasks: [
      {
        id: 0,
        text:"Zagrać wreszcie w Wiedźmina 3",
        date:'2021-02-15',
        important:false,
        active:true,
        finishDate:true
      },
      {
        id: 1,
        text:"Nauczyć się TypeScript",
        date:'2022-02-15',
        important:true,
        active:true,
        finishDate:true
      },
      {
        id: 2,
        text:"Nauczyć się NodeJS",
        date:'2021-09-15',
        important:true,
        active:false,
        finishDate:true
      },
      {
        id: 3,
        text:"Ogarnąć flexbox i grid",
        date:'2021-10-15',
        important:false,
        active:false,
        finishDate:true
      },
      {
        id: 4,
        text:"Nauczyc się JS",
        date:'2021-12-31',
        important:true,
        active:true,
        finishDate:true
      },
      {
        id: 5,
        text:"Nauczyć się React",
        date:'2021-11-30',
        important:true,
        active:true,
        finishDate:true
      },
      {
        id: 6,
        text:"Ogarnąć HTML",
        date:'2021-10-15',
        important:false,
        active:true,
        finishDate:true
      },
      {
        id: 7,
        text:"Ogarnąć CSS",
        date:'2021-11-15',
        important:false,
        active:true,
        finishDate:true
      },
     
    ]
   }

   deleteTask=(id)=>{
     console.log("delete elementu o id " + id);
    //  const tasks = [...this.state.tasks];
    //  const index = tasks.findIndex(task => task.id === id);
    //  tasks.splice(index, 1);
    // //  console.log(tasks)
    //  this.setState({
    //    tasks:tasks
    //  })

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    })
   }



   changeTaskStatus=(id)=>{
     console.log("Change w stanie elementu o id " + id)
     const tasks = Array.from(this.state.tasks);
     tasks.forEach(task => {
       if(task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime()
       }
     })
     this.setState({
       tasks
     })
   }

   addTask=(text, date, important)=>{
     const task ={
      id: this.counter,
      text: text,
      date:date,
      important:important,
      active:true,
      finishDate:true
     }
     this.counter++
     this.setState(prevState=>({
      tasks:[...prevState.tasks, task]
     }))
     return true
   }

  render() { 
    return ( 
      <div className="App">
      <AddTask  add={this.addTask}/>
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      {/* // <Task > */}
      </div>
     );
  }
}
 
export default App;