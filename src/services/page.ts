export async function getCurrentPageContent(): Promise<string> {
    return new Promise((resolve, reject) => {
      chrome.tabs.query(
        { active: true, currentWindow: true },
        (tabs) => {
          if (!tabs[0]?.id) {
            reject("No active tab found.");
            return;
          }
  
          chrome.tabs.sendMessage(
            tabs[0].id,
            {
              action: "GET_PAGE_CONTENT",
            },
            (response) => {
              if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError.message);
                return;
              }
  
              resolve(response?.content || "");
            }
          );
        }
      );
    });
  }