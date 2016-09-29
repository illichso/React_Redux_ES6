import * as types from './actionTypes';

export function beginAjaxCall() {
  return {types: types.BEGIN_AJAX_CALL};
}
