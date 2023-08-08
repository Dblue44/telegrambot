import React from 'react';
import styles from './CreateCase.module.css';
const CreateCase = (props) => {
    let newThemeBody = props.newThemeBody;
    let mewProblemBody = props.newProblemBody;

    let onCreateCaseClick = () => {

    }

    let onNewThemeChange = (event) => {
        props.updateNewTheme(event.target.value);
    }

    let onNewProblemChange = (event) => {
        props.updateNewProblem(event.target.value);
    }

    return(
        <div className={styles.CreateCase}>
            <div className={styles.Form}>

            </div>
        </div>
    );
}

export default CreateCase;