import { Route, Switch } from "react-router-dom";
import { Products } from './RoutingApp/Products';
import { Posts } from './RoutingApp/Posts';
import { AdminDashboard } from './RoutingApp/admin/AdminDashboard';
import { Home } from './RoutingApp/Home';
import { ProductDetails } from './RoutingApp/ProductDetails';

export function RoutingPath() {

    return (
        <div>
            <Switch>
                <Route path="/products/:id" component={ProductDetails} />
                <Route path="/products" component={Products} />
                <Route path="/posts/:year/:month?" component={Posts} />
                <Route path="/admin-dashboard" component={AdminDashboard} />
                <Route path="/" component={Home} exact />
            </Switch>
        </div>
    )
}