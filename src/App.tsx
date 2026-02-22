import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gateway from './pages/Gateway';
import BlitzHome from './projects/identityBlitz/BlitzHome';
import BlitzDemo from './projects/identityBlitz/BlitzDemo';
import BlitzDocs from './projects/identityBlitz/BlitzDocs';
import BlitzCompany from './projects/identityBlitz/BlitzCompany';
import BlitzContacts from './projects/identityBlitz/BlitzContacts';
import BlitzProject from './projects/identityBlitz/BlitzProject';
import SailHome from './projects/sailPoint/SailHome';
import NavigationOverlay from './components/NavigationOverlay';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gateway />} />
        
        {/* Project 1 */}
        <Route path="/project-1">
          <Route index element={
            <>
              <BlitzHome />
              <NavigationOverlay />
            </>
          } />
          <Route path="demo" element={
            <>
              <BlitzDemo />
              <NavigationOverlay />
            </>
          } />
          <Route path="docs" element={
            <>
              <BlitzDocs />
              <NavigationOverlay />
            </>
          } />


          <Route path="company" element={
            <>
              <BlitzCompany />
              <NavigationOverlay />
            </>
          } />

           <Route path="contacts" element={
            <>
              <BlitzContacts />
              <NavigationOverlay />
            </>
          } />

           <Route path="projects" element={
            <>
              <BlitzProject />
              <NavigationOverlay />
            </>
          } />
          </Route>
          

        {/* Project 2 */}
        <Route path="/project-2" element={
          <>
            <SailHome />
            <NavigationOverlay />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}