import { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider";

const UseHook = () => {
    const all = useContext(Authcontext);
return all
}
export default UseHook;