import { ReactComponent as Like } from '../assets/like.svg';
import { Link } from 'react-router-dom';
import './PostCard.css';

function PostCard({ post }) {
  const userid=post.userid;
  const username=post.username;
  const postid=post.postid;
  const title=post.title;
  const preview=post.preview;
  const date=post.date;
  const comment=post.comment;
  const like=post.like;
  const imageurl=post.imageUrl;
  return (
    <li className="PostCard">
      <Link to={`/@${userid}/${postid}`} className="VLink_block PostCard_styleLink">
        <div className="RatioImage">
          <img className="PostCard_postimage" alt={title} src={`https://port-0-velog-copy-server-me9tpg0m0c115b1c.sel5.cloudtype.app${imageurl}`} />
        </div>
      </Link>
      <div className="PostCard_content">
        <Link to={`/@${userid}/${postid}`} className="VLink_block PostCard_styleLink">
          <h4 className="PostCard_h4 utils_ellipsis">{title}</h4>
          <div className="PostCard_descriptionWrapper">
            <p className="PostCard_clamp">{preview}</p>
          </div>
        </Link>
        <div className="PostCard_subInfo">
          <span>{date}</span>
          <span className="PostCard_separator">·</span>
          <span>{comment}개의 댓글</span>
        </div>
      </div>
      <div className="PostCard_footer">
        <Link className="PostCard_userInfo" to={`/@${userid}/posts`}>
          <img className="PostCard_profile" alt={`user thumbnail of ${username}`} width="24" height="24" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2U-ph9IB1vinG_bVi_ATa7EjXPRVq4k8e2oYkQf4CUa40XxwoWELKLdvPM77E_3lI4A&usqp=CAU`} />
          <span>by <b>{username}</b></span>
        </Link>
        <div className="PostCard_likes">
          <Like/>
          {like}
        </div>
      </div>
    </li>
  );
}

export default PostCard;