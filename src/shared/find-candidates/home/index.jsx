import React, { useEffect, useState } from 'react'
import { Checkbox, HeroDiv, HeroSec, MainSec, Searchbar, SearchModal, Radio, Dropdown, TabletSearchbar, TabletSearchModal, SubDropdown } from './style'
import HeroImg from '../../../assets/images/Illustration.svg'
import { ReactComponent as SearchIcon } from '../../../assets/icons/fi_search.svg'
import { ReactComponent as Map } from '../../../assets/icons/map.svg'
import { ReactComponent as Layers } from '../../../assets/icons/fi_layers.svg'
import { ReactComponent as Arrow } from '../../../assets/icons/fi_arrow-right.svg'
import { ReactComponent as Arrowup } from '../../../assets/icons/fi_chevron-up.svg'
import { ReactComponent as Arrowdown } from '../../../assets/icons/fi_chevron-down.svg'
import { useNavigate } from 'react-router'
import MainJobs from '../../../components/main-jobs'
import Candidates from '../../../components/candidates'
import { useForm } from 'react-hook-form'
import { useRecruiter } from '../../dashboard/recruiter/useRecruiter'
import { Recruiter_Endpoints } from '../../../lib/api/recruiter_endpoints'


const FindCandidates = () => {
  const {
    handleSubmit
  } = useForm()

  const [applicants, setApplicants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const fetchData = async () => {
      const res = await Recruiter_Endpoints.get_all_applicants()
      if (res?.data?.applicants) {
          setApplicants(res.data.applicants)
      }
  }
   useEffect(() => {
        fetchData()
    }, [])

  const onSearch = async() => {

    if(searchTerm){
     const res = await Recruiter_Endpoints.get_applicants_by_title(searchTerm) 
      if (res?.data?.candidates) {
       setApplicants(res.data.candidates)
     }   
    }
  }
 
  // ------------- desktop advance dropdown
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const ModalOpen = () => {
    setIsSearchModalOpen(!isSearchModalOpen)
    setIsDropdownOpen(false)
  }

  //--------------- tablet advance dropdown
  const [isTabletModalOpen, setIsTabletModalOpen] = useState(false)
  const TabletModalOpen = () => {
    setIsTabletModalOpen(!isTabletModalOpen)
    setIsDropdownOpen(false)
  }

  //------------- tablet dropdown ( experience )
  const [isExperienceDropdownOpen, setIsExperienceDropdownOpen] = useState(false)
  const ExperienceDropdownOpen = () => {
    setIsExperienceDropdownOpen(!isExperienceDropdownOpen)
    setIsDropdownOpen(false)
    setIsSalaryDropdownOpen(false)
    setIsJobTypeDropdownOpen(false)
  }

  //------------- tablet dropdown ( salary )
  const [isSalaryDropdownOpen, setIsSalaryDropdownOpen] = useState(false)
  const SalaryDropdownOpen = () => {
    setIsSalaryDropdownOpen(!isSalaryDropdownOpen)
    setIsDropdownOpen(false)
    setIsExperienceDropdownOpen(false)
    setIsJobTypeDropdownOpen(false)
  }

  //------------- tablet dropdown ( job type )
  const [isJobTypeDropdownOpen, setIsJobTypeDropdownOpen] = useState(false)
  const JobTypeDropdownOpen = () => {
    setIsJobTypeDropdownOpen(!isJobTypeDropdownOpen)
    setIsDropdownOpen(false)
    setIsSalaryDropdownOpen(false)
    setIsExperienceDropdownOpen(false)
  }

  //------------- simple dropdown ( industry )
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const DropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen)
    setIsSearchModalOpen(false)
    setIsExperienceDropdownOpen(false)
    setIsTabletModalOpen(false)
  }
  return (
    <div>

      <HeroSec>
        <HeroDiv>
          <div className='FlexCol'>
            <div className='TxtDiv'>
              <h1 className='HeroHeading'>Find Candidates that suits your Company</h1>
              <p className='HeroPara'>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.</p>
              <div className='Suggest'>
                <p>Suggestion:</p>
                <a href='#'> Designer,</a>
                <a href='#'> Programing,</a>
                <a href='#'> Digital Marketing,</a>
                <a href='#'> Video,</a>
                <a href='#'> Animation.</a>
              </div>
            </div>
            {/* ------------------ desktop searchbar ------------------- */}
            <div className='SearchDiv'>
              <Searchbar>
                <div className='InputFlex'>
                  <SearchIcon className='IconColor' />
                  <input type='text' placeholder='Job title,Keyword..' className='Input' 
                  onChange={(e) => setSearchTerm(e.target.value)} />
                </div>

                <div>
                  <button type='submit' className='SearchBtn' onClick={handleSubmit(onSearch)}>Find Job</button>
                </div>
              </Searchbar>

            </div>

          </div>
          <div className='ImgSec'>
            <img src={HeroImg} alt='img' />
          </div>
        </HeroDiv>
      </HeroSec>

      <MainSec>
        <div className='Flex'>
          <h1 className='TopHeading'>Few Candidates</h1>
        </div>

        <Candidates applicants={applicants}/>
      </MainSec>


    </div>
  )
}

export default FindCandidates