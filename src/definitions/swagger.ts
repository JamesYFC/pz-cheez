/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Cheese {
  /**
   * @format uuid
   * @example "d290f1ee-6c54-4b01-90e6-d701748f0851"
   */
  id: string;
  /** @example "Widget Adapter" */
  name: string;
  /**
   * @format double
   * @example 13.95
   */
  price: number;
  /**
   * @format hexadecimal
   * @example "#ee340c"
   */
  color: string;
  /** @format base64 */
  image: string;
}
