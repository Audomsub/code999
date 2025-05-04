import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Navbar  from "./components/shared/navbar";
import Home from "./components/shared/home"
import routes from './router'

function AppRouter() {
  const element = useRoutes(routes);
  return element;
};

function App() {
    return (
        <Router>
          <Navbar />
          <AppRouter />
        </Router>
    );
}
export default App;