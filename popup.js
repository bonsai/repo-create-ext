document.getElementById("openGithub").addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "open-github-new" });
  window.close();
});

document.getElementById("openPanel").addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "open-side-panel" });
  window.close();
});
