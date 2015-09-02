var AppDispatcher = require('../dispatchers/dispatcher'),
    AppConstants = require('../constants/constants'),
    assign = require('react/lib/Object.assign'),
    EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _catalog = [];

for(var i=1; i < 9; i++) {
  _catalog.push({
    'id': i,
    'title': 'Widget #' + i,
    'summary': 'This is an awesome widget!',
    'description': 'Here is the detailed description of the widget',
    'cost': i
  });
}

var _cartItems = [];

function _removeItem(index) {
  _cartItems[index].inCart = false;
  _cartItems.splice(index, 1);
}

function _increaseItem(index) {
  _cartItems[index].qty++;
}

function _decreaseItem(index) {
  _cartItems[index].qty--;
  if(_cartItems[index].qty <= 0) {
    _removeItem(index);
  }
}

function _addItem(item) {
  if (!item.inCart) {
    item.qty = 1;
    item.inCart = true;
    _cartItems.push(item);
  } else {
    _cartItems.forEach(function(cartItem, i) {
      if (cartItem.id === item.id) {
        _increaseItem(i);
      }
    });
  }
}

function _cartTotals() {
  var qty = 0,
      total = 0;

  _cartItems.forEach(function(cartItem) {
    qty += cartItem.qty;
    total += cartItem.qty*cartItem.cost;
  });

  return {'qty': qty, 'total': total };
}


var AppStore = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCart: function() {
    return _cartItems;
  },

  getCatalog: function() {
    return _catalog;
  },

  getCartTotals: function() {
    return _cartTotals();
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
      case AppConstants.ADD_ITEM:
        _addItem(action.item);
        break;
      case AppConstants.REMOVE_ITEM:
        _removeItem(action.index);
        break;
      case AppConstants.INCREASE_ITEM:
        _increaseItem(action.index);
        break;
      case AppConstants.DECREASE_ITEM:
        _decreaseItem(action.index);
        break;
    }

    AppStore.emitChange();

    return true;
  })
});

module.exports = AppStore;
