import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/SideBar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Feed } from "./Components/FeedBody/Feed";
import { login, logout, selectUser } from "./features/userSlice";
import { Login } from "./Components/UserAuth/Login";
import { useEffect } from "react";
import { auth } from "./Components/FireBase/Firebase";
import { Widgets } from "./Components/Widgets/widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        //
        dispatch(logout());
      }
    });

    return () => {
      // Cleanup function to unsubscribe when the component unmounts
      unsubscribe();
    };
  }, [dispatch]); // Include dispatch in the dependency array

  return (
    <div className="app">
      {user && <Header />}

      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}

      {/* Widgets */}
    </div>
  );
}

export default App;
