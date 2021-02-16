// import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Services from './components/pages/Services/Services';
import Signup from './components/pages/Signup/Signup';
import Products from './components/pages/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (

    <>
    <Router>
     <Navbar />
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />}/>
        <Route path="/services" exact render={props => <Services {...props} />}/>
        <Route path="/sign-up" exact render={props => <Signup {...props} />}/>
        <Route path="/products" exact render={props => <Products {...props} />}/>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
