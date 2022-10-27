// check 함수는 3개의 콜백 함수를 인자로 받는다.
function check(predicate, onSuccess, onFail) {
  predicate() ? onSuccess('yes') : onFail('no');
}

module.exports = check;
