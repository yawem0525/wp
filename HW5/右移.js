<!DOCTYPE html>
<html>
<style>
        #moveButton {
            position: relative;
            left: 0px; 
        }
    </style>
<body>
<button id="moveButton" type="button" onclick="moveRight()">Click me </button>
<script>
        function moveRight() {
            const button = document.getElementById('moveButton');
            let currentLeft = parseInt(button.style.left)||0;
            button.style.left = (currentLeft + 10) + 'px';
        }
    </script>
</body>
</html> 
