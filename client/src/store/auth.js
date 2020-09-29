import Cookies from 'js-cookie'

const SET_USER = 'auth/SET_USER';
const REMOVE_USER = 'auth/REMOVE_USER';
const SIGNUP = 'auth/SIGNUP';

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    };
};

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

export const newUser = (user) => ({
    type: SIGNUP,
    user
})

export const login = (username, password) => async dispatch => {
        if (!username || !password) {
            return;
        }
        const csrfToken = Cookies.get("XSRF-TOKEN");
        const res = await fetch('/api/session/', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
            },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (res.ok && !data["errors"]) {
            dispatch(setUser(data));
            res.data = data
        } else {
            res.errors = data["errors"]
        }
        return res;
};

export const signup = (username, email, password) => {
    return async (dispatch) => {
        if (!username || !password || !email) {
            return;
        }
        const csrfToken = Cookies.get("XSRF-TOKEN");
        const res = await fetch('/api/session/', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
            },
            body: JSON.stringify({ username, email, password })
        });
        const data = await res.json();
        if (res.ok && !data["errors"]) {
            dispatch(newUser(data));
            res.data = data;
        } else {
            res.errors = data["errors"]
        }
        return res;
    };
}

export const logout = () => async dispatch => {
    const res = await fetch('/api/session', {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (res.ok) {
        dispatch(removeUser());
    }

    return res;
}

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            console.log(action.user)
            return action.user;
        case SIGNUP:
            console.log(action.user)
            return action.user
        case REMOVE_USER:
            return {};
        default:
            return state;

    }
}
