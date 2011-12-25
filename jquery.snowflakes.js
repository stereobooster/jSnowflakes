/**
 * https://github.com/stereobooster/jSnowflakes
 */
;(function ($, undefined) {

    var pluginName = 'snow',
        glyphs = ('❄❅❆').split(''), //'+*×'
        defaults = {
            count: 60,
            sky: false,
            hour: undefined
        },
        color = [
            ['060709', '060709'],
            ['10152b', '0c131d'],
            ['111f42', '10172a'],
            ['192b4f', '111f39'],
            [':[3e6b', '1f2d50'],
            ['3162a7', '244072'],
            ['5383c5', '3f66ab'],
            ['69b0e4', '5590c8'],
            ['afdbf4', '68afe5'],
            ['d7ebf6', 'abdef9'],
            ['c3deef', '93cdf5'],
            ['b1d5ed', '94c0ef'],
            ['a6cbe8', '8bb6e1'],
            ['98bcee', '83a7db'],
            ['86afdb', '6d9ed6'],
            ['7c99c3', '6d8ec1'],
            ['798dc8', '666bbc'],
            ['687aba', '5661b0'],
            ['424da7', '353c8d'],
            ['2e3770', '242960'],
            ['2a1e41', '141738'],
            ['151634', '131429'],
            ['10121f', '101420'],
            ['121116', '0f0e16'] 
        ];

    function rand(max){ return Math.floor(Math.random()*max); }

    function gradient(end, start) {
        return 'background: #'+start+';'+
            'background: -moz-linear-gradient(top,  #'+start+' 0%, #'+end+' 100%);'+
            'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#'+start+'), color-stop(100%,#'+end+'));'+
            'background: -webkit-linear-gradient(top,  #'+start+' 0%,#'+end+' 100%);'+
            'background: -o-linear-gradient(top,  #'+start+' 0%,#'+end+' 100%);'+
            'background: -ms-linear-gradient(top,  #'+start+' 0%,#'+end+' 100%);'+
            'background: linear-gradient(top,  #'+start+' 0%,#'+end+' 100%);';
    };

    function Plugin( element, options ) {
        this.element = element;
        if (options === true) {
            options = {sky: true};
        }
        if (typeof options == 'number') {
            options = {count: options};
        }
        if (options == 'clear') {
            //TODO
        }
        options = $.extend({}, defaults, options);
        if (options.hour == undefined) {
            options.hour = (new Date).getHours();
        }
        this.options = options;
        this.init();
    }

    Plugin.prototype.init = function () {
        var i = this.options.hour,
            layer = $(this.element),
            style = 'overflow: hidden; color: #fff;';
            if (this.options.sky) {
                style += gradient(color[i][0], color[i][1]);
            }

            i = this.options.count;
            layer.attr('style', style);

        function addFlake(){
            var el = $('<div>' + glyphs[rand(glyphs.length)] + '</div>');
            layer.append(el);
            el.css({ 
                left: rand(100) + '%',
                top: -100 - rand(500),
                fontSize: 20 + rand(30),
                position: 'absolute'
            });
            el.animate({ 
                    top: innerHeight*2 + rand(innerHeight/2) + 'px', 
                    left: '+=' + 50 - rand(100) + 'px', 
                    rotate: '+=' + (2e3 - rand(4e3)) + 'deg'
                }, 
                (6 + rand(10)) * 1000, 
                'linear', 
                function(){
                    addFlake();
                    el.remove();
                }
            );
        }

        while(i--) setTimeout(addFlake, rand(6e3));
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    }

})(jQuery);