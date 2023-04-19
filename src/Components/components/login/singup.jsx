import React from 'react';
import { Button, Checkbox, Form, Input ,Typography} from 'antd';
import { useState } from 'react';
import {InputNumber} from 'antd';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const {Title}=Typography;
const Register = () => {
    // const[val,setVal]=useState({username:""})
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
        // setVal(values);
        alert("Registered Successfully")
        navigate("/login")
        addinpData(values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
      
    const addinpData=async(values)=>{
      console.log(values);
      const { username, email, password,mobile,work } = values;
        
        console.log(username,email)
        const name=username
        const res = await fetch("http://localhost:8003/register1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password , mobile,work
            })
        });

        const data = await res.json();
        console.log(data);
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
      label="Email"
      name="email"

      rules={[
        {
          required: true,
          message: 'Please input your email address!',
          type:"email",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
     type="number"
      label="Mobile Number"
      name="mobile"
      rules={[
        {
          required: true,
          message: 'Please input your Mobile Number!',
          type:"integer",
          
        },
      ]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item
      label="Occupation"
      name="work"
      rules={[
        {
          required: true,
          message: 'Please input your occupation!',
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
      <Link href="./login" style={{color:"white",textDecorationColor:"white"}}>Already have an account,Login</Link>
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
export default Register;