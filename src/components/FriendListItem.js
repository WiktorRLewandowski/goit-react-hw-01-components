import  PropTypes  from "prop-types";

export const FriendListItem = ({avatar, name, id, isOnline}) => {
    return (
        <li className="item" key={id}>
            <span className={!isOnline ? 'status' : 'status active'}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = { 
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string, 
            key: PropTypes.number, 
            isOnline: PropTypes.bool,
        })
    )
}