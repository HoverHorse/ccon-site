import React from 'react';
import App from '../components/App';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Head from 'next/head';

class Index extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>My page title</title>
                    <link rel="icon" type="image/ico" href="/favicon.ico?=v1"/>
                </Head>

                <App></App>
                <style>
                    {`
                        @font-face {
                            font-family: 'Syncopate';
                            src: local('Syncopate-Bold'), url(./fonts/Syncopate-Bold.ttf) format('truetype');
                          }
                          
                          html, body, #__next, #next-body {
                            margin: auto;
                            margin-top: 0;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                              sans-serif;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale;
                            
                            background-color: #282c34;
                            width: 100%;
                            max-height: 800px;
                            
                            min-width: 630px;
                          }

                        @media (max-width: 720px) {

                            body {
                                overflow: hidden;
                            }

                        }
                    `}
                </style>
            </div>
        )
    }
}

export default Index;