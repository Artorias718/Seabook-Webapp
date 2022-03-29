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
            <Stabilimento key={stabilimento._links.self.href} stabilimento={stabilimento} shref={stabilimento._links.self.href}/>
        );
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {stabilimenti}
            </div>
        )
    }
}

// tag::employee[]
class Stabilimento extends React.Component{
    render() {
        return (
            <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card mb-4">
                    <a href={this.props.shref}><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                    <div className="card-body">
                        <div className="small text-muted">January 1, 2021</div>
                        <h2 className="card-title h4">{this.props.stabilimento.name}</h2>
                        <p className="card-text">{this.props.stabilimento.address}</p>
                        <p className="card-text">Phone: {this.props.stabilimento.phoneNumber}</p>
                        <p className="card-text">Capacity: {this.props.stabilimento.spotsNumber}</p>
                        <a className="btn btn-primary" href={this.props.shref}>Read more →</a>
                    </div>
                </div>
            </div>
        )
    }
}
// end::employee[]

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        // faccio partire la get per recuperare i posti in base alla vicinanza
        // ho quello che e' stato iscritto nella textbox in this.state.value
    }

    render() {
        return (
            <form className="form-subscribe" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control form-control-lg required"
                               placeholder="Dove vuoi andare?" value={this.state.value} onChange={this.handleChange}/>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary btn-lg">Cerca</button>
                    </div>
                </div>
            </form>
        );
    }
}

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