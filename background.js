chrome.runtime.onInstalled.addListener(() => {
  console.log('SafeGuard Extension Installed.');
  // Example of using chrome.storage.local
  chrome.storage.local.set({ 'install_date': new Date().toISOString() }, function() {
    console.log('Install date saved.');
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getInstallDate") {
    chrome.storage.local.get(['install_date'], function(result) {
      sendResponse({ installDate: result.install_date });
    });
    return true; // Indicates that sendResponse will be called asynchronously
  }
});