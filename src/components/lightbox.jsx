import { useEffect } from 'react';

// Full-screen view of one image, with previous/next. Esc or a click outside closes it.
function Lightbox({ images, index, alt, onChange, onClose }) {
  const count = images.length;
  const go = (step) => onChange((index + step + count) % count);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChange((index + 1) % count);
      if (e.key === 'ArrowLeft') onChange((index - 1 + count) % count);
    };
    document.addEventListener('keydown', onKey);
    // keep the page behind from scrolling
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [index, count, onChange, onClose]);

  return (
    // clicking the backdrop closes it; Esc and the close button do the same from the keyboard
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <img src={images[index]} alt={`${alt} ${index + 1}`} onClick={(e) => e.stopPropagation()} />
      <button type="button" className="lightbox_close" aria-label="Close" onClick={onClose}>&times;</button>
      {count > 1 && (
        <>
          <button type="button" className="lightbox_arrow lightbox_arrow-prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); go(-1); }}>&larr;</button>
          <button type="button" className="lightbox_arrow lightbox_arrow-next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); go(1); }}>&rarr;</button>
          <p className="lightbox_count label">{index + 1} / {count}</p>
        </>
      )}
    </div>
  );
}

export default Lightbox;
