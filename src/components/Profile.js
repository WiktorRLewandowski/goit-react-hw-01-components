export const Profile = ({avatar, username, tag, location, stats}) => {
    return (
            <div class="profile">
            <div class="description">
                 <img
                  src={avatar}
                  alt={username}
                  class="avatar"
                />
                <p class="name">{username}</p>
                <p class="tag">{tag}</p>
                <p class="location">{location}</p>
              </div>

              <ul class="stats">
                <li>
                  <span class="label">{Object.keys(stats)[0]}</span>
                  <span class="quantity">{Object.values(stats)[0]}</span>
                </li>
                <li>
                  <span class="label">{Object.keys(stats)[1]}</span>
                  <span class="quantity">{Object.values(stats)[1]}</span>
                </li>
                <li>
                  <span class="label">{Object.keys(stats)[2]}</span>
                  <span class="quantity">{Object.values(stats)[2]}</span>
                </li>
              </ul>
            </div>
            )
}