import React from 'react';

class SmallContent3 extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      className1: "flipCard",
      className2: "flipCard",
      className3: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade",
      fadeTwoA: "unFade",
      fadeTwoB: "fade",
      fadeThreeA: "unFade",
      fadeThreeB: "fade",
    }

    this.flip1 = this.flip1.bind(this);
    this.unflip1 = this.unflip1.bind(this);
    this.flip2 = this.flip2.bind(this);
    this.unflip2 = this.unflip2.bind(this);
    this.flip3 = this.flip3.bind(this);
    this.unflip3 = this.unflip3.bind(this);
}

flip1() {
  this.setState({ className1 : "flipCard is-flipped", fadeOneA : "fade", fadeOneB : "unFade" })
}

unflip1() {
  this.setState({ className1 : "flipCard", fadeOneA : "unFade", fadeOneB : "fade" })
}

flip2() {
  this.setState({ className2 : "flipCard is-flipped", fadeTwoA : "fade", fadeTwoB : "unFade" })
}

unflip2() {
  this.setState({ className2 : "flipCard", fadeTwoA : "unFade", fadeTwoB : "fade" })
}

flip3() {
  this.setState({ className3 : "flipCard is-flipped", fadeThreeA : "fade", fadeThreeB : "unFade" })
}

unflip3() {
  this.setState({ className3 : "flipCard", fadeThreeA : "unFade", fadeThreeB : "fade" })
}


render() {

  return (
        <div id="contentContainer">
              <div className="contentCanvas contentCanvas--card">
              <ul id="outer-list">
                    <li style={{ listStyle: "none" }}><strong><u>Where is your pricelist and how can I get it?</u></strong><br />
                    Our pricelist can only be found within the Ccon Revolution Web App. Prospective clients desiring an invitation to the app must contact us by phone or email.
                    </li>
                    <li style={{ listStyle: "none" }}><strong><u>What is the minimum/maximum amount of catalytic converters I can bring to Ccon Metals?</u></strong><br />
                    Unlike most catalytic converter recycling businesses, Ccon Metals has no converter minimums or maximums.  Rest assured that, regardless of quantity, your converters will be purchased fairly. Call us to learn more!
                    </li>
                    <li style={{ listStyle: "none" }} ><strong><u>What is Downgrading/Upgrading? Why is it done?  Does Ccon do this?</u></strong><br />
                    Downgrading/Upgrading occurs when a buyer takes advantage of a seller by manipulating information. The reason a buyer may do this is to: 
                      <ul id="inner-list">
                        <li id="inner-list-item" style={{ listStyle: "square", padding: "0", margin: "0", listStylePosition: "inside" }}>Secure new clients by ”wowing” them with artificial catalytic converter prices</li>
                        <li id="inner-list-item" style={{ listStyle: "square", padding: "0", margin: "0", listStylePosition: "inside" }}>Boost the value of popular converters by pulling value away from lesser known converters</li>
                        <li id="inner-list-item" style={{ listStyle: "square", padding: "0", margin: "0", listStylePosition: "inside" }}>Take money away from one client so a more “worthwhile” client can be overpaid</li>
                        <li style={{ listStyle: "none", padding: "0", margin: "0" }}><br />We at Ccon Metals would never do such a disservice to our valued customers.</li>
                      </ul>
                    </li>
                  </ul>
              </div>
              <style jsx>
                {`

                  @keyframes fadeIn {
                    0% {
                      opacity: 0;
                    }

                    

                    100% {
                      opacity: 1;
                    }
                  }

                  @keyframes fadeOut {
                    0% {
                      opacity: 1;
                    }

                    50% {
                      opacity: 0;
                    }

                    100% {
                      opacity: 0;
                    }
                  }

                  #outer-list {
                    
                    padding: 0;
                    justify-content: space-evenly;
                    height: 100%;
                    width: 80%;
                    margin: auto;
                  }

                  #inner-list {
                    margin-top: 10px;
                  }

                  #inner-list-item {
                    display: list-item;
                  }

                  li {
                    height: 25%;
                    font-size: calc(12px + 0.5vw);
                    display: inline-block;
                    margin-top: 5px;
                    
                  }

                  #fade {
                    animation: fadeOut ease 0.5s;
                  }

                  #unFade {
                    animation: fadeIn ease 0.5s;
                  }

                  .cardText {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    transform: translateY(-65%)
                  }
                
                  #contentContainer {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    background-image: url('image');
                    background-color: rgb(192,192,192);
                    border-radius: 8px;
                    transform: translateX(25%);
                    right: 25%;
                    overflow-y: auto;
                    border: 5px solid silver;
                    box-sizing: border-box;
                  }
                
                  .contentCanvas {
                    z-index: 1;
                    height: 100%;
                    width: 100%;
                    margin: auto;
                    margin-top: 0%;
                    
                  }
                
                  .flipCard {
                    margin: auto;
                    list-style: none;
                    font-size: 1.6em;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    display: inline-block;
                    transition: transform 0.5s;
                    transform-style: preserve-3d;
                    position: relative;
                    cursor: pointer;
                    
                  }
                
                  .card__face {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    
                    text-align: center;
                  }

                  .card__face--front {
                    background: white;
                    overflow: hidden;
                  }

                  .card__face--back {
                    background: black;
                    transform: rotateY( 180deg );
                    overflow: hidden;
                  }

                  .flipCard.is-flipped {
                    transform: rotateY( 180deg );
                  }

                  #card1 {
                    
                  }

                  .flipCardContainer {
                    perspective: 40rem;
                    z-index: 1;
                    height: 100%;
                    width: 33.333333333333333333333333%;
                    margin: auto;
                    display: inline-block;
                   
                  }

                  @media (max-width: 720px) {

                    #outer-list {
                      height: 90%;
                    }

                    #inner-list-item {
                      height: auto;
                    }

                    .flipCardContainer {
                      width: 100%;
                      height: 33%;
                      margin-top: 0%;
                    }

                    #card3 {
                      margin-top: 0%
                    }

                    .card__face--back {
                      background: black;
                      transform: rotateX( 180deg );
                    }

                    .flipCard.is-flipped {
                      transform: rotateX( 180deg );
                    }

                    #card2 {
                      margin-top: 0%
                      
                    }

                    .flipCard {
                      width: 100%;
                      height: 100%;
                    }

                    .contentCanvas {
                      transform: translate(0, 0%);
                      min-height: 525px;
                      height: 100%;
                      width: 100%;
                      margin-top: 0%;
                    }

                    #contentContainer {
                      
                      height: 100%;
                      min-height: 575px;
                      overflow-y: auto;
                    }

                    ul {
                      
                      
                      padding: 0;
                      justify-content: space-evenly;
                      height: 75%;
                      width: 80%;
                      margin: auto;
                    }

                    li {
                      margin-top: 2vh;
                    }
                  }


              `}
              </style>
        </div>
);
}
}
export default SmallContent3;