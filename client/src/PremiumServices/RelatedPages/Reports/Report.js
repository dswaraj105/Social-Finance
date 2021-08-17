import React, {useState} from "react";

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import img1 from "./report/page1.jpeg";
import img2 from "./report/page2.jpeg";
import img3 from "./report/page3.jpeg";
import img4 from "./report/page4.jpeg";
import img5 from "./report/page5.jpeg";
import img6 from "./report/page6.jpeg";
import img7 from "./report/page7.jpeg";
import img8 from "./report/page8.jpeg";
import img9 from "./report/page9.jpeg";
import img10 from "./report/page10.jpeg";
import img11 from "./report/page11.jpeg";
import img12 from "./report/page12.jpeg";
import img13 from "./report/page13.jpeg";
import img14 from "./report/page14.jpeg";
import img15 from "./report/page15.jpeg";
import img16 from "./report/page16.jpeg";
import img17 from "./report/page17.jpeg";
import img18 from "./report/page18.jpeg";
import img19 from "./report/page19.jpeg";
import img20 from "./report/page20.jpeg";
import img21 from "./report/page21.jpeg";
import img22 from "./report/page22.jpeg";
import img23 from "./report/page23.jpeg";
import img24 from "./report/page24.jpeg";
import img25 from "./report/page25.jpeg";
import img26 from "./report/page26.jpeg";
import img27 from "./report/page27.jpeg";
import img28 from "./report/page28.jpeg";
import img29 from "./report/page29.jpeg";
import img30 from "./report/page30.jpeg";
import img31 from "./report/page31.jpeg";
import img32 from "./report/page32.jpeg";
import img33 from "./report/page33.jpeg";
import img34 from "./report/page34.jpeg";
import img35 from "./report/page35.jpeg";
import img36 from "./report/page36.jpeg";
import img37 from "./report/page37.jpeg";
import img38 from "./report/page38.jpeg";
import img39 from "./report/page39.jpeg";
import img40 from "./report/page40.jpeg";
import img41 from "./report/page41.jpeg";

import cssClasses from './reoprt.module.css';

const IMAGES = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
];

export default function App() {
  const [imgno, setImgno] = useState(1);

  const onArrowClickHandler = (num) => {
    console.log(imgno);
    if(imgno === 1 && num === -1){
      return;
    }
    if(imgno === 41 && num === 1){
      return;
    }
    setImgno(state => state+num);
  }

  return (
    <div className="App">
      <div>
      <img className={cssClasses.report} src={IMAGES[imgno-1]} alt="Exclusive electric cars report"></img>
      </div>
      <div className={cssClasses.controllers} >
        <KeyboardArrowLeftIcon onClick={onArrowClickHandler.bind(null,-1)}  className={cssClasses.arrow} />
        <KeyboardArrowRightIcon onClick={onArrowClickHandler.bind(null,1)} className={cssClasses.arrow}  />
        <span className={cssClasses.text}>Page {imgno} of 41</span>
      </div>
    </div>
  );
}
