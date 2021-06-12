
const ThemeReducer = (state, action) => {
    switch(action.type){
        case "LIGHT":
            return {type: "LIGHT", data: [...action.data]};
        case "DARK":
            return {type: "DARK", data: [...action.data]};;
        default:
            return {type: "LIGHT", ...state}
    }
}