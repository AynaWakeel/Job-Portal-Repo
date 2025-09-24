import React, { useState } from 'react'
import { Main, Overlay } from './style'
import Close from '../../assets/icons/fi_x.svg'
import { useForm } from 'react-hook-form'
import { useAdmin } from '../container/admin/useAdmin'
import { ToastContainer } from 'react-toastify'
import { showSuccess } from '../toasters'

const AddIndustryModal = ({ onClose, onDone }) => {

    const {
        register,
        reset,
        handleSubmit
    } = useForm()

    const [isDone, setIsDone] = useState(false)

    const { create_industry } = useAdmin()

    const onSubmit = (data) => {
        create_industry(data)
        reset()
        setIsDone(true)
        if (onDone) {
            onDone()
        }
        console.log(data)
        showSuccess("Industry Created successfully..")
    }


    return (
        <div>

            <Overlay>
                <Main>
                    <div>
                        <h2 className='TopHeading'>Add Industry</h2>
                        <div className='Circle' >
                            <img src={Close} alt='close' onClick={onClose} />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='spacetop'>
                            <label htmlFor='' className='Label'>Industry</label>
                            <input type="text" className='FormInput'
                                {...register("name")} />
                        </div>

                        <div className=' flexBtn'>
                            <button type='button' className='FormBtn' onClick={onClose}>{isDone ? "Back" : "Cancel"}</button>
                            <button type='submit' className='FormBtn' >Done</button>
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

export default AddIndustryModal