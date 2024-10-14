import './App.css';
import Hero from './Components/Hero';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      {/* <div class="app-header">
        <Header />
      </div> */}
      <Header />

      {/* <div class="hero">
        <div class="hero-about">
          <About />
        </div>
        <div class="hero-content">
          <Contact />
        </div>
      </div> */}
      <Hero />
      {/* <div class="footer">
        <Footer/>
      </div> */}
      <Footer/>



    </div>
  );
}

export default App;
