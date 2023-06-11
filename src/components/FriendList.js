import { PropTypes } from "prop-types";

export const FriendList = ({children}) => {
    return (
        <section>
            <ul class="friend-list">
                {children}
            </ul>
        </section>
    )
}

FriendList.propType = {
    children: PropTypes.element
}