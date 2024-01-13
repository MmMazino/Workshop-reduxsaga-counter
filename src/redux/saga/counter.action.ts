import { put, delay } from "redux-saga/effects";

import { INCREMENT, DECREMENT, ADD } from "../actionType";

interface AddAction {
  type: string; // Assuming the action type is always a string
  payload: number; // Adjust the type according to your application's needs
}

export function* setIncrementAction() {
  yield put({ type: INCREMENT });
}

export function* setIncrementAsyncAction() {
  yield delay(1000);
  yield put({ type: INCREMENT });
}

export function* setDecrementAction() {
  yield put({ type: DECREMENT });
}

export function* setAddAction({ payload }: AddAction) {
  yield put({ type: ADD, payload });
}
