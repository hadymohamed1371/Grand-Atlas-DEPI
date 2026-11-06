import './App.css'

import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'

import Home from './pages/home/Home'

import Units from './pages/units/Units'
import UnitDetails from './pages/units/UnitDetails'

import Zones from './pages/zones/Zones'
import ZoneProjects from './pages/zones/ZoneProjects'
import ZoneProjectDetails from './pages/zones/ZoneProjectDetails'

import Developers from './pages/developers/Developers'
import DeveloperProjects from './pages/developers/DeveloperProjects'
import DeveloperProjectDetails from './pages/developers/DeveloperProjectDetails'

import Contact_us from './pages/contact us/Contact_us'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/units' element={<Units />} />
                <Route path='/units/:id' element={<UnitDetails />} />
                <Route path='/zones' element={<Zones />} />
                <Route path='/zones/:id' element={<ZoneProjects />} />
                <Route path='/zones/:id/:projectId' element={<ZoneProjectDetails />} />
                <Route path='/developers' element={<Developers />} />
                <Route path='/developers/:id' element={<DeveloperProjects />} />
                <Route path='/developers/:id/:projectId' element={<DeveloperProjectDetails />} />
                <Route path='/contact-us' element={<Contact_us />} />
            </Route>
        </Routes>
    </div>
  )
}

export default App
