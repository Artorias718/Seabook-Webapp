'use strict';

// tag::vars[]
const React = require('react'); // <1>
const ReactDOM = require('react-dom'); // <2>
const client = require('./client'); // <3>
// end::vars[]

class App extends React.Component { // <1>

    constructor(props) {
        super(props);
        this.state = {stabilimenti: []};
    }

    componentDidMount() { // <2>
        // con spring data rest backend
        client({method: 'GET', path: 'http://localhost:8080/api/stabilimentoes'}).done(response => {
            this.setState({stabilimenti: response.entity._embedded.stabilimentoes});
        // senza spring data rest backend
        // client({method: 'GET', path: 'http://localhost:8080/api/v1/customers'}).done(response => {
            // this.setState({customers: response.entity});
        });
    }

    render() { // <3>
        return (
            //<EmployeeList employees={this.state.employees}/>
            <StabilimentiList stabilimenti={this.state.stabilimenti}/>
        )
    }

    /*componentDidMount() {
        fetch("http://localhost:8080/api/v1/customers")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <CustomersList customers={this.state.items}/>
                /*<ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} {item.age}
                        </li>
                    ))}
                </ul>
            );
        }
    }*/
}
// end::app[]

// tag::employee-list[]
class StabilimentiList extends React.Component{
    render() {
        const stabilimenti = this.props.stabilimenti.map(stabilimento =>
            <Stabilimento key={stabilimento._links.self.href} stabilimento={stabilimento}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Capacity</th>
                </tr>
                {stabilimenti}
                </tbody>
            </table>
        )
    }
}

// tag::employee[]
class Stabilimento extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.stabilimento.name}</td>
                <td>{this.props.stabilimento.address}</td>
                <td>{this.props.stabilimento.phoneNumber}</td>
                <td>{this.props.stabilimento.spotsNumber}</td>
            </tr>
        )
    }
}
// end::employee[]

// tag::render[]
ReactDOM.render(
    <App />,
    document.getElementById('react')
)
// end::render[]


/*// tag::app[]
class App extends React.Component { // <1>

    /*constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    constructor(props) {
        super(props);
        this.state = {customers: []};
    }

    componentDidMount() { // <2>
        // con spring data rest backend
        client({method: 'GET', path: 'http://localhost:8080/api/customers'}).done(response => {
            this.setState({customers: response.entity._embedded.customers});
        // senza spring data rest backend
        // client({method: 'GET', path: 'http://localhost:8080/api/v1/customers'}).done(response => {
            // this.setState({customers: response.entity});
        });
    }

    render() { // <3>
        return (
            //<EmployeeList employees={this.state.employees}/>
            <CustomersList customers={this.state.customers}/>
        )
    }

    /*componentDidMount() {
        fetch("http://localhost:8080/api/v1/customers")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <CustomersList customers={this.state.items}/>
                /*<ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} {item.age}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}
// end::app[]

// tag::employee-list[]
class CustomersList extends React.Component{
    render() {
        const customers = this.props.customers.map(customer =>
            <Customer key={customer.id} customer={customer}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Description</th>
                </tr>
                {customers}
                </tbody>
            </table>
        )
    }
}
// end::employee-list[]

// tag::employee[]
class Customer extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.customer.name}</td>
                <td>{this.props.customer.age}</td>
                <td>{this.props.customer.active}</td>
            </tr>
        )
    }
}
// end::employee[]

// tag::render[]
ReactDOM.render(
    <App />,
    document.getElementById('react')
)
// end::render[]*/