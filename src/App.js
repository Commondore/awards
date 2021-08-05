
// import { FaClock, FaMoon } from 'react-icons/fa';
import './assets/fonts/Fonts.css';
import './components/base/_Base.sass';
import {Switch, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Managment from './components/managment/Managment';
import Banner from './components/banner/Banner';
import Award from './components/award/Award';
import License from './components/license/License';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/license" component={License}/>
        <Route path="/award" component={Award}/>
        <Route path="/managment" component={Managment}/>
        <Route exact path="/" component={Banner}/>
      </Switch>
    </Layout>
  );
}


export default App;
