import React from "react";

export default function MainForm() {
    const [formData, setData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        isLike: false,
        favAnime: "juliet",
        employment: "",
    })

    function changeData(event) {
        const { name, value, type, checked } = event.target
        console.log(name ? name : "noName", "value:" + value, "type:" + type, "checked:" + checked)
        setData(prevData => ({
            ...prevData,
            [name]: [type] == "checkbox" ? checked : value

        })
        )
        console.log("event, ", event)
    }

    console.log("formData: ", formData,)
    return (
        <div >
            <InfoForm
                first={formData.firstName}
                last={formData.lastName}
                isLike={formData.isLike}
                favAnime={formData.favAnime}
                employment={formData.employment}
                handleChange={changeData} />
        </div>
    )
}

export function InfoForm(props) {
    console.log("data: ", props)
    return (
        <form className="user--form">
            <input
                name="firstName"
                placeholder="First Name"
                value={props.first}
                onChange={props.handleChange}

            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={props.last}
                onChange={props.handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="username@example.com"
                value={props.email}
                onChange={props.handleChange}
            />
            <input
                id="isLike"
                name="isLike"
                type="checkbox"
                checked={props.isLike}
                onChange={props.handleChange}
            />
            <label htmlFor="checked">Did you like React?</label>
            <select name="favAnime" id="favAnime" value={props.favAnime} onChange={props.handleChange}>
                <option value="naruto">Naruto</option>
                <option value="ngnl">No Game No Life</option>
                <option value="juliet">Boarding School Juliet</option>
            </select>

            <fieldset name="employment">
                Choose One
                <input
                    id="employment"
                    name="employment"
                    type="radio"
                    value="Unemployment"
                    checked={props.employment === "Unemployment"}
                    onChange={props.handleChange}
                />
                <label htmlFor="employment">Unemployment</label>
                <input
                    id="employment"
                    name="employment"
                    type="radio"
                    value="Full-Time"
                    checked={props.employment}
                    onChange={props.handleChange}
                />
                <label htmlFor="employment">Full-Time</label>
                <input
                    id="employment"
                    name="employment"
                    type="radio"
                    value="Part-Time"
                    checked={props.employment}
                    onChange={props.handleChange}
                />
                <label htmlFor="employment">Part-Time</label>
            </fieldset>
        </form>
    )
}

export function CheckForm() {

}