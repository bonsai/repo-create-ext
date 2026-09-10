document.getElementById("openGithub").addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "open-github-new" });
});
