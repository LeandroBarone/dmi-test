import { createContext, useReducer } from 'react';

const Reducer = (state, newState) => {
	return { ...state, ...newState };
};

const initialState = {};

export const StateContext = createContext(initialState);

const StateContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(Reducer, initialState);
	return (
			<StateContext.Provider value={[state, dispatch]}>
					{children}
			</StateContext.Provider>
	)
};

export default StateContextProvider;