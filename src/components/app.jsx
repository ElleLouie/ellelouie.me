import {
  BrowserRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import Home from './home';
import Nav from './nav';
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
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/portfolio" element={<Navigate to="/#work" replace />} />
          <Route path="/portfolio/:slug" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
