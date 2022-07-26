// //Carousel.jsx
// import './carousel.scss'
// import image1 from '../../img/image1.png'
// import image2 from '../../img/image2.png'
// import image3 from '../../img/image3.png'
// import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
// import { useState } from 'react'

// const Carousel = () => {

//     const [slideIndex, setSlideIndex] = useState(0);
//     const handleClick  =(direction) => {
//         if(direction === "left"){
//             setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
//         }
//         else{
//             setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
//         }
//     };
//     return (
//         <div className="container">
//             <div className="arrow" style={{ left: "10px" }} onClick={()=>handleClick("left")}>
//                 <ArrowLeftOutlined />
//             </div>
//             <div className="wrapper" slideIndex={slideIndex} style={{transform: "translateX( ${ (props) => props.slideIndex * -100}vw )"}}>
//                 <div className="slide">
//                     <div className="imgContainer">
//                         <img src={image1} alt="kjnk" />
//                     </div>
//                 </div>
//                 <div className="slide">
//                     <div className="imgContainer">
//                         <img src={image2} alt="kjnk" />
//                     </div>
//                 </div>
//                 <div className="slide">
//                     <div className="imgContainer">
//                         <img src={image3} alt="kjnk" />
//                     </div>
//                 </div>
//             </div>
//             <div className="arrow" style={{ right: "10px" }} onClick={()=>handleClick("right")}>
//                 <ArrowRightOutlined />
//             </div>
//         </div>
//     )
// }

// export default Carousel

// carousel scss
// .container{
//     width: auto;
//     height: 414.5px;
//     display: flex;
//     position: relative;
//     overflow: hidden;

//     .arrow{
//         width: 50px;
//         height: 50px;
//         background-color: #fff7f7;
//         border-radius: 50%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         position: absolute;
//         top: 0;
//         bottom: 0;
//         margin: auto;
//         cursor: pointer;
//         opacity: 0.5;
//         z-index: 2;
//     }

//     .wrapper{
//         height: 100%;
//         display: flex;
//         border: 1px solid red;

//         .slide{
//             width: 100vw;
//             height: 100vh;
//             display: flex;
//             align-items: center;
//             cursor: pointer;


//             .imgContainer{
//                 height: 100%;
//                 flex: 1;

//                 img{
//                     height: 58.7%;
//                 }
//             }

//         }
//     }
// }
