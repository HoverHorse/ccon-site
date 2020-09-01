import React from 'react';

class SmallExplain extends React.Component {
    constructor (props) {
        super(props);

        };

        render() {
            return (
                <div id="explainContainer">
                    <div>
                        <p id="smallButtonTag">Multi-User</p>
                        <p id="smallExplain">Multiple converter buyers from a single physical location.</p>
                    </div>

                    <style jsx>
                        {`
                        
                        #smallExplain {
                            color: white;
                            pointer-events: none;
                            transform: translate(0%, -35%)
                        }
                        
                        @media only screen and (max-width: 608px) {
                            #explainContainer{
                                transform: translate(0%, 0%)
                            }
                        }

                        #smallButtonTag {
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

export default SmallExplain;