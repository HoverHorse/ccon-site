import React from 'react';

class ClickAway extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
        <div id="clickAwayFrame">
            

              <style jsx>
                  {`

                  #clickAwayFrame {
                      position: fixed;
                      z-Index: -1;
                      height: 100%;
                      width: 100%;
                      background-color: red;
                      top: 0;
                      overflow: hidden;
                  }
                  
                  
                  
                  `}
              </style>
        </div>
        )
    }
}

export default ClickAway;

