import React from 'react';
import { loggedInVal } from '../../typeDefinitions/recoilDeclarartion';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { useRecoilState } from 'recoil';
// import { Router } from 'react-router-dom';
// import { Route,redirect } from 'react-router-dom';
// import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
const { Title } = Typography;
const Login = () => {
  const navigate = useNavigate();
  const redirection=()=>{
    console.log("occurs")
    navigate("/contact")
  }
  const [loggedIn,setLoggedIn]=useRecoilState(loggedInVal)
  const onFinish = (values) => {
    console.log('Success:', values);
    getdata(values)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  const getdata = async (values) => {
   const{username,password}=values;
   console.log(username)
    const res = await fetch(`http://localhost:8003/getuser/${username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
  
    const data = await res.json();
    console.log(data,"getuser id");
    // console.log(data.password)
    if (data){
    if(data.password==password){
      console.log(loggedIn)
      setLoggedIn(1);
      redirection()
      // window.location = "./contact";
    }else{
      alert("wrong Password")
    }
    }else{
      alert("Invalid credentials")
    }
  }

  return(
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"url('https://wallpaperaccess.com/full/1567736.png') fixed no-repeat",backgroundSize:"cover",flexDirection:"column"}}>
    <Title level={2} style={{color:"white"}}>Please Login</Title>
    <div className='formSignIn'>
    
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    
    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Link href="./register" style={{color:"white",textDecorationColor:"white"}}>Dont have an account create one.</Link>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
  </div>
)};
export default Login;