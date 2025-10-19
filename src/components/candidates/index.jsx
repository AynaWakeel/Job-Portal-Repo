import React, { useState } from 'react'
import { CompanyCards, MainSec, Pagination } from './style'
import { useNavigate } from 'react-router'

const Candidates = ({ applicants, currentPage, totalPages, setCurrentPage }) => {
    const navigate = useNavigate()

    const ViewProfile = (id) => {
        navigate('/recruiter/applicant-profile', { state: { id } })
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div>
            <MainSec>
                <CompanyCards>

                    <div className='CardDiv'>
                        <div className='Grid'>
                            {applicants.map((items) => (
                                <div className='Card'>
                                    <div className='CardFlex'>
                                        <div className='photo'>
                                            <img src={items.profilepic} className='IconColor' />
                                        </div>

                                        <div>
                                            <h3 className='Heading'>{items.name} - {items.id}</h3>
                                            <h4 className='FlexIcon'>
                                                <span className='SubHeading'>{items.title}</span>
                                            </h4>
                                        </div>
                                    </div>
                                    <button className='CardBtn' onClick={() => ViewProfile(items.id)}>View Profile</button>
                                </div>
                            ))}

                        </div>
                    </div>

                </CompanyCards>

                <Pagination>
                    <div>
                        <button className={`${currentPage === 1 ? "BtnOff" : "Btn"}`} onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
                    </div>
                    <div>
                        <span className='Num'>{currentPage}</span>
                    </div>
                    <div>
                        <button className={`${currentPage === totalPages ? "BtnOff" : "Btn"}`} onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                    </div>
                </Pagination>

            </MainSec>
        </div>
    )
}

export default Candidates