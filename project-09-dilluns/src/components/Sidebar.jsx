function Sidebar({ projectManager, onCreateProject, onSelectedProject }) {
    console.log(projectManager);

    return (
        <div>
            <h2>Proyectos</h2>
            <button onClick={onCreateProject}>Crear proyecto</button>
            <ul>
                {projectManager.projects.map((project) => {
                    return (
                        <li key={project.id}><button onClick={() => onSelectedProject(project.id)}>{project.title}</button></li>
                    );
                })}
            </ul>
        </div>
    );
}
export default Sidebar;