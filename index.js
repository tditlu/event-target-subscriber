/*!
 * event-target-subscriber
 * Copyright(c) 2017 tditlu
 * MIT Licensed
 */

'use strict';

/**
 * Module exports.
 * @public
 */

exports.unsubscribe = unsubscribe;
exports.subscribe = subscribe;


/**
 * Subscribe.
 *
 * @param {object} target
 * @param {string} type
 * @param {function} listener
 * @return {object|null}
 * @public
 */

function subscribe(target, type, listener) {
  if (
    hasAddEventListener(target) &&
    isString(type) &&
    isFunction(listener)
  ) {
    target.addEventListener(type, listener, false);

    var subscriber = {
      target: target,
      type: type,
      listener: listener
    };
    if (Object.freeze) { Object.freeze(subscriber); }
    return subscriber;
  }
  return null;
}


/**
 * Unsubscribe.
 *
 * @param {object} subscriber
 * @return {void}
 * @public
 */

function unsubscribe(subscriber) {
  if (
    subscriber &&
    hasRemoveEventListener(subscriber.target) &&
    isString(subscriber.type) &&
    isFunction(subscriber.listener)
  ) {
    subscriber.target.removeEventListener(subscriber.type, subscriber.listener, false);
  }
}


/**
 * @param {object} arg
 * @return {boolean}
 * @private
 */

function hasAddEventListener(arg) { return arg && arg.addEventListener;}
function hasRemoveEventListener(arg) { return arg && arg.removeEventListener;}
function isFunction(arg) { return arg && (typeof arg === 'function'); }
function isString(arg) { return arg && (typeof arg === 'string'); }
