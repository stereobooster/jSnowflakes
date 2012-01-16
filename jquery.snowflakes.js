/**
 * jSnowflakes v0.02
 * https://github.com/stereobooster/jSnowflakes
 */
;(function ($, undefined) {

    var pluginName = 'snow',
        glyphs = ('❄❅❆').split(''), //'+*×'
        //glyphs = ('✲✱✳✴✶✷✸✹✺✻✼❉❊❋✢✥✧✕☓').split(''),
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
            ['233e6b', '1f2d50'],
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
        return 'background: #'+start+';'+(end == start ? '' :
            ('background: -moz-linear-gradient(top,  #'+start+' 0%, #'+end+' 100%);'+
            'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#'+start+'), color-stop(100%,#'+end+'));'+
            'background: -webkit-linear-gradient(top,  #'+start+' 0%,#'+end+' 100%);'+
            'background: -o-linear-gradient(top,  #'+start+' 0%,#'+end+' 100%);'+
            'background: -ms-linear-gradient(top,  #'+start+' 0%,#'+end+' 100%);'+
            'background: linear-gradient(top,  #'+start+' 0%,#'+end+' 100%);' + 
            'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#' + start + '", endColorstr="#' + end + '",GradientType=0 );'));
    };

    function Plugin( element, options ) {
        this.element = $(element);
        if (options === true) {
            options = {sky: true};
        } else if (typeof options == 'number') {
            options = {count: options};
        } else if (options) {
            options.sky = options.sky || (
                typeof options.hour == 'number' 
                && options.hour >= 0 
                && options.hour <= 23
            );
        }
        this.options = $.extend({}, defaults, options);
        this.init();
    }

    Plugin.prototype.init = function () {
        var that = this;

        function updateSkyColor() {
            var timeout = (60 - (new Date).getMinutes()) * 60 + 1,
                i = that.options.hour,
                layer = that.element,
                style = 'overflow:hidden;color:#fff;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;';

            if (i == undefined) {
                i = (new Date).getHours();
            }
            if (that.options.sky && i >= 0 && i <= 23) {
                style += gradient(color[i][0], color[i][1]);
            }
            layer.attr('style', style);

            if (that.options.sky && that.options.hour == undefined) {
                setTimeout(updateSkyColor, timeout * 1000);
            }
        }

        updateSkyColor();
    };

    Plugin.prototype.start = function () {
        if (!this.active) {
            this.active = true;
            var i = this.options.count,
                layer = this.element,
                that = this,
                innerHeight = this.element.innerHeight();

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
                        if (that.active) {
                            addFlake();    
                        }
                        el.remove();
                    }
                );
            }

            while(i-- && this.active) setTimeout(addFlake, rand(6e3));
        }
    }

    Plugin.prototype.stop = function () {
        this.active = false;
    }

    Plugin.prototype.clear = function () {
        this.element.find('div').remove();
    }

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            var plug = $.data(this, 'plugin_' + pluginName);
            if (!plug) {
                plug = new Plugin( this, options );
                $.data(this, 'plugin_' + pluginName, plug);
            }
            if (options == 'stop'){
                plug.stop();
            } else if (options == 'clear') {
                plug.stop();
                plug.clear();
            } else {
                plug.start();
            }
        });
    }

})(jQuery);