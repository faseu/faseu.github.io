import {
  mobile,
  backend,
  creator,
  web,
  // my exports
  // learning journey
  freeCodeCamp,
  codepath,
  harvard,
  nathacks,
  udemy,
  upenn,
  skyit,
  develop_for_good,

  // projects
  davidsblog,
  bookshelfChronicles,
  studybot,
  williamPortfolio,
  physmatch,
  aifluently,
  cleverkiddos,

  // socials
  github_social,
  youtube,
  linkedin,
} from '../assets';

export const navLinks = [];

const services = [
  {
    title: 'Full-Stack Web Developer',
    icon: web,
    description: 'Beautiful dynamic websites',
  },
  {
    title: 'Software Engineer',
    icon: mobile,
    description: 'Innovative code creator',
  },
  {
    title: 'Kinesiologist',
    icon: backend,
    description: 'Body movement specialist',
  },
  {
    title: 'Continuous Learner',
    icon: creator,
    description: 'Eternal knowledge seeker',
  },
];

const experiences = [
  {
    title: 'Web Dev Basics',
    company_name: 'freeCodeCamp',
    icon: freeCodeCamp,
    iconBg: '#030220',
    date: '2020 - 2021',
    points: [
      'Responsive Web Design Certification | Utilized HTML/CSS3 to create responsive static websites',
      'JavaScript Algorithms and Data Structures Certification | Foundational knowledge of JavaScript',
      'Front End Development Libraries Certification | React, Redux, Bootstrap, JQuery',
    ],
  },
  {
    title: "Harvard's CS50",
    company_name: 'Harvard University',
    icon: harvard,
    iconBg: '#E6DEDD',
    date: '2021',
    points: [
      'An 11 week long course to the fundamentals in Computer Science',
      'Created 11 different projects utilizing different methods or languages each week',
      'Learned Scratch, C, Arrays & Algorithms in C, Memory, Data Structures, SQL, HTML/CSS/Javascript, Flask and Cybersecurity Fundamentals',
    ],
    source: {
      description: 'Click here for the certificate...',
      link: 'https://certificates.cs50.io/8568293d-85c8-4367-a126-cdd765221073.pdf?size=letter',
    },
  },
  {
    title: "Angela Yu's 100 Days of Code BootCamp in Python",
    company_name: 'Udemy',
    icon: udemy,
    iconBg: '#383E56',
    date: '2022',
    points: [
      'Built upon and improved my knowledge of Python to greater heights.',
      "Learned back-end web development with Flask, SQL, and created REST API's.",
      'Web scraping with Beautiful Soup and Selenium',
      'Data science/analysis with numpy and matplotlib',
      'Created 100 projects in 100+ days',
    ],
    source: {
      description: 'Link to the bootcamp...',
      link: 'https://www.udemy.com/course/100-days-of-code/',
    },
  },
  {
    title: 'Web Development w/ React',
    company_name: 'CodePath',
    icon: codepath,
    iconBg: '#2b3f46',
    date: 'Sept 2023 - Nov 2023',
    points: [
      'A 10 week course for students to dive into React.',
      "Learned about web design, Vite, utilizing API's, and user interactivity through creating 10 different projects",
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
    source: {
      description: 'Link to the final project...',
      link: 'https://davidcao.xyz/Book-Chronicles/',
    },
  },
  {
    title: 'Hackathon Hacker',
    company_name: 'NeurAlbertaTech',
    icon: nathacks,
    iconBg: '#1f1f1f',
    date: 'Nov 2023',
    points: [
      'Led a team of 5 people to develop a solution addressing the challenges of connecting locals with family physicians in their area within 64 hours',
      'Designed and implemented a user-friendly website that facilitates easy access to local healthcare providers. React was used as the front-end and Flask was used as the back-end',
      'Researched and implemented a machine learning model for the Muse2 BCI to detect different emotions of the wearer using EEG signals which were displayed on the website',
    ],
    source: {
      description: 'Link to the final project...',
      link: 'https://devpost.com/software/physmatch',
    },
  },
  {
    title: 'Master of Computer Science',
    company_name: 'University of Pennsylvania',
    icon: upenn,
    iconBg: '#fdfdfd',
    date: 'Sept 2023 - Present',
    points: [
      "A Master's degree from the Ivy league University of Pennsylvania, providing foundational knowledge in computer science and math concepts as well as higher level knowledge based on chosen electives",
      'Courses taken so far: Software Development, Discrete Math, Computer Systems, Data Structures & Software Design',
      'Gained expertise in Python, Java, and C',
    ],
  },
  {
    title: 'React Developer, Front-end Team Lead',
    company_name: 'SkyIT Services',
    icon: skyit,
    iconBg: 'white',
    date: 'Feb 2024 - May 2024',
    points: [
      'Led the successful migration of 3 complex React projects into a single, streamlined monorepo, improving code maintainability and collaboration',
      'Collaborated with the cybersecurity team to implement multi-factor authentication, enhancing login security for all users',
      'Boosted team productivity by 15% through the creation of video tutorials, comprehensive documentation updates in READMEs, and ongoing mentorship programs.',
    ],
  },
  {
    title: 'Student Engineer',
    company_name: 'Develop for Good',
    icon: develop_for_good,
    iconBg: '#1f1f1f',
    date: 'May 2024 - Present',
    points: [
      'Applied full-stack development skills to research, scope, develop, and demo a real-world solution for a non-profit organization within a compressed 16-week timeframe.',
      'Currently in the process of implementing key features on the One Accord social network, enhancing user experience and facilitating connections between people of faith.',
      'Effectively collaborated with a diverse team to deliver a social media platform for Kingdom Dao. This project honed my communication and teamwork skills, leading to a more efficient development process.',
    ],
  },
  {
    title: 'Teaching Assistant',
    company_name: 'University of Pennsylvania',
    icon: upenn,
    iconBg: 'white',
    date: 'May 2024 - Present',
    points: [
      'Helped students solidify their understanding of data structures and algorithms through interactive weekly office hours and student forums, assisting an average of 20+ students per week.',
      'Led an engaging open recitation session for key topics, fostering active student participation and potentially contributing to improved exam performance.',
      'Provided constructive feedback on graded assignments and exams for a class of 100+ students, maintaining a consistent grading rubric and facilitating student improvement.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Occasionally I will post on LinkedIn showcasing my projects or other cool things that I have done!',
    name: 'david-cao99',
    designation: '',
    company: '',
    image: linkedin,
    src_link: 'https://www.linkedin.com/in/david-cao99/',
  },
  {
    testimonial:
      'Mostly all my projects are open source, and hosted on GitHub!',
    name: 'dave-cao',
    designation: '',
    company: '',
    image: github_social,
    src_link: 'https://github.com/dave-cao',
  },
  {
    testimonial:
      "I post videos on my projects, what I'm learning, or any other cool things!",
    name: 'sirdavidcao',
    designation: '',
    company: '',
    image: youtube,
    src_link: 'https://www.youtube.com/@sirdavidcao',
  },
];

const projects = [
  {
    name: 'Book Chronicles',
    description:
      'A forum-like book review website. Create an account and review books with me!',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: bookshelfChronicles,
    about:
      'A storyboard artist who was looking for a job reached out to me to see if I could create a simple website for him that could show-case his work while he searched for a job. The website is created with plain HTML, CSS3, and Javascript making it simple but effective. It showcases all his photos and featured storyboards.',
    source_code_link: 'https://github.com/dave-cao/Book-Chronicles',
    live_link: 'https://dave-cao.github.io/Book-Chronicles/',
  },
  {
    name: 'Clever Kiddos Daycare',
    description: 'A freelance project for a new daycare.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: cleverkiddos,
    about:
      'B storyboard artist who was looking for a job reached out to me to see if I could create a simple website for him that could show-case his work while he searched for a job. The website is created with plain HTML, CSS3, and Javascript making it simple but effective. It showcases all his photos and featured storyboards.',
    source_code_link: 'https://clever-kiddos-daycare.vercel.app/',
  },
  {
    name: 'AI Fluently',
    description:
      'Provided front-end and webscraping services to a local start-up called AI fluently.',
    tags: [
      {
        name: 'svelte',
        color: 'blue-text-gradient',
      },
      {
        name: 'webscraping',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: aifluently,
    about:
      'C storyboard artist who was looking for a job reached out to me to see if I could create a simple website for him that could show-case his work while he searched for a job. The website is created with plain HTML, CSS3, and Javascript making it simple but effective. It showcases all his photos and featured storyboards.',
    source_code_link: 'https://www.aifluently.com/',
  },
  {
    name: 'William Heng',
    description: 'A portfolio website for a Storyboard Artist (freelance)',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'HTML5',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS3',
        color: 'pink-text-gradient',
      },
    ],
    image: williamPortfolio,
    about:
      'D storyboard artist who was looking for a job reached out to me to see if I could create a simple website for him that could show-case his work while he searched for a job. The website is created with plain HTML, CSS3, and Javascript making it simple but effective. It showcases all his photos and featured storyboards.',
    source_code_link: 'https://github.com/dave-cao/williamPortfolio',
    live_link: 'https://www.williamheng.ca/',
  },
  {
    name: 'Study Bot',
    description:
      'A discord bot that gamifies studying by ranking your study against friends and much more!',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'discord.js',
        color: 'green-text-gradient',
      },
      {
        name: 'node',
        color: 'pink-text-gradient',
      },
    ],
    image: studybot,
    about:
      'E storyboard artist who was looking for a job reached out to me to see if I could create a simple website for him that could show-case his work while he searched for a job. The website is created with plain HTML, CSS3, and Javascript making it simple but effective. It showcases all his photos and featured storyboards.',
    source_code_link: 'https://github.com/dave-cao/Study-Bot',
    live_link: '',
  },
  {
    name: 'PhysMatch',
    description:
      "Connecting locals with their family physicians. Using EEG's to detect client's emotions.",
    tags: [
      {
        name: 'machine-learning',
        color: 'blue-text-gradient',
      },
      {
        name: 'EEG',
        color: 'green-text-gradient',
      },
      {
        name: 'BCI',
        color: 'pink-text-gradient',
      },
    ],
    image: physmatch,
    about:
      'F storyboard artist who was looking for a job reached out to me to see if I could create a simple website for him that could show-case his work while he searched for a job. The website is created with plain HTML, CSS3, and Javascript making it simple but effective. It showcases all his photos and featured storyboards.',
    source_code_link: 'https://devpost.com/software/physmatch',
    live_link: '',
  },
];

export { services, experiences, testimonials, projects };
