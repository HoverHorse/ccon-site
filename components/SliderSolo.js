import React from 'react';
import SoloContent1 from './SoloContent1';
import SoloContent2 from './SoloContent2';
import SoloContent3 from './SoloContent3';
import CloseButton from './CloseButton';


export default class SliderSolo extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            slide1: "slide1",
            slide2: "slide2",
            slide3: "slide3",
            slideClass: "slide3",
            seeArrowRight: "visible",
            seeArrowLeft: "hidden",
        }

        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    };

    slideRight() {
        if (this.state.slideClass === this.state.slide1)
        {
            this.setState({ slideClass : this.state.slide2, seeArrowRight : "visible" })
        } 
        else if (this.state.slideClass === this.state.slide2)
        {
            this.setState({ slideClass : this.state.slide3, seeArrowLeft : "hidden" })
        } 
    }

    slideLeft() {
        if (this.state.slideClass === this.state.slide3)
        {
            this.setState({ slideClass : this.state.slide2, seeArrowLeft : "visible" })
        } 
        else if (this.state.slideClass === this.state.slide2)
        {
            this.setState({ slideClass : this.state.slide1, seeArrowRight : "hidden" })
        }
    }
    

    render() {
        
        if (this.props.show === true) {
        return (
            
            <div className="slider">
                        <div className={this.state.slideClass} >
                           <SoloContent1 />
                           <SoloContent2 />
                           <SoloContent3 />
                        </div>
                        
                <button className={this.state.seeArrowLeft} id="goLeft" onClick={this.slideRight}><i className="ChevronLeft" id="left"></i></button>
                <button className={this.state.seeArrowRight} id="goRight" onClick={this.slideLeft}><i className="ChevronRight" id="right"></i></button>
                <a onClick={this.props.onClose} id="closeLink"><CloseButton id="close" /></a>

                <style jsx>
                    {`

                        .hidden {
                            opacity: 0;
                            transition: opacity 0.5s linear;
                            pointer-events: none;
                        }

                        .visible {
                            opacity: 1;
                            transition: opacity 0.5s linear;
                            pointer-events: visible;
                        }

                        .ChevronLeft {
                            position: absolute;
                            height: 75px;
                            width: 75px;
                            z-index: 10;
                            transform: rotate(90deg)
                        }

                        .ChevronRight {
                            position: absolute;
                            height: 75px;
                            width: 75px;
                            z-index: 10;
                            transform: rotate(-90deg)
                        }

                        #left {
                            right: 40px;
                            top: 0px;
                        }

                        #right {
                            right: -40px;
                            top: -5px;
                        }

                        .ChevronLeft::before,
                        .ChevronLeft::after {
                            position:absolute;
                            display:block;
                            content:"";
                            border:35px solid transparent; 
                        }
                        
                        .ChevronLeft::before {
                            
                            border-top-color:#b00; 
                        }
                        .ChevronLeft::after {
                            top:-10px; 
                            border-top-color:#fff; 
                        }

                        .ChevronRight::before,
                        .ChevronRight::after {
                            position:absolute;
                            display:block;
                            content:"";
                            border:35px solid transparent; 
                        }
                        
                        .ChevronRight::before {
                            
                            border-top-color:#b00;
                        }
                        .ChevronRight::after {
                            top:-10px;
                            border-top-color:#fff;
                        }

                        #closeLink {
                            position: absolute;
                            width: 25px;
                            height: 25px;
                            cursor: pointer;
                            right: 2.5%;
                            top: 4.5%;
                            
                        }

                        button {
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            width: 75px;
                            height: 75px;
                            background: none;
                            border: none;
                            cursor: pointer;
                        }

                        button:focus {
                            outline: none;
                            box-shadow: none;
                        }

                        #goLeft {
                            left: 0.5%;
                            filter: drop-shadow(-4px 3px 3px black);
                        }

                        #goRight {
                            right: 0.5%;
                            filter: drop-shadow(4px 3px 3px black);
                        }

                        .my-transition {
                            transition: transform;
                        }

                        .translate_100 {
                            transform: translateX(100%)
                        }

                        .translate_200 {
                            transform: translateX(200%)
                        }

                        .slider {
                            width: 100%;
                            height: 100%;
                            box-sizing: border-box;
                            display: flex;
                            align-items: center;
                            min-width: 450px;
                            overflow: hidden;
                            
                        }

                        i {
                            font-size: 2vw;
                        } 

                        .slide1 {
                            position: relative;
                            width: 100%;
                            height: 60vh;
                            margin: auto;
                            transition: transform 0.5s;
                        }

                        .slide2 {
                            position: relative;
                            width: 100%;
                            height: 60vh;
                            margin: auto;
                            transition: transform 0.5s;
                            transform: translateX(115%);
                            
                        }

                        .slide3 {
                            position: relative;
                            width: 100%;
                            height: 60vh;
                            margin: auto;
                            transition: transform 0.5s;
                            transform: translateX(225%);
                        }

                        @media (max-width: 720px) {

                            .slider {
                                min-height: 525px;
                            }

                            .slide3 {
                                height: 80vh;
                                margin-top: 0%
                            }

                            .slide2 {
                                height: 80vh;
                                margin-top: 0%
                            }

                            .slide1 {
                                height: 80vh;
                                margin-top: 0%
                            }

                            #closeLink {
                                top: 10px;
                                right: 15px;
                            }
                        }

                    `}
                </style>
            </div>
        );} else {
            return null;
        }
    }
}