import tattoo from './img/screen/tattoo_Salon-screen.png'
import fest from './img/screen/fest-screen.png'
import questsRoom from './img/screen/escapes-screen.png'
import convertor from './img/screen/converter-screen.png'
import keksogram from './img/screen/keksogram-screen.png'

import tattooBg from './img/tattoo.jpg'
import festBg from './img/fest.jpg'
import questsRoomBg from './img/escapes.jpg'
import convertorBg from './img/converter.jpeg'
import keksogramBg from './img/Keksogram.jpg'

export const projectsArr =[
    {
        img: questsRoom,
        bg: questsRoomBg,
        title: 'Escape rooms',
        link: 'escape-rooms',
        description: 'A full-stack web application built with React and a Node.js backend server. The frontend communicates with the API to retrieve and send data, provides filtering functionality, an interactive map with markers, and a validated booking form. The project demonstrates client-server interaction, API integration, and modern frontend development practices.',
        tags: ["React", "Node.js", "Render"],
        features: ["REST API", "Interactive Map", "Booking System"],

        linkShow :'https://escape-rooms-pink.vercel.app/',
        linkCode :'https://github.com/evelinabortnyk/escape_rooms',
    },
    {
        img: convertor,
        bg: convertorBg,
        title: 'Converter',
        link: 'converter',
        description: 'The project was created on React. The program converts currency, saves previous conversions with the current date',
        tags: ['React', 'Frankfurter_API'],
        features: ["Responsive", "REST API", "Conversion History"],

        linkShow :'https://convertor-hazel.vercel.app/',
        linkCode :'https://github.com/evelinabortnyk/convertor_26',
    },
    {
        img: keksogram,
        bg: keksogramBg,
        title: 'Keksogram',
        link: 'keksogram',
        description: 'An image-sharing web application built with JavaScript and a custom backend server deployed on Render. The project includes image uploads, post viewing, image filtering, form validation, and API integration for client-server communication.',
        tags: ['JavaScript', 'Render', 'Node',],
        features: [ "Image Upload", "REST API", "Form Validation"],
        linkShow :'https://keksogram-red.vercel.app/',
        linkCode :'https://github.com/evelinabortnyk/Keksogram-',
    },
    {        
        img: tattoo,
        bg: tattooBg,
        title: 'Tattoo salon',
        link: 'tattoo-salon',
        description: 'The project was created in JavaScript and jQuery. This is my first project :) although it is very simple',
        tags: ['jQuery'],
        features: ["Responsive", "REST API", "Conversion History"],

        linkShow :'https://tatto-salon.vercel.app/',
        linkCode :'https://github.com/evelinabortnyk/Tatto_salon',
    },
    {
        img: fest,
        bg: festBg,
        title: 'Festival',
        description: 'The project was created on Vue',
        tags: ['Vue.js'],
        features: ["Responsive", "REST API", "Conversion History"],

        linkShow :'https://fest-hczh8rlov-evelinavegas.vercel.app/',
        linkCode :'https://github.com/evelinabortnyk/Rock_fest',
    }, 
]