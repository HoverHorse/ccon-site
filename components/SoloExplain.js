import React from 'react';

class SoloExplain extends React.Component {
    constructor (props) {
        super(props);

        };

        render() {
            return (
                <div id="explainContainer">
                    <div className="allText">
                        <p id="soloButtonTag">Single-User</p>
                        <p id="soloExplain">One buyer access to the Revolution app.</p>
                    </div>

                    <style jsx>
                        {`

                        #explainContainer {
                            transform: translate(0%, -75px)
                            
                        }

                        .allText {
                            transform: translate(0%, 0%)
                            
                        }
                        
                        #soloExplain {
                            color: white;
                            pointer-events: none;
                            transform: translate(0%, 5px);
                            font-size: calc(14px + 0.4vw);
                        }

                        #soloButtonTag {
                            color: black;
                            text-decoration: underline;
                            font-weight: 600;
                            font-size: 1.5em;
                            transform: translate(0%, 6px)
                          }
                        

                        @media (max-width: 720px) {

                            #explainContainer{
                                position: absolute;
                                width: 100%;
                                height: 50px;
                                transform: translate(0%, -50px)
                            }

                            .allText {
                                position: absolute;
                                width: 100%;
                                height: 50px;
                                margin: auto;
                            }

                            #soloButtonTag {
                                position: absolute;
                                height: 50px;
                                width: 200px;
                                transform: translate(0%, -20px)
                            }

                            #soloExplain {
                                position: absolute;
                                color: white;
                                pointer-events: none;
                                width: 400px;
                                height: 50px;
                                margin-left: 220px;
                                transform: translate(0px, -2px)
                            }

                            
                        }

                            
                        
                        `}
                    </style>
                </div>
            )
        }
    }

export default SoloExplain;