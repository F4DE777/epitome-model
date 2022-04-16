export const navMenus = {
    about: [
        // {title: 'About ' + process.env.REACT_APP_SITE_NAME, path: '/about', cName: 'dropdown-link'},
        {title: 'Principal\'s Desk', path: '/about/principal', cName: 'dropdown-link'},
        {title: 'Human Resource Manager', path: '/about/hrm', cName: 'dropdown-link'},
        {title: 'Contact Us', path: '/about/contact', cName: 'dropdown-link'},
    ],
    academic: [
        // {
        //     title: 'Academics',
        //     description: `At ${process.env.REACT_APP_SITE_NAME}, we aim to provide an innovative learning program that promotes our values of Respect, Diversity, Sustainability and Excellence.`,
        //     path: '/academic',
        //     cName: 'dropdown-link',
        // },
        {title: 'How to Apply', path: '/academic/curriculum', cName: 'dropdown-link', description: '', },
        {title: 'Age Consideration', path: '/academic/well-being', cName: 'dropdown-link'},
        {title: 'Results & Scholarships', path: '/academic/remote-learning', cName: 'dropdown-link'},
   
    ],
    learn: [
        // {
        //     title: 'Welcome',
        //     description: `We are delighted that you are interested in applying to ${process.env.REACT_APP_SITE_NAME}`,
        //     path: '/learn',
        //     cName: 'dropdown-link'
        // },
        {title: 'EYFS', path: '/learn/general-info', cName: 'dropdown-link'},
        {title: 'Nursery', path: '/learn/apply', cName: 'dropdown-link'},
        {title: 'Primary', path: '/learn/tuition-financial-aid', cName: 'dropdown-link'},
        {title: 'Junior School',   path: '/learn/lower-school-learn-faqs', cName: 'dropdown-link' },
        {title: 'Secondary School', path: '/learn/middleupper-school-learn-faqs', cName: 'dropdown-link' },
    ],
    school: [
        {title: 'Curriculum', path: '/school/curriculum', cName: 'dropdown-link'},
        {title: 'Academic Structure', path: '/school/academic-structure', cName: 'dropdown-link'},
        {title: 'Academic Probation', path: '/school/academic-probation', cName: 'dropdown-link'},
    ],
    news: [
        {title: 'school news', path: '/news/school_news', cName: 'dropdown-link'},
        {title: 'school activities', path: '/news/school_act', cName: 'dropdown-link'},
    ],
}

export default navMenus;
