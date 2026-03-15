import React, { useEffect, useState, useRef } from 'react'
import "./StopWatch.css"
import {Link} from "react-router-dom"

const StopWatch = () => {

  const [started,changeStart]=useState(false)
  const [elapsedTime,setElapsedTime]=useState(0)
  const intervalRef=useRef(null)
  const startTimeRef=useRef(0)

  useEffect(()=>{
    if(started){
      intervalRef.current=setInterval(()=>{
        setElapsedTime(Date.now()-startTimeRef.current)
      },10)
    }
    return()=>{
      clearInterval(intervalRef.current)
    }
  },[started])
  function timeStart(){
      startTimeRef.current=Date.now()-elapsedTime
      changeStart(true)
  }
  function timeStop(){
    changeStart(false)
  }
  function timeReset(){
    setElapsedTime(0)
    changeStart(false)
  }
  function showTime(){
    let minutes=Math.floor(elapsedTime/(1000*60)%60);
    let seconds=Math.floor(elapsedTime/(1000)%60);
    let miliseconds=Math.floor(elapsedTime%1000);

    minutes=String(minutes).padStart(2,"0")
    seconds=String(seconds).padStart(2,"0")
    miliseconds=String(miliseconds).padStart(3,"0")

    return `${minutes}:${seconds}:${miliseconds}`
  }

  
  return (
    <div className='stopwatch-container'>
      <div className="container d-flex justify-content-center align-items-center vh-100 text-white text-monospace">
        
        <div className="text-center">
          <div className="row">
            <div className="col">
              {showTime()}
            </div>
          </div>

          <div className="row">
            <div className="col">
              <button className="btn btn-success btn-lg" onClick={timeStart}>Start</button>
            </div>
            <div className="col">
              <button className="btn btn-danger btn-lg" onClick={timeStop}>Stop</button>
            </div>
            <div className="col">
              <button className="btn btn-warning btn-lg" onClick={timeReset}>Reset</button>
            </div>
          </div>
          <div className='row justify-content-center mt-3'>
            <div className='col-5'>
              <Link to="/" className="btn btn-primary btn-lg w-100">Home</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StopWatch


