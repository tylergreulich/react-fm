import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import HomeComponent from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Spinner } from './shared/Spinner';
import { store } from './store/store';

const GenreComponent = React.lazy(() => import('./components/Genre/Genre'));
const ArtistComponent = React.lazy(() => import('./components/Artist/Artist'));

const AppWrapper = styled.div`
  background: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
`;

interface ThemeProps {
  [key: string]: string;
}

const theme: ThemeProps = {
  white: '#fff',
  grey: '#eee',
  darkGrey: '#555',
  black: '#262626',
  primary: '#8338EC',
  secondary: '#00A86B',
  secondaryLight: '#C2F8CB',
  navy: 'rgba(52, 73, 94, 1)',
  navyDark: 'rgba(44, 62, 80, 1)'
};

const Routes = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <>
          <AppWrapper>
            <Navigation />
            <Route exact={true} path="/" component={HomeComponent} />
            <Suspense fallback={<Spinner />}>
              <Route
                exact={true}
                path="/genre/:name"
                component={(props: RouteComponentProps<any>) => (
                  <GenreComponent key={props.match.params.name} {...props} />
                )}
              />
              <Route
                exact={true}
                path="/artist/:name"
                component={(props: RouteComponentProps<any>) => (
                  <ArtistComponent key={props.match.params.name} {...props} />
                )}
              />
            </Suspense>
          </AppWrapper>
        </>
      </Router>
    </Provider>
  </ThemeProvider>
);

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
