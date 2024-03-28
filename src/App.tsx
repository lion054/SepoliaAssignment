import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Tasks from './components/Tasks'
import { TaskProps } from './utils/Types'

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  //sidebar data and user functions
  const onDeleteClick = () => {
    setTasks([]);
  };


  // tasks data and user functions

  return (
    <>
      <div className='min-h-[120vh]'>
        <Header />
        <div className='grid grid-cols-4 gap-4 w-full p-4'>
          <Sidebar
            tasks={tasks.length}
            onDeleteClick={onDeleteClick}
          />
          <div className='col-span-3'>
            <Tasks
              tasks={tasks}
              setTasks={setTasks}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
