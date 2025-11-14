function setProxy(host, port) {
  chrome.proxy.settings.set(
    {
      value: {
        mode: "fixed_servers",
        rules: {
          singleProxy: { scheme: "socks5", host, port }
        }
      },
      scope: "regular"
    },
    () => {
      console.log("Proxy enabled:", host + ":" + port)
      chrome.action.setIcon({ path: "icons/logo.png" });
    }
  );
}

function clearProxy() {
  chrome.proxy.settings.clear({ scope: "regular" }, () => {
    chrome.action.setIcon({ path: "icons/logo-off.png" });
  });
}

// Сообщения от popup.js
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "enable") {
    setProxy("127.0.0.1", 10808);
    sendResponse({ status: "on" });
  }
  if (msg.action === "disable") {
    clearProxy();
    sendResponse({ status: "off" });
  }
});
