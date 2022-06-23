export interface Action {
    type: String,
    payload: object
}

export const actionCreator = (type: String, payload: any) => {
    return {
        type,
        payload,
    };
};
