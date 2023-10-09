function User(props) {
  const userName = props.name,
    userHandle = props.handle;

  return (
    <span className="user">
      <span className="name">{userName}</span>
      <span className="handle">@{userHandle}</span>
    </span>
  );
}

export default User;
