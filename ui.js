let goButton = document.getElementById("goButton");

goButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: testrun,
      });
});

function testrun() {
    console.log("You hit the run button")
}