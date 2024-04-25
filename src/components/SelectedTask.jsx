export default function SelectedTask({task, onDelete}) {

    const formattedDate = new Date(task.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    return (
    <div className="w-[45rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            
            <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">{task.title}</h1>
            <button 
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
            >Delete</button>
            </div>

            <p className="mb-4 text-stone-400">{formattedDate}</p>
            <p className="text-stone-600 whitespace-pre-wrap ">{task.description}N</p>

        </header>
    </div>
    );
}