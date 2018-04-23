import { NAVIGATE, START_SEARCH, SET_CHARACTERS, END_SEARCH } from '../constants';

export function navigate(page){
  return {
    type: NAVIGATE,
    page
  }
}
export function startSearch(query){
  return {
    type: START_SEARCH,
    query
  }
}
export function endSearch(){
  return { 
    type: END_SEARCH
  }
}
export function setCharacters(characters){
  return {
    type: SET_CHARACTERS,
    characters
  }
}
