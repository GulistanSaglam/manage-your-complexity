import { createPortal } from "react-dom"
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal ({children, buttonTitle}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
           open() {
             dialog.current.showModal();
           }
        };
    });

    return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
       {children}
       <form method="dialog" className="mt-4 text-right">
        <button className= "bg-pink-500 text-stone-50  hover:bg-pink-600 hover:text-stone-100 px-6 py-2 rounded-md">{buttonTitle}</button>
       </form>
    </dialog>, document.getElementById('modal-root')
    );
});

export default Modal;