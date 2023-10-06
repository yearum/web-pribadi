import { useSelector } from "react-redux/es/hooks/useSelector";

function Users(){

    
    const users = useSelector((state) => state.useSlice)

    return(
        <div>
            <h2>User Component</h2>
            <button onClick ={() => dispatch(fetchUsers)}>Fetch users</button>
            <pre>
                {JSON.stringify(users, null, 2)}
            </pre>
        </div>
    );
}

export default Users;