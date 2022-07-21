import { Route, Switch, Redirect } from "react-router-dom";
import { Products } from './RoutingApp/Products';
import { Posts } from './RoutingApp/Posts';
import { AdminDashboard } from './RoutingApp/admin/AdminDashboard';
import { Home } from './RoutingApp/Home';
import { ProductDetails } from './RoutingApp/ProductDetails';
import { NotFound } from './RoutingApp/NotFound';
import { AdminPosts } from './RoutingApp/admin/AdminPosts';
import { AdminUsers } from './RoutingApp/admin/AdminUsers';
import { UseCaseOneHome } from './UseCaseOne/UseCaseOneHome';
import { UseCaseTwoHome } from './UseCaseTwo/UseCaseTwoHome';
import { UseCaseThreeHome } from './UseCaseThree/UseCaseThreeHome';

export function RoutingPath() {

    return (
        <div>
            <Switch>
                <Route path="/products/:id" component={ProductDetails} />
                <Route path="/products" component={Products} />
                <Route path="/posts/:year/:month?" component={Posts} />
                <Route path="/admin-dashboard" component={AdminDashboard} />
                <Route path="/not-found" component={NotFound} />

                <Route path="/use-case-one">
                    <UseCaseOneHome />
                </Route>
                <Route path="/use-case-two">
                    <UseCaseTwoHome />
                </Route>
                <Route path="/use-case-three">
                    <UseCaseThreeHome />
                </Route>
                <AdminDashboard />
                <Route path="/" component={Home} exact />
                <Redirect to="/not-found" />
            </Switch>
        </div>
    )
}