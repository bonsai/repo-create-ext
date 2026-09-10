document.getElementById("openGithub").addEventListener("click", () => {
  chrome.tabs.create({ url: "https://github.com/new" });
});
