//once the button is clicked, run this function!

function generateList() {
  const listElement = document.getElementById('urlList');
  chrome.storage.sync.get(null, function (items) {
    console.log(`contentItem: ${items}`);
    // const listNode = document.getElementById(`${title}`);
    // listNode.innerText = `${url} ----- ${data[url] + 1}`;

    // const listNode = document.createElement('li');
    // listNode.id = `${title}`;
    // listNode.innerText = `${url} ----- 1`;
    // listElement.appendChild(listNode);
  });
}

// }
// chrome.tabs.onActivated.addListener(getCurrentTab);

// export { generateList };
// let const = document.createElement('img');
//   img.src = chrome.runtime.getURL('logo.png');
//   document.body.append(img);
