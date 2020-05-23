import React, { useState, useEffect } from 'react';
import { Container} from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import LoginFormComponent from 'components/loginFormComponent/LoginFormComponent'
import cred from 'utils/creds.json';
import  {GET_DATA_API} from 'constants/apiUrls';
import {TIME_OUT} from 'constants/config'
import {setUser} from 'actions/actionCreators'

const LoginPage = (props) => {
const[invalidCred,setInvalidCred]=useState('')
const onSubmit = (data) => {
    if(JSON.stringify(cred)=== JSON.stringify(data)){
        props.history.push("/home-page")
        props.setUser(data.userName)
    }
    else{
        setInvalidCred('Invalid username or password!')
        window.setTimeout(( )=> {
        setInvalidCred('')
        },TIME_OUT)
    }
}

const getData = () => {
    axios
    .get(GET_DATA_API)
    .then(response => {
        localStorage.setItem('users',JSON.stringify(response.data ));
      })
     .catch(error => {
        console.log(error)
         });
}

useEffect(()=>{
    getData();
},[])

return (
    <div className="LoginPage">
      
        <Container>
        <LoginFormComponent invalidCred={invalidCred} onSubmit={onSubmit} />
        </Container>
    </div>

);
}



const mapStateToProps = (state) =>({
    user:state.user
  })
  export default connect(
    mapStateToProps,
    { setUser}
    )(LoginPage);
