import { useEffect, useState } from "react";
// css
import "./github-user-finder.css";

const GithubUserFinder = () => {
  const storedUser =
    JSON.parse(localStorage.getItem("githubuserprofile")) || null;
  const [user, setUser] = useState(storedUser);
  const [username, setUsername] = useState("");
  const fetchUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      if (data && data.message === "Not Found") {
        setUser(null);
      } else {
        console.log(data);
        setUser(data);
        setUsername("");
        document.getElementById("guf").focus();
        localStorage.setItem("githubuserprofile", JSON.stringify(data));
      }
    } catch (error) {
      console.log("catching");
      setUser(null);
    }
  };

  useEffect(() => {
    console.log(1);
    const handleKeyPress = (e) => {
      if (e.keyCode === 13 && username) {
        fetchUser();
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [username]);

  return (
    <div className="github-user-finder-container">
      <h1 className="heading text-center mb-1">Github User Finder</h1>
      <div className="guf-input">
        <input
          type="text"
          name="guf"
          id="guf"
          placeholder="Enter username here..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchUser} disabled={username ? false : true}>
          Find
        </button>
      </div>
      {user ? (
        <div className="gu-profile">
          <div className="gu-profile-avatar flex-center">
            <img
              className="gu-avatar br-5"
              src={user.avatar_url}
              alt={user.login}
            ></img>
          </div>
          <div className="gu-profile-content flex-col">
            <strong className="text-2 text-left gu-profile-name">
              Name: {user.name}
            </strong>
            <strong className="text-2 text-left gu-profile-username">
              Username: {user.login}
            </strong>
            <strong className="text-2 text-left gu-profile-followers">
              Followers: {user.followers}
            </strong>
            <strong className="text-2 text-left gu-profile-followers">
              Following: {user.following}
            </strong>
          </div>
        </div>
      ) : (
        <p className="subheading no-user-found mb-1 text-center">
          No user found!
        </p>
      )}
    </div>
  );
};

export default GithubUserFinder;
