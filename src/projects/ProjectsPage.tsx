import { MOCK_PROJECTS } from "./MockProjects";

function ProjectsPage() {
  return <>
    <h1>Projects Suppa Suppa</h1>;
    <div>
        <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
    </div>
  </>
}

export default ProjectsPage;