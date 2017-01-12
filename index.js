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
    haveAddEventListener(target) &&
    isString(type) &&
    isFunction(listener)
  ) {
    target.addEventListener(type, listener);
    return {
      target: target,
      type: type,
      listener: listener
    };
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
    haveRemoveEventListener(subscriber.target) &&
    isString(subscriber.type) &&
    isFunction(subscriber.listener)
  ) {
    subscriber.target.removeEventListener(subscriber.type, subscriber.listener);
  }
}


/**
 * @param {object} arg
 * @return {boolean}
 * @private
 */

function haveAddEventListener(arg) { return arg && arg.addEventListener;}
function haveRemoveEventListener(arg) { return arg && arg.removeEventListener;}
function isFunction(arg) { return arg && (typeof arg === 'function'); }
function isString(arg) { return arg && (typeof arg === 'string'); }

