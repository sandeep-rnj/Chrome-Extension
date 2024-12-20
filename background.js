
function MyImageClick(info, tab){
    console.log("Clicked an image", info, tab);
chrome.downloads.download({"url": info.srcUrl})
}

function MyQuoteClick(info, tab){
    console.log("Clicked an image", info, tab);
    chrome.downloads.download(info.srcUrl)


}

chrome.contextMenus.create({
    "title": "Share Image",
    "contexts": ["image"],
    "onclick": MyImageClick
})

chrome.contextMenus.create({
    "title": "Share Quote",
    "contexts": ["selection"],
    "onclick": MyQuoteClick
})


chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
    console.log("message", msg)
    sendResponse({"text": "Received the links"});

})