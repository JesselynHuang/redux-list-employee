import React, { Component } from 'react';
import {
    TextField,
    Button,
    List,
    ListItem
}
    from '@material-ui/core';
import * as actionCreateEmp from '../actions/create_emp';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.onType = this.onType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: ''
        }
    }

    //Function type textfield
    onType(e) {
        this.setState({
            name: e.target.value
        })
    }

    //Function type submit
    onSubmit(e) {
        e.preventDefault();
        let employee = {
            name: this.state.name
        }
        this.props.createEmp(employee);
        console.log(this.state.name);
    }

    render() {
        //const { name } = props;
        return (
            <div>
                <h1>List Employee </h1>
                <hr />
                <List>
                    <ListItem disablePadding>
                        {/* {<ul>
                            {this.props.employees.map(
                                (employee, i) => <li key={i}>{employee.name}</li>)
                            }
                        </ul>} */}
                    </ListItem>
                </List>

                <form onSubmit={this.onSubmit}>
                    <TextField
                        label="Insert Name"
                        id="outlined-size-small"
                        size="small"
                        type="text"
                        onChange={this.onType}
                    />
                    <br />
                    <br />
                    <Button
                        variant="contained"
                        color="success"
                        type="submit"
                    >
                        Add
                    </Button>

                </form>

            </div>
        ) // end return
    } // end render
} // end class home component

//Connect to REDUX
const mapStateToProps = (state, ownProps) => {
    // const { employees } = state.employees;
    return {
        employees: state.employees
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createEmp: args => dispatch(actionCreateEmp.createEmp(args)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);