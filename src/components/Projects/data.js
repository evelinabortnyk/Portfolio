import tattoo from './img/screen/tattoo_Salon-screen.png'
import fest from './img/screen/fest-screen.png'
import questsRoom from './img/screen/escapes-screen.png'
import convertor from './img/screen/converter-screen.png'
import keksogram from './img/screen/keksogram-screen.png'

export const projectsArr =[
    {
        img: questsRoom,
        title: 'Quests room',
        description: 'A full-stack web application built with React and a Node.js backend server. The frontend communicates with the API to retrieve and send data, provides filtering functionality, an interactive map with markers, and a validated booking form. The project demonstrates client-server interaction, API integration, and modern frontend development practices.',
        tags: ['React', 'Leaflet', 'Axios', 'Formik', 'Node.js', 'Client-Server'],
        linkShow :'https://escape-rooms-pink.vercel.app/',
        linkCode :'https://github.com/evelinabortnyk/escape_rooms',
    },
    {
        img: convertor,
        title: 'Convertor',
        description: 'The project was created on React. The program converts currency, saves previous conversions with the current date',
        tags: ['React', 'Frankfurter_API'],
        linkShow :'https://convertor-hazel.vercel.app/',
        linkCode :'https://github.com/evelinabortnyk/convertor_26',
    },
    {
        img: keksogram,
        title: 'Keksogram',
        description: 'An image-sharing web application built with JavaScript and a custom backend server deployed on Render. The project includes image uploads, post viewing, image filtering, form validation, and API integration for client-server communication.',
        tags: ['JavaScript', 'Render', 'Node', 'HTTP', 'Server_REST_API'],
        linkShow :'https://keksogram-red.vercel.app/',
        linkCode :'https://github.com/evelinabortnyk/Keksogram-',
    },
    {        
        img: tattoo,
        title: 'Tattoo salon',
        description: 'The project was created in JavaScript and jQuery. This is my first project :) although it is very simple',
        tags: ['jQuery'],
        linkShow :'https://tatto-salon.vercel.app/',
        linkCode :'https://github.com/evelinabortnyk/Tatto_salon',
    },
    {
        img: fest,
        title: 'Festival',
        description: 'The project was created on Vue',
        tags: ['Vue.js'],
        linkShow :'https://fest-hczh8rlov-evelinavegas.vercel.app/',
        linkCode :'https://github.com/evelinabortnyk/Rock_fest',
    }, 
]