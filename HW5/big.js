<!DOCTYPE html>
<html>
<head>
  <title>Button Size Increase</title>
  <style>
    .resize-button {
      width: 100px;
      height: 50px;
      transition: width 0.2s, height 0.2s; 
    }
  </style>
</head>
<body>
  <button class="resize-button" onclick="resizeButton(this)">click me !!!</button>

  <script>

    function resizeButton(button) {
 
      var currentWidth = parseInt(window.getComputedStyle(button).width);
      var currentHeight = parseInt(window.getComputedStyle(button).height);


      button.style.width = (currentWidth + 10) + 'px';
      button.style.height = (currentHeight + 10) + 'px';
    }
  </script>
</body>
</html>
