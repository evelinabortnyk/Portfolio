import tattoo from './img/tattoo.jpg'
import fest from './img/fest.jpg'
import questsRoom from './img/quests-room.jpg'
import convertor from './img/convertor.jpeg'

export const projectsArr =[
    {
        'img': questsRoom,
        'title': 'Quests room',
        'description': 'The project was created on React. Data was received from the server, filters were applied, a map with a marker and a form with validation were created.',
        'using': ['react-router-dom', 'leaflet', 'axios', 'formik', 'json-server', 'mobx'],
        'linkShow' :'https://quests-build.vercel.app/',
        'linkCode' :'https://github.com/evelinavegas/Quests-app',
        'schow': false,
    },
    {
        'img': convertor,
        'title': 'Convertor',
        'description': 'The project was created on React. The program converts currency, saves previous conversions with the current date',
        'using': ['react-router-dom', 'new Date'],
        'linkShow' :'https://convertor-build.vercel.app/',
        'linkCode' :'https://github.com/evelinavegas/Convertor/tree/main',
        'schow': false,
    },
    {        
        'img': tattoo,
        'title': 'Tattoo salon',
        'description': 'The project was created in JavaScript and jQuery. This is my first project :) although it is very simple',
        'using': ['jQuery'],
        'linkShow' :'https://tatto-salon.vercel.app/',
        'linkCode' :'https://github.com/evelinavegas/Tatto_salon',
        'schow': false,
    },
    {
        'img': fest,
        'title': 'Festival',
        'description': 'The project was created on Vue',
        'using': [],
        'linkShow' :'https://fest-hczh8rlov-evelinavegas.vercel.app/',
        'linkCode' :'https://github.com/evelinavegas/Rock_fest',
        'schow': false,
    },
    // {
    //     img: item5,
    //     title: 'Wörter App',
    //     description: '',
    //     using: [],
    //     linkShow :'https://w-rter-app.vercel.app/',
    //     linkCode :'https://github.com/evelinavegas/w-rter-app/tree/main',
    // },        
]