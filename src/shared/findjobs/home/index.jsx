// import React, { useEffect, useState } from 'react'
// import { Checkbox, HeroDiv, HeroSec, MainSec, Searchbar, SearchModal, Radio, Dropdown, TabletSearchbar, TabletSearchModal, SubDropdown } from './style'
// import HeroImg from '../../../assets/images/Illustration.svg'
// import { ReactComponent as SearchIcon } from '../../../assets/icons/fi_search.svg'
// import { ReactComponent as Map } from '../../../assets/icons/map.svg'
// import { ReactComponent as Layers } from '../../../assets/icons/fi_layers.svg'
// import { ReactComponent as Arrow } from '../../../assets/icons/fi_arrow-right.svg'
// import { ReactComponent as Arrowup } from '../../../assets/icons/fi_chevron-up.svg'
// import { ReactComponent as Arrowdown } from '../../../assets/icons/fi_chevron-down.svg'
// import { useNavigate } from 'react-router'
// import MainJobs from '../../../components/main-jobs'
// import CustomSelect from '../../../components/custome-select'
// import Select from 'react-select';
// import { Applicant_Endpoints } from '../../../lib/api/applicant_endpoints'
// import { Controller, useForm } from 'react-hook-form'

// const FindJob = () => {
//   const {
//     register,
//     control,
//     handleSubmit
//   } = useForm()

//   // const [searchTerm, setSearchTerm] = useState("")
//   const [jobData, setJobData] = useState([])

//   const fetchJobsData = async () => {
//     const res = await Applicant_Endpoints.get_all_jobs()
//     if (res?.data?.jobs) {
//       setJobData(res.data.jobs)
//       // setIsLoading(false)
//     }
//   }

//   const onSearch = async (data) => {
//     const filters = {
//       title: data.title || undefined,
//       locationId: data.location || undefined,
//       industryId: data.industryType || undefined,
//       experience: experienceSelected || undefined,
//       salary: salarySelected || undefined,
//       jobType: jobTypeSelected.length > 0 ? jobTypeSelected.join(',') : undefined,
//     }
//     console.log(filters, "filters before going in request")
//     try {
//       const res = await Applicant_Endpoints.get_jobs_by_filter(filters)
//       if (res?.data) {
//         setJobData(res.data.jobs)
//         console.log("Filtered Jobs:", res.data)
//       }
//     } catch (error) {
//       console.error("Error in filter jobs", error)
//     }
//   }

//   const [industryOptions, setIndustryOptions] = useState([])
//   const [locationOptions, setLocationOptions] = useState([])

//   const fetchLocation = async () => {
//     const res = await Applicant_Endpoints.get_location()
//     if (res?.data) {
//       const options = res.data.map((items) => ({
//         value: items.id,
//         label: items.name
//       }))
//       setLocationOptions(options)
//     }
//   }

//   const fetchIndustry = async () => {
//     const res = await Applicant_Endpoints.get_industry()
//     if (res?.data) {
//       const options = res.data.map((items) => ({
//         value: items.id,
//         label: items.name
//       }))
//       setIndustryOptions(options)
//     }
//   }

//   useEffect(() => {
//     fetchJobsData()
//     fetchIndustry()
//     fetchLocation()
//   }, [])

//   const [experienceSelected, setExperienceSelected] = useState(null)
//   const experienceOptions = [

//     { value: "Freshers", label: "Freshers" },
//     { value: "1-2", label: "1 - 2 Years" },
//     { value: "2-4", label: "2 - 4 Years" },
//     { value: "4-6", label: "4 - 6 Years" },
//     { value: "6-8", label: "6 - 8 Years" },
//     { value: "8-10", label: "8 - 10 Years" },
//     { value: "10-15", label: "10 - 15 Years" },
//   ]

//   const [salarySelected, setSalarySelected] = useState(null)
//   const salaryOptions = [

//     { value: "50 - 1000", label: "$50 - $1000" },
//     { value: "1000 - 2000", label: "$1000 - $2000" },
//     { value: "2000 - 4000", label: "$2000 - $4000" },
//     { value: "4000 - 6000", label: "$4000 - $6000" },
//     { value: "6000 - 8000", label: "$6000 - $8000" },
//     { value: "8000 - 10000", label: "$8000 - $10000" },
//     { value: "10000 - 15000", label: "$10000 - $15000" },

//   ]

//   const [jobTypeSelected, setJobTypeSelected] = useState([])

//   const handleJobTypeChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setJobTypeSelected((prev) => [...prev, value]);
//     } else {
//       setJobTypeSelected((prev) => prev.filter((v) => v !== value));
//     }
//   };

//   // const [jobTypeSelected, setJobTypeSelected] = useState(null)
//   // const jobTypeOptions = [

//   //   { value: "All", label: "All" },
//   //   { value: "Freshers", label: "Freshers" },
//   //   { value: "Full Time", label: "Full Time" },
//   //   { value: "Part Time", label: "Part Time" },
//   //   { value: "Internship", label: "Internship" },
//   //   { value: "Remote", label: "Remote" },
//   //   { value: "temporary", label: "temporary" },
//   //   { value: "Contract base", label: "Contract base" },

//   // ]
//   const navigate = useNavigate()
//   const DetailPage = () => {
//     navigate('/applicant/findjobs/detail')
//   }
//   // ------------- desktop advance dropdown
//   const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
//   const ModalOpen = () => {
//     setIsSearchModalOpen(!isSearchModalOpen)
//   }

//   //--------------- tablet advance dropdown
//   const [isTabletModalOpen, setIsTabletModalOpen] = useState(false)
//   const TabletModalOpen = () => {
//     setIsTabletModalOpen(!isTabletModalOpen)
//   }
//   const [title, setTitle] = useState("dev")

//   return (
//     <div>
//       <HeroSec>
//         <HeroDiv>
//           <div className='FlexCol'>
//             <div className='TxtDiv'>
//               <h1 className='HeroHeading'>Find a job that suits your interest & skills.</h1>
//               <p className='HeroPara'>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.</p>
//               <div className='Suggest'>
//                 <p>Suggestion:</p>
//                 <a href='#'> Designer,</a>
//                 <a href='#'> Programing,</a>
//                 <a href='#'> Digital Marketing,</a>
//                 <a href='#'> Video,</a>
//                 <a href='#'> Animation.</a>
//               </div>
//             </div>
//             {/* ------------------ desktop searchbar ------------------- */}
//             <div className='SearchDiv'>
//               <Searchbar>
//                 <div className='InputFlex'>
//                   <SearchIcon className='IconColor' />
//                   <input type='text' placeholder='Job title,Keyword..' className='Input'
//                     value={title}
//                     {...register("title")}
//                     // onChange={handleChange}
//                   />
//                 </div>
//                 <div className='InputFlex'>
//                   <Controller
//                     name="location"
//                     control={control}
//                     // rules={{ required: "Location is required" }}
//                     render={({ field }) => (
//                       <Select
//                         className="inputSelect selectLibrary"
//                         classNamePrefix="selectLibrary"
//                         options={locationOptions}
//                         value={locationOptions.find(opt => opt.value === field.value) || null}
//                         onChange={(val) => field.onChange(val.value)}
//                         placeholder="Location"
//                       />
//                     )}
//                   />
//                 </div>

//                 <div className='SelectFlex'>

//                   <Controller
//                     name="industryType"
//                     control={control}
//                     // rules={{ required: "Industry is required" }}
//                     render={({ field }) => (
//                       <Select
//                         className="inputSelect selectLibrary"
//                         classNamePrefix="selectLibrary"
//                         options={industryOptions}
//                         value={industryOptions.find(opt => opt.value === field.value) || null}
//                         onChange={(val) => field.onChange(val.value)}
//                         placeholder="Industry Type"
//                       />
//                     )}
//                   />


//                 </div>

//                 <div className='SelectFlex' onClick={ModalOpen}>
//                   <h3 className='Input'>Advance Filters</h3>
//                   {isSearchModalOpen ?
//                     <Arrowup className='SelectColor' /> :
//                     <Arrowdown className='SelectColor' />
//                   }
//                 </div>
//                 <div>
//                   <button type='submit'
//                     onClick={handleSubmit(onSearch)}
//                     className='SearchBtn'>Find Job</button>
//                 </div>
//               </Searchbar>

//             </div>
//             {/* ------------------ dektop popup ----------------------- */}
//             {isSearchModalOpen &&
//               <SearchModal>
//                 <div className='SearchOptions'>
//                   <div className='OptionDiv'>
//                     <h3 className='OptionTitle'>Experience</h3>
//                     <div className='Radiodiv'>
//                       <Radio type="radio" id='' name='experience' value='Freshers' checked={experienceSelected === "Freshers"} onChange={(e) => setExperienceSelected(e.target.value)} />
//                       <label htmlFor='' className='RadioLabel'>Freshers</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Radio type="radio" id='' name='experience' value='1 - 2' checked={experienceSelected === "1 - 2"} onChange={(e) => setExperienceSelected(e.target.value)} />
//                       <label htmlFor='' className='RadioLabel'>1 - 2 Years</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Radio type="radio" id='' name='experience' value='2 - 4' checked={experienceSelected === "2 - 4"} onChange={(e) => setExperienceSelected(e.target.value)} />
//                       <label htmlFor='' className='RadioLabel'>2 - 4 Years</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Radio type="radio" id='' name='experience' value='4 - 6' checked={experienceSelected === "4 - 6"} onChange={(e) => setExperienceSelected(e.target.value)} />
//                       <label htmlFor='' className='RadioLabel'>4 - 6 Years</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Radio type="radio" id='' name='experience' value='6 - 8' checked={experienceSelected === "6 - 8"} onChange={(e) => setExperienceSelected(e.target.value)} />
//                       <label htmlFor='' className='RadioLabel'>6 - 8 Years</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Radio type="radio" id='' name='experience' value='8 - 10' checked={experienceSelected === "8 - 10"} onChange={(e) => setExperienceSelected(e.target.value)} />
//                       <label htmlFor='' className='RadioLabel'>8 - 10 Years</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Radio type="radio" id='' name='experience' value='10 - 15' checked={experienceSelected === "10 - 15"} onChange={(e) => setExperienceSelected(e.target.value)} />
//                       <label htmlFor='' className='RadioLabel'>10 - 15 Years</label>
//                     </div>
//                   </div>
//                   <div className='OptionDiv'>
//                     <h3 className='OptionTitle'>Salary</h3>
//                     <div className='Radiodiv'>
//                       <Radio type="radio" id='' name='salary' value='50 - 1000' checked={salarySelected === "50 - 1000"} onChange={(e) => setSalarySelected(e.target.value)} />
//                       <label htmlFor='' className='RadioLabel'>$50 - $1000</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Radio type="radio" id='' name='salary' value='1000 - 2000' checked={salarySelected === "1000 - 2000"} onChange={(e) => setSalarySelected(e.target.value)} />
//                       <label htmlFor='' className='RadioLabel'>$1000 - $2000</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Radio type="radio" id='' name='salary' value='2000 - 4000' checked={salarySelected === "2000 - 4000"} onChange={(e) => setSalarySelected(e.target.value)} />
//                       <label htmlFor='' className='RadioLabel'>$3000 - $4000</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Radio type="radio" id='' name='salary' value='4000 - 6000' checked={salarySelected === "4000 - 6000"} onChange={(e) => setSalarySelected(e.target.value)} />
//                       <label htmlFor='' className='RadioLabel'>$4000 - $6000</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Radio type="radio" id='' name='salary' value='6000 - 8000' checked={salarySelected === "6000 - 8000"} onChange={(e) => setSalarySelected(e.target.value)} />
//                       <label htmlFor='' className='RadioLabel'>$6000 - $8000</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Radio type="radio" id='' name='salary' value='8000 - 10000' checked={salarySelected === "8000 - 10000"} onChange={(e) => setSalarySelected(e.target.value)} />
//                       <label htmlFor='' className='RadioLabel'>$8000 - $10000</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Radio type="radio" id='' name='salary' value='10000 - 15000' checked={salarySelected === "10000 - 15000"} onChange={(e) => setSalarySelected(e.target.value)} />
//                       <label htmlFor='' className='RadioLabel'>$10000 - $15000</label>
//                     </div>
//                   </div>
//                   <div className='OptionDiv'>
//                     <h3 className='OptionTitle'>Job Type</h3>
//                     <div className='Radiodiv'>
//                       <Checkbox type="checkbox" id='' name='jobType' value='all' checked={jobTypeSelected.includes("all")} onChange={handleJobTypeChange} />
//                       <label htmlFor='' className='RadioLabel'>All</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Checkbox type="checkbox" id='' name='jobType' value='fulltime' checked={jobTypeSelected.includes("fulltime")} onChange={handleJobTypeChange} />
//                       <label htmlFor='' className='RadioLabel'>Full Time</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Checkbox type="checkbox" id='' name='jobType' value='parttime' checked={jobTypeSelected.includes("parttime")} onChange={handleJobTypeChange} />
//                       <label htmlFor='' className='RadioLabel'>Part Time</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Checkbox type="checkbox" id='' name='jobType' value='internship' checked={jobTypeSelected.includes("internship")} onChange={handleJobTypeChange} />
//                       <label htmlFor='' className='RadioLabel'>Internship</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Checkbox type="checkbox" id='' name='jobType' value='remote' checked={jobTypeSelected.includes("remote")} onChange={handleJobTypeChange} />
//                       <label htmlFor='' className='RadioLabel'>Remote</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Checkbox type="checkbox" id='' name='jobType' value='temporary' checked={jobTypeSelected.includes("temporary")} onChange={handleJobTypeChange} />
//                       <label htmlFor='' className='RadioLabel'>Temporary</label>
//                     </div>
//                     <div className='Radiodiv'>
//                       <Checkbox type="checkbox" id='' name='jobType' value='contractbase' checked={jobTypeSelected.includes("contractbase")} onChange={handleJobTypeChange} />
//                       <label htmlFor='' className='RadioLabel'>Contract Base</label>
//                     </div>
//                   </div>

//                 </div>
//               </SearchModal>
//             }


//             {/* ---------------------- tablet searchbar ------------------------ */}
//             <div className='SearchDiv'>
//               <TabletSearchbar>
//                 <div className='Flexrow'>
//                   <div className='InputFlex'>
//                     <SearchIcon className='IconColor' />
//                     <input type='text' placeholder='Job title,Keyword..' className='Input' {...register("title")} />
//                   </div>
//                   <div className='InputFlex'>
//                     <Controller
//                       name="location"
//                       control={control}
//                       rules={{ required: "Location is required" }}
//                       render={({ field }) => (
//                         <Select
//                           className="inputSelect selectLibrary"
//                           classNamePrefix="selectLibrary"
//                           options={locationOptions}
//                           value={locationOptions.find(opt => opt.value === field.value) || null}
//                           onChange={(val) => field.onChange(val.value)}
//                           placeholder="Location"
//                         />
//                       )}
//                     />
//                   </div>
//                 </div>
//                 <div className='Flexrow'>
//                   <div className='SelectFlex simple-dropdown'>
//                     <div className='InputFlex'>
//                       <Controller
//                         name="industryType"
//                         control={control}
//                         rules={{ required: "Industry is required" }}
//                         render={({ field }) => (
//                           <Select
//                             className="inputSelect selectLibrary"
//                             classNamePrefix="selectLibrary"
//                             options={industryOptions}
//                             value={industryOptions.find(opt => opt.value === field.value) || null}
//                             onChange={(val) => field.onChange(val.value)}
//                             placeholder="Industry Type"
//                           />
//                         )}
//                       />
//                     </div>

//                   </div>
//                   <div className='SelectFlex advance-dropdown' onClick={TabletModalOpen}>
//                     <div className='InputFlex'>
//                       <Layers className='IconColor' />
//                       <h3 className='Select'>Advance Filters</h3>
//                     </div>
//                     {isTabletModalOpen ?
//                       <Arrowup className='SelectColor' /> :
//                       <Arrowdown className='SelectColor' />
//                     }
//                   </div>
//                 </div>
//                 <div>
//                   <button type='submit' className='SearchBtn'>Find Job</button>
//                 </div>
//               </TabletSearchbar>

//             </div>
//             {/* ------------------ tablet popup ----------------------- */}
//             {isTabletModalOpen &&
//               <TabletSearchModal>

//                 {/* <div className='SearchOptions'>
//                   <div className='Flexrow'>
//                     <Select
//                       className="inputSelect advanceSelect"
//                       classNamePrefix="advanceSelect"
//                       options={experienceOptions}
//                       value={experienceSelected}
//                       onChange={setExperienceSelected}
//                       placeholder="Experience"
//                     />                 

//                   </div>
//                   <div className='Flexrow'>
//                     <Select
//                       className="inputSelect advanceSelect"
//                       classNamePrefix="advanceSelect"
//                       options={salaryOptions}
//                       value={salarySelected}
//                       onChange={setSalarySelected}
//                       placeholder="Salary"
//                     />                   

//                   </div>
//                   <div className='Flexrow'>
//                     <Select
//                       className="inputSelect advanceSelect"
//                       classNamePrefix="advanceSelect"
//                       options={jobTypeOptions}
//                       value={jobTypeSelected}
//                       onChange={setJobTypeSelected}
//                       placeholder="Job Type"
//                     />                

//                   </div>
//                 </div> */}

//               </TabletSearchModal>
//             }

//           </div>
//           <div className='ImgSec'>
//             <img src={HeroImg} alt='img' />
//           </div>
//         </HeroDiv>
//       </HeroSec>

//       <MainSec>
//         <div className='Flex'>
//           <h1 className='TopHeading'>New Jobs</h1>
//           <button className='TopBtn' onClick={DetailPage}>
//             <span>View All</span>
//             <Arrow className='IconColor' />
//           </button>
//         </div>
//         <MainJobs
//           jobData={jobData}
//         />

//       </MainSec>
//     </div>
//   )
// }

// export default FindJob











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
import CustomSelect from '../../../components/custome-select'
import Select from 'react-select';
import { Applicant_Endpoints } from '../../../lib/api/applicant_endpoints'
import {useForm } from 'react-hook-form'

const FindJob = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    trigger,
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
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [jobData, setJobData] = useState([])

  // const fetchJobsData = async () => {
  //   const res = await Applicant_Endpoints.get_all_jobs()
  //   if (res?.data?.jobs) {
  //     setJobData(res.data.jobs)
  //   }
  // }

  const onSearch = async (data) => {
    
    const filters = {
      title: data.title || undefined,
      locationId: formData.locationId || undefined,
      industryId: formData.industryId || undefined,
      experience: formData.experience || undefined,
      salary: formData.salary || undefined,
      jobType: formData.jobType || undefined,
    };
    
    console.log(filters, "filters before API call");

    try {
      const res = await Applicant_Endpoints.get_jobs_by_filter(filters);
      if (res?.data) {
        setJobData(res.data);
        console.log("Filtered Jobs:", res.data);
      }
    } catch (error) {
      console.error("Error in filter jobs", error);
    }
  };


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
    // fetchJobsData()
    fetchIndustry()
    fetchLocation()
  }, [])

  const navigate = useNavigate()
  const DetailPage = () => {
    navigate('/applicant/findjobs/detail')
  }
  // ------------- desktop advance dropdown
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const ModalOpen = () => {
    setIsSearchModalOpen(!isSearchModalOpen)
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
                {/* <div className='SearchOptions'>
                  <div className='OptionDiv'>
                    <h3 className='OptionTitle'>Experience</h3>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='experience' value='Freshers' checked={experienceSelected === "Freshers"} onChange={(e) => setExperienceSelected(e.target.value)} />
                      <label htmlFor='' className='RadioLabel'>Freshers</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='experience' value='1 - 2' checked={experienceSelected === "1 - 2"} onChange={(e) => setExperienceSelected(e.target.value)} />
                      <label htmlFor='' className='RadioLabel'>1 - 2 Years</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='experience' value='2 - 4' checked={experienceSelected === "2 - 4"} onChange={(e) => setExperienceSelected(e.target.value)} />
                      <label htmlFor='' className='RadioLabel'>2 - 4 Years</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='experience' value='4 - 6' checked={experienceSelected === "4 - 6"} onChange={(e) => setExperienceSelected(e.target.value)} />
                      <label htmlFor='' className='RadioLabel'>4 - 6 Years</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='experience' value='6 - 8' checked={experienceSelected === "6 - 8"} onChange={(e) => setExperienceSelected(e.target.value)} />
                      <label htmlFor='' className='RadioLabel'>6 - 8 Years</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='experience' value='8 - 10' checked={experienceSelected === "8 - 10"} onChange={(e) => setExperienceSelected(e.target.value)} />
                      <label htmlFor='' className='RadioLabel'>8 - 10 Years</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='experience' value='10 - 15' checked={experienceSelected === "10 - 15"} onChange={(e) => setExperienceSelected(e.target.value)} />
                      <label htmlFor='' className='RadioLabel'>10 - 15 Years</label>
                    </div>
                  </div>
                  <div className='OptionDiv'>
                    <h3 className='OptionTitle'>Salary</h3>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='salary' value='50 - 1000' checked={salarySelected === "50 - 1000"} onChange={(e) => setSalarySelected(e.target.value)} />
                      <label htmlFor='' className='RadioLabel'>$50 - $1000</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='salary' value='1000 - 2000' checked={salarySelected === "1000 - 2000"} onChange={(e) => setSalarySelected(e.target.value)} />
                      <label htmlFor='' className='RadioLabel'>$1000 - $2000</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='salary' value='2000 - 4000' checked={salarySelected === "2000 - 4000"} onChange={(e) => setSalarySelected(e.target.value)} />
                      <label htmlFor='' className='RadioLabel'>$3000 - $4000</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='salary' value='4000 - 6000' checked={salarySelected === "4000 - 6000"} onChange={(e) => setSalarySelected(e.target.value)} />
                      <label htmlFor='' className='RadioLabel'>$4000 - $6000</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='salary' value='6000 - 8000' checked={salarySelected === "6000 - 8000"} onChange={(e) => setSalarySelected(e.target.value)} />
                      <label htmlFor='' className='RadioLabel'>$6000 - $8000</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='salary' value='8000 - 10000' checked={salarySelected === "8000 - 10000"} onChange={(e) => setSalarySelected(e.target.value)} />
                      <label htmlFor='' className='RadioLabel'>$8000 - $10000</label>
                    </div>
                    <div className='Radiodiv'>
                      <Radio type="radio" id='' name='salary' value='10000 - 15000' checked={salarySelected === "10000 - 15000"} onChange={(e) => setSalarySelected(e.target.value)} />
                      <label htmlFor='' className='RadioLabel'>$10000 - $15000</label>
                    </div>
                  </div>
                  <div className='OptionDiv'>
                    <h3 className='OptionTitle'>Job Type</h3>
                    <div className='Radiodiv'>
                      <Checkbox type="checkbox" id='' name='jobType' value='all' checked={jobTypeSelected.includes("all")} onChange={handleJobTypeChange} />
                      <label htmlFor='' className='RadioLabel'>All</label>
                    </div>
                    <div className='Radiodiv'>
                      <Checkbox type="checkbox" id='' name='jobType' value='fulltime' checked={jobTypeSelected.includes("fulltime")} onChange={handleJobTypeChange} />
                      <label htmlFor='' className='RadioLabel'>Full Time</label>
                    </div>
                    <div className='Radiodiv'>
                      <Checkbox type="checkbox" id='' name='jobType' value='parttime' checked={jobTypeSelected.includes("parttime")} onChange={handleJobTypeChange} />
                      <label htmlFor='' className='RadioLabel'>Part Time</label>
                    </div>
                    <div className='Radiodiv'>
                      <Checkbox type="checkbox" id='' name='jobType' value='internship' checked={jobTypeSelected.includes("internship")} onChange={handleJobTypeChange} />
                      <label htmlFor='' className='RadioLabel'>Internship</label>
                    </div>
                    <div className='Radiodiv'>
                      <Checkbox type="checkbox" id='' name='jobType' value='remote' checked={jobTypeSelected.includes("remote")} onChange={handleJobTypeChange} />
                      <label htmlFor='' className='RadioLabel'>Remote</label>
                    </div>
                    <div className='Radiodiv'>
                      <Checkbox type="checkbox" id='' name='jobType' value='temporary' checked={jobTypeSelected.includes("temporary")} onChange={handleJobTypeChange} />
                      <label htmlFor='' className='RadioLabel'>Temporary</label>
                    </div>
                    <div className='Radiodiv'>
                      <Checkbox type="checkbox" id='' name='jobType' value='contractbase' checked={jobTypeSelected.includes("contractbase")} onChange={handleJobTypeChange} />
                      <label htmlFor='' className='RadioLabel'>Contract Base</label>
                    </div>
                  </div>

                </div> */}

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
                                    : type === "temporary"
                                      ? "Temporary"
                                      : "Contract Base"}
                        </label>
                      </div>
                    ))}
                  </div>

                </div>

              </SearchModal>
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
        />

      </MainSec>
    </div>
  )
}

export default FindJob