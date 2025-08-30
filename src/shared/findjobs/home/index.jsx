import React, { useState } from 'react'
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


const FindJob = () => {
  const navigate = useNavigate()
  const DetailPage = () =>{
    navigate('/applicant/findjobs/detail')
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
              <h1 className='HeroHeading'>Find a job that suits your interest & skills.</h1>
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
                  <input type='' placeholder='Job title,Keyword..' className='Input' />
                </div>
                <div className='InputFlex'>
                  <Map className='IconColor' />
                  <input type='' placeholder='Your Location' className='Input' />
                </div>
                <div className='SelectFlex simple-dropdown' onClick={DropdownOpen}>
                  <div className='InputFlex'>
                    <Layers className='IconColor' />
                    <h3 className='Input' >Select Industry</h3>
                  </div>
                  {isDropdownOpen ?
                    <Arrowup className='SelectColor' /> :
                    <Arrowdown className='SelectColor' />
                  }
                  {isDropdownOpen &&
                    <Dropdown>
                      <ul className='options'>
                        <li>Information Technology</li>
                        <li>Finance & Banking</li>
                        <li>Engineering & Manufacturing</li>
                        <li>Marketing & Advertising</li>
                        <li>Retail & E-commerce</li>
                        <li>Construction & Real Estate</li>
                        <li>Healthcare & Medical</li>
                      </ul>
                    </Dropdown>
                  }
                </div>
                <div className='SelectFlex' onClick={ModalOpen}>
                  <h3 className='Input'>Advance Filters</h3>
                  {isSearchModalOpen ?
                    <Arrowup className='SelectColor' /> :
                    <Arrowdown className='SelectColor' />
                  }
                </div>
                <div>
                  <button type='submit' className='SearchBtn'>Find Job</button>
                </div>
              </Searchbar>

            </div>
            {/* ------------------ dektop popup ----------------------- */}
            {isSearchModalOpen &&
              <SearchModal>
                <div className='SearchOptions'>
                  <div className='OptionDiv'>
                    <h3 className='OptionTitle'>Experience</h3>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='experience' value='' checked />
                      <label htmlFor='' className='RadioLabel'>Freshers</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='experience' value='' />
                      <label htmlFor='' className='RadioLabel'>1 - 2 Years</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='experience' value='' />
                      <label htmlFor='' className='RadioLabel'>2 - 4 Years</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='experience' value='' />
                      <label htmlFor='' className='RadioLabel'>4 - 6 Years</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='experience' value='' />
                      <label htmlFor='' className='RadioLabel'>6 - 8 Years</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='experience' value='' />
                      <label htmlFor='' className='RadioLabel'>8 - 10 Years</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='experience' value='' />
                      <label htmlFor='' className='RadioLabel'>10 - 15 Years</label>
                    </div>
                  </div>
                  <div className='OptionDiv'>
                    <h3 className='OptionTitle'>Salary</h3>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='salary' value='' />
                      <label htmlFor='' className='RadioLabel'>$50 - $1000</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='salary' value='' />
                      <label htmlFor='' className='RadioLabel'>$1000 - $2000</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='salary' value='' checked />
                      <label htmlFor='' className='RadioLabel'>$3000 - $4000</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='salary' value='' />
                      <label htmlFor='' className='RadioLabel'>$4000 - $6000</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='salary' value='' />
                      <label htmlFor='' className='RadioLabel'>$6000 - $8000</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='salary' value='' />
                      <label htmlFor='' className='RadioLabel'>$8000 - $10000</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='salary' value='' />
                      <label htmlFor='' className='RadioLabel'>$10000 - $15000</label>
                    </div>
                  </div>
                  <div className='OptionDiv'>
                    <h3 className='OptionTitle'>Job Type</h3>
                    <div className='Radiodiv'>
                      <Checkbox type="checkbox" id='' name='' value='' />
                      <label htmlFor='' className='RadioLabel'>All</label>
                    </div>
                    <div className='Radiodiv'>
                      <Checkbox type="checkbox" id='' name='' value='' />
                      <label htmlFor='' className='RadioLabel'>Full Time</label>
                    </div>
                    <div className='Radiodiv'>
                      <Checkbox type="checkbox" id='' name='' value='' checked />
                      <label htmlFor='' className='RadioLabel'>Part Time</label>
                    </div>
                    <div className='Radiodiv'>
                      <Checkbox type="checkbox" id='' name='' value='' />
                      <label htmlFor='' className='RadioLabel'>Internship</label>
                    </div>
                    <div className='Radiodiv'>
                      <Checkbox type="checkbox" id='' name='' value='' />
                      <label htmlFor='' className='RadioLabel'>Remote</label>
                    </div>
                    <div className='Radiodiv'>
                      <Checkbox type="checkbox" id='' name='salary' value='' />
                      <label htmlFor='' className='RadioLabel'>Temporary</label>
                    </div>
                    <div className='Radiodiv'>
                      <Checkbox type="checkbox" id='' name='salary' value='' />
                      <label htmlFor='' className='RadioLabel'>Contract Base</label>
                    </div>
                  </div>

                </div>
              </SearchModal>
            }
           

            {/* ---------------------- tablet searchbar ------------------------ */}
            <div className='SearchDiv'>
              <TabletSearchbar>
                <div className='Flexrow'>
                  <div className='InputFlex'>
                    <SearchIcon className='IconColor' />
                    <input type='' placeholder='Job title,Keyword..' className='Input' />
                  </div>
                  <div className='InputFlex'>
                    <Map className='IconColor' />
                    <input type='' placeholder='Your Location' className='Input' />
                  </div>
                </div>
                <div className='Flexrow'>
                  <div className='SelectFlex simple-dropdown' onClick={DropdownOpen}>
                    <div className='InputFlex'>
                      <Layers className='IconColor' />
                      <h3 className='Select' >Select Industry</h3>
                    </div>
                    {isDropdownOpen ?
                      <Arrowup className='SelectColor' /> :
                      <Arrowdown className='SelectColor' />
                    }
                    {isDropdownOpen &&
                      <Dropdown>
                        <ul className='options'>
                          <li>Information Technology</li>
                          <li>Finance & Banking</li>
                          <li>Engineering & Manufacturing</li>
                          <li>Marketing & Advertising</li>
                          <li>Retail & E-commerce</li>
                          <li>Construction & Real Estate</li>
                          <li>Healthcare & Medical</li>
                        </ul>
                      </Dropdown>
                    }
                  </div>
                  <div className='SelectFlex advance-dropdown' onClick={TabletModalOpen}>
                    <div className='InputFlex'>
                      <Layers className='IconColor' />
                      <h3 className='Select'>Advance Filters</h3>
                    </div>
                    {isTabletModalOpen ?
                      <Arrowup className='SelectColor' /> :
                      <Arrowdown className='SelectColor' />
                    }
                  </div>
                </div>
                <div>
                  <button type='submit' className='SearchBtn'>Find Job</button>
                </div>
              </TabletSearchbar>

            </div>
            {/* ------------------ tablet popup ----------------------- */}
            {isTabletModalOpen &&
              <TabletSearchModal>

                <div className='SearchOptions'>
                  <div className='Flexrow'>
                    <div className='SelectFlex simple-dropdown' onClick={ExperienceDropdownOpen}>
                      <div className='InputFlex'>
                        <h3 className='Select' >Experience</h3>
                      </div>
                      {isExperienceDropdownOpen ?
                        <Arrowup className='SelectColor' /> :
                        <Arrowdown className='SelectColor' />
                      }
                      {isExperienceDropdownOpen &&
                        <SubDropdown>
                          <ul className='options'>
                            <li>Freshers</li>
                            <li>1 - 2 Years</li>
                            <li>2 - 4 Years</li>
                            <li>4 - 6 Years</li>
                            <li>6 - 8 Years</li>
                            <li>8 - 10 Years</li>
                            <li>10 - 15 Years</li>
                          </ul>
                        </SubDropdown>
                      }
                    </div>

                  </div>
                  <div className='Flexrow'>
                    <div className='SelectFlex simple-dropdown' onClick={SalaryDropdownOpen}>
                      <div className='InputFlex'>
                        <h3 className='Select' >Salary</h3>
                      </div>
                      {isSalaryDropdownOpen ?
                        <Arrowup className='SelectColor' /> :
                        <Arrowdown className='SelectColor' />
                      }
                      {isSalaryDropdownOpen &&
                        <SubDropdown>
                          <ul className='options'>
                            <li>$50 - $1000</li>
                            <li>$1000 - $2000</li>
                            <li>$2000 - $4000</li>
                            <li>$4000 - $6000</li>
                            <li>$6000 - $8000</li>
                            <li>$8000 - $10000</li>
                            <li>$10000 - $15000</li>
                          </ul>
                        </SubDropdown>
                      }
                    </div>

                  </div>
                  <div className='Flexrow'>
                    <div className='SelectFlex simple-dropdown' onClick={JobTypeDropdownOpen}>
                      <div className='InputFlex'>
                        <h3 className='Select' >Job Type</h3>
                      </div>
                      {isJobTypeDropdownOpen ?
                        <Arrowup className='SelectColor' /> :
                        <Arrowdown className='SelectColor' />
                      }
                      {isJobTypeDropdownOpen &&
                        <SubDropdown>
                          <ul className='options'>
                            <li>All</li>
                            <li>Full Time</li>
                            <li>Part Time</li>
                            <li>Internship</li>
                            <li>Remote</li>
                            <li>temporary</li>
                            <li>Contract base</li>
                          </ul>
                        </SubDropdown>
                      }
                    </div>

                  </div>

                </div>
              </TabletSearchModal>
            }

          </div>
          <div className='ImgSec'>
            <img src={HeroImg} alt='img' />
          </div>
        </HeroDiv>
      </HeroSec>

      <MainSec>
        <div className='Flex'>
          <h1 className='TopHeading'>New Jobs</h1>
          <button className='TopBtn' onClick={DetailPage}>
            <span>View All</span>
            <Arrow className='IconColor' />
          </button>
        </div>
        <MainJobs/>
      </MainSec>
    </div>
  )
}

export default FindJob