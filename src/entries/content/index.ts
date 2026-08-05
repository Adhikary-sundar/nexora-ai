console.log("✅ Nexora AI Content Script Loaded");

// Get all visible text from the webpage
function getPageContent() {
  return document.body.innerText;
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "GET_PAGE_CONTENT") {
    sendResponse({
      content: getPageContent(),
    });
  }

  return true;
});
