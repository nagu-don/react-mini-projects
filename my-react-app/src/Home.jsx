import React from 'react'
import {Link} from "react-router-dom"
import "./Home.css"

const Home = () => {
  return (
      <div className='home-page container-fluid d-flex flex-column align-items-center justify-content-center vh-100 px-0'>
            <div className='row mb-5'>
                <div className='col'>
                    <h1>My React Mini Projects:</h1>
                </div>
            </div>
            <div className='row w-100 justify-content-evenly mt-5'>
                <div className='col-auto'>
                    <div className='card-display card ' style={{width: "18rem"}}>
                        <div className='card-body text-center'>
                            <h5 className='card-title'>
                                Stopwatch App
                            </h5>
                            <p className='card-text fs-6'>
                            This React-based Stopwatch App tracks time with a digital display. It includes three core controls: Start to begin timing, Stop to pause the timer, and Reset to return the display to 00:00:000. 
                            </p>
                        <Link to="/Stopwatch" className='btn btn-primary'>Open Project</Link>    
                        </div>
                    </div>
                </div>
                <div className='col-auto'>
                    <div className='card-display card ' style={{width: "18rem"}}>
                        <div className='card-body text-center'>
                            <h5 className='card-title'>
                                To-Do-List
                            </h5>
                            <p className='card-text fs-6'>
                            A simple and interactive To-Do List app built with React that allows users to add, organize, and manage daily tasks efficiently. Tasks can be deleted or reordered.
                            </p>
                        <Link to="/TodoList" className='btn btn-primary'>Open Project</Link>    
                        </div>
                    </div>
                </div>
                <div className='col-auto'>
                    <div className='card-display card ' style={{width: "18rem"}}>
                        <div className='card-body text-center'>
                            <h5 className='card-title'>
                                Alu-Cross
                            </h5>
                            <p className='card-text fs-6'>
                            This is a simple Alu-Cross game made using React.Two players take turns entering "O" or "X" on a grid. The game ends when one of the win conditions is satisfied or when all possible moves are made.
                            </p>
                        <Link to="/Alu-Cross" className='btn btn-primary'>Open Project</Link>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}



// const Home = () => {
//   return (
//     <div className='home-page container-fluid d-flex flex-column justify-content-center align-items-center vh-100 px-0'>

//       <div className='row mb-5'>
//         <div className='col text-center'>
//           <h1>My React Mini Projects:</h1>
//         </div>
//       </div>

//       <div className='row w-100 justify-content-evenly'>
        
//         <div className='col-auto'>
//           <div className='card-display card' style={{ width: "18rem" }}>
//             <div className='card-body text-center'>
//               <h5 className='card-title'>Stopwatch App</h5>
//               <p className='card-text fs-6'>
//                 This React-based Stopwatch App tracks time with a digital display formatted as 00 minutes : 00 seconds : 000 milliseconds. It includes three core controls: Start, Stop, and Reset.
//               </p>
//               <Link to="/Stopwatch" className='btn btn-primary'>Open Project</Link>
//             </div>
//           </div>
//         </div>

//         <div className='col-auto'>
//           <div className='card-display card' style={{ width: "18rem" }}>
//             <div className='card-body text-center'>
//               <h5 className='card-title'>Stopwatch App</h5>
//               <p className='card-text fs-6'>
//                 This React-based Stopwatch App tracks time with a digital display formatted as 00 minutes : 00 seconds : 000 milliseconds. It includes three core controls: Start, Stop, and Reset.
//               </p>
//               <Link to="/Stopwatch" className='btn btn-primary'>Open Project</Link>
//             </div>
//           </div>
//         </div>

//         <div className='col-auto'>
//           <div className='card-display card' style={{ width: "18rem" }}>
//             <div className='card-body text-center'>
//               <h5 className='card-title'>Stopwatch App</h5>
//               <p className='card-text fs-6'>
//                 This React-based Stopwatch App tracks time with a digital display formatted as 00 minutes : 00 seconds : 000 milliseconds. It includes three core controls: Start, Stop, and Reset.
//               </p>
//               <Link to="/Stopwatch" className='btn btn-primary'>Open Project</Link>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

export default Home