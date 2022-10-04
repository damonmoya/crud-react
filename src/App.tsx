import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './interfaces/Task';
import logo from './logo.svg';
import {v4} from 'uuid';

interface Props {
  title?: string;
}

export function App({title}: Props) {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: v4(),
      title: 'Task 1',
      description: 'Task 1 description',
      completed: false
    }
  ]);

  const addANewTask = (task: Task) => setTasks([...tasks, {...task, id: v4(), completed: false}]);

  const deleteATask = (id: string) => setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="App">

      <nav className="navbar bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand text-white">
            <img src={logo} style={{width: '4rem'}} alt="logo" />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>

      <main className="container p-4">

        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask} />
          </div>

          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteATask={deleteATask} />
            </div>
          </div>
        </div>

      </main>
      

    </div>
    );
}