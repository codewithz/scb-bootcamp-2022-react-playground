import { Link } from 'react-router-dom'

export function Sidebar() {
    return (
        <div style={{ backgroundColor: 'tomato', }}>
            <ul>
                <li>
                    <Link to="/admin/posts">Admin Posts</Link>
                </li>
                <li>
                    <Link to="/admin/users">Admin Users</Link>
                </li>

            </ul>
        </div>
    )
}