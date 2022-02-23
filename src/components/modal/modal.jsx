import React from "react";
import "./modal.css";

function Modal({ setOpenModal,minutes,seconds,breakTime }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
            {
                !breakTime&&
                <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            }
         
        </div>
        <div className="title">
          <h1> Take a Break !</h1>
        </div>
        <div className="body">
            {
                !breakTime?
                <p>Break Complete</p>
                :
                <p>{minutes<10?'0'+minutes:minutes} : {seconds<10?'0'+seconds:seconds}</p>
            }
         
        </div>
        <div className="footer">
        {
            !breakTime&&
            <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Complete
          </button>
        }
        </div>
      </div>
    </div>
  );
}

export default Modal;