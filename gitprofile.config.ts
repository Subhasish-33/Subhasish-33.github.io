// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Subhasish-33', 
  },
  base: '/', // Changed to root since you are renaming the repo to username.github.io
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: true, // Set to true to hide forked repos and show only YOUR work
          projects: [],
        },
      },
    },
    external: {
      header: 'Key Projects',
      projects: [
        {
          title: 'Bhubaneswar Energy Twin',
          description:
            'A digital twin for campus energy optimization using Reinforcement Learning and XGBoost to predict and optimize power consumption.',
          imageUrl: 'https://img.icons8.com/clouds/256/electricity.png',
          link: 'https://github.com/Subhasish-33',
        },
        {
          title: 'Traffic Congestion Estimation',
          description:
            'Predictive modeling and data analysis project focused on urban mobility and reducing congestion in Bhubaneswar suburbs.',
          imageUrl: 'https://img.icons8.com/clouds/256/traffic-jam.png',
          link: 'https://github.com/Subhasish-33',
        },
        {
          title: 'Netflix Stock Price Prediction',
          description:
            'Time-series forecasting model built to predict stock market trends using historical Netflix data.',
          imageUrl: 'https://img.icons8.com/clouds/256/netflix.png',
          link: 'https://github.com/Subhasish-33',
        },
      ],
    },
  },
  seo: { 
    title: 'Portfolio of Subhasish', 
    description: 'B.Tech Data Science Student & AI Developer', 
    imageURL: '' 
  },
  social: {
    linkedin: 'www.linkedin.com/in/subhasish-kumar-sahu-847545310', 
    github: 'Subhasish-33',
    website: '',
    phone: '',
    email: 'sahusubhasish6@gmail.com', 
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/1MktmvY9wplBwjjVQ93vuffEkWaeX37mV/view?usp=sharing', 
  },
  skills: [
    'Python',
    'C++',
    'Java',
    'Data Science',
    'Machine Learning',
    'AWS (EC2, S3, Lambda)',
    'MongoDB',
    'LangChain',
    'XGBoost',
    'SQL',
    'Git',
  ],
  experiences: [
    {
      company: 'C.V. Raman Global University',
      position: 'B.Tech CSE (Data Science) - 6th Semester',
      from: '2023',
      to: 'Present',
      companyLink: 'https://cgu-odisha.ac.in/',
    },
  ],
  certifications: [
    {
      name: 'AWS Cloud Practitioner',
      body: 'Cloud Infrastructure & Services',
      year: '2026',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'C.V. Raman Global University, Bhubaneswar',
      degree: 'Bachelor of Technology in Computer Science (DS)',
      from: '2023',
      to: '2027',
    },
  ],
  blog: {
    source: '', 
    username: '',
  },
  themeConfig: {
    defaultTheme: 'dark', 
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: ['light', 'dark', 'cupcake', 'retro', 'cyberpunk', 'night', 'coffee'],
  },
  footer: `Built by Subhasish with ❤️`,
  enablePWA: true,
};

export default CONFIG;
