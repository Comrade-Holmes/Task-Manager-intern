
import {useState} from 'react'
import {motion,AnimatePresence} from 'framer-motion'
export default function App(){
const [task,setTask]=useState('')
const [tasks,setTasks]=useState([])
const addTask=()=>{if(!task)return;setTasks([{id:Date.now(),text:task},...tasks]);setTask('')}
return <div className="container"><div className="card"><h1>Task Manager</h1><div className="row"><input value={task} onChange={e=>setTask(e.target.value)} placeholder="Enter task"/><button onClick={addTask}>Add</button></div><AnimatePresence>{tasks.map(t=><motion.div key={t.id} className="task" initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} exit={{opacity:0}}>{t.text}</motion.div>)}</AnimatePresence></div></div>
}
