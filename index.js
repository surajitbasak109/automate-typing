let root = document.querySelector('#root'),
    string = "Please type or paste anything inside the textarea",
    index = 0,
    tid,
    delay = 60;

document.querySelector('#startTyping').addEventListener('click', e => {
    string = document.querySelector('#typingtext').value.length < 1 ? string : document.querySelector('#typingtext').value;
    root.requestFullscreen();
    root.style.background = '#000';
    root.style.color = '#fff';
    root.style.fontSize = '20px';
    root.style.padding = '10px';
    root.textContent = '';
    index = 0;
    clearTimeout(tid);
    write();
});

const write = () => {
    // console.log(string);
    if (index <= string.length) {
        root.textContent = string.substr(0, index++);
        tid = setTimeout(write, delay);
    }
}