Reveal.addEventListener('slidechanged', event => {
    if (event.currentSlide) {
        event.currentSlide.querySelectorAll('.language-mermaid').forEach(item => {
            mermaidDiv = document.createElement('div');
            mermaidDiv.innerHTML = item.innerHTML;
            mermaidDiv.classList.add('mermaid');

            item.parentNode.replaceWith(mermaidDiv);
        });

        mermaid.init(event.currentSlide, '.mermaid');
    }
});

