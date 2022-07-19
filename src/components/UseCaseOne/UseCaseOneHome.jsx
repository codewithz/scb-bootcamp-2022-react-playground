import { AlertComponent } from "./AlertComponent";
import { CompanyChangeComponent } from "./CompanyChangeComponent";
import { CompanyChangeFComponent } from "./CompanyChangeFComponent";
import { HelloComponent } from "./HelloComponent";
import { NameComponent } from './NameComponent';
import { NameMessageComponent } from "./NameMessageComponent";
import { TickerComponent } from './TickerComponent';

export function UseCaseOneHome() {
    return (
        <div>
            <h1>Use Case One</h1>
            <hr />
            <HelloComponent />
            <hr />
            <NameComponent name="Zartab" />
            <hr />
            <NameComponent name="Ajay" />
            <hr />
            <NameMessageComponent name="Zartab" message="Keep Coding" />
            <hr />
            <CompanyChangeComponent />
            <hr />
            <TickerComponent />
            <hr />
            <CompanyChangeFComponent />
            <hr />
            <AlertComponent />
            <br /><br />

        </div>
    )
}