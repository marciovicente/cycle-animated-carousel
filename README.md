# Simple jQuery cycle slider
* Powered by [Animate.css](https://github.com/daneden/animate.css) *

## Basic usage
```html
  <div class="parent-div">
    <div class="cycle">Element One</div>
    <div class="cycle">Element Two</div>
    <div class="cycle"><img src="path_to/element_three.png"></div>
  </div>
```

```javascript
  $('.parent-div').cycleCarousel({
    time: 5, //in seconds
    animation: 'pulse'
  });
```
* See all animations in (https://daneden.me/animate/) *
