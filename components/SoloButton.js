import React from 'react';
import SoloExplain from './SoloExplain';

class SoloButton extends React.Component {
    constructor (props) {
        super(props);

        };


        render() {

            return (
                <div id="buttons">
                    <div id="circle">
                    </div>
                    
                      <SoloExplain />
                    

                    <style jsx>
                        {`
                            #circle {
    
                                background-color: hsl(0,0%,90%);
                                box-shadow: inset hsla(0,0%,15%,  1) 0  0px 0px 4px, /* border */
                                inset hsla(0,0%,15%, .8) 0 -1px 5px 4px, /* soft SD */
                                inset hsla(0,0%,0%, .25) 0 -1px 0px 7px, /* bottom SD */
                                inset hsla(0,0%,100%,.7) 0  2px 1px 7px, /* top HL */
                                
                                hsla(0,0%, 0%,.15) 0 -5px 6px 4px, /* outer SD */
                                hsla(0,0%,100%,.5) 0  5px 6px 4px; /* outer HL */ 
                              
                                transition: color .2s;
                            
                                /* Brushed Metal */
                                min-width: 150px;
                                width: 200px;
                                height: 50px;
                                line-height: 1px;
                                border-radius: 8px;
                                background-image: 
                                -webkit-radial-gradient(  50%   0%,  8% 50%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
                                -webkit-radial-gradient(  50% 100%, 12% 50%, hsla(0,0%,100%,.6) 0%, hsla(0,0%,100%,0) 100%),
                                -webkit-radial-gradient(   0%  50%, 50%  7%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
                                -webkit-radial-gradient( 100%  50%, 50%  5%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
                                
                                -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,  0%,0) 0%, hsla(0,0%,  0%,0)   3%, hsla(0,0%,  0%,.1) 3.5%),
                                -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0)   6%, hsla(0,0%,100%,.1) 7.5%),
                                -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.2) 2.2%),
                                
                                -webkit-radial-gradient( 50% 50%, 200% 50%, hsla(0,0%,90%,1) 5%, hsla(0,0%,85%,1) 30%, hsla(0,0%,60%,1) 100%);
                            
                              }
                              
                              #circle:before, #circle:after {
                                content: "";
                                top: 0%;
                                left: 0%;
                                position: relative;
                                width: inherit;
                                height: inherit;
                                border-radius: inherit;
                                
                                /* fake conical gradients */
                                background-image: 
                                  -webkit-radial-gradient(  50%   0%, 10% 50%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 0%),
                                  -webkit-radial-gradient(  50% 100%, 10% 50%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 0%),
                                  -webkit-radial-gradient(   0%  50%, 50% 10%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 0%),
                                  -webkit-radial-gradient( 100%  50%, 50% 06%, hsla(0,0%,0%,.1) 0%, hsla(0,0%,0%,0) 0%);
                              }
                              #circle:before { transform: rotate( 65deg); }
                              #circle:after { transform: rotate(-65deg); }
                            
                              #circle:active {
                                color: hsl(210, 100%, 40%);
                              text-shadow: hsla(210,100%,20%,.3) 0 -1px 0, hsl(210,100%,85%) 0 2px 1px, hsla(200,100%,80%,1) 0 0 5px, hsla(210,100%,50%,.6) 0 0 20px;
                              box-shadow: 
                                inset hsla(210,100%,30%,  1) 0  0px 0px 4px, /* border */
                                inset hsla(210,100%,15%, .4) 0 -1px 5px 4px, /* soft SD */
                                inset hsla(210,100%,20%,.25) 0 -1px 0px 7px, /* bottom SD */
                                inset hsla(210,100%,100%,.7) 0  2px 1px 7px, /* top HL */
                                
                                hsla(210,100%,75%, .8) 0  0px 3px 2px, /* outer SD */
                                hsla(210,50%,40%, .25) 0 -5px 6px 4px, /* outer SD */
                                hsla(210,80%,95%,   1) 0  5px 6px 4px; /* outer HL */
                              }

                            
                              /* End Brushed Metal */
                            
                            
                              #buttons {
                                justify-content: center;
                                align-content: center;
                                max-height: 75px;
                              }

                              @media (max-width: 720px) {

                                #buttons {
                                  display: inline-block;
                                  height: 50px;
                                  width: 100%;
                                  margin: auto;
                                }

                              
                              }

                              

                              
                        `}
                    </style>

                </div>
            )
        }
    }

export default SoloButton;