import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  console.log(props);
  const image = props.tweet.user.image,
    name = props.tweet.user.name,
    handle = props.tweet.user.handle,
    timestamp = props.tweet.timestamp,
    message = props.tweet.message;

  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          {/*  <span className="user">
            <span className="name">{props.tweet.user.name}</span>

            <span className="handle">{props.tweet.user.handle}</span>
          </span> */}
          <User name={name} handle={handle} />

          {/* <span className="timestamp"></span> */}
          <Timestamp time={timestamp} />
        </div>

        {/* <p className="message">{props.tweet.message}</p> */}
        <Message message={message} />

        {/* <div className="actions">
           Font Awesome icons 
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div> */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
