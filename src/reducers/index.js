// @flow
import { combineReducers } from "redux";
import { DateTime } from "luxon";
import data from "./data";
import type { State as DataState } from "./data";
import EventFilters from "./event-filters";
import type { State as EventFiltersState } from "../data/event-filters";
import savedEvents from "./saved-events";
import type { SavedEvents as SavedEventsState } from "../data/event";
import currentRoute from "./route";
import splashScreen from "./splash-screen";
import type { State as SplashScreenState } from "./splash-screen";

type Route = string;

export type State = {
  data: DataState,
  eventFilters: EventFiltersState,
  savedEvents: SavedEventsState,
  currentRoute: Route,
  splashScreen: SplashScreenState
};

export default combineReducers({
  data,
  eventFilters: EventFilters(DateTime.local),
  savedEvents,
  currentRoute,
  splashScreen
});
