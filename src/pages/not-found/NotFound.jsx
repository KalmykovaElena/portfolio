
import './not-found.scss'
import {NavLink} from "react-router-dom";

function NotFound() {
    return (
        <>
            <div className={'notFoundPage'}>NotFound</div>
            <NavLink to={'/works'}>
                Main
            </NavLink>
        </>
    );
}

export default NotFound;
