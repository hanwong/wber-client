import PropTypes from "prop-types";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import AddPlace from "../../Routes/AddPlace";
import EditAccount from "../../Routes/EditAccount";
import FindAddress from "../../Routes/FindAddress";
import Home from "../../Routes/Home";
import OutHome from "../../Routes/OutHome";
import PhoneLogin from "../../Routes/PhoneLogin";
import Places from "../../Routes/Places";
import Ride from "../../Routes/Ride";
import Settings from "../../Routes/Settings";
import SocialLogin from "../../Routes/SocialLogin";
import VerifyPhone from "../../Routes/VerifyPhone";

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({isLoggedIn}) => (
  <BrowserRouter>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes/>}
  </BrowserRouter>
);

const LoggedOutRoutes: React.SFC = () => (
  <Switch>
    <Route path={'/'} exect={true} component={OutHome} />
    <Route path={'/phone-login'} exect={true} component={PhoneLogin} />
    <Route path={'/verfy-phone'} exect={true} component={VerifyPhone} />
    <Route path={'/social-login'} exect={true} component={SocialLogin} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route path={'/'} exect={true} component={Home} />
    <Route path={'/ride'} exect={true} component={Ride} />
    <Route path={'/edit-account'} exect={true} component={EditAccount} />
    <Route path={'/settings'} exect={true} component={Settings} />
    <Route path={'/places'} exect={true} component={Places} />
    <Route path={'/add-place'} exect={true} component={AddPlace} />
    <Route path={'/find-address'} exect={true} component={FindAddress} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);


AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

export default AppPresenter;