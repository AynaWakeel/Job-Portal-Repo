import React, { useState } from "react";
import { ChatDiv, ChatSidebar, DmChat } from "./style";
import searchicon from "../../../assets/icons/search.svg";
import profile from "../../../assets/images/Ellipse 18.png";
import profile2 from "../../../assets/images/Profile pic.png";
import Messages from "../messages";
import { useNavigate } from "react-router";

const ChatSystem = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();

  const openDm = () => {
    navigate("/applicant/chat");
    setIsChatOpen(true);
  };

  const backToSidebar = () => {
    setIsChatOpen(false);
  };

  return (
    <ChatDiv>
      {/* ------------------ desktop  --------------- */}
      <ChatSidebar className="desktop">
        <form>
          <div className="searchinput">
            <img src={searchicon} alt="icon" />
            <input type="search" placeholder="Search" />
          </div>
        </form>

        <div className="channel active" onClick={openDm}>
          <div className="channeltxt">
            <img src={profile} alt="img" className="circle" />
            <div>
              <h4 className="Heading active">Name</h4>
              <p className="SubHeading active">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="SubHeading active">
            <span>9.10</span>&nbsp;<span>AM</span>
          </div>
        </div>

        <div className="channel" onClick={openDm}>
          <div className="channeltxt">
            <img src={profile2} alt="img" className="circle" />
            <div>
              <h4 className="Heading">Name</h4>
              <p className="SubHeading">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="SubHeading">
            <span>9.10</span>&nbsp;<span>AM</span>
          </div>
        </div>

         <div className="channel " onClick={openDm}>
          <div className="channeltxt">
            <img src={profile} alt="img" className="circle" />
            <div>
              <h4 className="Heading ">Name</h4>
              <p className="SubHeading ">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="SubHeading ">
            <span>9.10</span>&nbsp;<span>AM</span>
          </div>
        </div>

        <div className="channel" onClick={openDm}>
          <div className="channeltxt">
            <img src={profile2} alt="img" className="circle" />
            <div>
              <h4 className="Heading">Name</h4>
              <p className="SubHeading">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="SubHeading">
            <span>9.10</span>&nbsp;<span>AM</span>
          </div>
        </div>

         <div className="channel " onClick={openDm}>
          <div className="channeltxt">
            <img src={profile} alt="img" className="circle" />
            <div>
              <h4 className="Heading ">Name</h4>
              <p className="SubHeading ">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="SubHeading ">
            <span>9.10</span>&nbsp;<span>AM</span>
          </div>
        </div>

        <div className="channel" onClick={openDm}>
          <div className="channeltxt">
            <img src={profile2} alt="img" className="circle" />
            <div>
              <h4 className="Heading">Name</h4>
              <p className="SubHeading">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="SubHeading">
            <span>9.10</span>&nbsp;<span>AM</span>
          </div>
        </div>
      </ChatSidebar>

      <DmChat className="desktop">
        <Messages />
      </DmChat>

      {/* ------------- moobile chat msg ----------------- */}
      {isChatOpen ? (
        <DmChat className="mobile">
          <Messages onBack={backToSidebar}/>
        </DmChat>
      ) : (
        <ChatSidebar className="mobile">
          <form>
            <div className="searchinput">
              <img src={searchicon} alt="icon" />
              <input type="search" placeholder="Search" />
            </div>
          </form>

           <div className="channel active" onClick={openDm}>
          <div className="channeltxt">
            <img src={profile} alt="img" className="circle" />
            <div>
              <h4 className="Heading active">Name</h4>
              <p className="SubHeading active">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="SubHeading active">
            <span>9.10</span>&nbsp;<span>AM</span>
          </div>
        </div>

        <div className="channel" onClick={openDm}>
          <div className="channeltxt">
            <img src={profile2} alt="img" className="circle" />
            <div>
              <h4 className="Heading">Name</h4>
              <p className="SubHeading">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="SubHeading">
            <span>9.10</span>&nbsp;<span>AM</span>
          </div>
        </div>

         <div className="channel " onClick={openDm}>
          <div className="channeltxt">
            <img src={profile} alt="img" className="circle" />
            <div>
              <h4 className="Heading ">Name</h4>
              <p className="SubHeading ">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="SubHeading ">
            <span>9.10</span>&nbsp;<span>AM</span>
          </div>
        </div>

        <div className="channel" onClick={openDm}>
          <div className="channeltxt">
            <img src={profile2} alt="img" className="circle" />
            <div>
              <h4 className="Heading">Name</h4>
              <p className="SubHeading">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="SubHeading">
            <span>9.10</span>&nbsp;<span>AM</span>
          </div>
        </div>
        </ChatSidebar>
      )}
    </ChatDiv>
  );
};

export default ChatSystem;
