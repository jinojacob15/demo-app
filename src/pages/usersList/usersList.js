import React, { useState, useEffect } from 'react';
import { Container} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
  import 'react-toastify/dist/ReactToastify.css';
import UsersListTable from 'components/usersListTable/userListTable';
import CreateUserModal from 'components/createUserModal/createUserModal';


const UsersList = (props) => {

    const[users,setUsers]=useState([])

useEffect(()=>{

        const data = JSON.parse(localStorage.getItem('users'))
      setUsers(data)
   
},[])

const submit = data => {
    let formData = {
        user:{
            gender:data.gender,
            name:{
                title:data.title,
                last:data.last,
                first:data.first
            },
            email:data.email,
            username:data.username,
            password:data.password,
            dob:data.dob.toString(),
            phone:data.phone
        } 
    }
    
    const data_to_be_set =  {
        ...users,
        results: [...users.results,formData],
    }
    setUsers(data_to_be_set)
    localStorage.setItem('users',JSON.stringify(data_to_be_set));
    toast.success('User Added!', {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        });

}
return (
    <div className="usersList">
        <ToastContainer
            position="bottom-center"
            autoClose={4000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
/>
        <Container>
        <h3>User List</h3>
        Welcome :{props.user.user}
           <div className="text-right" >
               <CreateUserModal  setUsers={setUsers} submit={submit} />
           </div>

           <UsersListTable data={users.results}  />
        </Container>
    </div>

);
}


const mapStateToProps = (state) =>({
    user:state.user
  })
  export default connect(
    mapStateToProps,
    )(UsersList);