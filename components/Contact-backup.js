import React from 'react';

class Contact extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
          return (
              <div className="contactButton">
                  Contact Us
                  <style jsx>
                      {`
                      
                      .contactButton {
                        background-color: hsl(0,0%,90%);
                        box-shadow: inset hsla(0,0%,15%,  1) 0  0px 0px 4px, /* border */
                        inset hsla(0,0%,15%, .8) 0 -1px 5px 4px, /* soft SD */
                        inset hsla(0,0%,0%, .25) 0 -1px 0px 7px, /* bottom SD */
                        inset hsla(0,0%,100%,.7) 0  2px 1px 7px, /* top HL */
                        
                        hsla(0,0%, 0%,.15) 0 -5px 6px 4px, /* outer SD */
                        hsla(0,0%,100%,.5) 0  5px 6px 4px; /* outer HL */
                    
                        width: 100%;
                        height: 5vh;
                        background-color: rgb(160, 193, 255);
                        font-size: 3vh;
                        margin-bottom: auto;
                        border-radius: 8px;
                        background-image: 
                        -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0)   6%, hsla(0,0%,100%, .1) 7.5%),
                        -webkit-repeating-linear-gradient(left, hsla(0,0%,  0%,0) 0%, hsla(0,0%,  0%,0)   4%, hsla(0,0%,  0%,.03) 4.5%),
                        -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.15) 1.5%),
                        
                        linear-gradient(180deg, hsl(0,0%,78%)  0%, hsl(0,0%,90%) 47%, hsl(0,0%,78%) 53%,hsl(0,0%,70%)100%);
                    }
                    
                      .contactButton:active {
                        color: hsl(210, 100%, 40%);
                        text-shadow: hsla(210,100%,20%,.3) 0 -1px 0, hsl(210,100%,85%) 0 2px 1px, hsla(200,100%,80%,1) 0 0 5px, hsla(210,100%,50%,.6) 0 0 20px;
                        box-shadow: 
                          inset hsla(210,100%,30%,  1) 0  0px 0px 4px, /* border */
                          inset hsla(210,100%,15%, .4) 0 -1px 5px 4px, /* soft SD */
                          inset hsla(210,100%,20%,.25) 0 -1px 0px 7px, /* bottom SD */
                          inset hsla(210,100%,100%,.7) 0  2px 1px 7px, /* top HL */
                          
                          hsla(210,100%,75%, .8) 0  0px 3px 2px, /* outer SD */
                          hsla(210,50%,40%, .25) 0 -5px 6px 4px, /* outer SD */
                          hsla(210,80%,95%,   1) 0  5px 6px 4px; /* outer HL */
                    }
                      
                      `}
                  </style>
              </div>
          )
      }
}

export default Contact;