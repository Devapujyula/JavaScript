# 🔍 GitHub User Finder

A simple and responsive web application that allows users to search for GitHub profiles and view real-time user data like profile picture, name, and bio using the GitHub API.

## ✨ Features

- 🔎 Search for any GitHub user by username
- ⚡ Fetches and displays data in real-time
- 💬 Error handling for invalid usernames
- 🧪 Clean and minimal UI
- 🔗 Uses JavaScript Promises and Fetch API

## 🚀 Demo

🔗 Live Site: [https://githubuserfinderdsp.netlify.app/](https://githubuserfinderdsp.netlify.app/)

📦 GitHub Repo: [https://github.com/your-username/github-user-finder](https://github.com/your-username/github-user-finder)

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Promises
- Fetch API
- GitHub REST API
- Netlify (for deployment)

## 📂 Project Structure

github-user-finder/
├── index.html
├── script.js
└── README.md

bash
Copy code

## 📦 How to Use

1. Clone the repository:

```bash
git clone https://github.com/your-username/github-user-finder.git
cd github-user-finder
Open index.html in your browser.

Enter any GitHub username and click "Search".

💡 How It Works
When the user clicks the "Search" button, the app calls https://api.github.com/users/{username} using fetch().

It returns a Promise which:

Resolves with the user data if successful

Rejects with an error message if the username is invalid or the fetch fails

🧑‍💻 Author
Devapujyula Satya sai Prakash

📃 License
This project is open source and available under the MIT License.
```
