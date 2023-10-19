import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { TbMail } from 'react-icons/tb';

export const navData = [
	{ name: 'Acerca', path: '' },
	{ name: 'Servicios', path: '' },
	{ name: 'Proyectos', path: '' },
];

export const socialData = [
	{
		name: 'Instagram',
		path: 'https://www.instagram.com/',
		icon: <FaInstagram width="24" height="24" />,
	},
	{
		name: 'LinkedIn',
		path: 'https://www.linkedin.com/in/',
		icon: <FaLinkedin width="24" height="24" />,
	},
	{
		name: 'Github',
		path: 'https://github.com/',
		icon: <FaGithub width="24" height="24" />,
	},
	{
		name: 'Twitter',
		path: 'https://twitter.com/',
		icon: <RiTwitterXLine width="24" height="24" />,
	},
	{
		name: 'Correo',
		path: 'mailto:davidf.martinez.br@gmail.com',
		icon: <TbMail width="24" height="24" />,
	},
];
