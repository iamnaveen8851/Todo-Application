import { Error, Loading } from "./actionItem";

export const setLoading = (payload) => {
  return { type: Loading, payload: payload };
};

export const setError = (payload) => {
  return { type: Error, payload: payload };
};
