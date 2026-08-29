import { useCallback, useRef } from 'react';

/**
 * Writes the cursor position into --mx/--my so the `.spotlight` CSS can paint a
 * radial highlight that follows the pointer.
 *
 * Coordinates are written straight to the style attribute inside the pointer
 * handler rather than through React state: this fires on every mousemove, and
 * re-rendering at that rate would be wasteful.
 */
const Spotlight = ({ children, className = '', as: Tag = 'div', ...rest }) => {
  const ref = useRef(null);

  const onPointerMove = useCallback((event) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    el.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }, []);

  return (
    <Tag ref={ref} onPointerMove={onPointerMove} className={`spotlight ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Spotlight;
