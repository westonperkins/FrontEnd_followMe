import React from 'react'

const UserFeed = () => {
    return (
        <div>
            {/* will have to map through this data once import seed data */}
            <h1>Your Feed</h1>
            <div className="user-info">
                <img src="" alt="" className="profile-pic"/>
                <p>timestamp</p>
            </div>
            <div className="post-content">
                <p>user's activity here</p>
                <img src="" alt=""/>
                {/* attach event/route to edit */}
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    )
}

export default UserFeed
