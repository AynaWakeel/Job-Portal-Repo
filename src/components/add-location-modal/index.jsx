import React, { useState } from 'react'
import { Main, Overlay } from './style'
import Close from '../../assets/icons/fi_x.svg'
import { useForm } from 'react-hook-form'
import { useAdmin } from '../container/admin/useAdmin'
import { showSuccess } from '../toasters'
import { ToastContainer } from 'react-toastify'

const AddLocationModal = ({ onClose , onLoationDone }) => {
    const [isDone, setIsDone] = useState(false)

    const {
        register,
        reset,
        handleSubmit
    } = useForm()

    const { create_location } = useAdmin()

    const onSubmit = (data) =>{
        create_location(data)
        reset()
        setIsDone(true)
        if(onLoationDone){
            onLoationDone()
        }
        showSuccess("Location Created Successfully..")
        console.log(data)
    }

    return (
        <div>

            <Overlay>
                <Main>
                    <div>
                        <h2 className='TopHeading'>Add Location</h2>
                        <div className='Circle' >
                            <img src={Close} alt='close' onClick={onClose} />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='spacetop'>
                            <label htmlFor='' className='Label'>Location</label>
                            <input type="text" className='FormInput'
                                {...register("name")} />
                        </div>

                        <div className=' flexBtn'>
                            <button type='button' className='FormBtn' onClick={onClose}>{isDone ? "Back" : "Cancel"}</button>
                            <button type='submit' className='FormBtn'>Done</button>
                        </div>

                    </form>

                      <ToastContainer
                        position="bottom-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    // transition={Bounce}
                    />
                </Main>
            </Overlay>


        </div>
    )
}

export default AddLocationModal