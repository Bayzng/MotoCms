import React from "react";
import imageOne from "../../Assets/basic1.png";
import imageTwo from "../../Assets/basic2.png";
import imageThree from "../../Assets/basic3.png";
import imageFour from "../../Assets/basic4.png";
import imageFive from "../../Assets/basic5.png";
import { AiFillYoutube } from "react-icons/ai"
import "./basic.css";

const Basic = () => {
  return (
    <div>

        <h1 className="haader">Healthy Basics. Video</h1>

        <div className="basic sizeOne">

            <div className="extrals">
                <img src={imageOne} alt="" />
                <div className="imageContent">
                    <AiFillYoutube className="youtube"/>
                    <h3>How to make a Chai puddling</h3>
                </div>
            </div>

            <div className="basicOne sizeTwo">

                <div className="basicContent">
                    <div>
                        <img src={imageTwo} alt="" />
                        <div className="imageContent">
                            <AiFillYoutube className="youtube"/>
                            <h3>How to make a Chai puddling</h3>
                        </div>
                    </div>

                    <div className="extrals">
                        <img src={imageThree} alt="" />
                        <div className="imageContent">
                            <AiFillYoutube className="youtube"/>
                            <h3>How to make a Chai puddling</h3>
                        </div>
                    </div>
                </div>

                <div className="basicContent">
                    <div>
                        <img src={imageFour} alt="" />
                        <div className="imageContent">
                            <AiFillYoutube className="youtube"/>
                            <h3>How to make a Chai puddling</h3>
                        </div>
                    </div>

                    <div className="extrals">
                        <img src={imageFive} alt="" />
                        <div className="imageContent">
                            <AiFillYoutube className="youtube"/>
                            <h3>How to make a Chai puddling</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
};

export default Basic;
