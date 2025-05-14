import axios from "axios";
import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: null,
    password: null,
  });

  const login = async ({ username, password }) => {
    try {
      console.log("Login function:", { username, password });
      const authHeader = "Basic " + btoa(username + ":" + password);
      const response = await axios.post(
        "http://localhost:9000/api/zwitter/login",
        {},
        {
          headers: {
            Authorization: authHeader,
          },
          withCredentials: true,
        }
      );
      console.log("Login successful:", response.data);
      setUser({
        username: username,
        password: password,
      });
      console.log("login user data: ", user);
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      setUser(null);
      return false;
    }
  };

  const logout = () => {
    axios
      .post(
        "http://localhost:9000/api/zwitter/logout",
        {},
        { withCredentials: true }
      )
      .then(() => {
        console.log("Logout successfull.");
        setUser(null);
        localStorage.removeItem("user");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
