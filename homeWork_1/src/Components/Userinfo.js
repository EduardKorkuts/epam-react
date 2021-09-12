function UserInfo(props) {
  return (
      <div className="user-info">
        <ul className="info-list">
          <li className="info-list__item">
                <span className="text text_field">
                  Name:
                </span>
                <span className="text text_value">
                  {props.name}
                </span>
          </li>
          <li className="info-list__item">
                <span className="text text_field">
                 Username:
                </span>
                <span className="text text_value">
                   {props.username}
                </span>
          </li>
          <li className="info-list__item">
                <span className="text text_field">
                  Email:
                </span>
                <span className="text text_value">
                  {props.email}
                </span>
          </li>
        </ul>
      </div>
  )
}

export default UserInfo