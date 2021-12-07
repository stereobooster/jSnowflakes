![jSnowflakes](//github.com/stereobooster/jSnowflakes/raw/master/jsnowflakes.png)

## Acknowledgements

Code based on [Zeptojs demo](http://zeptojs.com/let-it-snow/) and [jQuery Boilerplate](//github.com/zenorocha/jquery-boilerplate/)

## Demo

[Demo](http://stereobooster.github.io/jSnowflakes), [Demo with rotation](http://stereobooster.github.io/jSnowflakes/demo-rotate.html)

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

To set sky color depending on time

```javascript
$('#main').snow(true);
```

To set sky color to definite hour

```javascript
$('#main').snow({
  hour: 8
});
```

## Alternatives

### jQuery
 
  - [jSnow](http://archive.plugins.jquery.com/project/jSnow)
  - [snowfall](//github.com/loktar00/JQuery-Snowfall)
    - Snowflakes: div with background color
    - Cool feature: snow collecting on surfaces

### Other

  - [Google](https://www.google.com/search?q=Let+It+Snow)
    - Cool feature: frosting glass effect
  - [Microsoft](http://ie.microsoft.com/testdrive/performance/letitsnow/)
  - [Zepto](http://zeptojs.com/let-it-snow/)
    - Snowflakes: utf-8 symbols
  - [designshack](http://designshack.net/articles/css/make-it-snow-on-your-website-with-css-keyframe-animations/)
    - Snowflakes: png
  - [badassjs](http://badassjs.com/happy-holidays)
    - Snowflakes: svg
  - http://natbat.net/code/clientside/css/snowflakes/
  - http://ocelotdev.ru/

## Christmas tree

  - http://hakim.se/experiments/css/domtree/

## TODO

  - add more options
  - add "mobile" snowflakes
