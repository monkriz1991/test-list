import type { FetchError, FetchOptions } from "ofetch";

interface ISearchParams {
  [key: string]: any;
}

interface IRequestParams {
  method?: "POST" | "GET";
  params?: ISearchParams;
  query?: ISearchParams;
  headers?: HeadersInit;
  body?: RequestInit["body"] | Record<string, any>;
  onResponse?: FetchOptions["onResponse"];
}

export async function useTransport<R = void>(
  url: string,
  params?: IRequestParams
) {
  const config = useRuntimeConfig();
  const { headers, ...restParams } = params || {};
  let _headers = headers;
  _headers = {
    ..._headers,
  };

  return useFetch<R, FetchError, string, "GET" | "POST">(url, {
    baseURL: config.public.apiUrl,
    headers: _headers,
    ...restParams,
  });
}
