import complexity from '../assets/complexity.jpg';

export default function NothingSelected({onStartAddTask}) {
 return (
    <div className="mt-2 text-center w-2/3">
        <img src={complexity} alt="complexity" className='w-124 h-72 object-contain mx-auto'/>
        
        <h2 className='text-xl font-bold text-stone-600 my-4'>Still Thinking...</h2>
        <p className='text-stone-600 mb-4'>Jump any of your tasks or get started with the first task you think!</p>
       
        <p className='mt-8'>
            <button onClick={onStartAddTask} 
            className="px-4 py-2 text-xs md:text-base rounded-md bg-purple-400 text-stone-50 hover:bg-purple-500 hover:text-stone-100"
            >Create new task</button>
        </p>

    </div>
 );
}
