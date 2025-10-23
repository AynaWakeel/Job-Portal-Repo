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
import Select from 'react-select';
import { Applicant_Endpoints } from '../../../lib/api/applicant_endpoints'
import { Controller, useForm } from 'react-hook-form'

const FindJob = () => {
  const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const [formData, setFormData] = useState({
    title: "",
    locationId: "",
    industryId: "",
    experience: "",
    salary: "",
    jobType: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const [jobData, setJobData] = useState([])

  const fetchJobsData = async (page = 1, limit = 10) => {
    const res = await Applicant_Endpoints.get_all_jobs(page, limit)
    if (res?.data?.jobs) {
      setJobData(res.data.jobs)
      setTotalPages(res.data.totalPages)
      setCurrentPage(res.data.currentPage)
    }
  }

  const onSearch = async (data) => {

    const filters = {
      title: data.title || undefined,
      locationId: formData.locationId || undefined,
      industryId: formData.industryId || undefined,
      experience: formData.experience || undefined,
      salary: formData.salary || undefined,
      jobType: formData.jobType || undefined,
    }

    console.log(filters, "filters before API call");

    try {
      const res = await Applicant_Endpoints.get_jobs_by_filter(filters);
      if (res?.data?.jobs) {
        setJobData(res.data.jobs);
        console.log("Filtered Jobs:", res.data.jobs);
      }
    } catch (error) {
      console.error("Error in filter jobs", error);
    }
  }

  const [industryOptions, setIndustryOptions] = useState([])
  const [locationOptions, setLocationOptions] = useState([])

  const fetchLocation = async () => {
    const res = await Applicant_Endpoints.get_location()
    if (res?.data) {
      const options = res.data.map((items) => ({
        value: items.id,
        label: items.name
      }))
      setLocationOptions(options)
    }
  }

  const fetchIndustry = async () => {
    const res = await Applicant_Endpoints.get_industry()
    if (res?.data) {
      const options = res.data.map((items) => ({
        value: items.id,
        label: items.name
      }))
      setIndustryOptions(options)
    }
  }

  useEffect(() => {
    fetchJobsData(currentPage)
    fetchIndustry()
    fetchLocation()
  }, [currentPage])

  const navigate = useNavigate()
  const DetailPage = () => {
    navigate('/applicant/findjobs/detail')
  }
  // ------------- desktop advance dropdown
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const ModalOpen = () => {
    setIsSearchModalOpen(!isSearchModalOpen)
  }

  //--------------- tablet advance dropdown
  const [isTabletModalOpen, setIsTabletModalOpen] = useState(false)
  const TabletModalOpen = () => {
    setIsTabletModalOpen(!isTabletModalOpen)
  }

  const [experienceSelected, setExperienceSelected] = useState(null)
  const experienceOptions = [

    { value: "Freshers", label: "Freshers" },
    { value: "1-2", label: "1 - 2 Years" },
    { value: "2-4", label: "2 - 4 Years" },
    { value: "4-6", label: "4 - 6 Years" },
    { value: "6-8", label: "6 - 8 Years" },
    { value: "8-10", label: "8 - 10 Years" },
    { value: "10-15", label: "10 - 15 Years" },
  ]

  const [salarySelected, setSalarySelected] = useState(null)
  const salaryOptions = [

    { value: "50 - 1000", label: "$50 - $1000" },
    { value: "1000 - 2000", label: "$1000 - $2000" },
    { value: "2000 - 4000", label: "$2000 - $4000" },
    { value: "4000 - 6000", label: "$4000 - $6000" },
    { value: "6000 - 8000", label: "$6000 - $8000" },
    { value: "8000 - 10000", label: "$8000 - $10000" },
    { value: "10000 - 15000", label: "$10000 - $15000" },

  ]

  const [jobTypeSelected, setJobTypeSelected] = useState(null)
  const jobTypeOptions = [

    { value: "All", label: "All" },
    { value: "Freshers", label: "Freshers" },
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Internship", label: "Internship" },
    { value: "Remote", label: "Remote" },
    { value: "temporary", label: "temporary" },
    { value: "Contract base", label: "Contract base" },

  ]

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
                  <input type='text' placeholder='Job title,Keyword' className='Input'
                    {...register("title")}
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
                <div className='InputFlex'>
                  <Select
                    className="inputSelect selectLibrary"
                    classNamePrefix="selectLibrary"
                    options={locationOptions}
                    value={locationOptions.find(opt => opt.value === formData.locationId) || null}
                    onChange={(option) => handleSelectChange("locationId", Number(option?.value) || "")}

                    placeholder="Location"
                  />

                </div>

                <div className='SelectFlex'>
                  <Select
                    className="inputSelect selectLibrary"
                    classNamePrefix="selectLibrary"
                    options={industryOptions}
                    value={industryOptions.find(opt => opt.value === formData.industryId) || null}
                    onChange={(option) => handleSelectChange("industryId", Number(option?.value) || "")}
                    placeholder="Industry Type"
                  />

                </div>

                <div className='SelectFlex' onClick={ModalOpen}>
                  <h3 className='Input'>Advance Filters</h3>
                  {isSearchModalOpen ?
                    <Arrowup className='SelectColor' /> :
                    <Arrowdown className='SelectColor' />
                  }
                </div>
                <div>
                  <button type='submit'
                    onClick={handleSubmit(onSearch)}
                    className='SearchBtn'>Find Job</button>
                </div>
              </Searchbar>

            </div>
            {/* ------------------ dektop popup ----------------------- */}
            {isSearchModalOpen &&
              <SearchModal>
                <div className='SearchOptions'>

                  <div className='OptionDiv'>
                    <h3 className='OptionTitle'>Experience</h3>
                    {["Freshers", "1 - 2", "2 - 4", "4 - 6", "6 - 8", "8 - 10", "10 - 15"].map((exp, index) => (
                      <div className='Radiodiv' key={index}>
                        <Radio
                          type="radio"
                          name="experience"
                          value={exp}
                          checked={formData.experience === exp}
                          onChange={handleChange}
                        />
                        <label className='RadioLabel'>{exp} {exp !== "Freshers" && "Years"}</label>
                      </div>
                    ))}
                  </div>

                  <div className='OptionDiv'>
                    <h3 className='OptionTitle'>Salary</h3>
                    {[
                      "50 - 1000",
                      "1000 - 2000",
                      "2000 - 4000",
                      "4000 - 6000",
                      "6000 - 8000",
                      "8000 - 10000",
                      "10000 - 15000",
                    ].map((sal, index) => (
                      <div className='Radiodiv' key={index}>
                        <Radio
                          type="radio"
                          name="salary"
                          value={sal}
                          checked={formData.salary === sal}
                          onChange={handleChange}
                        />
                        <label className='RadioLabel'>${sal}</label>
                      </div>
                    ))}
                  </div>

                  <div className='OptionDiv'>
                    <h3 className='OptionTitle'>Job Type</h3>
                    {["fulltime", "parttime", "internship", "remote", "temporary"].map((type, index) => (
                      <div className='Radiodiv' key={index}>
                        <Radio
                          type="radio"
                          name="jobType"
                          value={type}
                          checked={formData.jobType === type}
                          onChange={handleChange}
                        />
                        <label className='RadioLabel'>
                          {type === "all"
                            ? "All"
                            : type === "fulltime"
                            ? "Full Time"
                            : type === "parttime"
                            ? "Part Time"
                            : type === "internship"
                            ? "Internship"
                            : type === "remote"
                            ? "Remote"
                            : "Temporary"
                          }
                        </label>
                      </div>
                    ))}
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
                    <input type='text' placeholder='Job title,Keyword..' className='Input'
                      {...register("title")}
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='InputFlex'>

                    <Select
                      className="inputSelect selectLibrary"
                      classNamePrefix="selectLibrary"
                      options={locationOptions}
                      value={locationOptions.find(opt => opt.value === formData.locationId) || null}
                      onChange={(option) => handleSelectChange("locationId", Number(option?.value) || "")}
                      placeholder="Location"
                    />
                  </div>
                </div>
                <div className='Flexrow'>
                  <div className='SelectFlex simple-dropdown'>
                    <div className='InputFlex'>

                      <Select
                        className="inputSelect selectLibrary"
                        classNamePrefix="selectLibrary"
                        options={industryOptions}
                        value={industryOptions.find(opt => opt.value === formData.industryId) || null}
                        onChange={(option) => handleSelectChange("industryId", Number(option?.value) || "")}
                        placeholder="Industry Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                        
                      />
                    </div>

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
                  <button type='submit' onClick={handleSubmit(onSearch)} className='SearchBtn'>Find Job</button>
                </div>
              </TabletSearchbar>

            </div>
            {/* ------------------ tablet popup ----------------------- */}
            {isTabletModalOpen &&
              <TabletSearchModal>

                <div className='SearchOptions'>
                  <div className='Flexrow'>
                    <Controller
                      name="experience"
                      control={control}
                      render={({ field }) => (

                        <Select
                          className="inputSelect advanceSelect"
                          classNamePrefix="advanceSelect"
                          options={experienceOptions}
                          value={experienceSelected}
                           onChange={(option) => {
                            setExperienceSelected(option);
                            handleSelectChange("experience", option?.value || "");
                          }}
                          placeholder="Experience"
                        />
                      )}
                    />

                  </div>
                  <div className='Flexrow'>
                    <Controller
                      name="salary"
                      control={control}
                      render={({ field }) => (

                        <Select
                          className="inputSelect advanceSelect"
                          classNamePrefix="advanceSelect"
                          options={salaryOptions}                         
                          value={salarySelected}
                           onChange={(option) => {
                            setSalarySelected(option);
                            handleSelectChange("salary", option?.value || "");
                          }}
                          placeholder="Salary"
                        />
                      )}
                    />

                  </div>
                  <div className='Flexrow'>
                    <Controller
                      name="jobType"
                      control={control}
                      render={({ field }) => (

                        <Select
                          className="inputSelect advanceSelect"
                          classNamePrefix="advanceSelect"
                          options={jobTypeOptions}
                          value={jobTypeSelected}
                          onChange={(option) => {
                            setJobTypeSelected(option);
                            handleSelectChange("jobType", option?.value || "");
                          }}
                          placeholder="Job Type"
                        />
                      )}
                    />

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
        <MainJobs
          jobData={jobData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />

      </MainSec>
    </div>
  )
}

export default FindJob