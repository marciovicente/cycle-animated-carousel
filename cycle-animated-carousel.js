;(function ($, window, document, undefined) {

    var pluginName = "cycleCarousel",
        defaults = {
        animation: 'flipInX',
        time: 5, // in seconds
        count: 0
    };

    function Plugin (element, options) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            var $parent = $(this);
            var $el = $parent.find('.slide');
            var lenght_els = count = $el.length;
            var time = settings.time*1000;
            var animation = settings.animation;
            var i = 0;
            doTheInterval(settings.count);
        },
        doTheInterval: function (i) {
            setInterval(function(){
                increment(i);
            }, time);
        },
        increment: function (i){
            if (settings.count < lenght_els && lenght_els > 1){
                $parent.find('.cycle').eq(settings.count).addClass(''+animation+' animated').css('display','block').siblings().removeClass('animated'+animation+' active').css('display','none');
                count--;
                settings.count++;
            }
            if(count == 0){
               count = lenght_els;
               settings.count = 0;
            }
            return settings.count;
        }
    };

    $.fn[ pluginName ] = function (options) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
    };

})(jQuery, window, document);
