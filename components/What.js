import React from 'react';

class What extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            imgURL: './assets/what-we-do.jpg'
        }

        };

        render() {
            return (
                <div id="whatContainer">
                    <div id="imgContainer" style={{textAlign: "center"}}>
                        <img id="whatImg" src={this.state.imgURL} style={{}}></img>
                    <div id="whatContent">
                        <strong><u style={{textShadow: "1px 1px 1px black"}}>What we do:</u></strong><br />
                        We are the largest volume buyer and processor of catalytic converters in western Canada.
                    </div>
                    </div>

                    


                    <style jsx>
                        {`

                        

                        #whatContainer {
                            height: 100%;
                            width: 200px;
                            text-align: center;
                            justify-content: center;
                        }

                        #whatImg {
                            height: 200px;
                            width: 200px;
                            background-color: black;
                            margin: auto;
                            border-radius: 50%;
                            border: 2px black solid;
                            box-sizing: border-box;
                            
                        }

                        #whatContent {
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

                            #whatContainer {
                                height: 100%;
                                width: 100%;
                                margin: auto;
                                overflow: hidden;
                            }
    
                            #whatImg {
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
    
                            #whatContent {
                                color: white;
                                transform: translate(0, -370px);
                                width: 90%;
                                margin: auto;
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

export default What;