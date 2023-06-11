export const FriendListItem = ({avatar, name, key, isOnline}) => {
    return (
        <li className="item" key={key}>
            <span className={!isOnline ? 'status' : 'status active'}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}