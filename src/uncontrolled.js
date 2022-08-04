


import "./App.css";
import React, { useEffect, useState } from "react";


// import { useNavigate } from "react-router-dom";
// import { render } from 'react-dom';
const UnControlledForm =() => {
  const initialValues = { firstname: "",lastname: "",sq: "Select an option",sa: "",bio: "",email: "", password: "" };
  const [formdata, setFormdata] = useState(initialValues);
  //const [disable, setDisable]=useState(true);
  const [errors, setErrors] = useState({});
  // const [submit, setSubmit] = useState(false)
//   const redirect = useNavigate();
//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(formdata);
//     setFormdata({ firstname: "",lastname: "",sq: "Select an option",sa: "",bio: "",email: "", password: ""});
//     validation(formdata);
   // if (Object.keys(errors).length === 0) {
    //   redirect("/Product");
      // root.render(
      // <React.StrictMode>
      //   <Product/>
      // </React.StrictMode>

      // <Redirect to="./product.js"/>
      // );
   // }
   function handleSubmit(e) {
    e.preventDefault()
    const err = {};
    const length= new RegExp("^(?=.{3,15}$)");
    const small = new RegExp("^(?=.*[a-z])");
    const capital = new RegExp("^(?=.*[A-Z])");
    const numbers = new RegExp("^(?=.*[0-9])");
    const character = new RegExp("^(?=.*[!@#$%^&*])");
    const len = new RegExp("^(?=.{8,})");
    const emailcheck =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!e.firstname) {
        err.firstname = "First Name is required!";
      } else if (!length.test(e.firstname)) {
        err.firstname = "firstname should be between length of 3,15!";
      } 

       if (!e.lastname) {
        err.lastname = "lastname  is required!";
      } else if (!length.test(e.lastname)) {
        err.firstname = "lastname should be between length of 3,15!";
      } 


     if (!e.email) {
      err.email = "Email is required!";
    } else if (!emailcheck.test(e.email)) {
      err.email = "Please enter a valid email";
    }
    if (!e.password) {
      err.password = "Password is required!";
    } else if (!small.test(e.password)) {
      err.password = "Password should contain atleast one small alphabet!";
    } else if (!capital.test(e.password)) {
      err.password = "Password should contain atleast one capital alphabet!";
    } else if (!numbers.test(e.password)) {
      err.password = "Password should contain atleast one number!";
    } else if (!character.test(e.password)) {
      err.password = "Password should contain atleast one special character!";
    } else if (!len.test(e.password)) {
      err.password = "Password length should contain atleast 8 characters!";
    }
    if (!e.bio) {
        err.bio = "Email is required!";}
    else if (!len.test(e.bio)) {
        err.bio = "bio length should be moere than   15!";
      } 

    // else if(length.test(e.lastname)){
    //     setDisable(false)
    // }
    setErrors(err);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormdata({ ...formdata, [name]: value });
  }
  function setclear() {
   
    setFormdata({ firstname: "",lastname: "",sq: "Select an option",sa: "",bio: "",email: "", password: ""});
  }

//   useEffect(() => {
//     validation(formdata);
//   }, [formdata]);

 
  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit}>
        <div>
        <input type="email" name="email" value={formdata.email} onChange={(e)=>handleChange(e)}></input>
        {errors.email && <p>{errors.email}</p>}
        </div>
        <br/>
        <div>
        <input type="password" name="password" value={formdata.password} onChange={(e)=>handleChange(e)}></input>
        {errors.password && <p>{errors.password}</p>}
        </div>
        <button>Submit</button>
      </form> */}

      <form onSubmit={handleSubmit}>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-dark text-white"
                  style={{ borderradius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      

                      <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typeEmailX">First Name :
                      </label>
                        <input
                          type="text"
                          id="typefirstname"
                          className="form-control form-control-lg"
                          name="firstname"
                          placeholder="Enter firtname"
                          value={formdata.firstname}
                          onChange={(e) => handleChange(e)}
                        />
                        {errors.firstname && <p>{errors.firstname}</p>}
                        </div><br/><div>

                        <label className="form-label" htmlFor="typeEmailX">Last Name :
                      </label>
                        <input
                          type="text"
                          id="typelastname"
                          className="form-control form-control-lg"
                          name="lastname"
                          placeholder="Enter lastname"
                          value={formdata.lastname}
                          onChange={(e) => handleChange(e)}
                        /><br/>
                        {errors.lastname && <p>{errors.lastname}</p>}<br/></div><br/>

<div>
                      <label className="form-label" htmlFor="typeEmailX">
                          Email
                        </label>
                        <input
                          
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder="Enter email"
                          name="email"
                          value={formdata.email}
                          onChange={(e) => handleChange(e)}
                        />
                        {errors.email && <p>{errors.email}</p>}
                        
                      </div><br/><div>

                      <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                          Password
                        </label>
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          name="password"
                          placeholder="Enter password"
                          value={formdata.password}
                          onChange={(e) => handleChange(e)}
                        />
                        {errors.password && <p>{errors.password}</p>}</div><br/><div>

                        <label className="form-label" htmlFor="typeEmailX">Security Question  :
                      </label>
                        <select
                          type="text"
                          id="sq"
                          className="form-control form-control-lg"
                          name="sq"
                          placeholder="Enter security question"
                          value={formdata.sq}
                          onChange={(e) => handleChange(e)}
                        >
                         <option>{formdata.sq}</option>
                        <option>What is your mother's maiden name?</option>
                        <option>What was the name of your first pet?</option>
                        <option>What was the name of your first school??</option>

                        </select>
                      </div><br/><div>

                        <label className="form-label" htmlFor="sa">Security Answer  :
                      </label>
                        <input
                          type="text"
                          id="sa"
                          className="form-control form-control-lg"
                          name="sa"
                          placeholder="Enter sequrity answer"
                          value={formdata.sa}
                          onChange={(e) => handleChange(e)}
                        />
                      </div><br/><div>


                        <label className="form-label" htmlFor="typeEmailX">Bio  : 
                      </label>
                        <textarea
                          type="textarea"
                          id="typebio"
                          className="form-control form-control-lg"
                          name="bio"
                          placeholder="Enter bio"
                          value={formdata.bio}
                          onChange={(e) => handleChange(e)}
                        />
                        {errors.bio && <p>{errors.bio}</p>}
                        
                      </div></div><br/><br/>

                      {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit" 
                        // disabled={disable}
                      >
                        Submit
                      </button>

                      <button onClick={setclear}
                        className="btn btn-outline-light btn-lg px-5"
                        
                      >
                        cancel
                      </button>

                      {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div> */}
                    </div>

                    {/* <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
export default UnControlledForm;

