import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import WorkerDetail from './pages/WorkerDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<WorkerDetail />} />
      </Routes>
    </Router >
  );
}

export default App;
