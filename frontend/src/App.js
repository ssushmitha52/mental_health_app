// import React from 'react';
// import './App.css';
// import Form from './Form';

// function App() {
//   return <Form />;
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import SignUp from "./pages/SignUp";
import NotesListPage from "./pages/NotesListPage";
import store, { persistor } from "./store/slices/index";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={LoginForm} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/journal" component={SignUp} />
              <Route exact path="/notes-list" component={NotesListPage} />
              <Route exact path="/text-editor" component={Journal} />

            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}
