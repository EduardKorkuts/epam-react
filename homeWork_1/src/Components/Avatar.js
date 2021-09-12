function Avatar(props) {
  return (
      <div className="avatar">
        <img src={process.env.PUBLIC_URL + props.avatarUrl} alt={props.name}/>
      </div>
  )
}

export default Avatar