import React from 'react';

class CorpExplain extends React.Component {
    constructor (props) {
        super(props);

        };

        render() {
            return (
                <div id="explainContainer">
                    <div>
                        <p id="corpButtonTag" >Multi-Location</p>
                        <p id="corpExplain">Multiple converter buyers from several physical locations.</p>
                    </div>

                    <style jsx>
                        {`
                        
                        #corpExplain {
                            color: white;
                            pointer-events: none;
                            transform: translate(0%, -35%)
                        }
                        
                        @media only screen and (max-width: 608px) {
                            #explainContainer{
                                transform: translate(0%, -0%)
                            }
                        }

                        #corpButtonTag {
                            color:  white;
                            text-decoration: underline;
                            position: relative;
                            font-weight: 600;
                            font-size: 1.5em;
                            min-width: 163px;
                          }

                        `}
                    </style>
                </div>
            )
        }
    }

export default CorpExplain;