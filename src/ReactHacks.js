"use strict";

const React = require("react");
const ReactDOM = require("react-dom");

exports.suspense = React.Suspense;

exports.strictMode = React.StrictMode;

exports.renderConcurrentMode = jsx => element => () => {
  return ReactDOM.createRoot(element).render(jsx);
};

const fakeSuspendCache = { error: null, result: undefined, pending: null };
exports.fakeSuspend = a => () => {
  if (fakeSuspendCache.error !== null) {
    throw fakeSuspendCache.error;
  }
  if (fakeSuspendCache.result !== undefined) {
    return fakeSuspendCache.result;
  }
  fakeSuspendCache.pending = new Promise(resolve => {
    setTimeout(() => resolve(a), 3000);
  }).then(a_ => (fakeSuspendCache.result = a));
  throw fakeSuspendCache.pending;
};
