import React, { useState } from "react"
import "./Multiple.css"

const MultipleInputs = () => {

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })

    const [records, setRecords] = useState([])

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)

        setUserRegistration({ ...userRegistration, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...userRegistration, Id: new Date().getTime().toString() }
        console.log(records)
        setRecords([...records, newRecord])
        console.log(records)
        setUserRegistration({
            username: "", email: "", password: "", phone: ""
        })

    }


    return (
       <>
             
                <div className="one">
                    <h3>Student Details</h3>
                    <form onSubmit={handleSubmit}>
                        <lable htmlFor="username"> fullname</lable>
                        <input type="text" name="username" value={userRegistration.username} onChange={handleInput} id="username"></input>
                        <br />


                        <lable htmlFor="email"> email</lable>
                        <input type="text" name="email" value={userRegistration.email} onChange={handleInput} id="email"></input>
                        <br />


                        <lable htmlFor="phone"> phone</lable>
                        <input type="text" name="phone" value={userRegistration.phone} onChange={handleInput} id="phone"></input>
                        <br />


                        <lable htmlFor="password"> password</lable>
                        <input type="text" name="password" value={userRegistration.password} onChange={handleInput} id="password"></input>
                        <br></br>
                        <button type="submit"> submit</button>

                    </form>
                </div>


                <div className='design'>
                    <table style={{ width: "80%" }}>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>College Name</th>
                                <th>Email Id</th>
                                <th>Phone NUmber</th>

                            </tr>
                        </thead>

                        <tbody>
                            {records.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.password}</td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>


          


                </>

        
    )
}


export default MultipleInputs