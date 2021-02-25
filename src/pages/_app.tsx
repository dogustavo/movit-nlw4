import React from 'react'
import { ChallengesProvider } from '../contexts/ChallengeContext';

import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
   
    return (
        <ChallengesProvider>
            <Component {...pageProps} />
        </ChallengesProvider>
    )
}

export default MyApp;