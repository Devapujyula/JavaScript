function fetchGitHubUser(username) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          reject("User not found!");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((err) => reject("Failed to fetch data."));
  });
}

function searchUser() {
  const username = document.getElementById("username").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "⏳ Loading...";

  fetchGitHubUser(username)
    .then((user) => {
      resultDiv.innerHTML = `
        <div class="card">
          <img src="${user.avatar_url}" alt="Avatar" />
          <h2>${user.name || user.login}</h2>
          <p>${user.bio || "No bio available."}</p>
        </div>
      `;
    })
    .catch((error) => {
      resultDiv.innerHTML = `<p style="color: red;">❌ ${error}</p>`;
    });
}
