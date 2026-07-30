import tattoo from './img/tattoo.jpg'
import fest from './img/fest.jpg'
import questsRoom from './img/quests-room.jpg'
import convertor from './img/convertor.jpeg'

export const projectsArr =[
    {
        img: questsRoom,
        title: 'Quests room',
        description: 'A full-stack web application built with React and a Node.js backend server. The frontend communicates with the API to retrieve and send data, provides filtering functionality, an interactive map with markers, and a validated booking form. The project demonstrates client-server interaction, API integration, and modern frontend development practices.',
        using: ['react-router-dom', 'leaflet', 'axios', 'formik', 'json-server', 'mobx'],
        linkShow :'https://escape-rooms-pink.vercel.app/',
        linkCode :'https://github.com/evelinabortnyk/escape_rooms',
    },
    {
        img: convertor,
        title: 'Convertor',
        description: 'The project was created on React. The program converts currency, saves previous conversions with the current date',
        using: ['react-router-dom', 'new Date'],
        linkShow :'https://convertor-hazel.vercel.app/',
        linkCode :'https://github.com/evelinabortnyk/convertor_26',
    },
    {        
        img: tattoo,
        title: 'Tattoo salon',
        description: 'The project was created in JavaScript and jQuery. This is my first project :) although it is very simple',
        using: ['jQuery'],
        linkShow :'https://tatto-salon.vercel.app/',
        linkCode :'https://github.com/evelinabortnyk/Tatto_salon',
    },
    {
        img: fest,
        title: 'Festival',
        description: 'The project was created on Vue',
        using: [],
        linkShow :'https://fest-hczh8rlov-evelinavegas.vercel.app/',
        linkCode :'https://github.com/evelinabortnyk/Rock_fest',
    }, 
]