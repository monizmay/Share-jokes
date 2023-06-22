import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const Message = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [inputValue, setInputValue] = useState({
    name: "",
    title: "",
    message: "",
  });
  const { name, title, message } = inputValue;
  const [messages, setMessage] = useState('');
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Hello There</h1>
    </>
  )
};

export default Message