import { PropTypes } from "prop-types";
import css from '../css/FriendList.module.css'

export const FriendList = ({children}) => {
    return (
        <section>
            <ul class={css.friendList}>
                {children}
            </ul>
        </section>
    )
}

FriendList.propType = {
    children: PropTypes.element
}