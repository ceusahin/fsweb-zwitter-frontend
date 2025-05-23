import { Route, Routes } from "react-router-dom";
import "./App.css";
import MenuBar from "./components/MenuBar";
import ZweetShowSettings from "./components/ZweetShowSettings";
import SearchBar from "./components/SearchBar";
import PostSection from "./components/PostSection";
import WelcomePage from "./components/WelcomePage";
import RegisterPage from "./components/RegisterPage";
import ZweetFeed from "./components/ZweetFeed";
import LoginPage from "./components/LoginPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/main"
          element={
            <>
              <div className="bg-gray-300 lg:flex lg:justify-center max-lg:flex max-lg:w-screen">
                <div className="lg:w-1/6 max-lg:w-full border-r border-gray-300 fixed left-80 top-0 h-screen">
                  <MenuBar />
                </div>
                <div className="lg:bg-gray-50 lg:flex lg:flex-col lg:w-1/3 max-lg:w-full lg:shadow-lg lg:grid-cols-[250px 1fr 250px]">
                  <ZweetShowSettings />
                  <PostSection />
                  <ZweetFeed />
                </div>
                <div className="lg:bg-gray-50 lg:w-1/6 max-lg:w-full lg:shadow-lg lg:p-4 lg:pt-6 border-l border-gray-300 fixed right-80 top-0 h-screen">
                  <SearchBar />
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
