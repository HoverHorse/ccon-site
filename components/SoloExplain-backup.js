import React from 'react';

class SoloExplain extends React.Component {
    constructor (props) {
        super(props);

        };

        render() {
            return (
                <div id="explainContainer">
                    <div>
                        <p id="soloButtonTag">Single-User</p>
                        <p id="soloExplain">One buyer access to the Revolution app.</p>
                    </div>

                    <style jsx>
                        {`
                        
                        #soloExplain {
                            color: white;
                            pointer-events: none;
                            transform: translate(0%, -50%)
                        }
                        
                        @media only screen and (max-width: 608px) {
                            #explainContainer{
                                transform: translate(0%, 0%)
                            }
                        }

                        #soloButtonTag {
                            color: white;
                            text-decoration: underline;
                            position: relative;
                            font-weight: 600;
                            font-size: 1.5em;
                            
                          }
                        
                        `}
                    </style>
                </div>
            )
        }
    }

export default SoloExplain;