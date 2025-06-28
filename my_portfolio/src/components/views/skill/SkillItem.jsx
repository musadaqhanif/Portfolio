import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';

const iconMap = { ...FaIcons, ...SiIcons, ...AiIcons };

// Map skill names to official brand colors
const brandColors = {
    'HTML5': '#E34F26',
    'CSS3': '#1572B6',
    'JavaScript': '#F7DF1E',
    'React.js': '#61DAFB',
    'Next.js': '#000000',
    'Bootstrap': '#7952B3',
    'Tailwind CSS': '#06B6D4',
    'Node.js': '#339933',
    'Express.js': '#000000',
    'MongoDB': '#47A248',
    'MySQL': '#4479A1',
    'Python': '#3776AB',
    'C': '#A8B9CC',
    'C++': '#00599C',
    'C#': '#239120',
    'Java': '#007396',
    'Kotlin': '#7F52FF',
    'NumPy': '#013243',
    'Pandas': '#150458',
    'Matplotlib': '#11557C',
    'Seaborn': '#43B7BA',
    'Scikit-learn': '#F7931E',
    'Git': '#F05032',
    'GitHub': '#181717',
    'VS Code': '#007ACC',
    'Visual Studio': '#5C2D91',
    'Netlify': '#00C7B7',
    'Heroku': '#430098',
    'Cursor AI': '#10A37F',
    'Claude': '#10A37F',
};

const SkillItem = ({ skill, index }) => {
    const Icon = iconMap[skill.icon];
    const color = brandColors[skill.name] || 'inherit';
    return (
        <li className="hover:ring-1 sm:hover:ring-1 ring-offset-2  ring-offset-background  ring-stroke hover:!border-slate-300 dark:hover:!border-slate-500 text-sm sm:text-lg inline-flex items-center justify-center  gap-2 m-1 sm:m-2 border border-stroke bg-container rounded-lg px-4 py-2 transition-3s" key={index}>
            {Icon && <Icon color={color} style={{ color }} />}
            {skill.name}
        </li>
    );
};

export default SkillItem;
