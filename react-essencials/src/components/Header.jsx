function Header(){
    const words = ['Crucial', 'Core', 'Fundamental'];
    function randomWords(max){
         return Math.floor(Math.random() * (max + 1));
    }
    return(
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {words[randomWords(words.length-1)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
    );
}

export default Header;