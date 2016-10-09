webpackJsonp([0],{

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(26);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(36);

var _isomorphicFetch = __webpack_require__(35);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _Session = __webpack_require__(89);

var _Session2 = _interopRequireDefault(_Session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SessionList = function (_Component) {
  _inherits(SessionList, _Component);

  function SessionList(props) {
    _classCallCheck(this, SessionList);

    var _this = _possibleConstructorReturn(this, (SessionList.__proto__ || Object.getPrototypeOf(SessionList)).call(this, props));

    _this.state = {
      sessions: [],
      loading: true
    };
    return _this;
  }

  _createClass(SessionList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      if (window.__INITIALSTATE__.length) {
        this.setState({
          loading: false,
          sessions: window.__INITIALSTATE__
        });
      } else {
        (0, _isomorphicFetch2.default)('http://con.dd/api/sessions').then(function (res) {
          return res.json();
        }).then(function (sessions) {
          return _this2.setState({
            loading: false,
            sessions: sessions
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var content = "Loading";
      if (this.state.loading === false && this.state.sessions.length > 0) {
        content = this.state.sessions.map(function (session, index) {
          return _react2.default.createElement(_Session2.default, _extends({ key: index }, session));
        });
      }
      return _react2.default.createElement(
        'div',
        null,
        content
      );
    }
  }]);

  return SessionList;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(SessionList, null), document.getElementById('session-list'));

/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(26);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Session = function Session(_ref) {
  var title = _ref.title;
  var speaker = _ref.speaker;
  var experience = _ref.experience;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      title
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'strong',
        null,
        speaker
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      experience
    )
  );
};

exports.default = Session;

/***/ }

},[174]);