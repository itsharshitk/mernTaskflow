import { Navigate } from "react-router-dom";
import useMe from "../../hooks/useMe";

export default function ProtectedRoute({children}) {
    const {data, isPending} = useMe();

    if(isPending){
        return <p>Loading...</p>
    } 

    if(!data){
        return <Navigate to="/login" replace />
    }

    return children;
}