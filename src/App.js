import React, {Component, Fragment} from "react";

class Link extends Component {
    render() {
        return (
            <p>
            <a href={this.props.url}>{this.props.children}</a>
            </p>
        )
    }
}

class App extends Component {
    render() {
        return (
            <Fragment>
                <Link url="//reactjs.org">
                    <strong>React</strong></Link>
                <Link url="//vuejs.org">Vue</Link>
                <Link url="//angular.io">Angular</Link> </Fragment>
        ); }
}
export default App;
