export const portfolios = [
  {
    id: 1,
    thumbnailType: 'image',
    thumbnail: '/images/GreenYasin.png',
    name: 'GreenYasin.pk',
    category: 'web',
    isFeatured: true,
    excerpt: 'A fully responsive and dynamic website for GreenYasin.pk built with the MERN stack, delivered with a 5-star client rating.',
    slug: 'green-yasin-pk',
    type: 'client',
    skill: [
      { name: 'MongoDB', icon: '<i class="devicon-mongodb-plain colored"></i>' },
      { name: 'Express.js', icon: '<i class="devicon-express-original colored"></i>' },
      { name: 'React.js', icon: '<i class="devicon-react-original colored"></i>' },
      { name: 'Node.js', icon: '<i class="devicon-nodejs-plain colored"></i>' }
    ],
    demoLink: 'https://greenyasin.pk',
    githubLink: '#',
    content: `# GreenYasin.pk - Environmental Consulting Website
  
  ## Project Overview
  GreenYasin is a modern, feature-rich web platform dedicated to environmental consulting and sustainability services. The website showcases the companys expertise in areas such as air and water quality, soil analysis, waste management, and environmental compliance. It provides detailed information about services, projects, team members, and career opportunities, as well as a blog for sharing industry insights and updates.
  
  ## Key Features
  - **Service Pages**: Detailed descriptions of environmental services including air, water, soil, and waste management.
  - **Project Portfolio**: Showcases completed and ongoing projects with images and descriptions.
  - **Blog**: Regularly updated with articles, news, and insights related to environmental sustainability.
  - **Career Section**: Allows users to explore job opportunities and submit applications.
  - **Contact Forms**: Enables visitors to get in touch for inquiries or service requests.
  - **User Authentication**: Secure login and signup functionality for personalized experiences.
  - **Optimized Images**: Fast-loading, responsive images for better performance and SEO.
  - **Admin Panel**: Tools for managing content, blogs, and user submissions (implied by cPanel deployment and admin-related files).
  
  ## Technical Stack
  - **Frontend**: React (with TypeScript), Vite for fast development and builds, Tailwind CSS for modern, responsive UI, and PostCSS for advanced CSS processing.
  - **Backend/Serverless**: Convex for backend logic, data modeling, and serverless functions.
  - **Authentication**: Custom authentication logic, possibly integrated with third-party providers.
  - **Email Integration**: EmailJS for handling contact and career form submissions.
  - **Image Optimization**: WebP and other optimized formats for efficient image delivery.
  - **Deployment**: Configured for deployment on cPanel, with .htaccess for routing and optimization.
  - **Linting & Formatting**: ESLint and Prettier for code quality and consistency.
  
  ## Business Impact
  - Delivered a fast, scalable, and user-friendly platform
  - Effectively communicates GreenYasin’s environmental mission and services
  - Boosts digital credibility and professional appearance
  - Helps attract clients and job applicants through a structured and appealing interface`,
    review: {
      type: 'image',
      value: '/images/greenyasin_review.png'
    }
  }
  ,
  {
    id: 2,
    thumbnailType: 'image',
    thumbnail: '/images/neurix.jpg', // Example video path
    name: 'Neurix Solution',
    category: 'webdev',
    isFeatured: true,
    excerpt: 'A comprehensive business startup website offering Web Development, CMS Development, AI/ML, and Graphic Design services. Built with MERN Stack and deployed on Netlify and Heroku.',
    slug: 'neurix-solution',
    type: 'personal',
    skill: [
      { name: 'React', icon: '<i class="devicon-react-original colored"></i>' },
      { name: 'Node.js', icon: '<i class="devicon-nodejs-plain colored"></i>' },
      { name: 'MongoDB', icon: '<i class="devicon-mongodb-plain colored"></i>' },
      { name: 'Express.js', icon: '<i class="devicon-express-original colored"></i>' },
      { name: 'Netlify', icon: '<i class="devicon-netlify-plain colored"></i>' },
      { name: 'Heroku', icon: '<i class="devicon-heroku-plain colored"></i>' }
    ],
    demoLink: 'https://neurixsolution.tech',
    githubLink: '#',
    content: `# Nextrix Solution - Freelance Business Platform

## Project Overview
Nextrix Solution is a freelance business startup website designed to offer comprehensive digital services. The platform showcases expertise in web development, content management systems, artificial intelligence, machine learning, and graphic design.

## Key Features
- **Service Portfolio**: Comprehensive display of offered services
- **Professional Design**: Modern and attractive, business-focused interface
- **MERN Stack**: Full-stack implementation with modern technologies
- **Responsive Design**: Optimized for all devices and screen sizes
- **Business Ready**: Professional presentation for client acquisition

## Technical Stack
- **Frontend**: React.js with modern UI/UX
- **Backend**: Node.js with Express.js
- **Database**: MongoDB for data persistence
- **Deployment**: Heroku for reliable hosting
- **Styling**: Modern CSS with responsive design

## Business Impact
- Professional online presence for freelance services
- Clear service offerings and expertise demonstration
- Client-friendly interface for service inquiries
- Scalable platform for business growth`,
    review: {
      type: 'text',
      value: 'Delivered exactly what we envisioned — modern, responsive, and built with care! The Nextrix Solution website effectively showcases our services and has helped us attract quality clients. The professional design and smooth functionality make a great impression.'
    }
  },
  {
    "id": 3,
    "thumbnailType": "image",
    "thumbnail": "/images/landingpage.png",
    "name": "Responsive Landing Page",
    "category": "web",
    "isFeatured": true,
    "excerpt": "A fully responsive and visually appealing landing page delivered on time with a 5-star client rating.",
    "slug": "responsive-landing-page",
    "type": "client",
    "skill": [
      { "name": "HTML", "icon": "<i class=\"devicon-html5-plain colored\"></i>" },
      { "name": "CSS", "icon": "<i class=\"devicon-css3-plain colored\"></i>" },
      { "name": "JavaScript", "icon": "<i class=\"devicon-javascript-plain colored\"></i>" },
      { "name": "Bootstrap", "icon": "<i class=\"devicon-bootstrap-plain colored\"></i>" }
    ],
    "demoLink": "https://example.com/landingpage-demo",
    "githubLink": "https://github.com/yourusername/responsive-landing-page",
    "content": "## Project Overview\nDeveloped a fully responsive and visually appealing landing page using HTML, CSS, JavaScript, and Bootstrap. Delivered within the agreed timeline, achieving a 5-star client rating.",
    "review": {
      "type": "image",
      "value": "/images/Fiver.png"
    }
  }
 ,  
  {
    id: 4,
    "thumbnailType": "video",
    thumbnail: '/images/clothingstore.mp4',
    name: 'FashionCart - Online Clothing Store',
    category: 'web',
    isFeatured: true,
    excerpt: 'A responsive eCommerce clothing store (desktop only) featuring seasonal collections, interactive product selection, and a fashion blog. Built with React, HTML, CSS, Bootstrap, and JavaScript.',
    slug: 'fashioncart-store',
    type: 'client',
    skill: [
      { name: 'HTML', icon: '<i class="devicon-html5-plain colored"></i>' },
      { name: 'CSS3', icon: '<i class="devicon-css3-plain colored"></i>' },
      { name: 'Bootstrap', icon: '<i class="devicon-bootstrap-plain colored"></i>' },
      { name: 'JavaScript', icon: '<i class="devicon-javascript-plain colored"></i>' },
      { name: 'React', icon: '<i class="devicon-react-original colored"></i>' }
    ],
    demoLink: 'https://beautiful-licorice-645db9.netlify.app/ ',
    githubLink: '#',
    content: `# FashionCart - Online Shopping Store
  
  ## Project Overview
  FashionCart is a fully functional and visually appealing online clothing store tailored for seasonal fashion. It features interactive shopping elements, product customization, and a built-in blog to keep customers updated with the latest fashion trends.
  
  > **Note:** This version is optimized for desktop and is **not mobile-friendly**. Future updates may include mobile responsiveness.
  
  ## Key Features
  - **Home Page**: Showcases featured products and new arrivals.
  - **Seasonal Collections**: Organized clothing collections for different seasons (Summer, Winter, Spring, Autumn).
  - **Interactive Product Gallery**: Users can select product color, size, and quantity using a JavaScript-powered gallery.
  - **Product Details**: Comprehensive pages for each product including images, descriptions, pricing, and availability.
  - **Newsletter Signup**: Stay updated with the latest designs and trends through the integrated newsletter feature.
  - **Fashion Blog**: Explore fashion tips, updates, and promotional content.
  - **Contact Page**: Includes store contact information for customer support and inquiries.
  
  ## Technical Stack
  - **Frontend**: HTML5, CSS3, Bootstrap for styling and layout
  - **Interactivity**: JavaScript and React for dynamic components and state handling
  - **Responsiveness**: Currently optimized only for desktop screens
  
  ## Deliverables
  - Modern eCommerce platform with interactive shopping features
  - Clean and maintainable frontend code
  - SEO-optimized structure and content layout
  - **Note:** Mobile responsiveness was not implemented in this version
  
  `,
    review: {
      type: 'text',
      value: 'A beautifully built shopping site with smooth product browsing and a great user interface. The interactive gallery and seasonal collections made it very user-friendly. Highly satisfied with the result!'
    }
  }
,  
{
  id: 5,
  "thumbnailType": "image",
  thumbnail: '/images/DoctorAppointment.png',
  name: 'Doctor Appointment System',
  category: 'web',
  isFeatured: true,
  excerpt: 'A role-based medical appointment system with real-time chat, appointment management, and dashboards for patients, doctors, and admins. Built with ASP.NET Core and SQL Server.',
  slug: 'doctor-appointment-system',
  type: 'academic',
  skill: [
    { name: 'ASP.NET Core', icon: '<i class="devicon-dotnetcore-plain colored"></i>' },
    { name: 'C#', icon: '<i class="devicon-csharp-plain colored"></i>' },
    { name: 'Razor Pages', icon: '<i class="devicon-html5-plain colored"></i>' },
    { name: 'JavaScript', icon: '<i class="devicon-javascript-plain colored"></i>' },
    { name: 'SQL Server', icon: '<i class="devicon-microsoftsqlserver-plain colored"></i>' },
    { name: 'Bootstrap', icon: '<i class="devicon-bootstrap-plain colored"></i>' },
    { name: 'jQuery', icon: '<i class="devicon-jquery-plain colored"></i>' }
  ],
  demoLink: 'https://github.com/musadaqhanif/Doctor_Appointment_System',
  githubLink: 'https://github.com/musadaqhanif/Doctor_Appointment_System',
  content: `# Doctor Appointment System

## Project Overview
The Doctor Appointment System is a comprehensive web application designed to streamline the process of booking and managing doctor appointments online. It serves as a platform for patients to easily find doctors, schedule appointments, and manage their bookings, while also providing doctors and administrators with tools to manage schedules, view appointments, and interact with patients.

## Key Features
- **User Authentication**: Secure login and registration for patients, doctors, and administrators.
- **Doctor Management**: Admins can add, update, or remove doctor profiles and manage their schedules.
- **Appointment Booking**: Patients can search for doctors by specialty, view available slots, and book appointments online.
- **Appointment Management**: Doctors and patients can view, update, or cancel appointments.
- **Session Scheduling**: Doctors can set their available times for patient sessions.
- **Chat Functionality**: Real-time chat between doctors and patients for better communication.
- **Dashboard**: Personalized dashboards for doctors, patients, and admins to manage their activities.
- **Notifications**: Email or in-app notifications for appointment confirmations, reminders, and updates.
- **Role-Based Access**: Different access levels and functionalities for patients, doctors, and admins.

## Tech Stack
- **Backend**: ASP.NET Core (C#)
- **Frontend**: Razor Pages (CSHTML), HTML, CSS, JavaScript
- **Database**: Entity Framework Core with SQL Server
- **Authentication**: ASP.NET Core Identity
- **Real-Time Communication**: SignalR for chat and live updates
- **Libraries**: Bootstrap, jQuery

## Project Impact
- Simplifies healthcare appointment scheduling for users and doctors
- Provides real-time communication and organized dashboards
- Fully role-based system with enhanced management features
- Built as part of a capstone academic or client-based software project`,
  review: {
    type: 'text',
    value: 'A solid appointment management platform that integrates real-time communication and structured workflows for patients and healthcare professionals. Robust and easy to use.'
  }
}
,
{
  id: 6,
  thumbnailType: 'image',
  thumbnail: '/images/portfolio.png',
  name: 'Personal Portfolio Website',
  category: 'web',
  isFeatured: true,
  excerpt: 'A responsive personal portfolio site built with Next.js, Tailwind CSS, and React, showcasing projects, skills, and services with multilingual support and dark/light mode.',
  slug: 'personal-portfolio',
  type: 'personal',
  skill: [
    { name: 'Next.js', icon: '<i class="devicon-nextjs-plain colored"></i>' },
    { name: 'React', icon: '<i class="devicon-react-original colored"></i>' },
    { name: 'Tailwind CSS', icon: '<i class="devicon-tailwindcss-plain colored"></i>' },
    { name: 'EmailJS', icon: '<i class="devicon-javascript-plain colored"></i>' },
    { name: 'Netlify', icon: '<i class="devicon-netlify-plain colored"></i>' },
    { name: 'Vercel', icon: '<i class="devicon-vercel-plain colored"></i>' }
  ],
  demoLink: 'https://musadaq.live',  // Update if different
  githubLink: 'https://musadaq.live',  // Update if needed
  content: `# Personal Portfolio Website

## Project Overview
This is a personal portfolio website designed to showcase the work, skills, and professional journey of a web developer. The site serves as a digital resume, providing visitors with insights into the developer’s background, projects, experience, and services offered.

## Key Features
- **Home Page**: Engaging introduction with social links and a summary of expertise.
- **About Section**: Detailed background, career journey, and personal story.
- **Portfolio**: Interactive gallery of completed projects with detailed case studies.
- **Blog**: Articles and posts sharing knowledge, tutorials, and industry insights.
- **Experience**: Timeline of professional roles and achievements.
- **Skills & Certificates**: Visual representation of technical skills and earned certifications.
- **Services**: Overview of services provided, such as web development, consulting, etc.
- **Reviews**: Testimonials from clients and collaborators.
- **Contact Form**: Easy way for visitors to get in touch via email.
- **Performance Insights**: Integrated tools to display website speed and optimization scores.
- **Dark/Light Mode**: User-friendly theme toggle for accessibility.
- **Multilingual Support**: Content available in multiple languages.

## Tech Stack
- **Frontend Framework**: Next.js (React-based) for server-side rendering and static site generation.
- **UI Development**: React with Tailwind CSS for a clean, responsive interface.
- **Email Integration**: EmailJS to handle contact form submissions.
- **Deployment**: Hosted on Netlify and Vercel for seamless deployment.
- **CSS Optimization**: PostCSS for processing and optimizing styles.
- **Additional Tools**: ESLint for code linting, SEO plugins, analytics tools.

## Project Impact
- Builds a strong personal brand and professional presence online.
- Attracts clients and collaborators through well-structured content.
- Optimized for fast loading, accessibility, and responsiveness on all devices.`,
  review: {
    type: 'text',
    value: 'Exactly the kind of professional presence I needed! Clean design, fast performance, and beautifully showcases all my work. Highly recommended for any developer.'
  }
}

//   {
//     id: 5,
//     thumbnail: '/images/resource-hub.png',
//     name: 'Resource Hub Community Platform',
//     category: 'webdev',
//     isFeatured: false,
//     excerpt: 'A full-stack community hub for listing items for borrow, rent, exchange, or request. Built as an MVP for the SOFTEC Web Competition using MERN Stack.',
//     slug: 'resource-hub',
//     type: 'personal',
//     skill: [
//       { name: 'React', icon: '<i class="devicon-react-original colored"></i>' },
//       { name: 'Node.js', icon: '<i class="devicon-nodejs-plain colored"></i>' },
//       { name: 'MongoDB', icon: '<i class="devicon-mongodb-plain colored"></i>' },
//       { name: 'Express.js', icon: '<i class="devicon-express-original colored"></i>' }
//     ],
//     demoLink: 'https://resource-hub-softec.com',
//     githubLink: 'https://github.com/musadaqhanif/resource-hub',
//     content: `# Resource Hub - Community Platform MVP

// ## Project Overview
// Resource Hub is a community-driven platform that enables users to list, borrow, rent, exchange, or request items. Built as an MVP for the SOFTEC Web Competition, it demonstrates full-stack development capabilities.

// ## Key Features
// - **Item Management**: List items for various purposes
// - **Category System**: Organized browsing by item categories
// - **User Interface**: Intuitive and user-centric design
// - **Community Features**: Social interaction and item sharing
// - **Search & Filter**: Easy item discovery and filtering

// ## Technical Stack
// - **Frontend**: React.js with modern UI components
// - **Backend**: Node.js with Express.js
// - **Database**: MongoDB for flexible data storage
// - **Architecture**: MERN stack for scalable development
// - **Design**: User-centric interface with category-based browsing

// ## Competition Features
// - **MVP Development**: Rapid prototyping and development
// - **User Experience**: Focus on intuitive navigation
// - **Scalability**: Designed for future feature expansion
// - **Community Focus**: Social features for user engagement

// ## Impact
// - Demonstrated full-stack development skills
// - Created practical community solution
// - Showcased modern web development practices
// - Prepared foundation for larger platform development`,
//     review: {
//       type: 'text',
//       value: 'The Resource Hub MVP demonstrates excellent technical skills and innovative thinking. The user-centric interface and category-based browsing make it intuitive for users.'
//     }
//   },
  
]; 