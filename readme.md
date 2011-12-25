![jSnowflakes](//github.com/stereobooster/jSnowflakes/raw/master/jsnowflakes.png)

## Acknowledgements

Code based on [Zeptojs demo](http://zeptojs.com/let-it-snow/) and [jQuery Boilerplate](//github.com/zenorocha/jquery-boilerplate/)

[Demo](http://stereobooster.github.com/jSnowflakes), [Demo with rotation](http://stereobooster.github.com/jSnowflakes/demo-rotate.html)

## Usage

Add jQuery and jSnowflakes

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="jquery.snowflakes.js"></script>
```

For rotation support add [jQuery patch](//github.com/zachstronaut/jquery-animate-css-rotate-scale)

```html 
<script src="jquery-css-transform.js"></script>
<script src="jquery-animate-css-rotate-scale.js"></script>
```

To start snow use `snow` function

```javascript
$('#main').snow();
```

To set amount of snowflakes (default 60)

```javascript
$('#main').snow(60);
```

To set sky color

```javascript
$('#main').snow(true);
```

or

```javascript
$('#main').snow({
  hour: 8
});
```

## Alternatives

### jQuery
 
  - [jSnow](http://archive.plugins.jquery.com/project/jSnow)
  - [snowfall](//github.com/loktar00/JQuery-Snowfall)

### Other

  - [Google](https://www.google.com/search?q=Let+It+Snow)
  - [Microsoft](http://ie.microsoft.com/testdrive/performance/letitsnow/)
  - [Zepto](http://zeptojs.com/let-it-snow/)
  - [designshack](http://designshack.net/articles/css/make-it-snow-on-your-website-with-css-keyframe-animations/)

## TODO

  - add more options
  - add "mobile" snowflakes
