import Navbar from './navbar'
import Hem from './hem';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Skapa from './skapa';
import BlogDetaljher from './detaljer';
import NotFound from './404';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/hem">
              <Hem />
            </Route>
            <Route path="/skapa">
              <Skapa/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetaljher/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;