### _Source Code_

## html code 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Surprise for You!</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Surprise, My Love!</h1>
        <p id="message">Click the button below to see a special message just for you!</p>
        <button id="revealButton">Reveal Message</button>
        <div id="specialMessage" class="hidden">
            <h2>You're Amazing!</h2>
            <p>I wanted to let you know how much you mean to me. You are my sunshine and my inspiration. I love you more than words can express.</p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

```

--- 

## css code 
```css
body {
    font-family: Arial, sans-serif;
    background-color: #b6b5b5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #e74c3c;
}

#specialMessage {
    margin-top: 20px;
}

.hidden {
    display: none;
}

button {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #c0392b;
}

```

--- 

## js code
```js
document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealButton');
    const specialMessage = document.getElementById('specialMessage');

    revealButton.addEventListener('click', () => {
        specialMessage.classList.toggle('hidden');
        if (specialMessage.classList.contains('hidden')) {
            revealButton.textContent = 'Reveal Message';
        } else {
            revealButton.textContent = 'Hide Message';
        }
    });
});

```
