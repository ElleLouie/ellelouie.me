import { useParams } from 'react-router-dom';
import projects from '../data/projects';
import NotFound from './notFound';

function Project(props) {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <NotFound />;

  return (
    <article className="project">
      <header className="project_header">
        <h1>{project.title}</h1>
        <div className="img_tools_container">
          {project.tools.map((tool) => <p key={tool} className="img_tools">{tool}</p>)}
        </div>
      </header>
      <div className="project_body">
        {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {project.link && (
          <a href={project.link.href} className="link" target="_blank" rel="noreferrer">{project.link.label}</a>
        )}
      </div>
      <div className="project_images">
        {project.images.map((src, i) => (
          <img key={src} src={src} alt={`${project.title} ${i + 1}`} loading="lazy" />
        ))}
      </div>
    </article>
  );
}

export default Project;
