export const paths = {
  home: {
    getHref: () => '/',
  },
  telemetry: {
    getHref: () => '/#telemetry',
  },
  stack: {
    getHref: () => '/#stack',
  },
  experience: {
    getHref: () => '/#experience',
  },
  skills: {
    getHref: () => '/#skills',
  },
  contact: {
    getHref: () => '/#contact',
  },
  social: {
    github: 'https://github.com/l3-h6',
    linkedin: 'https://linkedin.com/in/pratikneupane',
    email: 'pratikneupane@proton.me',
  },
} as const;
