function receivesAFunction(spy) {
  return spy();
}

function returnsANamedFunction() {
  return function name() {};
}

function returnsAnAnonymousFunction() {
  return function () {};
}
