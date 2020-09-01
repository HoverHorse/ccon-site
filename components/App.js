import React from 'react';
import BackgroundVideo from '../public/video/BackgroundVideo';
import cconTriangle from '../public/assets/cconTriangle.png';
import SoloButton from './SoloButton';
import SmallButton from './SmallButton';
import CorpButton from './CorpButton';
import Contact from './Contact';
import SliderSolo from './SliderSolo';
import SliderSmall from './SliderSmall';
import SliderCorp from './SliderCorp';
import ContactContent from './ContactContent';
import Revolution from './Revolution';
import WordLoop from './TextLoop';
import Who from './Who';
import What from './What';
import Why from './Why';
import ClickMe from './ClickMe';


class App extends React.Component {
  constructor(props) {
    super(props);

    // State management and bindings
    this.state = {
      viewSolo: false,
      viewSmall: false,
      viewCorp: false,
      contentPage: 1,
      viewContact: false,
      viewRevolution: false,
      buttonFade: "fadeIn",
      contentFade: "fadeOut",
      arrowFade: "fadeOut",
      renderButtons: true,
      bannerState: "",
    };

    this.seeSolo = this.seeSolo.bind(this);
    this.closeAll = this.closeAll.bind(this);
    this.seeSmall = this.seeSmall.bind(this);
    this.seeCorp = this.seeCorp.bind(this);
    this.seeContact = this.seeContact.bind(this);
    this.seeRevolution = this.seeRevolution.bind(this);
    this.timerCloseContent = this.timerCloseContent.bind(this);
  }

  // Function objects

  closeAll() {
    this.setState({
      viewSolo: false,
      viewSmall: false,
      viewCorp: false,
      contentPage: 2,
      viewContact: false,
      viewRevolution: false,
      buttonFade: "fadeIn",
      contentFade: "fadeOut",
      arrowFade: "fadeOut",
      bannerState: "",
    });
  }

  timerCloseContent() {
    this.setState({
      buttonFade: "fadeIn",
      contentFade: "fadeOut",
      arrowFade: "fadeOut",
    })
    setTimeout(this.closeAll, 500);
  }

  seeSolo() {
    this.setState({
      viewSolo: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeIn",
      bannerState: "Single-User",
    });
  }

  seeSmall() {
    this.setState({
      viewSmall: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeIn",
      bannerState: "Multi-User",
    });
  }

  seeCorp() {
    this.setState({
      viewCorp: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeIn",
      bannerState: "Multi-Location",
    });
  }

  seeContact() {
    this.setState({
      viewContact: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeOut",
      viewSolo: false,
      viewSmall: false,
      viewCorp: false,
      viewRevolution: false,
      bannerState: "Contact Us",
    });
  }

  seeRevolution() {
    this.setState({
      viewRevolution: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeOut",
      viewSolo: false,
      viewSmall: false,
      viewCorp: false,
      viewContact: false,
      bannerState: "Join the Ccon Revolution!",
    });
  }

  handleBannerChange() {

  }
  

  render() {
    return (
      <div className="App">

        <head>
          <title>Ccon Metals Inc. - The best catalytic converter scrap price</title>
          <meta desc="Sell catalytic converters with transparency, security, and integrity."/>
        </head>
        

        
        <BackgroundVideo type='video/mp4' autoplay mute />
        <a onClick={this.closeAll}><div id="clickAway" >

        </div></a>


        <div className="Signature">
          <img id="logo" src={cconTriangle} alt="catalytic converter scrap price" />
            <h1 className="sigText">
                METALS
            </h1>

            <a id="footerLink">
              <div id="footerContainer">
                <Contact />
            </div>
            </a>
        </div>

        <div id='bannerDiv' >
          <h2 id="banner" className={this.state.buttonFade} >
            <a id="revLink" onClick={this.seeRevolution} style={{cursor:'pointer'}}><WordLoop id="text-loop" /></a>
          </h2>
          <h2 id="banner2" className={this.state.contentFade}>
            <span id="spanLink">{this.state.bannerState}</span>
          </h2>
        </div>

        <div id="showcase">
        <div id="bioContainer" className={this.state.buttonFade}>
            <div id="who" className={this.state.buttonFade}><Who /></div>
            <div id="what" className={this.state.buttonFade}><What /></div>
            <div id="why" className={this.state.buttonFade}><Why /></div>
        </div>


        <div id="clickMe" className={this.state.buttonFade}>
          <ClickMe />
        </div>

        

         <div id="buttonContainer" className={this.state.buttonFade}>
            <a onClick={this.seeSolo}  id="soloButton" 
            style={{cursor:'pointer'}}>
              <SoloButton />
            </a>

            <a onClick={this.seeSmall}  id="smallButton" style={{cursor:'pointer'}}>
              <SmallButton />
            </a>

            <a onClick={this.seeCorp}  id="corpButton" style={{cursor:'pointer'}}>
              <CorpButton />
            </a>
          </div>
          </div>
          

         <div id="contentContainer" className={this.state.contentFade}>
            <SliderSolo show={this.state.viewSolo} onClose={this.timerCloseContent} id="soloContent" />
            <SliderSmall show={this.state.viewSmall} onClose={this.timerCloseContent} id="smallContent" />
            <SliderCorp show={this.state.viewCorp} onClose={this.timerCloseContent} id="corpContent" />
            <ContactContent show={this.state.viewContact} onClose={this.timerCloseContent} id="contactContent" />
            <Revolution show={this.state.viewRevolution} onClose={this.timerCloseContent} id="revContent" />
         </div>

        

          <style jsx>{`

          #showcase {
            
            height: 100vh;
            width: 100%;
          }

          #contentContainer {
            position: absolute;
            height: 65vh;
            width: 90%;
            top: 220px;
            margin-left: 5%;
            overflow-y: auto;
            overflow-x: hidden;
          }

          .fadeIn {
            opacity: 1;
            transition: opacity 0.5s linear;
            
          }

          .fadeOut {
            opacity: 0;
            transition: opacity 0.5s linear;
            pointer-events: none;
          }


          .App {
            text-align: center;
            height: 100vh;
            width: 100%;
            box-sizing: border-box;
            
            
          }
          
          .Signature {
            font-family: Syncopate;
            color: rgb(192, 192, 192);
            position: fixed;
            z-Index: 5;
            opacity: 1;
            width: 100%;
            height: 100px;
            margin-top: 0px;
            min-width: 630px;
          }
          
          #logo {
            width: 200px;
            max-width: 200px;
            margin-top: -30px;
            margin-left: -30px;
            float: left;
            pointer-events: none;
          }
          
          .sigText {
            font-family: Syncopate;
            font-size: 1.8em;
            margin-top: 52px;
            margin-left: 90px;
            width: 7.5em;
            height: 0.95em;
            position: fixed;
            z-Index: -1;
            pointer-events: none;
            border-top: 1px solid red;
            border-bottom: 1px solid red;
          }

          #revTag {
            color: red;
            height: 100%;
          }
          
          #revLink {
            font-size: 1.7em;
            height: 100%;
            text-shadow: 3px 3px black;
            
          }

          #spanLink {
            font-size: 1.7em;
            height: 100%;
            text-shadow: 3px 3px black;
            
          }

          #banner {
            min-width: 716px;
            width: 80%;
            height: 100%;
            margin: auto;
            color: white;
            border-top: 1px solid red;
            border-bottom: 1px solid red;
            
          }

          #banner2 {
            min-width: 716px;
            width: 80%;
            font-size: 1.7em;
            height: 100%;
            text-shadow: 3px 3px black;
            margin: auto;
            color: white;
            border-top: 1px solid red;
            border-bottom: 1px solid red;
            transform: translateY(-100%);
          }
          
          #bannerDiv {
            position: absolute;
            height: 66px;
            width: 100%;
            top: 130px;
            min-width: 716px;
            margin: auto;
            z-Index: 4;
            
          }

          #buttonContainer {
              width: 80%;
              margin: auto;
              transform: translate(0%, 0);
              display: flex;
              height: 60px;
              justify-content: space-evenly;
          }

          #corpButton {
            width: 200px;
            height: 60px;
            margin-left: 4vw;
            
          }

          #smallButton {
            width: 200px;
            height: 60px;
            margin-left: 4vw;
            margin-right: 4vw;
            
          }
   
          #soloButton {
            margin-right: 4vw;
            width: 200px;
            height: 60px;
            
          }

          #clickMe {
            height: 50px;
            width: 100%;
            font-size: 1.5em;
            position: relative;
            margin-top: 70px;
          }

          #clickAway {
            position: fixed;
            width: 100vw;
            height: 100vh;
            background: transparent;
            top: 0;
            z-Index; 10;
            opacity: 0.99
            
          }

          #bioContainer {
            width: 80%;
            margin: auto;
            opacity: 0.99;
            display: inline-flex;
            margin-top: 225px;
            height: 300px;
            justify-content: space-evenly;
            
            }
          
          #who {
            width: 200px;
            height: 60px;
            margin-right: 4vw;
            
          }

          #what {
            width: 200px;
            height: 60px;
            margin-left: 4vw;
            margin-right: 4vw;
            
          }
   
          #why {
            margin-left: 4vw;
            width: 200px;
            height: 60px;
            
          }
          
          #footerContainer {
              width: 216px;
              height: 27px;
              float: right;
              margin-top: 52px;
              text-align: center;
              display: inline-block;
          }

          @media (max-width: 720px) {
            #footerContainer {
              
            }

            #bannerDiv{
              display: none;
              
            }

            #contentContainer {
              height: 80vh;
              transform: translate(0, -90px);
              min-height: 600px;
            }

            #bioContainer {
              width: 100%;
              height: 50%;
              display: inline-block;
              margin-top: 110px;
              margin-bottom: 0px;
              position: relative;
              min-width: 650px;
              
              }

            #who {
                width: 100%;
                height: 33%;
                margin-right: 0vw;
                margin-top: 0px;
                
              }
    
            #what {
                width: 100%;
                height: 33%;
                margin-right: 0vw;
                margin-left: 0vw;
                margin-top: 0px;
                
              }
       
            #why {
                width: 100%;
                height: 33%;
                margin-left: 0vw;
                margin-top: 0px;
                
              }

            #buttonContainer{
              position: absolute;
              display: inline-flexbox;
              width: 100vw;
              height: 25vh;
              margin: auto;
              left: 0;
              min-width: 635px;
              margin-top: -35px;
            }

            #corpButton {
              position: absolute;
              width: 90%;
              height: 50px;
              left: 0%;
              margin-top: 120px;
              margin-left: 5vw;
            }
  
            #smallButton {
              position: absolute;
              width: 90%;
              height: 50px;
              left: 0%;
              margin-top: 60px;
              margin-left: 5vw;
              margin-right: 0;
            }
     
            #soloButton {
              position: absolute;
              width: 90%;
              height: 50px;
              left: 0%;
              margin-right: 0;
              margin-left: 5vw;
            }

            #clickMe {
              transform: translate(0, -60px)
              
            }
        
          }
          `}</style>
      </div>
    );
  }
}

export default App;
