import { useEffect, useRef, useState } from 'react';

// Fades its children in the first time they scroll into view.
function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <Tag ref={ref} className={`reveal ${shown ? 'reveal-shown' : ''} ${className}`} {...rest}>{children}</Tag>;
}

export default Reveal;
