import React, { useState } from 'react'
import { Main } from './style'
import searchicon from "../../../assets/icons/search.svg"
import profile from "../../../assets/images/Ellipse 18.png"
import { useNavigate } from 'react-router'

const ChatList = () => {
    const [isChatOpen, setIsChatOpen] = useState(false)
      const [activeChat, setActiveChat] = useState(null)
      const [searchChat, setSearchChat] = useState("")
      const navigate = useNavigate()
    
      const openDm = (id) => {
        navigate("/applicant/chat", { state: { id } })
        setIsChatOpen(true)
        setActiveChat(id)
      }
    
      const [person, setPerson] = useState([
        {
          id: 1,
          name: 'sara',
          msg: 'hey! how r u?',
          time: '9:00 AM'
        },
        {
          id: 2,
          name: 'eman',
          msg: 'hey! how r u?',
          time: '9:00 AM'
        },
        {
          id: 3,
          name: 'ali',
          msg: 'hey! how r u?',
          time: '9:00 AM'
        },
        {
          id: 4,
          name: 'hassan',
          msg: 'hey! how r u?',
          time: '9:00 AM'
        },
    
      ])
    
      const filterChat = person.filter(
        p => p.name.toLocaleLowerCase().includes(searchChat.toLocaleLowerCase())
      )
    
    return (
        <div>

            <Main>
                <form>
                    <div className="searchinput">
                        <img src={searchicon} alt="icon" />
                        <input type="search" placeholder="Search"  value={searchChat} onChange={(e) => setSearchChat(e.target.value)}/>
                    </div>
                </form>

                {filterChat ?

                    filterChat.map((items) => (

                        <div key={items.id} className={`channel ${activeChat === items.id ? "active" : ""}`} onClick={() => openDm(items.id)}>
                            <div className="channeltxt">
                                <img src={profile} alt="img" className="circle" />
                                <div>
                                    <h4 className="Heading">{items.name}</h4>
                                    <p className="SubHeading">{items.msg}</p>
                                </div>
                            </div>
                            <div className="SubHeading">
                                <span>{items.time}</span>
                            </div>
                        </div>

                    ))

                    :

                    (
                        <div className="channel">
                            <div className="SubHeading">Not found</div>
                        </div>
                    )

                }

            </Main>
        </div>
    )
}

export default ChatList