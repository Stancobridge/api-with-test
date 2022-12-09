export interface Connection {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
  ssl?: any;
}
