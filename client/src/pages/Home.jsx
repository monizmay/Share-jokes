import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { sendMessageRoute } from "../utils/APIRoutes";


const Home = () => {
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

  const handleReset = () => {
    setMessage('');
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:5000/",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);


  const Logout = () => {
      removeCookie("token");
      navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username: name } = {username};
    inputValue.name = name;
    try {
      const { data } = await axios.post(
        sendMessageRoute,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        //handleSuccess(message);
        // setTimeout(() => {
        //   navigate("/");
        // }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      message: "",
      title: ""
    });
  };

  return (
    <>
      <div className="home_page">
        {/* <div><Header /></div> */}
        <label>Recipe</label>
        <form onSubmit={handleSubmit}>
          <div>
          <textarea
            type="title"
            name="title"
            width="100%"
            value={title}
            placeholder="Enter your title"
            style={{width: '1000px', height: '75px'}}
            onChange={handleOnChange}
          />
          </div>
          <div>
            <textarea
            type="message"
            name="message"
            width="100%"
            value={message}
            placeholder="Enter your recipe"
            style={{width: '1000px', height: '300px'}}
            onChange={handleOnChange}
          />
          </div>
          <button type="submit" onClick={handleReset}>Submit</button>
          <br></br>
          <div id='message'>

          </div>
        </form>
        <div>
          {/* <Footer /> */}
        </div>
      </div>
      <ToastContainer />
    </>
  )
};

export default Home