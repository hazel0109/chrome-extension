//once the button is clicked, run this function!

// always waits the document to be loaded when shown
document.addEventListener('DOMContentLoaded', function () {
  // opens a communication between scripts
  var port = chrome.runtime.connect();
  // sends a message throw the communication port
  port.postMessage({
    from: 'popup',
    start: 'Y',
  });
});
// });

// const listNode = document.getElementById(`${title}`);

// }
// chrome.tabs.onActivated.addListener(getCurrentTab);

// export { generateList };
// let const = document.createElement('img');
//   img.src = chrome.runtime.getURL('logo.png');
//   document.body.append(img);
