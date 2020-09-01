import React from 'react';

class ClickMe extends React.Component {
    constructor (props) {
        super(props);

        };

        render() {
            return (
                <div id="clickThis">
                    <div id="words">
                        Click one of the options below to learn about the Revolution App!    
                    </div>

                    <style jsx>
                        {`

                        #clickThis {
                            height: 50px;
                            width: 100%;
                            color: white;
                            
                        }

                        #words {
                            border-top: 1px solid red;
                            border-bottom: 1px solid red;
                            width: 73%;
                            margin: auto;
                            opacity: 0.999;
                            text-shadow: 3px 3px 3px black;
                            min-width: 699px;
                        }

                        @media (max-width: 720px) {

                            #words {
                                min-width: 512px;
                            }

                        }
                        
                        `}
                    </style>
                </div>
            )
        }
    }

export default ClickMe;