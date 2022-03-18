'use strict';

// tag::vars[]
const React = require('react'); // <1>
const ReactDOM = require('react-dom'); // <2>
const client = require('./client'); // <3>
// end::vars[]

// tag::app[]
class App extends React.Component { // <1>

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
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
                </ul>*/
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
// end::render[]