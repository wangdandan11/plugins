'use strict';

System.register(['../external/math.min'], function (_export, _context) {
  "use strict";

  var math, _createClass, Builder;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_externalMathMin) {
      math = _externalMathMin;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('Builder', Builder = function () {
        function Builder(options) {
          _classCallCheck(this, Builder);

          this.options = options;
        }

        _createClass(Builder, [{
          key: 'call',
          value: function call() {
            var seriesList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            var scratchPadExp = this.options.mathScratchPad;
            var displayValueExp = this.options.mathDisplayValue;
            var colorValueExp = this.options.mathColorValue;
            var scope = { data: seriesList, now: Date.now() };

            return {
              scratchPad: math.eval(scratchPadExp, scope),
              displayValue: math.eval(displayValueExp, scope),
              colorValue: math.eval(colorValueExp, scope)
            };
          }
        }]);

        return Builder;
      }());

      _export('Builder', Builder);
    }
  };
});
//# sourceMappingURL=builder.js.map
