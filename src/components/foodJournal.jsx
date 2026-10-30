import { useCallback, useEffect, useId, useRef, useState } from 'react';
import entries from '../data/journal';

const TURN_MS = 900;

// Pages in reading order. Each entry is a spread: painting on the left, notes on the right.
function buildPages() {
  const pages = [{ kind: 'cover' }, { kind: 'intro' }, { kind: 'contents' }];
  entries.forEach((entry, index) => {
    pages.push({ kind: 'art', entry, index });
    pages.push({ kind: 'notes', entry, index });
  });
  pages.push({ kind: 'end' });
  return pages;
}

const pages = buildPages();

// The book is a stack of leaves; each leaf has a page on its front and its back.
const leaves = [];
for (let i = 0; i < pages.length; i += 2) leaves.push([pages[i], pages[i + 1]]);

// how many leaves must be turned to show an entry's spread
const leafForEntry = (index) => (3 + index * 2 + 1) / 2;

function useNarrow() {
  const query = '(max-width: 720px)';
  const [narrow, setNarrow] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setNarrow(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);
  return narrow;
}

// Watercolor-style plate, shown until a real painting is added.
function PaintingPlaceholder({ color }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 300 300" className="journal_placeholder" aria-hidden="true">
      <defs>
        <filter id={`wash-${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="4" />
          <feDisplacementMap in="SourceGraphic" scale="16" />
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
      </defs>
      <g filter={`url(#wash-${id})`}>
        <ellipse cx="150" cy="160" rx="118" ry="104" fill="#fbf7f0" stroke="#d9c8c2" strokeWidth="3" />
        <ellipse cx="150" cy="160" rx="84" ry="72" fill="none" stroke="#e6dad4" strokeWidth="2" />
        <ellipse cx="146" cy="154" rx="58" ry="44" fill={color} opacity="0.75" />
        <ellipse cx="128" cy="146" rx="22" ry="16" fill={color} opacity="0.9" />
        <ellipse cx="170" cy="166" rx="18" ry="12" fill="#ffffff" opacity="0.45" />
      </g>
    </svg>
  );
}

function Stamp({ children }) {
  return <span className="journal_stamp">{children}</span>;
}

function Page({ page, goToEntry }) {
  switch (page?.kind) {
    case 'cover':
      return (
        <div className="journal_cover">
          <span className="label">Elle Louie</span>
          <h3>Food <em>Journal</em></h3>
          <span className="journal_cover_sub label">Meals &amp; recipes</span>
        </div>
      );
    case 'intro':
      return (
        <div className="journal_intro">
          <p className="journal_hand">Meals I loved and things I cook, painted as I go.</p>
          <p className="label">Turn the page &rarr;</p>
        </div>
      );
    case 'contents':
      return (
        <div className="journal_notes">
          <h4 className="journal_title">Contents</h4>
          <ol className="journal_contents">
            {entries.map((entry, index) => (
              <li key={entry.title}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToEntry(index);
                  }}
                >
                  <span className="label">{entry.type === 'recipe' ? 'Recipe' : 'Meal'}</span>
                  <span className="journal_hand">{entry.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      );
    case 'art': {
      const { entry } = page;
      return (
        <div className="journal_art">
          <span className="journal_tape journal_tape-left" />
          <span className="journal_tape journal_tape-right" />
          {entry.painting
            ? <img src={entry.painting} alt={entry.title} />
            : <PaintingPlaceholder color={entry.color || '#e8a598'} />}
          {!entry.painting && <p className="journal_hand journal_caption">painting coming soon</p>}
        </div>
      );
    }
    case 'notes': {
      const { entry } = page;
      return entry.type === 'recipe' ? (
        <div className="journal_notes">
          <p className="label">Recipe</p>
          <h4 className="journal_title">{entry.title}</h4>
          {entry.meta && <p className="journal_meta label">{entry.meta}</p>}
          <ul className="journal_list journal_hand">
            {entry.ingredients.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <ol className="journal_steps">
            {entry.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
          {entry.stamp && <Stamp>{entry.stamp}</Stamp>}
        </div>
      ) : (
        <div className="journal_notes">
          <p className="journal_hand journal_date">{entry.date}</p>
          <h4 className="journal_title">{entry.title}</h4>
          <p className="journal_meta label">{entry.place}</p>
          <p className="journal_hand journal_note">{entry.note}</p>
          {entry.stamp && <Stamp>{entry.stamp}</Stamp>}
        </div>
      );
    }
    case 'end':
      return (
        <div className="journal_intro">
          <p className="journal_hand">More pages soon.</p>
        </div>
      );
    default:
      return null;
  }
}

// Desktop: an open book whose leaves turn in 3D.
function Book() {
  const [turned, setTurned] = useState(0);
  const [turning, setTurning] = useState(null);
  const timer = useRef(null);

  const turnTo = useCallback((target) => {
    const next = Math.max(0, Math.min(leaves.length, target));
    if (next === turned) return;
    // the leaf that moves stays on top while it turns
    setTurning(next > turned ? turned : turned - 1);
    setTurned(next);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setTurning(null), TURN_MS);
  }, [turned]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') turnTo(turned + 1);
    if (e.key === 'ArrowLeft') turnTo(turned - 1);
  };

  const state = turned === 0 ? 'closed' : turned === leaves.length ? 'finished' : 'open';

  return (
    <div className="journal">
      {/* the book is focusable so the arrow keys turn pages; the buttons below do the same */}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */}
      <div className={`journal_book journal_book-${state}`} tabIndex={0} onKeyDown={onKeyDown} aria-label="Food journal. Use the arrow keys to turn pages.">
        {leaves.map(([front, back], i) => {
          const flipped = i < turned;
          let z = flipped ? i : leaves.length - i;
          if (turning === i) z = leaves.length + 1;
          return (
            <div key={i} className={`journal_leaf ${flipped ? 'journal_leaf-flipped' : ''}`} style={{ zIndex: z }}>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
              <div className={`journal_page journal_page-front ${front.kind === 'cover' ? 'journal_page-cover' : ''}`} onClick={() => turnTo(i + 1)}>
                <Page page={front} goToEntry={(index) => turnTo(leafForEntry(index))} />
              </div>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
              <div className="journal_page journal_page-back" onClick={() => turnTo(i)}>
                <Page page={back} goToEntry={(index) => turnTo(leafForEntry(index))} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="journal_controls">
        <button type="button" className="label" onClick={() => turnTo(turned - 1)} disabled={turned === 0}>&larr; Back</button>
        <span className="label">{turned === 0 ? 'Cover' : `${turned} / ${leaves.length}`}</span>
        <button type="button" className="label" onClick={() => turnTo(turned + 1)} disabled={turned === leaves.length}>Next &rarr;</button>
      </div>
    </div>
  );
}

// Phones: one page at a time, swipe or tap the arrows.
function Pages() {
  const [index, setIndex] = useState(0);
  const start = useRef(null);
  const go = (next) => setIndex(Math.max(0, Math.min(pages.length - 1, next)));

  return (
    <div className="journal journal-single">
      <div
        className={`journal_single_page journal_page ${pages[index].kind === 'cover' ? 'journal_page-cover' : ''}`}
        onPointerDown={(e) => { start.current = e.clientX; }}
        onPointerUp={(e) => {
          if (start.current === null) return;
          const dx = e.clientX - start.current;
          if (dx < -40) go(index + 1);
          if (dx > 40) go(index - 1);
          start.current = null;
        }}
        key={index}
      >
        <Page page={pages[index]} goToEntry={(i) => go(3 + i * 2)} />
      </div>
      <div className="journal_controls">
        <button type="button" className="label" onClick={() => go(index - 1)} disabled={index === 0}>&larr; Back</button>
        <span className="label">{index + 1} / {pages.length}</span>
        <button type="button" className="label" onClick={() => go(index + 1)} disabled={index === pages.length - 1}>Next &rarr;</button>
      </div>
    </div>
  );
}

function FoodJournal(props) {
  return useNarrow() ? <Pages /> : <Book />;
}

export default FoodJournal;
