// type Base<T> = {
//   status: "OK" | "NOT OK";
//   message: string;
//   data: T;
// };

export interface Base<T> {
  status: "OK" | "NOT OK";
  message: string;
  data: T;
}
