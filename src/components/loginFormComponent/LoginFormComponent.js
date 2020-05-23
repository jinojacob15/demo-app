import React, { useState }  from 'react';
import { Card,CardBody,CardTitle, Button,Input,Form,Label,Row,Col,FormGroup} from 'reactstrap';
import { useForm } from 'react-hook-form';
import { FaEye ,FaEyeSlash} from "react-icons/fa";
import InvalidFeedback from 'components/invalidFeedback/invalidFeedback'

const LoginFormComponent = (props) => {
   const[showPassword,setShowPassword]=useState(false)
    const { register, handleSubmit, errors } = useForm();
   

    const onSubmit = data => props.onSubmit(data);
  return (
     
          <Card>
              <CardBody>
                <CardTitle><h3 className="text-center">Login</h3></CardTitle>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                    <Col md={12} xs={12}>
                    <FormGroup>
                    <Label for="firstName">User Name</Label>
                    <Input type="text" name="userName" autoFocus innerRef={register({required: true})} placeholder="username"/>
                    {errors.userName && errors.userName.type==='required' && <InvalidFeedback text="This field is required" /> }
                    </FormGroup>
                    </Col>
                    <Col md={12} xs={12}>
                    <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type={showPassword?'text':'password'} name="password"  innerRef={register({required: true})} placeholder="password" autoComplete="on" />
                     <div className="show-password" onClick={()=> setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash/>:<FaEye/>}</div>
                    {errors.password && errors.password.type === "required" && (
                        <InvalidFeedback text="This field is required" />
                    )}
                    </FormGroup>
                    </Col>
                    </Row>
                    <div className="text-center">
                    <InvalidFeedback text={props.invalidCred} /></div>
                     <center><Button color="primary" className="submit-btn" type="submit">login</Button></center>
                </Form>

            
               </CardBody>
           </Card>

    
  );
}

export default LoginFormComponent;
