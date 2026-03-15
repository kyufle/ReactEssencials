import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import NoProjectView from './components/NoProjectView';
import CreateProjectView from './components/CreateProjectView';
import ProjectView from './components/ProjectView';

function App() {
  const [currentView, setCurrentView] = useState("noProject");
  const [projectManager, setProjectManager] = useState({
    currentProject: null,
    projects: [
      {
        id: 1,
        title: "Proyecto 1",
        description: "Hola Caracola",
        date: "2026/02/21",
      }
    ]
  });

  const handleCreateProject = () => {
    setCurrentView("createProject");
  }

  const handleCancelProject = () => {
    setCurrentView("noProject");
  }

  const handleAddProject = (project) => {
    setProjectManager((prevProjectManager) => {
      return {
        ...prevProjectManager,
        projects: [
          ...prevProjectManager.projects,
          project
        ]
      }
    })
    setCurrentView("noProject")
  }

  const handleSelectProject = (id) => {
    setCurrentView("project");
    setProjectManager((prevProjectManager) => {
      return {
        ...prevProjectManager,
        currentProject: id,
        project: [...prevProjectManager.projects]
      }
    })
  }

  return (
    <>
      <div>
        <Sidebar projectManager={projectManager} onSelectedProject={handleSelectProject} onCreateProject={handleCreateProject} />
        <main>
          {currentView === "noProject" && <NoProjectView />}
          {currentView === "createProject" && <CreateProjectView onCancelProject={handleCancelProject} onAddProject={handleAddProject} />}
          {currentView === "project" && <ProjectView onCancelProject={handleCancelProject} project={projectManager.projects.find((project) => project.id === projectManager.currentProject)}/>}
        </main>
      </div>
    </>
  )
}

export default App;
