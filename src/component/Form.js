import React, { useState } from 'react';

const Form = () => {
    // const [userName, setUserName] = useState("");
    // const [password, setPassword] = useState("")
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
        gioitinh: true
    })
    const handleChange = (e) => {
        console.log(e);
        const { name, value, checked, type } = e.target;
        console.log(type);
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        })
        // setUserName(e.target.value)
        // setPassword(e.target.value)
    }
    // const handleChange1 = (e) => {
    //     setPassword(e.target.value)
    // }
    console.log(formData, "data");
    return (
        <>
            <div>
                <input name='userName' placeholder='User Name' type="text" onChange={handleChange} />
            </div>
            <div>
                <input name='password' placeholder='password' type="password" onChange={handleChange} />
            </div>
            <div>
                <input name='gioitinh' onChange={handleChange} type="checkbox" checked={formData.gioitinh}/>
            </div>
            <div>
                <p>{formData.userName}</p>
                <p>{formData.password}</p>
            </div>
        </>
    );
}

export default Form;
