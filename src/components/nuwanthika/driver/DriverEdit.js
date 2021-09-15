
import React from "react";
import { Navbar, Container, Nav, Row, Col, InputGroup, FormControl, Button, Table, Pagination, Form } from 'react-bootstrap';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { DriverModel } from '../_models/driver.model';
import { DriverService } from '../_services/driver.service';
 




export default class DriverEdit extends React.Component {
    isView = false;
     constructor(props) {
        super(props);
        this.state = { ...DriverModel, isValid: false };
        // this.setState({ ...DriverModel, isValid: false })




        this.handleSubmit = this.handleSubmit.bind(this);
        const url = new URL(window.location.href);
        if (url.toString().includes('view')) {
            this.isView = true;
        }
        const id = url.searchParams.get('_id');
        if (id !== null) {
            new DriverService().getByID(id, d => {
                this.setState(d)
            });
        }
        this.isValid();
    }


    handleSubmit(event) {
        event.preventDefault();
        if (this.state._id.length === 0) {
            new DriverService().save(this.state, (result) => {
                alert('SAVED')
                this.props.history.push('/driver');
            })
        } else {
            new DriverService().update(this.state, (result) => {
                alert('UPDATED')
                this.props.history.push('/driver');
            })
        }
    }
    render() {

        return (
            <Container>
                <div className="mb-4 mt-4   ">

                    <form onSubmit={this.handleSubmit}>


                        <Form.Group className="mb-3" controlId="id" hidden={this.state._id.length === 0}>
                            <Form.Label   > ID</Form.Label>
                            <Form.Control type="text" readOnly={true} placeholder="ID" value={this.state._id} onChange={(event) => {
                                this.setState({
                                    empID: event.target.value,

                                    // isValid: !(event.target.value === undefined) && (event.target.value.length > 0)
                                }, () => {
                                    // this.isValid();
                                });

                            }} />

                        </Form.Group>





                        <Form.Group className="mb-3" controlId="empID">
                            <Form.Label>Emp ID</Form.Label>
                            <Form.Control type="text" required placeholder="Emp ID" readOnly={this.isView} value={this.state.empID} onChange={(event) => {
                                this.setState({ empID: event.target.value }, () => {
                                    this.isValid();
                                });
                            }} />
  <Form.Text className="text-muted">
                               *required
                            </Form.Text>
                        </Form.Group>




                        <Form.Group className="mb-3" controlId="empName">
                            <Form.Label>Emp Name</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="Emp Name"
                                value={this.state.empName} onChange={(event) => {
                                    this.setState({ empName: event.target.value }, () => {
                                        this.isValid();
                                    });
                                }} />
  <Form.Text className="text-muted">
                               *required
                            </Form.Text>
                        </Form.Group>




                        <Form.Group className="mb-3" controlId="vehicleID">
                            <Form.Label>Vehicle ID</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="Vehicle ID" value={this.state.vehicleID} onChange={(event) => {
                                this.setState({ vehicleID: event.target.value }
                                 , () => {
                                    this.isValid();
                                });
                            }} />
  <Form.Text className="text-muted">
                               ex: T0001
                            </Form.Text>
                        </Form.Group>




                        <Form.Group className="mb-3" controlId="currentOrderID">
                            <Form.Label>Current Order ID</Form.Label>
                            <Form.Control type="text" readOnly={this.isView} placeholder="Current Order ID" value={this.state.currentOrderID} onChange={(event) => {
                                this.setState({ currentOrderID: event.target.value });
                            }} />

                        </Form.Group>




                        <Form.Group className="mb-3" controlId="contactNumber">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control maxLength="10" required type="text" readOnly={this.isView} placeholder="Contact Number" value={this.state.contactNumber} onChange={(event) => {
                                this.setState({
                                    contactNumber: event.target.value,

                                }, () => {
                                    this.isValid();
                                });
                            }} />
                            <Form.Text className="text-muted">
                                *required. Please fill, 10 characters required
                            </Form.Text>
                        </Form.Group>


                        <Button disabled={!this.state.isValid} hidden={this.isView} variant="primary" type="submit" >SAVE NOW</Button>{' '}

                        <Button variant="warning" onClick={() => this.props.history.push('/driver')} >CANCEL</Button>{' '}



                    </form>


                </div>
            </Container>

        );
    }


    isValid() {
        if ((

            !(this.state.contactNumber.length < 10) *
            !(this.state.empID.length <= 0) *
           ( this.state.vehicleID.length>0?  (/[A-Z]{1}[0-9]{4}$/.exec(this.state.vehicleID)) :true  )  *
            !(this.state.empName.length <= 0)

        ) === 0
        ) {
            this.setState({
                isValid: false
            });

        } else {
            this.setState({
                isValid: true
            });
        } 

    }

}
 