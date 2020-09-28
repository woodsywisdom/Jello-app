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

export const login = (username, password) => {
    return async dispatch => {
        const res = await fetch('/api/session', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password })
        });
        res.data = await res.json();
        if (res.ok) {
            dispatch(setUser(res.data.user));
        }

        return res;
    };
};

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

export const signup = (username, email, password) => {
    return async (dispatch) => {
        const res = await fetch('/api/users', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password })
        });

        if (res.ok) {
            const data = await res.json();
            dispatch(newUser(data));
            res.data = data;
        }
        return res;
    };
}

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER || SIGNUP:
            return action.user;
        case REMOVE_USER:
            return {};
        default:
            return state;

    }
}
