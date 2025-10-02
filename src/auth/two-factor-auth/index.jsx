// import React from 'react'
// import { FormDiv, QrForm } from './style'
// import { useForm } from 'react-hook-form'

// const TwoFactorAuth = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm()

//     const onSubmit = (data) => console.log(data)

//     return (
//         <div>

//             <FormDiv>
//                 <div className='FormBox'>
//                     <h1 className='FormH1'>Two Factor Authentication</h1>

//                     <div className='middiv'>
//                         <div className='QRBox'>
//                             
//                         </div>
//                     </div>

//                     <form onSubmit={handleSubmit(onSubmit)}>


//                         <QrForm>
//                             <div className='Formdiv'>
//                                 <div className='flex-col'>
//                                     {/* <label htmlFor='' className='Label'>Code</label> */}
//                                     <input type="" placeholder='Code' className='qrInput'
//                                         {...register("code", { required: 'enter your password' })} />
//                                     <div className='FormError'>
//                                         {errors.code && <span>Code is required</span>}
//                                     </div>

//                                     <button type='submit' className='Btn'>Enter</button>

//                                 </div>
//                             </div>

//                         </QrForm>
//                     </form>
//                 </div>
//             </FormDiv>

//         </div>
//     )
// }

// export default TwoFactorAuth