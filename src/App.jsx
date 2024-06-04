import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {Header, Footer} from './components';
import {Home, UploadForm} from './pages';
import AluraflixProvider from './context/AluraflixProvider';

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <BrowserRouter>
        <AluraflixProvider>
          <div>
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<UploadForm />} />
          </Routes>
          <Footer />
        </AluraflixProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
