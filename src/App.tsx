import React from 'react';
import { Main } from './Components/Main';
import { Projects } from './Components/Projects';
import { SobreMim } from './Components/SobreMim';
import { Tecnlogias } from './Components/Tecnologias';
import { ProjectsList } from './ProjectsLis';
function App() {
  return (
    <>
    <Main/>
    <SobreMim/>
    <Tecnlogias/>
    <Projects projects={ProjectsList}/>
    </>
  );
}

export default App;
