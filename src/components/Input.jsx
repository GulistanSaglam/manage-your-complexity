import { forwardRef } from 'react';

const Input = forwardRef( function Input({label, isTextarea, ...props}, ref) {
    const styles = "w-full p-1 border-b-2 rounded-sm border-stone-200 bg-stone-100 text-stone-600 focus:outline-none focus:border-pink-600";

    return <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-600">{label}</label>
        {isTextarea ? 
        <textarea ref={ref} className={styles} {...props}/> : <input ref={ref} className={styles} {...props}/> }
    </p>
});

export default Input;