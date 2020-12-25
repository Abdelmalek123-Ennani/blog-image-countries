import './App.css';
import Header from './Component/Header';
import Countries from './Component/Countries';
import Images from './Component/Images';
import Posts from './Component/Posts';
import PostDetails from './Component/posts/PostDetails';
import CountryDetails from './Component/countries/CountryDetails';
import Home from './Component/Home';

import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
              <Header />
          <Switch>
             <Route exact path="/" component={ Home } />
             <Route exact path="/countries" component={ Countries } />
             <Route path="/images" component={ Images } />
             <Route exact path="/posts" component={ Posts } />
             <Route path="/posts/:id" component={ PostDetails } />
             <Route path="/countries/:id" component={ CountryDetails } />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
