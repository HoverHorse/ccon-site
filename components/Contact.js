import React from 'react';

class Contact extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
          return (
              <div className="contactButton">
                  <ul>
                    <li>1-604-859-2855</li>
                    <li>REVOLUTION@CCON.CA</li>
                    <li id="address">107-2707 PROGRESSIVE WAY<br />
                        ABBOTSFORD, BC V2T 0A7</li>
                  </ul>
                  <style jsx>
                      {`
                     
                      .contactButton {
                        font-family: Syncopate;
                        font-size: 1em;
                        width: 360px;
                        height: 1em;
                        position: fixed;
                        z-Index: -1;
                        transform: translate(-160px, -40px);
                        
                      }

                      ul {
                        list-style: none;
                        padding: 0;
                        text-align: right;
                      }

                      @media (max-width: 720px) {

                        #address {
                          opacity: 1;
                        }

                        .contactButton {
                          transform: translate(-160px, -40px);
                        }

                      }
                      
                      `}
                  </style>
              </div>
          )
      }
}

export default Contact;