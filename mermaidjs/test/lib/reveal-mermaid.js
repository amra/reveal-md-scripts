mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    logLevel: 3,
});

Reveal.addEventListener('ready', event => {
    var graphs = document.getElementsByClassName("mermaid");
    graphs.forEach((item, index) => {
        var mermaidDiv = document.createElement('div');
        mermaidDiv.innerHTML = item.innerText; // Ignores html elements added by revealjs highlight plugin.
        mermaidDiv.classList.add('mermaid');
        item.replaceWith(mermaidDiv);
    })
    mermaid.init(graphs, '.mermaid');
});
