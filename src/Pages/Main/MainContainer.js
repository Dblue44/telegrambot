import React from "react";
import Main from "./Main";
import {compose} from "redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
const MainComponent = () => {
    return (
        <Main/>
    );
};

export default compose(withAuthRedirect)(MainComponent);
//export default MainComponent;