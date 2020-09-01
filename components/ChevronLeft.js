import React from 'react';

class ChevronLeft extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
        <div className="ChevronL">
            <style jsx>
            {`
            
            .ChevronL {
                position:fixed;
                display:block;
                height:50px; /*height should be double border*/
                width: 50px;
                transform: rotate(90deg);
                z-index: 10;
                margin-left: -18px;
                
            }

            @media (max-width: 720px) {
                .ChevronL {
                    
                }

            }

            .ChevronL::before,
            .ChevronL::after {
                position:absolute;
                display:block;
                content:"";
                border:25px solid transparent; /*adjust size*/
                
            }

            /*Change the four instances of 'top' below to rotate (top/right/bottom/left)*/
            .ChevronL::before {
                top:0;
                border-top-color:#b00; /*Chevron Color*/
                
            }
            .ChevronL::after {
                top:-10px; /*adjust thickness*/
                border-top-color:#fff; /*Match background colour*/
                
            }

            `}
            </style>      
        </div>
        )
    }
}

export default ChevronLeft;