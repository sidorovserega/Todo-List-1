import {SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE} from '../types';

const handlers = {
    //передается только состояние, указывается начало загрузки, второй параметр action игнорируется
    [SHOW_LOADER]: state => ({...state, loading: true}),
    //
    [ADD_NOTE]: (state, {payload}) => ({
        ...state, 
        notes: [...state.notes, payload]
    }),
    [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload, loading: false}),
    [REMOVE_NOTE]: (state, {payload}) => ({
        ...state,
        notes: state.notes.filter(note => note.id !== payload)
    }),
    DEFAULT: state => state
}

export const firebaseReduser = (state, action) => {
  
    const handle = handlers[action.type] || handlers.DEFAULT;

    return handle(state, action);
}