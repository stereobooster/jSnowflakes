/**
 * jSnowflakes
 */
;(function ($, undefined) {

    function rand(max){ return Math.floor(Math.random()*max); }

    var pluginName = 'snow',
        glyphs = ('❄❅❆').split(''),
        defaults = {
            count: 60
        };

    function Plugin( element, options ) {
        this.element = element;
        if (typeof options == 'number') {
            options = {count: options};
        }
        this.options = $.extend({}, defaults, options);
        this.init();
    }

    Plugin.prototype.init = function () {
        var i = this.options.count,
            layer = $(this.element).css({overflow: 'hidden', color: '#fff'});

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