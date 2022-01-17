import axios from "axios"

export const userLogin = ({ email, password }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post('https://thc-ui-api.thrivecoin.com/v1/users/sign_in', {
                sign_in: {
                    email,
                    password
                }
            })
            resolve(res.data);
            if(res.data.success === true) {
                sessionStorage.setItem('authentication_token', res.data.data.user.authentication_token)
            }
        } catch(error) {
            console.log(error.message)
            reject(error);
        }
    })
}