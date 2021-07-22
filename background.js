const urlStore = [];

// import { generateList } from './content.js';

chrome.runtime.onInstalled.addListener(() => {
  // chrome.contextMenus.create({
  //   id: 'Web Counter',
  //   title: 'Web Counter',
  //   contexts: ['selection'],
  // });
});

//unable to queryselect document
//

// function generateList(curUrl, curVisit) {
//   console.log(`cur: ${curUrl}, visit: ${curVisit}`);
//   const listElement = document.querySelector('#urlList');
//   // let crrUrl = chrome.runtime.getURL();
//   // console.log(`ccrUrl: ${ccrUrl}`);

//   // chrome.storage.sync.get(currUrl, function (data) {
//   // chrome.storage.sync.get(null, function (items) {
//   // console.log(currUrl);
//   // console.log(`contentItem: ${data}`);
//   // const listNode = document.getElementById(`${title}`);
//   // listNode.innerText = `${url} ----- ${data[url] + 1}`;

//   // const listNode = document.createElement('li');
//   // listNode.id = `${title}`;
//   // listNode.innerText = `${url} ----- 1`;
//   // listElement.appendChild(listNode);
//   // });
// }

chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
  const { title, url } = tab[0];
  // console.log(`title: ${title}, url: ${url}`);
  chrome.storage.sync.get(url, function (data) {
    currUrl = url;
    if (data[url]) {
      chrome.storage.sync.set({ [url]: data[url] + 1 });
      // generateList(url, data[url]);
    } else {
      chrome.storage.sync.set({ [url]: 1 });
    }

    chrome.storage.sync.get(null, function (data) {
      console.log(`all website count!:`);
      console.info(data);
    });
    console.log(`url: ${url}, visit time: ${data[url]}`);
  });
  //it works!
});

// function generateList() {
//   const listElement = document.getElementById('urlList');
//   chrome.storage.sync.get(null, function (items) {
//     console.log(`contentItem: ${items}`);
//     const listNode = document.createElement('li');
//     listNode.setAttribute('id', `${title}`);
//     listNode.innerText = `${url} ----- ${data[url] + 1}`;
//     listNode.id = `${title}`;
//     listNode.innerText = `${url} ----- 1`;
//     listElement.appendChild(listNode);
//   });
// }

// // opens a communication port
// chrome.runtime.onConnect.addListener(function (port) {
//   // listen for every message passing throw it
//   port.onMessage.addListener(function (o) {
//     // if the message comes from the popup
//     if (o.from && o.from === 'popup' && o.start && o.start === 'Y') {
//       // inserts a script into your tab content
//       chrome.tabs.executeScript(generateList, {});
//     }
//   });
// });
