// blocking certain urls



chrome.webRequest.onBeforeRequest.addListener(function(d) {
    return {cancel:true};
}, {urls: [
    "https://www.reddit.com"
]})