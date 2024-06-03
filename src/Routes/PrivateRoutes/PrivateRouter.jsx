import { Navigate } from "react-router-dom";
import UseHook from "../../pages/CustomHook/UseHook";

const PrivateRouter = ({children}) => {
    const {user,loading}= UseHook();
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRouter;