export const profile = {
    img: {
        src: './assets/img/profile.png',
        alt: 'profile'
    },
    name: 'joab alves dos santos',
    fuc: 'full-Stack developer',
    social_media: [{
            name: 'linkedin',
            link: 'http:// ',
            icon: 'linkedin-square'
        },
        {
            name: 'github',
            link: 'http://',
            icon: 'github'
        },
    ],
    contacts: [{
            name: 'email',
            info: 'contato@devs.natal.com.br',
            link: 'mailto:contato@devs.natal.br',
            icon: 'email'
        },
        {
            name: 'Whatsapp',
            info: '8499914-2883',
            link: 'https://web.whatsapp.com/send?phone=558499914-2883',
            icon: 'whatsapp'
        },
    ],
    description: 'Self-motivated developer, who is willing to learn and create outstanding UI applications.'
}

export const experiences = [{
        img: {
            src: './assets/img/logos/quadra.png',
            alt: 'quadra digital'
        },
        time: {
            in: 'feb - 2017',
            out: 'set - 2018'
        },
        fuc: 'Desenvolvedor Web Jr',
        description: "Desenvolvimento e manutenção sites com a linguagem PHP, javascript. Utilizando também as linguagens de marcação HTML5 e CSS3. ",
        name: 'Quadra Digital',
        link: 'http://'
    },
    {
        img: {
            src: './assets/img/logos/ctis.jpeg',
            alt: 'CTIS'
        },
        time: {
            in: 'mar - 2011',
            out: 'out - 2015'
        },
        fuc: 'Suporte Técnico',
        description: "Atendimento remoto e presencial a usuários, Análise e criação procedimentos técnicos, responsável por conceder acesso a usuários a sistemas internos da empesa.",
        name: 'CTIS',
        link: 'http://'

    },
    {
        img: {
            src: './assets/img/logos/pcservice.jpeg',
            alt: 'PC Service'
        },
        time: {
            in: 'set - 2009',
            out: 'mar - 2011'
        },
        fuc: 'Analista de Suporte Técnico',
        description: "Atendimento remoto e presencial a usuários, Análise e criação procedimentos técnicos, responsável por conceder acesso a usuários a sistemas internos da empesa.",
        name: 'PC service Tecnologia Ltda',
        link: 'http://'

    },
    {
        img: {
            src: './assets/img/logos/plugtech.jpeg',
            alt: 'Plugtech'
        },
        time: {
            in: '2006',
            out: '2009'
        },
        fuc: 'Técnico de informática',
        description: "Manutenção de equipamento de informática, atendimento presencial ao cliente ",
        name: 'Plugtech do brasil Ltda',
        link: 'http://'

    },
]

export const hobbies = [{
        name: 'Gamming',
        img: {
            src: './assets/img/hobbies/game.jpg',
            alt: ''
        },
        description: 'Quisque feugiat malesuada molestie.'
    },
    {
        name: 'cooking',
        img: {
            src: './assets/img/hobbies/game.jpg',
            alt: ''
        },
        description: 'Quisque feugiat malesuada molestie.'
    },
    {
        name: 'biking',
        img: {
            src: './assets/img/hobbies/game.jpg',
            alt: ''
        },
        description: 'Quisque feugiat malesuada molestie.'
    }
]

export const skills = [{
        title: 'Front End',

        skills: [{
                name: 'react',
                per: 40
            },
            {
                name: 'javaScript',
                per: 60
            },
            {
                name: 'CSS',
                per: 60
            },
            {
                name: 'VUE',
                per: 20
            },
            {
                name: 'React Native',
                per: 20
            },
            {
                name: 'HTML',
                per: 60
            }
        ]
    },
    {
        title: 'Design',

        skills: [{
                name: 'Photoshop',
                per: 40
            },
            {
                name: 'Figma',
                per: 60
            },
            {
                name: 'Gimp',
                per: 60
            }
        ]
    },

]

export const projects = [{
        name: '404 Not Found',
        description: "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io",
        img: {
            src: './assets/img/projects/project07.png',
            alt: 'project'
        },
        categories: [{
                name: 'html'
            },
            {
                name: 'CSS'
            },
            {
                name: 'Responsive'
            },
        ],
        urls: [{
                name: 'Demo',
                to: 'https://aviralcoder.github.io/404-not-found-devchallenges/'
            },
            {
                name: 'code',
                to: 'https://github.com/AviralCoder/404-not-found-devchallenges'
            },
        ]
    },
    {
        name: 'My Team Page',
        description: "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io. ",
        img: {
            src: './assets/img/projects/project06.png',
            alt: 'project'
        },
        categories: [{
                name: 'html'
            },
            {
                name: 'Responsive'
            },
        ],
        urls: [{
                name: 'Demo',
                to: 'https://devs.natal.br/devchallenges/my-team-page-master'
            },
            {
                name: 'code',
                to: 'https://github.com/joabalves-dev/my-team-page-master'
            },
        ]
    },
    {
        name: 'Interior Consultant',
        description: "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io.",
        img: {
            src: './assets/img/projects/project05.png',
            alt: 'project'
        },
        categories: [{
                name: 'html'
            },
            {
                name: 'CSS'
            },
            {
                name: 'Responsive'
            },
        ],
        urls: [{
                name: 'Demo',
                to: 'https://devs.natal.br/devchallenges/interior-consultant-master/'
            },
            {
                name: 'code',
                to: 'https://github.com/joabalves-dev/interior-consultant-master'
            },
        ]
    },
    {
        name: 'Recipe Page',
        description: "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io.",
        img: {
            src: './assets/img/projects/project04.png',
            alt: 'project'
        },
        categories: [{
                name: 'html'
            },
            {
                name: 'CSS'
            },
            {
                name: 'Responsive'
            },
        ],
        urls: [{
                name: 'Demo',
                to: 'https://devs.natal.br/devchallenges/recipe-page-master'
            },
            {
                name: 'code',
                to: 'https://github.com/joabalves-dev/recipe-page-master'
            },
        ]
    },
    {
        name: 'My Gallery',
        description: "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io.",
        img: {
            src: './assets/img/projects/project03.png',
            alt: 'project'
        },
        categories: [{
                name: 'html'
            },
            {
                name: 'CSS'
            },
            {
                name: 'Responsive'
            },
        ],
        urls: [{
                name: 'Demo',
                to: 'https://devs.natal.br/devchallenges/my-gallery-master/'
            },
            {
                name: 'code',
                to: 'https://github.com/joabalves-dev/my-gallery-master'
            },
        ]
    },
    {
        name: 'Checkout Page',
        description: "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io.",
        img: {
            src: './assets/img/projects/project02.png',
            alt: 'project'
        },
        categories: [{
                name: 'html'
            },
            {
                name: 'CSS'
            },
            {
                name: 'Responsive'
            },
        ],
        urls: [{
                name: 'Demo',
                to: 'https://devs.natal.br/devchallenges/checkout-page-master'
            },
            {
                name: 'code',
                to: 'https://github.com/joabalves-dev/challenges-checkout-page'
            },
        ]
    },
    {
        name: 'edie Home Page',
        description: "In this project, I work with HTML and CSS to create a responsive page. The design is from devchallenge.io.",
        img: {
            src: './assets/img/projects/project01.png',
            alt: 'project'
        },
        categories: [{
                name: 'html'
            },
            {
                name: 'CSS'
            },
            {
                name: 'Responsive'
            },
        ],
        urls: [{
                name: 'Demo',
                to: 'https://devs.natal.br/devchallenges/edie-homepage-master'
            },
            {
                name: 'code',
                to: 'https://github.com/joabalves-dev/devchallenges-edie-homePage'
            },
        ]
    },
]