import type { Profile } from "./profile";
import type { List } from "./list";
import type { Seo } from "./seo";

export interface Links {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: { url: string | null; label: string; active: boolean }[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface IAllData {
  list: List[];
  profile: Profile[];
  page: Seo[];
}

export interface IApiResponse<T> {
  error: number;
  error_message: string;
  response: {
    data: T;
    page?: Seo[];
  };
  status: number;
  links?: Links;
  meta?: Meta;
}
