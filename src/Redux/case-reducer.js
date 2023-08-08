const UPDATE_NEW_THEME = "UPDATE-NEW-THEME"
const UPDATE_NEW_PROBLEM = "UPDATE-NEW-PROBLEM"
const CREATE_CASE = "CREATE-CASE"

let initialState = {
    cases: [
        {theme: "Theme1", problem: "Problem text"}
    ],
    categories: [
        {id: 1, name: "Category 1"},
        {id: 2, name: "Category 2"},
        {id: 3, name: "Category 3"},
        {id: 4, name: "Category 4"}
    ],
    subCategories: [
        {id: 1, name: 'SubCategory 1', categoryId: 1},
        {id: 2, name: 'SubCategory 3', categoryId: 2}
    ],
    newThemeBody: '',
    newProblemBody: '',

};
const caseReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        categories: [ ...state.categories ],
        subCategories: [ ...state.subCategories ]
    };

    switch (action.type) {
        case UPDATE_NEW_THEME:
            stateCopy.newThemeBody = action.themeBody;
            return stateCopy;
        case UPDATE_NEW_PROBLEM:
            stateCopy.newProblemBody = action.problemBody;
            return stateCopy;
        case CREATE_CASE:
            let newTheme = stateCopy.newThemeBody;
            let newProblem = stateCopy.newProblemBody;
            stateCopy.newThemeBody = "";
            stateCopy.newProblemBody = "";
            let newCase = {
                theme: newTheme,
                problem: newProblem
            };
            stateCopy.cases.push(newCase);
            return stateCopy;
        default:
            return stateCopy;
    }
}


export const createCaseCreator = () => ({type: CREATE_CASE});
export const updateNewThemeCreator = (themeText) => ({type: UPDATE_NEW_THEME, themeBody: themeText});
export const updateNewProblemCreator = (problemText) => ({type: UPDATE_NEW_PROBLEM, problemBody: problemText});

export default caseReducer;