import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../data/projects';
import NotFound from './notFound';
import RoomViewer from './roomViewer';
import FoodJournal from './foodJournal';
import Lightbox from './lightbox';

function Project(props) {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug && p.cover);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <NotFound />;

  const gallery = [project.cover, ...(project.images || [])];

  return (
    <article className="page project">
      <Link to="/#work" className="back_link label">&larr; All projects</Link>
      <header className="project_header">
        <div>
          <p className="label">{project.medium}</p>
          <h1 className="page_title">{project.title}</h1>
        </div>
        <div className="project_intro">
          <p className="lead">{project.note}</p>
          {project.link && (
            <a href={project.link.href} className="button label" target="_blank" rel="noreferrer">{project.link.label}</a>
          )}
        </div>
      </header>
      {project.model && <RoomViewer src={project.model} poster={project.cover} alt={project.title} />}
      {project.feature === 'journal' && <FoodJournal />}
      {!project.feature && (
        <div className="gallery">
          {gallery.map((src, i) => (
            <button key={src} type="button" className="gallery_item" onClick={() => setOpen(i)} aria-label={`View image ${i + 1} larger`}>
              <img src={src} alt={`${project.title} ${i + 1}`} loading={i ? 'lazy' : 'eager'} />
            </button>
          ))}
        </div>
      )}
      {open !== null && (
        <Lightbox images={gallery} index={open} alt={project.title} onChange={setOpen} onClose={() => setOpen(null)} />
      )}
    </article>
  );
}

export default Project;
