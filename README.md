# Automat Typing

## HTML Part

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="index.css">
    <title>Automate Typing</title>
</head>

<body>
    <div id="wrapper" class="mt-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="typing-area">
                        <div class="form-group">
                            <textarea id="typingtext" rows="3" class="form-control"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="button" id="startTyping"
                                class="btn btn-outline-primary btn-block btn-flat">Start</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="showing-area">
                        <div id="root"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="index.js"></script>
</body>

</html>
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
