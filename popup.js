document.getElementById("openGithub").addEventListener("click", () => {
  chrome.tabs.create({ url: "https://github.com/new" });
  window.close();
});

document.getElementById("openPanel").addEventListener("click", () => {
  chrome.sidePanel.open({ windowId: chrome.windows.WINDOW_ID_CURRENT }).catch(() => {});
  window.close();
});
