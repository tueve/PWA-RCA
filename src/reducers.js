/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'

/**
 * Creates the main reducer with the dynamically injected ones
 * add reducers of each page
 */
export default function createReducer (injectedReducers) {
  return combineReducers({
    ...injectedReducers
  })
}
