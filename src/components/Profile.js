// import { PropTypes } from "prop-types";

export const Profile = ({avatar, username, tag, location, stats}) => {
    return (
        <div className="profile">
            <div className="description">
                <img
                  src={avatar}
                  alt={username}
                  className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                  <span className="label">{Object.keys(stats)[0]}</span>
                  <span className="quantity">{Object.values(stats)[0]}</span>
                </li>
                <li>
                  <span className="label">{Object.keys(stats)[1]}</span>
                  <span className="quantity">{Object.values(stats)[1]}</span>
                </li>
                <li>
                  <span className="label">{Object.keys(stats)[2]}</span>
                  <span className="quantity">{Object.values(stats)[2]}</span>
                </li>
            </ul>
        </div>
    )
}