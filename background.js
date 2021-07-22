const urlStore = [];

// import { generateList } from './content.js';

let color = '#3aa757';
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  // chrome.contextMenus.create({
  //   id: 'Web Counter',
  //   title: 'Web Counter',
  //   contexts: ['selection'],
  // });
});

chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
  const { title, url } = tab[0];
  console.log(`title: ${title}, url: ${url}`);
  chrome.storage.sync.get(url, function (data) {
    console.log(data);
    if (data[url]) {
      chrome.storage.sync.set({ [url]: data[url] + 1 });
    } else {
      chrome.storage.sync.set({ [url]: 1 });
    }
  });
  //it works!
});
