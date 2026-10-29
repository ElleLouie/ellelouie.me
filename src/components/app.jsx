import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './home';
import Nav from './nav';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import Project from './project';
import NotFound from './notFound';
import Footer from './footer';

function App(props) {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
