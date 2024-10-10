/*eslint-disable @typescript-eslint/no-explicit-any*/

export interface HttpClient {
  /**
   * Get request to the server
   * @param url Destination URL
   * @param options Request options
   * @returns Promise with the response
   */
  get<T>(url: string, options?: any): Promise<T>;

  /**
   * Post request to the server
   * @param url Destination URL
   * @param data Data to send
   * @param options Request options
   * @returns Promise with the response
   */
  post<T>(url: string, data: any, options?: any): Promise<T>;
}
