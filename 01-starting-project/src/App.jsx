function App() {
  const words = ['Fundamental', 'Crucial', 'Core'];
  function getRandomID(max){
    return Math.floor(Math.random *(max+1));
  }
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {getRandomID(words.length)}  React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
