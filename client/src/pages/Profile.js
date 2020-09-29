import React from 'react';
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Profile() {
    const username = useSelector(state=>state.auth.username)

    return (
        <div>
            GREAT SUCCESS, {username}!!!!
        </div>

    )

}
export default Profile;
