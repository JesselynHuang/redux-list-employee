import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from '../actions/create_get';

//dispatch --> dispatch (menugaskan) actions and trigger state changes to the store.
function User() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.app.users)
    return (
        <div className="App">
            <br />
            <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
            <div>Users: {users.map((user => (<div>{user.id}</div>)))}</div>
        </div>
    )

}
export default User;