import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RoutesList from './routes/routesList';

import { useState } from 'react'; //ovo je hook
// sluzi da bi na frontu mogao pratiti stanje varijable

function App() {
  const [auth, setAuth] = useState(false);
  //ako je auth true user je autentifikovan

  return (
  // pogledati managing state in react biblioteke, npr Redux
  <div className="flex flex-col min-h-screen">
        <Header auth={auth} setAuth={setAuth} />
        <RoutesList auth={auth} setAuth={setAuth} />
        <Footer />
    </div>
  );
}

export default App;