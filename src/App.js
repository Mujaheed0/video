import { useState } from "react";
import { Footer, Header, ScrollToTop, Sidebar } from "./components";
import Router from "./router/Router";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocalStorage } from "./hooks";
import { initAuth } from "./store/slices/authSlice";
import { initVideos } from "./store";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  
  const [userToken, setUserToken] = useLocalStorage("video-lib-user-token");
  const [userData, setUserData] = useLocalStorage("video-lib-user");
  const toggleSidebar = () => setShowSidebar((s) => !s);
let dispatch=useDispatch()
  useEffect(()=>{
    let loginState=userToken?true:false;
    let user=userData?userData:{};
       dispatch(initAuth({isLoggedIn:loginState,user}))
       dispatch(initVideos());
     },[userToken,userData])
 
  return (
    <div className="page">
      <ScrollToTop />
      <Header toggleSidebar={toggleSidebar} />
      <div className="container">
        <div className="main-container">
          <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
          <Router />
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
