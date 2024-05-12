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
  /** @format uuid */
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
  /**
   * @format url
   * @example "https://upload.wikimedia.org/wikipedia/commons/1/18/Somerset-Cheddar.jpg"
   */
  imageUrl?: string;
}
