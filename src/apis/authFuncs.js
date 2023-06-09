import { toast } from "react-toastify"

export const saveUser = userObj => {
    fetch('http://localhost:5000/newUser', {
        method: "POST",
        headers: {
            'content-type': "application/json",
        },
        body: JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then(data => {
        if(data) {
            console.log(data)
            toast("User saved to the server");
        }
    })
    .catch(error => console.log(error.message))
}