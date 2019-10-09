import {ConfigState, initialConfigState} from "../state/config.state";
import {ConfigActions} from "../actions/config/config.actions";
import {ConfigActionEnum} from "../actions/config/config-action.enum";

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
