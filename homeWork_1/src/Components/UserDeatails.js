import Avatar from "./Avatar";
import UserInfo from "./Userinfo";

function UserDetails(props) {
  return (
      <div className="user-details">
        <Avatar avatarUrl={props.user.avatarUrl} name={props.user.name}/>
        <UserInfo name={props.user.name} username={props.user.username} email={props.user.email}/>
      </div>
  )
}

export default UserDetails