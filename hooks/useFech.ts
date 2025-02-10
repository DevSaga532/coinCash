import { useEffect, useReducer } from "react";
import axios from "axios";
import { FetchState, FetchAction } from "@/types/fetchTypes"; // Importamos los tipos

function reducer<T>(state: FetchState<T>, action: FetchAction<T>): FetchState<T> {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "success":
      return { responseJSON: action.responseJSON, isLoading: false, error: null };
    case "error":
      return { responseJSON: null, isLoading: false, error: action.error };
    default:
      throw new Error(`Unhandled action type: ${(action as any).type}`);
  }
}

export const useFetch = <T>(url: string): FetchState<T> => {
  const [state, dispatch] = useReducer(reducer<T>, {
    responseJSON: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let shouldCancel = false;

    const callFetch = async () => {
      dispatch({ type: "loading" });
      try {
        const { data } = await axios.get<T>(url); // Axios maneja JSON automáticamente
        if (shouldCancel) return;
        dispatch({ type: "success", responseJSON: data });
      } catch (error) {
        if (shouldCancel) return;
        dispatch({ type: "error", error: error as Error });
      }
    };

    callFetch();

    return () => {
      shouldCancel = true;
    };
  }, [url]);

  return state;
};
