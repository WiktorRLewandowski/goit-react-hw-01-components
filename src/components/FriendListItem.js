export const FriendListItem = ({avatar, name, key, isOnline}) => {
    return (
        <li class="item" key={key}>
            {!isOnline ? <span class="status"></span> : <span class="status active"></span>}
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    )
}