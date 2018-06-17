import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import App from "custom/App/App.jsx";

var indexRoutes = [
    { path: "/landing-page", name: "LandingPage", component: LandingPage },
    { path: "/login-page", name: "LoginPage", component: LoginPage },
    { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
    { path: "/components", name: "Components", component: Components },
    { path: "/", name: "HomePage", component: App }
];

export default indexRoutes;
