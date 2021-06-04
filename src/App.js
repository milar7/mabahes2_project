import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import NavbarComp from "./component/navbar";
import ProductDetail from "./pages/home/productDetail/product_detail";
import Profile from "./pages/profile/profile";
import UserDetail from "./pages/userDetail/user_detail";
import NewProduct from "./pages/newProduct/newProduct";
import GuardedRoute from "./pages/profile/guardProfile";
import EditProduct from "./pages/home/productDetail/editProduct";

function App() {
    const [auth, setAuth] = useLocalStorage("auth", "logOut");
    const [activePage, setActivePage] = useState("home");

    function useLocalStorage(key, initialValue) {
        // State to store our value
        // Pass initial state function to useState so logic is only executed once
        const [storedValue, setStoredValue] = useState(() => {
            try {
                // Get from local storage by key
                const item = window.localStorage.getItem(key);
                // Parse stored json or if none return initialValue
                return item ? JSON.parse(item) : initialValue;
            } catch (error) {
                // If error also return initialValue
                console.log(error);
                return initialValue;
            }
        });
        // Return a wrapped version of useState's setter function that ...
        // ... persists the new value to localStorage.
        const setValue = (value) => {
            try {
                // Allow value to be a function so we have same API as useState
                const valueToStore = value instanceof Function ? value(storedValue) : value;
                // Save state
                setStoredValue(valueToStore);
                // Save to local storage
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            } catch (error) {
                // A more advanced implementation would handle the error case
                console.log(error);
            }
        };
        return [storedValue, setValue];
    }
    return (
        <Router>
            <div className="App">
                <NavbarComp
                    auth={auth}
                    setAuth={setAuth}
                    activePage={activePage}
                    setActivePage={setActivePage}
                />

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <Home
                                {...props}
                                auth={auth}
                                setAuth={setAuth}
                                activePage={activePage}
                                setActivePage={setActivePage}
                            />
                        )}
                    />

                    <Route
                        path="/register"
                        render={(props) => (
                            <Register
                                {...props}
                                auth={auth}
                                setAuth={setAuth}
                                activePage={activePage}
                                setActivePage={setActivePage}
                            />
                        )}
                    />
                    <Route
                        path="/login"
                        render={(props) => (
                            <Login
                                {...props}
                                auth={auth}
                                setAuth={setAuth}
                                activePage={activePage}
                                setActivePage={setActivePage}
                            />
                        )}
                    />
                    <Route
                        path="/profile"
                        render={(props) => (
                            <GuardedRoute
                                {...props}
                                component={Profile}
                                auth={auth}
                                setAuth={setAuth}
                                activePage={activePage}
                                setActivePage={setActivePage}
                            />
                        )}
                    />
                    <Route
                        path="/products/:id"
                        render={(props) => (
                            <ProductDetail
                                {...props}
                                auth={auth}
                                setAuth={setAuth}
                                activePage={activePage}
                                setActivePage={setActivePage}
                            />
                        )}
                    />
                       <Route
                        path="/edit-product/:id"
                        render={(props) => (
                            <EditProduct
                                {...props}
                                auth={auth}
                                setAuth={setAuth}
                                activePage={activePage}
                                setActivePage={setActivePage}
                            />
                        )}
                    />
                    <Route
                        path="/users/:id"
                        render={(props) => (
                            <UserDetail
                                {...props}
                                auth={auth}
                                setAuth={setAuth}
                                activePage={activePage}
                                setActivePage={setActivePage}
                            />
                        )}
                    />
                    <Route
                        path="/products"
                        render={(props) => (
                            <Home
                                {...props}
                                auth={auth}
                                setAuth={setAuth}
                                activePage={activePage}
                                setActivePage={setActivePage}
                            />
                        )}
                    />
                    <Route
                        path="/new-product"
                        render={(props) => (
                            <NewProduct
                                {...props}
                                auth={auth}
                                setAuth={setAuth}
                                activePage={activePage}
                                setActivePage={setActivePage}
                            />
                        )}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
