import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form,Row,Col,FormGroup,Label,Input } from 'reactstrap';
import { useForm ,Controller} from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InvalidFeedback from 'components/invalidFeedback/invalidFeedback'

const CreateUserModal = (props) => {
   

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const { register, handleSubmit, errors,control  } = useForm({});
  const onSubmit = (data) => {
      props.submit(data)
      toggle()
  }
  return (
    <div>
      <Button color="success" onClick={toggle}>Create User</Button>
      <Modal isOpen={modal} toggle={toggle} className="CreateUserModal">
        <ModalHeader toggle={toggle}>Create User</ModalHeader>
        <ModalBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                
                        <Col md={6} xs= {12} >
                        <FormGroup>
                          <Label>Gender</Label>
                        <Input type="select" name="gender"  innerRef={register({required: true})}>
                        <option value="Male">Male</option>
                         <option value="Female">Female</option>
                        </Input>
                    </FormGroup>
                        </Col>
                    
                    <Col md={6} xs={12}>
                    <FormGroup>
                    <Label >Title</Label>
                    <Input type="text" name="title"   innerRef={register({required: true})} placeholder="title"/>
                    {errors.title && errors.title.type==='required' && <InvalidFeedback text="This field is required" /> }
                    </FormGroup>
                    </Col>
                    <Col md={6} xs={12}>
                    <FormGroup>
                    <Label >First Name</Label>
                    <Input type="text" name="first"   innerRef={register({required: true})} placeholder="first name"/>
                    {errors.first && errors.first.type==='required' && <InvalidFeedback text="This field is required" /> }
                    </FormGroup>
                    </Col>

                    <Col md={6} xs={12}>
                    <FormGroup>
                    <Label >Last Name</Label>
                    <Input type="text" name="last"   innerRef={register({required: true})} placeholder="last name"/>
                    {errors.last && errors.last.type==='required' && <InvalidFeedback text="This field is required" /> }
                    </FormGroup>
                    </Col>
                    <Col md={6} xs={12}>
                        <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" placeholder="email" innerRef={register({required: true, pattern: /^\S+@\S+$/i})} />
                            {errors.email && errors.email.type === "required" && (
                           <InvalidFeedback text="This field is required"/>
                            
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                           
                            <InvalidFeedback text="Invalid Email"/>
                        )}
                        </FormGroup>
                        </Col>

                        <Col md={6} xs={12}>
                    <FormGroup>
                    <Label >User name</Label>
                    <Input type="text" name="username"   innerRef={register({required: true})} placeholder="user name"/>
                    {errors.username && errors.username.type==='required' && <InvalidFeedback text="This field is required" /> }
                    </FormGroup>
                    </Col>
                        <Col md={6} xs={12}>
                        <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password"  innerRef={register({required: true, minLength: 3})} placeholder="password" autoComplete="on" />
                        {errors.password && errors.password.type === "required" && (
                           <InvalidFeedback text="This field is required" />
                        )}
                        {errors.password && errors.password.type === "minLength" && (
                            <InvalidFeedback text="Atleast 3 charactors" />
                        )}
                        </FormGroup>
                        </Col>
                    <Col md={6} xs={12}>
                    <FormGroup>
                    <Label >Date</Label>
                    <Controller
                        as={<ReactDatePicker minDate={new Date()} dateFormat="dd/MM/yyyy"/>}
                        control={control}
                        valueName="selected" 
                        onChange={([selected]) => selected}
                        name="dob"
                        className="form-control"
                        placeholderText="Select date"
                        rules={{ required: true }}
                       />
                        {errors.dob && errors.dob.type==='required' && <InvalidFeedback text="This field is required" /> }
                    </FormGroup>
                    </Col>
                    <Col md={6} xs={12}>
                        <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="text" name="phone" placeholder="phone" innerRef={register({required: true, pattern: /^[6-9][0-9]{9}$/})} maxLength="10"/>
                            {errors.phone && errors.phone.type === "required" && (
                           <InvalidFeedback text="This field is required" />
                        )}
                        {errors.phone && errors.phone.type === "pattern" && (
                            <InvalidFeedback text="Invalid Phone number" />
                        )}
                        </FormGroup>
                        </Col>
                   
                
                    </Row>
                    
                     <center><Button color="success"  type="submit">Create</Button></center>
                </Form>

        
        </ModalBody>
      </Modal>
    </div>
  );
}

export default CreateUserModal;