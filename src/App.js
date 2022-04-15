
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { GalleryPage } from './pages/Gallery';

import './App.css';
import { log, setDebug } from './helpers/logger';
import { GalleriesPage } from './pages/Galleries/index';
import { getGalleryList } from './services';
import { useEffect, useState } from 'react';
import { Title } from './components/Title';
import { Container, Row, Spinner, Stack } from 'react-bootstrap';
import { Menu } from './components/Menus';
import { Searchbar } from './components/Searchbar';
import { Loader } from './components/loader';

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
      <Container fluid className='mb-5'>
        <Stack gap={4} className="mt-5">
          <Title />
          <Searchbar />
          {
            (isLoading) ? (
              <Loader />
            ) : (
              <Menu menus={galleries} />
            )
          }

        </Stack>
      </Container>
      <Routes>
        <Route path="galleries" element={<GalleriesPage />} />
        <Route path="gallery/:galleryId" element={<GalleryPage />} />
        <Route path='*' element={<Navigate to={"/galleries"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
