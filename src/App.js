
// import { FaClock, FaMoon } from 'react-icons/fa';
import './assets/fonts/Fonts.css';
import './components/base/_Base.sass';
import {Switch, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Managment from './components/managment/Managment';
import Banner from './components/banner/Banner';
import Award from './components/award/Award';
import License from './components/license/License';
import History from './components/history/History';
import Job from './components/job/Job';
import Balcon from './components/balcon/Balcon';
import Ceiling from './components/ceiling/Ceiling';
import Effort from './components/effort/Effort';
import Control from './components/control/Control';
import Service from './components/service/Service';
import Study from './components/study/Study';
import Pen from './components/pen/Pen';
import Stripe from './components/stripe/Stripe';
import Zone from './components/zone/Zone';
import Purchase from './components/purchase/Purchase';
import News from './components/news/News';
import Newsday from './components/newsday/Newsday';
import Contact from './components/contact/Contact';
import Mobil from './containers/mobil/Mobil';
import Plane from './components/plane/Plane';



function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/plane" component={Plane}/>
        <Route path="/mobil" component={Mobil}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/newsday" component={Newsday}/>
        <Route path="/news" component={News}/>
        <Route path="/purchase" component={Purchase}/>
        <Route path='/zone' component={Zone}/>
        <Route path="/stripe" component={Stripe}/>
        <Route path="/pen" component={Pen}/>
        <Route path="/study" component={Study}/>
        <Route path="/service" component={Service}/>
        <Route path="/control" component={Control}/>
        <Route path="/effort" component={Effort}/>
        <Route path="/ceiling" component={Ceiling}/>
        <Route path="/balcon" component={Balcon}/>
        <Route path="/job" component={Job}/>
        <Route path="/history" component={History}/>
        <Route path="/license" component={License}/>
        <Route path="/award" component={Award}/>
        <Route path="/managment" component={Managment}/>
        <Route exact path="/" component={Banner}/>
      </Switch>
    </Layout>
  );
}


export default App;
