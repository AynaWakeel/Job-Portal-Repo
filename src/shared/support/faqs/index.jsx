import React, { useState } from 'react'
import { Answer, Faq, FaqSec, Overlay, Title } from './style'
import Plus from '../../../assets/icons/fi_plus.svg'
import Cross from '../../../assets/icons/fi_cross.svg'
import Footer from '../footer'

const Faqs = () => {
  const [ques1, setQues1] = useState(false)
  const Question1 = () => {
    setQues1(!ques1)
    setQues2(false)
    setQues3(false)
    setQues4(false)
    setQues5(false)
    setQues6(false)
    setQues7(false)
    setQues8(false)
    setQues9(false)
    setQues10(false)
    setQues11(false)
  }

  const [ques2, setQues2] = useState(false)
  const Question2 = () => {
    setQues1(false)
    setQues2(!ques2)
    setQues3(false)
    setQues4(false)
    setQues5(false)
    setQues6(false)
    setQues7(false)
    setQues8(false)
    setQues9(false)
    setQues10(false)
    setQues11(false)
  }

  const [ques3, setQues3] = useState(false)
  const Question3 = () => {
    setQues1(false)
    setQues2(false)
    setQues3(!ques3)
    setQues4(false)
    setQues5(false)
    setQues6(false)
    setQues7(false)
    setQues8(false)
    setQues9(false)
    setQues10(false)
    setQues11(false)
  }
  const [ques4, setQues4] = useState(false)
  const Question4 = () => {
    setQues1(false)
    setQues2(false)
    setQues3(false)
    setQues4(!ques4)
    setQues5(false)
    setQues6(false)
    setQues7(false)
    setQues8(false)
    setQues9(false)
    setQues10(false)
    setQues11(false)
  }

  const [ques5, setQues5] = useState(false)
  const Question5 = () => {
    setQues1(false)
    setQues2(false)
    setQues3(false)
    setQues4(false)
    setQues5(!ques5)
    setQues6(false)
    setQues7(false)
    setQues8(false)
    setQues9(false)
    setQues10(false)
    setQues11(false)
  }

  const [ques6, setQues6] = useState(false)
  const Question6 = () => {
    setQues1(false)
    setQues2(false)
    setQues3(false)
    setQues4(false)
    setQues5(false)
    setQues6(!ques6)
    setQues7(false)
    setQues8(false)
    setQues9(false)
    setQues10(false)
    setQues11(false)
  }

  const [ques7, setQues7] = useState(false)
  const Question7 = () => {
    setQues1(false)
    setQues2(false)
    setQues3(false)
    setQues4(false)
    setQues5(false)
    setQues6(false)
    setQues7(!ques7)
    setQues8(false)
    setQues9(false)
    setQues10(false)
    setQues11(false)
  }
  const [ques8, setQues8] = useState(false)
  const Question8 = () => {
    setQues1(false)
    setQues2(false)
    setQues3(false)
    setQues4(false)
    setQues5(false)
    setQues6(false)
    setQues7(false)
    setQues8(!ques8)
    setQues9(false)
    setQues10(false)
    setQues11(false)
  }

  const [ques9, setQues9] = useState(false)
  const Question9 = () => {
    setQues1(false)
    setQues2(false)
    setQues3(false)
    setQues4(false)
    setQues5(false)
    setQues6(false)
    setQues7(false)
    setQues8(false)
    setQues9(!ques9)
    setQues10(false)
    setQues11(false)
  }

  const [ques10, setQues10] = useState(false)
  const Question10 = () => {
    setQues1(false)
    setQues2(false)
    setQues3(false)
    setQues4(false)
    setQues5(false)
    setQues6(false)
    setQues7(false)
    setQues8(false)
    setQues9(false)
    setQues10(!ques1)
    setQues11(false)
  }
  const [ques11, setQues11] = useState(false)
  const Question11 = () => {
    setQues1(false)
    setQues2(false)
    setQues3(false)
    setQues4(false)
    setQues5(false)
    setQues6(false)
    setQues7(false)
    setQues8(false)
    setQues9(false)
    setQues10(false)
    setQues11(!ques11)
  }



  return (
    <div>
      <Overlay>

        <FaqSec>
          <h2 className='H2'>My Account</h2>
          <Faq>
            <Title onClick={Question1}>
              <div className='H4'>Donec in ipsum sit amet mi tincidunt lacinia ut id risus.</div>
              <div>

                {ques1 ? <img src={Plus} alt='plus' /> : <img src={Cross} alt='plus' />}
              </div>
            </Title>
            {ques1 &&
              <Answer>
                <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.</div>
              </Answer>

            }

          </Faq>

          <Faq>
            <Title onClick={Question2}>
              <div className='H4'>Donec in ipsum sit amet mi tincidunt lacinia ut id risus.</div>
              <div>

                {ques2 ? <img src={Plus} alt='plus' /> : <img src={Cross} alt='plus' />}
              </div>
            </Title>
            {ques2 &&
              <Answer>
                <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.</div>
              </Answer>

            }

          </Faq>

          <Faq>
            <Title onClick={Question3}>
              <div className='H4'>Donec in ipsum sit amet mi tincidunt lacinia ut id risus.</div>
              <div>

                {ques3 ? <img src={Plus} alt='plus' /> : <img src={Cross} alt='plus' />}
              </div>
            </Title>
            {ques3 &&
              <Answer>
                <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.</div>
              </Answer>

            }

          </Faq>

          <Faq>
            <Title onClick={Question4}>
              <div className='H4'>Donec in ipsum sit amet mi tincidunt lacinia ut id risus.</div>
              <div>

                {ques4 ? <img src={Plus} alt='plus' /> : <img src={Cross} alt='plus' />}
              </div>
            </Title>
            {ques4 &&
              <Answer>
                <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.</div>
              </Answer>
            }
          </Faq>

          <Faq>
            <Title onClick={Question5}>
              <div className='H4'>Donec in ipsum sit amet mi tincidunt lacinia ut id risus.</div>
              <div>

                {ques5 ? <img src={Plus} alt='plus' /> : <img src={Cross} alt='plus' />}
              </div>
            </Title>
            {ques5 &&
              <Answer>
                <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.</div>
              </Answer>

            }

          </Faq>

          <Faq>
            <Title onClick={Question6}>
              <div className='H4'>Donec in ipsum sit amet mi tincidunt lacinia ut id risus.</div>
              <div>

                {ques6 ? <img src={Plus} alt='plus' /> : <img src={Cross} alt='plus' />}
              </div>
            </Title>
            {ques6 &&
              <Answer>
                <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.</div>
              </Answer>

            }

          </Faq>

          <Faq>
            <Title onClick={Question7}>
              <div className='H4'>Donec in ipsum sit amet mi tincidunt lacinia ut id risus.</div>
              <div>

                {ques7 ? <img src={Plus} alt='plus' /> : <img src={Cross} alt='plus' />}
              </div>
            </Title>
            {ques7 &&
              <Answer>
                <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.</div>
              </Answer>

            }

          </Faq>

          <Faq>
            <Title onClick={Question8}>
              <div className='H4'>Donec in ipsum sit amet mi tincidunt lacinia ut id risus.</div>
              <div>

                {ques8 ? <img src={Plus} alt='plus' /> : <img src={Cross} alt='plus' />}
              </div>
            </Title>
            {ques8 &&
              <Answer>
                <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.</div>
              </Answer>
            }
          </Faq>

          <Faq>
            <Title onClick={Question9}>
              <div className='H4'>Donec in ipsum sit amet mi tincidunt lacinia ut id risus.</div>
              <div>

                {ques9 ? <img src={Plus} alt='plus' /> : <img src={Cross} alt='plus' />}
              </div>
            </Title>
            {ques9 &&
              <Answer>
                <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.</div>
              </Answer>

            }

          </Faq>

          <Faq>
            <Title onClick={Question10}>
              <div className='H4'>Donec in ipsum sit amet mi tincidunt lacinia ut id risus.</div>
              <div>

                {ques10 ? <img src={Plus} alt='plus' /> : <img src={Cross} alt='plus' />}
              </div>
            </Title>
            {ques10 &&
              <Answer>
                <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.</div>
              </Answer>

            }

          </Faq>

          <Faq>
            <Title onClick={Question11}>
              <div className='H4'>Donec in ipsum sit amet mi tincidunt lacinia ut id risus.</div>
              <div>

                {ques11 ? <img src={Plus} alt='plus' /> : <img src={Cross} alt='plus' />}
              </div>
            </Title>
            {ques11 &&
              <Answer>
                <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.</div>
              </Answer>

            }

          </Faq>
        </FaqSec>


      </Overlay>

      <Footer />
    </div>
  )
}

export default Faqs