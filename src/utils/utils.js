import { NUMBER, SIGN } from "../redux/types";

export function getType(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str)) ? NUMBER : SIGN;
}

export function prepareInput(val){
    return +val || isNaN(+val) ? val : "";
}

export const size = {
    defaultBtn: "col-3",
    additionalBtn: "col",
    containerDefautBtn: "col-2",
    containerAdditionalBtn: "col",
    extraBtn: "col-6"
}