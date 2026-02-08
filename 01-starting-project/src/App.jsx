import Header from "./components/Header";
import CoreConcept from "./components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
function App() {
  
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(concept =>
              <CoreConcept {... concept}/>
            )}
              
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
