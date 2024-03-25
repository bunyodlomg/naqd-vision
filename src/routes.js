
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import { CONTACT_ROUTE, HOME_ROUTE } from "./utils/consts";

export const routes = [
    { path: HOME_ROUTE, Component: Home},
    { path: CONTACT_ROUTE, Component: Contact}
]
