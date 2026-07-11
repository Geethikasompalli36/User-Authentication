import React, { useState } from "react";
import styles from "./Login.module.css";

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const validate = () => {

        let error = {};

        if (!formData.email) {
            error.email = "Email is required";
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            error.email = "Invalid email format";
        }


        if (!formData.password) {
            error.password = "Password is required";
        }
        else if (formData.password.length < 6) {
            error.password = "Password must be 6 characters";
        }


        return error;

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        const validationErrors = validate();

        if(Object.keys(validationErrors).length === 0){

            alert("Login successful");

        }
        else{

            setErrors(validationErrors);

        }

    };


    return (

        <div className={styles.container}>

            <form className={styles.form} onSubmit={handleSubmit}>


                <h2 className={styles.title}>
                    Login
                </h2>


                <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <p className={styles.error}>
                    {errors.email}
                </p>



                <input
                    className={styles.input}
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                />


                <p className={styles.error}>
                    {errors.password}
                </p>



                <button className={styles.button}>
                    Login
                </button>


            </form>

        </div>

    );

}


export default Login;