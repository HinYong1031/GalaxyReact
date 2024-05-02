import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TitleUpdater from './TitleUpdater'; // Import the component that handles title updates
import HomePage from './HomePage';
import AboutUs from './AboutUs';


function App() {
  
  return (
    <Router>
      <TitleUpdater /> {/* Render the component responsible for updating the title */}
      <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" exact element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;