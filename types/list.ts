export interface List {
  id: number;
  user_id: number;
  user_login: string | null;
  name: string;
  url: string;
  category_name: string;
  price: number;
  currency: string;
  price_format: string;
  dedline: string;
  text: string;
  text_html: string;
}
