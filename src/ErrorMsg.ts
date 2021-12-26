import { ToastContainer, toast } from 'react-toastify';

// eslint-disable-next-line import/no-anonymous-default-export
export default (ErrorMsg:string)=>{toast.error(ErrorMsg, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })}