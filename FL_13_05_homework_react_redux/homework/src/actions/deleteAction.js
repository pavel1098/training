import { ACTION_DELETE_COURSE } from '../actions/types'


export const deleteAction = (courseId) => {
  return {
    type: ACTION_DELETE_COURSE,
    payload: courseId
  }
}