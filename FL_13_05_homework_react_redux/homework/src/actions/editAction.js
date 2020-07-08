import { ACTION_EDIT_COURSE } from '../actions/types'

export const editAction = (courseId) => {
  return {
    type: ACTION_EDIT_COURSE,
    payload: courseId
  }
}