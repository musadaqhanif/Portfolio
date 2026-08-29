/**
 * Scroll-reveal wrapper.
 *
 * Renders plain markup with a `.reveal` class. The animation is driven by CSS
 * and switched on by RevealProvider only after JavaScript has run, so content
 * is never hidden from a visitor (or crawler) whose JS did not execute.
 */
const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) => (
  <Tag
    className={`reveal ${className}`}
    style={delay ? { '--reveal-delay': `${delay}s` } : undefined}
    {...rest}
  >
    {children}
  </Tag>
);

export default Reveal;
