import tattoo from './img/screen/tattoo_Salon-screen.png'
import fest from './img/screen/fest-screen.png'
import questsRoom from './img/screen/escapes-screen.png'
import convertor from './img/screen/converter-screen.png'
import keksogram from './img/screen/keksogram-screen.png'

import tattooBg from './img/tattoo.jpg'
import festBg from './img/fest.jpg'
import questsRoomBg from './img/preview/escape-preview.png'
import convertorBg from './img/converter.jpeg'
import keksogramBg from './img/Keksogram.jpg'

export const projectsArr =[
    {
        'img': questsRoom,
        'bg': questsRoomBg,
        'gallery' :['./gallery/escape_1.png', './gallery/escape_2.png', './gallery/escape_3.png', './gallery/escape_4.png'],
        'title': 'Escape rooms',
        'link': 'escape-rooms',
        'description': 'A full-stack web application built with React and a Node.js backend server. The frontend communicates with the API to retrieve and send data, provides filtering functionality, an interactive map with markers, and a validated booking form. The project demonstrates client-server interaction, API integration, and modern frontend development practices.',
        'tags': ['React', 'Node.js', 'Render', 'Formik', 'React-router', 'Leaflet'],
        'features': ['REST API', 'Interactive Map', 'Booking System'],
        'tasks': [
            'Developed a responsive and modern Ul with React.',
            'Built RESTful API and server logic with Node.js and Express.',            
            'Implemented booking System with form validation.',
            'Deployed backend server on Render',
        ],
        'linkShow' :'https://escape-rooms-pink.vercel.app/',
        'linkCode' :'https://github.com/evelinabortnyk/escape_rooms',
    },
    {
        'img': convertor,
        'bg': convertorBg,
        'title': 'Converter',
        'link': 'converter',
        'description': 'A React-based currency converter that retrieves live exchange rates from the Frankfurter API. The application allows users to convert currencies, swap selected currencies instantly, and keep a history of previous conversions with the conversion date.',
        'tags': ['React', 'Frankfurter_API'],
        'features': ['Responsive', 'REST API', 'Conversion History'],
        'tasks': [
            'API Integration',
            'Conversion Logic',
            'Currency Swap',
            'History Tracking',
            'Date Recording',
        ],
        'linkShow':'https://convertor-hazel.vercel.app/',
        'linkCode':'https://github.com/evelinabortnyk/convertor_26',
    },
    {
        'img': keksogram,
        'bg': keksogramBg,
        'title': 'Keksogram',
        'link': 'keksogram',
        'description': 'An image-sharing web application built with JavaScript and a custom backend server deployed on Render. The project includes image uploads, post viewing, image filtering, form validation, and API integration for client-server communication.',
        'tags': ['JavaScript', 'Render', 'Node', ],
        'features': [ 'Image Upload', 'REST API', 'Form Validation'],
        'tasks': [],
        'linkShow':'https://keksogram-red.vercel.app/',
        'linkCode':'https://github.com/evelinabortnyk/Keksogram-',
    },
    {        
        'img': tattoo,
        'bg': tattooBg,
        'title': 'Tattoo salon',
        'link': 'tattoo-salon',
        'description': 'The project was created in JavaScript and jQuery. This is my first project :) although it is very simple',
        'tags': ['jQuery'],
        'features': ['Responsive', 'REST API', 'Conversion History'],
        'tasks': [],
        'linkShow':'https://tatto-salon.vercel.app/',
        'linkCode':'https://github.com/evelinabortnyk/Tatto_salon',
    },
    {
        'img': fest,
        'bg': festBg,
        'title': 'Festival',
        'description': 'The project was created on Vue',
        'tags': ['Vue.js'],
        'features': ['Responsive', 'REST API', 'Conversion History'],
        'tasks': [],
        'linkShow':'https://fest-hczh8rlov-evelinavegas.vercel.app/',
        'linkCode':'https://github.com/evelinabortnyk/Rock_fest',
    }, 
]