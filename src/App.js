
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGalleryList().then((data) => {
      setGalleries(data);
      setIsLoading(false);
    });
  }, [updateMenu]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="galleries" element={<GalleriesPage menuLoading={isLoading} menus={galleries} />} />
        <Route path="gallery/:galleryId" element={<GalleryPage menuLoading={isLoading} menus={galleries} />} />
        <Route path='*' element={<Navigate to={"/galleries"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
