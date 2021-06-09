import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import WestRest from '../images/westrest.png';
import TheDevKs from '../images/thedevks.png';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'West Restaurant',
    onclick: 'https://thedevks.com',
    desc: 'A website and Application which is used for online food ordering. Check it out at westrest.gq',
    img: WestRest,
    href: 'westrest.gq',
  },
  {
    id: uuidv4(),
    name: 'The Dev Ks',
    desc: 'A multi purposal website where u can hire people to make a website for you.',
    img: TheDevKs,
    onclick: 'https://thedevks.com',
  },
];

export default projects;
