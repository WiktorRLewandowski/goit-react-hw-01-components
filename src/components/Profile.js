import  PropTypes  from "prop-types";
import css from '../css/Profile.module.css'

export const Profile = ({avatar, username, tag, location, stats}) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                  src={avatar}
                  alt={`${username}'s avatar`}
                  className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>{`@${tag}`}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                  <span className={css.label}>{Object.keys(stats)[0]}</span>
                  <span className={css.quantity}>{Object.values(stats)[0]}</span>
                </li>
                <li>
                  <span className={css.label}>{Object.keys(stats)[1]}</span>
                  <span className={css.quantity}>{Object.values(stats)[1]}</span>
                </li>
                <li>
                  <span className={css.label}>{Object.keys(stats)[2]}</span>
                  <span className={css.quantity}>{Object.values(stats)[2]}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
  avatar: PropTypes.string, 
  username: PropTypes.string, 
  tag: PropTypes.string, 
  location: PropTypes.string, 
  stats: PropTypes.objectOf(PropTypes.number),
}