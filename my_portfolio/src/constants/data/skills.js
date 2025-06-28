import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaJava, FaBootstrap, FaDatabase, FaCuttlefish } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiCplusplus, SiCsharp, SiKotlin, SiNumpy, SiPandas, SiMatplotlib, SiSeaborn, SiScikitlearn, SiVuedotjs, SiVisualstudiocode, SiVisualstudio, SiNetlify, SiHeroku } from 'react-icons/si';
import { AiFillRobot } from 'react-icons/ai';

export const skills = [
  // Frontend
  { name: 'HTML5', icon: 'FaHtml5', level: 'Advanced', type: 'frontend' },
  { name: 'CSS3', icon: 'FaCss3Alt', level: 'Advanced', type: 'frontend' },
  { name: 'JavaScript', icon: 'FaJsSquare', level: 'Advanced', type: 'frontend' },
  { name: 'React.js', icon: 'FaReact', level: 'Advanced', type: 'frontend' },
  { name: 'Next.js', icon: 'SiNextdotjs', level: 'Intermediate', type: 'frontend' },
  { name: 'Bootstrap', icon: 'FaBootstrap', level: 'Intermediate', type: 'frontend' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss', level: 'Intermediate', type: 'frontend' },

  // Backend
  { name: 'Node.js', icon: 'FaNodeJs', level: 'Intermediate', type: 'backend' },
  { name: 'Express.js', icon: 'SiExpress', level: 'Intermediate', type: 'backend' },
  { name: 'MongoDB', icon: 'SiMongodb', level: 'Intermediate', type: 'backend' },
  { name: 'MySQL', icon: 'SiMysql', level: 'Intermediate', type: 'backend' },

  // Programming Languages
  { name: 'Python', icon: 'FaPython', level: 'Advanced', type: 'language' },
  { name: 'C', icon: 'FaCuttlefish', level: 'Intermediate', type: 'language' },
  { name: 'C++', icon: 'SiCplusplus', level: 'Intermediate', type: 'language' },
  { name: 'C#', icon: 'SiCsharp', level: 'Intermediate', type: 'language' },
  { name: 'Java', icon: 'FaJava', level: 'Intermediate', type: 'language' },
  { name: 'Kotlin', icon: 'SiKotlin', level: 'Beginner', type: 'language' },

  // Data Science / ML
  { name: 'NumPy', icon: 'SiNumpy', level: 'Intermediate', type: 'data' },
  { name: 'Pandas', icon: 'SiPandas', level: 'Intermediate', type: 'data' },
  { name: 'Matplotlib', icon: 'SiMatplotlib', level: 'Intermediate', type: 'data' },
  { name: 'Seaborn', icon: 'SiSeaborn', level: 'Intermediate', type: 'data' },
  { name: 'Scikit-learn', icon: 'SiScikitlearn', level: 'Intermediate', type: 'data' },

  // Tools
  { name: 'Git', icon: 'FaGitAlt', level: 'Intermediate', type: 'utility' },
  { name: 'GitHub', icon: 'FaGithub', level: 'Intermediate', type: 'utility' },
  { name: 'VS Code', icon: 'SiVisualstudiocode', level: 'Intermediate', type: 'utility' },
  { name: 'Visual Studio', icon: 'SiVisualstudio', level: 'Intermediate', type: 'utility' },
  { name: 'Netlify', icon: 'SiNetlify', level: 'Intermediate', type: 'utility' },
  { name: 'Heroku', icon: 'SiHeroku', level: 'Intermediate', type: 'utility' },

  // AI/Modern Tools
  { name: 'Cursor AI', icon: 'AiFillRobot', level: 'Beginner', type: 'utility' },
  { name: 'Claude', icon: 'AiFillRobot', level: 'Beginner', type: 'utility' },
]; 