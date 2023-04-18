const userReducers = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "REGISTER/LOGIN":
            localStorage.setItem('token', payload.token)
            return { ...state, authStatus: true }
        case "INFO_USER": 
            return {...state, infoUser: payload, authStatus: true}
        case "LOGIN_ERROR":
        case "SIGN_OUT":
            localStorage.removeItem('token')
            return {infoUser: [], authStatus: false}
        default:
            return state;
    }
}

export default userReducers;