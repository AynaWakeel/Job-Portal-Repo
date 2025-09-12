import { toast } from "react-toastify";


export const showSuccess =(msg)=> toast.success(msg, {
position: "bottom-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
// transition: Bounce,
});


export const showError =(msg)=> toast.error(msg, {
position: "bottom-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
// transition: Bounce,
});