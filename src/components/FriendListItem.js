import  PropTypes  from "prop-types";
import css from '../css/FriendList.module.css'

export const FriendListItem = ({avatar, name, id, isOnline}) => {
    return (
        <li className={css.item} key={id}>
            <span className={!isOnline ? css.status : css.active}></span>
            <img className={css.avatar} src={avatar} alt={`${name}'s avatar`} width="48" />
            <p className={css.name}>{name}</p>
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