import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider,useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore,getFirestore} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase';
import firebaseConfig from './components/config/firebaseConfig';
import 'firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance} from 'redux-firestore';
import { isLoaded } from "react-redux-firebase"

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const store=createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
  reduxFirestore(firebaseConfig),
)
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="container center white-text darken-3 Loading-text">
    <p>Loading project...</p>
  </div>;
  return children
}


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
  <AuthIsLoaded>
    <App />
  </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
