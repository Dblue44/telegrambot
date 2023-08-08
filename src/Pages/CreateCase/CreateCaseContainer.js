import CreateCase from './CreateCase';
import {createCaseCreator, updateNewThemeCreator, updateNewProblemCreator} from "../../Redux/case-reducer";
import {connect} from "react-redux";
let mapStateToProps = (state) => {
    return {
        categories: state.casePage.categories,
        subCategories: state.casePage.subCategories,
        newThemeBody: state.casePage.newThemeBody,
        newProblemBody: state.casePage.newProblemBody,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewTheme: (themeText) => {
            dispatch(updateNewThemeCreator(themeText));
        },
        updateNewProblem: (problemText) => {
            dispatch(updateNewProblemCreator(problemText));
        },
        createCase: () => {
            dispatch(createCaseCreator());
        },
    }
}
const CreateCaseContainer = connect(mapStateToProps, mapDispatchToProps)(CreateCase);

export default CreateCaseContainer;