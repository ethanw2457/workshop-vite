import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useParams } from "react-router-dom";
import DemoPage from './pages/Sheehan.jsx'
import EthanWang from './pages/EthanWang.jsx'
import MichaelPage from './pages/MichaelPage.jsx';
import SidPage from './pages/sidPage.jsx'
import Ishana from './pages/ishana.jsx'
import './index.css'
import Home from './Home.jsx'
import Example from './pages/example.jsx';
import NathanPage from './pages/NathanPage.jsx'
import Savvy from './pages/savvy.jsx'
import Apu from './pages/apuroopa.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/example' element={<Example />} />
        <Route path='/demo' element={<DemoPage />} />
        <Route path='/profile/:name' element={<ProfileRouter />} />

      </Routes>
    </Router>
  </StrictMode>,
)

function ProfileRouter() {
  const { name } = useParams();

  switch (name) {
    case "Sheehan Dandapat":
      return <DemoPage />;

    // Change <DemoPage /> to your custom profile page, and change the case to your name
    case "Ethan Wang":
      return <EthanWang />;
    case "sidPage":
      return <SidPage />;
    case "Nathan Wan":
      return <NathanPage />;
    case "Person4":
      return <DemoPage />;
    case "Michael Li":
      return <MichaelPage />;
    case "Person6":
      return <DemoPage />;
    case "Person7":
      return <DemoPage />;
    case "Person8":
        return <DemoPage />;
    case "Person9":
      return <DemoPage />;
    case "Ishana D":
      return <Ishana />;
    case "Savvy Miller":
      return <Savvy />;
    case "Apuroopa K." :
      return <Apu />;
    default:
      return <div>Profile not found</div>;
  }
}