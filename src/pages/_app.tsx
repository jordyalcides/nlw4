import '../styles/global.css'

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengeContext'
import { CountdownProvider } from '../contexts/CountdownContext'

function MyApp({ Component, pageProps }) {
	return (
		<Component {...pageProps} />
	)
}

export default MyApp
