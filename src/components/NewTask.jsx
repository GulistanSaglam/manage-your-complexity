import Input from './Input';
import { useRef } from 'react';
import Modal from './Modal';

export default function NewTask({ onAdd, onCancel }) {
   const modal = useRef();

   const title = useRef();
   const description = useRef();
   const dueDate = useRef();

   function handleSave(){
     const enteredTitle = title.current.value;
     const enteredDescription = description.current.value;
     const enteredDueDate = dueDate.current.value;
    
     if(enteredTitle.trim() === '' || 
        enteredDescription.trim() === '' || 
        enteredDueDate.trim() === '')
        {
            modal.current.open();
            return;
        }

     onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate
     });
   }

    return (
    <>
    <Modal ref={modal} buttonTitle="Okay">
     <h2 className='text-xl font-bold text-stone-600 my-4'>Invalid Input</h2>
     <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p> 
    </Modal>
     <div className='w-[45rem] mt-16 ml-8'>
        <menu className='flex items-center justify-end gap-4 my-4'>

           <li>
             <button 
              className='bg-stone-50 text-pink-500 hover:bg-stone-100 hover:text-pink-600 px-6 py-2 rounded-md '
              onClick={onCancel}>
              Cancel
             </button>
            </li> 
           <li>
            <button 
             className=' bg-pink-500 text-stone-50  hover:bg-pink-600 hover:text-stone-100 px-6 py-2 rounded-md'
             onClick={handleSave}>
              Save
             </button>
          </li> 
           
        </menu>
        <div>
            <Input type="text" ref={title} label="Title" />
            <Input ref={description} label="Description" isTextarea={true} />
            <Input type="date" ref={dueDate} label="Due Date" />
        </div>
    </div>
    </>
    );
}