import React from 'react';

class Why extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            imgURL: './assets/why-we-do.jpg'
        }

        };

        render() {
            return (
                <div id="whoContainer">
                    <div id="imgContainer" style={{textAlign: "center"}}>
                    <img id="whoImg" src={this.state.imgURL} style={{}}></img>
                    <div id="whoContent">
                        <strong><u style={{textShadow: "1px 1px 1px black"}}>Why we do it:</u></strong><br />
                        To bring clarity and integrity to an industry that is plagued with cloudiness and uncertainty.
                    </div>
                    </div>

                    


                    <style jsx>
                        {`

                        #whoContainer {
                            height: 100%;
                            width: 200px;
                            text-align: center;
                            justify-content: center;
                        }

                        #whoImg {
                            height: 200px;
                            width: 200px;
                            background-color: black;
                            margin: auto;
                            border-radius: 50%;
                            border: 2px black solid;
                            box-sizing: border-box;
                            
                        }

                        #whoContent {
                            color: white;
                            margin-top: 0px;
                            transform: translate(0, 0px);
                            font-size: calc(12px + 0.3vw);
                        }

                        @media (max-width: 720px) {

                            #imgContainer {
                                height: 100%;
                                width: 100%;
                                overflow: hidden;
                                border-radius: 0%;
                                border: 2px black solid;
                                box-sizing: border-box;
                            }

                            #whoContainer {
                                height: 100%;
                                width: 100%;
                                margin: auto;
                                overflow: hidden;
                            }
    
                            #whoImg {
                                height: 100vh;
                                width: 100%;
                                max-width: 720px;
                                max-height: 400px;
                                background-color: black;
                                margin: auto;
                                border-radius: 0%;
                                border: 2px black solid;
                                box-sizing: border-box;
                                top: 50%;
                                left: 50%;
                                transform: translate(0%, -30%);
                                
                            }
    
                            #whoContent {
                                
                                transform: translate(0, -370px);
                                width: 90%;
                                margin: auto;
                                color: white;
                                font-size: calc(12px + 1.3vw);
                                text-shadow: 2px 2px 2px black;
                            }

                        }
                        
                        `}
                    </style>
                </div>
            )
        }
    }

export default Why;