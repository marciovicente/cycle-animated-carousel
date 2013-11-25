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
        this.element = element;
        this.$element = $(element);
        this.$child = this.$element.find('.cycle');
        this.lenght_child = this.count = this.$child.length;
        this.animation = this.settings.animation;
        this.time = this.settings.time
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            this.doTheInterval(defaults.count);
        },
        increment: function (scope){
            if (defaults.count < scope.$child.length && scope.lenght_child > 1){
                scope.$element.find('.cycle').eq(defaults.count+1).addClass(''+scope.animation+' animated').css('display','block').siblings().removeClass('animated'+scope.animation+' active').css('display','none');
                scope.count--;
                defaults.count++;
            }
            if(scope.count == 0){
               scope.count = scope.$child.length;
               defaults.count = -1;
            }
            return defaults.count;
        },
        doTheInterval: function () {
            var scope = this;
            var teste = setInterval(this.increment, scope.time*1000, scope);
        },
    };

    $.fn[ pluginName ] = function (options) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName)) {
                $.data( this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);
