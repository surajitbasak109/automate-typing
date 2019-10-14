# Automat Typing

## HTML Part

```html
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;index.css&quot;&gt;
    &lt;title&gt;Automate Typing&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div id=&quot;wrapper&quot; class=&quot;mt-3&quot;&gt;
        &lt;div class=&quot;container-fluid&quot;&gt;
            &lt;div class=&quot;row&quot;&gt;
                &lt;div class=&quot;col-sm-12&quot;&gt;
                    &lt;div class=&quot;typing-area&quot;&gt;
                        &lt;div class=&quot;form-group&quot;&gt;
                            &lt;textarea id=&quot;typingtext&quot; rows=&quot;3&quot; class=&quot;form-control&quot;&gt;&lt;/textarea&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;form-group&quot;&gt;
                            &lt;button type=&quot;button&quot; id=&quot;startTyping&quot;
                                class=&quot;btn btn-outline-primary btn-block btn-flat&quot;&gt;Start&lt;/button&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class=&quot;col-sm-12&quot;&gt;
                    &lt;div class=&quot;showing-area&quot;&gt;
                        &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;index.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
```

## Javascript Part

```javascript
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
```
### CSS Part
Empty
