mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    logLevel: 3,
});

Reveal.addEventListener('ready', asyncMermaidRender);

function asyncMermaidRender(_) {
    const graphs = document.getElementsByClassName("mermaid");
    graphs.forEach((item, index) => {
        const graphCode = item.textContent.trim(); //trim() becase of gantt, class and git diagram
        const mermaidDiv = document.createElement('div');
        mermaidDiv.classList.add('mermaid');
        mermaidDiv.setAttribute("data-processed", "true");

        try {
            // item.innerText ignores html elements added by revealjs highlight plugin.
            mermaid.mermaidAPI.render(`theGraph${index}`, graphCode,
                svgCode => mermaidDiv.innerHTML = svgCode
            );

            item.parentNode.parentNode.insertBefore(mermaidDiv, item.parentNode);
            item.parentNode.remove();
        }
        catch (err) {
            console.log(`Cannot render mermaid diagram ${index}\n${graphCode}`);
            console.log(err.message);
        }
    })
}
