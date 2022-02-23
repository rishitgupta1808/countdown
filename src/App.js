import './App.css';
import React,{useEffect, useRef, useState} from "react"
import Modal from "./components/modal/modal.jsx";
import TopBar from './components/topbar/topbar';
import LinearProgress from '@mui/material/LinearProgress';

function App() {

  const [minutes,setMinutes] = useState(0)
  const [seconds,setSeconds] = useState(0)
  const [val,setVal] = useState()
  const [breakTime,setBreakTime] = useState(false)
  const [openModal,setOpenModal] = useState(false)
  const [progress,setProgress] = useState(0)
  const [buttonStart,setButtonStart] = useState(false)

  const stopTimer = () =>{
    setButtonStart(false)
    clearInterval(val)
  }

  const startTimer = () =>{
    
    setButtonStart(true)
    let breakBool = breakTime
    let sec= seconds
    let min = minutes
    let prog = 0;

    if(breakTime)
    min=5;

    let diff
    if(min!=0)
    diff= 100/(minutes*60);
    else
    diff = 100/sec


    var interval = setInterval(()=>{

      if(min<=0&&sec<=0){
        clearInterval(interval)
        setProgress(0)
        setButtonStart(false)
        setBreakTime(!breakBool)
        return;
      }
      
      prog = prog+diff
      console.log(prog)
      setProgress(prog)

      if(sec<=0){
        min= min-1;
        setMinutes(min)
        sec=60
      }
      sec=sec-1;
      setSeconds(sec)

    },1000)

    setVal(interval)
  }


  const resetTimer = ()=>{
    clearInterval(val)
    setSeconds(0)
    setMinutes(25)
  }


  useEffect(()=>{
    console.log(breakTime)
    if(!breakTime){
      setSeconds(0)
      setMinutes(25)
    }
    else if(breakTime){
      setSeconds(0)
      setMinutes(5) 
      startTimer()
      setOpenModal(true)
    }
    
  },[breakTime])


  return (
    <div className="App">
    <div className="main-body">
      <TopBar/>
      <LinearProgress variant="determinate" value={progress} color="inherit"/>

      <div className="box">
       <div className="timer">
         {minutes<10?'0'+minutes:minutes} : {seconds<10?'0'+seconds:seconds}
         </div>
       <br/>
       <span>
         {
           !buttonStart?
           <button className="button-start" onClick={startTimer}>START</button>
           :
           <button onClick={stopTimer} className="button-stop">STOP</button>
         }

          <div onClick={resetTimer} style={{marginTop:`15px`,cursor:`pointer`}}>
            Reset
          </div>

       </span>
       </div>
    </div>
    {openModal?<Modal setOpenModal={setOpenModal} minutes={minutes} seconds={seconds} breakTime={breakTime} />:<></>} 
    </div>
  );
}

export default App;
