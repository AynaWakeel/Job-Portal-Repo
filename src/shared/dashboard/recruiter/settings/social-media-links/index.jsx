import React, { useEffect, useState } from 'react'
import { Form, SettingDiv } from './style'
import { ReactComponent as Social1 } from '../../../../../assets/icons/social-media1.svg'
import { ReactComponent as Social2 } from '../../../../../assets/icons/social-media2.svg'
import { ReactComponent as Social3 } from '../../../../../assets/icons/social-media3.svg'
import { ReactComponent as Social4 } from '../../../../../assets/icons/linkedin.svg'
import { useRecruiter } from '../../useRecruiter'
import { useForm } from 'react-hook-form'
import { Recruiter_Endpoints } from '../../../../../lib/api/recruiter_endpoints'

const SocialMediaProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const { company_profile } = useRecruiter()

  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const previousData = await Recruiter_Endpoints.get_company_profile();
      if (previousData) {
        reset(previousData);
        setHasData(true);
      } else {
        reset({
          facebookLink: "",
          instagramLink: "",
          linkedInLink: "",
          twitterLink: "",

        });
        setHasData(false);
      }
    };
    fetchData();
  }, [reset]);

  const onSubmit = (data) => {
    company_profile(data)
    console.log(data)
  }

  return (
    <div>
      <SettingDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className='TopHeading'>Social Media Accounts</h1>
          </div>
          <div>
            <Form>
              <div className='FormSpace'>
                <div className='flex'>
                  <Social1 className='IconColor' />
                  <label htmlFor='' className='Label'>Facebook</label>
                </div>
                <input type="url" placeholder='Profile link/url...' className='FormInput'
                  {...register("facebookLink", { required: "FacebookLink is req." })} />
              </div>
              <div className='FormError'>
                {errors.facebookLink && <p>FacebookLink is required.</p>}
              </div>

              <div className='FormSpace'>
                <div className='flex'>
                  <Social2 className='IconColor' />
                  <label htmlFor='' className='Label'>Twitter</label>
                </div>
                <input type="url" placeholder='Profile link/url...' className='FormInput'
                  {...register("twitterLink", { required: "twitterLink is req." })} />
              </div>
              <div className='FormError'>
                {errors.twitterLink && <p>TwitterLink is required.</p>}
              </div>

              <div className='FormSpace'>
                <div className='flex'>
                  <Social3 className='IconColor' />
                  <label htmlFor='' className='Label'>Instagram</label>
                </div>
                <input type="url" placeholder='Profile link/url...' className='FormInput'
                  {...register("instagramLink", { required: "InstagramLink is req." })} />
              </div>
              <div className='FormError'>
                {errors.instagramLink && <p>InstagramLink is required.</p>}
              </div>

              <div className='FormSpace'>
                <div className='flex'>
                  <Social4 className='IconColor' />
                  <label htmlFor='' className='Label'>Linkedin</label>
                </div>
                <input type="url" placeholder='Profile link/url...' className='FormInput'
                  {...register("linkedInLink", { required: "linkedInLink is req." })} />
              </div>
              <div className='FormError'>
                {errors.linkedInLink && <p>LinkedInLink is required.</p>}
              </div>

              <button type='submit' className='FormBtn'>Save Changes</button>
            </Form>
          </div>

        </form>
      </SettingDiv>
    </div>
  )
}

export default SocialMediaProfile