import React from "react";

export default function RegisterForm() {
    const [userData, setData] = React.useState({
        username: "",
        password1: "",
        password2: "",
        agree: false,
    })

    function changeData(event) {
        const { name, type, value, checked } = event.target
        setData(prevData => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }))
    }
    console.log("userData: ", userData)

    function checkPassword() {
        if (userData.password1 === userData.password2 && userData.password1) {
            console.log("password matched!", userData.password1, userData.password2)
            return true
        }
    }
    function sendToApi(event) {
        event.preventDefault()
        alert("sent!")
        console.log({ ...userData })
    }
    return (
        <form onSubmit={sendToApi}>
            <input
                name="username"
                value={userData.username}
                onChange={changeData}
                placeholder="username"
            />
            <input
                name="password1"
                value={userData.password1}
                onChange={changeData}
                placeholder="password"
            />
            <input
                name="password2"
                value={userData.password2}
                onChange={changeData}
                placeholder="confirm password"
            />
            <input
                type="checkbox"
                name="agree"
                checked={userData.agree}
                onChange={changeData}
            />
            <h1>{checkPassword() ? "PasswordMatched!" : "Please Type Same Passowrd!"}</h1>
            <button>Submit</button>
        </form>

    )
}