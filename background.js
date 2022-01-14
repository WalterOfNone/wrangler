// processes data in extension

let color = '#3aa757';
let solution = 'cheese';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set(( solution ));
});
