import React from 'react'
import { Main, Overlay } from './style'
import Close from '../../assets/icons/fi_x.svg'

const AddIndustryModal = ({onClose}) => {
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
                    <form>
                        <div className='spacetop'>
                            <label htmlFor='' className='Label'>Industry</label>
                            <input type="text" className='FormInput' />
                        </div>
                    </form>

                    <div className=' flexBtn'>
                        <button type='submit' className='FormBtn' onClick={onClose}>Cancel</button>
                        <button type='submit' className='FormBtn'>Done</button>
                    </div>
                </Main>
            </Overlay>

        </div>
    )
}

export default AddIndustryModal