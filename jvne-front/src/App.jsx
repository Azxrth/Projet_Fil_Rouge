import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Events from './pages/Events';
import Login from './pages/Login';
import EventDetail from './pages/EventDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events/:id" element={<EventDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
