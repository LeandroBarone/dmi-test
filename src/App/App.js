import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StateContextProvider from '../StateContext/StateContext';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import PageHome from '../PageHome/PageHome';
import PageDetails from '../PageDetails/PageDetails';

export default function App() {
  return (
    <StateContextProvider>
      <BrowserRouter>
        <MainHeader />
        <main className="p-4">
          <Switch>
            <Route path="/details/:show_id" component={ PageDetails } />
            <Route path="/:keywords?" component={ PageHome } />
          </Switch>
        </main>
        <MainFooter />
      </BrowserRouter>
    </StateContextProvider>
  );
}
