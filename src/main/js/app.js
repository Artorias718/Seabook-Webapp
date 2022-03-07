const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component { //si crea un component

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() { //API invocata
        client({method: 'GET', path: 'http://localhost:8080/api/v1/stabilimenti'}).done(response => {
            this.setState({employees: response.entity._embedded.employees});
        });
    }

    render() {  //è quello che renderizza tutto
        return (
            <EmployeeList employees={this.state.employees}/>
        )
    }
}