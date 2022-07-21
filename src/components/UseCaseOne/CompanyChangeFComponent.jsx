import { useState } from "react";

// import {someFunction,someDataMember,someClass} from 'module';

import '../../styles/my-css.css'

export function CompanyChangeFComponent() {

    const [company, setCompany] = useState("Standard Chartered")

    const changeCompany = () => {
        setCompany("Standard Chartered Bank")
    }
    return (

        <div>
            <h2>State - Functional</h2>
            Company Name: <b>{company}</b>
            <br /><br />
            <button className="button" onClick={changeCompany}>Change</button>
        </div>
    )
}