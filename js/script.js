//INPUT ELEMENTS
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
//INPUT ELEMENTS

// ELEMENT DYNAMIC HTML
const usernameEl = document.getElementById("user-name");
const userImageEl = document.getElementById("user-image");
const userNickEl = document.getElementById("user-nickname");
const userJoinedEl = document.getElementById("user-joined");
const userBioEl = document.getElementById("bio");
const userReposEl = document.getElementById("number-repos");
const userFollowersEl = document.getElementById("number-followers");
const userFollowingEl = document.getElementById("number-following");
const userLocationEl = document.getElementById("user-location");
const userBlogEl = document.getElementById("user-blog");
const userTwitterEl = document.getElementById("user-twitter");
const userCompanyEl = document.getElementById("user-company");
// END ELEMENT DYNAMIC HTML

//FUNCTION
async function getGitHubProfile() {
  const inputValue = searchInput.value;
  const response = await fetch(`https://api.github.com/users/${inputValue}`);
  const userData = await response.json();

  const user = {
    name: userData.name,
    login: userData.login,
    blog: userData.blog,
    bio: userData.bio,
    public_repos: userData.public_repos,
    followers: userData.followers,
    following: userData.following,
    created_at: new Date(userData.created_at).toLocaleDateString("pt-BR"),
    avatar_url: userData.avatar_url,
    location: userData.location,
    twitter_username: userData.twitter_username,
    company: userData.company,
  };

  // SET ATTRIBUTES TO ELEMENTS
  usernameEl.innerHTML = user.name;
  userImageEl.src = user.avatar_url;
  userNickEl.innerHTML = user.login;
  userJoinedEl.innerHTML = user.created_at;
  userBioEl.innerHTML = user.bio;
  userReposEl.innerHTML = user.public_repos;
  userFollowersEl.innerHTML = user.followers;
  userFollowingEl.innerHTML = user.following;
  userLocationEl.innerHTML = user.location;
  userBlogEl.innerHTML = user.blog;
  userTwitterEl.innerHTML = user.twitter_username;
  userCompanyEl.innerHTML = user.company;

  //END SET ATTRIBUTES TO ELEMENTS
}

//END FUNCTION

//EVENT CLICK ON SEARCH BUTTON
searchButton.addEventListener("click", getGitHubProfile);
// END EVENT CLICK ON SEARCH BUTTON
