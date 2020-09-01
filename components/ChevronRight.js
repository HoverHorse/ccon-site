import React from 'react';

class ChevronRight extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
        <div className="Chevron">
              <style jsx>{`
              
              .Chevron {
                position: absolute;
                display: block;
                height: 50px;
                width: 50px;
                transform: rotate(-90deg);
                right: -18px;
                z-index: 10;
              }

              @media (max-width: 720px) {
                .Chevron {
                  
                }

            }

              .Chevron::before,
              .Chevron::after {
                position:absolute;
                display:block;
                content:"";
                border:25px solid transparent; /*adjust size*/
              }
              /*Change the four instances of 'top' below to rotate (top/right/bottom/left)*/
              .Chevron::before {
                top:0;
                border-top-color:#b00; /*Chevron Color*/
              }
              .Chevron::after {
                top:-10px; /*adjust thickness*/
                border-top-color:#fff; /*Match background colour*/
              }

              `}</style>
        </div>
        )
    }
}

export default ChevronRight;