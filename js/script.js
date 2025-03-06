document.addEventListener("mousemove", (event) => {
    let mousex = event.pageX - 15;
    let mousey = event.pageY - 15;
    let elem = document.querySelector('.cursor-glow');
    elem.style.left = mousex + 'px';
    elem.style.top = mousey + 'px';
});

document.addEventListener("DOMContentLoaded", function () {
    const codeContent = `
    <span class="text-purple-400">@import</span> <span class="text-orange-400">"tailwindcss"</span>;
    <span class="text-purple-400">@import</span> <span class="text-[#7dd3fc]">utilities</span>;
    <span class="text-purple-400">@import</span> <span class="text-orange-400">"daisyui"</span>;
    `;

    document.getElementById("codeSnippet").innerHTML = `<code>${codeContent}</code>`;
});