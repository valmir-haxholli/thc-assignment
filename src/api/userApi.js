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
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.data.user.authentication_token;
            }
        } catch(error) {
            console.log(error.message)
            reject(error);
        }
    })
}

export const handleTokenRefresh = () => {
    const refreshToken = sessionStorage.getItem('authentication_token');
    console.log(refreshToken);
    return new Promise((resolve, reject) => {
        axios.post('https://thc-ui-api.thrivecoin.com/v1/users/refresh_token', { refreshToken })
            .then(({data}) => {
                const tokenData = {
                    idToken: data.data.user.id,
                    refreshToken: data.data.user.authentication_token,
                    expiresAt: data.data.user.authentication_token_expire_at,
                };
                resolve(tokenData);
            })
            .catch((err) => {
                reject(err);
            })
    });
};
