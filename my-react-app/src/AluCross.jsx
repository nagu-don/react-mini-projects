import React, { useState } from 'react'
import "./AluCross.css"
import alu from "../assets/alu.png"
import cross from "../assets/cross.png"

const AluCross = () => {
    const [gameState,changeGameState]=useState(".........")
    const [count,setCount]=useState(0)
    const winConditions=[
            [0,1,2],
            [3,4,5],
            [6,7,8],

            [0,3,6],
            [1,4,7],
            [2,5,8],

            [0,4,8],
            [2,4,6]
        ]

    function buttonClicked(i){
        let newGameState=gameState
        const thisChar=newGameState[i-1]
        const pos="b"+i
        if(thisChar==="."){
            if(count%2!==0){
                newGameState=newGameState.slice(0,i-1)+"x"+newGameState.slice(i)
                document.getElementById(pos).innerHTML=`<img src="${cross}"/>`
            }else{
                newGameState=newGameState.slice(0,i-1)+"o"+newGameState.slice(i)
                document.getElementById(pos).innerHTML=`<img src="${alu}"/>`
            }
            changeGameState(newGameState)
            setCount(c=>c+1)
        }
        else{
            alert("Invalid Move")
        }
        winCheck(newGameState)
    }
    function winCheck(State){
        for(let i=0;i<8;i++){
            let [a,b,c]=winConditions[i]
            if(State[a]!=="."){
                if(State[a]===State[b]&&State[b]===State[c]){
                    alert(`${State[a]} - wins`)
                    resetGame()
                }
            }
        }
        if(count==8){
            alert("Draw")
            resetGame()
        }
    }
    function resetGame(){
        setCount(0)
        changeGameState('.........')
        for(let i=1;i<=9;i++){
            document.getElementById(`b${i}`).innerHTML=''
        }
    }

    return (
        <div className='alu-cross-container'>
            <div className='container d-flex flex-column align-items-center justify-content-center mt-3'>
                <h1 className='display-2 mb-4'>Alu Cross</h1>
                <div className='d-grid alu-cross-grid'>
                    <button className='btn btn-light alu-cross-btn'id='b1' onClick={()=>buttonClicked(1)}></button>
                    <button className='btn btn-light alu-cross-btn'id='b2' onClick={()=>buttonClicked(2)}></button>
                    <button className='btn btn-light alu-cross-btn'id='b3' onClick={()=>buttonClicked(3)}></button>
                    <button className='btn btn-light alu-cross-btn'id='b4' onClick={()=>buttonClicked(4)}></button>
                    <button className='btn btn-light alu-cross-btn'id='b5' onClick={()=>buttonClicked(5)}></button>
                    <button className='btn btn-light alu-cross-btn'id='b6' onClick={()=>buttonClicked(6)}></button>
                    <button className='btn btn-light alu-cross-btn'id='b7' onClick={()=>buttonClicked(7)}></button>
                    <button className='btn btn-light alu-cross-btn'id='b8' onClick={()=>buttonClicked(8)}></button>
                    <button className='btn btn-light alu-cross-btn'id='b9' onClick={()=>buttonClicked(9)}></button>
                </div>
                <div className='mt-3'>
                    <button className='btn btn-danger' onClick={resetGame}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default AluCross
