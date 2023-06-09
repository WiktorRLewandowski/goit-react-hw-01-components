export const Profile = (user) => {
    return (
            <div class="profile">
            <div class="description">
                 <img
                  src={user.avatar}
                  alt={user.username} avatar 
                  class="avatar"
                />
                <p class="name">{user.username}</p>
                <p class="tag">{user.tag}</p>
                <p class="location">{user.location}</p>
              </div>

              <ul class="stats">
                <li>
                  <span class="label">{Object.keys(user.stats)[0]}</span>
                  <span class="quantity">{user.stats.followers}</span>
                </li>
                <li>
                  <span class="label">{Object.keys(user.stats)[1]}</span>
                  <span class="quantity">{user.stats.views}</span>
                </li>
                <li>
                  <span class="label">{Object.keys(user.stats)[2]}</span>
                  <span class="quantity">{user.stats.likes}</span>
                </li>
              </ul>
            </div>
            )
}