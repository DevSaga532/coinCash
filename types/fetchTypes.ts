export interface FetchState<T> {
    responseJSON: T | null;
    isLoading: boolean;
    error: Error | null;
  }
  
  export type FetchAction<T> =
    | { type: "loading" }
    | { type: "success"; responseJSON: T }
    | { type: "error"; error: Error };
  
