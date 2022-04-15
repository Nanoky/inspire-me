
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { GalleryPage } from './pages/Gallery';

import './App.css';
import { log, setDebug } from './helpers/logger';
import { GalleriesPage } from './pages/Galleries/index';
import { getGalleryList } from './services';
import { useEffect, useState } from 'react';

setDebug(true);

function App() {

  const [galleries, setGalleries] = useState([]);
  const updateMenu = false;

  useEffect(() => {
    getGalleryList().then((data) => {
      log(data);
      setGalleries(data);
    });
  }, [updateMenu]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="galleries" element={<GalleriesPage menus={galleries} />} />
        <Route path="gallery/:galleryId" element={<GalleryPage menus={galleries} />} />
        <Route path='*' element={<Navigate to={"/galleries"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
