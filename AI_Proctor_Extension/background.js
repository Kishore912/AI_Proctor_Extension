// chrome.tabs.onActivated.addListener((activeInfo) => {
//     chrome.tabs.get(activeInfo.tabId, (tab) => {
//         captureScreenshot(tab);
//     });
// });

// function captureScreenshot(tab) {
//     chrome.tabs.captureVisibleTab(tab.windowId, {format: "png"}, (dataUrl) => {
//         sendScreenshotToBackend(dataUrl);
//     });
// }

// function sendScreenshotToBackend(dataUrl) {
//     fetch('http://127.0.0.1:8000/upload/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ image: dataUrl })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Failed to send screenshot');
//         }
//         console.log('Screenshot sent successfully');
//     })
//     .catch(error => {
//         console.error('Error sending screenshot:', error);
//     });
// }

chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        captureScreenshot(tab);
    });
});

function captureScreenshot(tab) {
    chrome.tabs.captureVisibleTab(tab.windowId, {format: "png"}, (dataUrl) => {
        // Send the screenshot to the backend
        sendScreenshotToBackend(dataUrl);
    });
}

function sendScreenshotToBackend(dataUrl) {
    fetch('http://127.0.0.1:8000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: dataUrl })
    }).then(response => {
        console.log('Screenshot sent successfully');
    }).catch(error => {
        console.error('Error sending screenshot:', error);
    });
}
