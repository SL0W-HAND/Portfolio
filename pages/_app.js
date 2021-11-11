import App from 'next/app';
import Layout from '@components/Layout/Layout';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	fab,
	faReact,
	faSass,
	faJsSquare,
	faCss3Alt,
	faHtml5,
	faGithub,
	faGitAlt,
	faBootstrap,
	faNodeJs,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
	faFrown,
	faPaperPlane,
	faSmileWink,
} from '@fortawesome/free-regular-svg-icons';
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(
	faReact,
	faSass,
	fab,
	faGitAlt,
	faNodeJs,
	faJsSquare,
	faCss3Alt,
	faHtml5,
	faGithub,
	faBootstrap,
	faPaperPlane,
	faLinkedin,
	faSmileWink,
	faFrown
);

//import 'bootstrap/dist/css/bootstrap.min.css'
//import '../style.css'
function MyApp({ Component, pageProps }) {
	//layout
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
