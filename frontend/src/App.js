import './App.css';
import ProjectDetails from './Components/ProjectDetails';
import GrantsList from './Components/GrantsList';
import { Routes, Route, Outlet, Link } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/grants" element={<GrantsList />} />
      <Route path="/apply" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
