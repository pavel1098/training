import { ACTION_ADD_COURSE, 
         ACTION_DELETE_COURSE, 
         ACTION_CHANGE_PAGE,
         ACTION_EDIT_COURSE } from '../actions/types'
import { initialState } from '../store'


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ADD_COURSE: 
      return {
        ...state,
        courses: [...state.courses, {
          id: action.payload.id,
          date: action.payload.date,
          name: action.payload.name,
          description: action.payload.description,
          duration: action.payload.duration
        }],
        isAdding: false
      };

    case ACTION_DELETE_COURSE: 
      return {
        ...state,
        courses: state.courses.filter((course) => {
          return course.id !== action.payload
        }
        )
      }

    case ACTION_CHANGE_PAGE:
      return {
        ...state,
        isAdding: action.payload
      }
    
      case ACTION_EDIT_COURSE: 
        return {
          ...state,
          editingCourse: state.courses.filter(course => {
            return course.id === action.payload
          }), 
          isAdding: true
        }

    default:
      return state;
  }
}

export default reducer