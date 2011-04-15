!function () {
  var e = emile.noConflict();
  $.ender({
    animate: function (o) {
      var o_keys = ['after', 'duration', 'easing'], opts = {};
      for(var i = o_keys.length -1; i >= 0; i--){
        opts[o_keys[i]] = o[o_keys[i]];
        delete o[o_keys[i]];
      }
      for (var i = 0; i < this.elements.length; i++) {
        e(this.elements[i], o, opts);
      }
      return this;
    }
  }, true);
}();
