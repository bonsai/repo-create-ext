const GITHUB_NEW_URL = "https://github.com/new";

chrome.runtime.onInstalled.addListener(() => {
  if (chrome.sidePanel?.setPanelBehavior) {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: false }).catch(() => {});
  }
});

chrome.runtime.onMessage.addListener((message) => {
  if (message?.type === "open-github-new") {
    chrome.tabs.create({ url: GITHUB_NEW_URL });
  }
});

chrome.runtime.onMessage.addListener((message) => {
  if (message?.type === "open-side-panel") {
    chrome.windows.getCurrent((window) => {
      if (window?.id != null && chrome.sidePanel?.open) {
        chrome.sidePanel.open({ windowId: window.id }).catch(() => {});
      }
    });
  }
});
