import { Sidebar } from "./Sidebar";
import { Route } from "react-router-dom";
import { AdminPosts } from "./AdminPosts";
import { AdminUsers } from "./AdminUsers";

export function AdminDashboard() {
    return (
        <div style={{ backgroundColor: 'gold', }}>
            <h2>Admin Dashboard</h2>
            <br />
            <Sidebar />
            <div>
                <Route path="/admin/posts" component={AdminPosts} />
                <Route path="/admin/users" component={AdminUsers} />
            </div>
        </div>

    )
}