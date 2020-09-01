import React from 'react';

class CorpExplain extends React.Component {
    constructor (props) {
        super(props);

        };

        render() {
            return (
                <div id="explainContainer">
                    <div className="allText">
                        <p id="corpButtonTag" >Multi-Location</p>
                        <p id="corpExplain">Multiple converter buyers from several physical locations.</p>
                    </div>

                    <style jsx>
                        {`
                        
                        #explainContainer {
                            transform: translate(0%, -75px)
                        }

                        .allText {
                            transform: translate(0%, 0%)
                        }

                        #corpButtonTag {
                            font-weight: 600;
                            font-size: 1.5em;
                            color: black;
                            text-decoration: underline;
                            transform: translate(0%, 6px)
                        }
                        
                        #corpExplain {
                            color: white;
                            pointer-events: none;
                            transform: translate(0%, 5px);
                            font-size: calc(14px + 0.4vw);
                        }
                        
                        @media (max-width: 720px) {

                            #explainContainer{
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                transform: translate(0%, -50px)
                            }

                            .allText {
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                margin: auto;
                            }

                            #corpButtonTag {
                                position: absolute;
                                height: 50px;
                                width: 200px;
                                transform: translate(0%, -20px)
                            }

                            #corpExplain {
                                position: absolute;
                                color: white;
                                pointer-events: none;
                                width: 400px;
                                height: 50px;
                                margin-left: 220px;
                                transform: translate(0%, -15px)
                            }

                    }

                        `}
                    </style>
                </div>
            )
        }
    }

export default CorpExplain;