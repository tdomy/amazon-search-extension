chrome.contextMenus.create({
    contexts: ['selection'],
    title: "'%s'を Amazon.co.jp で検索",
    onclick: function(info, tab) {
        var searchText = info.selectionText;

        if (searchText === void 0) {
            alert('選択されていません。');
            return;
        }

        chrome.tabs.create({
            url: 'https://amazon.co.jp/s?k=' + encodeURI(searchText)
        });
    }
});