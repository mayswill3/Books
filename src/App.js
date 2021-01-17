import "./App.css";
import "./themes.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookList from "./container/BookList";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BookList} />
        <BookList />
      </Switch>
    </Router>
  );
};

export default App;
