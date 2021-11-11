// import React from 'react';
// import './App.css';
// import Form from './Form';

// function App() {
//   return <Form />;
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./containers/Form";
import LoginForm from "./pages/LoginForm";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import SignUp from "./pages/SignUp";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/Notepage";
import FormEntry from './components/form-entry';
import Dashboard from './components/dashboard';
import store from './store';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute";
import Hoc from "./hoc/hoc";

export default function App() {
  return (
    <Provider store={store}>
        <Router>
          <div className="App">
                <Switch>
                  <Route exact path="/" component={LoginForm} />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/journal" component={SignUp} />
                  <Route exact path="/notes" component={NotesListPage} />
                  <Route path="/note/:id" component={NotePage} />
                  <Route exact path="/text-editor" component={Journal} />
                  <main role="main">
                      <Route path='/form-entry' component={FormEntry} />
                      <Route path='/dashboard' component={Dashboard} />
                  </main>
                  <Hoc>
                    <Route path='/form' component={Form} />
                  </Hoc>
                </Switch>
          </div>
        </Router>
    </Provider>
  );
}
