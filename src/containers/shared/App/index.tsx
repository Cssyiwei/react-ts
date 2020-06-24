import * as React from "react";

import { hot } from "react-hot-loader";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Loadable from "react-loadable";

import * as styles from "./app.scss"

import Bottom from '@shared/Bottom'

function Loading() {
    return <div>Loading...</div>;
}

const Home = Loadable({
    loader: () => import(/* webpackChunName: "home" */ "@views/Home"),
    loading: Loading,
});

const Page = Loadable({
    loader: () => import(/* webpackChunName: "page" */ "@views/Page"),
    loading: Loading,
});

@hot(module)
class App extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <div className={styles.main}>
                    <Router>
                        <Switch>
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/fund" component={Page} />
                            <Route exact path="/capital" component={Home} />
                            <Route exact path="/mine" component={Page}></Route>
                        </Switch>
                        <Bottom></Bottom>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
