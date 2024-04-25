import { useState } from "react";

import NothingSelected from "./components/NothingSelected";
import Sidebar from "./components/Sidebar";
import NewTask from './components/NewTask';
import SelectedTask from "./components/SelectedTask";


function App() {
  
  const [tasksState, setTasksState] = useState({
    selectedTaskId: undefined,
    tasks:[]
  });

  function handleStartAddTask() {
    setTasksState(prevState => {
      return{
        ...prevState,
        selectedTaskId: null,
      };
    })
  }

  function handleAddedTask(taskData){
    setTasksState(prevState => {
      const newTask = {
        ...taskData,
        id: Math.random()
      };

      return{
        ...prevState,
        selectedTaskId: undefined, // Kaydettikten sonra sayfayı kapamak için
        tasks: [...prevState.tasks, newTask ]
      };
    });
  }


  function handleCancelAddTask() {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: undefined,
      };
    });
  }
 
  function handleSelectTask(id) {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: id,
      };
    });
  }

  function handleDeleteTask(){
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: undefined,
        tasks: prevState.tasks.filter(
          (task)=> task.id !== prevState.selectedTaskId
        ),
      };
    });
  }

  const selectedTask = tasksState.tasks.find(task => task.id === tasksState.selectedTaskId);

  let content = <SelectedTask task={selectedTask} onDelete={handleDeleteTask}/>;

  if(tasksState.selectedTaskId === null){
    content = <NewTask onAdd={handleAddedTask} onCancel={handleCancelAddTask}/>
  }else if(tasksState.selectedTaskId === undefined) {
    content = <NothingSelected onStartAddTask={handleStartAddTask}/>
  }

  return (
    <main className="h-screen flex gap-8">
    <Sidebar 
    onStartAddTask={handleStartAddTask} 
    tasks = {tasksState.tasks}
    onSelectTask= {handleSelectTask} 
    />
    {content}
    </main>
  );
}

export default App;
