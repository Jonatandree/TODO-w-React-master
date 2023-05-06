import { useState , useEffect, ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';

import { IPanels } from './interfaces/IunPanel' 
import TaskForm from './components/TaskForm'
import PanelForm from './components/PanelForm'
import { ITask } from './interfaces/ITask' 
import ListPanel from './components/ListPanel' 
import Panel from './components/Panel'
import { IPanel } from './interfaces/IPanel';
import Filtro from './components/Filtro';


function App() {
  const [id, setId] = useState<number>(0)
  const [task, setTask] = useState<ITask>({ "status" : "TODO", "id": 0 })
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [teams, setTeams] = useState<string[]>(["Development", "QA", "PMs", "BI"])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTask({...task, [e.target.name]: e.target.value})
  }
  const changeStatus = (id: number, status: string) => {
    const newTaskList = taskList.map( task => {
      if(task.id === id) {
        task.status = status
      }
      return task
    })
    setTaskList(newTaskList)
  }

  const deleteTask = (id: number) => {
    const newTaskList = taskList.filter( task => task.id !== id )
    setTaskList(newTaskList)
  }

  const addTask = () => {   
    
    setTaskList([...taskList, task])
    const newId: number = id + 1
    setId(newId)
    setTask({ 
      "id" : newId
      , "status" : "TODO" 
      , "name" : "" 
      , "team" : "" 
      , "hours" : 0 
    })
  }




















  const [idp, setIdp] = useState<number>(4)
  const [panel, setPanel] = useState<IPanels>({ "status" : "TODO", "id": 4, "name": "TODO" })
  const [panelList, setPanelList] = useState<IPanels[]>([ { "status" : "TODO", "id":1, "name":"TODO" },{ "status" : "In Progress", "id":2, "name":"In Progress" },{ "status" : "Completed", "id":3, "name":"Completed" }])//aqui inyectamos los nuevos paneles y dejalos el de TODO asignado

  const handleInputChangep = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPanel({...panel, [e.target.name]: e.target.value})
  }


  const addPanel = () => {   
    
    setPanelList([...panelList, panel]) 
    const newIdp: number = idp + 1
    setIdp(newIdp)
    setPanel({ "id" : newIdp
    , "status" : ""
    , "name" : "" })
  }


  const changeStatuss = (idp: number, status: string) => {

    const newPanelList = panelList.map( panel => {
      if(panel.id === idp) {
        panel.status = status
        console.log(status)
      }
      return panel
    })
    setPanelList(newPanelList)
  }

  const deletePanel = (idp: number) => {
    const newPanelList = panelList.filter( task => task.id !== idp )
    setPanelList(newPanelList)
  }

  return (
    <div className="App">
      

      <header>
          <h1>TODO List</h1>
      </header>

      <div className="container">
      <h1>Agregar nuevo Panel</h1>
        <PanelForm 
            panel={panel} 
            onChangeInput={handleInputChangep}
            onSave={addPanel}             
        /> 
          <h1>Agregar nueva Tarea</h1>
          <TaskForm 
            task={task} 
            teams={teams} 
            onChangeInput={handleInputChange}
            onChangeSelect={handleSelectChange}
            onSave={addTask}             
        />   

        <h1>Filtro</h1>

        <Filtro
            task={task} 
            teams={teams} 
            onChangeSelect={handleSelectChange}
           
        />

        <div className="columnas">
          <ListPanel 
            panels={panelList}
            tasks={taskList}
            changeStatuss={changeStatuss}
            deletePanel={deletePanel}

            changeStatus={changeStatus}
            deleteTask={deleteTask} panel={panel} 
          />
        </div>

        
      </div>
    </div>
  );
}

export default App;
