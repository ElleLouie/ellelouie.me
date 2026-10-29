// Generated artwork for projects that don't have images yet.
function ProjectCover({ index }) {
  return (
    <div className={`cover cover-${index % 4}`} aria-hidden="true">
      <span className="cover_number">{String(index + 1).padStart(2, '0')}</span>
    </div>
  );
}

export default ProjectCover;
