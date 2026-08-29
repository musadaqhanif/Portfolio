import { useEffect, useRef, useState } from 'react';

/**
 * Counts a stat up when it scrolls into view.
 *
 * Accepts the display string ("20+", "5.0", "99%") and animates only the
 * numeric part, preserving any prefix/suffix and the original precision.
 *
 * The initial state is the REAL value, not zero. The count-down-to-zero only
 * happens inside the observer callback, immediately before animating. That way
 * a stat can never get stuck reading "0+ projects shipped" because an observer
 * failed to fire, JavaScript errored, or the element never intersected - the
 * server-rendered markup is already correct and stays correct.
 */
const AnimatedNumber = ({ value, duration = 1100 }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) return undefined;

    const match = String(value).match(/^(\D*)([\d.]+)(.*)$/);
    if (!match) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const [, prefix, numeric, suffix] = match;
    const target = parseFloat(numeric);
    const decimals = (numeric.split('.')[1] || '').length;
    let frame;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          // easeOutExpo: quick off the line, settles gently on the final value.
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular">
      {display}
    </span>
  );
};

export default AnimatedNumber;
