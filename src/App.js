
import {
  Routes,
  Route
} from "react-router-dom";
import { routes } from './pages/routes'
import Header from './components/header'
import Container from './components/container'
import Toasts from './components/toasts'
import LoginModal from "./components/modal-login";

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="page-content">
        <Routes>
          {
            routes.map((item, index) => (
              <Route key={`route_${index}`} {...item} element={<item.element />} />
            ))
          }
        </Routes>
      </Container>
      <Toasts />
      <LoginModal />
    </div>
  );
}

export default App;
