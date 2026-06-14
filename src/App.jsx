import { Hero } from "./sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Navbar } from "@/layout/Navbar";
import { Education } from "./sections/Education";

function App() {

  return (
    <div className="main-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />        
        <Contact />
        <Education />
      </main>
    </div>
  );
}

export default App



// import {Hero} from '@/sections/hero';
// we can import the file like this because we write path of the file like this because 
// we have already set the alias in the vite.config.js file so we can import the file like this
// instred of writing the path like this import {Hero} from './sections/hero' we can write the path like this 
// import {Hero} from '@/sections/hero' because we have set the alias in the vite.config.js file so we can import the file like this
