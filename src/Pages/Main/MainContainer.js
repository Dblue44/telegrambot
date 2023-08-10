import React from "react";
import {compose} from 'redux';
import { useState } from 'react'
import {useDispatch} from 'react-redux';

import { fetchAllMyCases } from "../../Redux/features/cases/casesSlice";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";

import Main from "./Main";


const MainComponent = () => {
    const dispatch = useDispatch();
    const [UserId, setUserId] = useState('')

    const onMycases = async () => {
        const data = await dispatch(fetchAllMyCases({UserId}));
    };

    return (
        <Main

        />
    );
};

export default compose(withAuthRedirect)(MainComponent);