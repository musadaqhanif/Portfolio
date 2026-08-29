import {
  FaBootstrap, FaCss3Alt, FaCuttlefish, FaGitAlt, FaGithub, FaHtml5,
  FaJava, FaJsSquare, FaNodeJs, FaPython, FaReact,
} from 'react-icons/fa';
import {
  SiCplusplus, SiDotnet, SiExpress, SiHeroku, SiKotlin, SiMongodb, SiMysql,
  SiNetlify, SiNextdotjs, SiNumpy, SiPandas, SiPlotly, SiScikitlearn,
  SiScipy, SiSharp, SiTailwindcss,
} from 'react-icons/si';
import { AiFillRobot } from 'react-icons/ai';
import { VscVscode } from 'react-icons/vsc';

/**
 * Explicit icon lookup.
 *
 * This was previously `import * as FaIcons from 'react-icons/fa'` (plus /si and
 * /ai), which defeats tree-shaking and shipped every icon in all three sets:
 * the /skillset page weighed 2.67 MB of JavaScript. Naming each import keeps
 * only what is actually rendered.
 */
const iconMap = {
  FaBootstrap, FaCss3Alt, FaCuttlefish, FaGitAlt, FaGithub, FaHtml5,
  FaJava, FaJsSquare, FaNodeJs, FaPython, FaReact,
  SiCplusplus, SiDotnet, SiExpress, SiHeroku, SiKotlin, SiMongodb, SiMysql,
  SiNetlify, SiNextdotjs, SiNumpy, SiPandas, SiPlotly, SiScikitlearn,
  SiScipy, SiSharp, SiTailwindcss,
  AiFillRobot, VscVscode,
};

// Official brand colours, so each technology is recognisable at a glance.
const brandColors = {
  HTML5: '#E34F26',
  CSS3: '#1572B6',
  JavaScript: '#F7DF1E',
  'React.js': '#61DAFB',
  'Next.js': '#8A8A8A',
  Bootstrap: '#7952B3',
  'Tailwind CSS': '#06B6D4',
  'Node.js': '#339933',
  'Express.js': '#8A8A8A',
  MongoDB: '#47A248',
  MySQL: '#4479A1',
  Python: '#3776AB',
  C: '#A8B9CC',
  'C++': '#00599C',
  'C#': '#68217A',
  Java: '#E76F00',
  Kotlin: '#7F52FF',
  NumPy: '#4D77CF',
  Pandas: '#8A6FE8',
  Matplotlib: '#11557C',
  Seaborn: '#43B7BA',
  'Scikit-learn': '#F7931E',
  Git: '#F05032',
  GitHub: '#8A8A8A',
  'VS Code': '#007ACC',
  'Visual Studio': '#5C2D91',
  Netlify: '#00C7B7',
  Heroku: '#7A5FA8',
  'Cursor AI': '#10A37F',
  Claude: '#D97757',
};

const SkillItem = ({ skill }) => {
  const Icon = iconMap[skill.icon];
  const color = brandColors[skill.name];

  return (
    <li className="group flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/40">
      {Icon && (
        <Icon
          aria-hidden
          className="h-[18px] w-[18px] shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={color ? { color } : undefined}
        />
      )}
      <span className="min-w-0 flex-1 truncate text-sm text-ink">{skill.name}</span>
      <span className="shrink-0 text-[0.65rem] uppercase tracking-wider text-faint">
        {skill.level}
      </span>
    </li>
  );
};

export default SkillItem;
