!function () {
  var e = emile.noConflict();
  $.ender({
    animate: function (o) {
      var opts = {};
      opts.after = o.after;
      opts.duration = o.duration;
      opts.easing = o.easing;
      delete o.duration
      delete o.easing
      delete o.after
      delete o.duration;

      for (var i = 0; i < this.elements.length; i++) {
        e(this.elements[i], o, opts);
      }
      return this;
    }
  }, true);
}();
