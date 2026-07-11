import React, { useState } from "react";
import styles from "./Register.module.css";


function Register() {


    const [user, setUser] = useState({

        username: "",
        email: "",
        password: ""

    });


    const [errors, setErrors] = useState({});



    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };




    const validate = () => {


        let error = {};



        if (!user.username) {

            error.username = "Username required";

        }
        else if (user.username.length < 3) {

            error.username = "Minimum 3 characters";

        }



        if (!user.email) {

            error.email = "Email required";

        }
        else if (!/\S+@\S+\.\S+/.test(user.email)) {

            error.email = "Invalid email";

        }



        if (!user.password) {

            error.password = "Password required";

        }
        else if (user.password.length < 6) {

            error.password = "Minimum 6 characters";

        }



        return error;

    };





    const handleSubmit = (e) => {

        e.preventDefault();


        const validationErrors = validate();


        if (Object.keys(validationErrors).length === 0) {


            alert("Registration successful");


        }
        else {


            setErrors(validationErrors);


        }

    };





    return (

        <div className={styles.container}>


            <form 
                className={styles.form}
                onSubmit={handleSubmit}
            >


                <h2 className={styles.title}>
                    Register
                </h2>



                <input

                    className={styles.input}

                    type="text"

                    name="username"

                    placeholder="Username"

                    value={user.username}

                    onChange={handleChange}

                />


                <p className={styles.error}>
                    {errors.username}
                </p>




                <input

                    className={styles.input}

                    type="email"

                    name="email"

                    placeholder="Email"

                    value={user.email}

                    onChange={handleChange}

                />


                <p className={styles.error}>
                    {errors.email}
                </p>





                <input

                    className={styles.input}

                    type="password"

                    name="password"

                    placeholder="Password"

                    value={user.password}

                    onChange={handleChange}

                />


                <p className={styles.error}>
                    {errors.password}
                </p>




                <button className={styles.button}>

                    Register

                </button>



            </form>


        </div>

    );

}



export default Register;