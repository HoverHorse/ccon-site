import React from 'react';

class CloseButton extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
        <div id="mdiv">
              <div className="mdiv">
                <div className="md"></div>
              </div>

              <style jsx>
                  {`
                  
                  #mdiv {
                    width: 25px;
                    height: 25px;
                    opacity: 0.8;
                    position: absolute;
                    z-index: 40;
                    
                  }
                  
                  .mdiv {
                    height: 35px;
                    width: 4px;
                    margin-left: 12px;
                    background-color:black;
                    transform: rotate(45deg);
                    Z-index: 11;
                    filter: drop-shadow(4px 3px 3px white);
                  }
                  
                  .md {
                    height: 35px;
                    width: 4px;
                    background-color:black;
                    transform: rotate(90deg);
                    Z-index: 22;
                  }
                  
                  `}
              </style>
        </div>
        )
    }
}

export default CloseButton;