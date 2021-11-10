import * as actions from '../actions';

const initialState = {
    isHidden: true,
    newEntry: {
        date: null,
        mood: null,
        moodTypes: [],
        sleep: null,
        eating: null,
        exercise: null,
        notes: null
    },
    entries: [],
    error: null,
    moods: [
      {
        name: 'Bad',
        colour: 'red',
        value:1,
        id: 'mood1'
      },
      {
        name: 'Okay',
        colour: 'orange',
        value:2,
        id: 'mood2'
      },
      {
        name: 'Good',
        colour: 'yellow',
        value:3,
        id: 'mood3'
      },
      {
        name: 'Great',
        colour: 'chartreuse',
        value:4,
        id: 'mood4'
      },
      {
        name: 'Amazing',
        colour: 'green',
        value:5,
        id: 'mood5'
      }
    ],
    types: [
      {name: 'happy'},
      {name: 'excited'},
      {name: 'hopeful'},
      {name: 'relaxed'},
      {name: 'anxious'},
      {name: 'silly'},
      {name: 'engaged'},
      {name: 'sad'},
      {name: 'angry'},
      {name: 'restless'},
      {name: 'nervous'},
      {name: 'tired'},
      {name: 'depressed'},
      {name: 'irritated'}
    ],
    sleeps: [
      {
        name: '< 3 hours',
        colour: 'red',
        value:1,
        id: 'sleep1'
      },
      {
        name: '3-5 hours',
        colour: 'orange',
        value:2,
        id: 'sleep2'
      },
      {
        name: '5-7 hours',
        colour: 'yellow',
        value:3,
        id: 'sleep3'
      },
      {
        name: '7-9 hours',
        colour: 'chartreuse',
        value:4,
        id: 'sleep4'
      },
      {
        name: '> 9 hours',
        colour: 'green',
        value:2.5,
        id: 'sleep5'
      }
    ],
    eatings: [
      {
        name: 'bad',
        colour: 'red',
        value:1,
        id: 'eating1'
      },
      {
        name: 'okay',
        colour: 'orange',
        value:2,
        id: 'eating2'
      },
      {
        name: 'good',
        colour: 'yellow',
        value:3,
        id: 'eating3'
      },
      {
        name: 'great',
        colour: 'chartreuse',
        value:4,
        id: 'eating4'
      },
      {
        name: 'amazing',
        colour: 'green',
        value:5,
        id: 'eating5'
      }
    ],
    exercises: [
      {
        name: 'Most of the time',
        colour: 'red',
        value:1,
        id: 'exercise1'
      },
      {
        name: 'Sometimes',
        colour: 'orange',
        value:2,
        id: 'exercise2'
      },
      {
        name: 'Rarely',
        colour: 'yellow',
        value:4,
        id: 'exercise3'
      },
      {
        name: 'Not at all',
        colour: 'chartreuse',
        value:5,
        id: 'exercise4'
      }
    ],
    notes: null
};

export const entryReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_MOOD) {
        return Object.assign({}, state, {
            newEntry: {
                ...state.newEntry, mood: action.mood}
        })
    } else if (action.type === actions.ADD_MOOD_TYPES) {
        return Object.assign({}, state, {
            newEntry: {
                ...state.newEntry,
                moodTypes: [...state.newEntry.moodTypes, action.moodTypes]
            }
        })
    } else if (action.type === actions.REMOVE_MOOD_TYPES) {
        return Object.assign({}, state, {
            newEntry: {
                ...state.newEntry,
                moodTypes: state.newEntry.moodTypes.filter(moodType => {
                    return moodType !== action.moodTypes
                })
            }
        });
    } else if (action.type === actions.ADD_SLEEP) {
        return Object.assign({}, state, {
            newEntry: {
                ...state.newEntry, sleep: action.sleep}
        })
    } else if (action.type === actions.ADD_EATING) {
        return Object.assign({}, state, {
            newEntry: {
                ...state.newEntry, eating: action.eating}
        })
    } else if (action.type === actions.ADD_EXERCISE) {
        return Object.assign({}, state, {
            newEntry: {
                ...state.newEntry, exercise: action.exercise}
        })
    } else if (action.type === actions.ADD_NOTES) {
        return Object.assign({}, state, {
            newEntry: {
                ...state.newEntry, notes: action.notes}
        })
    } else if (action.type === actions.FETCH_ENTRY_REQUEST) {
        return Object.assign({}, state, {
            error: null
        })
    } else if (action.type === actions.FETCH_ENTRY_SUCCESS) {
        return Object.assign({}, state, {
            entries: action.entry,
            error: null
        })
    } else if (action.type === actions.FETCH_ENTRY_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        })
    } else if (action.type === actions.FETCH_ENTRIES_REQUEST) {
        return Object.assign({}, state, {
            error: null
        })
    } else if (action.type === actions.FETCH_ENTRIES_SUCCESS) {
        return Object.assign({}, state, {
            entries: action.entries,
            error: null
        })
    } else if (action.type === actions.FETCH_ENTRIES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        })
    } else if (action.type === actions.ADD_ENTRY_REQUEST) {
        return Object.assign({}, state, {
            error: null
        })
    } else if (action.type === actions.ADD_ENTRY_SUCCESS) {
        return Object.assign({}, state, {
            entries: [...state.entries, {
                ...state.newEntry
            }],
            newEntry: {
              date: null,
              mood: null,
              moodTypes: [],
              sleep: null,
              eating: null,
              exercise: null,
              notes: null
            },
            error: null
        })
    } else if (action.type === actions.ADD_ENTRY_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        })
    } else if (action.type === actions.EDIT_ENTRY_REQUEST) {
        return Object.assign({}, state, {
            error: null
        })
    } else if (action.type === actions.EDIT_ENTRY_SUCCESS) {
        return Object.assign({}, state, {
            entries: [...state.entries, {
                ...state.editedEntry
            }],
            error: null
        })
    } else if (action.type === actions.EDIT_ENTRY_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        })
    }
    return state;
};
