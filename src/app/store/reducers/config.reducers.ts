import {ConfigState, initialConfigState} from "../state/config.state";
import {ConfigActionEnum, ConfigActions} from "../actions/config/config.actions";

export const configReducers = (state = initialConfigState, action: ConfigActions): ConfigState => {
  switch (action.type) {
    case ConfigActionEnum.GetConfigSuccess:
      return {
        ...state,
        config: action.payload
      };
    default:
      return state;
  }
};
