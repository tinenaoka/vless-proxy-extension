document.getElementById("onBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "enable" }, () => {
  });
});

document.getElementById("offBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "disable" }, () => {
  });
});

