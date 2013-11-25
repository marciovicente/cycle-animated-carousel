# Simple jQuery cycle slider
Made with [Animate.css](https://github.com/daneden/animate.css)

## Basic usage
HTML
```html
  <head>
    <link rel="stylesheet" href="animate.min.css">
  </head>
  ...
  <div class="parent-div">
    <div class="cycle">Element One</div>
    <div class="cycle">Element Two</div>
    <div class="cycle"><img src="path_to/element_three.png"></div>
  </div>
  ...
  
  <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
  <script src="cycle-animated-carousel.js"></script>
```

JS
```javascript
  $('.parent-div').cycleCarousel({
    time: 5, //in seconds
    animation: 'pulse'
  });
```
See all available animations in https://daneden.me/animate/
