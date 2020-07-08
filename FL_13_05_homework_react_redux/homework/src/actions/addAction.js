import { ACTION_ADD_COURSE } from '../actions/types'

export const addAction = (courseData) => {
  return {
    type: ACTION_ADD_COURSE,
    payload: courseData
  }
}