'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var web3 = void 0;

var getProvider = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return window.web3.currentProvider.enable();

					case 2:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, _this);
	}));

	return function getProvider() {
		return _ref.apply(this, arguments);
	};
}();

getProvider();

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//We are in the browser and metamask is running.
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	// We are on the server *OR* the user is not running metamask
	var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/dec0b65ea2fb43e49511be1c2c1ff992');

	web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwiZ2V0UHJvdmlkZXIiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJlbmFibGUiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7Ozs7O0FBRUEsSUFBSSxZQUFKOztBQUVBLElBQU0sMEJBQUE7cUZBQWMsbUJBQUE7Z0VBQUE7YUFBQTtxQ0FBQTtVQUFBO3NCQUFBO2FBQ1YsT0FBTyxBQUFQLEtBQVksQUFBWixnQkFBNEIsQUFBNUIsQUFEVTs7VUFBQTtVQUFBO3NCQUFBOztBQUFBO2NBQUE7QUFBZDs7K0JBQUE7MEJBQUE7QUFBQTtBQUFOOztBQUlBOztBQUVBLElBQUcsT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTNELGFBQXVFLEFBQ3RFO0FBQ0E7UUFBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNBO0FBSEQsT0FHTyxBQUNOO0FBQ0E7S0FBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDaEIsQUFEZ0IsQUFBakIsQUFJQTs7UUFBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0E7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1JhaHVsIEd1cHRhL2V0aGVyZXVtL0NhYm9vZGxlIn0=