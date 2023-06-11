import { toast } from "react-toastify"

export const saveUser = userObj => {
    fetch('https://b7a12-summer-camp-server-side-ashfaque9426.vercel.app/newUser', {
        method: "POST",
        headers: {
            'content-type': "application/json",
        },
        body: JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then(data => {
        if (data.message) {
            return toast(data.message);
        }
        toast("User saved to the server");
    })
    .catch(error => console.log(error.message))
}