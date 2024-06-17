<!DOCTYPE html>

<head>
    <style>
        body {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            margin: 0;
            padding: 0;
        }

        #moveButton {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>
<body>
    <button id="moveButton" type="button">hello friends!</button>

    <script>
        function moveRandomly() {
            const button = document.getElementById('moveButton');
            const maxWidth = window.innerWidth - button.offsetWidth;
            const maxHeight = window.innerHeight - button.offsetHeight;
            const randomLeft = Math.random() * maxWidth;
            const randomTop = Math.random() * maxHeight;

            button.style.left = randomLeft + 'px';
            button.style.top = randomTop + 'px';
        }

        setInterval(moveRandomly, 1500);
    </script>
</body>
</html>
