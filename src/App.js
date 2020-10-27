import * as React from "react";
import { Admin, ListGuesser , Resource } from 'react-admin';
import firebaseDataProvider from './dataProvider/firebaseDataProvider';

const App = () => <Admin dataProvider={firebaseDataProvider}  >
  <Resource name="games" list={ListGuesser } />
  </Admin>;

export default App;