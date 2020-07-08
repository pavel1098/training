import { createStore } from 'redux'
import reducer from './reducers/index'

export const initialState = {
  courses: [
    {
      id: 1,
      date: '18.02.18',
      name: 'Prerequisites',
      description: 'Webpack, Angular, TypeScript',
      duration: '01h 34min'
    },
    {
      id: 2,
      date: '01.02.18',
      name: 'Components',
      description: 'Components, LifeCycle, Custom components',
      duration: '01h 20min'
    },                                 
    {
      id: 3,
      date: '15.01.18',
      name: 'Directives + Pipes',                                                                                 
      description: 'Directives, type of directives, build in directives, custom directives',                                                                                                                                                                                                                                                                                   
      duration: '01h 34min'
    }
  ],
  isAdding: false,
  editingCourse: null
}

export const store = createStore(reducer, initialState);

