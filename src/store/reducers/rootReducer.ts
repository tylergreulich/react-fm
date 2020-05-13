import { combineReducers } from 'redux'
import { lastFmReducer, LastFmState } from './lastFmReducer'

export interface RootState {
  lastFm: LastFmState
}

export default combineReducers<RootState>({
  lastFm: lastFmReducer
})
