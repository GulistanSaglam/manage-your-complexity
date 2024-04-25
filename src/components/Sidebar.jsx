export default function Sidebar({onStartAddTask, tasks, onSelectTask, selectedTaskId}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-purple-600 text-stone-50 md:w-80 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-slate-200">Your Tasks</h2>
            <div>
                <button onClick={onStartAddTask} className="px-4 py-2 text-xs md:text-base rounded-md bg-purple-400 text-stone-200 hover:bg-purple-500 hover:text-stone-300">
                   + Add Task
                </button>
            </div>
            <ul className="mt-4">
                {tasks.map(task => {
                    let cssStyles = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-pink-600 hover:bg-stone-200";
                    if(task.id === selectedTaskId){
                        cssStyles += ' hover:bg-stone-200 hover:text-pink-600'
                    } else {
                        cssStyles+= ' text-stone-200'
                    }
                    return(
                    <li key={task.id}>
                        <button 
                          className={cssStyles}
                          onClick={() => onSelectTask(task.id)}
                         >
                            {task.title}
                        </button>
                    </li>
                    );
                })}
            </ul>
        </aside>
    );
}