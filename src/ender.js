!function () {
  var e = emile.noConflict();
  $.ender({
    animate: function (style, opt, after) {
      for (var i = 0; i < this.elements.length; i++) {
        e(this.elements[i], style, opt, after);
      }
      return this;
    }
  }, true);
}();
