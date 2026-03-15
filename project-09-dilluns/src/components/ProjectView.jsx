function ProjectView({project, onCancelProject}){
    return(
        <div>
            <div>
                <h2>{project.title}</h2>
                <button onClick={onCancelProject}>Go back</button>
            </div>
            <p>{project.date}</p>
            <p>{project.description}</p>
            <hr />
            <h3></h3>
            <div>
                <input type="text" name="" id="" />
                <button></button>
            </div>
            <p></p>
        </div>
    );
}

export default ProjectView;