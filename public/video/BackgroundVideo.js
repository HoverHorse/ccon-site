import React, {Component} from 'react';

class BackgroundVideo extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: './video/BoxFillLoop.mp4'
        }
    }

    render () {
        return (
            <video alt="Sell catalytic converters" id="background-video" type="video/mp4" loop autoPlay style={{

                height: '100vh',
                width: '100vw',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: 'none',
                position: 'fixed',
                opacity: '0.3',
                objectFit: 'cover',

            }}>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default BackgroundVideo;