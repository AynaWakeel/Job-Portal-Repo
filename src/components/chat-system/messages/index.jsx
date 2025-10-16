import React, { useRef, useState } from 'react'
import { ReactComponent as ArrowLeft } from '../../../assets/icons/fi_arrow-left.svg'
import profile from '../../../assets/images/Ellipse 18.png'
import attach from '../../../assets/icons/attach.svg'
import send from '../../../assets/icons/Send_Web.svg'
import { ReactComponent as Tick } from '../../../assets/icons/Read status.svg'
import Image1 from '../../../assets/images/Illustration.svg'
import Image2 from '../../../assets/images/Employers.png'
import Image3 from '../../../assets/images/welcome1.jpg'
import Image4 from '../../../assets/images/men1.jpg'
import Image5 from '../../../assets/images/men2.jpg'
import Image6 from '../../../assets/images/men3.jpg'
import Image7 from '../../../assets/images/welcome.png'
import FileIconPdf from '../../../assets/icons/page-black-icon.svg'
import ReportIcon from '../../../assets/icons/ban-solid-full.svg'
import Trash from '../../../assets/icons/trash-solid-full.svg'
import download from '../../../assets/icons/download.svg'
import { ChatLeft, ChatRight, DmChat, MessageBox, Options } from './style'

// Lightbox imports
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const Messages = ({ onBack }) => {
  const msgs = [
    { id: 1, user: "receiver", text: "Lorem ipsum dolor sit amet consectetur, elit. Sed, expedita.", time: "9.10 AM" },
    { id: 2, user: "receiver", text: "Lorem ipsum dolor sit amet consectetur", time: "9.11 AM" },
    { id: 3, user: "sender", text: "Lorem ipsum dolor sit amet consectetur", time: "9.20 AM", status: "read" },
    { id: 4, user: "sender", text: "Lorem ipsum dolor sit amet consectetur, elit.", time: "9.20 AM", status: "read" },
    { id: 5, user: "receiver", text: "Lorem ipsum dolor sit amet consectetur, elit......", time: "9.25 AM" },
    { id: 7, user: "sender", text: " reply me", time: "9.30 AM", status: "read" },
    { id: 8, user: "receiver", text: "i am fine", time: "9.11 AM" },
    { id: 9, user: "sender", text: "great", time: "9.20 AM", status: "read" },
    { id: 10, user: "sender", text: "send me..", time: "9.20 AM", status: "read" },
    { id: 11, user: "receiver", text: "what have you done, show me?", time: "9.25 AM" },
    { id: 12, user: "receiver", pic: [Image3], text: "Another photo from me.......", time: "9.30 AM", status: "delivered" },
    { id: 13, user: "receiver", fileName: 'Film Script', filetype: '.pdf', fileSize: '2 MB', time: "9.11 AM" },
    { id: 14, user: "receiver", fileName: 'Xl file', filetype: '.xlsx', fileSize: '3 MB', time: "9.11 AM" },
    { id: 15, user: "sender", fileName: 'Film Script', filetype: '.pdf', fileSize: '2 MB', time: "9.11 AM" },
    { id: 16, user: "sender", fileName: 'Xl file', filetype: '.xlsx', fileSize: '3 MB', time: "9.11 AM" },
    { id: 17, user: "sender", pic: [Image1, Image2, Image1, Image3, Image2, Image3], time: "9.30 AM", status: "delivered" },
    { id: 17, user: "receiver", pic: [Image4, Image5, Image6, Image7], time: "9.30 AM", status: "delivered" },
  ];

  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [lightboxImages, setLightboxImages] = useState([])
  const [blockStatus, setBlockStatus] = useState("block")

  const OpenGallery = (images, index) => {
    setLightboxImages(images.map(img => ({ src: img })))
    setPhotoIndex(index);
    setIsOpen(true);
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const docRef = useRef(null)
  const photoRef = useRef(null)

  const OpenFileInput = (type) => {
    if (type === "document") docRef.current.click()
    else if (type === "photo") photoRef.current.click()
  };

  return (
    <div>
      <DmChat>
        <div className="bar">
          <div className="channelheader">
            <div className="display" onClick={onBack}>
              <ArrowLeft className="color" />
            </div>
            <div>
              <img src={profile} alt="img" className="circle" />
            </div>
            <div>
              <h4 className="Heading">Ali</h4>
              <p className="SubHeading">Online</p>
            </div>
          </div>
          {blockStatus === "unblock" ?

            <div className='banDiv'>
              <img src={ReportIcon} alt='ban' />
              <p className="red">Block</p>
            </div>

            :

             <div className='banDiv'>
              <p className="red">Blocked</p>
            </div>
          }
        </div>

        <MessageBox>
          {msgs.map((msg, i) => {
            const prev = msgs[i - 1];
            const next = msgs[i + 1];
            const isFirstOfGroup = !prev || prev.user !== msg.user;
            const isLastOfGroup = !next || next.user !== msg.user;

            const Bubble = msg.user === "receiver" ? ChatLeft : ChatRight;
            const wrapperClass = msg.user === "receiver" ? "flex-col-left" : "flex-col-right";

            return (
              <div key={msg.id} className="full-width">
                <div className={wrapperClass}>
                  <Bubble className={`chat-bubble ${msg.user} ${isFirstOfGroup ? "first" : ""} ${isLastOfGroup ? "last" : ""}`}>
                    {msg.fileName ? (
                      <div className="fileInput">
                        <div className="file-div">
                          <img src={FileIconPdf} alt="icon" className='fileImg' />

                          <div className="file-txt-flex">
                            <h5 className={`filename ${msg.user === "sender" ? "right" : ""}`}>
                              {msg.fileName}
                              <span>{msg.filetype}</span>
                            </h5>
                            <p className={`filesize ${msg.user === "sender" ? "right" : ""}`}>{msg.fileSize}</p>
                          </div>
                        </div>
                        <span><img src={download} alt="icon" className='downloadImg' /></span>
                      </div>
                    ) : (
                      <>
                        {msg.pic && msg.pic.length > 0 && (
                          <div className="chat-image">
                            <img
                              src={msg.pic[0]}
                              alt="chat-img"
                              className="chat-img"
                              onClick={() => OpenGallery(msg.pic, 0)}
                              style={{ cursor: "pointer" }}
                            />
                            {msg.pic.length > 1 && (
                              <div className="pic-overlay" onClick={() => OpenGallery(msg.pic, 0)}>
                                +{msg.pic.length - 1}
                              </div>
                            )}
                          </div>
                        )}
                        {msg.text && <p className="SubHeading">{msg.text}</p>}
                      </>
                    )}
                  </Bubble>

                  {isLastOfGroup && (
                    <div className="SubHeading">
                      {msg.user === "sender" && msg.status && (
                        <span><Tick className={`color ${msg.status === "read" ? "active" : ""}`} /></span>
                      )}
                      <span>{msg.time}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </MessageBox>

        {/* Lightbox */}
        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={lightboxImages}
            plugins={[Thumbnails]}
            carousel={{ finite: true }}
            render={{

              buttonPrev: lightboxImages.length > 1 ? undefined : () => null,
              buttonNext: lightboxImages.length > 1 ? undefined : () => null,


              toolbar: ({ currentSlide }) => (
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                  onClick={() => {
                    if (currentSlide?.src) {
                      const link = document.createElement("a");
                      link.href = currentSlide.src;
                      link.download = "image.jpg";
                      link.click();
                    }
                  }}
                >
                  <img src={download} alt="download" style={{ width: "100px", height: "20px" }} />
                </button>
              ),
            }}
          />
        )}

        {/* block or unblock */}

        {blockStatus === "unblock" ?

          <div className="msgBar">
            <img src={attach} alt="icon" onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
            <form action="">
              {/* <input type="text" placeholder="Type your message" className="msginput" /> */}
              <textarea type="text" placeholder="Type your message" className="msgtextbox" ></textarea>
            </form>
            <span className="circle">
              <img src={send} alt="icon" />
            </span>
          </div>

          :

          <div className='blockBar'>
            <div className='banDiv'>
              <img src={Trash} alt='del' />
              <p className="red">Delete</p>
            </div>
            <div className='banDiv'>
              <img src={ReportIcon} alt='ban' />
              <p className="red">Unblock</p>
            </div>
          </div>


        }


        {isDropdownOpen && (
          <Options>
            <ul className="dropdown">
              <li onClick={() => OpenFileInput("document")}>Document</li>
              <li onClick={() => OpenFileInput("photo")}>Photos</li>
            </ul>

            <input
              type="file"
              ref={photoRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={(e) => console.log("Selected photo:", e.target.files)}
            />
            <input
              type="file"
              ref={docRef}
              style={{ display: "none" }}
              accept=".pdf,.doc,.docx,.txt"
              onChange={(e) => console.log("Selected document:", e.target.files)}
            />
          </Options>
        )}
      </DmChat>
    </div>
  );
};

export default Messages;
