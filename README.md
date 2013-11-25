# Simple jQuery cycle slider
Very simple jquery micro-slider made with [Animate.css](https://github.com/daneden/animate.css)

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
  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
  <script src="cycle-animated-carousel.js"></script>
```

CSS
```css
.div-parent {
  width: 200px;
  height: 60px;
  overflow: hidden;
  position: relative;
}
.cycle {
  height: 60px; /* same height that .div-parent */
}
```

JS
```javascript
  $('.parent-div').cycleCarousel({
    time: 5, //in seconds
    animation: 'pulse'
  });
```
See all available animations in https://daneden.me/animate/


