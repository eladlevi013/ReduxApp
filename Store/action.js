export const GET_CHARACTER = "GET_CHARACTER";

export const getAllCharacters = () => {
    return async (dispatch) => {
        const url = 'https://breakingbadapi.com/api/characters';
        const response = await(fetch(url, {
            method: 'get'
        }));
        const data = await response.json();
        if(data) {
            dispatch(getAllCharactersDispatch(data))
        } else {
            const message = 'Something wrong';
            throw new Error(message);
        }
    }
}
export const getAllCharactersDispatch = (data) => {
    return (dispatch) => {
        dispatch({type: GET_CHARACTER, data: data});
    }
}