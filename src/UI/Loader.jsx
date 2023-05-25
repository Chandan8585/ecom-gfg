// import React from 'react'
// import ReactDom from "react-dom"

// // export const Backdrop = (props)=> {
// //      const handleClick = ()=> {
// //         if(props.onClose){
// //             props.onClose();    
// //         }
// //      }

// //      return (
// //         <div onClick={handleClick} className="loader-overlay"></div>
// //      )
// // }

// export const Backdrop = props => {
//     const handleClick = () => {
//         if(props.onClose) {
//             props.onClose();
//         }
//     }   

//     return (
//         <div onClick={handleClick} className="loader-overlay">

//         </div>
//     )
// }
// const Loader = () => {
//   return (
//     ReactDom.createPortal(
//         <>
//         <Backdrop/>
//     <div className='Loader'>
//     <div>Loader</div>
//     <div className="loader-dot"></div>
//     <div className="loader-dot"></div>
//     <div className="loader-dot"></div>
//     </div>
//     </>,
     
//      document.getElementById("loader-root")
//      )
//   )
// }

// export default Loader
import ReactDom from 'react-dom'

export const Backdrop = props => {
    const handleClick = () => {
        if(props.onClose) {
            props.onClose();
        }
    }

    return (
        <div onClick={handleClick} className="loader-overlay"></div>
    )
}

const Loader = () => {
    return (
        ReactDom.createPortal(
            <>
            <Backdrop/>
            <div className="loading-dots">
                <div>Loading</div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
            </div>
            </>,
            document.getElementById("loader-root")
        )
    )
}
//Added Loader feature

export default Loader

