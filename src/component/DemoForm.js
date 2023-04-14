import React, { useState } from 'react';

const DemoForm = () => {
    const sport = [
        {
            id: 1,
            lable: "Bóng đá"
        },
        {
            id: 2,
            lable: "Bơi"
        },
        {
            id: 3,
            lable: "Chạy"
        }
    ]
    const [formData, setFormData] = useState({
        id: null,
        firstName: "",
        lastName: "",
        isMarried: false,
        gender: "",
        favoriteSport: ""
    });
    const [users, setUsers] = useState([])
    const handlChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        })
    }
    const saveData = () => {
        // console.log(formData);
        if (formData.id) {
            console.log("sửa");
            const newUserList = users.map(item => item.id === formData.id ? formData : item);
            setUsers(newUserList)
        } else {
            formData.id = Date.now();
            setUsers([...users, formData])
        }
        setFormData({
            firstName: "",
            lastName: "",
            isMarried: false,
            gender: "",
            favoriteSport: ""
        })
    }
    console.log(users, "users");
    const handlDelete = (id) => {
        // [1,2,3,4,5] => 4 
        const newUserList = users.filter(item => item.id !== id);
        console.log(newUserList);
        // console.log(id);
        setUsers(newUserList)
    }
    const handlEdit = (editItem) => {
        console.log(editItem);
        setFormData(editItem)
    }
    return (
        <div>
            <div>
                First Name
                <input type="text" name="firstName" onChange={handlChange} value={formData.firstName} />
            </div>
            <div>
                Last Name
                <input type="text" name="lastName" onChange={handlChange} value={formData.lastName} />
            </div>
            <div>
                Is Married
                <input name="isMarried" type="checkbox" onChange={handlChange} checked={formData.isMarried} />
            </div>
            <div>
                Gioi Tinh
                <input type="radio" name="gender" value="Male" onChange={handlChange} checked={formData.gender === "Male"} /> Male
                <input type="radio" name="gender" value="Female" onChange={handlChange} checked={formData.gender === "Female"} /> Female
            </div>
            <div>
                Favorite Sport
                <select name='favoriteSport' onChange={handlChange} value={formData.favoriteSport}>
                    <option>Chọn</option>
                    {
                        sport.map((item, index) =>
                            <option key={index} value={item.lable}>{item.lable}</option>
                        )
                    }
                </select>
            </div>
            <button onClick={saveData}>Thêm</button>
            <div>
                <table id="customers">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Married</th>
                        <th>Gioi Tinh</th>
                        <th>Favorite Sport</th>
                        <th>Action</th>
                    </tr>
                    {
                        users.map((item, index) => (
                            <tr>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.isMarried ? "Kết hôn" : "Độc thân"}</td>
                                <td>{item.gender}</td>
                                <td>{item.favoriteSport}</td>
                                <td>
                                    <button onClick={() => handlDelete(item.id)}>Xóa</button>
                                    <button onClick={() => handlEdit(item)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </table>
            </div>
            <p>{users.length === 0 && "No Data"}</p>
        </div>
    );
}

export default DemoForm;
