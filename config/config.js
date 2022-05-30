
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import {faArrowAltCircleRight,  faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Vicente",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
	],
}
export const intro = {
	title_1: "Hey there!",
	title_2: "I'm Vicente Cortés Puschel",
	description: "An electrical engineer focused on Indoor Positioning solutions and Computer Vision.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "a",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I graduated from the Universidad de Chile in 2020 with the highest honours as an Electrical Engineer, having subspecialized in both Data Science and Communications/Signal Processing. I've worked in the Indoor Positioning Systems industry and the food industry for image classification.",
		"When I’m not programming, I like to focus on my hobbies: exercising, wood carving, reading manga, and meeting people.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Indoor Positioning Systems",
			description: "I research and develop state of the art indoor positioning models and systems for retail implementation.",
			icons: null,
		},
		{
			title: "Computer Vision",
			description: "Using state of the art models, I develop systems for image classification using AWS.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Indoor-Positioning",
			description: "An indoor positioning project used for benchmarking pipeline-based models. Uses the XYZ 2020 competition data.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/vicente-cp/indoor-positioning/",
				},
			]
		},
		{
			title: "2020 Thesis",
			description: "My Electrical Engineer thesis. Describes a Pedestrian Dead Reckoning model for Indoor Localization, using LSTMs and a quaternion based EKF. ",
			icons: [
				{
					icon: faArrowCircleRight,
					link: "https://github.com/hashirshoaeb/portfolio",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Feel free to reach out directly by email at vicente.cortes.puschel@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:vicente.cortes.puschel@gmail.com",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE
export const SEO = {
	// 50 - 60 char
	title: "Hashir Shoaib | Computer Engineer | Flutter | Reactjs developer",
	description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@hashirshoaeb",
	description: "Computer Engineer | Flutter | Reactjs Developer",
	cards: [
		{
			title: "My website",
			link: "https://hashirshoaeb.com/",
		},
		{
			title: "QuranTalk App",
			link: "https://www.qurantalk.app/",
		},
		{
			title: "StarBook App",
			link: "https://starbook.dev/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/hashirshoaeb/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/hashirshoaeb/",
		},
	]
}
