import { ReactComponent as Like } from '../assets/like.svg';
import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

function PostCard({ post }) {
  const userid=post.userid;
  const username=post.username;
  const postid=post.postid;
  const title=post.title;
  const preview=post.preview;
  const date=post.date;
  const comment=post.comment;
  const like=post.like;
  const imageid=post.imageid;
  return (
    <li className={styles.PostCard}>
      <Link to={`/@${userid}/${postid}`} className={`${styles.VLink_block} ${styles.PostCard_styleLink}`}>
        <div className={styles.RatioImage}>
          <img className={styles.PostCard_postimage} alt={title} src={`https://port-0-velog-copy-server-me9tpg0m0c115b1c.sel5.cloudtype.app/resources/image/${imageid}`} />
        </div>
      </Link>
      <div className={styles.PostCard_content}>
        <Link to={`/@${userid}/${postid}`} className={`${styles.VLink_block} ${styles.PostCard_styleLink}`}>
          <h4 className={`${styles.PostCard_h4} ${styles.utils_ellipsis}`}>{title}</h4>
          <div className={styles.PostCard_descriptionWrapper}>
            <p className={styles.PostCard_clamp}>{preview}</p>
          </div>
        </Link>
        <div className={styles.PostCard_subInfo}>
          <span>{date}</span>
          <span className={styles.PostCard_separator}>·</span>
          <span>{comment}개의 댓글</span>
        </div>
      </div>
      <div className={styles.PostCard_footer}>
        <Link className={styles.PostCard_userInfo} to={`/@${userid}/posts`}>
          <img className={styles.PostCard_profile} alt={`user thumbnail of ${username}`} width="24" height="24" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2U-ph9IB1vinG_bVi_ATa7EjXPRVq4k8e2oYkQf4CUa40XxwoWELKLdvPM77E_3lI4A&usqp=CAU`} />
          <span>by <b>{username}</b></span>
        </Link>
        <div className={styles.PostCard_likes}>
          <Like/>
          {like}
        </div>
      </div>
    </li>
  );
}

export default PostCard;