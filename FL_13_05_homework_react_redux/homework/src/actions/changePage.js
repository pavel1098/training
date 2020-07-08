import { ACTION_CHANGE_PAGE } from '../actions/types'


export const changePage = () => {
  return {
    type: ACTION_CHANGE_PAGE,
    payload: true
  }
}