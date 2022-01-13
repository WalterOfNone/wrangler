// Initialize button with user's preferred color
let showSolution = document.getElementById("showSolution")

showSolution.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: showSolution,
      });
});

function showSolution() {
    document
}