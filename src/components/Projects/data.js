// import tattoo from './img/screen/tattoo_Salon-screen.png'
// import fest from './img/screen/fest-screen.png'
// import questsRoom from './img/screen/escapes-screen.png'
// import convertor from './img/screen/converter-screen.png'
// import keksogram from './img/screen/keksogram-screen.png'

// import tattooBg from './img/tattoo.jpg'
// import festBg from './img/fest.jpg'
// import questsRoomBg from './img/preview/escape-preview.png'
// import convertorBg from './img/converter.jpeg'
// import keksogramBg from './img/Keksogram.jpg'

export const projectsArr =[
    {
        'img': './img/screen/escapes-screen.png',
        'preview': './img/preview/escape-preview.png',
        'gallery' : ['./img/gallery/escape_1.png', './img/gallery/escape_2.png', './img/gallery/escape_3.png', './img/gallery/escape_4.png'],
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
        'img': './img/screen/converter-screen.png',
        'preview': './img/preview/converter-preview.png',
        'gallery' :['./img/gallery/converter_1.png', './img/gallery/converter_2.png',],
        'title': 'Converter',
        'link': 'converter',
        'description': 'A React-based currency converter that retrieves live exchange rates from the Frankfurter API. The application allows users to convert currencies, swap selected currencies instantly, and keep a history of previous conversions with the conversion date.',
        'tags': ['React', 'Frankfurter_API'],
        'features': ['Responsive', 'REST API', 'Conversion History'],
        'tasks': [
            'Integrated the Frankfurter API to retrieve live exchange rates',
            'Implemented accurate currency conversion calculations',
            'Added one-click currency swapping functionality',
            'Created a history of previous conversions',
            'Stored conversion records with timestamps',
        ],
        'linkShow':'https://convertor-hazel.vercel.app/',
        'linkCode':'https://github.com/evelinabortnyk/convertor_26',
    },
    {
        'img': './img/screen/keksogram-screen.png',
        'preview': './img/preview/keksogram-preview.png',
        'gallery' :['./img/gallery/keksogram_1.png', './img/gallery/keksogram_2.png', './img/gallery/keksogram_3.png', './img/gallery/keksogram_4.png', ],
        'title': 'Keksogram',
        'link': 'keksogram',
        'description': 'An image-sharing web application built with JavaScript and a custom backend server deployed on Render. The application allows users to upload and browse images, filter posts, and interact with a REST API through validated forms, demonstrating client-server communication and dynamic content management.',
        'tags': ['JavaScript', 'Render', 'Node.js', ],
        'features': [ 'Image Upload', 'REST API', 'Form Validation'],
        'tasks': [
            'Developed the frontend interface',
            'Integrated a custom REST API',
            'Implemented image upload functionality',
            'Added image filtering',
            'Created validated forms',
            'Connected the frontend with a backend server',
        ],
        'linkShow':'https://keksogram-red.vercel.app/',
        'linkCode':'https://github.com/evelinabortnyk/Keksogram-',
    },
    {        
        'img': './img/screen/tattoo-screen.png',
        'preview': './img/preview/tattoo-preview.png',
        'gallery' :['./img/gallery/tattoo_1.png', './img/gallery/tattoo_2.png', './img/gallery/tattoo_3.png', './img/gallery/tattoo_4.png'],
        'title': 'Tattoo salon',
        'link': 'tattoo-salon',
        'description': 'A responsive landing page for a tattoo studio built with JavaScript and jQuery. The project features an interactive image gallery, smooth scrolling, and a contact form, focusing on user experience and clean interface design.',
        'tags': ['JavaScript', 'jQuery', 'HTML/CSS'],
        'features': ['Responsive', 'Image Gallery', 'Contact Form'],
        'tasks': [
            'Developed a responsive landing page',
            'Created an interactive image gallery',
            'Implemented smooth scrolling',
            'Built a contact form',
            'Designed a user-friendly interface',
        ],
        'linkShow':'https://tatto-salon.vercel.app/',
        'linkCode':'https://github.com/evelinabortnyk/Tatto_salon',
    },
    // {
    //     'img': fest,
    //     'preview': festBg,
    //     'gallery' :['./img/gallery/fest_1.png', './img/gallery/fest_2.png', './img/gallery/fest_3.png',],
    //     'title': 'Festival',
    //     'link': 'festival',
    //     'description': 'The project was created on Vue',
    //     'tags': ['Vue.js'],
    //     'features': ['Responsive', 'REST API', 'Conversion History'],
    //     'tasks': [],
    //     'linkShow':'https://fest-hczh8rlov-evelinavegas.vercel.app/',
    //     'linkCode':'https://github.com/evelinabortnyk/Rock_fest',
    // }, 
]