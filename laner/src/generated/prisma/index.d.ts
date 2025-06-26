
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model sqlx_migrations
 * 
 */
export type sqlx_migrations = $Result.DefaultSelection<Prisma.$sqlx_migrationsPayload>
/**
 * Model api_request_logs
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type api_request_logs = $Result.DefaultSelection<Prisma.$api_request_logsPayload>
/**
 * Model deposits
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type deposits = $Result.DefaultSelection<Prisma.$depositsPayload>
/**
 * Model epoch_snapshots
 * 
 */
export type epoch_snapshots = $Result.DefaultSelection<Prisma.$epoch_snapshotsPayload>
/**
 * Model lst_apy_data
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type lst_apy_data = $Result.DefaultSelection<Prisma.$lst_apy_dataPayload>
/**
 * Model lst_holder_data
 * 
 */
export type lst_holder_data = $Result.DefaultSelection<Prisma.$lst_holder_dataPayload>
/**
 * Model lst_strategy
 * 
 */
export type lst_strategy = $Result.DefaultSelection<Prisma.$lst_strategyPayload>
/**
 * Model lst_tokens
 * 
 */
export type lst_tokens = $Result.DefaultSelection<Prisma.$lst_tokensPayload>
/**
 * Model lst_tvl_data
 * 
 */
export type lst_tvl_data = $Result.DefaultSelection<Prisma.$lst_tvl_dataPayload>
/**
 * Model user_snapshots
 * 
 */
export type user_snapshots = $Result.DefaultSelection<Prisma.$user_snapshotsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model withdrawals
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type withdrawals = $Result.DefaultSelection<Prisma.$withdrawalsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sqlx_migrations
 * const sqlx_migrations = await prisma.sqlx_migrations.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sqlx_migrations
   * const sqlx_migrations = await prisma.sqlx_migrations.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sqlx_migrations`: Exposes CRUD operations for the **sqlx_migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sqlx_migrations
    * const sqlx_migrations = await prisma.sqlx_migrations.findMany()
    * ```
    */
  get sqlx_migrations(): Prisma.sqlx_migrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.api_request_logs`: Exposes CRUD operations for the **api_request_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Api_request_logs
    * const api_request_logs = await prisma.api_request_logs.findMany()
    * ```
    */
  get api_request_logs(): Prisma.api_request_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deposits`: Exposes CRUD operations for the **deposits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deposits
    * const deposits = await prisma.deposits.findMany()
    * ```
    */
  get deposits(): Prisma.depositsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.epoch_snapshots`: Exposes CRUD operations for the **epoch_snapshots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Epoch_snapshots
    * const epoch_snapshots = await prisma.epoch_snapshots.findMany()
    * ```
    */
  get epoch_snapshots(): Prisma.epoch_snapshotsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lst_apy_data`: Exposes CRUD operations for the **lst_apy_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lst_apy_data
    * const lst_apy_data = await prisma.lst_apy_data.findMany()
    * ```
    */
  get lst_apy_data(): Prisma.lst_apy_dataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lst_holder_data`: Exposes CRUD operations for the **lst_holder_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lst_holder_data
    * const lst_holder_data = await prisma.lst_holder_data.findMany()
    * ```
    */
  get lst_holder_data(): Prisma.lst_holder_dataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lst_strategy`: Exposes CRUD operations for the **lst_strategy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lst_strategies
    * const lst_strategies = await prisma.lst_strategy.findMany()
    * ```
    */
  get lst_strategy(): Prisma.lst_strategyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lst_tokens`: Exposes CRUD operations for the **lst_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lst_tokens
    * const lst_tokens = await prisma.lst_tokens.findMany()
    * ```
    */
  get lst_tokens(): Prisma.lst_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lst_tvl_data`: Exposes CRUD operations for the **lst_tvl_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lst_tvl_data
    * const lst_tvl_data = await prisma.lst_tvl_data.findMany()
    * ```
    */
  get lst_tvl_data(): Prisma.lst_tvl_dataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_snapshots`: Exposes CRUD operations for the **user_snapshots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_snapshots
    * const user_snapshots = await prisma.user_snapshots.findMany()
    * ```
    */
  get user_snapshots(): Prisma.user_snapshotsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawals`: Exposes CRUD operations for the **withdrawals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Withdrawals
    * const withdrawals = await prisma.withdrawals.findMany()
    * ```
    */
  get withdrawals(): Prisma.withdrawalsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    sqlx_migrations: 'sqlx_migrations',
    api_request_logs: 'api_request_logs',
    deposits: 'deposits',
    epoch_snapshots: 'epoch_snapshots',
    lst_apy_data: 'lst_apy_data',
    lst_holder_data: 'lst_holder_data',
    lst_strategy: 'lst_strategy',
    lst_tokens: 'lst_tokens',
    lst_tvl_data: 'lst_tvl_data',
    user_snapshots: 'user_snapshots',
    users: 'users',
    withdrawals: 'withdrawals'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sqlx_migrations" | "api_request_logs" | "deposits" | "epoch_snapshots" | "lst_apy_data" | "lst_holder_data" | "lst_strategy" | "lst_tokens" | "lst_tvl_data" | "user_snapshots" | "users" | "withdrawals"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      sqlx_migrations: {
        payload: Prisma.$sqlx_migrationsPayload<ExtArgs>
        fields: Prisma.sqlx_migrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sqlx_migrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sqlx_migrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>
          }
          findFirst: {
            args: Prisma.sqlx_migrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sqlx_migrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>
          }
          findMany: {
            args: Prisma.sqlx_migrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>[]
          }
          create: {
            args: Prisma.sqlx_migrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>
          }
          createMany: {
            args: Prisma.sqlx_migrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sqlx_migrationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>[]
          }
          delete: {
            args: Prisma.sqlx_migrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>
          }
          update: {
            args: Prisma.sqlx_migrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>
          }
          deleteMany: {
            args: Prisma.sqlx_migrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sqlx_migrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sqlx_migrationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>[]
          }
          upsert: {
            args: Prisma.sqlx_migrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sqlx_migrationsPayload>
          }
          aggregate: {
            args: Prisma.Sqlx_migrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSqlx_migrations>
          }
          groupBy: {
            args: Prisma.sqlx_migrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sqlx_migrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sqlx_migrationsCountArgs<ExtArgs>
            result: $Utils.Optional<Sqlx_migrationsCountAggregateOutputType> | number
          }
        }
      }
      api_request_logs: {
        payload: Prisma.$api_request_logsPayload<ExtArgs>
        fields: Prisma.api_request_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.api_request_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_request_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.api_request_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_request_logsPayload>
          }
          findFirst: {
            args: Prisma.api_request_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_request_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.api_request_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_request_logsPayload>
          }
          findMany: {
            args: Prisma.api_request_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_request_logsPayload>[]
          }
          create: {
            args: Prisma.api_request_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_request_logsPayload>
          }
          createMany: {
            args: Prisma.api_request_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.api_request_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_request_logsPayload>[]
          }
          delete: {
            args: Prisma.api_request_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_request_logsPayload>
          }
          update: {
            args: Prisma.api_request_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_request_logsPayload>
          }
          deleteMany: {
            args: Prisma.api_request_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.api_request_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.api_request_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_request_logsPayload>[]
          }
          upsert: {
            args: Prisma.api_request_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_request_logsPayload>
          }
          aggregate: {
            args: Prisma.Api_request_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApi_request_logs>
          }
          groupBy: {
            args: Prisma.api_request_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Api_request_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.api_request_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Api_request_logsCountAggregateOutputType> | number
          }
        }
      }
      deposits: {
        payload: Prisma.$depositsPayload<ExtArgs>
        fields: Prisma.depositsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.depositsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.depositsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>
          }
          findFirst: {
            args: Prisma.depositsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.depositsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>
          }
          findMany: {
            args: Prisma.depositsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>[]
          }
          create: {
            args: Prisma.depositsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>
          }
          createMany: {
            args: Prisma.depositsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.depositsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>[]
          }
          delete: {
            args: Prisma.depositsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>
          }
          update: {
            args: Prisma.depositsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>
          }
          deleteMany: {
            args: Prisma.depositsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.depositsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.depositsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>[]
          }
          upsert: {
            args: Prisma.depositsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$depositsPayload>
          }
          aggregate: {
            args: Prisma.DepositsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeposits>
          }
          groupBy: {
            args: Prisma.depositsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositsGroupByOutputType>[]
          }
          count: {
            args: Prisma.depositsCountArgs<ExtArgs>
            result: $Utils.Optional<DepositsCountAggregateOutputType> | number
          }
        }
      }
      epoch_snapshots: {
        payload: Prisma.$epoch_snapshotsPayload<ExtArgs>
        fields: Prisma.epoch_snapshotsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.epoch_snapshotsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epoch_snapshotsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.epoch_snapshotsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epoch_snapshotsPayload>
          }
          findFirst: {
            args: Prisma.epoch_snapshotsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epoch_snapshotsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.epoch_snapshotsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epoch_snapshotsPayload>
          }
          findMany: {
            args: Prisma.epoch_snapshotsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epoch_snapshotsPayload>[]
          }
          create: {
            args: Prisma.epoch_snapshotsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epoch_snapshotsPayload>
          }
          createMany: {
            args: Prisma.epoch_snapshotsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.epoch_snapshotsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epoch_snapshotsPayload>[]
          }
          delete: {
            args: Prisma.epoch_snapshotsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epoch_snapshotsPayload>
          }
          update: {
            args: Prisma.epoch_snapshotsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epoch_snapshotsPayload>
          }
          deleteMany: {
            args: Prisma.epoch_snapshotsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.epoch_snapshotsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.epoch_snapshotsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epoch_snapshotsPayload>[]
          }
          upsert: {
            args: Prisma.epoch_snapshotsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epoch_snapshotsPayload>
          }
          aggregate: {
            args: Prisma.Epoch_snapshotsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpoch_snapshots>
          }
          groupBy: {
            args: Prisma.epoch_snapshotsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Epoch_snapshotsGroupByOutputType>[]
          }
          count: {
            args: Prisma.epoch_snapshotsCountArgs<ExtArgs>
            result: $Utils.Optional<Epoch_snapshotsCountAggregateOutputType> | number
          }
        }
      }
      lst_apy_data: {
        payload: Prisma.$lst_apy_dataPayload<ExtArgs>
        fields: Prisma.lst_apy_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lst_apy_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_apy_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lst_apy_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_apy_dataPayload>
          }
          findFirst: {
            args: Prisma.lst_apy_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_apy_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lst_apy_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_apy_dataPayload>
          }
          findMany: {
            args: Prisma.lst_apy_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_apy_dataPayload>[]
          }
          create: {
            args: Prisma.lst_apy_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_apy_dataPayload>
          }
          createMany: {
            args: Prisma.lst_apy_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lst_apy_dataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_apy_dataPayload>[]
          }
          delete: {
            args: Prisma.lst_apy_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_apy_dataPayload>
          }
          update: {
            args: Prisma.lst_apy_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_apy_dataPayload>
          }
          deleteMany: {
            args: Prisma.lst_apy_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lst_apy_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lst_apy_dataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_apy_dataPayload>[]
          }
          upsert: {
            args: Prisma.lst_apy_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_apy_dataPayload>
          }
          aggregate: {
            args: Prisma.Lst_apy_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLst_apy_data>
          }
          groupBy: {
            args: Prisma.lst_apy_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lst_apy_dataGroupByOutputType>[]
          }
          count: {
            args: Prisma.lst_apy_dataCountArgs<ExtArgs>
            result: $Utils.Optional<Lst_apy_dataCountAggregateOutputType> | number
          }
        }
      }
      lst_holder_data: {
        payload: Prisma.$lst_holder_dataPayload<ExtArgs>
        fields: Prisma.lst_holder_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lst_holder_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_holder_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lst_holder_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_holder_dataPayload>
          }
          findFirst: {
            args: Prisma.lst_holder_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_holder_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lst_holder_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_holder_dataPayload>
          }
          findMany: {
            args: Prisma.lst_holder_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_holder_dataPayload>[]
          }
          create: {
            args: Prisma.lst_holder_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_holder_dataPayload>
          }
          createMany: {
            args: Prisma.lst_holder_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lst_holder_dataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_holder_dataPayload>[]
          }
          delete: {
            args: Prisma.lst_holder_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_holder_dataPayload>
          }
          update: {
            args: Prisma.lst_holder_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_holder_dataPayload>
          }
          deleteMany: {
            args: Prisma.lst_holder_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lst_holder_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lst_holder_dataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_holder_dataPayload>[]
          }
          upsert: {
            args: Prisma.lst_holder_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_holder_dataPayload>
          }
          aggregate: {
            args: Prisma.Lst_holder_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLst_holder_data>
          }
          groupBy: {
            args: Prisma.lst_holder_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lst_holder_dataGroupByOutputType>[]
          }
          count: {
            args: Prisma.lst_holder_dataCountArgs<ExtArgs>
            result: $Utils.Optional<Lst_holder_dataCountAggregateOutputType> | number
          }
        }
      }
      lst_strategy: {
        payload: Prisma.$lst_strategyPayload<ExtArgs>
        fields: Prisma.lst_strategyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lst_strategyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_strategyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lst_strategyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_strategyPayload>
          }
          findFirst: {
            args: Prisma.lst_strategyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_strategyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lst_strategyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_strategyPayload>
          }
          findMany: {
            args: Prisma.lst_strategyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_strategyPayload>[]
          }
          create: {
            args: Prisma.lst_strategyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_strategyPayload>
          }
          createMany: {
            args: Prisma.lst_strategyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lst_strategyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_strategyPayload>[]
          }
          delete: {
            args: Prisma.lst_strategyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_strategyPayload>
          }
          update: {
            args: Prisma.lst_strategyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_strategyPayload>
          }
          deleteMany: {
            args: Prisma.lst_strategyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lst_strategyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lst_strategyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_strategyPayload>[]
          }
          upsert: {
            args: Prisma.lst_strategyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_strategyPayload>
          }
          aggregate: {
            args: Prisma.Lst_strategyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLst_strategy>
          }
          groupBy: {
            args: Prisma.lst_strategyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lst_strategyGroupByOutputType>[]
          }
          count: {
            args: Prisma.lst_strategyCountArgs<ExtArgs>
            result: $Utils.Optional<Lst_strategyCountAggregateOutputType> | number
          }
        }
      }
      lst_tokens: {
        payload: Prisma.$lst_tokensPayload<ExtArgs>
        fields: Prisma.lst_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lst_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lst_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tokensPayload>
          }
          findFirst: {
            args: Prisma.lst_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lst_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tokensPayload>
          }
          findMany: {
            args: Prisma.lst_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tokensPayload>[]
          }
          create: {
            args: Prisma.lst_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tokensPayload>
          }
          createMany: {
            args: Prisma.lst_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lst_tokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tokensPayload>[]
          }
          delete: {
            args: Prisma.lst_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tokensPayload>
          }
          update: {
            args: Prisma.lst_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tokensPayload>
          }
          deleteMany: {
            args: Prisma.lst_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lst_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lst_tokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tokensPayload>[]
          }
          upsert: {
            args: Prisma.lst_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tokensPayload>
          }
          aggregate: {
            args: Prisma.Lst_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLst_tokens>
          }
          groupBy: {
            args: Prisma.lst_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lst_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.lst_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Lst_tokensCountAggregateOutputType> | number
          }
        }
      }
      lst_tvl_data: {
        payload: Prisma.$lst_tvl_dataPayload<ExtArgs>
        fields: Prisma.lst_tvl_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lst_tvl_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tvl_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lst_tvl_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tvl_dataPayload>
          }
          findFirst: {
            args: Prisma.lst_tvl_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tvl_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lst_tvl_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tvl_dataPayload>
          }
          findMany: {
            args: Prisma.lst_tvl_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tvl_dataPayload>[]
          }
          create: {
            args: Prisma.lst_tvl_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tvl_dataPayload>
          }
          createMany: {
            args: Prisma.lst_tvl_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lst_tvl_dataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tvl_dataPayload>[]
          }
          delete: {
            args: Prisma.lst_tvl_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tvl_dataPayload>
          }
          update: {
            args: Prisma.lst_tvl_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tvl_dataPayload>
          }
          deleteMany: {
            args: Prisma.lst_tvl_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lst_tvl_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lst_tvl_dataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tvl_dataPayload>[]
          }
          upsert: {
            args: Prisma.lst_tvl_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lst_tvl_dataPayload>
          }
          aggregate: {
            args: Prisma.Lst_tvl_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLst_tvl_data>
          }
          groupBy: {
            args: Prisma.lst_tvl_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lst_tvl_dataGroupByOutputType>[]
          }
          count: {
            args: Prisma.lst_tvl_dataCountArgs<ExtArgs>
            result: $Utils.Optional<Lst_tvl_dataCountAggregateOutputType> | number
          }
        }
      }
      user_snapshots: {
        payload: Prisma.$user_snapshotsPayload<ExtArgs>
        fields: Prisma.user_snapshotsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_snapshotsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_snapshotsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_snapshotsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_snapshotsPayload>
          }
          findFirst: {
            args: Prisma.user_snapshotsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_snapshotsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_snapshotsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_snapshotsPayload>
          }
          findMany: {
            args: Prisma.user_snapshotsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_snapshotsPayload>[]
          }
          create: {
            args: Prisma.user_snapshotsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_snapshotsPayload>
          }
          createMany: {
            args: Prisma.user_snapshotsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_snapshotsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_snapshotsPayload>[]
          }
          delete: {
            args: Prisma.user_snapshotsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_snapshotsPayload>
          }
          update: {
            args: Prisma.user_snapshotsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_snapshotsPayload>
          }
          deleteMany: {
            args: Prisma.user_snapshotsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_snapshotsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_snapshotsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_snapshotsPayload>[]
          }
          upsert: {
            args: Prisma.user_snapshotsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_snapshotsPayload>
          }
          aggregate: {
            args: Prisma.User_snapshotsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_snapshots>
          }
          groupBy: {
            args: Prisma.user_snapshotsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_snapshotsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_snapshotsCountArgs<ExtArgs>
            result: $Utils.Optional<User_snapshotsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      withdrawals: {
        payload: Prisma.$withdrawalsPayload<ExtArgs>
        fields: Prisma.withdrawalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.withdrawalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.withdrawalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          findFirst: {
            args: Prisma.withdrawalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.withdrawalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          findMany: {
            args: Prisma.withdrawalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>[]
          }
          create: {
            args: Prisma.withdrawalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          createMany: {
            args: Prisma.withdrawalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.withdrawalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>[]
          }
          delete: {
            args: Prisma.withdrawalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          update: {
            args: Prisma.withdrawalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          deleteMany: {
            args: Prisma.withdrawalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.withdrawalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.withdrawalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>[]
          }
          upsert: {
            args: Prisma.withdrawalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$withdrawalsPayload>
          }
          aggregate: {
            args: Prisma.WithdrawalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawals>
          }
          groupBy: {
            args: Prisma.withdrawalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.withdrawalsCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    sqlx_migrations?: sqlx_migrationsOmit
    api_request_logs?: api_request_logsOmit
    deposits?: depositsOmit
    epoch_snapshots?: epoch_snapshotsOmit
    lst_apy_data?: lst_apy_dataOmit
    lst_holder_data?: lst_holder_dataOmit
    lst_strategy?: lst_strategyOmit
    lst_tokens?: lst_tokensOmit
    lst_tvl_data?: lst_tvl_dataOmit
    user_snapshots?: user_snapshotsOmit
    users?: usersOmit
    withdrawals?: withdrawalsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Epoch_snapshotsCountOutputType
   */

  export type Epoch_snapshotsCountOutputType = {
    user_snapshots: number
  }

  export type Epoch_snapshotsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_snapshots?: boolean | Epoch_snapshotsCountOutputTypeCountUser_snapshotsArgs
  }

  // Custom InputTypes
  /**
   * Epoch_snapshotsCountOutputType without action
   */
  export type Epoch_snapshotsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epoch_snapshotsCountOutputType
     */
    select?: Epoch_snapshotsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Epoch_snapshotsCountOutputType without action
   */
  export type Epoch_snapshotsCountOutputTypeCountUser_snapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_snapshotsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    deposits: number
    user_snapshots: number
    withdrawals: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposits?: boolean | UsersCountOutputTypeCountDepositsArgs
    user_snapshots?: boolean | UsersCountOutputTypeCountUser_snapshotsArgs
    withdrawals?: boolean | UsersCountOutputTypeCountWithdrawalsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: depositsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_snapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_snapshotsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model sqlx_migrations
   */

  export type AggregateSqlx_migrations = {
    _count: Sqlx_migrationsCountAggregateOutputType | null
    _avg: Sqlx_migrationsAvgAggregateOutputType | null
    _sum: Sqlx_migrationsSumAggregateOutputType | null
    _min: Sqlx_migrationsMinAggregateOutputType | null
    _max: Sqlx_migrationsMaxAggregateOutputType | null
  }

  export type Sqlx_migrationsAvgAggregateOutputType = {
    version: number | null
    execution_time: number | null
  }

  export type Sqlx_migrationsSumAggregateOutputType = {
    version: bigint | null
    execution_time: bigint | null
  }

  export type Sqlx_migrationsMinAggregateOutputType = {
    version: bigint | null
    description: string | null
    installed_on: Date | null
    success: boolean | null
    checksum: Uint8Array | null
    execution_time: bigint | null
  }

  export type Sqlx_migrationsMaxAggregateOutputType = {
    version: bigint | null
    description: string | null
    installed_on: Date | null
    success: boolean | null
    checksum: Uint8Array | null
    execution_time: bigint | null
  }

  export type Sqlx_migrationsCountAggregateOutputType = {
    version: number
    description: number
    installed_on: number
    success: number
    checksum: number
    execution_time: number
    _all: number
  }


  export type Sqlx_migrationsAvgAggregateInputType = {
    version?: true
    execution_time?: true
  }

  export type Sqlx_migrationsSumAggregateInputType = {
    version?: true
    execution_time?: true
  }

  export type Sqlx_migrationsMinAggregateInputType = {
    version?: true
    description?: true
    installed_on?: true
    success?: true
    checksum?: true
    execution_time?: true
  }

  export type Sqlx_migrationsMaxAggregateInputType = {
    version?: true
    description?: true
    installed_on?: true
    success?: true
    checksum?: true
    execution_time?: true
  }

  export type Sqlx_migrationsCountAggregateInputType = {
    version?: true
    description?: true
    installed_on?: true
    success?: true
    checksum?: true
    execution_time?: true
    _all?: true
  }

  export type Sqlx_migrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sqlx_migrations to aggregate.
     */
    where?: sqlx_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sqlx_migrations to fetch.
     */
    orderBy?: sqlx_migrationsOrderByWithRelationInput | sqlx_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sqlx_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sqlx_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sqlx_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sqlx_migrations
    **/
    _count?: true | Sqlx_migrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sqlx_migrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sqlx_migrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sqlx_migrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sqlx_migrationsMaxAggregateInputType
  }

  export type GetSqlx_migrationsAggregateType<T extends Sqlx_migrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateSqlx_migrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSqlx_migrations[P]>
      : GetScalarType<T[P], AggregateSqlx_migrations[P]>
  }




  export type sqlx_migrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sqlx_migrationsWhereInput
    orderBy?: sqlx_migrationsOrderByWithAggregationInput | sqlx_migrationsOrderByWithAggregationInput[]
    by: Sqlx_migrationsScalarFieldEnum[] | Sqlx_migrationsScalarFieldEnum
    having?: sqlx_migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sqlx_migrationsCountAggregateInputType | true
    _avg?: Sqlx_migrationsAvgAggregateInputType
    _sum?: Sqlx_migrationsSumAggregateInputType
    _min?: Sqlx_migrationsMinAggregateInputType
    _max?: Sqlx_migrationsMaxAggregateInputType
  }

  export type Sqlx_migrationsGroupByOutputType = {
    version: bigint
    description: string
    installed_on: Date
    success: boolean
    checksum: Uint8Array
    execution_time: bigint
    _count: Sqlx_migrationsCountAggregateOutputType | null
    _avg: Sqlx_migrationsAvgAggregateOutputType | null
    _sum: Sqlx_migrationsSumAggregateOutputType | null
    _min: Sqlx_migrationsMinAggregateOutputType | null
    _max: Sqlx_migrationsMaxAggregateOutputType | null
  }

  type GetSqlx_migrationsGroupByPayload<T extends sqlx_migrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sqlx_migrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sqlx_migrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sqlx_migrationsGroupByOutputType[P]>
            : GetScalarType<T[P], Sqlx_migrationsGroupByOutputType[P]>
        }
      >
    >


  export type sqlx_migrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version?: boolean
    description?: boolean
    installed_on?: boolean
    success?: boolean
    checksum?: boolean
    execution_time?: boolean
  }, ExtArgs["result"]["sqlx_migrations"]>

  export type sqlx_migrationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version?: boolean
    description?: boolean
    installed_on?: boolean
    success?: boolean
    checksum?: boolean
    execution_time?: boolean
  }, ExtArgs["result"]["sqlx_migrations"]>

  export type sqlx_migrationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    version?: boolean
    description?: boolean
    installed_on?: boolean
    success?: boolean
    checksum?: boolean
    execution_time?: boolean
  }, ExtArgs["result"]["sqlx_migrations"]>

  export type sqlx_migrationsSelectScalar = {
    version?: boolean
    description?: boolean
    installed_on?: boolean
    success?: boolean
    checksum?: boolean
    execution_time?: boolean
  }

  export type sqlx_migrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"version" | "description" | "installed_on" | "success" | "checksum" | "execution_time", ExtArgs["result"]["sqlx_migrations"]>

  export type $sqlx_migrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sqlx_migrations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      version: bigint
      description: string
      installed_on: Date
      success: boolean
      checksum: Uint8Array
      execution_time: bigint
    }, ExtArgs["result"]["sqlx_migrations"]>
    composites: {}
  }

  type sqlx_migrationsGetPayload<S extends boolean | null | undefined | sqlx_migrationsDefaultArgs> = $Result.GetResult<Prisma.$sqlx_migrationsPayload, S>

  type sqlx_migrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sqlx_migrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sqlx_migrationsCountAggregateInputType | true
    }

  export interface sqlx_migrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sqlx_migrations'], meta: { name: 'sqlx_migrations' } }
    /**
     * Find zero or one Sqlx_migrations that matches the filter.
     * @param {sqlx_migrationsFindUniqueArgs} args - Arguments to find a Sqlx_migrations
     * @example
     * // Get one Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sqlx_migrationsFindUniqueArgs>(args: SelectSubset<T, sqlx_migrationsFindUniqueArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sqlx_migrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sqlx_migrationsFindUniqueOrThrowArgs} args - Arguments to find a Sqlx_migrations
     * @example
     * // Get one Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sqlx_migrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, sqlx_migrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sqlx_migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sqlx_migrationsFindFirstArgs} args - Arguments to find a Sqlx_migrations
     * @example
     * // Get one Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sqlx_migrationsFindFirstArgs>(args?: SelectSubset<T, sqlx_migrationsFindFirstArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sqlx_migrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sqlx_migrationsFindFirstOrThrowArgs} args - Arguments to find a Sqlx_migrations
     * @example
     * // Get one Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sqlx_migrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, sqlx_migrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sqlx_migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sqlx_migrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.findMany()
     * 
     * // Get first 10 Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.findMany({ take: 10 })
     * 
     * // Only select the `version`
     * const sqlx_migrationsWithVersionOnly = await prisma.sqlx_migrations.findMany({ select: { version: true } })
     * 
     */
    findMany<T extends sqlx_migrationsFindManyArgs>(args?: SelectSubset<T, sqlx_migrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sqlx_migrations.
     * @param {sqlx_migrationsCreateArgs} args - Arguments to create a Sqlx_migrations.
     * @example
     * // Create one Sqlx_migrations
     * const Sqlx_migrations = await prisma.sqlx_migrations.create({
     *   data: {
     *     // ... data to create a Sqlx_migrations
     *   }
     * })
     * 
     */
    create<T extends sqlx_migrationsCreateArgs>(args: SelectSubset<T, sqlx_migrationsCreateArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sqlx_migrations.
     * @param {sqlx_migrationsCreateManyArgs} args - Arguments to create many Sqlx_migrations.
     * @example
     * // Create many Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sqlx_migrationsCreateManyArgs>(args?: SelectSubset<T, sqlx_migrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sqlx_migrations and returns the data saved in the database.
     * @param {sqlx_migrationsCreateManyAndReturnArgs} args - Arguments to create many Sqlx_migrations.
     * @example
     * // Create many Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sqlx_migrations and only return the `version`
     * const sqlx_migrationsWithVersionOnly = await prisma.sqlx_migrations.createManyAndReturn({
     *   select: { version: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sqlx_migrationsCreateManyAndReturnArgs>(args?: SelectSubset<T, sqlx_migrationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sqlx_migrations.
     * @param {sqlx_migrationsDeleteArgs} args - Arguments to delete one Sqlx_migrations.
     * @example
     * // Delete one Sqlx_migrations
     * const Sqlx_migrations = await prisma.sqlx_migrations.delete({
     *   where: {
     *     // ... filter to delete one Sqlx_migrations
     *   }
     * })
     * 
     */
    delete<T extends sqlx_migrationsDeleteArgs>(args: SelectSubset<T, sqlx_migrationsDeleteArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sqlx_migrations.
     * @param {sqlx_migrationsUpdateArgs} args - Arguments to update one Sqlx_migrations.
     * @example
     * // Update one Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sqlx_migrationsUpdateArgs>(args: SelectSubset<T, sqlx_migrationsUpdateArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sqlx_migrations.
     * @param {sqlx_migrationsDeleteManyArgs} args - Arguments to filter Sqlx_migrations to delete.
     * @example
     * // Delete a few Sqlx_migrations
     * const { count } = await prisma.sqlx_migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sqlx_migrationsDeleteManyArgs>(args?: SelectSubset<T, sqlx_migrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sqlx_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sqlx_migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sqlx_migrationsUpdateManyArgs>(args: SelectSubset<T, sqlx_migrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sqlx_migrations and returns the data updated in the database.
     * @param {sqlx_migrationsUpdateManyAndReturnArgs} args - Arguments to update many Sqlx_migrations.
     * @example
     * // Update many Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sqlx_migrations and only return the `version`
     * const sqlx_migrationsWithVersionOnly = await prisma.sqlx_migrations.updateManyAndReturn({
     *   select: { version: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sqlx_migrationsUpdateManyAndReturnArgs>(args: SelectSubset<T, sqlx_migrationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sqlx_migrations.
     * @param {sqlx_migrationsUpsertArgs} args - Arguments to update or create a Sqlx_migrations.
     * @example
     * // Update or create a Sqlx_migrations
     * const sqlx_migrations = await prisma.sqlx_migrations.upsert({
     *   create: {
     *     // ... data to create a Sqlx_migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sqlx_migrations we want to update
     *   }
     * })
     */
    upsert<T extends sqlx_migrationsUpsertArgs>(args: SelectSubset<T, sqlx_migrationsUpsertArgs<ExtArgs>>): Prisma__sqlx_migrationsClient<$Result.GetResult<Prisma.$sqlx_migrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sqlx_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sqlx_migrationsCountArgs} args - Arguments to filter Sqlx_migrations to count.
     * @example
     * // Count the number of Sqlx_migrations
     * const count = await prisma.sqlx_migrations.count({
     *   where: {
     *     // ... the filter for the Sqlx_migrations we want to count
     *   }
     * })
    **/
    count<T extends sqlx_migrationsCountArgs>(
      args?: Subset<T, sqlx_migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sqlx_migrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sqlx_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sqlx_migrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sqlx_migrationsAggregateArgs>(args: Subset<T, Sqlx_migrationsAggregateArgs>): Prisma.PrismaPromise<GetSqlx_migrationsAggregateType<T>>

    /**
     * Group by Sqlx_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sqlx_migrationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sqlx_migrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sqlx_migrationsGroupByArgs['orderBy'] }
        : { orderBy?: sqlx_migrationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sqlx_migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSqlx_migrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sqlx_migrations model
   */
  readonly fields: sqlx_migrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sqlx_migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sqlx_migrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sqlx_migrations model
   */
  interface sqlx_migrationsFieldRefs {
    readonly version: FieldRef<"sqlx_migrations", 'BigInt'>
    readonly description: FieldRef<"sqlx_migrations", 'String'>
    readonly installed_on: FieldRef<"sqlx_migrations", 'DateTime'>
    readonly success: FieldRef<"sqlx_migrations", 'Boolean'>
    readonly checksum: FieldRef<"sqlx_migrations", 'Bytes'>
    readonly execution_time: FieldRef<"sqlx_migrations", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * sqlx_migrations findUnique
   */
  export type sqlx_migrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * Filter, which sqlx_migrations to fetch.
     */
    where: sqlx_migrationsWhereUniqueInput
  }

  /**
   * sqlx_migrations findUniqueOrThrow
   */
  export type sqlx_migrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * Filter, which sqlx_migrations to fetch.
     */
    where: sqlx_migrationsWhereUniqueInput
  }

  /**
   * sqlx_migrations findFirst
   */
  export type sqlx_migrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * Filter, which sqlx_migrations to fetch.
     */
    where?: sqlx_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sqlx_migrations to fetch.
     */
    orderBy?: sqlx_migrationsOrderByWithRelationInput | sqlx_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sqlx_migrations.
     */
    cursor?: sqlx_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sqlx_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sqlx_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sqlx_migrations.
     */
    distinct?: Sqlx_migrationsScalarFieldEnum | Sqlx_migrationsScalarFieldEnum[]
  }

  /**
   * sqlx_migrations findFirstOrThrow
   */
  export type sqlx_migrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * Filter, which sqlx_migrations to fetch.
     */
    where?: sqlx_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sqlx_migrations to fetch.
     */
    orderBy?: sqlx_migrationsOrderByWithRelationInput | sqlx_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sqlx_migrations.
     */
    cursor?: sqlx_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sqlx_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sqlx_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sqlx_migrations.
     */
    distinct?: Sqlx_migrationsScalarFieldEnum | Sqlx_migrationsScalarFieldEnum[]
  }

  /**
   * sqlx_migrations findMany
   */
  export type sqlx_migrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * Filter, which sqlx_migrations to fetch.
     */
    where?: sqlx_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sqlx_migrations to fetch.
     */
    orderBy?: sqlx_migrationsOrderByWithRelationInput | sqlx_migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sqlx_migrations.
     */
    cursor?: sqlx_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sqlx_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sqlx_migrations.
     */
    skip?: number
    distinct?: Sqlx_migrationsScalarFieldEnum | Sqlx_migrationsScalarFieldEnum[]
  }

  /**
   * sqlx_migrations create
   */
  export type sqlx_migrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * The data needed to create a sqlx_migrations.
     */
    data: XOR<sqlx_migrationsCreateInput, sqlx_migrationsUncheckedCreateInput>
  }

  /**
   * sqlx_migrations createMany
   */
  export type sqlx_migrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sqlx_migrations.
     */
    data: sqlx_migrationsCreateManyInput | sqlx_migrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sqlx_migrations createManyAndReturn
   */
  export type sqlx_migrationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * The data used to create many sqlx_migrations.
     */
    data: sqlx_migrationsCreateManyInput | sqlx_migrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sqlx_migrations update
   */
  export type sqlx_migrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * The data needed to update a sqlx_migrations.
     */
    data: XOR<sqlx_migrationsUpdateInput, sqlx_migrationsUncheckedUpdateInput>
    /**
     * Choose, which sqlx_migrations to update.
     */
    where: sqlx_migrationsWhereUniqueInput
  }

  /**
   * sqlx_migrations updateMany
   */
  export type sqlx_migrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sqlx_migrations.
     */
    data: XOR<sqlx_migrationsUpdateManyMutationInput, sqlx_migrationsUncheckedUpdateManyInput>
    /**
     * Filter which sqlx_migrations to update
     */
    where?: sqlx_migrationsWhereInput
    /**
     * Limit how many sqlx_migrations to update.
     */
    limit?: number
  }

  /**
   * sqlx_migrations updateManyAndReturn
   */
  export type sqlx_migrationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * The data used to update sqlx_migrations.
     */
    data: XOR<sqlx_migrationsUpdateManyMutationInput, sqlx_migrationsUncheckedUpdateManyInput>
    /**
     * Filter which sqlx_migrations to update
     */
    where?: sqlx_migrationsWhereInput
    /**
     * Limit how many sqlx_migrations to update.
     */
    limit?: number
  }

  /**
   * sqlx_migrations upsert
   */
  export type sqlx_migrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * The filter to search for the sqlx_migrations to update in case it exists.
     */
    where: sqlx_migrationsWhereUniqueInput
    /**
     * In case the sqlx_migrations found by the `where` argument doesn't exist, create a new sqlx_migrations with this data.
     */
    create: XOR<sqlx_migrationsCreateInput, sqlx_migrationsUncheckedCreateInput>
    /**
     * In case the sqlx_migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sqlx_migrationsUpdateInput, sqlx_migrationsUncheckedUpdateInput>
  }

  /**
   * sqlx_migrations delete
   */
  export type sqlx_migrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
    /**
     * Filter which sqlx_migrations to delete.
     */
    where: sqlx_migrationsWhereUniqueInput
  }

  /**
   * sqlx_migrations deleteMany
   */
  export type sqlx_migrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sqlx_migrations to delete
     */
    where?: sqlx_migrationsWhereInput
    /**
     * Limit how many sqlx_migrations to delete.
     */
    limit?: number
  }

  /**
   * sqlx_migrations without action
   */
  export type sqlx_migrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sqlx_migrations
     */
    select?: sqlx_migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sqlx_migrations
     */
    omit?: sqlx_migrationsOmit<ExtArgs> | null
  }


  /**
   * Model api_request_logs
   */

  export type AggregateApi_request_logs = {
    _count: Api_request_logsCountAggregateOutputType | null
    _avg: Api_request_logsAvgAggregateOutputType | null
    _sum: Api_request_logsSumAggregateOutputType | null
    _min: Api_request_logsMinAggregateOutputType | null
    _max: Api_request_logsMaxAggregateOutputType | null
  }

  export type Api_request_logsAvgAggregateOutputType = {
    response_time_ms: number | null
    retry_count: number | null
  }

  export type Api_request_logsSumAggregateOutputType = {
    response_time_ms: number | null
    retry_count: number | null
  }

  export type Api_request_logsMinAggregateOutputType = {
    id: string | null
    endpoint: string | null
    lst_symbol: string | null
    request_status: string | null
    response_time_ms: number | null
    error_message: string | null
    retry_count: number | null
    created_at: Date | null
  }

  export type Api_request_logsMaxAggregateOutputType = {
    id: string | null
    endpoint: string | null
    lst_symbol: string | null
    request_status: string | null
    response_time_ms: number | null
    error_message: string | null
    retry_count: number | null
    created_at: Date | null
  }

  export type Api_request_logsCountAggregateOutputType = {
    id: number
    endpoint: number
    lst_symbol: number
    request_status: number
    response_time_ms: number
    error_message: number
    retry_count: number
    created_at: number
    _all: number
  }


  export type Api_request_logsAvgAggregateInputType = {
    response_time_ms?: true
    retry_count?: true
  }

  export type Api_request_logsSumAggregateInputType = {
    response_time_ms?: true
    retry_count?: true
  }

  export type Api_request_logsMinAggregateInputType = {
    id?: true
    endpoint?: true
    lst_symbol?: true
    request_status?: true
    response_time_ms?: true
    error_message?: true
    retry_count?: true
    created_at?: true
  }

  export type Api_request_logsMaxAggregateInputType = {
    id?: true
    endpoint?: true
    lst_symbol?: true
    request_status?: true
    response_time_ms?: true
    error_message?: true
    retry_count?: true
    created_at?: true
  }

  export type Api_request_logsCountAggregateInputType = {
    id?: true
    endpoint?: true
    lst_symbol?: true
    request_status?: true
    response_time_ms?: true
    error_message?: true
    retry_count?: true
    created_at?: true
    _all?: true
  }

  export type Api_request_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_request_logs to aggregate.
     */
    where?: api_request_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_request_logs to fetch.
     */
    orderBy?: api_request_logsOrderByWithRelationInput | api_request_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: api_request_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_request_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_request_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned api_request_logs
    **/
    _count?: true | Api_request_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Api_request_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Api_request_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Api_request_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Api_request_logsMaxAggregateInputType
  }

  export type GetApi_request_logsAggregateType<T extends Api_request_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateApi_request_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi_request_logs[P]>
      : GetScalarType<T[P], AggregateApi_request_logs[P]>
  }




  export type api_request_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: api_request_logsWhereInput
    orderBy?: api_request_logsOrderByWithAggregationInput | api_request_logsOrderByWithAggregationInput[]
    by: Api_request_logsScalarFieldEnum[] | Api_request_logsScalarFieldEnum
    having?: api_request_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Api_request_logsCountAggregateInputType | true
    _avg?: Api_request_logsAvgAggregateInputType
    _sum?: Api_request_logsSumAggregateInputType
    _min?: Api_request_logsMinAggregateInputType
    _max?: Api_request_logsMaxAggregateInputType
  }

  export type Api_request_logsGroupByOutputType = {
    id: string
    endpoint: string
    lst_symbol: string | null
    request_status: string
    response_time_ms: number | null
    error_message: string | null
    retry_count: number | null
    created_at: Date
    _count: Api_request_logsCountAggregateOutputType | null
    _avg: Api_request_logsAvgAggregateOutputType | null
    _sum: Api_request_logsSumAggregateOutputType | null
    _min: Api_request_logsMinAggregateOutputType | null
    _max: Api_request_logsMaxAggregateOutputType | null
  }

  type GetApi_request_logsGroupByPayload<T extends api_request_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Api_request_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Api_request_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Api_request_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Api_request_logsGroupByOutputType[P]>
        }
      >
    >


  export type api_request_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpoint?: boolean
    lst_symbol?: boolean
    request_status?: boolean
    response_time_ms?: boolean
    error_message?: boolean
    retry_count?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["api_request_logs"]>

  export type api_request_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpoint?: boolean
    lst_symbol?: boolean
    request_status?: boolean
    response_time_ms?: boolean
    error_message?: boolean
    retry_count?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["api_request_logs"]>

  export type api_request_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpoint?: boolean
    lst_symbol?: boolean
    request_status?: boolean
    response_time_ms?: boolean
    error_message?: boolean
    retry_count?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["api_request_logs"]>

  export type api_request_logsSelectScalar = {
    id?: boolean
    endpoint?: boolean
    lst_symbol?: boolean
    request_status?: boolean
    response_time_ms?: boolean
    error_message?: boolean
    retry_count?: boolean
    created_at?: boolean
  }

  export type api_request_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "endpoint" | "lst_symbol" | "request_status" | "response_time_ms" | "error_message" | "retry_count" | "created_at", ExtArgs["result"]["api_request_logs"]>

  export type $api_request_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "api_request_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      endpoint: string
      lst_symbol: string | null
      request_status: string
      response_time_ms: number | null
      error_message: string | null
      retry_count: number | null
      created_at: Date
    }, ExtArgs["result"]["api_request_logs"]>
    composites: {}
  }

  type api_request_logsGetPayload<S extends boolean | null | undefined | api_request_logsDefaultArgs> = $Result.GetResult<Prisma.$api_request_logsPayload, S>

  type api_request_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<api_request_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Api_request_logsCountAggregateInputType | true
    }

  export interface api_request_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['api_request_logs'], meta: { name: 'api_request_logs' } }
    /**
     * Find zero or one Api_request_logs that matches the filter.
     * @param {api_request_logsFindUniqueArgs} args - Arguments to find a Api_request_logs
     * @example
     * // Get one Api_request_logs
     * const api_request_logs = await prisma.api_request_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends api_request_logsFindUniqueArgs>(args: SelectSubset<T, api_request_logsFindUniqueArgs<ExtArgs>>): Prisma__api_request_logsClient<$Result.GetResult<Prisma.$api_request_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Api_request_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {api_request_logsFindUniqueOrThrowArgs} args - Arguments to find a Api_request_logs
     * @example
     * // Get one Api_request_logs
     * const api_request_logs = await prisma.api_request_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends api_request_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, api_request_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__api_request_logsClient<$Result.GetResult<Prisma.$api_request_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_request_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_request_logsFindFirstArgs} args - Arguments to find a Api_request_logs
     * @example
     * // Get one Api_request_logs
     * const api_request_logs = await prisma.api_request_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends api_request_logsFindFirstArgs>(args?: SelectSubset<T, api_request_logsFindFirstArgs<ExtArgs>>): Prisma__api_request_logsClient<$Result.GetResult<Prisma.$api_request_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_request_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_request_logsFindFirstOrThrowArgs} args - Arguments to find a Api_request_logs
     * @example
     * // Get one Api_request_logs
     * const api_request_logs = await prisma.api_request_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends api_request_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, api_request_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__api_request_logsClient<$Result.GetResult<Prisma.$api_request_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Api_request_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_request_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Api_request_logs
     * const api_request_logs = await prisma.api_request_logs.findMany()
     * 
     * // Get first 10 Api_request_logs
     * const api_request_logs = await prisma.api_request_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const api_request_logsWithIdOnly = await prisma.api_request_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends api_request_logsFindManyArgs>(args?: SelectSubset<T, api_request_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_request_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Api_request_logs.
     * @param {api_request_logsCreateArgs} args - Arguments to create a Api_request_logs.
     * @example
     * // Create one Api_request_logs
     * const Api_request_logs = await prisma.api_request_logs.create({
     *   data: {
     *     // ... data to create a Api_request_logs
     *   }
     * })
     * 
     */
    create<T extends api_request_logsCreateArgs>(args: SelectSubset<T, api_request_logsCreateArgs<ExtArgs>>): Prisma__api_request_logsClient<$Result.GetResult<Prisma.$api_request_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Api_request_logs.
     * @param {api_request_logsCreateManyArgs} args - Arguments to create many Api_request_logs.
     * @example
     * // Create many Api_request_logs
     * const api_request_logs = await prisma.api_request_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends api_request_logsCreateManyArgs>(args?: SelectSubset<T, api_request_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Api_request_logs and returns the data saved in the database.
     * @param {api_request_logsCreateManyAndReturnArgs} args - Arguments to create many Api_request_logs.
     * @example
     * // Create many Api_request_logs
     * const api_request_logs = await prisma.api_request_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Api_request_logs and only return the `id`
     * const api_request_logsWithIdOnly = await prisma.api_request_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends api_request_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, api_request_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_request_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Api_request_logs.
     * @param {api_request_logsDeleteArgs} args - Arguments to delete one Api_request_logs.
     * @example
     * // Delete one Api_request_logs
     * const Api_request_logs = await prisma.api_request_logs.delete({
     *   where: {
     *     // ... filter to delete one Api_request_logs
     *   }
     * })
     * 
     */
    delete<T extends api_request_logsDeleteArgs>(args: SelectSubset<T, api_request_logsDeleteArgs<ExtArgs>>): Prisma__api_request_logsClient<$Result.GetResult<Prisma.$api_request_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Api_request_logs.
     * @param {api_request_logsUpdateArgs} args - Arguments to update one Api_request_logs.
     * @example
     * // Update one Api_request_logs
     * const api_request_logs = await prisma.api_request_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends api_request_logsUpdateArgs>(args: SelectSubset<T, api_request_logsUpdateArgs<ExtArgs>>): Prisma__api_request_logsClient<$Result.GetResult<Prisma.$api_request_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Api_request_logs.
     * @param {api_request_logsDeleteManyArgs} args - Arguments to filter Api_request_logs to delete.
     * @example
     * // Delete a few Api_request_logs
     * const { count } = await prisma.api_request_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends api_request_logsDeleteManyArgs>(args?: SelectSubset<T, api_request_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_request_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_request_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Api_request_logs
     * const api_request_logs = await prisma.api_request_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends api_request_logsUpdateManyArgs>(args: SelectSubset<T, api_request_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_request_logs and returns the data updated in the database.
     * @param {api_request_logsUpdateManyAndReturnArgs} args - Arguments to update many Api_request_logs.
     * @example
     * // Update many Api_request_logs
     * const api_request_logs = await prisma.api_request_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Api_request_logs and only return the `id`
     * const api_request_logsWithIdOnly = await prisma.api_request_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends api_request_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, api_request_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_request_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Api_request_logs.
     * @param {api_request_logsUpsertArgs} args - Arguments to update or create a Api_request_logs.
     * @example
     * // Update or create a Api_request_logs
     * const api_request_logs = await prisma.api_request_logs.upsert({
     *   create: {
     *     // ... data to create a Api_request_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api_request_logs we want to update
     *   }
     * })
     */
    upsert<T extends api_request_logsUpsertArgs>(args: SelectSubset<T, api_request_logsUpsertArgs<ExtArgs>>): Prisma__api_request_logsClient<$Result.GetResult<Prisma.$api_request_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Api_request_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_request_logsCountArgs} args - Arguments to filter Api_request_logs to count.
     * @example
     * // Count the number of Api_request_logs
     * const count = await prisma.api_request_logs.count({
     *   where: {
     *     // ... the filter for the Api_request_logs we want to count
     *   }
     * })
    **/
    count<T extends api_request_logsCountArgs>(
      args?: Subset<T, api_request_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Api_request_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api_request_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_request_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Api_request_logsAggregateArgs>(args: Subset<T, Api_request_logsAggregateArgs>): Prisma.PrismaPromise<GetApi_request_logsAggregateType<T>>

    /**
     * Group by Api_request_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_request_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends api_request_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: api_request_logsGroupByArgs['orderBy'] }
        : { orderBy?: api_request_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, api_request_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApi_request_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the api_request_logs model
   */
  readonly fields: api_request_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for api_request_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__api_request_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the api_request_logs model
   */
  interface api_request_logsFieldRefs {
    readonly id: FieldRef<"api_request_logs", 'String'>
    readonly endpoint: FieldRef<"api_request_logs", 'String'>
    readonly lst_symbol: FieldRef<"api_request_logs", 'String'>
    readonly request_status: FieldRef<"api_request_logs", 'String'>
    readonly response_time_ms: FieldRef<"api_request_logs", 'Int'>
    readonly error_message: FieldRef<"api_request_logs", 'String'>
    readonly retry_count: FieldRef<"api_request_logs", 'Int'>
    readonly created_at: FieldRef<"api_request_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * api_request_logs findUnique
   */
  export type api_request_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_request_logs
     */
    select?: api_request_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_request_logs
     */
    omit?: api_request_logsOmit<ExtArgs> | null
    /**
     * Filter, which api_request_logs to fetch.
     */
    where: api_request_logsWhereUniqueInput
  }

  /**
   * api_request_logs findUniqueOrThrow
   */
  export type api_request_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_request_logs
     */
    select?: api_request_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_request_logs
     */
    omit?: api_request_logsOmit<ExtArgs> | null
    /**
     * Filter, which api_request_logs to fetch.
     */
    where: api_request_logsWhereUniqueInput
  }

  /**
   * api_request_logs findFirst
   */
  export type api_request_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_request_logs
     */
    select?: api_request_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_request_logs
     */
    omit?: api_request_logsOmit<ExtArgs> | null
    /**
     * Filter, which api_request_logs to fetch.
     */
    where?: api_request_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_request_logs to fetch.
     */
    orderBy?: api_request_logsOrderByWithRelationInput | api_request_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_request_logs.
     */
    cursor?: api_request_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_request_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_request_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_request_logs.
     */
    distinct?: Api_request_logsScalarFieldEnum | Api_request_logsScalarFieldEnum[]
  }

  /**
   * api_request_logs findFirstOrThrow
   */
  export type api_request_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_request_logs
     */
    select?: api_request_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_request_logs
     */
    omit?: api_request_logsOmit<ExtArgs> | null
    /**
     * Filter, which api_request_logs to fetch.
     */
    where?: api_request_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_request_logs to fetch.
     */
    orderBy?: api_request_logsOrderByWithRelationInput | api_request_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_request_logs.
     */
    cursor?: api_request_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_request_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_request_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_request_logs.
     */
    distinct?: Api_request_logsScalarFieldEnum | Api_request_logsScalarFieldEnum[]
  }

  /**
   * api_request_logs findMany
   */
  export type api_request_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_request_logs
     */
    select?: api_request_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_request_logs
     */
    omit?: api_request_logsOmit<ExtArgs> | null
    /**
     * Filter, which api_request_logs to fetch.
     */
    where?: api_request_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_request_logs to fetch.
     */
    orderBy?: api_request_logsOrderByWithRelationInput | api_request_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing api_request_logs.
     */
    cursor?: api_request_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_request_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_request_logs.
     */
    skip?: number
    distinct?: Api_request_logsScalarFieldEnum | Api_request_logsScalarFieldEnum[]
  }

  /**
   * api_request_logs create
   */
  export type api_request_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_request_logs
     */
    select?: api_request_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_request_logs
     */
    omit?: api_request_logsOmit<ExtArgs> | null
    /**
     * The data needed to create a api_request_logs.
     */
    data: XOR<api_request_logsCreateInput, api_request_logsUncheckedCreateInput>
  }

  /**
   * api_request_logs createMany
   */
  export type api_request_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many api_request_logs.
     */
    data: api_request_logsCreateManyInput | api_request_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * api_request_logs createManyAndReturn
   */
  export type api_request_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_request_logs
     */
    select?: api_request_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the api_request_logs
     */
    omit?: api_request_logsOmit<ExtArgs> | null
    /**
     * The data used to create many api_request_logs.
     */
    data: api_request_logsCreateManyInput | api_request_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * api_request_logs update
   */
  export type api_request_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_request_logs
     */
    select?: api_request_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_request_logs
     */
    omit?: api_request_logsOmit<ExtArgs> | null
    /**
     * The data needed to update a api_request_logs.
     */
    data: XOR<api_request_logsUpdateInput, api_request_logsUncheckedUpdateInput>
    /**
     * Choose, which api_request_logs to update.
     */
    where: api_request_logsWhereUniqueInput
  }

  /**
   * api_request_logs updateMany
   */
  export type api_request_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update api_request_logs.
     */
    data: XOR<api_request_logsUpdateManyMutationInput, api_request_logsUncheckedUpdateManyInput>
    /**
     * Filter which api_request_logs to update
     */
    where?: api_request_logsWhereInput
    /**
     * Limit how many api_request_logs to update.
     */
    limit?: number
  }

  /**
   * api_request_logs updateManyAndReturn
   */
  export type api_request_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_request_logs
     */
    select?: api_request_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the api_request_logs
     */
    omit?: api_request_logsOmit<ExtArgs> | null
    /**
     * The data used to update api_request_logs.
     */
    data: XOR<api_request_logsUpdateManyMutationInput, api_request_logsUncheckedUpdateManyInput>
    /**
     * Filter which api_request_logs to update
     */
    where?: api_request_logsWhereInput
    /**
     * Limit how many api_request_logs to update.
     */
    limit?: number
  }

  /**
   * api_request_logs upsert
   */
  export type api_request_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_request_logs
     */
    select?: api_request_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_request_logs
     */
    omit?: api_request_logsOmit<ExtArgs> | null
    /**
     * The filter to search for the api_request_logs to update in case it exists.
     */
    where: api_request_logsWhereUniqueInput
    /**
     * In case the api_request_logs found by the `where` argument doesn't exist, create a new api_request_logs with this data.
     */
    create: XOR<api_request_logsCreateInput, api_request_logsUncheckedCreateInput>
    /**
     * In case the api_request_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<api_request_logsUpdateInput, api_request_logsUncheckedUpdateInput>
  }

  /**
   * api_request_logs delete
   */
  export type api_request_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_request_logs
     */
    select?: api_request_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_request_logs
     */
    omit?: api_request_logsOmit<ExtArgs> | null
    /**
     * Filter which api_request_logs to delete.
     */
    where: api_request_logsWhereUniqueInput
  }

  /**
   * api_request_logs deleteMany
   */
  export type api_request_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_request_logs to delete
     */
    where?: api_request_logsWhereInput
    /**
     * Limit how many api_request_logs to delete.
     */
    limit?: number
  }

  /**
   * api_request_logs without action
   */
  export type api_request_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_request_logs
     */
    select?: api_request_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_request_logs
     */
    omit?: api_request_logsOmit<ExtArgs> | null
  }


  /**
   * Model deposits
   */

  export type AggregateDeposits = {
    _count: DepositsCountAggregateOutputType | null
    _avg: DepositsAvgAggregateOutputType | null
    _sum: DepositsSumAggregateOutputType | null
    _min: DepositsMinAggregateOutputType | null
    _max: DepositsMaxAggregateOutputType | null
  }

  export type DepositsAvgAggregateOutputType = {
    amount_sol: Decimal | null
  }

  export type DepositsSumAggregateOutputType = {
    amount_sol: Decimal | null
  }

  export type DepositsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    amount_sol: Decimal | null
    type: string | null
    source_chain: string | null
    tx_hash: string | null
    deposited_at: Date | null
  }

  export type DepositsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    amount_sol: Decimal | null
    type: string | null
    source_chain: string | null
    tx_hash: string | null
    deposited_at: Date | null
  }

  export type DepositsCountAggregateOutputType = {
    id: number
    user_id: number
    amount_sol: number
    type: number
    source_chain: number
    tx_hash: number
    deposited_at: number
    _all: number
  }


  export type DepositsAvgAggregateInputType = {
    amount_sol?: true
  }

  export type DepositsSumAggregateInputType = {
    amount_sol?: true
  }

  export type DepositsMinAggregateInputType = {
    id?: true
    user_id?: true
    amount_sol?: true
    type?: true
    source_chain?: true
    tx_hash?: true
    deposited_at?: true
  }

  export type DepositsMaxAggregateInputType = {
    id?: true
    user_id?: true
    amount_sol?: true
    type?: true
    source_chain?: true
    tx_hash?: true
    deposited_at?: true
  }

  export type DepositsCountAggregateInputType = {
    id?: true
    user_id?: true
    amount_sol?: true
    type?: true
    source_chain?: true
    tx_hash?: true
    deposited_at?: true
    _all?: true
  }

  export type DepositsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deposits to aggregate.
     */
    where?: depositsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deposits to fetch.
     */
    orderBy?: depositsOrderByWithRelationInput | depositsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: depositsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned deposits
    **/
    _count?: true | DepositsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositsMaxAggregateInputType
  }

  export type GetDepositsAggregateType<T extends DepositsAggregateArgs> = {
        [P in keyof T & keyof AggregateDeposits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeposits[P]>
      : GetScalarType<T[P], AggregateDeposits[P]>
  }




  export type depositsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: depositsWhereInput
    orderBy?: depositsOrderByWithAggregationInput | depositsOrderByWithAggregationInput[]
    by: DepositsScalarFieldEnum[] | DepositsScalarFieldEnum
    having?: depositsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositsCountAggregateInputType | true
    _avg?: DepositsAvgAggregateInputType
    _sum?: DepositsSumAggregateInputType
    _min?: DepositsMinAggregateInputType
    _max?: DepositsMaxAggregateInputType
  }

  export type DepositsGroupByOutputType = {
    id: string
    user_id: string
    amount_sol: Decimal
    type: string
    source_chain: string
    tx_hash: string
    deposited_at: Date
    _count: DepositsCountAggregateOutputType | null
    _avg: DepositsAvgAggregateOutputType | null
    _sum: DepositsSumAggregateOutputType | null
    _min: DepositsMinAggregateOutputType | null
    _max: DepositsMaxAggregateOutputType | null
  }

  type GetDepositsGroupByPayload<T extends depositsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositsGroupByOutputType[P]>
            : GetScalarType<T[P], DepositsGroupByOutputType[P]>
        }
      >
    >


  export type depositsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount_sol?: boolean
    type?: boolean
    source_chain?: boolean
    tx_hash?: boolean
    deposited_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposits"]>

  export type depositsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount_sol?: boolean
    type?: boolean
    source_chain?: boolean
    tx_hash?: boolean
    deposited_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposits"]>

  export type depositsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount_sol?: boolean
    type?: boolean
    source_chain?: boolean
    tx_hash?: boolean
    deposited_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposits"]>

  export type depositsSelectScalar = {
    id?: boolean
    user_id?: boolean
    amount_sol?: boolean
    type?: boolean
    source_chain?: boolean
    tx_hash?: boolean
    deposited_at?: boolean
  }

  export type depositsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "amount_sol" | "type" | "source_chain" | "tx_hash" | "deposited_at", ExtArgs["result"]["deposits"]>
  export type depositsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type depositsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type depositsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $depositsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "deposits"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      amount_sol: Prisma.Decimal
      type: string
      source_chain: string
      tx_hash: string
      deposited_at: Date
    }, ExtArgs["result"]["deposits"]>
    composites: {}
  }

  type depositsGetPayload<S extends boolean | null | undefined | depositsDefaultArgs> = $Result.GetResult<Prisma.$depositsPayload, S>

  type depositsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<depositsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepositsCountAggregateInputType | true
    }

  export interface depositsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['deposits'], meta: { name: 'deposits' } }
    /**
     * Find zero or one Deposits that matches the filter.
     * @param {depositsFindUniqueArgs} args - Arguments to find a Deposits
     * @example
     * // Get one Deposits
     * const deposits = await prisma.deposits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends depositsFindUniqueArgs>(args: SelectSubset<T, depositsFindUniqueArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deposits that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {depositsFindUniqueOrThrowArgs} args - Arguments to find a Deposits
     * @example
     * // Get one Deposits
     * const deposits = await prisma.deposits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends depositsFindUniqueOrThrowArgs>(args: SelectSubset<T, depositsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositsFindFirstArgs} args - Arguments to find a Deposits
     * @example
     * // Get one Deposits
     * const deposits = await prisma.deposits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends depositsFindFirstArgs>(args?: SelectSubset<T, depositsFindFirstArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositsFindFirstOrThrowArgs} args - Arguments to find a Deposits
     * @example
     * // Get one Deposits
     * const deposits = await prisma.deposits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends depositsFindFirstOrThrowArgs>(args?: SelectSubset<T, depositsFindFirstOrThrowArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deposits
     * const deposits = await prisma.deposits.findMany()
     * 
     * // Get first 10 Deposits
     * const deposits = await prisma.deposits.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositsWithIdOnly = await prisma.deposits.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends depositsFindManyArgs>(args?: SelectSubset<T, depositsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deposits.
     * @param {depositsCreateArgs} args - Arguments to create a Deposits.
     * @example
     * // Create one Deposits
     * const Deposits = await prisma.deposits.create({
     *   data: {
     *     // ... data to create a Deposits
     *   }
     * })
     * 
     */
    create<T extends depositsCreateArgs>(args: SelectSubset<T, depositsCreateArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deposits.
     * @param {depositsCreateManyArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposits = await prisma.deposits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends depositsCreateManyArgs>(args?: SelectSubset<T, depositsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deposits and returns the data saved in the database.
     * @param {depositsCreateManyAndReturnArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposits = await prisma.deposits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deposits and only return the `id`
     * const depositsWithIdOnly = await prisma.deposits.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends depositsCreateManyAndReturnArgs>(args?: SelectSubset<T, depositsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deposits.
     * @param {depositsDeleteArgs} args - Arguments to delete one Deposits.
     * @example
     * // Delete one Deposits
     * const Deposits = await prisma.deposits.delete({
     *   where: {
     *     // ... filter to delete one Deposits
     *   }
     * })
     * 
     */
    delete<T extends depositsDeleteArgs>(args: SelectSubset<T, depositsDeleteArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deposits.
     * @param {depositsUpdateArgs} args - Arguments to update one Deposits.
     * @example
     * // Update one Deposits
     * const deposits = await prisma.deposits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends depositsUpdateArgs>(args: SelectSubset<T, depositsUpdateArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deposits.
     * @param {depositsDeleteManyArgs} args - Arguments to filter Deposits to delete.
     * @example
     * // Delete a few Deposits
     * const { count } = await prisma.deposits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends depositsDeleteManyArgs>(args?: SelectSubset<T, depositsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deposits
     * const deposits = await prisma.deposits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends depositsUpdateManyArgs>(args: SelectSubset<T, depositsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits and returns the data updated in the database.
     * @param {depositsUpdateManyAndReturnArgs} args - Arguments to update many Deposits.
     * @example
     * // Update many Deposits
     * const deposits = await prisma.deposits.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deposits and only return the `id`
     * const depositsWithIdOnly = await prisma.deposits.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends depositsUpdateManyAndReturnArgs>(args: SelectSubset<T, depositsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deposits.
     * @param {depositsUpsertArgs} args - Arguments to update or create a Deposits.
     * @example
     * // Update or create a Deposits
     * const deposits = await prisma.deposits.upsert({
     *   create: {
     *     // ... data to create a Deposits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deposits we want to update
     *   }
     * })
     */
    upsert<T extends depositsUpsertArgs>(args: SelectSubset<T, depositsUpsertArgs<ExtArgs>>): Prisma__depositsClient<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositsCountArgs} args - Arguments to filter Deposits to count.
     * @example
     * // Count the number of Deposits
     * const count = await prisma.deposits.count({
     *   where: {
     *     // ... the filter for the Deposits we want to count
     *   }
     * })
    **/
    count<T extends depositsCountArgs>(
      args?: Subset<T, depositsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepositsAggregateArgs>(args: Subset<T, DepositsAggregateArgs>): Prisma.PrismaPromise<GetDepositsAggregateType<T>>

    /**
     * Group by Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {depositsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends depositsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: depositsGroupByArgs['orderBy'] }
        : { orderBy?: depositsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, depositsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the deposits model
   */
  readonly fields: depositsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for deposits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__depositsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the deposits model
   */
  interface depositsFieldRefs {
    readonly id: FieldRef<"deposits", 'String'>
    readonly user_id: FieldRef<"deposits", 'String'>
    readonly amount_sol: FieldRef<"deposits", 'Decimal'>
    readonly type: FieldRef<"deposits", 'String'>
    readonly source_chain: FieldRef<"deposits", 'String'>
    readonly tx_hash: FieldRef<"deposits", 'String'>
    readonly deposited_at: FieldRef<"deposits", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * deposits findUnique
   */
  export type depositsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * Filter, which deposits to fetch.
     */
    where: depositsWhereUniqueInput
  }

  /**
   * deposits findUniqueOrThrow
   */
  export type depositsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * Filter, which deposits to fetch.
     */
    where: depositsWhereUniqueInput
  }

  /**
   * deposits findFirst
   */
  export type depositsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * Filter, which deposits to fetch.
     */
    where?: depositsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deposits to fetch.
     */
    orderBy?: depositsOrderByWithRelationInput | depositsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deposits.
     */
    cursor?: depositsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deposits.
     */
    distinct?: DepositsScalarFieldEnum | DepositsScalarFieldEnum[]
  }

  /**
   * deposits findFirstOrThrow
   */
  export type depositsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * Filter, which deposits to fetch.
     */
    where?: depositsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deposits to fetch.
     */
    orderBy?: depositsOrderByWithRelationInput | depositsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deposits.
     */
    cursor?: depositsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deposits.
     */
    distinct?: DepositsScalarFieldEnum | DepositsScalarFieldEnum[]
  }

  /**
   * deposits findMany
   */
  export type depositsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * Filter, which deposits to fetch.
     */
    where?: depositsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deposits to fetch.
     */
    orderBy?: depositsOrderByWithRelationInput | depositsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing deposits.
     */
    cursor?: depositsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deposits.
     */
    skip?: number
    distinct?: DepositsScalarFieldEnum | DepositsScalarFieldEnum[]
  }

  /**
   * deposits create
   */
  export type depositsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * The data needed to create a deposits.
     */
    data: XOR<depositsCreateInput, depositsUncheckedCreateInput>
  }

  /**
   * deposits createMany
   */
  export type depositsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many deposits.
     */
    data: depositsCreateManyInput | depositsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * deposits createManyAndReturn
   */
  export type depositsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * The data used to create many deposits.
     */
    data: depositsCreateManyInput | depositsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * deposits update
   */
  export type depositsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * The data needed to update a deposits.
     */
    data: XOR<depositsUpdateInput, depositsUncheckedUpdateInput>
    /**
     * Choose, which deposits to update.
     */
    where: depositsWhereUniqueInput
  }

  /**
   * deposits updateMany
   */
  export type depositsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update deposits.
     */
    data: XOR<depositsUpdateManyMutationInput, depositsUncheckedUpdateManyInput>
    /**
     * Filter which deposits to update
     */
    where?: depositsWhereInput
    /**
     * Limit how many deposits to update.
     */
    limit?: number
  }

  /**
   * deposits updateManyAndReturn
   */
  export type depositsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * The data used to update deposits.
     */
    data: XOR<depositsUpdateManyMutationInput, depositsUncheckedUpdateManyInput>
    /**
     * Filter which deposits to update
     */
    where?: depositsWhereInput
    /**
     * Limit how many deposits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * deposits upsert
   */
  export type depositsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * The filter to search for the deposits to update in case it exists.
     */
    where: depositsWhereUniqueInput
    /**
     * In case the deposits found by the `where` argument doesn't exist, create a new deposits with this data.
     */
    create: XOR<depositsCreateInput, depositsUncheckedCreateInput>
    /**
     * In case the deposits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<depositsUpdateInput, depositsUncheckedUpdateInput>
  }

  /**
   * deposits delete
   */
  export type depositsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    /**
     * Filter which deposits to delete.
     */
    where: depositsWhereUniqueInput
  }

  /**
   * deposits deleteMany
   */
  export type depositsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deposits to delete
     */
    where?: depositsWhereInput
    /**
     * Limit how many deposits to delete.
     */
    limit?: number
  }

  /**
   * deposits without action
   */
  export type depositsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
  }


  /**
   * Model epoch_snapshots
   */

  export type AggregateEpoch_snapshots = {
    _count: Epoch_snapshotsCountAggregateOutputType | null
    _avg: Epoch_snapshotsAvgAggregateOutputType | null
    _sum: Epoch_snapshotsSumAggregateOutputType | null
    _min: Epoch_snapshotsMinAggregateOutputType | null
    _max: Epoch_snapshotsMaxAggregateOutputType | null
  }

  export type Epoch_snapshotsAvgAggregateOutputType = {
    epoch: number | null
  }

  export type Epoch_snapshotsSumAggregateOutputType = {
    epoch: number | null
  }

  export type Epoch_snapshotsMinAggregateOutputType = {
    id: string | null
    epoch: number | null
    snapshot_time: Date | null
  }

  export type Epoch_snapshotsMaxAggregateOutputType = {
    id: string | null
    epoch: number | null
    snapshot_time: Date | null
  }

  export type Epoch_snapshotsCountAggregateOutputType = {
    id: number
    epoch: number
    snapshot_time: number
    _all: number
  }


  export type Epoch_snapshotsAvgAggregateInputType = {
    epoch?: true
  }

  export type Epoch_snapshotsSumAggregateInputType = {
    epoch?: true
  }

  export type Epoch_snapshotsMinAggregateInputType = {
    id?: true
    epoch?: true
    snapshot_time?: true
  }

  export type Epoch_snapshotsMaxAggregateInputType = {
    id?: true
    epoch?: true
    snapshot_time?: true
  }

  export type Epoch_snapshotsCountAggregateInputType = {
    id?: true
    epoch?: true
    snapshot_time?: true
    _all?: true
  }

  export type Epoch_snapshotsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which epoch_snapshots to aggregate.
     */
    where?: epoch_snapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of epoch_snapshots to fetch.
     */
    orderBy?: epoch_snapshotsOrderByWithRelationInput | epoch_snapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: epoch_snapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` epoch_snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` epoch_snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned epoch_snapshots
    **/
    _count?: true | Epoch_snapshotsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Epoch_snapshotsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Epoch_snapshotsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Epoch_snapshotsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Epoch_snapshotsMaxAggregateInputType
  }

  export type GetEpoch_snapshotsAggregateType<T extends Epoch_snapshotsAggregateArgs> = {
        [P in keyof T & keyof AggregateEpoch_snapshots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpoch_snapshots[P]>
      : GetScalarType<T[P], AggregateEpoch_snapshots[P]>
  }




  export type epoch_snapshotsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: epoch_snapshotsWhereInput
    orderBy?: epoch_snapshotsOrderByWithAggregationInput | epoch_snapshotsOrderByWithAggregationInput[]
    by: Epoch_snapshotsScalarFieldEnum[] | Epoch_snapshotsScalarFieldEnum
    having?: epoch_snapshotsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Epoch_snapshotsCountAggregateInputType | true
    _avg?: Epoch_snapshotsAvgAggregateInputType
    _sum?: Epoch_snapshotsSumAggregateInputType
    _min?: Epoch_snapshotsMinAggregateInputType
    _max?: Epoch_snapshotsMaxAggregateInputType
  }

  export type Epoch_snapshotsGroupByOutputType = {
    id: string
    epoch: number
    snapshot_time: Date
    _count: Epoch_snapshotsCountAggregateOutputType | null
    _avg: Epoch_snapshotsAvgAggregateOutputType | null
    _sum: Epoch_snapshotsSumAggregateOutputType | null
    _min: Epoch_snapshotsMinAggregateOutputType | null
    _max: Epoch_snapshotsMaxAggregateOutputType | null
  }

  type GetEpoch_snapshotsGroupByPayload<T extends epoch_snapshotsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Epoch_snapshotsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Epoch_snapshotsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Epoch_snapshotsGroupByOutputType[P]>
            : GetScalarType<T[P], Epoch_snapshotsGroupByOutputType[P]>
        }
      >
    >


  export type epoch_snapshotsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epoch?: boolean
    snapshot_time?: boolean
    lst_strategy?: boolean | epoch_snapshots$lst_strategyArgs<ExtArgs>
    user_snapshots?: boolean | epoch_snapshots$user_snapshotsArgs<ExtArgs>
    _count?: boolean | Epoch_snapshotsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epoch_snapshots"]>

  export type epoch_snapshotsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epoch?: boolean
    snapshot_time?: boolean
  }, ExtArgs["result"]["epoch_snapshots"]>

  export type epoch_snapshotsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epoch?: boolean
    snapshot_time?: boolean
  }, ExtArgs["result"]["epoch_snapshots"]>

  export type epoch_snapshotsSelectScalar = {
    id?: boolean
    epoch?: boolean
    snapshot_time?: boolean
  }

  export type epoch_snapshotsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "epoch" | "snapshot_time", ExtArgs["result"]["epoch_snapshots"]>
  export type epoch_snapshotsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lst_strategy?: boolean | epoch_snapshots$lst_strategyArgs<ExtArgs>
    user_snapshots?: boolean | epoch_snapshots$user_snapshotsArgs<ExtArgs>
    _count?: boolean | Epoch_snapshotsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type epoch_snapshotsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type epoch_snapshotsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $epoch_snapshotsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "epoch_snapshots"
    objects: {
      lst_strategy: Prisma.$lst_strategyPayload<ExtArgs> | null
      user_snapshots: Prisma.$user_snapshotsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      epoch: number
      snapshot_time: Date
    }, ExtArgs["result"]["epoch_snapshots"]>
    composites: {}
  }

  type epoch_snapshotsGetPayload<S extends boolean | null | undefined | epoch_snapshotsDefaultArgs> = $Result.GetResult<Prisma.$epoch_snapshotsPayload, S>

  type epoch_snapshotsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<epoch_snapshotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Epoch_snapshotsCountAggregateInputType | true
    }

  export interface epoch_snapshotsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['epoch_snapshots'], meta: { name: 'epoch_snapshots' } }
    /**
     * Find zero or one Epoch_snapshots that matches the filter.
     * @param {epoch_snapshotsFindUniqueArgs} args - Arguments to find a Epoch_snapshots
     * @example
     * // Get one Epoch_snapshots
     * const epoch_snapshots = await prisma.epoch_snapshots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends epoch_snapshotsFindUniqueArgs>(args: SelectSubset<T, epoch_snapshotsFindUniqueArgs<ExtArgs>>): Prisma__epoch_snapshotsClient<$Result.GetResult<Prisma.$epoch_snapshotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Epoch_snapshots that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {epoch_snapshotsFindUniqueOrThrowArgs} args - Arguments to find a Epoch_snapshots
     * @example
     * // Get one Epoch_snapshots
     * const epoch_snapshots = await prisma.epoch_snapshots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends epoch_snapshotsFindUniqueOrThrowArgs>(args: SelectSubset<T, epoch_snapshotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__epoch_snapshotsClient<$Result.GetResult<Prisma.$epoch_snapshotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Epoch_snapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {epoch_snapshotsFindFirstArgs} args - Arguments to find a Epoch_snapshots
     * @example
     * // Get one Epoch_snapshots
     * const epoch_snapshots = await prisma.epoch_snapshots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends epoch_snapshotsFindFirstArgs>(args?: SelectSubset<T, epoch_snapshotsFindFirstArgs<ExtArgs>>): Prisma__epoch_snapshotsClient<$Result.GetResult<Prisma.$epoch_snapshotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Epoch_snapshots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {epoch_snapshotsFindFirstOrThrowArgs} args - Arguments to find a Epoch_snapshots
     * @example
     * // Get one Epoch_snapshots
     * const epoch_snapshots = await prisma.epoch_snapshots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends epoch_snapshotsFindFirstOrThrowArgs>(args?: SelectSubset<T, epoch_snapshotsFindFirstOrThrowArgs<ExtArgs>>): Prisma__epoch_snapshotsClient<$Result.GetResult<Prisma.$epoch_snapshotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Epoch_snapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {epoch_snapshotsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Epoch_snapshots
     * const epoch_snapshots = await prisma.epoch_snapshots.findMany()
     * 
     * // Get first 10 Epoch_snapshots
     * const epoch_snapshots = await prisma.epoch_snapshots.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const epoch_snapshotsWithIdOnly = await prisma.epoch_snapshots.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends epoch_snapshotsFindManyArgs>(args?: SelectSubset<T, epoch_snapshotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$epoch_snapshotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Epoch_snapshots.
     * @param {epoch_snapshotsCreateArgs} args - Arguments to create a Epoch_snapshots.
     * @example
     * // Create one Epoch_snapshots
     * const Epoch_snapshots = await prisma.epoch_snapshots.create({
     *   data: {
     *     // ... data to create a Epoch_snapshots
     *   }
     * })
     * 
     */
    create<T extends epoch_snapshotsCreateArgs>(args: SelectSubset<T, epoch_snapshotsCreateArgs<ExtArgs>>): Prisma__epoch_snapshotsClient<$Result.GetResult<Prisma.$epoch_snapshotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Epoch_snapshots.
     * @param {epoch_snapshotsCreateManyArgs} args - Arguments to create many Epoch_snapshots.
     * @example
     * // Create many Epoch_snapshots
     * const epoch_snapshots = await prisma.epoch_snapshots.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends epoch_snapshotsCreateManyArgs>(args?: SelectSubset<T, epoch_snapshotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Epoch_snapshots and returns the data saved in the database.
     * @param {epoch_snapshotsCreateManyAndReturnArgs} args - Arguments to create many Epoch_snapshots.
     * @example
     * // Create many Epoch_snapshots
     * const epoch_snapshots = await prisma.epoch_snapshots.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Epoch_snapshots and only return the `id`
     * const epoch_snapshotsWithIdOnly = await prisma.epoch_snapshots.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends epoch_snapshotsCreateManyAndReturnArgs>(args?: SelectSubset<T, epoch_snapshotsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$epoch_snapshotsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Epoch_snapshots.
     * @param {epoch_snapshotsDeleteArgs} args - Arguments to delete one Epoch_snapshots.
     * @example
     * // Delete one Epoch_snapshots
     * const Epoch_snapshots = await prisma.epoch_snapshots.delete({
     *   where: {
     *     // ... filter to delete one Epoch_snapshots
     *   }
     * })
     * 
     */
    delete<T extends epoch_snapshotsDeleteArgs>(args: SelectSubset<T, epoch_snapshotsDeleteArgs<ExtArgs>>): Prisma__epoch_snapshotsClient<$Result.GetResult<Prisma.$epoch_snapshotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Epoch_snapshots.
     * @param {epoch_snapshotsUpdateArgs} args - Arguments to update one Epoch_snapshots.
     * @example
     * // Update one Epoch_snapshots
     * const epoch_snapshots = await prisma.epoch_snapshots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends epoch_snapshotsUpdateArgs>(args: SelectSubset<T, epoch_snapshotsUpdateArgs<ExtArgs>>): Prisma__epoch_snapshotsClient<$Result.GetResult<Prisma.$epoch_snapshotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Epoch_snapshots.
     * @param {epoch_snapshotsDeleteManyArgs} args - Arguments to filter Epoch_snapshots to delete.
     * @example
     * // Delete a few Epoch_snapshots
     * const { count } = await prisma.epoch_snapshots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends epoch_snapshotsDeleteManyArgs>(args?: SelectSubset<T, epoch_snapshotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Epoch_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {epoch_snapshotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Epoch_snapshots
     * const epoch_snapshots = await prisma.epoch_snapshots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends epoch_snapshotsUpdateManyArgs>(args: SelectSubset<T, epoch_snapshotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Epoch_snapshots and returns the data updated in the database.
     * @param {epoch_snapshotsUpdateManyAndReturnArgs} args - Arguments to update many Epoch_snapshots.
     * @example
     * // Update many Epoch_snapshots
     * const epoch_snapshots = await prisma.epoch_snapshots.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Epoch_snapshots and only return the `id`
     * const epoch_snapshotsWithIdOnly = await prisma.epoch_snapshots.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends epoch_snapshotsUpdateManyAndReturnArgs>(args: SelectSubset<T, epoch_snapshotsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$epoch_snapshotsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Epoch_snapshots.
     * @param {epoch_snapshotsUpsertArgs} args - Arguments to update or create a Epoch_snapshots.
     * @example
     * // Update or create a Epoch_snapshots
     * const epoch_snapshots = await prisma.epoch_snapshots.upsert({
     *   create: {
     *     // ... data to create a Epoch_snapshots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Epoch_snapshots we want to update
     *   }
     * })
     */
    upsert<T extends epoch_snapshotsUpsertArgs>(args: SelectSubset<T, epoch_snapshotsUpsertArgs<ExtArgs>>): Prisma__epoch_snapshotsClient<$Result.GetResult<Prisma.$epoch_snapshotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Epoch_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {epoch_snapshotsCountArgs} args - Arguments to filter Epoch_snapshots to count.
     * @example
     * // Count the number of Epoch_snapshots
     * const count = await prisma.epoch_snapshots.count({
     *   where: {
     *     // ... the filter for the Epoch_snapshots we want to count
     *   }
     * })
    **/
    count<T extends epoch_snapshotsCountArgs>(
      args?: Subset<T, epoch_snapshotsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Epoch_snapshotsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Epoch_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Epoch_snapshotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Epoch_snapshotsAggregateArgs>(args: Subset<T, Epoch_snapshotsAggregateArgs>): Prisma.PrismaPromise<GetEpoch_snapshotsAggregateType<T>>

    /**
     * Group by Epoch_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {epoch_snapshotsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends epoch_snapshotsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: epoch_snapshotsGroupByArgs['orderBy'] }
        : { orderBy?: epoch_snapshotsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, epoch_snapshotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpoch_snapshotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the epoch_snapshots model
   */
  readonly fields: epoch_snapshotsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for epoch_snapshots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__epoch_snapshotsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lst_strategy<T extends epoch_snapshots$lst_strategyArgs<ExtArgs> = {}>(args?: Subset<T, epoch_snapshots$lst_strategyArgs<ExtArgs>>): Prisma__lst_strategyClient<$Result.GetResult<Prisma.$lst_strategyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_snapshots<T extends epoch_snapshots$user_snapshotsArgs<ExtArgs> = {}>(args?: Subset<T, epoch_snapshots$user_snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_snapshotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the epoch_snapshots model
   */
  interface epoch_snapshotsFieldRefs {
    readonly id: FieldRef<"epoch_snapshots", 'String'>
    readonly epoch: FieldRef<"epoch_snapshots", 'Int'>
    readonly snapshot_time: FieldRef<"epoch_snapshots", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * epoch_snapshots findUnique
   */
  export type epoch_snapshotsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epoch_snapshots
     */
    select?: epoch_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the epoch_snapshots
     */
    omit?: epoch_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: epoch_snapshotsInclude<ExtArgs> | null
    /**
     * Filter, which epoch_snapshots to fetch.
     */
    where: epoch_snapshotsWhereUniqueInput
  }

  /**
   * epoch_snapshots findUniqueOrThrow
   */
  export type epoch_snapshotsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epoch_snapshots
     */
    select?: epoch_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the epoch_snapshots
     */
    omit?: epoch_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: epoch_snapshotsInclude<ExtArgs> | null
    /**
     * Filter, which epoch_snapshots to fetch.
     */
    where: epoch_snapshotsWhereUniqueInput
  }

  /**
   * epoch_snapshots findFirst
   */
  export type epoch_snapshotsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epoch_snapshots
     */
    select?: epoch_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the epoch_snapshots
     */
    omit?: epoch_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: epoch_snapshotsInclude<ExtArgs> | null
    /**
     * Filter, which epoch_snapshots to fetch.
     */
    where?: epoch_snapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of epoch_snapshots to fetch.
     */
    orderBy?: epoch_snapshotsOrderByWithRelationInput | epoch_snapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for epoch_snapshots.
     */
    cursor?: epoch_snapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` epoch_snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` epoch_snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of epoch_snapshots.
     */
    distinct?: Epoch_snapshotsScalarFieldEnum | Epoch_snapshotsScalarFieldEnum[]
  }

  /**
   * epoch_snapshots findFirstOrThrow
   */
  export type epoch_snapshotsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epoch_snapshots
     */
    select?: epoch_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the epoch_snapshots
     */
    omit?: epoch_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: epoch_snapshotsInclude<ExtArgs> | null
    /**
     * Filter, which epoch_snapshots to fetch.
     */
    where?: epoch_snapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of epoch_snapshots to fetch.
     */
    orderBy?: epoch_snapshotsOrderByWithRelationInput | epoch_snapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for epoch_snapshots.
     */
    cursor?: epoch_snapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` epoch_snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` epoch_snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of epoch_snapshots.
     */
    distinct?: Epoch_snapshotsScalarFieldEnum | Epoch_snapshotsScalarFieldEnum[]
  }

  /**
   * epoch_snapshots findMany
   */
  export type epoch_snapshotsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epoch_snapshots
     */
    select?: epoch_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the epoch_snapshots
     */
    omit?: epoch_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: epoch_snapshotsInclude<ExtArgs> | null
    /**
     * Filter, which epoch_snapshots to fetch.
     */
    where?: epoch_snapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of epoch_snapshots to fetch.
     */
    orderBy?: epoch_snapshotsOrderByWithRelationInput | epoch_snapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing epoch_snapshots.
     */
    cursor?: epoch_snapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` epoch_snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` epoch_snapshots.
     */
    skip?: number
    distinct?: Epoch_snapshotsScalarFieldEnum | Epoch_snapshotsScalarFieldEnum[]
  }

  /**
   * epoch_snapshots create
   */
  export type epoch_snapshotsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epoch_snapshots
     */
    select?: epoch_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the epoch_snapshots
     */
    omit?: epoch_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: epoch_snapshotsInclude<ExtArgs> | null
    /**
     * The data needed to create a epoch_snapshots.
     */
    data: XOR<epoch_snapshotsCreateInput, epoch_snapshotsUncheckedCreateInput>
  }

  /**
   * epoch_snapshots createMany
   */
  export type epoch_snapshotsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many epoch_snapshots.
     */
    data: epoch_snapshotsCreateManyInput | epoch_snapshotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * epoch_snapshots createManyAndReturn
   */
  export type epoch_snapshotsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epoch_snapshots
     */
    select?: epoch_snapshotsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the epoch_snapshots
     */
    omit?: epoch_snapshotsOmit<ExtArgs> | null
    /**
     * The data used to create many epoch_snapshots.
     */
    data: epoch_snapshotsCreateManyInput | epoch_snapshotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * epoch_snapshots update
   */
  export type epoch_snapshotsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epoch_snapshots
     */
    select?: epoch_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the epoch_snapshots
     */
    omit?: epoch_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: epoch_snapshotsInclude<ExtArgs> | null
    /**
     * The data needed to update a epoch_snapshots.
     */
    data: XOR<epoch_snapshotsUpdateInput, epoch_snapshotsUncheckedUpdateInput>
    /**
     * Choose, which epoch_snapshots to update.
     */
    where: epoch_snapshotsWhereUniqueInput
  }

  /**
   * epoch_snapshots updateMany
   */
  export type epoch_snapshotsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update epoch_snapshots.
     */
    data: XOR<epoch_snapshotsUpdateManyMutationInput, epoch_snapshotsUncheckedUpdateManyInput>
    /**
     * Filter which epoch_snapshots to update
     */
    where?: epoch_snapshotsWhereInput
    /**
     * Limit how many epoch_snapshots to update.
     */
    limit?: number
  }

  /**
   * epoch_snapshots updateManyAndReturn
   */
  export type epoch_snapshotsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epoch_snapshots
     */
    select?: epoch_snapshotsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the epoch_snapshots
     */
    omit?: epoch_snapshotsOmit<ExtArgs> | null
    /**
     * The data used to update epoch_snapshots.
     */
    data: XOR<epoch_snapshotsUpdateManyMutationInput, epoch_snapshotsUncheckedUpdateManyInput>
    /**
     * Filter which epoch_snapshots to update
     */
    where?: epoch_snapshotsWhereInput
    /**
     * Limit how many epoch_snapshots to update.
     */
    limit?: number
  }

  /**
   * epoch_snapshots upsert
   */
  export type epoch_snapshotsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epoch_snapshots
     */
    select?: epoch_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the epoch_snapshots
     */
    omit?: epoch_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: epoch_snapshotsInclude<ExtArgs> | null
    /**
     * The filter to search for the epoch_snapshots to update in case it exists.
     */
    where: epoch_snapshotsWhereUniqueInput
    /**
     * In case the epoch_snapshots found by the `where` argument doesn't exist, create a new epoch_snapshots with this data.
     */
    create: XOR<epoch_snapshotsCreateInput, epoch_snapshotsUncheckedCreateInput>
    /**
     * In case the epoch_snapshots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<epoch_snapshotsUpdateInput, epoch_snapshotsUncheckedUpdateInput>
  }

  /**
   * epoch_snapshots delete
   */
  export type epoch_snapshotsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epoch_snapshots
     */
    select?: epoch_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the epoch_snapshots
     */
    omit?: epoch_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: epoch_snapshotsInclude<ExtArgs> | null
    /**
     * Filter which epoch_snapshots to delete.
     */
    where: epoch_snapshotsWhereUniqueInput
  }

  /**
   * epoch_snapshots deleteMany
   */
  export type epoch_snapshotsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which epoch_snapshots to delete
     */
    where?: epoch_snapshotsWhereInput
    /**
     * Limit how many epoch_snapshots to delete.
     */
    limit?: number
  }

  /**
   * epoch_snapshots.lst_strategy
   */
  export type epoch_snapshots$lst_strategyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_strategy
     */
    select?: lst_strategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_strategy
     */
    omit?: lst_strategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lst_strategyInclude<ExtArgs> | null
    where?: lst_strategyWhereInput
  }

  /**
   * epoch_snapshots.user_snapshots
   */
  export type epoch_snapshots$user_snapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_snapshots
     */
    select?: user_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_snapshots
     */
    omit?: user_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_snapshotsInclude<ExtArgs> | null
    where?: user_snapshotsWhereInput
    orderBy?: user_snapshotsOrderByWithRelationInput | user_snapshotsOrderByWithRelationInput[]
    cursor?: user_snapshotsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_snapshotsScalarFieldEnum | User_snapshotsScalarFieldEnum[]
  }

  /**
   * epoch_snapshots without action
   */
  export type epoch_snapshotsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epoch_snapshots
     */
    select?: epoch_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the epoch_snapshots
     */
    omit?: epoch_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: epoch_snapshotsInclude<ExtArgs> | null
  }


  /**
   * Model lst_apy_data
   */

  export type AggregateLst_apy_data = {
    _count: Lst_apy_dataCountAggregateOutputType | null
    _avg: Lst_apy_dataAvgAggregateOutputType | null
    _sum: Lst_apy_dataSumAggregateOutputType | null
    _min: Lst_apy_dataMinAggregateOutputType | null
    _max: Lst_apy_dataMaxAggregateOutputType | null
  }

  export type Lst_apy_dataAvgAggregateOutputType = {
    apy_value: Decimal | null
  }

  export type Lst_apy_dataSumAggregateOutputType = {
    apy_value: Decimal | null
  }

  export type Lst_apy_dataMinAggregateOutputType = {
    id: string | null
    lst_symbol: string | null
    apy_type: string | null
    apy_value: Decimal | null
    collected_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Lst_apy_dataMaxAggregateOutputType = {
    id: string | null
    lst_symbol: string | null
    apy_type: string | null
    apy_value: Decimal | null
    collected_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Lst_apy_dataCountAggregateOutputType = {
    id: number
    lst_symbol: number
    apy_type: number
    apy_value: number
    collected_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Lst_apy_dataAvgAggregateInputType = {
    apy_value?: true
  }

  export type Lst_apy_dataSumAggregateInputType = {
    apy_value?: true
  }

  export type Lst_apy_dataMinAggregateInputType = {
    id?: true
    lst_symbol?: true
    apy_type?: true
    apy_value?: true
    collected_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Lst_apy_dataMaxAggregateInputType = {
    id?: true
    lst_symbol?: true
    apy_type?: true
    apy_value?: true
    collected_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Lst_apy_dataCountAggregateInputType = {
    id?: true
    lst_symbol?: true
    apy_type?: true
    apy_value?: true
    collected_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Lst_apy_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lst_apy_data to aggregate.
     */
    where?: lst_apy_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_apy_data to fetch.
     */
    orderBy?: lst_apy_dataOrderByWithRelationInput | lst_apy_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lst_apy_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_apy_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_apy_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lst_apy_data
    **/
    _count?: true | Lst_apy_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lst_apy_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lst_apy_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lst_apy_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lst_apy_dataMaxAggregateInputType
  }

  export type GetLst_apy_dataAggregateType<T extends Lst_apy_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateLst_apy_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLst_apy_data[P]>
      : GetScalarType<T[P], AggregateLst_apy_data[P]>
  }




  export type lst_apy_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lst_apy_dataWhereInput
    orderBy?: lst_apy_dataOrderByWithAggregationInput | lst_apy_dataOrderByWithAggregationInput[]
    by: Lst_apy_dataScalarFieldEnum[] | Lst_apy_dataScalarFieldEnum
    having?: lst_apy_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lst_apy_dataCountAggregateInputType | true
    _avg?: Lst_apy_dataAvgAggregateInputType
    _sum?: Lst_apy_dataSumAggregateInputType
    _min?: Lst_apy_dataMinAggregateInputType
    _max?: Lst_apy_dataMaxAggregateInputType
  }

  export type Lst_apy_dataGroupByOutputType = {
    id: string
    lst_symbol: string
    apy_type: string
    apy_value: Decimal
    collected_at: Date
    created_at: Date
    updated_at: Date
    _count: Lst_apy_dataCountAggregateOutputType | null
    _avg: Lst_apy_dataAvgAggregateOutputType | null
    _sum: Lst_apy_dataSumAggregateOutputType | null
    _min: Lst_apy_dataMinAggregateOutputType | null
    _max: Lst_apy_dataMaxAggregateOutputType | null
  }

  type GetLst_apy_dataGroupByPayload<T extends lst_apy_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lst_apy_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lst_apy_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lst_apy_dataGroupByOutputType[P]>
            : GetScalarType<T[P], Lst_apy_dataGroupByOutputType[P]>
        }
      >
    >


  export type lst_apy_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lst_symbol?: boolean
    apy_type?: boolean
    apy_value?: boolean
    collected_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["lst_apy_data"]>

  export type lst_apy_dataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lst_symbol?: boolean
    apy_type?: boolean
    apy_value?: boolean
    collected_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["lst_apy_data"]>

  export type lst_apy_dataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lst_symbol?: boolean
    apy_type?: boolean
    apy_value?: boolean
    collected_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["lst_apy_data"]>

  export type lst_apy_dataSelectScalar = {
    id?: boolean
    lst_symbol?: boolean
    apy_type?: boolean
    apy_value?: boolean
    collected_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type lst_apy_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lst_symbol" | "apy_type" | "apy_value" | "collected_at" | "created_at" | "updated_at", ExtArgs["result"]["lst_apy_data"]>

  export type $lst_apy_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lst_apy_data"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lst_symbol: string
      apy_type: string
      apy_value: Prisma.Decimal
      collected_at: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["lst_apy_data"]>
    composites: {}
  }

  type lst_apy_dataGetPayload<S extends boolean | null | undefined | lst_apy_dataDefaultArgs> = $Result.GetResult<Prisma.$lst_apy_dataPayload, S>

  type lst_apy_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lst_apy_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lst_apy_dataCountAggregateInputType | true
    }

  export interface lst_apy_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lst_apy_data'], meta: { name: 'lst_apy_data' } }
    /**
     * Find zero or one Lst_apy_data that matches the filter.
     * @param {lst_apy_dataFindUniqueArgs} args - Arguments to find a Lst_apy_data
     * @example
     * // Get one Lst_apy_data
     * const lst_apy_data = await prisma.lst_apy_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lst_apy_dataFindUniqueArgs>(args: SelectSubset<T, lst_apy_dataFindUniqueArgs<ExtArgs>>): Prisma__lst_apy_dataClient<$Result.GetResult<Prisma.$lst_apy_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lst_apy_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lst_apy_dataFindUniqueOrThrowArgs} args - Arguments to find a Lst_apy_data
     * @example
     * // Get one Lst_apy_data
     * const lst_apy_data = await prisma.lst_apy_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lst_apy_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, lst_apy_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lst_apy_dataClient<$Result.GetResult<Prisma.$lst_apy_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lst_apy_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_apy_dataFindFirstArgs} args - Arguments to find a Lst_apy_data
     * @example
     * // Get one Lst_apy_data
     * const lst_apy_data = await prisma.lst_apy_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lst_apy_dataFindFirstArgs>(args?: SelectSubset<T, lst_apy_dataFindFirstArgs<ExtArgs>>): Prisma__lst_apy_dataClient<$Result.GetResult<Prisma.$lst_apy_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lst_apy_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_apy_dataFindFirstOrThrowArgs} args - Arguments to find a Lst_apy_data
     * @example
     * // Get one Lst_apy_data
     * const lst_apy_data = await prisma.lst_apy_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lst_apy_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, lst_apy_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__lst_apy_dataClient<$Result.GetResult<Prisma.$lst_apy_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lst_apy_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_apy_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lst_apy_data
     * const lst_apy_data = await prisma.lst_apy_data.findMany()
     * 
     * // Get first 10 Lst_apy_data
     * const lst_apy_data = await prisma.lst_apy_data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lst_apy_dataWithIdOnly = await prisma.lst_apy_data.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lst_apy_dataFindManyArgs>(args?: SelectSubset<T, lst_apy_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lst_apy_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lst_apy_data.
     * @param {lst_apy_dataCreateArgs} args - Arguments to create a Lst_apy_data.
     * @example
     * // Create one Lst_apy_data
     * const Lst_apy_data = await prisma.lst_apy_data.create({
     *   data: {
     *     // ... data to create a Lst_apy_data
     *   }
     * })
     * 
     */
    create<T extends lst_apy_dataCreateArgs>(args: SelectSubset<T, lst_apy_dataCreateArgs<ExtArgs>>): Prisma__lst_apy_dataClient<$Result.GetResult<Prisma.$lst_apy_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lst_apy_data.
     * @param {lst_apy_dataCreateManyArgs} args - Arguments to create many Lst_apy_data.
     * @example
     * // Create many Lst_apy_data
     * const lst_apy_data = await prisma.lst_apy_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lst_apy_dataCreateManyArgs>(args?: SelectSubset<T, lst_apy_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lst_apy_data and returns the data saved in the database.
     * @param {lst_apy_dataCreateManyAndReturnArgs} args - Arguments to create many Lst_apy_data.
     * @example
     * // Create many Lst_apy_data
     * const lst_apy_data = await prisma.lst_apy_data.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lst_apy_data and only return the `id`
     * const lst_apy_dataWithIdOnly = await prisma.lst_apy_data.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lst_apy_dataCreateManyAndReturnArgs>(args?: SelectSubset<T, lst_apy_dataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lst_apy_dataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lst_apy_data.
     * @param {lst_apy_dataDeleteArgs} args - Arguments to delete one Lst_apy_data.
     * @example
     * // Delete one Lst_apy_data
     * const Lst_apy_data = await prisma.lst_apy_data.delete({
     *   where: {
     *     // ... filter to delete one Lst_apy_data
     *   }
     * })
     * 
     */
    delete<T extends lst_apy_dataDeleteArgs>(args: SelectSubset<T, lst_apy_dataDeleteArgs<ExtArgs>>): Prisma__lst_apy_dataClient<$Result.GetResult<Prisma.$lst_apy_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lst_apy_data.
     * @param {lst_apy_dataUpdateArgs} args - Arguments to update one Lst_apy_data.
     * @example
     * // Update one Lst_apy_data
     * const lst_apy_data = await prisma.lst_apy_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lst_apy_dataUpdateArgs>(args: SelectSubset<T, lst_apy_dataUpdateArgs<ExtArgs>>): Prisma__lst_apy_dataClient<$Result.GetResult<Prisma.$lst_apy_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lst_apy_data.
     * @param {lst_apy_dataDeleteManyArgs} args - Arguments to filter Lst_apy_data to delete.
     * @example
     * // Delete a few Lst_apy_data
     * const { count } = await prisma.lst_apy_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lst_apy_dataDeleteManyArgs>(args?: SelectSubset<T, lst_apy_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lst_apy_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_apy_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lst_apy_data
     * const lst_apy_data = await prisma.lst_apy_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lst_apy_dataUpdateManyArgs>(args: SelectSubset<T, lst_apy_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lst_apy_data and returns the data updated in the database.
     * @param {lst_apy_dataUpdateManyAndReturnArgs} args - Arguments to update many Lst_apy_data.
     * @example
     * // Update many Lst_apy_data
     * const lst_apy_data = await prisma.lst_apy_data.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lst_apy_data and only return the `id`
     * const lst_apy_dataWithIdOnly = await prisma.lst_apy_data.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends lst_apy_dataUpdateManyAndReturnArgs>(args: SelectSubset<T, lst_apy_dataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lst_apy_dataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lst_apy_data.
     * @param {lst_apy_dataUpsertArgs} args - Arguments to update or create a Lst_apy_data.
     * @example
     * // Update or create a Lst_apy_data
     * const lst_apy_data = await prisma.lst_apy_data.upsert({
     *   create: {
     *     // ... data to create a Lst_apy_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lst_apy_data we want to update
     *   }
     * })
     */
    upsert<T extends lst_apy_dataUpsertArgs>(args: SelectSubset<T, lst_apy_dataUpsertArgs<ExtArgs>>): Prisma__lst_apy_dataClient<$Result.GetResult<Prisma.$lst_apy_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lst_apy_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_apy_dataCountArgs} args - Arguments to filter Lst_apy_data to count.
     * @example
     * // Count the number of Lst_apy_data
     * const count = await prisma.lst_apy_data.count({
     *   where: {
     *     // ... the filter for the Lst_apy_data we want to count
     *   }
     * })
    **/
    count<T extends lst_apy_dataCountArgs>(
      args?: Subset<T, lst_apy_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lst_apy_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lst_apy_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lst_apy_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Lst_apy_dataAggregateArgs>(args: Subset<T, Lst_apy_dataAggregateArgs>): Prisma.PrismaPromise<GetLst_apy_dataAggregateType<T>>

    /**
     * Group by Lst_apy_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_apy_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends lst_apy_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lst_apy_dataGroupByArgs['orderBy'] }
        : { orderBy?: lst_apy_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, lst_apy_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLst_apy_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lst_apy_data model
   */
  readonly fields: lst_apy_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lst_apy_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lst_apy_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lst_apy_data model
   */
  interface lst_apy_dataFieldRefs {
    readonly id: FieldRef<"lst_apy_data", 'String'>
    readonly lst_symbol: FieldRef<"lst_apy_data", 'String'>
    readonly apy_type: FieldRef<"lst_apy_data", 'String'>
    readonly apy_value: FieldRef<"lst_apy_data", 'Decimal'>
    readonly collected_at: FieldRef<"lst_apy_data", 'DateTime'>
    readonly created_at: FieldRef<"lst_apy_data", 'DateTime'>
    readonly updated_at: FieldRef<"lst_apy_data", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * lst_apy_data findUnique
   */
  export type lst_apy_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_apy_data
     */
    select?: lst_apy_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_apy_data
     */
    omit?: lst_apy_dataOmit<ExtArgs> | null
    /**
     * Filter, which lst_apy_data to fetch.
     */
    where: lst_apy_dataWhereUniqueInput
  }

  /**
   * lst_apy_data findUniqueOrThrow
   */
  export type lst_apy_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_apy_data
     */
    select?: lst_apy_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_apy_data
     */
    omit?: lst_apy_dataOmit<ExtArgs> | null
    /**
     * Filter, which lst_apy_data to fetch.
     */
    where: lst_apy_dataWhereUniqueInput
  }

  /**
   * lst_apy_data findFirst
   */
  export type lst_apy_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_apy_data
     */
    select?: lst_apy_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_apy_data
     */
    omit?: lst_apy_dataOmit<ExtArgs> | null
    /**
     * Filter, which lst_apy_data to fetch.
     */
    where?: lst_apy_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_apy_data to fetch.
     */
    orderBy?: lst_apy_dataOrderByWithRelationInput | lst_apy_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lst_apy_data.
     */
    cursor?: lst_apy_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_apy_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_apy_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lst_apy_data.
     */
    distinct?: Lst_apy_dataScalarFieldEnum | Lst_apy_dataScalarFieldEnum[]
  }

  /**
   * lst_apy_data findFirstOrThrow
   */
  export type lst_apy_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_apy_data
     */
    select?: lst_apy_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_apy_data
     */
    omit?: lst_apy_dataOmit<ExtArgs> | null
    /**
     * Filter, which lst_apy_data to fetch.
     */
    where?: lst_apy_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_apy_data to fetch.
     */
    orderBy?: lst_apy_dataOrderByWithRelationInput | lst_apy_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lst_apy_data.
     */
    cursor?: lst_apy_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_apy_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_apy_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lst_apy_data.
     */
    distinct?: Lst_apy_dataScalarFieldEnum | Lst_apy_dataScalarFieldEnum[]
  }

  /**
   * lst_apy_data findMany
   */
  export type lst_apy_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_apy_data
     */
    select?: lst_apy_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_apy_data
     */
    omit?: lst_apy_dataOmit<ExtArgs> | null
    /**
     * Filter, which lst_apy_data to fetch.
     */
    where?: lst_apy_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_apy_data to fetch.
     */
    orderBy?: lst_apy_dataOrderByWithRelationInput | lst_apy_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lst_apy_data.
     */
    cursor?: lst_apy_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_apy_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_apy_data.
     */
    skip?: number
    distinct?: Lst_apy_dataScalarFieldEnum | Lst_apy_dataScalarFieldEnum[]
  }

  /**
   * lst_apy_data create
   */
  export type lst_apy_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_apy_data
     */
    select?: lst_apy_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_apy_data
     */
    omit?: lst_apy_dataOmit<ExtArgs> | null
    /**
     * The data needed to create a lst_apy_data.
     */
    data: XOR<lst_apy_dataCreateInput, lst_apy_dataUncheckedCreateInput>
  }

  /**
   * lst_apy_data createMany
   */
  export type lst_apy_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lst_apy_data.
     */
    data: lst_apy_dataCreateManyInput | lst_apy_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lst_apy_data createManyAndReturn
   */
  export type lst_apy_dataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_apy_data
     */
    select?: lst_apy_dataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lst_apy_data
     */
    omit?: lst_apy_dataOmit<ExtArgs> | null
    /**
     * The data used to create many lst_apy_data.
     */
    data: lst_apy_dataCreateManyInput | lst_apy_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lst_apy_data update
   */
  export type lst_apy_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_apy_data
     */
    select?: lst_apy_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_apy_data
     */
    omit?: lst_apy_dataOmit<ExtArgs> | null
    /**
     * The data needed to update a lst_apy_data.
     */
    data: XOR<lst_apy_dataUpdateInput, lst_apy_dataUncheckedUpdateInput>
    /**
     * Choose, which lst_apy_data to update.
     */
    where: lst_apy_dataWhereUniqueInput
  }

  /**
   * lst_apy_data updateMany
   */
  export type lst_apy_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lst_apy_data.
     */
    data: XOR<lst_apy_dataUpdateManyMutationInput, lst_apy_dataUncheckedUpdateManyInput>
    /**
     * Filter which lst_apy_data to update
     */
    where?: lst_apy_dataWhereInput
    /**
     * Limit how many lst_apy_data to update.
     */
    limit?: number
  }

  /**
   * lst_apy_data updateManyAndReturn
   */
  export type lst_apy_dataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_apy_data
     */
    select?: lst_apy_dataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lst_apy_data
     */
    omit?: lst_apy_dataOmit<ExtArgs> | null
    /**
     * The data used to update lst_apy_data.
     */
    data: XOR<lst_apy_dataUpdateManyMutationInput, lst_apy_dataUncheckedUpdateManyInput>
    /**
     * Filter which lst_apy_data to update
     */
    where?: lst_apy_dataWhereInput
    /**
     * Limit how many lst_apy_data to update.
     */
    limit?: number
  }

  /**
   * lst_apy_data upsert
   */
  export type lst_apy_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_apy_data
     */
    select?: lst_apy_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_apy_data
     */
    omit?: lst_apy_dataOmit<ExtArgs> | null
    /**
     * The filter to search for the lst_apy_data to update in case it exists.
     */
    where: lst_apy_dataWhereUniqueInput
    /**
     * In case the lst_apy_data found by the `where` argument doesn't exist, create a new lst_apy_data with this data.
     */
    create: XOR<lst_apy_dataCreateInput, lst_apy_dataUncheckedCreateInput>
    /**
     * In case the lst_apy_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lst_apy_dataUpdateInput, lst_apy_dataUncheckedUpdateInput>
  }

  /**
   * lst_apy_data delete
   */
  export type lst_apy_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_apy_data
     */
    select?: lst_apy_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_apy_data
     */
    omit?: lst_apy_dataOmit<ExtArgs> | null
    /**
     * Filter which lst_apy_data to delete.
     */
    where: lst_apy_dataWhereUniqueInput
  }

  /**
   * lst_apy_data deleteMany
   */
  export type lst_apy_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lst_apy_data to delete
     */
    where?: lst_apy_dataWhereInput
    /**
     * Limit how many lst_apy_data to delete.
     */
    limit?: number
  }

  /**
   * lst_apy_data without action
   */
  export type lst_apy_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_apy_data
     */
    select?: lst_apy_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_apy_data
     */
    omit?: lst_apy_dataOmit<ExtArgs> | null
  }


  /**
   * Model lst_holder_data
   */

  export type AggregateLst_holder_data = {
    _count: Lst_holder_dataCountAggregateOutputType | null
    _avg: Lst_holder_dataAvgAggregateOutputType | null
    _sum: Lst_holder_dataSumAggregateOutputType | null
    _min: Lst_holder_dataMinAggregateOutputType | null
    _max: Lst_holder_dataMaxAggregateOutputType | null
  }

  export type Lst_holder_dataAvgAggregateOutputType = {
    total_holders: number | null
    total_supply: Decimal | null
  }

  export type Lst_holder_dataSumAggregateOutputType = {
    total_holders: bigint | null
    total_supply: Decimal | null
  }

  export type Lst_holder_dataMinAggregateOutputType = {
    id: string | null
    lst_symbol: string | null
    total_holders: bigint | null
    total_supply: Decimal | null
    collected_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Lst_holder_dataMaxAggregateOutputType = {
    id: string | null
    lst_symbol: string | null
    total_holders: bigint | null
    total_supply: Decimal | null
    collected_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Lst_holder_dataCountAggregateOutputType = {
    id: number
    lst_symbol: number
    total_holders: number
    total_supply: number
    collected_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Lst_holder_dataAvgAggregateInputType = {
    total_holders?: true
    total_supply?: true
  }

  export type Lst_holder_dataSumAggregateInputType = {
    total_holders?: true
    total_supply?: true
  }

  export type Lst_holder_dataMinAggregateInputType = {
    id?: true
    lst_symbol?: true
    total_holders?: true
    total_supply?: true
    collected_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Lst_holder_dataMaxAggregateInputType = {
    id?: true
    lst_symbol?: true
    total_holders?: true
    total_supply?: true
    collected_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Lst_holder_dataCountAggregateInputType = {
    id?: true
    lst_symbol?: true
    total_holders?: true
    total_supply?: true
    collected_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Lst_holder_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lst_holder_data to aggregate.
     */
    where?: lst_holder_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_holder_data to fetch.
     */
    orderBy?: lst_holder_dataOrderByWithRelationInput | lst_holder_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lst_holder_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_holder_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_holder_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lst_holder_data
    **/
    _count?: true | Lst_holder_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lst_holder_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lst_holder_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lst_holder_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lst_holder_dataMaxAggregateInputType
  }

  export type GetLst_holder_dataAggregateType<T extends Lst_holder_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateLst_holder_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLst_holder_data[P]>
      : GetScalarType<T[P], AggregateLst_holder_data[P]>
  }




  export type lst_holder_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lst_holder_dataWhereInput
    orderBy?: lst_holder_dataOrderByWithAggregationInput | lst_holder_dataOrderByWithAggregationInput[]
    by: Lst_holder_dataScalarFieldEnum[] | Lst_holder_dataScalarFieldEnum
    having?: lst_holder_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lst_holder_dataCountAggregateInputType | true
    _avg?: Lst_holder_dataAvgAggregateInputType
    _sum?: Lst_holder_dataSumAggregateInputType
    _min?: Lst_holder_dataMinAggregateInputType
    _max?: Lst_holder_dataMaxAggregateInputType
  }

  export type Lst_holder_dataGroupByOutputType = {
    id: string
    lst_symbol: string
    total_holders: bigint
    total_supply: Decimal
    collected_at: Date
    created_at: Date
    updated_at: Date
    _count: Lst_holder_dataCountAggregateOutputType | null
    _avg: Lst_holder_dataAvgAggregateOutputType | null
    _sum: Lst_holder_dataSumAggregateOutputType | null
    _min: Lst_holder_dataMinAggregateOutputType | null
    _max: Lst_holder_dataMaxAggregateOutputType | null
  }

  type GetLst_holder_dataGroupByPayload<T extends lst_holder_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lst_holder_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lst_holder_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lst_holder_dataGroupByOutputType[P]>
            : GetScalarType<T[P], Lst_holder_dataGroupByOutputType[P]>
        }
      >
    >


  export type lst_holder_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lst_symbol?: boolean
    total_holders?: boolean
    total_supply?: boolean
    collected_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["lst_holder_data"]>

  export type lst_holder_dataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lst_symbol?: boolean
    total_holders?: boolean
    total_supply?: boolean
    collected_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["lst_holder_data"]>

  export type lst_holder_dataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lst_symbol?: boolean
    total_holders?: boolean
    total_supply?: boolean
    collected_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["lst_holder_data"]>

  export type lst_holder_dataSelectScalar = {
    id?: boolean
    lst_symbol?: boolean
    total_holders?: boolean
    total_supply?: boolean
    collected_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type lst_holder_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lst_symbol" | "total_holders" | "total_supply" | "collected_at" | "created_at" | "updated_at", ExtArgs["result"]["lst_holder_data"]>

  export type $lst_holder_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lst_holder_data"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lst_symbol: string
      total_holders: bigint
      total_supply: Prisma.Decimal
      collected_at: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["lst_holder_data"]>
    composites: {}
  }

  type lst_holder_dataGetPayload<S extends boolean | null | undefined | lst_holder_dataDefaultArgs> = $Result.GetResult<Prisma.$lst_holder_dataPayload, S>

  type lst_holder_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lst_holder_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lst_holder_dataCountAggregateInputType | true
    }

  export interface lst_holder_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lst_holder_data'], meta: { name: 'lst_holder_data' } }
    /**
     * Find zero or one Lst_holder_data that matches the filter.
     * @param {lst_holder_dataFindUniqueArgs} args - Arguments to find a Lst_holder_data
     * @example
     * // Get one Lst_holder_data
     * const lst_holder_data = await prisma.lst_holder_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lst_holder_dataFindUniqueArgs>(args: SelectSubset<T, lst_holder_dataFindUniqueArgs<ExtArgs>>): Prisma__lst_holder_dataClient<$Result.GetResult<Prisma.$lst_holder_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lst_holder_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lst_holder_dataFindUniqueOrThrowArgs} args - Arguments to find a Lst_holder_data
     * @example
     * // Get one Lst_holder_data
     * const lst_holder_data = await prisma.lst_holder_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lst_holder_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, lst_holder_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lst_holder_dataClient<$Result.GetResult<Prisma.$lst_holder_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lst_holder_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_holder_dataFindFirstArgs} args - Arguments to find a Lst_holder_data
     * @example
     * // Get one Lst_holder_data
     * const lst_holder_data = await prisma.lst_holder_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lst_holder_dataFindFirstArgs>(args?: SelectSubset<T, lst_holder_dataFindFirstArgs<ExtArgs>>): Prisma__lst_holder_dataClient<$Result.GetResult<Prisma.$lst_holder_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lst_holder_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_holder_dataFindFirstOrThrowArgs} args - Arguments to find a Lst_holder_data
     * @example
     * // Get one Lst_holder_data
     * const lst_holder_data = await prisma.lst_holder_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lst_holder_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, lst_holder_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__lst_holder_dataClient<$Result.GetResult<Prisma.$lst_holder_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lst_holder_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_holder_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lst_holder_data
     * const lst_holder_data = await prisma.lst_holder_data.findMany()
     * 
     * // Get first 10 Lst_holder_data
     * const lst_holder_data = await prisma.lst_holder_data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lst_holder_dataWithIdOnly = await prisma.lst_holder_data.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lst_holder_dataFindManyArgs>(args?: SelectSubset<T, lst_holder_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lst_holder_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lst_holder_data.
     * @param {lst_holder_dataCreateArgs} args - Arguments to create a Lst_holder_data.
     * @example
     * // Create one Lst_holder_data
     * const Lst_holder_data = await prisma.lst_holder_data.create({
     *   data: {
     *     // ... data to create a Lst_holder_data
     *   }
     * })
     * 
     */
    create<T extends lst_holder_dataCreateArgs>(args: SelectSubset<T, lst_holder_dataCreateArgs<ExtArgs>>): Prisma__lst_holder_dataClient<$Result.GetResult<Prisma.$lst_holder_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lst_holder_data.
     * @param {lst_holder_dataCreateManyArgs} args - Arguments to create many Lst_holder_data.
     * @example
     * // Create many Lst_holder_data
     * const lst_holder_data = await prisma.lst_holder_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lst_holder_dataCreateManyArgs>(args?: SelectSubset<T, lst_holder_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lst_holder_data and returns the data saved in the database.
     * @param {lst_holder_dataCreateManyAndReturnArgs} args - Arguments to create many Lst_holder_data.
     * @example
     * // Create many Lst_holder_data
     * const lst_holder_data = await prisma.lst_holder_data.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lst_holder_data and only return the `id`
     * const lst_holder_dataWithIdOnly = await prisma.lst_holder_data.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lst_holder_dataCreateManyAndReturnArgs>(args?: SelectSubset<T, lst_holder_dataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lst_holder_dataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lst_holder_data.
     * @param {lst_holder_dataDeleteArgs} args - Arguments to delete one Lst_holder_data.
     * @example
     * // Delete one Lst_holder_data
     * const Lst_holder_data = await prisma.lst_holder_data.delete({
     *   where: {
     *     // ... filter to delete one Lst_holder_data
     *   }
     * })
     * 
     */
    delete<T extends lst_holder_dataDeleteArgs>(args: SelectSubset<T, lst_holder_dataDeleteArgs<ExtArgs>>): Prisma__lst_holder_dataClient<$Result.GetResult<Prisma.$lst_holder_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lst_holder_data.
     * @param {lst_holder_dataUpdateArgs} args - Arguments to update one Lst_holder_data.
     * @example
     * // Update one Lst_holder_data
     * const lst_holder_data = await prisma.lst_holder_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lst_holder_dataUpdateArgs>(args: SelectSubset<T, lst_holder_dataUpdateArgs<ExtArgs>>): Prisma__lst_holder_dataClient<$Result.GetResult<Prisma.$lst_holder_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lst_holder_data.
     * @param {lst_holder_dataDeleteManyArgs} args - Arguments to filter Lst_holder_data to delete.
     * @example
     * // Delete a few Lst_holder_data
     * const { count } = await prisma.lst_holder_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lst_holder_dataDeleteManyArgs>(args?: SelectSubset<T, lst_holder_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lst_holder_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_holder_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lst_holder_data
     * const lst_holder_data = await prisma.lst_holder_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lst_holder_dataUpdateManyArgs>(args: SelectSubset<T, lst_holder_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lst_holder_data and returns the data updated in the database.
     * @param {lst_holder_dataUpdateManyAndReturnArgs} args - Arguments to update many Lst_holder_data.
     * @example
     * // Update many Lst_holder_data
     * const lst_holder_data = await prisma.lst_holder_data.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lst_holder_data and only return the `id`
     * const lst_holder_dataWithIdOnly = await prisma.lst_holder_data.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends lst_holder_dataUpdateManyAndReturnArgs>(args: SelectSubset<T, lst_holder_dataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lst_holder_dataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lst_holder_data.
     * @param {lst_holder_dataUpsertArgs} args - Arguments to update or create a Lst_holder_data.
     * @example
     * // Update or create a Lst_holder_data
     * const lst_holder_data = await prisma.lst_holder_data.upsert({
     *   create: {
     *     // ... data to create a Lst_holder_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lst_holder_data we want to update
     *   }
     * })
     */
    upsert<T extends lst_holder_dataUpsertArgs>(args: SelectSubset<T, lst_holder_dataUpsertArgs<ExtArgs>>): Prisma__lst_holder_dataClient<$Result.GetResult<Prisma.$lst_holder_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lst_holder_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_holder_dataCountArgs} args - Arguments to filter Lst_holder_data to count.
     * @example
     * // Count the number of Lst_holder_data
     * const count = await prisma.lst_holder_data.count({
     *   where: {
     *     // ... the filter for the Lst_holder_data we want to count
     *   }
     * })
    **/
    count<T extends lst_holder_dataCountArgs>(
      args?: Subset<T, lst_holder_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lst_holder_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lst_holder_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lst_holder_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Lst_holder_dataAggregateArgs>(args: Subset<T, Lst_holder_dataAggregateArgs>): Prisma.PrismaPromise<GetLst_holder_dataAggregateType<T>>

    /**
     * Group by Lst_holder_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_holder_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends lst_holder_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lst_holder_dataGroupByArgs['orderBy'] }
        : { orderBy?: lst_holder_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, lst_holder_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLst_holder_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lst_holder_data model
   */
  readonly fields: lst_holder_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lst_holder_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lst_holder_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lst_holder_data model
   */
  interface lst_holder_dataFieldRefs {
    readonly id: FieldRef<"lst_holder_data", 'String'>
    readonly lst_symbol: FieldRef<"lst_holder_data", 'String'>
    readonly total_holders: FieldRef<"lst_holder_data", 'BigInt'>
    readonly total_supply: FieldRef<"lst_holder_data", 'Decimal'>
    readonly collected_at: FieldRef<"lst_holder_data", 'DateTime'>
    readonly created_at: FieldRef<"lst_holder_data", 'DateTime'>
    readonly updated_at: FieldRef<"lst_holder_data", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * lst_holder_data findUnique
   */
  export type lst_holder_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_holder_data
     */
    select?: lst_holder_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_holder_data
     */
    omit?: lst_holder_dataOmit<ExtArgs> | null
    /**
     * Filter, which lst_holder_data to fetch.
     */
    where: lst_holder_dataWhereUniqueInput
  }

  /**
   * lst_holder_data findUniqueOrThrow
   */
  export type lst_holder_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_holder_data
     */
    select?: lst_holder_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_holder_data
     */
    omit?: lst_holder_dataOmit<ExtArgs> | null
    /**
     * Filter, which lst_holder_data to fetch.
     */
    where: lst_holder_dataWhereUniqueInput
  }

  /**
   * lst_holder_data findFirst
   */
  export type lst_holder_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_holder_data
     */
    select?: lst_holder_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_holder_data
     */
    omit?: lst_holder_dataOmit<ExtArgs> | null
    /**
     * Filter, which lst_holder_data to fetch.
     */
    where?: lst_holder_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_holder_data to fetch.
     */
    orderBy?: lst_holder_dataOrderByWithRelationInput | lst_holder_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lst_holder_data.
     */
    cursor?: lst_holder_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_holder_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_holder_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lst_holder_data.
     */
    distinct?: Lst_holder_dataScalarFieldEnum | Lst_holder_dataScalarFieldEnum[]
  }

  /**
   * lst_holder_data findFirstOrThrow
   */
  export type lst_holder_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_holder_data
     */
    select?: lst_holder_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_holder_data
     */
    omit?: lst_holder_dataOmit<ExtArgs> | null
    /**
     * Filter, which lst_holder_data to fetch.
     */
    where?: lst_holder_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_holder_data to fetch.
     */
    orderBy?: lst_holder_dataOrderByWithRelationInput | lst_holder_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lst_holder_data.
     */
    cursor?: lst_holder_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_holder_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_holder_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lst_holder_data.
     */
    distinct?: Lst_holder_dataScalarFieldEnum | Lst_holder_dataScalarFieldEnum[]
  }

  /**
   * lst_holder_data findMany
   */
  export type lst_holder_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_holder_data
     */
    select?: lst_holder_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_holder_data
     */
    omit?: lst_holder_dataOmit<ExtArgs> | null
    /**
     * Filter, which lst_holder_data to fetch.
     */
    where?: lst_holder_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_holder_data to fetch.
     */
    orderBy?: lst_holder_dataOrderByWithRelationInput | lst_holder_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lst_holder_data.
     */
    cursor?: lst_holder_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_holder_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_holder_data.
     */
    skip?: number
    distinct?: Lst_holder_dataScalarFieldEnum | Lst_holder_dataScalarFieldEnum[]
  }

  /**
   * lst_holder_data create
   */
  export type lst_holder_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_holder_data
     */
    select?: lst_holder_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_holder_data
     */
    omit?: lst_holder_dataOmit<ExtArgs> | null
    /**
     * The data needed to create a lst_holder_data.
     */
    data: XOR<lst_holder_dataCreateInput, lst_holder_dataUncheckedCreateInput>
  }

  /**
   * lst_holder_data createMany
   */
  export type lst_holder_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lst_holder_data.
     */
    data: lst_holder_dataCreateManyInput | lst_holder_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lst_holder_data createManyAndReturn
   */
  export type lst_holder_dataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_holder_data
     */
    select?: lst_holder_dataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lst_holder_data
     */
    omit?: lst_holder_dataOmit<ExtArgs> | null
    /**
     * The data used to create many lst_holder_data.
     */
    data: lst_holder_dataCreateManyInput | lst_holder_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lst_holder_data update
   */
  export type lst_holder_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_holder_data
     */
    select?: lst_holder_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_holder_data
     */
    omit?: lst_holder_dataOmit<ExtArgs> | null
    /**
     * The data needed to update a lst_holder_data.
     */
    data: XOR<lst_holder_dataUpdateInput, lst_holder_dataUncheckedUpdateInput>
    /**
     * Choose, which lst_holder_data to update.
     */
    where: lst_holder_dataWhereUniqueInput
  }

  /**
   * lst_holder_data updateMany
   */
  export type lst_holder_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lst_holder_data.
     */
    data: XOR<lst_holder_dataUpdateManyMutationInput, lst_holder_dataUncheckedUpdateManyInput>
    /**
     * Filter which lst_holder_data to update
     */
    where?: lst_holder_dataWhereInput
    /**
     * Limit how many lst_holder_data to update.
     */
    limit?: number
  }

  /**
   * lst_holder_data updateManyAndReturn
   */
  export type lst_holder_dataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_holder_data
     */
    select?: lst_holder_dataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lst_holder_data
     */
    omit?: lst_holder_dataOmit<ExtArgs> | null
    /**
     * The data used to update lst_holder_data.
     */
    data: XOR<lst_holder_dataUpdateManyMutationInput, lst_holder_dataUncheckedUpdateManyInput>
    /**
     * Filter which lst_holder_data to update
     */
    where?: lst_holder_dataWhereInput
    /**
     * Limit how many lst_holder_data to update.
     */
    limit?: number
  }

  /**
   * lst_holder_data upsert
   */
  export type lst_holder_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_holder_data
     */
    select?: lst_holder_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_holder_data
     */
    omit?: lst_holder_dataOmit<ExtArgs> | null
    /**
     * The filter to search for the lst_holder_data to update in case it exists.
     */
    where: lst_holder_dataWhereUniqueInput
    /**
     * In case the lst_holder_data found by the `where` argument doesn't exist, create a new lst_holder_data with this data.
     */
    create: XOR<lst_holder_dataCreateInput, lst_holder_dataUncheckedCreateInput>
    /**
     * In case the lst_holder_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lst_holder_dataUpdateInput, lst_holder_dataUncheckedUpdateInput>
  }

  /**
   * lst_holder_data delete
   */
  export type lst_holder_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_holder_data
     */
    select?: lst_holder_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_holder_data
     */
    omit?: lst_holder_dataOmit<ExtArgs> | null
    /**
     * Filter which lst_holder_data to delete.
     */
    where: lst_holder_dataWhereUniqueInput
  }

  /**
   * lst_holder_data deleteMany
   */
  export type lst_holder_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lst_holder_data to delete
     */
    where?: lst_holder_dataWhereInput
    /**
     * Limit how many lst_holder_data to delete.
     */
    limit?: number
  }

  /**
   * lst_holder_data without action
   */
  export type lst_holder_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_holder_data
     */
    select?: lst_holder_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_holder_data
     */
    omit?: lst_holder_dataOmit<ExtArgs> | null
  }


  /**
   * Model lst_strategy
   */

  export type AggregateLst_strategy = {
    _count: Lst_strategyCountAggregateOutputType | null
    _min: Lst_strategyMinAggregateOutputType | null
    _max: Lst_strategyMaxAggregateOutputType | null
  }

  export type Lst_strategyMinAggregateOutputType = {
    id: string | null
    epoch_snapshot_id: string | null
    chosen_lst: string | null
    decided_at: Date | null
  }

  export type Lst_strategyMaxAggregateOutputType = {
    id: string | null
    epoch_snapshot_id: string | null
    chosen_lst: string | null
    decided_at: Date | null
  }

  export type Lst_strategyCountAggregateOutputType = {
    id: number
    epoch_snapshot_id: number
    chosen_lst: number
    decided_at: number
    _all: number
  }


  export type Lst_strategyMinAggregateInputType = {
    id?: true
    epoch_snapshot_id?: true
    chosen_lst?: true
    decided_at?: true
  }

  export type Lst_strategyMaxAggregateInputType = {
    id?: true
    epoch_snapshot_id?: true
    chosen_lst?: true
    decided_at?: true
  }

  export type Lst_strategyCountAggregateInputType = {
    id?: true
    epoch_snapshot_id?: true
    chosen_lst?: true
    decided_at?: true
    _all?: true
  }

  export type Lst_strategyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lst_strategy to aggregate.
     */
    where?: lst_strategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_strategies to fetch.
     */
    orderBy?: lst_strategyOrderByWithRelationInput | lst_strategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lst_strategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_strategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_strategies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lst_strategies
    **/
    _count?: true | Lst_strategyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lst_strategyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lst_strategyMaxAggregateInputType
  }

  export type GetLst_strategyAggregateType<T extends Lst_strategyAggregateArgs> = {
        [P in keyof T & keyof AggregateLst_strategy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLst_strategy[P]>
      : GetScalarType<T[P], AggregateLst_strategy[P]>
  }




  export type lst_strategyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lst_strategyWhereInput
    orderBy?: lst_strategyOrderByWithAggregationInput | lst_strategyOrderByWithAggregationInput[]
    by: Lst_strategyScalarFieldEnum[] | Lst_strategyScalarFieldEnum
    having?: lst_strategyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lst_strategyCountAggregateInputType | true
    _min?: Lst_strategyMinAggregateInputType
    _max?: Lst_strategyMaxAggregateInputType
  }

  export type Lst_strategyGroupByOutputType = {
    id: string
    epoch_snapshot_id: string
    chosen_lst: string
    decided_at: Date
    _count: Lst_strategyCountAggregateOutputType | null
    _min: Lst_strategyMinAggregateOutputType | null
    _max: Lst_strategyMaxAggregateOutputType | null
  }

  type GetLst_strategyGroupByPayload<T extends lst_strategyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lst_strategyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lst_strategyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lst_strategyGroupByOutputType[P]>
            : GetScalarType<T[P], Lst_strategyGroupByOutputType[P]>
        }
      >
    >


  export type lst_strategySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epoch_snapshot_id?: boolean
    chosen_lst?: boolean
    decided_at?: boolean
    epoch_snapshots?: boolean | epoch_snapshotsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lst_strategy"]>

  export type lst_strategySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epoch_snapshot_id?: boolean
    chosen_lst?: boolean
    decided_at?: boolean
    epoch_snapshots?: boolean | epoch_snapshotsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lst_strategy"]>

  export type lst_strategySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epoch_snapshot_id?: boolean
    chosen_lst?: boolean
    decided_at?: boolean
    epoch_snapshots?: boolean | epoch_snapshotsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lst_strategy"]>

  export type lst_strategySelectScalar = {
    id?: boolean
    epoch_snapshot_id?: boolean
    chosen_lst?: boolean
    decided_at?: boolean
  }

  export type lst_strategyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "epoch_snapshot_id" | "chosen_lst" | "decided_at", ExtArgs["result"]["lst_strategy"]>
  export type lst_strategyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epoch_snapshots?: boolean | epoch_snapshotsDefaultArgs<ExtArgs>
  }
  export type lst_strategyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epoch_snapshots?: boolean | epoch_snapshotsDefaultArgs<ExtArgs>
  }
  export type lst_strategyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epoch_snapshots?: boolean | epoch_snapshotsDefaultArgs<ExtArgs>
  }

  export type $lst_strategyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lst_strategy"
    objects: {
      epoch_snapshots: Prisma.$epoch_snapshotsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      epoch_snapshot_id: string
      chosen_lst: string
      decided_at: Date
    }, ExtArgs["result"]["lst_strategy"]>
    composites: {}
  }

  type lst_strategyGetPayload<S extends boolean | null | undefined | lst_strategyDefaultArgs> = $Result.GetResult<Prisma.$lst_strategyPayload, S>

  type lst_strategyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lst_strategyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lst_strategyCountAggregateInputType | true
    }

  export interface lst_strategyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lst_strategy'], meta: { name: 'lst_strategy' } }
    /**
     * Find zero or one Lst_strategy that matches the filter.
     * @param {lst_strategyFindUniqueArgs} args - Arguments to find a Lst_strategy
     * @example
     * // Get one Lst_strategy
     * const lst_strategy = await prisma.lst_strategy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lst_strategyFindUniqueArgs>(args: SelectSubset<T, lst_strategyFindUniqueArgs<ExtArgs>>): Prisma__lst_strategyClient<$Result.GetResult<Prisma.$lst_strategyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lst_strategy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lst_strategyFindUniqueOrThrowArgs} args - Arguments to find a Lst_strategy
     * @example
     * // Get one Lst_strategy
     * const lst_strategy = await prisma.lst_strategy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lst_strategyFindUniqueOrThrowArgs>(args: SelectSubset<T, lst_strategyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lst_strategyClient<$Result.GetResult<Prisma.$lst_strategyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lst_strategy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_strategyFindFirstArgs} args - Arguments to find a Lst_strategy
     * @example
     * // Get one Lst_strategy
     * const lst_strategy = await prisma.lst_strategy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lst_strategyFindFirstArgs>(args?: SelectSubset<T, lst_strategyFindFirstArgs<ExtArgs>>): Prisma__lst_strategyClient<$Result.GetResult<Prisma.$lst_strategyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lst_strategy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_strategyFindFirstOrThrowArgs} args - Arguments to find a Lst_strategy
     * @example
     * // Get one Lst_strategy
     * const lst_strategy = await prisma.lst_strategy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lst_strategyFindFirstOrThrowArgs>(args?: SelectSubset<T, lst_strategyFindFirstOrThrowArgs<ExtArgs>>): Prisma__lst_strategyClient<$Result.GetResult<Prisma.$lst_strategyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lst_strategies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_strategyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lst_strategies
     * const lst_strategies = await prisma.lst_strategy.findMany()
     * 
     * // Get first 10 Lst_strategies
     * const lst_strategies = await prisma.lst_strategy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lst_strategyWithIdOnly = await prisma.lst_strategy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lst_strategyFindManyArgs>(args?: SelectSubset<T, lst_strategyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lst_strategyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lst_strategy.
     * @param {lst_strategyCreateArgs} args - Arguments to create a Lst_strategy.
     * @example
     * // Create one Lst_strategy
     * const Lst_strategy = await prisma.lst_strategy.create({
     *   data: {
     *     // ... data to create a Lst_strategy
     *   }
     * })
     * 
     */
    create<T extends lst_strategyCreateArgs>(args: SelectSubset<T, lst_strategyCreateArgs<ExtArgs>>): Prisma__lst_strategyClient<$Result.GetResult<Prisma.$lst_strategyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lst_strategies.
     * @param {lst_strategyCreateManyArgs} args - Arguments to create many Lst_strategies.
     * @example
     * // Create many Lst_strategies
     * const lst_strategy = await prisma.lst_strategy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lst_strategyCreateManyArgs>(args?: SelectSubset<T, lst_strategyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lst_strategies and returns the data saved in the database.
     * @param {lst_strategyCreateManyAndReturnArgs} args - Arguments to create many Lst_strategies.
     * @example
     * // Create many Lst_strategies
     * const lst_strategy = await prisma.lst_strategy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lst_strategies and only return the `id`
     * const lst_strategyWithIdOnly = await prisma.lst_strategy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lst_strategyCreateManyAndReturnArgs>(args?: SelectSubset<T, lst_strategyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lst_strategyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lst_strategy.
     * @param {lst_strategyDeleteArgs} args - Arguments to delete one Lst_strategy.
     * @example
     * // Delete one Lst_strategy
     * const Lst_strategy = await prisma.lst_strategy.delete({
     *   where: {
     *     // ... filter to delete one Lst_strategy
     *   }
     * })
     * 
     */
    delete<T extends lst_strategyDeleteArgs>(args: SelectSubset<T, lst_strategyDeleteArgs<ExtArgs>>): Prisma__lst_strategyClient<$Result.GetResult<Prisma.$lst_strategyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lst_strategy.
     * @param {lst_strategyUpdateArgs} args - Arguments to update one Lst_strategy.
     * @example
     * // Update one Lst_strategy
     * const lst_strategy = await prisma.lst_strategy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lst_strategyUpdateArgs>(args: SelectSubset<T, lst_strategyUpdateArgs<ExtArgs>>): Prisma__lst_strategyClient<$Result.GetResult<Prisma.$lst_strategyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lst_strategies.
     * @param {lst_strategyDeleteManyArgs} args - Arguments to filter Lst_strategies to delete.
     * @example
     * // Delete a few Lst_strategies
     * const { count } = await prisma.lst_strategy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lst_strategyDeleteManyArgs>(args?: SelectSubset<T, lst_strategyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lst_strategies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_strategyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lst_strategies
     * const lst_strategy = await prisma.lst_strategy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lst_strategyUpdateManyArgs>(args: SelectSubset<T, lst_strategyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lst_strategies and returns the data updated in the database.
     * @param {lst_strategyUpdateManyAndReturnArgs} args - Arguments to update many Lst_strategies.
     * @example
     * // Update many Lst_strategies
     * const lst_strategy = await prisma.lst_strategy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lst_strategies and only return the `id`
     * const lst_strategyWithIdOnly = await prisma.lst_strategy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends lst_strategyUpdateManyAndReturnArgs>(args: SelectSubset<T, lst_strategyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lst_strategyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lst_strategy.
     * @param {lst_strategyUpsertArgs} args - Arguments to update or create a Lst_strategy.
     * @example
     * // Update or create a Lst_strategy
     * const lst_strategy = await prisma.lst_strategy.upsert({
     *   create: {
     *     // ... data to create a Lst_strategy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lst_strategy we want to update
     *   }
     * })
     */
    upsert<T extends lst_strategyUpsertArgs>(args: SelectSubset<T, lst_strategyUpsertArgs<ExtArgs>>): Prisma__lst_strategyClient<$Result.GetResult<Prisma.$lst_strategyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lst_strategies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_strategyCountArgs} args - Arguments to filter Lst_strategies to count.
     * @example
     * // Count the number of Lst_strategies
     * const count = await prisma.lst_strategy.count({
     *   where: {
     *     // ... the filter for the Lst_strategies we want to count
     *   }
     * })
    **/
    count<T extends lst_strategyCountArgs>(
      args?: Subset<T, lst_strategyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lst_strategyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lst_strategy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lst_strategyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Lst_strategyAggregateArgs>(args: Subset<T, Lst_strategyAggregateArgs>): Prisma.PrismaPromise<GetLst_strategyAggregateType<T>>

    /**
     * Group by Lst_strategy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_strategyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends lst_strategyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lst_strategyGroupByArgs['orderBy'] }
        : { orderBy?: lst_strategyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, lst_strategyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLst_strategyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lst_strategy model
   */
  readonly fields: lst_strategyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lst_strategy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lst_strategyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    epoch_snapshots<T extends epoch_snapshotsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, epoch_snapshotsDefaultArgs<ExtArgs>>): Prisma__epoch_snapshotsClient<$Result.GetResult<Prisma.$epoch_snapshotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lst_strategy model
   */
  interface lst_strategyFieldRefs {
    readonly id: FieldRef<"lst_strategy", 'String'>
    readonly epoch_snapshot_id: FieldRef<"lst_strategy", 'String'>
    readonly chosen_lst: FieldRef<"lst_strategy", 'String'>
    readonly decided_at: FieldRef<"lst_strategy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * lst_strategy findUnique
   */
  export type lst_strategyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_strategy
     */
    select?: lst_strategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_strategy
     */
    omit?: lst_strategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lst_strategyInclude<ExtArgs> | null
    /**
     * Filter, which lst_strategy to fetch.
     */
    where: lst_strategyWhereUniqueInput
  }

  /**
   * lst_strategy findUniqueOrThrow
   */
  export type lst_strategyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_strategy
     */
    select?: lst_strategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_strategy
     */
    omit?: lst_strategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lst_strategyInclude<ExtArgs> | null
    /**
     * Filter, which lst_strategy to fetch.
     */
    where: lst_strategyWhereUniqueInput
  }

  /**
   * lst_strategy findFirst
   */
  export type lst_strategyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_strategy
     */
    select?: lst_strategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_strategy
     */
    omit?: lst_strategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lst_strategyInclude<ExtArgs> | null
    /**
     * Filter, which lst_strategy to fetch.
     */
    where?: lst_strategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_strategies to fetch.
     */
    orderBy?: lst_strategyOrderByWithRelationInput | lst_strategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lst_strategies.
     */
    cursor?: lst_strategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_strategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_strategies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lst_strategies.
     */
    distinct?: Lst_strategyScalarFieldEnum | Lst_strategyScalarFieldEnum[]
  }

  /**
   * lst_strategy findFirstOrThrow
   */
  export type lst_strategyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_strategy
     */
    select?: lst_strategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_strategy
     */
    omit?: lst_strategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lst_strategyInclude<ExtArgs> | null
    /**
     * Filter, which lst_strategy to fetch.
     */
    where?: lst_strategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_strategies to fetch.
     */
    orderBy?: lst_strategyOrderByWithRelationInput | lst_strategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lst_strategies.
     */
    cursor?: lst_strategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_strategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_strategies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lst_strategies.
     */
    distinct?: Lst_strategyScalarFieldEnum | Lst_strategyScalarFieldEnum[]
  }

  /**
   * lst_strategy findMany
   */
  export type lst_strategyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_strategy
     */
    select?: lst_strategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_strategy
     */
    omit?: lst_strategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lst_strategyInclude<ExtArgs> | null
    /**
     * Filter, which lst_strategies to fetch.
     */
    where?: lst_strategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_strategies to fetch.
     */
    orderBy?: lst_strategyOrderByWithRelationInput | lst_strategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lst_strategies.
     */
    cursor?: lst_strategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_strategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_strategies.
     */
    skip?: number
    distinct?: Lst_strategyScalarFieldEnum | Lst_strategyScalarFieldEnum[]
  }

  /**
   * lst_strategy create
   */
  export type lst_strategyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_strategy
     */
    select?: lst_strategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_strategy
     */
    omit?: lst_strategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lst_strategyInclude<ExtArgs> | null
    /**
     * The data needed to create a lst_strategy.
     */
    data: XOR<lst_strategyCreateInput, lst_strategyUncheckedCreateInput>
  }

  /**
   * lst_strategy createMany
   */
  export type lst_strategyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lst_strategies.
     */
    data: lst_strategyCreateManyInput | lst_strategyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lst_strategy createManyAndReturn
   */
  export type lst_strategyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_strategy
     */
    select?: lst_strategySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lst_strategy
     */
    omit?: lst_strategyOmit<ExtArgs> | null
    /**
     * The data used to create many lst_strategies.
     */
    data: lst_strategyCreateManyInput | lst_strategyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lst_strategyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * lst_strategy update
   */
  export type lst_strategyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_strategy
     */
    select?: lst_strategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_strategy
     */
    omit?: lst_strategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lst_strategyInclude<ExtArgs> | null
    /**
     * The data needed to update a lst_strategy.
     */
    data: XOR<lst_strategyUpdateInput, lst_strategyUncheckedUpdateInput>
    /**
     * Choose, which lst_strategy to update.
     */
    where: lst_strategyWhereUniqueInput
  }

  /**
   * lst_strategy updateMany
   */
  export type lst_strategyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lst_strategies.
     */
    data: XOR<lst_strategyUpdateManyMutationInput, lst_strategyUncheckedUpdateManyInput>
    /**
     * Filter which lst_strategies to update
     */
    where?: lst_strategyWhereInput
    /**
     * Limit how many lst_strategies to update.
     */
    limit?: number
  }

  /**
   * lst_strategy updateManyAndReturn
   */
  export type lst_strategyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_strategy
     */
    select?: lst_strategySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lst_strategy
     */
    omit?: lst_strategyOmit<ExtArgs> | null
    /**
     * The data used to update lst_strategies.
     */
    data: XOR<lst_strategyUpdateManyMutationInput, lst_strategyUncheckedUpdateManyInput>
    /**
     * Filter which lst_strategies to update
     */
    where?: lst_strategyWhereInput
    /**
     * Limit how many lst_strategies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lst_strategyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * lst_strategy upsert
   */
  export type lst_strategyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_strategy
     */
    select?: lst_strategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_strategy
     */
    omit?: lst_strategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lst_strategyInclude<ExtArgs> | null
    /**
     * The filter to search for the lst_strategy to update in case it exists.
     */
    where: lst_strategyWhereUniqueInput
    /**
     * In case the lst_strategy found by the `where` argument doesn't exist, create a new lst_strategy with this data.
     */
    create: XOR<lst_strategyCreateInput, lst_strategyUncheckedCreateInput>
    /**
     * In case the lst_strategy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lst_strategyUpdateInput, lst_strategyUncheckedUpdateInput>
  }

  /**
   * lst_strategy delete
   */
  export type lst_strategyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_strategy
     */
    select?: lst_strategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_strategy
     */
    omit?: lst_strategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lst_strategyInclude<ExtArgs> | null
    /**
     * Filter which lst_strategy to delete.
     */
    where: lst_strategyWhereUniqueInput
  }

  /**
   * lst_strategy deleteMany
   */
  export type lst_strategyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lst_strategies to delete
     */
    where?: lst_strategyWhereInput
    /**
     * Limit how many lst_strategies to delete.
     */
    limit?: number
  }

  /**
   * lst_strategy without action
   */
  export type lst_strategyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_strategy
     */
    select?: lst_strategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_strategy
     */
    omit?: lst_strategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lst_strategyInclude<ExtArgs> | null
  }


  /**
   * Model lst_tokens
   */

  export type AggregateLst_tokens = {
    _count: Lst_tokensCountAggregateOutputType | null
    _min: Lst_tokensMinAggregateOutputType | null
    _max: Lst_tokensMaxAggregateOutputType | null
  }

  export type Lst_tokensMinAggregateOutputType = {
    id: string | null
    symbol: string | null
    mint_address: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Lst_tokensMaxAggregateOutputType = {
    id: string | null
    symbol: string | null
    mint_address: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Lst_tokensCountAggregateOutputType = {
    id: number
    symbol: number
    mint_address: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Lst_tokensMinAggregateInputType = {
    id?: true
    symbol?: true
    mint_address?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type Lst_tokensMaxAggregateInputType = {
    id?: true
    symbol?: true
    mint_address?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type Lst_tokensCountAggregateInputType = {
    id?: true
    symbol?: true
    mint_address?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Lst_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lst_tokens to aggregate.
     */
    where?: lst_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_tokens to fetch.
     */
    orderBy?: lst_tokensOrderByWithRelationInput | lst_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lst_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lst_tokens
    **/
    _count?: true | Lst_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lst_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lst_tokensMaxAggregateInputType
  }

  export type GetLst_tokensAggregateType<T extends Lst_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregateLst_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLst_tokens[P]>
      : GetScalarType<T[P], AggregateLst_tokens[P]>
  }




  export type lst_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lst_tokensWhereInput
    orderBy?: lst_tokensOrderByWithAggregationInput | lst_tokensOrderByWithAggregationInput[]
    by: Lst_tokensScalarFieldEnum[] | Lst_tokensScalarFieldEnum
    having?: lst_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lst_tokensCountAggregateInputType | true
    _min?: Lst_tokensMinAggregateInputType
    _max?: Lst_tokensMaxAggregateInputType
  }

  export type Lst_tokensGroupByOutputType = {
    id: string
    symbol: string
    mint_address: string
    name: string
    created_at: Date
    updated_at: Date
    _count: Lst_tokensCountAggregateOutputType | null
    _min: Lst_tokensMinAggregateOutputType | null
    _max: Lst_tokensMaxAggregateOutputType | null
  }

  type GetLst_tokensGroupByPayload<T extends lst_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lst_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lst_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lst_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Lst_tokensGroupByOutputType[P]>
        }
      >
    >


  export type lst_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    mint_address?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["lst_tokens"]>

  export type lst_tokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    mint_address?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["lst_tokens"]>

  export type lst_tokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    mint_address?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["lst_tokens"]>

  export type lst_tokensSelectScalar = {
    id?: boolean
    symbol?: boolean
    mint_address?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type lst_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "symbol" | "mint_address" | "name" | "created_at" | "updated_at", ExtArgs["result"]["lst_tokens"]>

  export type $lst_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lst_tokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      symbol: string
      mint_address: string
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["lst_tokens"]>
    composites: {}
  }

  type lst_tokensGetPayload<S extends boolean | null | undefined | lst_tokensDefaultArgs> = $Result.GetResult<Prisma.$lst_tokensPayload, S>

  type lst_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lst_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lst_tokensCountAggregateInputType | true
    }

  export interface lst_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lst_tokens'], meta: { name: 'lst_tokens' } }
    /**
     * Find zero or one Lst_tokens that matches the filter.
     * @param {lst_tokensFindUniqueArgs} args - Arguments to find a Lst_tokens
     * @example
     * // Get one Lst_tokens
     * const lst_tokens = await prisma.lst_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lst_tokensFindUniqueArgs>(args: SelectSubset<T, lst_tokensFindUniqueArgs<ExtArgs>>): Prisma__lst_tokensClient<$Result.GetResult<Prisma.$lst_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lst_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lst_tokensFindUniqueOrThrowArgs} args - Arguments to find a Lst_tokens
     * @example
     * // Get one Lst_tokens
     * const lst_tokens = await prisma.lst_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lst_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, lst_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lst_tokensClient<$Result.GetResult<Prisma.$lst_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lst_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_tokensFindFirstArgs} args - Arguments to find a Lst_tokens
     * @example
     * // Get one Lst_tokens
     * const lst_tokens = await prisma.lst_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lst_tokensFindFirstArgs>(args?: SelectSubset<T, lst_tokensFindFirstArgs<ExtArgs>>): Prisma__lst_tokensClient<$Result.GetResult<Prisma.$lst_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lst_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_tokensFindFirstOrThrowArgs} args - Arguments to find a Lst_tokens
     * @example
     * // Get one Lst_tokens
     * const lst_tokens = await prisma.lst_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lst_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, lst_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__lst_tokensClient<$Result.GetResult<Prisma.$lst_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lst_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lst_tokens
     * const lst_tokens = await prisma.lst_tokens.findMany()
     * 
     * // Get first 10 Lst_tokens
     * const lst_tokens = await prisma.lst_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lst_tokensWithIdOnly = await prisma.lst_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lst_tokensFindManyArgs>(args?: SelectSubset<T, lst_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lst_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lst_tokens.
     * @param {lst_tokensCreateArgs} args - Arguments to create a Lst_tokens.
     * @example
     * // Create one Lst_tokens
     * const Lst_tokens = await prisma.lst_tokens.create({
     *   data: {
     *     // ... data to create a Lst_tokens
     *   }
     * })
     * 
     */
    create<T extends lst_tokensCreateArgs>(args: SelectSubset<T, lst_tokensCreateArgs<ExtArgs>>): Prisma__lst_tokensClient<$Result.GetResult<Prisma.$lst_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lst_tokens.
     * @param {lst_tokensCreateManyArgs} args - Arguments to create many Lst_tokens.
     * @example
     * // Create many Lst_tokens
     * const lst_tokens = await prisma.lst_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lst_tokensCreateManyArgs>(args?: SelectSubset<T, lst_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lst_tokens and returns the data saved in the database.
     * @param {lst_tokensCreateManyAndReturnArgs} args - Arguments to create many Lst_tokens.
     * @example
     * // Create many Lst_tokens
     * const lst_tokens = await prisma.lst_tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lst_tokens and only return the `id`
     * const lst_tokensWithIdOnly = await prisma.lst_tokens.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lst_tokensCreateManyAndReturnArgs>(args?: SelectSubset<T, lst_tokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lst_tokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lst_tokens.
     * @param {lst_tokensDeleteArgs} args - Arguments to delete one Lst_tokens.
     * @example
     * // Delete one Lst_tokens
     * const Lst_tokens = await prisma.lst_tokens.delete({
     *   where: {
     *     // ... filter to delete one Lst_tokens
     *   }
     * })
     * 
     */
    delete<T extends lst_tokensDeleteArgs>(args: SelectSubset<T, lst_tokensDeleteArgs<ExtArgs>>): Prisma__lst_tokensClient<$Result.GetResult<Prisma.$lst_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lst_tokens.
     * @param {lst_tokensUpdateArgs} args - Arguments to update one Lst_tokens.
     * @example
     * // Update one Lst_tokens
     * const lst_tokens = await prisma.lst_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lst_tokensUpdateArgs>(args: SelectSubset<T, lst_tokensUpdateArgs<ExtArgs>>): Prisma__lst_tokensClient<$Result.GetResult<Prisma.$lst_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lst_tokens.
     * @param {lst_tokensDeleteManyArgs} args - Arguments to filter Lst_tokens to delete.
     * @example
     * // Delete a few Lst_tokens
     * const { count } = await prisma.lst_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lst_tokensDeleteManyArgs>(args?: SelectSubset<T, lst_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lst_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lst_tokens
     * const lst_tokens = await prisma.lst_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lst_tokensUpdateManyArgs>(args: SelectSubset<T, lst_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lst_tokens and returns the data updated in the database.
     * @param {lst_tokensUpdateManyAndReturnArgs} args - Arguments to update many Lst_tokens.
     * @example
     * // Update many Lst_tokens
     * const lst_tokens = await prisma.lst_tokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lst_tokens and only return the `id`
     * const lst_tokensWithIdOnly = await prisma.lst_tokens.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends lst_tokensUpdateManyAndReturnArgs>(args: SelectSubset<T, lst_tokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lst_tokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lst_tokens.
     * @param {lst_tokensUpsertArgs} args - Arguments to update or create a Lst_tokens.
     * @example
     * // Update or create a Lst_tokens
     * const lst_tokens = await prisma.lst_tokens.upsert({
     *   create: {
     *     // ... data to create a Lst_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lst_tokens we want to update
     *   }
     * })
     */
    upsert<T extends lst_tokensUpsertArgs>(args: SelectSubset<T, lst_tokensUpsertArgs<ExtArgs>>): Prisma__lst_tokensClient<$Result.GetResult<Prisma.$lst_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lst_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_tokensCountArgs} args - Arguments to filter Lst_tokens to count.
     * @example
     * // Count the number of Lst_tokens
     * const count = await prisma.lst_tokens.count({
     *   where: {
     *     // ... the filter for the Lst_tokens we want to count
     *   }
     * })
    **/
    count<T extends lst_tokensCountArgs>(
      args?: Subset<T, lst_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lst_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lst_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lst_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Lst_tokensAggregateArgs>(args: Subset<T, Lst_tokensAggregateArgs>): Prisma.PrismaPromise<GetLst_tokensAggregateType<T>>

    /**
     * Group by Lst_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_tokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends lst_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lst_tokensGroupByArgs['orderBy'] }
        : { orderBy?: lst_tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, lst_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLst_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lst_tokens model
   */
  readonly fields: lst_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lst_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lst_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lst_tokens model
   */
  interface lst_tokensFieldRefs {
    readonly id: FieldRef<"lst_tokens", 'String'>
    readonly symbol: FieldRef<"lst_tokens", 'String'>
    readonly mint_address: FieldRef<"lst_tokens", 'String'>
    readonly name: FieldRef<"lst_tokens", 'String'>
    readonly created_at: FieldRef<"lst_tokens", 'DateTime'>
    readonly updated_at: FieldRef<"lst_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * lst_tokens findUnique
   */
  export type lst_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tokens
     */
    select?: lst_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tokens
     */
    omit?: lst_tokensOmit<ExtArgs> | null
    /**
     * Filter, which lst_tokens to fetch.
     */
    where: lst_tokensWhereUniqueInput
  }

  /**
   * lst_tokens findUniqueOrThrow
   */
  export type lst_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tokens
     */
    select?: lst_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tokens
     */
    omit?: lst_tokensOmit<ExtArgs> | null
    /**
     * Filter, which lst_tokens to fetch.
     */
    where: lst_tokensWhereUniqueInput
  }

  /**
   * lst_tokens findFirst
   */
  export type lst_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tokens
     */
    select?: lst_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tokens
     */
    omit?: lst_tokensOmit<ExtArgs> | null
    /**
     * Filter, which lst_tokens to fetch.
     */
    where?: lst_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_tokens to fetch.
     */
    orderBy?: lst_tokensOrderByWithRelationInput | lst_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lst_tokens.
     */
    cursor?: lst_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lst_tokens.
     */
    distinct?: Lst_tokensScalarFieldEnum | Lst_tokensScalarFieldEnum[]
  }

  /**
   * lst_tokens findFirstOrThrow
   */
  export type lst_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tokens
     */
    select?: lst_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tokens
     */
    omit?: lst_tokensOmit<ExtArgs> | null
    /**
     * Filter, which lst_tokens to fetch.
     */
    where?: lst_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_tokens to fetch.
     */
    orderBy?: lst_tokensOrderByWithRelationInput | lst_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lst_tokens.
     */
    cursor?: lst_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lst_tokens.
     */
    distinct?: Lst_tokensScalarFieldEnum | Lst_tokensScalarFieldEnum[]
  }

  /**
   * lst_tokens findMany
   */
  export type lst_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tokens
     */
    select?: lst_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tokens
     */
    omit?: lst_tokensOmit<ExtArgs> | null
    /**
     * Filter, which lst_tokens to fetch.
     */
    where?: lst_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_tokens to fetch.
     */
    orderBy?: lst_tokensOrderByWithRelationInput | lst_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lst_tokens.
     */
    cursor?: lst_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_tokens.
     */
    skip?: number
    distinct?: Lst_tokensScalarFieldEnum | Lst_tokensScalarFieldEnum[]
  }

  /**
   * lst_tokens create
   */
  export type lst_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tokens
     */
    select?: lst_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tokens
     */
    omit?: lst_tokensOmit<ExtArgs> | null
    /**
     * The data needed to create a lst_tokens.
     */
    data: XOR<lst_tokensCreateInput, lst_tokensUncheckedCreateInput>
  }

  /**
   * lst_tokens createMany
   */
  export type lst_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lst_tokens.
     */
    data: lst_tokensCreateManyInput | lst_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lst_tokens createManyAndReturn
   */
  export type lst_tokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tokens
     */
    select?: lst_tokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tokens
     */
    omit?: lst_tokensOmit<ExtArgs> | null
    /**
     * The data used to create many lst_tokens.
     */
    data: lst_tokensCreateManyInput | lst_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lst_tokens update
   */
  export type lst_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tokens
     */
    select?: lst_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tokens
     */
    omit?: lst_tokensOmit<ExtArgs> | null
    /**
     * The data needed to update a lst_tokens.
     */
    data: XOR<lst_tokensUpdateInput, lst_tokensUncheckedUpdateInput>
    /**
     * Choose, which lst_tokens to update.
     */
    where: lst_tokensWhereUniqueInput
  }

  /**
   * lst_tokens updateMany
   */
  export type lst_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lst_tokens.
     */
    data: XOR<lst_tokensUpdateManyMutationInput, lst_tokensUncheckedUpdateManyInput>
    /**
     * Filter which lst_tokens to update
     */
    where?: lst_tokensWhereInput
    /**
     * Limit how many lst_tokens to update.
     */
    limit?: number
  }

  /**
   * lst_tokens updateManyAndReturn
   */
  export type lst_tokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tokens
     */
    select?: lst_tokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tokens
     */
    omit?: lst_tokensOmit<ExtArgs> | null
    /**
     * The data used to update lst_tokens.
     */
    data: XOR<lst_tokensUpdateManyMutationInput, lst_tokensUncheckedUpdateManyInput>
    /**
     * Filter which lst_tokens to update
     */
    where?: lst_tokensWhereInput
    /**
     * Limit how many lst_tokens to update.
     */
    limit?: number
  }

  /**
   * lst_tokens upsert
   */
  export type lst_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tokens
     */
    select?: lst_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tokens
     */
    omit?: lst_tokensOmit<ExtArgs> | null
    /**
     * The filter to search for the lst_tokens to update in case it exists.
     */
    where: lst_tokensWhereUniqueInput
    /**
     * In case the lst_tokens found by the `where` argument doesn't exist, create a new lst_tokens with this data.
     */
    create: XOR<lst_tokensCreateInput, lst_tokensUncheckedCreateInput>
    /**
     * In case the lst_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lst_tokensUpdateInput, lst_tokensUncheckedUpdateInput>
  }

  /**
   * lst_tokens delete
   */
  export type lst_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tokens
     */
    select?: lst_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tokens
     */
    omit?: lst_tokensOmit<ExtArgs> | null
    /**
     * Filter which lst_tokens to delete.
     */
    where: lst_tokensWhereUniqueInput
  }

  /**
   * lst_tokens deleteMany
   */
  export type lst_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lst_tokens to delete
     */
    where?: lst_tokensWhereInput
    /**
     * Limit how many lst_tokens to delete.
     */
    limit?: number
  }

  /**
   * lst_tokens without action
   */
  export type lst_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tokens
     */
    select?: lst_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tokens
     */
    omit?: lst_tokensOmit<ExtArgs> | null
  }


  /**
   * Model lst_tvl_data
   */

  export type AggregateLst_tvl_data = {
    _count: Lst_tvl_dataCountAggregateOutputType | null
    _avg: Lst_tvl_dataAvgAggregateOutputType | null
    _sum: Lst_tvl_dataSumAggregateOutputType | null
    _min: Lst_tvl_dataMinAggregateOutputType | null
    _max: Lst_tvl_dataMaxAggregateOutputType | null
  }

  export type Lst_tvl_dataAvgAggregateOutputType = {
    tvl_value: Decimal | null
  }

  export type Lst_tvl_dataSumAggregateOutputType = {
    tvl_value: Decimal | null
  }

  export type Lst_tvl_dataMinAggregateOutputType = {
    id: string | null
    lst_symbol: string | null
    tvl_value: Decimal | null
    collected_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Lst_tvl_dataMaxAggregateOutputType = {
    id: string | null
    lst_symbol: string | null
    tvl_value: Decimal | null
    collected_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Lst_tvl_dataCountAggregateOutputType = {
    id: number
    lst_symbol: number
    tvl_value: number
    collected_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Lst_tvl_dataAvgAggregateInputType = {
    tvl_value?: true
  }

  export type Lst_tvl_dataSumAggregateInputType = {
    tvl_value?: true
  }

  export type Lst_tvl_dataMinAggregateInputType = {
    id?: true
    lst_symbol?: true
    tvl_value?: true
    collected_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Lst_tvl_dataMaxAggregateInputType = {
    id?: true
    lst_symbol?: true
    tvl_value?: true
    collected_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Lst_tvl_dataCountAggregateInputType = {
    id?: true
    lst_symbol?: true
    tvl_value?: true
    collected_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Lst_tvl_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lst_tvl_data to aggregate.
     */
    where?: lst_tvl_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_tvl_data to fetch.
     */
    orderBy?: lst_tvl_dataOrderByWithRelationInput | lst_tvl_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lst_tvl_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_tvl_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_tvl_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lst_tvl_data
    **/
    _count?: true | Lst_tvl_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lst_tvl_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lst_tvl_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lst_tvl_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lst_tvl_dataMaxAggregateInputType
  }

  export type GetLst_tvl_dataAggregateType<T extends Lst_tvl_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateLst_tvl_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLst_tvl_data[P]>
      : GetScalarType<T[P], AggregateLst_tvl_data[P]>
  }




  export type lst_tvl_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lst_tvl_dataWhereInput
    orderBy?: lst_tvl_dataOrderByWithAggregationInput | lst_tvl_dataOrderByWithAggregationInput[]
    by: Lst_tvl_dataScalarFieldEnum[] | Lst_tvl_dataScalarFieldEnum
    having?: lst_tvl_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lst_tvl_dataCountAggregateInputType | true
    _avg?: Lst_tvl_dataAvgAggregateInputType
    _sum?: Lst_tvl_dataSumAggregateInputType
    _min?: Lst_tvl_dataMinAggregateInputType
    _max?: Lst_tvl_dataMaxAggregateInputType
  }

  export type Lst_tvl_dataGroupByOutputType = {
    id: string
    lst_symbol: string
    tvl_value: Decimal
    collected_at: Date
    created_at: Date
    updated_at: Date
    _count: Lst_tvl_dataCountAggregateOutputType | null
    _avg: Lst_tvl_dataAvgAggregateOutputType | null
    _sum: Lst_tvl_dataSumAggregateOutputType | null
    _min: Lst_tvl_dataMinAggregateOutputType | null
    _max: Lst_tvl_dataMaxAggregateOutputType | null
  }

  type GetLst_tvl_dataGroupByPayload<T extends lst_tvl_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lst_tvl_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lst_tvl_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lst_tvl_dataGroupByOutputType[P]>
            : GetScalarType<T[P], Lst_tvl_dataGroupByOutputType[P]>
        }
      >
    >


  export type lst_tvl_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lst_symbol?: boolean
    tvl_value?: boolean
    collected_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["lst_tvl_data"]>

  export type lst_tvl_dataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lst_symbol?: boolean
    tvl_value?: boolean
    collected_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["lst_tvl_data"]>

  export type lst_tvl_dataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lst_symbol?: boolean
    tvl_value?: boolean
    collected_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["lst_tvl_data"]>

  export type lst_tvl_dataSelectScalar = {
    id?: boolean
    lst_symbol?: boolean
    tvl_value?: boolean
    collected_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type lst_tvl_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lst_symbol" | "tvl_value" | "collected_at" | "created_at" | "updated_at", ExtArgs["result"]["lst_tvl_data"]>

  export type $lst_tvl_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lst_tvl_data"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lst_symbol: string
      tvl_value: Prisma.Decimal
      collected_at: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["lst_tvl_data"]>
    composites: {}
  }

  type lst_tvl_dataGetPayload<S extends boolean | null | undefined | lst_tvl_dataDefaultArgs> = $Result.GetResult<Prisma.$lst_tvl_dataPayload, S>

  type lst_tvl_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lst_tvl_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lst_tvl_dataCountAggregateInputType | true
    }

  export interface lst_tvl_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lst_tvl_data'], meta: { name: 'lst_tvl_data' } }
    /**
     * Find zero or one Lst_tvl_data that matches the filter.
     * @param {lst_tvl_dataFindUniqueArgs} args - Arguments to find a Lst_tvl_data
     * @example
     * // Get one Lst_tvl_data
     * const lst_tvl_data = await prisma.lst_tvl_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lst_tvl_dataFindUniqueArgs>(args: SelectSubset<T, lst_tvl_dataFindUniqueArgs<ExtArgs>>): Prisma__lst_tvl_dataClient<$Result.GetResult<Prisma.$lst_tvl_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lst_tvl_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lst_tvl_dataFindUniqueOrThrowArgs} args - Arguments to find a Lst_tvl_data
     * @example
     * // Get one Lst_tvl_data
     * const lst_tvl_data = await prisma.lst_tvl_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lst_tvl_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, lst_tvl_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lst_tvl_dataClient<$Result.GetResult<Prisma.$lst_tvl_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lst_tvl_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_tvl_dataFindFirstArgs} args - Arguments to find a Lst_tvl_data
     * @example
     * // Get one Lst_tvl_data
     * const lst_tvl_data = await prisma.lst_tvl_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lst_tvl_dataFindFirstArgs>(args?: SelectSubset<T, lst_tvl_dataFindFirstArgs<ExtArgs>>): Prisma__lst_tvl_dataClient<$Result.GetResult<Prisma.$lst_tvl_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lst_tvl_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_tvl_dataFindFirstOrThrowArgs} args - Arguments to find a Lst_tvl_data
     * @example
     * // Get one Lst_tvl_data
     * const lst_tvl_data = await prisma.lst_tvl_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lst_tvl_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, lst_tvl_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__lst_tvl_dataClient<$Result.GetResult<Prisma.$lst_tvl_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lst_tvl_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_tvl_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lst_tvl_data
     * const lst_tvl_data = await prisma.lst_tvl_data.findMany()
     * 
     * // Get first 10 Lst_tvl_data
     * const lst_tvl_data = await prisma.lst_tvl_data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lst_tvl_dataWithIdOnly = await prisma.lst_tvl_data.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lst_tvl_dataFindManyArgs>(args?: SelectSubset<T, lst_tvl_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lst_tvl_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lst_tvl_data.
     * @param {lst_tvl_dataCreateArgs} args - Arguments to create a Lst_tvl_data.
     * @example
     * // Create one Lst_tvl_data
     * const Lst_tvl_data = await prisma.lst_tvl_data.create({
     *   data: {
     *     // ... data to create a Lst_tvl_data
     *   }
     * })
     * 
     */
    create<T extends lst_tvl_dataCreateArgs>(args: SelectSubset<T, lst_tvl_dataCreateArgs<ExtArgs>>): Prisma__lst_tvl_dataClient<$Result.GetResult<Prisma.$lst_tvl_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lst_tvl_data.
     * @param {lst_tvl_dataCreateManyArgs} args - Arguments to create many Lst_tvl_data.
     * @example
     * // Create many Lst_tvl_data
     * const lst_tvl_data = await prisma.lst_tvl_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lst_tvl_dataCreateManyArgs>(args?: SelectSubset<T, lst_tvl_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lst_tvl_data and returns the data saved in the database.
     * @param {lst_tvl_dataCreateManyAndReturnArgs} args - Arguments to create many Lst_tvl_data.
     * @example
     * // Create many Lst_tvl_data
     * const lst_tvl_data = await prisma.lst_tvl_data.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lst_tvl_data and only return the `id`
     * const lst_tvl_dataWithIdOnly = await prisma.lst_tvl_data.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lst_tvl_dataCreateManyAndReturnArgs>(args?: SelectSubset<T, lst_tvl_dataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lst_tvl_dataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lst_tvl_data.
     * @param {lst_tvl_dataDeleteArgs} args - Arguments to delete one Lst_tvl_data.
     * @example
     * // Delete one Lst_tvl_data
     * const Lst_tvl_data = await prisma.lst_tvl_data.delete({
     *   where: {
     *     // ... filter to delete one Lst_tvl_data
     *   }
     * })
     * 
     */
    delete<T extends lst_tvl_dataDeleteArgs>(args: SelectSubset<T, lst_tvl_dataDeleteArgs<ExtArgs>>): Prisma__lst_tvl_dataClient<$Result.GetResult<Prisma.$lst_tvl_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lst_tvl_data.
     * @param {lst_tvl_dataUpdateArgs} args - Arguments to update one Lst_tvl_data.
     * @example
     * // Update one Lst_tvl_data
     * const lst_tvl_data = await prisma.lst_tvl_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lst_tvl_dataUpdateArgs>(args: SelectSubset<T, lst_tvl_dataUpdateArgs<ExtArgs>>): Prisma__lst_tvl_dataClient<$Result.GetResult<Prisma.$lst_tvl_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lst_tvl_data.
     * @param {lst_tvl_dataDeleteManyArgs} args - Arguments to filter Lst_tvl_data to delete.
     * @example
     * // Delete a few Lst_tvl_data
     * const { count } = await prisma.lst_tvl_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lst_tvl_dataDeleteManyArgs>(args?: SelectSubset<T, lst_tvl_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lst_tvl_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_tvl_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lst_tvl_data
     * const lst_tvl_data = await prisma.lst_tvl_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lst_tvl_dataUpdateManyArgs>(args: SelectSubset<T, lst_tvl_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lst_tvl_data and returns the data updated in the database.
     * @param {lst_tvl_dataUpdateManyAndReturnArgs} args - Arguments to update many Lst_tvl_data.
     * @example
     * // Update many Lst_tvl_data
     * const lst_tvl_data = await prisma.lst_tvl_data.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lst_tvl_data and only return the `id`
     * const lst_tvl_dataWithIdOnly = await prisma.lst_tvl_data.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends lst_tvl_dataUpdateManyAndReturnArgs>(args: SelectSubset<T, lst_tvl_dataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lst_tvl_dataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lst_tvl_data.
     * @param {lst_tvl_dataUpsertArgs} args - Arguments to update or create a Lst_tvl_data.
     * @example
     * // Update or create a Lst_tvl_data
     * const lst_tvl_data = await prisma.lst_tvl_data.upsert({
     *   create: {
     *     // ... data to create a Lst_tvl_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lst_tvl_data we want to update
     *   }
     * })
     */
    upsert<T extends lst_tvl_dataUpsertArgs>(args: SelectSubset<T, lst_tvl_dataUpsertArgs<ExtArgs>>): Prisma__lst_tvl_dataClient<$Result.GetResult<Prisma.$lst_tvl_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lst_tvl_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_tvl_dataCountArgs} args - Arguments to filter Lst_tvl_data to count.
     * @example
     * // Count the number of Lst_tvl_data
     * const count = await prisma.lst_tvl_data.count({
     *   where: {
     *     // ... the filter for the Lst_tvl_data we want to count
     *   }
     * })
    **/
    count<T extends lst_tvl_dataCountArgs>(
      args?: Subset<T, lst_tvl_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lst_tvl_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lst_tvl_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lst_tvl_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Lst_tvl_dataAggregateArgs>(args: Subset<T, Lst_tvl_dataAggregateArgs>): Prisma.PrismaPromise<GetLst_tvl_dataAggregateType<T>>

    /**
     * Group by Lst_tvl_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lst_tvl_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends lst_tvl_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lst_tvl_dataGroupByArgs['orderBy'] }
        : { orderBy?: lst_tvl_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, lst_tvl_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLst_tvl_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lst_tvl_data model
   */
  readonly fields: lst_tvl_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lst_tvl_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lst_tvl_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lst_tvl_data model
   */
  interface lst_tvl_dataFieldRefs {
    readonly id: FieldRef<"lst_tvl_data", 'String'>
    readonly lst_symbol: FieldRef<"lst_tvl_data", 'String'>
    readonly tvl_value: FieldRef<"lst_tvl_data", 'Decimal'>
    readonly collected_at: FieldRef<"lst_tvl_data", 'DateTime'>
    readonly created_at: FieldRef<"lst_tvl_data", 'DateTime'>
    readonly updated_at: FieldRef<"lst_tvl_data", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * lst_tvl_data findUnique
   */
  export type lst_tvl_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tvl_data
     */
    select?: lst_tvl_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tvl_data
     */
    omit?: lst_tvl_dataOmit<ExtArgs> | null
    /**
     * Filter, which lst_tvl_data to fetch.
     */
    where: lst_tvl_dataWhereUniqueInput
  }

  /**
   * lst_tvl_data findUniqueOrThrow
   */
  export type lst_tvl_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tvl_data
     */
    select?: lst_tvl_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tvl_data
     */
    omit?: lst_tvl_dataOmit<ExtArgs> | null
    /**
     * Filter, which lst_tvl_data to fetch.
     */
    where: lst_tvl_dataWhereUniqueInput
  }

  /**
   * lst_tvl_data findFirst
   */
  export type lst_tvl_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tvl_data
     */
    select?: lst_tvl_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tvl_data
     */
    omit?: lst_tvl_dataOmit<ExtArgs> | null
    /**
     * Filter, which lst_tvl_data to fetch.
     */
    where?: lst_tvl_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_tvl_data to fetch.
     */
    orderBy?: lst_tvl_dataOrderByWithRelationInput | lst_tvl_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lst_tvl_data.
     */
    cursor?: lst_tvl_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_tvl_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_tvl_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lst_tvl_data.
     */
    distinct?: Lst_tvl_dataScalarFieldEnum | Lst_tvl_dataScalarFieldEnum[]
  }

  /**
   * lst_tvl_data findFirstOrThrow
   */
  export type lst_tvl_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tvl_data
     */
    select?: lst_tvl_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tvl_data
     */
    omit?: lst_tvl_dataOmit<ExtArgs> | null
    /**
     * Filter, which lst_tvl_data to fetch.
     */
    where?: lst_tvl_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_tvl_data to fetch.
     */
    orderBy?: lst_tvl_dataOrderByWithRelationInput | lst_tvl_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lst_tvl_data.
     */
    cursor?: lst_tvl_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_tvl_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_tvl_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lst_tvl_data.
     */
    distinct?: Lst_tvl_dataScalarFieldEnum | Lst_tvl_dataScalarFieldEnum[]
  }

  /**
   * lst_tvl_data findMany
   */
  export type lst_tvl_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tvl_data
     */
    select?: lst_tvl_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tvl_data
     */
    omit?: lst_tvl_dataOmit<ExtArgs> | null
    /**
     * Filter, which lst_tvl_data to fetch.
     */
    where?: lst_tvl_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lst_tvl_data to fetch.
     */
    orderBy?: lst_tvl_dataOrderByWithRelationInput | lst_tvl_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lst_tvl_data.
     */
    cursor?: lst_tvl_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lst_tvl_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lst_tvl_data.
     */
    skip?: number
    distinct?: Lst_tvl_dataScalarFieldEnum | Lst_tvl_dataScalarFieldEnum[]
  }

  /**
   * lst_tvl_data create
   */
  export type lst_tvl_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tvl_data
     */
    select?: lst_tvl_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tvl_data
     */
    omit?: lst_tvl_dataOmit<ExtArgs> | null
    /**
     * The data needed to create a lst_tvl_data.
     */
    data: XOR<lst_tvl_dataCreateInput, lst_tvl_dataUncheckedCreateInput>
  }

  /**
   * lst_tvl_data createMany
   */
  export type lst_tvl_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lst_tvl_data.
     */
    data: lst_tvl_dataCreateManyInput | lst_tvl_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lst_tvl_data createManyAndReturn
   */
  export type lst_tvl_dataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tvl_data
     */
    select?: lst_tvl_dataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tvl_data
     */
    omit?: lst_tvl_dataOmit<ExtArgs> | null
    /**
     * The data used to create many lst_tvl_data.
     */
    data: lst_tvl_dataCreateManyInput | lst_tvl_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lst_tvl_data update
   */
  export type lst_tvl_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tvl_data
     */
    select?: lst_tvl_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tvl_data
     */
    omit?: lst_tvl_dataOmit<ExtArgs> | null
    /**
     * The data needed to update a lst_tvl_data.
     */
    data: XOR<lst_tvl_dataUpdateInput, lst_tvl_dataUncheckedUpdateInput>
    /**
     * Choose, which lst_tvl_data to update.
     */
    where: lst_tvl_dataWhereUniqueInput
  }

  /**
   * lst_tvl_data updateMany
   */
  export type lst_tvl_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lst_tvl_data.
     */
    data: XOR<lst_tvl_dataUpdateManyMutationInput, lst_tvl_dataUncheckedUpdateManyInput>
    /**
     * Filter which lst_tvl_data to update
     */
    where?: lst_tvl_dataWhereInput
    /**
     * Limit how many lst_tvl_data to update.
     */
    limit?: number
  }

  /**
   * lst_tvl_data updateManyAndReturn
   */
  export type lst_tvl_dataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tvl_data
     */
    select?: lst_tvl_dataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tvl_data
     */
    omit?: lst_tvl_dataOmit<ExtArgs> | null
    /**
     * The data used to update lst_tvl_data.
     */
    data: XOR<lst_tvl_dataUpdateManyMutationInput, lst_tvl_dataUncheckedUpdateManyInput>
    /**
     * Filter which lst_tvl_data to update
     */
    where?: lst_tvl_dataWhereInput
    /**
     * Limit how many lst_tvl_data to update.
     */
    limit?: number
  }

  /**
   * lst_tvl_data upsert
   */
  export type lst_tvl_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tvl_data
     */
    select?: lst_tvl_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tvl_data
     */
    omit?: lst_tvl_dataOmit<ExtArgs> | null
    /**
     * The filter to search for the lst_tvl_data to update in case it exists.
     */
    where: lst_tvl_dataWhereUniqueInput
    /**
     * In case the lst_tvl_data found by the `where` argument doesn't exist, create a new lst_tvl_data with this data.
     */
    create: XOR<lst_tvl_dataCreateInput, lst_tvl_dataUncheckedCreateInput>
    /**
     * In case the lst_tvl_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lst_tvl_dataUpdateInput, lst_tvl_dataUncheckedUpdateInput>
  }

  /**
   * lst_tvl_data delete
   */
  export type lst_tvl_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tvl_data
     */
    select?: lst_tvl_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tvl_data
     */
    omit?: lst_tvl_dataOmit<ExtArgs> | null
    /**
     * Filter which lst_tvl_data to delete.
     */
    where: lst_tvl_dataWhereUniqueInput
  }

  /**
   * lst_tvl_data deleteMany
   */
  export type lst_tvl_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lst_tvl_data to delete
     */
    where?: lst_tvl_dataWhereInput
    /**
     * Limit how many lst_tvl_data to delete.
     */
    limit?: number
  }

  /**
   * lst_tvl_data without action
   */
  export type lst_tvl_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lst_tvl_data
     */
    select?: lst_tvl_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lst_tvl_data
     */
    omit?: lst_tvl_dataOmit<ExtArgs> | null
  }


  /**
   * Model user_snapshots
   */

  export type AggregateUser_snapshots = {
    _count: User_snapshotsCountAggregateOutputType | null
    _avg: User_snapshotsAvgAggregateOutputType | null
    _sum: User_snapshotsSumAggregateOutputType | null
    _min: User_snapshotsMinAggregateOutputType | null
    _max: User_snapshotsMaxAggregateOutputType | null
  }

  export type User_snapshotsAvgAggregateOutputType = {
    sol_value: Decimal | null
  }

  export type User_snapshotsSumAggregateOutputType = {
    sol_value: Decimal | null
  }

  export type User_snapshotsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    epoch_snapshot_id: string | null
    current_position: string | null
    sol_value: Decimal | null
  }

  export type User_snapshotsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    epoch_snapshot_id: string | null
    current_position: string | null
    sol_value: Decimal | null
  }

  export type User_snapshotsCountAggregateOutputType = {
    id: number
    user_id: number
    epoch_snapshot_id: number
    current_position: number
    sol_value: number
    _all: number
  }


  export type User_snapshotsAvgAggregateInputType = {
    sol_value?: true
  }

  export type User_snapshotsSumAggregateInputType = {
    sol_value?: true
  }

  export type User_snapshotsMinAggregateInputType = {
    id?: true
    user_id?: true
    epoch_snapshot_id?: true
    current_position?: true
    sol_value?: true
  }

  export type User_snapshotsMaxAggregateInputType = {
    id?: true
    user_id?: true
    epoch_snapshot_id?: true
    current_position?: true
    sol_value?: true
  }

  export type User_snapshotsCountAggregateInputType = {
    id?: true
    user_id?: true
    epoch_snapshot_id?: true
    current_position?: true
    sol_value?: true
    _all?: true
  }

  export type User_snapshotsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_snapshots to aggregate.
     */
    where?: user_snapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_snapshots to fetch.
     */
    orderBy?: user_snapshotsOrderByWithRelationInput | user_snapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_snapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_snapshots
    **/
    _count?: true | User_snapshotsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_snapshotsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_snapshotsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_snapshotsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_snapshotsMaxAggregateInputType
  }

  export type GetUser_snapshotsAggregateType<T extends User_snapshotsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_snapshots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_snapshots[P]>
      : GetScalarType<T[P], AggregateUser_snapshots[P]>
  }




  export type user_snapshotsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_snapshotsWhereInput
    orderBy?: user_snapshotsOrderByWithAggregationInput | user_snapshotsOrderByWithAggregationInput[]
    by: User_snapshotsScalarFieldEnum[] | User_snapshotsScalarFieldEnum
    having?: user_snapshotsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_snapshotsCountAggregateInputType | true
    _avg?: User_snapshotsAvgAggregateInputType
    _sum?: User_snapshotsSumAggregateInputType
    _min?: User_snapshotsMinAggregateInputType
    _max?: User_snapshotsMaxAggregateInputType
  }

  export type User_snapshotsGroupByOutputType = {
    id: string
    user_id: string
    epoch_snapshot_id: string
    current_position: string
    sol_value: Decimal
    _count: User_snapshotsCountAggregateOutputType | null
    _avg: User_snapshotsAvgAggregateOutputType | null
    _sum: User_snapshotsSumAggregateOutputType | null
    _min: User_snapshotsMinAggregateOutputType | null
    _max: User_snapshotsMaxAggregateOutputType | null
  }

  type GetUser_snapshotsGroupByPayload<T extends user_snapshotsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_snapshotsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_snapshotsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_snapshotsGroupByOutputType[P]>
            : GetScalarType<T[P], User_snapshotsGroupByOutputType[P]>
        }
      >
    >


  export type user_snapshotsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    epoch_snapshot_id?: boolean
    current_position?: boolean
    sol_value?: boolean
    epoch_snapshots?: boolean | epoch_snapshotsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_snapshots"]>

  export type user_snapshotsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    epoch_snapshot_id?: boolean
    current_position?: boolean
    sol_value?: boolean
    epoch_snapshots?: boolean | epoch_snapshotsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_snapshots"]>

  export type user_snapshotsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    epoch_snapshot_id?: boolean
    current_position?: boolean
    sol_value?: boolean
    epoch_snapshots?: boolean | epoch_snapshotsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_snapshots"]>

  export type user_snapshotsSelectScalar = {
    id?: boolean
    user_id?: boolean
    epoch_snapshot_id?: boolean
    current_position?: boolean
    sol_value?: boolean
  }

  export type user_snapshotsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "epoch_snapshot_id" | "current_position" | "sol_value", ExtArgs["result"]["user_snapshots"]>
  export type user_snapshotsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epoch_snapshots?: boolean | epoch_snapshotsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_snapshotsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epoch_snapshots?: boolean | epoch_snapshotsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_snapshotsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epoch_snapshots?: boolean | epoch_snapshotsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_snapshotsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_snapshots"
    objects: {
      epoch_snapshots: Prisma.$epoch_snapshotsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      epoch_snapshot_id: string
      current_position: string
      sol_value: Prisma.Decimal
    }, ExtArgs["result"]["user_snapshots"]>
    composites: {}
  }

  type user_snapshotsGetPayload<S extends boolean | null | undefined | user_snapshotsDefaultArgs> = $Result.GetResult<Prisma.$user_snapshotsPayload, S>

  type user_snapshotsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_snapshotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_snapshotsCountAggregateInputType | true
    }

  export interface user_snapshotsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_snapshots'], meta: { name: 'user_snapshots' } }
    /**
     * Find zero or one User_snapshots that matches the filter.
     * @param {user_snapshotsFindUniqueArgs} args - Arguments to find a User_snapshots
     * @example
     * // Get one User_snapshots
     * const user_snapshots = await prisma.user_snapshots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_snapshotsFindUniqueArgs>(args: SelectSubset<T, user_snapshotsFindUniqueArgs<ExtArgs>>): Prisma__user_snapshotsClient<$Result.GetResult<Prisma.$user_snapshotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_snapshots that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_snapshotsFindUniqueOrThrowArgs} args - Arguments to find a User_snapshots
     * @example
     * // Get one User_snapshots
     * const user_snapshots = await prisma.user_snapshots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_snapshotsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_snapshotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_snapshotsClient<$Result.GetResult<Prisma.$user_snapshotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_snapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_snapshotsFindFirstArgs} args - Arguments to find a User_snapshots
     * @example
     * // Get one User_snapshots
     * const user_snapshots = await prisma.user_snapshots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_snapshotsFindFirstArgs>(args?: SelectSubset<T, user_snapshotsFindFirstArgs<ExtArgs>>): Prisma__user_snapshotsClient<$Result.GetResult<Prisma.$user_snapshotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_snapshots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_snapshotsFindFirstOrThrowArgs} args - Arguments to find a User_snapshots
     * @example
     * // Get one User_snapshots
     * const user_snapshots = await prisma.user_snapshots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_snapshotsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_snapshotsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_snapshotsClient<$Result.GetResult<Prisma.$user_snapshotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_snapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_snapshotsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_snapshots
     * const user_snapshots = await prisma.user_snapshots.findMany()
     * 
     * // Get first 10 User_snapshots
     * const user_snapshots = await prisma.user_snapshots.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_snapshotsWithIdOnly = await prisma.user_snapshots.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_snapshotsFindManyArgs>(args?: SelectSubset<T, user_snapshotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_snapshotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_snapshots.
     * @param {user_snapshotsCreateArgs} args - Arguments to create a User_snapshots.
     * @example
     * // Create one User_snapshots
     * const User_snapshots = await prisma.user_snapshots.create({
     *   data: {
     *     // ... data to create a User_snapshots
     *   }
     * })
     * 
     */
    create<T extends user_snapshotsCreateArgs>(args: SelectSubset<T, user_snapshotsCreateArgs<ExtArgs>>): Prisma__user_snapshotsClient<$Result.GetResult<Prisma.$user_snapshotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_snapshots.
     * @param {user_snapshotsCreateManyArgs} args - Arguments to create many User_snapshots.
     * @example
     * // Create many User_snapshots
     * const user_snapshots = await prisma.user_snapshots.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_snapshotsCreateManyArgs>(args?: SelectSubset<T, user_snapshotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_snapshots and returns the data saved in the database.
     * @param {user_snapshotsCreateManyAndReturnArgs} args - Arguments to create many User_snapshots.
     * @example
     * // Create many User_snapshots
     * const user_snapshots = await prisma.user_snapshots.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_snapshots and only return the `id`
     * const user_snapshotsWithIdOnly = await prisma.user_snapshots.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_snapshotsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_snapshotsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_snapshotsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_snapshots.
     * @param {user_snapshotsDeleteArgs} args - Arguments to delete one User_snapshots.
     * @example
     * // Delete one User_snapshots
     * const User_snapshots = await prisma.user_snapshots.delete({
     *   where: {
     *     // ... filter to delete one User_snapshots
     *   }
     * })
     * 
     */
    delete<T extends user_snapshotsDeleteArgs>(args: SelectSubset<T, user_snapshotsDeleteArgs<ExtArgs>>): Prisma__user_snapshotsClient<$Result.GetResult<Prisma.$user_snapshotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_snapshots.
     * @param {user_snapshotsUpdateArgs} args - Arguments to update one User_snapshots.
     * @example
     * // Update one User_snapshots
     * const user_snapshots = await prisma.user_snapshots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_snapshotsUpdateArgs>(args: SelectSubset<T, user_snapshotsUpdateArgs<ExtArgs>>): Prisma__user_snapshotsClient<$Result.GetResult<Prisma.$user_snapshotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_snapshots.
     * @param {user_snapshotsDeleteManyArgs} args - Arguments to filter User_snapshots to delete.
     * @example
     * // Delete a few User_snapshots
     * const { count } = await prisma.user_snapshots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_snapshotsDeleteManyArgs>(args?: SelectSubset<T, user_snapshotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_snapshotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_snapshots
     * const user_snapshots = await prisma.user_snapshots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_snapshotsUpdateManyArgs>(args: SelectSubset<T, user_snapshotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_snapshots and returns the data updated in the database.
     * @param {user_snapshotsUpdateManyAndReturnArgs} args - Arguments to update many User_snapshots.
     * @example
     * // Update many User_snapshots
     * const user_snapshots = await prisma.user_snapshots.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_snapshots and only return the `id`
     * const user_snapshotsWithIdOnly = await prisma.user_snapshots.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_snapshotsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_snapshotsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_snapshotsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_snapshots.
     * @param {user_snapshotsUpsertArgs} args - Arguments to update or create a User_snapshots.
     * @example
     * // Update or create a User_snapshots
     * const user_snapshots = await prisma.user_snapshots.upsert({
     *   create: {
     *     // ... data to create a User_snapshots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_snapshots we want to update
     *   }
     * })
     */
    upsert<T extends user_snapshotsUpsertArgs>(args: SelectSubset<T, user_snapshotsUpsertArgs<ExtArgs>>): Prisma__user_snapshotsClient<$Result.GetResult<Prisma.$user_snapshotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_snapshotsCountArgs} args - Arguments to filter User_snapshots to count.
     * @example
     * // Count the number of User_snapshots
     * const count = await prisma.user_snapshots.count({
     *   where: {
     *     // ... the filter for the User_snapshots we want to count
     *   }
     * })
    **/
    count<T extends user_snapshotsCountArgs>(
      args?: Subset<T, user_snapshotsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_snapshotsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_snapshotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_snapshotsAggregateArgs>(args: Subset<T, User_snapshotsAggregateArgs>): Prisma.PrismaPromise<GetUser_snapshotsAggregateType<T>>

    /**
     * Group by User_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_snapshotsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_snapshotsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_snapshotsGroupByArgs['orderBy'] }
        : { orderBy?: user_snapshotsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_snapshotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_snapshotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_snapshots model
   */
  readonly fields: user_snapshotsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_snapshots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_snapshotsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    epoch_snapshots<T extends epoch_snapshotsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, epoch_snapshotsDefaultArgs<ExtArgs>>): Prisma__epoch_snapshotsClient<$Result.GetResult<Prisma.$epoch_snapshotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_snapshots model
   */
  interface user_snapshotsFieldRefs {
    readonly id: FieldRef<"user_snapshots", 'String'>
    readonly user_id: FieldRef<"user_snapshots", 'String'>
    readonly epoch_snapshot_id: FieldRef<"user_snapshots", 'String'>
    readonly current_position: FieldRef<"user_snapshots", 'String'>
    readonly sol_value: FieldRef<"user_snapshots", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * user_snapshots findUnique
   */
  export type user_snapshotsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_snapshots
     */
    select?: user_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_snapshots
     */
    omit?: user_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_snapshotsInclude<ExtArgs> | null
    /**
     * Filter, which user_snapshots to fetch.
     */
    where: user_snapshotsWhereUniqueInput
  }

  /**
   * user_snapshots findUniqueOrThrow
   */
  export type user_snapshotsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_snapshots
     */
    select?: user_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_snapshots
     */
    omit?: user_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_snapshotsInclude<ExtArgs> | null
    /**
     * Filter, which user_snapshots to fetch.
     */
    where: user_snapshotsWhereUniqueInput
  }

  /**
   * user_snapshots findFirst
   */
  export type user_snapshotsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_snapshots
     */
    select?: user_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_snapshots
     */
    omit?: user_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_snapshotsInclude<ExtArgs> | null
    /**
     * Filter, which user_snapshots to fetch.
     */
    where?: user_snapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_snapshots to fetch.
     */
    orderBy?: user_snapshotsOrderByWithRelationInput | user_snapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_snapshots.
     */
    cursor?: user_snapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_snapshots.
     */
    distinct?: User_snapshotsScalarFieldEnum | User_snapshotsScalarFieldEnum[]
  }

  /**
   * user_snapshots findFirstOrThrow
   */
  export type user_snapshotsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_snapshots
     */
    select?: user_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_snapshots
     */
    omit?: user_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_snapshotsInclude<ExtArgs> | null
    /**
     * Filter, which user_snapshots to fetch.
     */
    where?: user_snapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_snapshots to fetch.
     */
    orderBy?: user_snapshotsOrderByWithRelationInput | user_snapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_snapshots.
     */
    cursor?: user_snapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_snapshots.
     */
    distinct?: User_snapshotsScalarFieldEnum | User_snapshotsScalarFieldEnum[]
  }

  /**
   * user_snapshots findMany
   */
  export type user_snapshotsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_snapshots
     */
    select?: user_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_snapshots
     */
    omit?: user_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_snapshotsInclude<ExtArgs> | null
    /**
     * Filter, which user_snapshots to fetch.
     */
    where?: user_snapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_snapshots to fetch.
     */
    orderBy?: user_snapshotsOrderByWithRelationInput | user_snapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_snapshots.
     */
    cursor?: user_snapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_snapshots.
     */
    skip?: number
    distinct?: User_snapshotsScalarFieldEnum | User_snapshotsScalarFieldEnum[]
  }

  /**
   * user_snapshots create
   */
  export type user_snapshotsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_snapshots
     */
    select?: user_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_snapshots
     */
    omit?: user_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_snapshotsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_snapshots.
     */
    data: XOR<user_snapshotsCreateInput, user_snapshotsUncheckedCreateInput>
  }

  /**
   * user_snapshots createMany
   */
  export type user_snapshotsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_snapshots.
     */
    data: user_snapshotsCreateManyInput | user_snapshotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_snapshots createManyAndReturn
   */
  export type user_snapshotsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_snapshots
     */
    select?: user_snapshotsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_snapshots
     */
    omit?: user_snapshotsOmit<ExtArgs> | null
    /**
     * The data used to create many user_snapshots.
     */
    data: user_snapshotsCreateManyInput | user_snapshotsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_snapshotsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_snapshots update
   */
  export type user_snapshotsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_snapshots
     */
    select?: user_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_snapshots
     */
    omit?: user_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_snapshotsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_snapshots.
     */
    data: XOR<user_snapshotsUpdateInput, user_snapshotsUncheckedUpdateInput>
    /**
     * Choose, which user_snapshots to update.
     */
    where: user_snapshotsWhereUniqueInput
  }

  /**
   * user_snapshots updateMany
   */
  export type user_snapshotsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_snapshots.
     */
    data: XOR<user_snapshotsUpdateManyMutationInput, user_snapshotsUncheckedUpdateManyInput>
    /**
     * Filter which user_snapshots to update
     */
    where?: user_snapshotsWhereInput
    /**
     * Limit how many user_snapshots to update.
     */
    limit?: number
  }

  /**
   * user_snapshots updateManyAndReturn
   */
  export type user_snapshotsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_snapshots
     */
    select?: user_snapshotsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_snapshots
     */
    omit?: user_snapshotsOmit<ExtArgs> | null
    /**
     * The data used to update user_snapshots.
     */
    data: XOR<user_snapshotsUpdateManyMutationInput, user_snapshotsUncheckedUpdateManyInput>
    /**
     * Filter which user_snapshots to update
     */
    where?: user_snapshotsWhereInput
    /**
     * Limit how many user_snapshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_snapshotsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_snapshots upsert
   */
  export type user_snapshotsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_snapshots
     */
    select?: user_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_snapshots
     */
    omit?: user_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_snapshotsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_snapshots to update in case it exists.
     */
    where: user_snapshotsWhereUniqueInput
    /**
     * In case the user_snapshots found by the `where` argument doesn't exist, create a new user_snapshots with this data.
     */
    create: XOR<user_snapshotsCreateInput, user_snapshotsUncheckedCreateInput>
    /**
     * In case the user_snapshots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_snapshotsUpdateInput, user_snapshotsUncheckedUpdateInput>
  }

  /**
   * user_snapshots delete
   */
  export type user_snapshotsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_snapshots
     */
    select?: user_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_snapshots
     */
    omit?: user_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_snapshotsInclude<ExtArgs> | null
    /**
     * Filter which user_snapshots to delete.
     */
    where: user_snapshotsWhereUniqueInput
  }

  /**
   * user_snapshots deleteMany
   */
  export type user_snapshotsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_snapshots to delete
     */
    where?: user_snapshotsWhereInput
    /**
     * Limit how many user_snapshots to delete.
     */
    limit?: number
  }

  /**
   * user_snapshots without action
   */
  export type user_snapshotsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_snapshots
     */
    select?: user_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_snapshots
     */
    omit?: user_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_snapshotsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    privy_id: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    privy_id: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    created_at: number
    privy_id: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    created_at?: true
    privy_id?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    created_at?: true
    privy_id?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    created_at?: true
    privy_id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    created_at: Date
    privy_id: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    privy_id?: boolean
    deposits?: boolean | users$depositsArgs<ExtArgs>
    user_snapshots?: boolean | users$user_snapshotsArgs<ExtArgs>
    withdrawals?: boolean | users$withdrawalsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    privy_id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    privy_id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    created_at?: boolean
    privy_id?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "privy_id", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposits?: boolean | users$depositsArgs<ExtArgs>
    user_snapshots?: boolean | users$user_snapshotsArgs<ExtArgs>
    withdrawals?: boolean | users$withdrawalsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      deposits: Prisma.$depositsPayload<ExtArgs>[]
      user_snapshots: Prisma.$user_snapshotsPayload<ExtArgs>[]
      withdrawals: Prisma.$withdrawalsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      privy_id: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deposits<T extends users$depositsArgs<ExtArgs> = {}>(args?: Subset<T, users$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$depositsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_snapshots<T extends users$user_snapshotsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_snapshotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    withdrawals<T extends users$withdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, users$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly privy_id: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.deposits
   */
  export type users$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deposits
     */
    select?: depositsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deposits
     */
    omit?: depositsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: depositsInclude<ExtArgs> | null
    where?: depositsWhereInput
    orderBy?: depositsOrderByWithRelationInput | depositsOrderByWithRelationInput[]
    cursor?: depositsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepositsScalarFieldEnum | DepositsScalarFieldEnum[]
  }

  /**
   * users.user_snapshots
   */
  export type users$user_snapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_snapshots
     */
    select?: user_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_snapshots
     */
    omit?: user_snapshotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_snapshotsInclude<ExtArgs> | null
    where?: user_snapshotsWhereInput
    orderBy?: user_snapshotsOrderByWithRelationInput | user_snapshotsOrderByWithRelationInput[]
    cursor?: user_snapshotsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_snapshotsScalarFieldEnum | User_snapshotsScalarFieldEnum[]
  }

  /**
   * users.withdrawals
   */
  export type users$withdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    where?: withdrawalsWhereInput
    orderBy?: withdrawalsOrderByWithRelationInput | withdrawalsOrderByWithRelationInput[]
    cursor?: withdrawalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalsScalarFieldEnum | WithdrawalsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model withdrawals
   */

  export type AggregateWithdrawals = {
    _count: WithdrawalsCountAggregateOutputType | null
    _avg: WithdrawalsAvgAggregateOutputType | null
    _sum: WithdrawalsSumAggregateOutputType | null
    _min: WithdrawalsMinAggregateOutputType | null
    _max: WithdrawalsMaxAggregateOutputType | null
  }

  export type WithdrawalsAvgAggregateOutputType = {
    amount_sol: Decimal | null
  }

  export type WithdrawalsSumAggregateOutputType = {
    amount_sol: Decimal | null
  }

  export type WithdrawalsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    amount_sol: Decimal | null
    type: string | null
    destination_chain: string | null
    tx_hash: string | null
    withdrawn_at: Date | null
  }

  export type WithdrawalsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    amount_sol: Decimal | null
    type: string | null
    destination_chain: string | null
    tx_hash: string | null
    withdrawn_at: Date | null
  }

  export type WithdrawalsCountAggregateOutputType = {
    id: number
    user_id: number
    amount_sol: number
    type: number
    destination_chain: number
    tx_hash: number
    withdrawn_at: number
    _all: number
  }


  export type WithdrawalsAvgAggregateInputType = {
    amount_sol?: true
  }

  export type WithdrawalsSumAggregateInputType = {
    amount_sol?: true
  }

  export type WithdrawalsMinAggregateInputType = {
    id?: true
    user_id?: true
    amount_sol?: true
    type?: true
    destination_chain?: true
    tx_hash?: true
    withdrawn_at?: true
  }

  export type WithdrawalsMaxAggregateInputType = {
    id?: true
    user_id?: true
    amount_sol?: true
    type?: true
    destination_chain?: true
    tx_hash?: true
    withdrawn_at?: true
  }

  export type WithdrawalsCountAggregateInputType = {
    id?: true
    user_id?: true
    amount_sol?: true
    type?: true
    destination_chain?: true
    tx_hash?: true
    withdrawn_at?: true
    _all?: true
  }

  export type WithdrawalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which withdrawals to aggregate.
     */
    where?: withdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalsOrderByWithRelationInput | withdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: withdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned withdrawals
    **/
    _count?: true | WithdrawalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalsMaxAggregateInputType
  }

  export type GetWithdrawalsAggregateType<T extends WithdrawalsAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawals[P]>
      : GetScalarType<T[P], AggregateWithdrawals[P]>
  }




  export type withdrawalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: withdrawalsWhereInput
    orderBy?: withdrawalsOrderByWithAggregationInput | withdrawalsOrderByWithAggregationInput[]
    by: WithdrawalsScalarFieldEnum[] | WithdrawalsScalarFieldEnum
    having?: withdrawalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalsCountAggregateInputType | true
    _avg?: WithdrawalsAvgAggregateInputType
    _sum?: WithdrawalsSumAggregateInputType
    _min?: WithdrawalsMinAggregateInputType
    _max?: WithdrawalsMaxAggregateInputType
  }

  export type WithdrawalsGroupByOutputType = {
    id: string
    user_id: string
    amount_sol: Decimal
    type: string
    destination_chain: string
    tx_hash: string | null
    withdrawn_at: Date
    _count: WithdrawalsCountAggregateOutputType | null
    _avg: WithdrawalsAvgAggregateOutputType | null
    _sum: WithdrawalsSumAggregateOutputType | null
    _min: WithdrawalsMinAggregateOutputType | null
    _max: WithdrawalsMaxAggregateOutputType | null
  }

  type GetWithdrawalsGroupByPayload<T extends withdrawalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalsGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalsGroupByOutputType[P]>
        }
      >
    >


  export type withdrawalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount_sol?: boolean
    type?: boolean
    destination_chain?: boolean
    tx_hash?: boolean
    withdrawn_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawals"]>

  export type withdrawalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount_sol?: boolean
    type?: boolean
    destination_chain?: boolean
    tx_hash?: boolean
    withdrawn_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawals"]>

  export type withdrawalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount_sol?: boolean
    type?: boolean
    destination_chain?: boolean
    tx_hash?: boolean
    withdrawn_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawals"]>

  export type withdrawalsSelectScalar = {
    id?: boolean
    user_id?: boolean
    amount_sol?: boolean
    type?: boolean
    destination_chain?: boolean
    tx_hash?: boolean
    withdrawn_at?: boolean
  }

  export type withdrawalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "amount_sol" | "type" | "destination_chain" | "tx_hash" | "withdrawn_at", ExtArgs["result"]["withdrawals"]>
  export type withdrawalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type withdrawalsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type withdrawalsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $withdrawalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "withdrawals"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      amount_sol: Prisma.Decimal
      type: string
      destination_chain: string
      tx_hash: string | null
      withdrawn_at: Date
    }, ExtArgs["result"]["withdrawals"]>
    composites: {}
  }

  type withdrawalsGetPayload<S extends boolean | null | undefined | withdrawalsDefaultArgs> = $Result.GetResult<Prisma.$withdrawalsPayload, S>

  type withdrawalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<withdrawalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawalsCountAggregateInputType | true
    }

  export interface withdrawalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['withdrawals'], meta: { name: 'withdrawals' } }
    /**
     * Find zero or one Withdrawals that matches the filter.
     * @param {withdrawalsFindUniqueArgs} args - Arguments to find a Withdrawals
     * @example
     * // Get one Withdrawals
     * const withdrawals = await prisma.withdrawals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends withdrawalsFindUniqueArgs>(args: SelectSubset<T, withdrawalsFindUniqueArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Withdrawals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {withdrawalsFindUniqueOrThrowArgs} args - Arguments to find a Withdrawals
     * @example
     * // Get one Withdrawals
     * const withdrawals = await prisma.withdrawals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends withdrawalsFindUniqueOrThrowArgs>(args: SelectSubset<T, withdrawalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsFindFirstArgs} args - Arguments to find a Withdrawals
     * @example
     * // Get one Withdrawals
     * const withdrawals = await prisma.withdrawals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends withdrawalsFindFirstArgs>(args?: SelectSubset<T, withdrawalsFindFirstArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsFindFirstOrThrowArgs} args - Arguments to find a Withdrawals
     * @example
     * // Get one Withdrawals
     * const withdrawals = await prisma.withdrawals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends withdrawalsFindFirstOrThrowArgs>(args?: SelectSubset<T, withdrawalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Withdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Withdrawals
     * const withdrawals = await prisma.withdrawals.findMany()
     * 
     * // Get first 10 Withdrawals
     * const withdrawals = await prisma.withdrawals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalsWithIdOnly = await prisma.withdrawals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends withdrawalsFindManyArgs>(args?: SelectSubset<T, withdrawalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Withdrawals.
     * @param {withdrawalsCreateArgs} args - Arguments to create a Withdrawals.
     * @example
     * // Create one Withdrawals
     * const Withdrawals = await prisma.withdrawals.create({
     *   data: {
     *     // ... data to create a Withdrawals
     *   }
     * })
     * 
     */
    create<T extends withdrawalsCreateArgs>(args: SelectSubset<T, withdrawalsCreateArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Withdrawals.
     * @param {withdrawalsCreateManyArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawals = await prisma.withdrawals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends withdrawalsCreateManyArgs>(args?: SelectSubset<T, withdrawalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Withdrawals and returns the data saved in the database.
     * @param {withdrawalsCreateManyAndReturnArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawals = await prisma.withdrawals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Withdrawals and only return the `id`
     * const withdrawalsWithIdOnly = await prisma.withdrawals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends withdrawalsCreateManyAndReturnArgs>(args?: SelectSubset<T, withdrawalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Withdrawals.
     * @param {withdrawalsDeleteArgs} args - Arguments to delete one Withdrawals.
     * @example
     * // Delete one Withdrawals
     * const Withdrawals = await prisma.withdrawals.delete({
     *   where: {
     *     // ... filter to delete one Withdrawals
     *   }
     * })
     * 
     */
    delete<T extends withdrawalsDeleteArgs>(args: SelectSubset<T, withdrawalsDeleteArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Withdrawals.
     * @param {withdrawalsUpdateArgs} args - Arguments to update one Withdrawals.
     * @example
     * // Update one Withdrawals
     * const withdrawals = await prisma.withdrawals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends withdrawalsUpdateArgs>(args: SelectSubset<T, withdrawalsUpdateArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Withdrawals.
     * @param {withdrawalsDeleteManyArgs} args - Arguments to filter Withdrawals to delete.
     * @example
     * // Delete a few Withdrawals
     * const { count } = await prisma.withdrawals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends withdrawalsDeleteManyArgs>(args?: SelectSubset<T, withdrawalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Withdrawals
     * const withdrawals = await prisma.withdrawals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends withdrawalsUpdateManyArgs>(args: SelectSubset<T, withdrawalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals and returns the data updated in the database.
     * @param {withdrawalsUpdateManyAndReturnArgs} args - Arguments to update many Withdrawals.
     * @example
     * // Update many Withdrawals
     * const withdrawals = await prisma.withdrawals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Withdrawals and only return the `id`
     * const withdrawalsWithIdOnly = await prisma.withdrawals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends withdrawalsUpdateManyAndReturnArgs>(args: SelectSubset<T, withdrawalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Withdrawals.
     * @param {withdrawalsUpsertArgs} args - Arguments to update or create a Withdrawals.
     * @example
     * // Update or create a Withdrawals
     * const withdrawals = await prisma.withdrawals.upsert({
     *   create: {
     *     // ... data to create a Withdrawals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Withdrawals we want to update
     *   }
     * })
     */
    upsert<T extends withdrawalsUpsertArgs>(args: SelectSubset<T, withdrawalsUpsertArgs<ExtArgs>>): Prisma__withdrawalsClient<$Result.GetResult<Prisma.$withdrawalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsCountArgs} args - Arguments to filter Withdrawals to count.
     * @example
     * // Count the number of Withdrawals
     * const count = await prisma.withdrawals.count({
     *   where: {
     *     // ... the filter for the Withdrawals we want to count
     *   }
     * })
    **/
    count<T extends withdrawalsCountArgs>(
      args?: Subset<T, withdrawalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WithdrawalsAggregateArgs>(args: Subset<T, WithdrawalsAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalsAggregateType<T>>

    /**
     * Group by Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {withdrawalsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends withdrawalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: withdrawalsGroupByArgs['orderBy'] }
        : { orderBy?: withdrawalsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, withdrawalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the withdrawals model
   */
  readonly fields: withdrawalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for withdrawals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__withdrawalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the withdrawals model
   */
  interface withdrawalsFieldRefs {
    readonly id: FieldRef<"withdrawals", 'String'>
    readonly user_id: FieldRef<"withdrawals", 'String'>
    readonly amount_sol: FieldRef<"withdrawals", 'Decimal'>
    readonly type: FieldRef<"withdrawals", 'String'>
    readonly destination_chain: FieldRef<"withdrawals", 'String'>
    readonly tx_hash: FieldRef<"withdrawals", 'String'>
    readonly withdrawn_at: FieldRef<"withdrawals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * withdrawals findUnique
   */
  export type withdrawalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where: withdrawalsWhereUniqueInput
  }

  /**
   * withdrawals findUniqueOrThrow
   */
  export type withdrawalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where: withdrawalsWhereUniqueInput
  }

  /**
   * withdrawals findFirst
   */
  export type withdrawalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where?: withdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalsOrderByWithRelationInput | withdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for withdrawals.
     */
    cursor?: withdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of withdrawals.
     */
    distinct?: WithdrawalsScalarFieldEnum | WithdrawalsScalarFieldEnum[]
  }

  /**
   * withdrawals findFirstOrThrow
   */
  export type withdrawalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where?: withdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalsOrderByWithRelationInput | withdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for withdrawals.
     */
    cursor?: withdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of withdrawals.
     */
    distinct?: WithdrawalsScalarFieldEnum | WithdrawalsScalarFieldEnum[]
  }

  /**
   * withdrawals findMany
   */
  export type withdrawalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * Filter, which withdrawals to fetch.
     */
    where?: withdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of withdrawals to fetch.
     */
    orderBy?: withdrawalsOrderByWithRelationInput | withdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing withdrawals.
     */
    cursor?: withdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` withdrawals.
     */
    skip?: number
    distinct?: WithdrawalsScalarFieldEnum | WithdrawalsScalarFieldEnum[]
  }

  /**
   * withdrawals create
   */
  export type withdrawalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * The data needed to create a withdrawals.
     */
    data: XOR<withdrawalsCreateInput, withdrawalsUncheckedCreateInput>
  }

  /**
   * withdrawals createMany
   */
  export type withdrawalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many withdrawals.
     */
    data: withdrawalsCreateManyInput | withdrawalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * withdrawals createManyAndReturn
   */
  export type withdrawalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * The data used to create many withdrawals.
     */
    data: withdrawalsCreateManyInput | withdrawalsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * withdrawals update
   */
  export type withdrawalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * The data needed to update a withdrawals.
     */
    data: XOR<withdrawalsUpdateInput, withdrawalsUncheckedUpdateInput>
    /**
     * Choose, which withdrawals to update.
     */
    where: withdrawalsWhereUniqueInput
  }

  /**
   * withdrawals updateMany
   */
  export type withdrawalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update withdrawals.
     */
    data: XOR<withdrawalsUpdateManyMutationInput, withdrawalsUncheckedUpdateManyInput>
    /**
     * Filter which withdrawals to update
     */
    where?: withdrawalsWhereInput
    /**
     * Limit how many withdrawals to update.
     */
    limit?: number
  }

  /**
   * withdrawals updateManyAndReturn
   */
  export type withdrawalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * The data used to update withdrawals.
     */
    data: XOR<withdrawalsUpdateManyMutationInput, withdrawalsUncheckedUpdateManyInput>
    /**
     * Filter which withdrawals to update
     */
    where?: withdrawalsWhereInput
    /**
     * Limit how many withdrawals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * withdrawals upsert
   */
  export type withdrawalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * The filter to search for the withdrawals to update in case it exists.
     */
    where: withdrawalsWhereUniqueInput
    /**
     * In case the withdrawals found by the `where` argument doesn't exist, create a new withdrawals with this data.
     */
    create: XOR<withdrawalsCreateInput, withdrawalsUncheckedCreateInput>
    /**
     * In case the withdrawals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<withdrawalsUpdateInput, withdrawalsUncheckedUpdateInput>
  }

  /**
   * withdrawals delete
   */
  export type withdrawalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
    /**
     * Filter which withdrawals to delete.
     */
    where: withdrawalsWhereUniqueInput
  }

  /**
   * withdrawals deleteMany
   */
  export type withdrawalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which withdrawals to delete
     */
    where?: withdrawalsWhereInput
    /**
     * Limit how many withdrawals to delete.
     */
    limit?: number
  }

  /**
   * withdrawals without action
   */
  export type withdrawalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the withdrawals
     */
    select?: withdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the withdrawals
     */
    omit?: withdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: withdrawalsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Sqlx_migrationsScalarFieldEnum: {
    version: 'version',
    description: 'description',
    installed_on: 'installed_on',
    success: 'success',
    checksum: 'checksum',
    execution_time: 'execution_time'
  };

  export type Sqlx_migrationsScalarFieldEnum = (typeof Sqlx_migrationsScalarFieldEnum)[keyof typeof Sqlx_migrationsScalarFieldEnum]


  export const Api_request_logsScalarFieldEnum: {
    id: 'id',
    endpoint: 'endpoint',
    lst_symbol: 'lst_symbol',
    request_status: 'request_status',
    response_time_ms: 'response_time_ms',
    error_message: 'error_message',
    retry_count: 'retry_count',
    created_at: 'created_at'
  };

  export type Api_request_logsScalarFieldEnum = (typeof Api_request_logsScalarFieldEnum)[keyof typeof Api_request_logsScalarFieldEnum]


  export const DepositsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    amount_sol: 'amount_sol',
    type: 'type',
    source_chain: 'source_chain',
    tx_hash: 'tx_hash',
    deposited_at: 'deposited_at'
  };

  export type DepositsScalarFieldEnum = (typeof DepositsScalarFieldEnum)[keyof typeof DepositsScalarFieldEnum]


  export const Epoch_snapshotsScalarFieldEnum: {
    id: 'id',
    epoch: 'epoch',
    snapshot_time: 'snapshot_time'
  };

  export type Epoch_snapshotsScalarFieldEnum = (typeof Epoch_snapshotsScalarFieldEnum)[keyof typeof Epoch_snapshotsScalarFieldEnum]


  export const Lst_apy_dataScalarFieldEnum: {
    id: 'id',
    lst_symbol: 'lst_symbol',
    apy_type: 'apy_type',
    apy_value: 'apy_value',
    collected_at: 'collected_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Lst_apy_dataScalarFieldEnum = (typeof Lst_apy_dataScalarFieldEnum)[keyof typeof Lst_apy_dataScalarFieldEnum]


  export const Lst_holder_dataScalarFieldEnum: {
    id: 'id',
    lst_symbol: 'lst_symbol',
    total_holders: 'total_holders',
    total_supply: 'total_supply',
    collected_at: 'collected_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Lst_holder_dataScalarFieldEnum = (typeof Lst_holder_dataScalarFieldEnum)[keyof typeof Lst_holder_dataScalarFieldEnum]


  export const Lst_strategyScalarFieldEnum: {
    id: 'id',
    epoch_snapshot_id: 'epoch_snapshot_id',
    chosen_lst: 'chosen_lst',
    decided_at: 'decided_at'
  };

  export type Lst_strategyScalarFieldEnum = (typeof Lst_strategyScalarFieldEnum)[keyof typeof Lst_strategyScalarFieldEnum]


  export const Lst_tokensScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    mint_address: 'mint_address',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Lst_tokensScalarFieldEnum = (typeof Lst_tokensScalarFieldEnum)[keyof typeof Lst_tokensScalarFieldEnum]


  export const Lst_tvl_dataScalarFieldEnum: {
    id: 'id',
    lst_symbol: 'lst_symbol',
    tvl_value: 'tvl_value',
    collected_at: 'collected_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Lst_tvl_dataScalarFieldEnum = (typeof Lst_tvl_dataScalarFieldEnum)[keyof typeof Lst_tvl_dataScalarFieldEnum]


  export const User_snapshotsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    epoch_snapshot_id: 'epoch_snapshot_id',
    current_position: 'current_position',
    sol_value: 'sol_value'
  };

  export type User_snapshotsScalarFieldEnum = (typeof User_snapshotsScalarFieldEnum)[keyof typeof User_snapshotsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    privy_id: 'privy_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const WithdrawalsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    amount_sol: 'amount_sol',
    type: 'type',
    destination_chain: 'destination_chain',
    tx_hash: 'tx_hash',
    withdrawn_at: 'withdrawn_at'
  };

  export type WithdrawalsScalarFieldEnum = (typeof WithdrawalsScalarFieldEnum)[keyof typeof WithdrawalsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type sqlx_migrationsWhereInput = {
    AND?: sqlx_migrationsWhereInput | sqlx_migrationsWhereInput[]
    OR?: sqlx_migrationsWhereInput[]
    NOT?: sqlx_migrationsWhereInput | sqlx_migrationsWhereInput[]
    version?: BigIntFilter<"sqlx_migrations"> | bigint | number
    description?: StringFilter<"sqlx_migrations"> | string
    installed_on?: DateTimeFilter<"sqlx_migrations"> | Date | string
    success?: BoolFilter<"sqlx_migrations"> | boolean
    checksum?: BytesFilter<"sqlx_migrations"> | Uint8Array
    execution_time?: BigIntFilter<"sqlx_migrations"> | bigint | number
  }

  export type sqlx_migrationsOrderByWithRelationInput = {
    version?: SortOrder
    description?: SortOrder
    installed_on?: SortOrder
    success?: SortOrder
    checksum?: SortOrder
    execution_time?: SortOrder
  }

  export type sqlx_migrationsWhereUniqueInput = Prisma.AtLeast<{
    version?: bigint | number
    AND?: sqlx_migrationsWhereInput | sqlx_migrationsWhereInput[]
    OR?: sqlx_migrationsWhereInput[]
    NOT?: sqlx_migrationsWhereInput | sqlx_migrationsWhereInput[]
    description?: StringFilter<"sqlx_migrations"> | string
    installed_on?: DateTimeFilter<"sqlx_migrations"> | Date | string
    success?: BoolFilter<"sqlx_migrations"> | boolean
    checksum?: BytesFilter<"sqlx_migrations"> | Uint8Array
    execution_time?: BigIntFilter<"sqlx_migrations"> | bigint | number
  }, "version">

  export type sqlx_migrationsOrderByWithAggregationInput = {
    version?: SortOrder
    description?: SortOrder
    installed_on?: SortOrder
    success?: SortOrder
    checksum?: SortOrder
    execution_time?: SortOrder
    _count?: sqlx_migrationsCountOrderByAggregateInput
    _avg?: sqlx_migrationsAvgOrderByAggregateInput
    _max?: sqlx_migrationsMaxOrderByAggregateInput
    _min?: sqlx_migrationsMinOrderByAggregateInput
    _sum?: sqlx_migrationsSumOrderByAggregateInput
  }

  export type sqlx_migrationsScalarWhereWithAggregatesInput = {
    AND?: sqlx_migrationsScalarWhereWithAggregatesInput | sqlx_migrationsScalarWhereWithAggregatesInput[]
    OR?: sqlx_migrationsScalarWhereWithAggregatesInput[]
    NOT?: sqlx_migrationsScalarWhereWithAggregatesInput | sqlx_migrationsScalarWhereWithAggregatesInput[]
    version?: BigIntWithAggregatesFilter<"sqlx_migrations"> | bigint | number
    description?: StringWithAggregatesFilter<"sqlx_migrations"> | string
    installed_on?: DateTimeWithAggregatesFilter<"sqlx_migrations"> | Date | string
    success?: BoolWithAggregatesFilter<"sqlx_migrations"> | boolean
    checksum?: BytesWithAggregatesFilter<"sqlx_migrations"> | Uint8Array
    execution_time?: BigIntWithAggregatesFilter<"sqlx_migrations"> | bigint | number
  }

  export type api_request_logsWhereInput = {
    AND?: api_request_logsWhereInput | api_request_logsWhereInput[]
    OR?: api_request_logsWhereInput[]
    NOT?: api_request_logsWhereInput | api_request_logsWhereInput[]
    id?: UuidFilter<"api_request_logs"> | string
    endpoint?: StringFilter<"api_request_logs"> | string
    lst_symbol?: StringNullableFilter<"api_request_logs"> | string | null
    request_status?: StringFilter<"api_request_logs"> | string
    response_time_ms?: IntNullableFilter<"api_request_logs"> | number | null
    error_message?: StringNullableFilter<"api_request_logs"> | string | null
    retry_count?: IntNullableFilter<"api_request_logs"> | number | null
    created_at?: DateTimeFilter<"api_request_logs"> | Date | string
  }

  export type api_request_logsOrderByWithRelationInput = {
    id?: SortOrder
    endpoint?: SortOrder
    lst_symbol?: SortOrderInput | SortOrder
    request_status?: SortOrder
    response_time_ms?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    retry_count?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type api_request_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: api_request_logsWhereInput | api_request_logsWhereInput[]
    OR?: api_request_logsWhereInput[]
    NOT?: api_request_logsWhereInput | api_request_logsWhereInput[]
    endpoint?: StringFilter<"api_request_logs"> | string
    lst_symbol?: StringNullableFilter<"api_request_logs"> | string | null
    request_status?: StringFilter<"api_request_logs"> | string
    response_time_ms?: IntNullableFilter<"api_request_logs"> | number | null
    error_message?: StringNullableFilter<"api_request_logs"> | string | null
    retry_count?: IntNullableFilter<"api_request_logs"> | number | null
    created_at?: DateTimeFilter<"api_request_logs"> | Date | string
  }, "id">

  export type api_request_logsOrderByWithAggregationInput = {
    id?: SortOrder
    endpoint?: SortOrder
    lst_symbol?: SortOrderInput | SortOrder
    request_status?: SortOrder
    response_time_ms?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    retry_count?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: api_request_logsCountOrderByAggregateInput
    _avg?: api_request_logsAvgOrderByAggregateInput
    _max?: api_request_logsMaxOrderByAggregateInput
    _min?: api_request_logsMinOrderByAggregateInput
    _sum?: api_request_logsSumOrderByAggregateInput
  }

  export type api_request_logsScalarWhereWithAggregatesInput = {
    AND?: api_request_logsScalarWhereWithAggregatesInput | api_request_logsScalarWhereWithAggregatesInput[]
    OR?: api_request_logsScalarWhereWithAggregatesInput[]
    NOT?: api_request_logsScalarWhereWithAggregatesInput | api_request_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"api_request_logs"> | string
    endpoint?: StringWithAggregatesFilter<"api_request_logs"> | string
    lst_symbol?: StringNullableWithAggregatesFilter<"api_request_logs"> | string | null
    request_status?: StringWithAggregatesFilter<"api_request_logs"> | string
    response_time_ms?: IntNullableWithAggregatesFilter<"api_request_logs"> | number | null
    error_message?: StringNullableWithAggregatesFilter<"api_request_logs"> | string | null
    retry_count?: IntNullableWithAggregatesFilter<"api_request_logs"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"api_request_logs"> | Date | string
  }

  export type depositsWhereInput = {
    AND?: depositsWhereInput | depositsWhereInput[]
    OR?: depositsWhereInput[]
    NOT?: depositsWhereInput | depositsWhereInput[]
    id?: UuidFilter<"deposits"> | string
    user_id?: UuidFilter<"deposits"> | string
    amount_sol?: DecimalFilter<"deposits"> | Decimal | DecimalJsLike | number | string
    type?: StringFilter<"deposits"> | string
    source_chain?: StringFilter<"deposits"> | string
    tx_hash?: StringFilter<"deposits"> | string
    deposited_at?: DateTimeFilter<"deposits"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type depositsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount_sol?: SortOrder
    type?: SortOrder
    source_chain?: SortOrder
    tx_hash?: SortOrder
    deposited_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type depositsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: depositsWhereInput | depositsWhereInput[]
    OR?: depositsWhereInput[]
    NOT?: depositsWhereInput | depositsWhereInput[]
    user_id?: UuidFilter<"deposits"> | string
    amount_sol?: DecimalFilter<"deposits"> | Decimal | DecimalJsLike | number | string
    type?: StringFilter<"deposits"> | string
    source_chain?: StringFilter<"deposits"> | string
    tx_hash?: StringFilter<"deposits"> | string
    deposited_at?: DateTimeFilter<"deposits"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type depositsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount_sol?: SortOrder
    type?: SortOrder
    source_chain?: SortOrder
    tx_hash?: SortOrder
    deposited_at?: SortOrder
    _count?: depositsCountOrderByAggregateInput
    _avg?: depositsAvgOrderByAggregateInput
    _max?: depositsMaxOrderByAggregateInput
    _min?: depositsMinOrderByAggregateInput
    _sum?: depositsSumOrderByAggregateInput
  }

  export type depositsScalarWhereWithAggregatesInput = {
    AND?: depositsScalarWhereWithAggregatesInput | depositsScalarWhereWithAggregatesInput[]
    OR?: depositsScalarWhereWithAggregatesInput[]
    NOT?: depositsScalarWhereWithAggregatesInput | depositsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"deposits"> | string
    user_id?: UuidWithAggregatesFilter<"deposits"> | string
    amount_sol?: DecimalWithAggregatesFilter<"deposits"> | Decimal | DecimalJsLike | number | string
    type?: StringWithAggregatesFilter<"deposits"> | string
    source_chain?: StringWithAggregatesFilter<"deposits"> | string
    tx_hash?: StringWithAggregatesFilter<"deposits"> | string
    deposited_at?: DateTimeWithAggregatesFilter<"deposits"> | Date | string
  }

  export type epoch_snapshotsWhereInput = {
    AND?: epoch_snapshotsWhereInput | epoch_snapshotsWhereInput[]
    OR?: epoch_snapshotsWhereInput[]
    NOT?: epoch_snapshotsWhereInput | epoch_snapshotsWhereInput[]
    id?: UuidFilter<"epoch_snapshots"> | string
    epoch?: IntFilter<"epoch_snapshots"> | number
    snapshot_time?: DateTimeFilter<"epoch_snapshots"> | Date | string
    lst_strategy?: XOR<Lst_strategyNullableScalarRelationFilter, lst_strategyWhereInput> | null
    user_snapshots?: User_snapshotsListRelationFilter
  }

  export type epoch_snapshotsOrderByWithRelationInput = {
    id?: SortOrder
    epoch?: SortOrder
    snapshot_time?: SortOrder
    lst_strategy?: lst_strategyOrderByWithRelationInput
    user_snapshots?: user_snapshotsOrderByRelationAggregateInput
  }

  export type epoch_snapshotsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    epoch?: number
    AND?: epoch_snapshotsWhereInput | epoch_snapshotsWhereInput[]
    OR?: epoch_snapshotsWhereInput[]
    NOT?: epoch_snapshotsWhereInput | epoch_snapshotsWhereInput[]
    snapshot_time?: DateTimeFilter<"epoch_snapshots"> | Date | string
    lst_strategy?: XOR<Lst_strategyNullableScalarRelationFilter, lst_strategyWhereInput> | null
    user_snapshots?: User_snapshotsListRelationFilter
  }, "id" | "epoch">

  export type epoch_snapshotsOrderByWithAggregationInput = {
    id?: SortOrder
    epoch?: SortOrder
    snapshot_time?: SortOrder
    _count?: epoch_snapshotsCountOrderByAggregateInput
    _avg?: epoch_snapshotsAvgOrderByAggregateInput
    _max?: epoch_snapshotsMaxOrderByAggregateInput
    _min?: epoch_snapshotsMinOrderByAggregateInput
    _sum?: epoch_snapshotsSumOrderByAggregateInput
  }

  export type epoch_snapshotsScalarWhereWithAggregatesInput = {
    AND?: epoch_snapshotsScalarWhereWithAggregatesInput | epoch_snapshotsScalarWhereWithAggregatesInput[]
    OR?: epoch_snapshotsScalarWhereWithAggregatesInput[]
    NOT?: epoch_snapshotsScalarWhereWithAggregatesInput | epoch_snapshotsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"epoch_snapshots"> | string
    epoch?: IntWithAggregatesFilter<"epoch_snapshots"> | number
    snapshot_time?: DateTimeWithAggregatesFilter<"epoch_snapshots"> | Date | string
  }

  export type lst_apy_dataWhereInput = {
    AND?: lst_apy_dataWhereInput | lst_apy_dataWhereInput[]
    OR?: lst_apy_dataWhereInput[]
    NOT?: lst_apy_dataWhereInput | lst_apy_dataWhereInput[]
    id?: UuidFilter<"lst_apy_data"> | string
    lst_symbol?: StringFilter<"lst_apy_data"> | string
    apy_type?: StringFilter<"lst_apy_data"> | string
    apy_value?: DecimalFilter<"lst_apy_data"> | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFilter<"lst_apy_data"> | Date | string
    created_at?: DateTimeFilter<"lst_apy_data"> | Date | string
    updated_at?: DateTimeFilter<"lst_apy_data"> | Date | string
  }

  export type lst_apy_dataOrderByWithRelationInput = {
    id?: SortOrder
    lst_symbol?: SortOrder
    apy_type?: SortOrder
    apy_value?: SortOrder
    collected_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_apy_dataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lst_symbol_apy_type?: lst_apy_dataLst_symbolApy_typeCompoundUniqueInput
    AND?: lst_apy_dataWhereInput | lst_apy_dataWhereInput[]
    OR?: lst_apy_dataWhereInput[]
    NOT?: lst_apy_dataWhereInput | lst_apy_dataWhereInput[]
    lst_symbol?: StringFilter<"lst_apy_data"> | string
    apy_type?: StringFilter<"lst_apy_data"> | string
    apy_value?: DecimalFilter<"lst_apy_data"> | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFilter<"lst_apy_data"> | Date | string
    created_at?: DateTimeFilter<"lst_apy_data"> | Date | string
    updated_at?: DateTimeFilter<"lst_apy_data"> | Date | string
  }, "id" | "lst_symbol_apy_type">

  export type lst_apy_dataOrderByWithAggregationInput = {
    id?: SortOrder
    lst_symbol?: SortOrder
    apy_type?: SortOrder
    apy_value?: SortOrder
    collected_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: lst_apy_dataCountOrderByAggregateInput
    _avg?: lst_apy_dataAvgOrderByAggregateInput
    _max?: lst_apy_dataMaxOrderByAggregateInput
    _min?: lst_apy_dataMinOrderByAggregateInput
    _sum?: lst_apy_dataSumOrderByAggregateInput
  }

  export type lst_apy_dataScalarWhereWithAggregatesInput = {
    AND?: lst_apy_dataScalarWhereWithAggregatesInput | lst_apy_dataScalarWhereWithAggregatesInput[]
    OR?: lst_apy_dataScalarWhereWithAggregatesInput[]
    NOT?: lst_apy_dataScalarWhereWithAggregatesInput | lst_apy_dataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"lst_apy_data"> | string
    lst_symbol?: StringWithAggregatesFilter<"lst_apy_data"> | string
    apy_type?: StringWithAggregatesFilter<"lst_apy_data"> | string
    apy_value?: DecimalWithAggregatesFilter<"lst_apy_data"> | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeWithAggregatesFilter<"lst_apy_data"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"lst_apy_data"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"lst_apy_data"> | Date | string
  }

  export type lst_holder_dataWhereInput = {
    AND?: lst_holder_dataWhereInput | lst_holder_dataWhereInput[]
    OR?: lst_holder_dataWhereInput[]
    NOT?: lst_holder_dataWhereInput | lst_holder_dataWhereInput[]
    id?: UuidFilter<"lst_holder_data"> | string
    lst_symbol?: StringFilter<"lst_holder_data"> | string
    total_holders?: BigIntFilter<"lst_holder_data"> | bigint | number
    total_supply?: DecimalFilter<"lst_holder_data"> | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFilter<"lst_holder_data"> | Date | string
    created_at?: DateTimeFilter<"lst_holder_data"> | Date | string
    updated_at?: DateTimeFilter<"lst_holder_data"> | Date | string
  }

  export type lst_holder_dataOrderByWithRelationInput = {
    id?: SortOrder
    lst_symbol?: SortOrder
    total_holders?: SortOrder
    total_supply?: SortOrder
    collected_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_holder_dataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lst_symbol_collected_at?: lst_holder_dataLst_symbolCollected_atCompoundUniqueInput
    AND?: lst_holder_dataWhereInput | lst_holder_dataWhereInput[]
    OR?: lst_holder_dataWhereInput[]
    NOT?: lst_holder_dataWhereInput | lst_holder_dataWhereInput[]
    lst_symbol?: StringFilter<"lst_holder_data"> | string
    total_holders?: BigIntFilter<"lst_holder_data"> | bigint | number
    total_supply?: DecimalFilter<"lst_holder_data"> | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFilter<"lst_holder_data"> | Date | string
    created_at?: DateTimeFilter<"lst_holder_data"> | Date | string
    updated_at?: DateTimeFilter<"lst_holder_data"> | Date | string
  }, "id" | "lst_symbol_collected_at">

  export type lst_holder_dataOrderByWithAggregationInput = {
    id?: SortOrder
    lst_symbol?: SortOrder
    total_holders?: SortOrder
    total_supply?: SortOrder
    collected_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: lst_holder_dataCountOrderByAggregateInput
    _avg?: lst_holder_dataAvgOrderByAggregateInput
    _max?: lst_holder_dataMaxOrderByAggregateInput
    _min?: lst_holder_dataMinOrderByAggregateInput
    _sum?: lst_holder_dataSumOrderByAggregateInput
  }

  export type lst_holder_dataScalarWhereWithAggregatesInput = {
    AND?: lst_holder_dataScalarWhereWithAggregatesInput | lst_holder_dataScalarWhereWithAggregatesInput[]
    OR?: lst_holder_dataScalarWhereWithAggregatesInput[]
    NOT?: lst_holder_dataScalarWhereWithAggregatesInput | lst_holder_dataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"lst_holder_data"> | string
    lst_symbol?: StringWithAggregatesFilter<"lst_holder_data"> | string
    total_holders?: BigIntWithAggregatesFilter<"lst_holder_data"> | bigint | number
    total_supply?: DecimalWithAggregatesFilter<"lst_holder_data"> | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeWithAggregatesFilter<"lst_holder_data"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"lst_holder_data"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"lst_holder_data"> | Date | string
  }

  export type lst_strategyWhereInput = {
    AND?: lst_strategyWhereInput | lst_strategyWhereInput[]
    OR?: lst_strategyWhereInput[]
    NOT?: lst_strategyWhereInput | lst_strategyWhereInput[]
    id?: UuidFilter<"lst_strategy"> | string
    epoch_snapshot_id?: UuidFilter<"lst_strategy"> | string
    chosen_lst?: StringFilter<"lst_strategy"> | string
    decided_at?: DateTimeFilter<"lst_strategy"> | Date | string
    epoch_snapshots?: XOR<Epoch_snapshotsScalarRelationFilter, epoch_snapshotsWhereInput>
  }

  export type lst_strategyOrderByWithRelationInput = {
    id?: SortOrder
    epoch_snapshot_id?: SortOrder
    chosen_lst?: SortOrder
    decided_at?: SortOrder
    epoch_snapshots?: epoch_snapshotsOrderByWithRelationInput
  }

  export type lst_strategyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    epoch_snapshot_id?: string
    AND?: lst_strategyWhereInput | lst_strategyWhereInput[]
    OR?: lst_strategyWhereInput[]
    NOT?: lst_strategyWhereInput | lst_strategyWhereInput[]
    chosen_lst?: StringFilter<"lst_strategy"> | string
    decided_at?: DateTimeFilter<"lst_strategy"> | Date | string
    epoch_snapshots?: XOR<Epoch_snapshotsScalarRelationFilter, epoch_snapshotsWhereInput>
  }, "id" | "epoch_snapshot_id">

  export type lst_strategyOrderByWithAggregationInput = {
    id?: SortOrder
    epoch_snapshot_id?: SortOrder
    chosen_lst?: SortOrder
    decided_at?: SortOrder
    _count?: lst_strategyCountOrderByAggregateInput
    _max?: lst_strategyMaxOrderByAggregateInput
    _min?: lst_strategyMinOrderByAggregateInput
  }

  export type lst_strategyScalarWhereWithAggregatesInput = {
    AND?: lst_strategyScalarWhereWithAggregatesInput | lst_strategyScalarWhereWithAggregatesInput[]
    OR?: lst_strategyScalarWhereWithAggregatesInput[]
    NOT?: lst_strategyScalarWhereWithAggregatesInput | lst_strategyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"lst_strategy"> | string
    epoch_snapshot_id?: UuidWithAggregatesFilter<"lst_strategy"> | string
    chosen_lst?: StringWithAggregatesFilter<"lst_strategy"> | string
    decided_at?: DateTimeWithAggregatesFilter<"lst_strategy"> | Date | string
  }

  export type lst_tokensWhereInput = {
    AND?: lst_tokensWhereInput | lst_tokensWhereInput[]
    OR?: lst_tokensWhereInput[]
    NOT?: lst_tokensWhereInput | lst_tokensWhereInput[]
    id?: UuidFilter<"lst_tokens"> | string
    symbol?: StringFilter<"lst_tokens"> | string
    mint_address?: StringFilter<"lst_tokens"> | string
    name?: StringFilter<"lst_tokens"> | string
    created_at?: DateTimeFilter<"lst_tokens"> | Date | string
    updated_at?: DateTimeFilter<"lst_tokens"> | Date | string
  }

  export type lst_tokensOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    mint_address?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    symbol?: string
    mint_address?: string
    AND?: lst_tokensWhereInput | lst_tokensWhereInput[]
    OR?: lst_tokensWhereInput[]
    NOT?: lst_tokensWhereInput | lst_tokensWhereInput[]
    name?: StringFilter<"lst_tokens"> | string
    created_at?: DateTimeFilter<"lst_tokens"> | Date | string
    updated_at?: DateTimeFilter<"lst_tokens"> | Date | string
  }, "id" | "symbol" | "mint_address">

  export type lst_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    mint_address?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: lst_tokensCountOrderByAggregateInput
    _max?: lst_tokensMaxOrderByAggregateInput
    _min?: lst_tokensMinOrderByAggregateInput
  }

  export type lst_tokensScalarWhereWithAggregatesInput = {
    AND?: lst_tokensScalarWhereWithAggregatesInput | lst_tokensScalarWhereWithAggregatesInput[]
    OR?: lst_tokensScalarWhereWithAggregatesInput[]
    NOT?: lst_tokensScalarWhereWithAggregatesInput | lst_tokensScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"lst_tokens"> | string
    symbol?: StringWithAggregatesFilter<"lst_tokens"> | string
    mint_address?: StringWithAggregatesFilter<"lst_tokens"> | string
    name?: StringWithAggregatesFilter<"lst_tokens"> | string
    created_at?: DateTimeWithAggregatesFilter<"lst_tokens"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"lst_tokens"> | Date | string
  }

  export type lst_tvl_dataWhereInput = {
    AND?: lst_tvl_dataWhereInput | lst_tvl_dataWhereInput[]
    OR?: lst_tvl_dataWhereInput[]
    NOT?: lst_tvl_dataWhereInput | lst_tvl_dataWhereInput[]
    id?: UuidFilter<"lst_tvl_data"> | string
    lst_symbol?: StringFilter<"lst_tvl_data"> | string
    tvl_value?: DecimalFilter<"lst_tvl_data"> | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFilter<"lst_tvl_data"> | Date | string
    created_at?: DateTimeFilter<"lst_tvl_data"> | Date | string
    updated_at?: DateTimeFilter<"lst_tvl_data"> | Date | string
  }

  export type lst_tvl_dataOrderByWithRelationInput = {
    id?: SortOrder
    lst_symbol?: SortOrder
    tvl_value?: SortOrder
    collected_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_tvl_dataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lst_symbol_collected_at?: lst_tvl_dataLst_symbolCollected_atCompoundUniqueInput
    AND?: lst_tvl_dataWhereInput | lst_tvl_dataWhereInput[]
    OR?: lst_tvl_dataWhereInput[]
    NOT?: lst_tvl_dataWhereInput | lst_tvl_dataWhereInput[]
    lst_symbol?: StringFilter<"lst_tvl_data"> | string
    tvl_value?: DecimalFilter<"lst_tvl_data"> | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFilter<"lst_tvl_data"> | Date | string
    created_at?: DateTimeFilter<"lst_tvl_data"> | Date | string
    updated_at?: DateTimeFilter<"lst_tvl_data"> | Date | string
  }, "id" | "lst_symbol_collected_at">

  export type lst_tvl_dataOrderByWithAggregationInput = {
    id?: SortOrder
    lst_symbol?: SortOrder
    tvl_value?: SortOrder
    collected_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: lst_tvl_dataCountOrderByAggregateInput
    _avg?: lst_tvl_dataAvgOrderByAggregateInput
    _max?: lst_tvl_dataMaxOrderByAggregateInput
    _min?: lst_tvl_dataMinOrderByAggregateInput
    _sum?: lst_tvl_dataSumOrderByAggregateInput
  }

  export type lst_tvl_dataScalarWhereWithAggregatesInput = {
    AND?: lst_tvl_dataScalarWhereWithAggregatesInput | lst_tvl_dataScalarWhereWithAggregatesInput[]
    OR?: lst_tvl_dataScalarWhereWithAggregatesInput[]
    NOT?: lst_tvl_dataScalarWhereWithAggregatesInput | lst_tvl_dataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"lst_tvl_data"> | string
    lst_symbol?: StringWithAggregatesFilter<"lst_tvl_data"> | string
    tvl_value?: DecimalWithAggregatesFilter<"lst_tvl_data"> | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeWithAggregatesFilter<"lst_tvl_data"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"lst_tvl_data"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"lst_tvl_data"> | Date | string
  }

  export type user_snapshotsWhereInput = {
    AND?: user_snapshotsWhereInput | user_snapshotsWhereInput[]
    OR?: user_snapshotsWhereInput[]
    NOT?: user_snapshotsWhereInput | user_snapshotsWhereInput[]
    id?: UuidFilter<"user_snapshots"> | string
    user_id?: UuidFilter<"user_snapshots"> | string
    epoch_snapshot_id?: UuidFilter<"user_snapshots"> | string
    current_position?: StringFilter<"user_snapshots"> | string
    sol_value?: DecimalFilter<"user_snapshots"> | Decimal | DecimalJsLike | number | string
    epoch_snapshots?: XOR<Epoch_snapshotsScalarRelationFilter, epoch_snapshotsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_snapshotsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    epoch_snapshot_id?: SortOrder
    current_position?: SortOrder
    sol_value?: SortOrder
    epoch_snapshots?: epoch_snapshotsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_snapshotsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_epoch_snapshot_id?: user_snapshotsUser_idEpoch_snapshot_idCompoundUniqueInput
    AND?: user_snapshotsWhereInput | user_snapshotsWhereInput[]
    OR?: user_snapshotsWhereInput[]
    NOT?: user_snapshotsWhereInput | user_snapshotsWhereInput[]
    user_id?: UuidFilter<"user_snapshots"> | string
    epoch_snapshot_id?: UuidFilter<"user_snapshots"> | string
    current_position?: StringFilter<"user_snapshots"> | string
    sol_value?: DecimalFilter<"user_snapshots"> | Decimal | DecimalJsLike | number | string
    epoch_snapshots?: XOR<Epoch_snapshotsScalarRelationFilter, epoch_snapshotsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_id_epoch_snapshot_id">

  export type user_snapshotsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    epoch_snapshot_id?: SortOrder
    current_position?: SortOrder
    sol_value?: SortOrder
    _count?: user_snapshotsCountOrderByAggregateInput
    _avg?: user_snapshotsAvgOrderByAggregateInput
    _max?: user_snapshotsMaxOrderByAggregateInput
    _min?: user_snapshotsMinOrderByAggregateInput
    _sum?: user_snapshotsSumOrderByAggregateInput
  }

  export type user_snapshotsScalarWhereWithAggregatesInput = {
    AND?: user_snapshotsScalarWhereWithAggregatesInput | user_snapshotsScalarWhereWithAggregatesInput[]
    OR?: user_snapshotsScalarWhereWithAggregatesInput[]
    NOT?: user_snapshotsScalarWhereWithAggregatesInput | user_snapshotsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user_snapshots"> | string
    user_id?: UuidWithAggregatesFilter<"user_snapshots"> | string
    epoch_snapshot_id?: UuidWithAggregatesFilter<"user_snapshots"> | string
    current_position?: StringWithAggregatesFilter<"user_snapshots"> | string
    sol_value?: DecimalWithAggregatesFilter<"user_snapshots"> | Decimal | DecimalJsLike | number | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    privy_id?: StringNullableFilter<"users"> | string | null
    deposits?: DepositsListRelationFilter
    user_snapshots?: User_snapshotsListRelationFilter
    withdrawals?: WithdrawalsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    privy_id?: SortOrderInput | SortOrder
    deposits?: depositsOrderByRelationAggregateInput
    user_snapshots?: user_snapshotsOrderByRelationAggregateInput
    withdrawals?: withdrawalsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    privy_id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    created_at?: DateTimeFilter<"users"> | Date | string
    deposits?: DepositsListRelationFilter
    user_snapshots?: User_snapshotsListRelationFilter
    withdrawals?: WithdrawalsListRelationFilter
  }, "id" | "privy_id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    privy_id?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    privy_id?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type withdrawalsWhereInput = {
    AND?: withdrawalsWhereInput | withdrawalsWhereInput[]
    OR?: withdrawalsWhereInput[]
    NOT?: withdrawalsWhereInput | withdrawalsWhereInput[]
    id?: UuidFilter<"withdrawals"> | string
    user_id?: UuidFilter<"withdrawals"> | string
    amount_sol?: DecimalFilter<"withdrawals"> | Decimal | DecimalJsLike | number | string
    type?: StringFilter<"withdrawals"> | string
    destination_chain?: StringFilter<"withdrawals"> | string
    tx_hash?: StringNullableFilter<"withdrawals"> | string | null
    withdrawn_at?: DateTimeFilter<"withdrawals"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type withdrawalsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount_sol?: SortOrder
    type?: SortOrder
    destination_chain?: SortOrder
    tx_hash?: SortOrderInput | SortOrder
    withdrawn_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type withdrawalsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: withdrawalsWhereInput | withdrawalsWhereInput[]
    OR?: withdrawalsWhereInput[]
    NOT?: withdrawalsWhereInput | withdrawalsWhereInput[]
    user_id?: UuidFilter<"withdrawals"> | string
    amount_sol?: DecimalFilter<"withdrawals"> | Decimal | DecimalJsLike | number | string
    type?: StringFilter<"withdrawals"> | string
    destination_chain?: StringFilter<"withdrawals"> | string
    tx_hash?: StringNullableFilter<"withdrawals"> | string | null
    withdrawn_at?: DateTimeFilter<"withdrawals"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type withdrawalsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount_sol?: SortOrder
    type?: SortOrder
    destination_chain?: SortOrder
    tx_hash?: SortOrderInput | SortOrder
    withdrawn_at?: SortOrder
    _count?: withdrawalsCountOrderByAggregateInput
    _avg?: withdrawalsAvgOrderByAggregateInput
    _max?: withdrawalsMaxOrderByAggregateInput
    _min?: withdrawalsMinOrderByAggregateInput
    _sum?: withdrawalsSumOrderByAggregateInput
  }

  export type withdrawalsScalarWhereWithAggregatesInput = {
    AND?: withdrawalsScalarWhereWithAggregatesInput | withdrawalsScalarWhereWithAggregatesInput[]
    OR?: withdrawalsScalarWhereWithAggregatesInput[]
    NOT?: withdrawalsScalarWhereWithAggregatesInput | withdrawalsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"withdrawals"> | string
    user_id?: UuidWithAggregatesFilter<"withdrawals"> | string
    amount_sol?: DecimalWithAggregatesFilter<"withdrawals"> | Decimal | DecimalJsLike | number | string
    type?: StringWithAggregatesFilter<"withdrawals"> | string
    destination_chain?: StringWithAggregatesFilter<"withdrawals"> | string
    tx_hash?: StringNullableWithAggregatesFilter<"withdrawals"> | string | null
    withdrawn_at?: DateTimeWithAggregatesFilter<"withdrawals"> | Date | string
  }

  export type sqlx_migrationsCreateInput = {
    version: bigint | number
    description: string
    installed_on?: Date | string
    success: boolean
    checksum: Uint8Array
    execution_time: bigint | number
  }

  export type sqlx_migrationsUncheckedCreateInput = {
    version: bigint | number
    description: string
    installed_on?: Date | string
    success: boolean
    checksum: Uint8Array
    execution_time: bigint | number
  }

  export type sqlx_migrationsUpdateInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    installed_on?: DateTimeFieldUpdateOperationsInput | Date | string
    success?: BoolFieldUpdateOperationsInput | boolean
    checksum?: BytesFieldUpdateOperationsInput | Uint8Array
    execution_time?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type sqlx_migrationsUncheckedUpdateInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    installed_on?: DateTimeFieldUpdateOperationsInput | Date | string
    success?: BoolFieldUpdateOperationsInput | boolean
    checksum?: BytesFieldUpdateOperationsInput | Uint8Array
    execution_time?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type sqlx_migrationsCreateManyInput = {
    version: bigint | number
    description: string
    installed_on?: Date | string
    success: boolean
    checksum: Uint8Array
    execution_time: bigint | number
  }

  export type sqlx_migrationsUpdateManyMutationInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    installed_on?: DateTimeFieldUpdateOperationsInput | Date | string
    success?: BoolFieldUpdateOperationsInput | boolean
    checksum?: BytesFieldUpdateOperationsInput | Uint8Array
    execution_time?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type sqlx_migrationsUncheckedUpdateManyInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    installed_on?: DateTimeFieldUpdateOperationsInput | Date | string
    success?: BoolFieldUpdateOperationsInput | boolean
    checksum?: BytesFieldUpdateOperationsInput | Uint8Array
    execution_time?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type api_request_logsCreateInput = {
    id?: string
    endpoint: string
    lst_symbol?: string | null
    request_status: string
    response_time_ms?: number | null
    error_message?: string | null
    retry_count?: number | null
    created_at?: Date | string
  }

  export type api_request_logsUncheckedCreateInput = {
    id?: string
    endpoint: string
    lst_symbol?: string | null
    request_status: string
    response_time_ms?: number | null
    error_message?: string | null
    retry_count?: number | null
    created_at?: Date | string
  }

  export type api_request_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    lst_symbol?: NullableStringFieldUpdateOperationsInput | string | null
    request_status?: StringFieldUpdateOperationsInput | string
    response_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    retry_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type api_request_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    lst_symbol?: NullableStringFieldUpdateOperationsInput | string | null
    request_status?: StringFieldUpdateOperationsInput | string
    response_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    retry_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type api_request_logsCreateManyInput = {
    id?: string
    endpoint: string
    lst_symbol?: string | null
    request_status: string
    response_time_ms?: number | null
    error_message?: string | null
    retry_count?: number | null
    created_at?: Date | string
  }

  export type api_request_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    lst_symbol?: NullableStringFieldUpdateOperationsInput | string | null
    request_status?: StringFieldUpdateOperationsInput | string
    response_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    retry_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type api_request_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    lst_symbol?: NullableStringFieldUpdateOperationsInput | string | null
    request_status?: StringFieldUpdateOperationsInput | string
    response_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    retry_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type depositsCreateInput = {
    id?: string
    amount_sol: Decimal | DecimalJsLike | number | string
    type: string
    source_chain: string
    tx_hash: string
    deposited_at?: Date | string
    users: usersCreateNestedOneWithoutDepositsInput
  }

  export type depositsUncheckedCreateInput = {
    id?: string
    user_id: string
    amount_sol: Decimal | DecimalJsLike | number | string
    type: string
    source_chain: string
    tx_hash: string
    deposited_at?: Date | string
  }

  export type depositsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_sol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    source_chain?: StringFieldUpdateOperationsInput | string
    tx_hash?: StringFieldUpdateOperationsInput | string
    deposited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type depositsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount_sol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    source_chain?: StringFieldUpdateOperationsInput | string
    tx_hash?: StringFieldUpdateOperationsInput | string
    deposited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type depositsCreateManyInput = {
    id?: string
    user_id: string
    amount_sol: Decimal | DecimalJsLike | number | string
    type: string
    source_chain: string
    tx_hash: string
    deposited_at?: Date | string
  }

  export type depositsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_sol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    source_chain?: StringFieldUpdateOperationsInput | string
    tx_hash?: StringFieldUpdateOperationsInput | string
    deposited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type depositsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount_sol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    source_chain?: StringFieldUpdateOperationsInput | string
    tx_hash?: StringFieldUpdateOperationsInput | string
    deposited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type epoch_snapshotsCreateInput = {
    id?: string
    epoch: number
    snapshot_time?: Date | string
    lst_strategy?: lst_strategyCreateNestedOneWithoutEpoch_snapshotsInput
    user_snapshots?: user_snapshotsCreateNestedManyWithoutEpoch_snapshotsInput
  }

  export type epoch_snapshotsUncheckedCreateInput = {
    id?: string
    epoch: number
    snapshot_time?: Date | string
    lst_strategy?: lst_strategyUncheckedCreateNestedOneWithoutEpoch_snapshotsInput
    user_snapshots?: user_snapshotsUncheckedCreateNestedManyWithoutEpoch_snapshotsInput
  }

  export type epoch_snapshotsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    epoch?: IntFieldUpdateOperationsInput | number
    snapshot_time?: DateTimeFieldUpdateOperationsInput | Date | string
    lst_strategy?: lst_strategyUpdateOneWithoutEpoch_snapshotsNestedInput
    user_snapshots?: user_snapshotsUpdateManyWithoutEpoch_snapshotsNestedInput
  }

  export type epoch_snapshotsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    epoch?: IntFieldUpdateOperationsInput | number
    snapshot_time?: DateTimeFieldUpdateOperationsInput | Date | string
    lst_strategy?: lst_strategyUncheckedUpdateOneWithoutEpoch_snapshotsNestedInput
    user_snapshots?: user_snapshotsUncheckedUpdateManyWithoutEpoch_snapshotsNestedInput
  }

  export type epoch_snapshotsCreateManyInput = {
    id?: string
    epoch: number
    snapshot_time?: Date | string
  }

  export type epoch_snapshotsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    epoch?: IntFieldUpdateOperationsInput | number
    snapshot_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type epoch_snapshotsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    epoch?: IntFieldUpdateOperationsInput | number
    snapshot_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_apy_dataCreateInput = {
    id?: string
    lst_symbol: string
    apy_type: string
    apy_value: Decimal | DecimalJsLike | number | string
    collected_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lst_apy_dataUncheckedCreateInput = {
    id?: string
    lst_symbol: string
    apy_type: string
    apy_value: Decimal | DecimalJsLike | number | string
    collected_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lst_apy_dataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lst_symbol?: StringFieldUpdateOperationsInput | string
    apy_type?: StringFieldUpdateOperationsInput | string
    apy_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_apy_dataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lst_symbol?: StringFieldUpdateOperationsInput | string
    apy_type?: StringFieldUpdateOperationsInput | string
    apy_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_apy_dataCreateManyInput = {
    id?: string
    lst_symbol: string
    apy_type: string
    apy_value: Decimal | DecimalJsLike | number | string
    collected_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lst_apy_dataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lst_symbol?: StringFieldUpdateOperationsInput | string
    apy_type?: StringFieldUpdateOperationsInput | string
    apy_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_apy_dataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lst_symbol?: StringFieldUpdateOperationsInput | string
    apy_type?: StringFieldUpdateOperationsInput | string
    apy_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_holder_dataCreateInput = {
    id?: string
    lst_symbol: string
    total_holders: bigint | number
    total_supply: Decimal | DecimalJsLike | number | string
    collected_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lst_holder_dataUncheckedCreateInput = {
    id?: string
    lst_symbol: string
    total_holders: bigint | number
    total_supply: Decimal | DecimalJsLike | number | string
    collected_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lst_holder_dataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lst_symbol?: StringFieldUpdateOperationsInput | string
    total_holders?: BigIntFieldUpdateOperationsInput | bigint | number
    total_supply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_holder_dataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lst_symbol?: StringFieldUpdateOperationsInput | string
    total_holders?: BigIntFieldUpdateOperationsInput | bigint | number
    total_supply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_holder_dataCreateManyInput = {
    id?: string
    lst_symbol: string
    total_holders: bigint | number
    total_supply: Decimal | DecimalJsLike | number | string
    collected_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lst_holder_dataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lst_symbol?: StringFieldUpdateOperationsInput | string
    total_holders?: BigIntFieldUpdateOperationsInput | bigint | number
    total_supply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_holder_dataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lst_symbol?: StringFieldUpdateOperationsInput | string
    total_holders?: BigIntFieldUpdateOperationsInput | bigint | number
    total_supply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_strategyCreateInput = {
    id?: string
    chosen_lst: string
    decided_at?: Date | string
    epoch_snapshots: epoch_snapshotsCreateNestedOneWithoutLst_strategyInput
  }

  export type lst_strategyUncheckedCreateInput = {
    id?: string
    epoch_snapshot_id: string
    chosen_lst: string
    decided_at?: Date | string
  }

  export type lst_strategyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chosen_lst?: StringFieldUpdateOperationsInput | string
    decided_at?: DateTimeFieldUpdateOperationsInput | Date | string
    epoch_snapshots?: epoch_snapshotsUpdateOneRequiredWithoutLst_strategyNestedInput
  }

  export type lst_strategyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    epoch_snapshot_id?: StringFieldUpdateOperationsInput | string
    chosen_lst?: StringFieldUpdateOperationsInput | string
    decided_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_strategyCreateManyInput = {
    id?: string
    epoch_snapshot_id: string
    chosen_lst: string
    decided_at?: Date | string
  }

  export type lst_strategyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chosen_lst?: StringFieldUpdateOperationsInput | string
    decided_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_strategyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    epoch_snapshot_id?: StringFieldUpdateOperationsInput | string
    chosen_lst?: StringFieldUpdateOperationsInput | string
    decided_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_tokensCreateInput = {
    id?: string
    symbol: string
    mint_address: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lst_tokensUncheckedCreateInput = {
    id?: string
    symbol: string
    mint_address: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lst_tokensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    mint_address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_tokensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    mint_address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_tokensCreateManyInput = {
    id?: string
    symbol: string
    mint_address: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lst_tokensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    mint_address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_tokensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    mint_address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_tvl_dataCreateInput = {
    id?: string
    lst_symbol: string
    tvl_value: Decimal | DecimalJsLike | number | string
    collected_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lst_tvl_dataUncheckedCreateInput = {
    id?: string
    lst_symbol: string
    tvl_value: Decimal | DecimalJsLike | number | string
    collected_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lst_tvl_dataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lst_symbol?: StringFieldUpdateOperationsInput | string
    tvl_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_tvl_dataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lst_symbol?: StringFieldUpdateOperationsInput | string
    tvl_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_tvl_dataCreateManyInput = {
    id?: string
    lst_symbol: string
    tvl_value: Decimal | DecimalJsLike | number | string
    collected_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lst_tvl_dataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lst_symbol?: StringFieldUpdateOperationsInput | string
    tvl_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_tvl_dataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lst_symbol?: StringFieldUpdateOperationsInput | string
    tvl_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_snapshotsCreateInput = {
    id?: string
    current_position: string
    sol_value: Decimal | DecimalJsLike | number | string
    epoch_snapshots: epoch_snapshotsCreateNestedOneWithoutUser_snapshotsInput
    users: usersCreateNestedOneWithoutUser_snapshotsInput
  }

  export type user_snapshotsUncheckedCreateInput = {
    id?: string
    user_id: string
    epoch_snapshot_id: string
    current_position: string
    sol_value: Decimal | DecimalJsLike | number | string
  }

  export type user_snapshotsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    current_position?: StringFieldUpdateOperationsInput | string
    sol_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    epoch_snapshots?: epoch_snapshotsUpdateOneRequiredWithoutUser_snapshotsNestedInput
    users?: usersUpdateOneRequiredWithoutUser_snapshotsNestedInput
  }

  export type user_snapshotsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    epoch_snapshot_id?: StringFieldUpdateOperationsInput | string
    current_position?: StringFieldUpdateOperationsInput | string
    sol_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type user_snapshotsCreateManyInput = {
    id?: string
    user_id: string
    epoch_snapshot_id: string
    current_position: string
    sol_value: Decimal | DecimalJsLike | number | string
  }

  export type user_snapshotsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    current_position?: StringFieldUpdateOperationsInput | string
    sol_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type user_snapshotsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    epoch_snapshot_id?: StringFieldUpdateOperationsInput | string
    current_position?: StringFieldUpdateOperationsInput | string
    sol_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type usersCreateInput = {
    id?: string
    created_at?: Date | string
    privy_id?: string | null
    deposits?: depositsCreateNestedManyWithoutUsersInput
    user_snapshots?: user_snapshotsCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    privy_id?: string | null
    deposits?: depositsUncheckedCreateNestedManyWithoutUsersInput
    user_snapshots?: user_snapshotsUncheckedCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    privy_id?: NullableStringFieldUpdateOperationsInput | string | null
    deposits?: depositsUpdateManyWithoutUsersNestedInput
    user_snapshots?: user_snapshotsUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    privy_id?: NullableStringFieldUpdateOperationsInput | string | null
    deposits?: depositsUncheckedUpdateManyWithoutUsersNestedInput
    user_snapshots?: user_snapshotsUncheckedUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    created_at?: Date | string
    privy_id?: string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    privy_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    privy_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type withdrawalsCreateInput = {
    id?: string
    amount_sol: Decimal | DecimalJsLike | number | string
    type: string
    destination_chain: string
    tx_hash?: string | null
    withdrawn_at?: Date | string
    users: usersCreateNestedOneWithoutWithdrawalsInput
  }

  export type withdrawalsUncheckedCreateInput = {
    id?: string
    user_id: string
    amount_sol: Decimal | DecimalJsLike | number | string
    type: string
    destination_chain: string
    tx_hash?: string | null
    withdrawn_at?: Date | string
  }

  export type withdrawalsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_sol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    destination_chain?: StringFieldUpdateOperationsInput | string
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawn_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutWithdrawalsNestedInput
  }

  export type withdrawalsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount_sol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    destination_chain?: StringFieldUpdateOperationsInput | string
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawn_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type withdrawalsCreateManyInput = {
    id?: string
    user_id: string
    amount_sol: Decimal | DecimalJsLike | number | string
    type: string
    destination_chain: string
    tx_hash?: string | null
    withdrawn_at?: Date | string
  }

  export type withdrawalsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_sol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    destination_chain?: StringFieldUpdateOperationsInput | string
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawn_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type withdrawalsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount_sol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    destination_chain?: StringFieldUpdateOperationsInput | string
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawn_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type sqlx_migrationsCountOrderByAggregateInput = {
    version?: SortOrder
    description?: SortOrder
    installed_on?: SortOrder
    success?: SortOrder
    checksum?: SortOrder
    execution_time?: SortOrder
  }

  export type sqlx_migrationsAvgOrderByAggregateInput = {
    version?: SortOrder
    execution_time?: SortOrder
  }

  export type sqlx_migrationsMaxOrderByAggregateInput = {
    version?: SortOrder
    description?: SortOrder
    installed_on?: SortOrder
    success?: SortOrder
    checksum?: SortOrder
    execution_time?: SortOrder
  }

  export type sqlx_migrationsMinOrderByAggregateInput = {
    version?: SortOrder
    description?: SortOrder
    installed_on?: SortOrder
    success?: SortOrder
    checksum?: SortOrder
    execution_time?: SortOrder
  }

  export type sqlx_migrationsSumOrderByAggregateInput = {
    version?: SortOrder
    execution_time?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type api_request_logsCountOrderByAggregateInput = {
    id?: SortOrder
    endpoint?: SortOrder
    lst_symbol?: SortOrder
    request_status?: SortOrder
    response_time_ms?: SortOrder
    error_message?: SortOrder
    retry_count?: SortOrder
    created_at?: SortOrder
  }

  export type api_request_logsAvgOrderByAggregateInput = {
    response_time_ms?: SortOrder
    retry_count?: SortOrder
  }

  export type api_request_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    endpoint?: SortOrder
    lst_symbol?: SortOrder
    request_status?: SortOrder
    response_time_ms?: SortOrder
    error_message?: SortOrder
    retry_count?: SortOrder
    created_at?: SortOrder
  }

  export type api_request_logsMinOrderByAggregateInput = {
    id?: SortOrder
    endpoint?: SortOrder
    lst_symbol?: SortOrder
    request_status?: SortOrder
    response_time_ms?: SortOrder
    error_message?: SortOrder
    retry_count?: SortOrder
    created_at?: SortOrder
  }

  export type api_request_logsSumOrderByAggregateInput = {
    response_time_ms?: SortOrder
    retry_count?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type depositsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount_sol?: SortOrder
    type?: SortOrder
    source_chain?: SortOrder
    tx_hash?: SortOrder
    deposited_at?: SortOrder
  }

  export type depositsAvgOrderByAggregateInput = {
    amount_sol?: SortOrder
  }

  export type depositsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount_sol?: SortOrder
    type?: SortOrder
    source_chain?: SortOrder
    tx_hash?: SortOrder
    deposited_at?: SortOrder
  }

  export type depositsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount_sol?: SortOrder
    type?: SortOrder
    source_chain?: SortOrder
    tx_hash?: SortOrder
    deposited_at?: SortOrder
  }

  export type depositsSumOrderByAggregateInput = {
    amount_sol?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Lst_strategyNullableScalarRelationFilter = {
    is?: lst_strategyWhereInput | null
    isNot?: lst_strategyWhereInput | null
  }

  export type User_snapshotsListRelationFilter = {
    every?: user_snapshotsWhereInput
    some?: user_snapshotsWhereInput
    none?: user_snapshotsWhereInput
  }

  export type user_snapshotsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type epoch_snapshotsCountOrderByAggregateInput = {
    id?: SortOrder
    epoch?: SortOrder
    snapshot_time?: SortOrder
  }

  export type epoch_snapshotsAvgOrderByAggregateInput = {
    epoch?: SortOrder
  }

  export type epoch_snapshotsMaxOrderByAggregateInput = {
    id?: SortOrder
    epoch?: SortOrder
    snapshot_time?: SortOrder
  }

  export type epoch_snapshotsMinOrderByAggregateInput = {
    id?: SortOrder
    epoch?: SortOrder
    snapshot_time?: SortOrder
  }

  export type epoch_snapshotsSumOrderByAggregateInput = {
    epoch?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type lst_apy_dataLst_symbolApy_typeCompoundUniqueInput = {
    lst_symbol: string
    apy_type: string
  }

  export type lst_apy_dataCountOrderByAggregateInput = {
    id?: SortOrder
    lst_symbol?: SortOrder
    apy_type?: SortOrder
    apy_value?: SortOrder
    collected_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_apy_dataAvgOrderByAggregateInput = {
    apy_value?: SortOrder
  }

  export type lst_apy_dataMaxOrderByAggregateInput = {
    id?: SortOrder
    lst_symbol?: SortOrder
    apy_type?: SortOrder
    apy_value?: SortOrder
    collected_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_apy_dataMinOrderByAggregateInput = {
    id?: SortOrder
    lst_symbol?: SortOrder
    apy_type?: SortOrder
    apy_value?: SortOrder
    collected_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_apy_dataSumOrderByAggregateInput = {
    apy_value?: SortOrder
  }

  export type lst_holder_dataLst_symbolCollected_atCompoundUniqueInput = {
    lst_symbol: string
    collected_at: Date | string
  }

  export type lst_holder_dataCountOrderByAggregateInput = {
    id?: SortOrder
    lst_symbol?: SortOrder
    total_holders?: SortOrder
    total_supply?: SortOrder
    collected_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_holder_dataAvgOrderByAggregateInput = {
    total_holders?: SortOrder
    total_supply?: SortOrder
  }

  export type lst_holder_dataMaxOrderByAggregateInput = {
    id?: SortOrder
    lst_symbol?: SortOrder
    total_holders?: SortOrder
    total_supply?: SortOrder
    collected_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_holder_dataMinOrderByAggregateInput = {
    id?: SortOrder
    lst_symbol?: SortOrder
    total_holders?: SortOrder
    total_supply?: SortOrder
    collected_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_holder_dataSumOrderByAggregateInput = {
    total_holders?: SortOrder
    total_supply?: SortOrder
  }

  export type Epoch_snapshotsScalarRelationFilter = {
    is?: epoch_snapshotsWhereInput
    isNot?: epoch_snapshotsWhereInput
  }

  export type lst_strategyCountOrderByAggregateInput = {
    id?: SortOrder
    epoch_snapshot_id?: SortOrder
    chosen_lst?: SortOrder
    decided_at?: SortOrder
  }

  export type lst_strategyMaxOrderByAggregateInput = {
    id?: SortOrder
    epoch_snapshot_id?: SortOrder
    chosen_lst?: SortOrder
    decided_at?: SortOrder
  }

  export type lst_strategyMinOrderByAggregateInput = {
    id?: SortOrder
    epoch_snapshot_id?: SortOrder
    chosen_lst?: SortOrder
    decided_at?: SortOrder
  }

  export type lst_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    mint_address?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    mint_address?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    mint_address?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_tvl_dataLst_symbolCollected_atCompoundUniqueInput = {
    lst_symbol: string
    collected_at: Date | string
  }

  export type lst_tvl_dataCountOrderByAggregateInput = {
    id?: SortOrder
    lst_symbol?: SortOrder
    tvl_value?: SortOrder
    collected_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_tvl_dataAvgOrderByAggregateInput = {
    tvl_value?: SortOrder
  }

  export type lst_tvl_dataMaxOrderByAggregateInput = {
    id?: SortOrder
    lst_symbol?: SortOrder
    tvl_value?: SortOrder
    collected_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_tvl_dataMinOrderByAggregateInput = {
    id?: SortOrder
    lst_symbol?: SortOrder
    tvl_value?: SortOrder
    collected_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lst_tvl_dataSumOrderByAggregateInput = {
    tvl_value?: SortOrder
  }

  export type user_snapshotsUser_idEpoch_snapshot_idCompoundUniqueInput = {
    user_id: string
    epoch_snapshot_id: string
  }

  export type user_snapshotsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    epoch_snapshot_id?: SortOrder
    current_position?: SortOrder
    sol_value?: SortOrder
  }

  export type user_snapshotsAvgOrderByAggregateInput = {
    sol_value?: SortOrder
  }

  export type user_snapshotsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    epoch_snapshot_id?: SortOrder
    current_position?: SortOrder
    sol_value?: SortOrder
  }

  export type user_snapshotsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    epoch_snapshot_id?: SortOrder
    current_position?: SortOrder
    sol_value?: SortOrder
  }

  export type user_snapshotsSumOrderByAggregateInput = {
    sol_value?: SortOrder
  }

  export type DepositsListRelationFilter = {
    every?: depositsWhereInput
    some?: depositsWhereInput
    none?: depositsWhereInput
  }

  export type WithdrawalsListRelationFilter = {
    every?: withdrawalsWhereInput
    some?: withdrawalsWhereInput
    none?: withdrawalsWhereInput
  }

  export type depositsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type withdrawalsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    privy_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    privy_id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    privy_id?: SortOrder
  }

  export type withdrawalsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount_sol?: SortOrder
    type?: SortOrder
    destination_chain?: SortOrder
    tx_hash?: SortOrder
    withdrawn_at?: SortOrder
  }

  export type withdrawalsAvgOrderByAggregateInput = {
    amount_sol?: SortOrder
  }

  export type withdrawalsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount_sol?: SortOrder
    type?: SortOrder
    destination_chain?: SortOrder
    tx_hash?: SortOrder
    withdrawn_at?: SortOrder
  }

  export type withdrawalsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount_sol?: SortOrder
    type?: SortOrder
    destination_chain?: SortOrder
    tx_hash?: SortOrder
    withdrawn_at?: SortOrder
  }

  export type withdrawalsSumOrderByAggregateInput = {
    amount_sol?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutDepositsInput = {
    create?: XOR<usersCreateWithoutDepositsInput, usersUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDepositsInput
    connect?: usersWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usersUpdateOneRequiredWithoutDepositsNestedInput = {
    create?: XOR<usersCreateWithoutDepositsInput, usersUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDepositsInput
    upsert?: usersUpsertWithoutDepositsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutDepositsInput, usersUpdateWithoutDepositsInput>, usersUncheckedUpdateWithoutDepositsInput>
  }

  export type lst_strategyCreateNestedOneWithoutEpoch_snapshotsInput = {
    create?: XOR<lst_strategyCreateWithoutEpoch_snapshotsInput, lst_strategyUncheckedCreateWithoutEpoch_snapshotsInput>
    connectOrCreate?: lst_strategyCreateOrConnectWithoutEpoch_snapshotsInput
    connect?: lst_strategyWhereUniqueInput
  }

  export type user_snapshotsCreateNestedManyWithoutEpoch_snapshotsInput = {
    create?: XOR<user_snapshotsCreateWithoutEpoch_snapshotsInput, user_snapshotsUncheckedCreateWithoutEpoch_snapshotsInput> | user_snapshotsCreateWithoutEpoch_snapshotsInput[] | user_snapshotsUncheckedCreateWithoutEpoch_snapshotsInput[]
    connectOrCreate?: user_snapshotsCreateOrConnectWithoutEpoch_snapshotsInput | user_snapshotsCreateOrConnectWithoutEpoch_snapshotsInput[]
    createMany?: user_snapshotsCreateManyEpoch_snapshotsInputEnvelope
    connect?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
  }

  export type lst_strategyUncheckedCreateNestedOneWithoutEpoch_snapshotsInput = {
    create?: XOR<lst_strategyCreateWithoutEpoch_snapshotsInput, lst_strategyUncheckedCreateWithoutEpoch_snapshotsInput>
    connectOrCreate?: lst_strategyCreateOrConnectWithoutEpoch_snapshotsInput
    connect?: lst_strategyWhereUniqueInput
  }

  export type user_snapshotsUncheckedCreateNestedManyWithoutEpoch_snapshotsInput = {
    create?: XOR<user_snapshotsCreateWithoutEpoch_snapshotsInput, user_snapshotsUncheckedCreateWithoutEpoch_snapshotsInput> | user_snapshotsCreateWithoutEpoch_snapshotsInput[] | user_snapshotsUncheckedCreateWithoutEpoch_snapshotsInput[]
    connectOrCreate?: user_snapshotsCreateOrConnectWithoutEpoch_snapshotsInput | user_snapshotsCreateOrConnectWithoutEpoch_snapshotsInput[]
    createMany?: user_snapshotsCreateManyEpoch_snapshotsInputEnvelope
    connect?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type lst_strategyUpdateOneWithoutEpoch_snapshotsNestedInput = {
    create?: XOR<lst_strategyCreateWithoutEpoch_snapshotsInput, lst_strategyUncheckedCreateWithoutEpoch_snapshotsInput>
    connectOrCreate?: lst_strategyCreateOrConnectWithoutEpoch_snapshotsInput
    upsert?: lst_strategyUpsertWithoutEpoch_snapshotsInput
    disconnect?: lst_strategyWhereInput | boolean
    delete?: lst_strategyWhereInput | boolean
    connect?: lst_strategyWhereUniqueInput
    update?: XOR<XOR<lst_strategyUpdateToOneWithWhereWithoutEpoch_snapshotsInput, lst_strategyUpdateWithoutEpoch_snapshotsInput>, lst_strategyUncheckedUpdateWithoutEpoch_snapshotsInput>
  }

  export type user_snapshotsUpdateManyWithoutEpoch_snapshotsNestedInput = {
    create?: XOR<user_snapshotsCreateWithoutEpoch_snapshotsInput, user_snapshotsUncheckedCreateWithoutEpoch_snapshotsInput> | user_snapshotsCreateWithoutEpoch_snapshotsInput[] | user_snapshotsUncheckedCreateWithoutEpoch_snapshotsInput[]
    connectOrCreate?: user_snapshotsCreateOrConnectWithoutEpoch_snapshotsInput | user_snapshotsCreateOrConnectWithoutEpoch_snapshotsInput[]
    upsert?: user_snapshotsUpsertWithWhereUniqueWithoutEpoch_snapshotsInput | user_snapshotsUpsertWithWhereUniqueWithoutEpoch_snapshotsInput[]
    createMany?: user_snapshotsCreateManyEpoch_snapshotsInputEnvelope
    set?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    disconnect?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    delete?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    connect?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    update?: user_snapshotsUpdateWithWhereUniqueWithoutEpoch_snapshotsInput | user_snapshotsUpdateWithWhereUniqueWithoutEpoch_snapshotsInput[]
    updateMany?: user_snapshotsUpdateManyWithWhereWithoutEpoch_snapshotsInput | user_snapshotsUpdateManyWithWhereWithoutEpoch_snapshotsInput[]
    deleteMany?: user_snapshotsScalarWhereInput | user_snapshotsScalarWhereInput[]
  }

  export type lst_strategyUncheckedUpdateOneWithoutEpoch_snapshotsNestedInput = {
    create?: XOR<lst_strategyCreateWithoutEpoch_snapshotsInput, lst_strategyUncheckedCreateWithoutEpoch_snapshotsInput>
    connectOrCreate?: lst_strategyCreateOrConnectWithoutEpoch_snapshotsInput
    upsert?: lst_strategyUpsertWithoutEpoch_snapshotsInput
    disconnect?: lst_strategyWhereInput | boolean
    delete?: lst_strategyWhereInput | boolean
    connect?: lst_strategyWhereUniqueInput
    update?: XOR<XOR<lst_strategyUpdateToOneWithWhereWithoutEpoch_snapshotsInput, lst_strategyUpdateWithoutEpoch_snapshotsInput>, lst_strategyUncheckedUpdateWithoutEpoch_snapshotsInput>
  }

  export type user_snapshotsUncheckedUpdateManyWithoutEpoch_snapshotsNestedInput = {
    create?: XOR<user_snapshotsCreateWithoutEpoch_snapshotsInput, user_snapshotsUncheckedCreateWithoutEpoch_snapshotsInput> | user_snapshotsCreateWithoutEpoch_snapshotsInput[] | user_snapshotsUncheckedCreateWithoutEpoch_snapshotsInput[]
    connectOrCreate?: user_snapshotsCreateOrConnectWithoutEpoch_snapshotsInput | user_snapshotsCreateOrConnectWithoutEpoch_snapshotsInput[]
    upsert?: user_snapshotsUpsertWithWhereUniqueWithoutEpoch_snapshotsInput | user_snapshotsUpsertWithWhereUniqueWithoutEpoch_snapshotsInput[]
    createMany?: user_snapshotsCreateManyEpoch_snapshotsInputEnvelope
    set?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    disconnect?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    delete?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    connect?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    update?: user_snapshotsUpdateWithWhereUniqueWithoutEpoch_snapshotsInput | user_snapshotsUpdateWithWhereUniqueWithoutEpoch_snapshotsInput[]
    updateMany?: user_snapshotsUpdateManyWithWhereWithoutEpoch_snapshotsInput | user_snapshotsUpdateManyWithWhereWithoutEpoch_snapshotsInput[]
    deleteMany?: user_snapshotsScalarWhereInput | user_snapshotsScalarWhereInput[]
  }

  export type epoch_snapshotsCreateNestedOneWithoutLst_strategyInput = {
    create?: XOR<epoch_snapshotsCreateWithoutLst_strategyInput, epoch_snapshotsUncheckedCreateWithoutLst_strategyInput>
    connectOrCreate?: epoch_snapshotsCreateOrConnectWithoutLst_strategyInput
    connect?: epoch_snapshotsWhereUniqueInput
  }

  export type epoch_snapshotsUpdateOneRequiredWithoutLst_strategyNestedInput = {
    create?: XOR<epoch_snapshotsCreateWithoutLst_strategyInput, epoch_snapshotsUncheckedCreateWithoutLst_strategyInput>
    connectOrCreate?: epoch_snapshotsCreateOrConnectWithoutLst_strategyInput
    upsert?: epoch_snapshotsUpsertWithoutLst_strategyInput
    connect?: epoch_snapshotsWhereUniqueInput
    update?: XOR<XOR<epoch_snapshotsUpdateToOneWithWhereWithoutLst_strategyInput, epoch_snapshotsUpdateWithoutLst_strategyInput>, epoch_snapshotsUncheckedUpdateWithoutLst_strategyInput>
  }

  export type epoch_snapshotsCreateNestedOneWithoutUser_snapshotsInput = {
    create?: XOR<epoch_snapshotsCreateWithoutUser_snapshotsInput, epoch_snapshotsUncheckedCreateWithoutUser_snapshotsInput>
    connectOrCreate?: epoch_snapshotsCreateOrConnectWithoutUser_snapshotsInput
    connect?: epoch_snapshotsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_snapshotsInput = {
    create?: XOR<usersCreateWithoutUser_snapshotsInput, usersUncheckedCreateWithoutUser_snapshotsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_snapshotsInput
    connect?: usersWhereUniqueInput
  }

  export type epoch_snapshotsUpdateOneRequiredWithoutUser_snapshotsNestedInput = {
    create?: XOR<epoch_snapshotsCreateWithoutUser_snapshotsInput, epoch_snapshotsUncheckedCreateWithoutUser_snapshotsInput>
    connectOrCreate?: epoch_snapshotsCreateOrConnectWithoutUser_snapshotsInput
    upsert?: epoch_snapshotsUpsertWithoutUser_snapshotsInput
    connect?: epoch_snapshotsWhereUniqueInput
    update?: XOR<XOR<epoch_snapshotsUpdateToOneWithWhereWithoutUser_snapshotsInput, epoch_snapshotsUpdateWithoutUser_snapshotsInput>, epoch_snapshotsUncheckedUpdateWithoutUser_snapshotsInput>
  }

  export type usersUpdateOneRequiredWithoutUser_snapshotsNestedInput = {
    create?: XOR<usersCreateWithoutUser_snapshotsInput, usersUncheckedCreateWithoutUser_snapshotsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_snapshotsInput
    upsert?: usersUpsertWithoutUser_snapshotsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_snapshotsInput, usersUpdateWithoutUser_snapshotsInput>, usersUncheckedUpdateWithoutUser_snapshotsInput>
  }

  export type depositsCreateNestedManyWithoutUsersInput = {
    create?: XOR<depositsCreateWithoutUsersInput, depositsUncheckedCreateWithoutUsersInput> | depositsCreateWithoutUsersInput[] | depositsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: depositsCreateOrConnectWithoutUsersInput | depositsCreateOrConnectWithoutUsersInput[]
    createMany?: depositsCreateManyUsersInputEnvelope
    connect?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
  }

  export type user_snapshotsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_snapshotsCreateWithoutUsersInput, user_snapshotsUncheckedCreateWithoutUsersInput> | user_snapshotsCreateWithoutUsersInput[] | user_snapshotsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_snapshotsCreateOrConnectWithoutUsersInput | user_snapshotsCreateOrConnectWithoutUsersInput[]
    createMany?: user_snapshotsCreateManyUsersInputEnvelope
    connect?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
  }

  export type withdrawalsCreateNestedManyWithoutUsersInput = {
    create?: XOR<withdrawalsCreateWithoutUsersInput, withdrawalsUncheckedCreateWithoutUsersInput> | withdrawalsCreateWithoutUsersInput[] | withdrawalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: withdrawalsCreateOrConnectWithoutUsersInput | withdrawalsCreateOrConnectWithoutUsersInput[]
    createMany?: withdrawalsCreateManyUsersInputEnvelope
    connect?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
  }

  export type depositsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<depositsCreateWithoutUsersInput, depositsUncheckedCreateWithoutUsersInput> | depositsCreateWithoutUsersInput[] | depositsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: depositsCreateOrConnectWithoutUsersInput | depositsCreateOrConnectWithoutUsersInput[]
    createMany?: depositsCreateManyUsersInputEnvelope
    connect?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
  }

  export type user_snapshotsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_snapshotsCreateWithoutUsersInput, user_snapshotsUncheckedCreateWithoutUsersInput> | user_snapshotsCreateWithoutUsersInput[] | user_snapshotsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_snapshotsCreateOrConnectWithoutUsersInput | user_snapshotsCreateOrConnectWithoutUsersInput[]
    createMany?: user_snapshotsCreateManyUsersInputEnvelope
    connect?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
  }

  export type withdrawalsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<withdrawalsCreateWithoutUsersInput, withdrawalsUncheckedCreateWithoutUsersInput> | withdrawalsCreateWithoutUsersInput[] | withdrawalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: withdrawalsCreateOrConnectWithoutUsersInput | withdrawalsCreateOrConnectWithoutUsersInput[]
    createMany?: withdrawalsCreateManyUsersInputEnvelope
    connect?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
  }

  export type depositsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<depositsCreateWithoutUsersInput, depositsUncheckedCreateWithoutUsersInput> | depositsCreateWithoutUsersInput[] | depositsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: depositsCreateOrConnectWithoutUsersInput | depositsCreateOrConnectWithoutUsersInput[]
    upsert?: depositsUpsertWithWhereUniqueWithoutUsersInput | depositsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: depositsCreateManyUsersInputEnvelope
    set?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    disconnect?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    delete?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    connect?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    update?: depositsUpdateWithWhereUniqueWithoutUsersInput | depositsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: depositsUpdateManyWithWhereWithoutUsersInput | depositsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: depositsScalarWhereInput | depositsScalarWhereInput[]
  }

  export type user_snapshotsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_snapshotsCreateWithoutUsersInput, user_snapshotsUncheckedCreateWithoutUsersInput> | user_snapshotsCreateWithoutUsersInput[] | user_snapshotsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_snapshotsCreateOrConnectWithoutUsersInput | user_snapshotsCreateOrConnectWithoutUsersInput[]
    upsert?: user_snapshotsUpsertWithWhereUniqueWithoutUsersInput | user_snapshotsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_snapshotsCreateManyUsersInputEnvelope
    set?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    disconnect?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    delete?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    connect?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    update?: user_snapshotsUpdateWithWhereUniqueWithoutUsersInput | user_snapshotsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_snapshotsUpdateManyWithWhereWithoutUsersInput | user_snapshotsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_snapshotsScalarWhereInput | user_snapshotsScalarWhereInput[]
  }

  export type withdrawalsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<withdrawalsCreateWithoutUsersInput, withdrawalsUncheckedCreateWithoutUsersInput> | withdrawalsCreateWithoutUsersInput[] | withdrawalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: withdrawalsCreateOrConnectWithoutUsersInput | withdrawalsCreateOrConnectWithoutUsersInput[]
    upsert?: withdrawalsUpsertWithWhereUniqueWithoutUsersInput | withdrawalsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: withdrawalsCreateManyUsersInputEnvelope
    set?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    disconnect?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    delete?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    connect?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    update?: withdrawalsUpdateWithWhereUniqueWithoutUsersInput | withdrawalsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: withdrawalsUpdateManyWithWhereWithoutUsersInput | withdrawalsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: withdrawalsScalarWhereInput | withdrawalsScalarWhereInput[]
  }

  export type depositsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<depositsCreateWithoutUsersInput, depositsUncheckedCreateWithoutUsersInput> | depositsCreateWithoutUsersInput[] | depositsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: depositsCreateOrConnectWithoutUsersInput | depositsCreateOrConnectWithoutUsersInput[]
    upsert?: depositsUpsertWithWhereUniqueWithoutUsersInput | depositsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: depositsCreateManyUsersInputEnvelope
    set?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    disconnect?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    delete?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    connect?: depositsWhereUniqueInput | depositsWhereUniqueInput[]
    update?: depositsUpdateWithWhereUniqueWithoutUsersInput | depositsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: depositsUpdateManyWithWhereWithoutUsersInput | depositsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: depositsScalarWhereInput | depositsScalarWhereInput[]
  }

  export type user_snapshotsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_snapshotsCreateWithoutUsersInput, user_snapshotsUncheckedCreateWithoutUsersInput> | user_snapshotsCreateWithoutUsersInput[] | user_snapshotsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_snapshotsCreateOrConnectWithoutUsersInput | user_snapshotsCreateOrConnectWithoutUsersInput[]
    upsert?: user_snapshotsUpsertWithWhereUniqueWithoutUsersInput | user_snapshotsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_snapshotsCreateManyUsersInputEnvelope
    set?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    disconnect?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    delete?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    connect?: user_snapshotsWhereUniqueInput | user_snapshotsWhereUniqueInput[]
    update?: user_snapshotsUpdateWithWhereUniqueWithoutUsersInput | user_snapshotsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_snapshotsUpdateManyWithWhereWithoutUsersInput | user_snapshotsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_snapshotsScalarWhereInput | user_snapshotsScalarWhereInput[]
  }

  export type withdrawalsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<withdrawalsCreateWithoutUsersInput, withdrawalsUncheckedCreateWithoutUsersInput> | withdrawalsCreateWithoutUsersInput[] | withdrawalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: withdrawalsCreateOrConnectWithoutUsersInput | withdrawalsCreateOrConnectWithoutUsersInput[]
    upsert?: withdrawalsUpsertWithWhereUniqueWithoutUsersInput | withdrawalsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: withdrawalsCreateManyUsersInputEnvelope
    set?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    disconnect?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    delete?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    connect?: withdrawalsWhereUniqueInput | withdrawalsWhereUniqueInput[]
    update?: withdrawalsUpdateWithWhereUniqueWithoutUsersInput | withdrawalsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: withdrawalsUpdateManyWithWhereWithoutUsersInput | withdrawalsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: withdrawalsScalarWhereInput | withdrawalsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<usersCreateWithoutWithdrawalsInput, usersUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWithdrawalsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<usersCreateWithoutWithdrawalsInput, usersUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWithdrawalsInput
    upsert?: usersUpsertWithoutWithdrawalsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWithdrawalsInput, usersUpdateWithoutWithdrawalsInput>, usersUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type usersCreateWithoutDepositsInput = {
    id?: string
    created_at?: Date | string
    privy_id?: string | null
    user_snapshots?: user_snapshotsCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutDepositsInput = {
    id?: string
    created_at?: Date | string
    privy_id?: string | null
    user_snapshots?: user_snapshotsUncheckedCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutDepositsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDepositsInput, usersUncheckedCreateWithoutDepositsInput>
  }

  export type usersUpsertWithoutDepositsInput = {
    update: XOR<usersUpdateWithoutDepositsInput, usersUncheckedUpdateWithoutDepositsInput>
    create: XOR<usersCreateWithoutDepositsInput, usersUncheckedCreateWithoutDepositsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutDepositsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutDepositsInput, usersUncheckedUpdateWithoutDepositsInput>
  }

  export type usersUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    privy_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_snapshots?: user_snapshotsUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    privy_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_snapshots?: user_snapshotsUncheckedUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type lst_strategyCreateWithoutEpoch_snapshotsInput = {
    id?: string
    chosen_lst: string
    decided_at?: Date | string
  }

  export type lst_strategyUncheckedCreateWithoutEpoch_snapshotsInput = {
    id?: string
    chosen_lst: string
    decided_at?: Date | string
  }

  export type lst_strategyCreateOrConnectWithoutEpoch_snapshotsInput = {
    where: lst_strategyWhereUniqueInput
    create: XOR<lst_strategyCreateWithoutEpoch_snapshotsInput, lst_strategyUncheckedCreateWithoutEpoch_snapshotsInput>
  }

  export type user_snapshotsCreateWithoutEpoch_snapshotsInput = {
    id?: string
    current_position: string
    sol_value: Decimal | DecimalJsLike | number | string
    users: usersCreateNestedOneWithoutUser_snapshotsInput
  }

  export type user_snapshotsUncheckedCreateWithoutEpoch_snapshotsInput = {
    id?: string
    user_id: string
    current_position: string
    sol_value: Decimal | DecimalJsLike | number | string
  }

  export type user_snapshotsCreateOrConnectWithoutEpoch_snapshotsInput = {
    where: user_snapshotsWhereUniqueInput
    create: XOR<user_snapshotsCreateWithoutEpoch_snapshotsInput, user_snapshotsUncheckedCreateWithoutEpoch_snapshotsInput>
  }

  export type user_snapshotsCreateManyEpoch_snapshotsInputEnvelope = {
    data: user_snapshotsCreateManyEpoch_snapshotsInput | user_snapshotsCreateManyEpoch_snapshotsInput[]
    skipDuplicates?: boolean
  }

  export type lst_strategyUpsertWithoutEpoch_snapshotsInput = {
    update: XOR<lst_strategyUpdateWithoutEpoch_snapshotsInput, lst_strategyUncheckedUpdateWithoutEpoch_snapshotsInput>
    create: XOR<lst_strategyCreateWithoutEpoch_snapshotsInput, lst_strategyUncheckedCreateWithoutEpoch_snapshotsInput>
    where?: lst_strategyWhereInput
  }

  export type lst_strategyUpdateToOneWithWhereWithoutEpoch_snapshotsInput = {
    where?: lst_strategyWhereInput
    data: XOR<lst_strategyUpdateWithoutEpoch_snapshotsInput, lst_strategyUncheckedUpdateWithoutEpoch_snapshotsInput>
  }

  export type lst_strategyUpdateWithoutEpoch_snapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    chosen_lst?: StringFieldUpdateOperationsInput | string
    decided_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lst_strategyUncheckedUpdateWithoutEpoch_snapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    chosen_lst?: StringFieldUpdateOperationsInput | string
    decided_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_snapshotsUpsertWithWhereUniqueWithoutEpoch_snapshotsInput = {
    where: user_snapshotsWhereUniqueInput
    update: XOR<user_snapshotsUpdateWithoutEpoch_snapshotsInput, user_snapshotsUncheckedUpdateWithoutEpoch_snapshotsInput>
    create: XOR<user_snapshotsCreateWithoutEpoch_snapshotsInput, user_snapshotsUncheckedCreateWithoutEpoch_snapshotsInput>
  }

  export type user_snapshotsUpdateWithWhereUniqueWithoutEpoch_snapshotsInput = {
    where: user_snapshotsWhereUniqueInput
    data: XOR<user_snapshotsUpdateWithoutEpoch_snapshotsInput, user_snapshotsUncheckedUpdateWithoutEpoch_snapshotsInput>
  }

  export type user_snapshotsUpdateManyWithWhereWithoutEpoch_snapshotsInput = {
    where: user_snapshotsScalarWhereInput
    data: XOR<user_snapshotsUpdateManyMutationInput, user_snapshotsUncheckedUpdateManyWithoutEpoch_snapshotsInput>
  }

  export type user_snapshotsScalarWhereInput = {
    AND?: user_snapshotsScalarWhereInput | user_snapshotsScalarWhereInput[]
    OR?: user_snapshotsScalarWhereInput[]
    NOT?: user_snapshotsScalarWhereInput | user_snapshotsScalarWhereInput[]
    id?: UuidFilter<"user_snapshots"> | string
    user_id?: UuidFilter<"user_snapshots"> | string
    epoch_snapshot_id?: UuidFilter<"user_snapshots"> | string
    current_position?: StringFilter<"user_snapshots"> | string
    sol_value?: DecimalFilter<"user_snapshots"> | Decimal | DecimalJsLike | number | string
  }

  export type epoch_snapshotsCreateWithoutLst_strategyInput = {
    id?: string
    epoch: number
    snapshot_time?: Date | string
    user_snapshots?: user_snapshotsCreateNestedManyWithoutEpoch_snapshotsInput
  }

  export type epoch_snapshotsUncheckedCreateWithoutLst_strategyInput = {
    id?: string
    epoch: number
    snapshot_time?: Date | string
    user_snapshots?: user_snapshotsUncheckedCreateNestedManyWithoutEpoch_snapshotsInput
  }

  export type epoch_snapshotsCreateOrConnectWithoutLst_strategyInput = {
    where: epoch_snapshotsWhereUniqueInput
    create: XOR<epoch_snapshotsCreateWithoutLst_strategyInput, epoch_snapshotsUncheckedCreateWithoutLst_strategyInput>
  }

  export type epoch_snapshotsUpsertWithoutLst_strategyInput = {
    update: XOR<epoch_snapshotsUpdateWithoutLst_strategyInput, epoch_snapshotsUncheckedUpdateWithoutLst_strategyInput>
    create: XOR<epoch_snapshotsCreateWithoutLst_strategyInput, epoch_snapshotsUncheckedCreateWithoutLst_strategyInput>
    where?: epoch_snapshotsWhereInput
  }

  export type epoch_snapshotsUpdateToOneWithWhereWithoutLst_strategyInput = {
    where?: epoch_snapshotsWhereInput
    data: XOR<epoch_snapshotsUpdateWithoutLst_strategyInput, epoch_snapshotsUncheckedUpdateWithoutLst_strategyInput>
  }

  export type epoch_snapshotsUpdateWithoutLst_strategyInput = {
    id?: StringFieldUpdateOperationsInput | string
    epoch?: IntFieldUpdateOperationsInput | number
    snapshot_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user_snapshots?: user_snapshotsUpdateManyWithoutEpoch_snapshotsNestedInput
  }

  export type epoch_snapshotsUncheckedUpdateWithoutLst_strategyInput = {
    id?: StringFieldUpdateOperationsInput | string
    epoch?: IntFieldUpdateOperationsInput | number
    snapshot_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user_snapshots?: user_snapshotsUncheckedUpdateManyWithoutEpoch_snapshotsNestedInput
  }

  export type epoch_snapshotsCreateWithoutUser_snapshotsInput = {
    id?: string
    epoch: number
    snapshot_time?: Date | string
    lst_strategy?: lst_strategyCreateNestedOneWithoutEpoch_snapshotsInput
  }

  export type epoch_snapshotsUncheckedCreateWithoutUser_snapshotsInput = {
    id?: string
    epoch: number
    snapshot_time?: Date | string
    lst_strategy?: lst_strategyUncheckedCreateNestedOneWithoutEpoch_snapshotsInput
  }

  export type epoch_snapshotsCreateOrConnectWithoutUser_snapshotsInput = {
    where: epoch_snapshotsWhereUniqueInput
    create: XOR<epoch_snapshotsCreateWithoutUser_snapshotsInput, epoch_snapshotsUncheckedCreateWithoutUser_snapshotsInput>
  }

  export type usersCreateWithoutUser_snapshotsInput = {
    id?: string
    created_at?: Date | string
    privy_id?: string | null
    deposits?: depositsCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_snapshotsInput = {
    id?: string
    created_at?: Date | string
    privy_id?: string | null
    deposits?: depositsUncheckedCreateNestedManyWithoutUsersInput
    withdrawals?: withdrawalsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_snapshotsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_snapshotsInput, usersUncheckedCreateWithoutUser_snapshotsInput>
  }

  export type epoch_snapshotsUpsertWithoutUser_snapshotsInput = {
    update: XOR<epoch_snapshotsUpdateWithoutUser_snapshotsInput, epoch_snapshotsUncheckedUpdateWithoutUser_snapshotsInput>
    create: XOR<epoch_snapshotsCreateWithoutUser_snapshotsInput, epoch_snapshotsUncheckedCreateWithoutUser_snapshotsInput>
    where?: epoch_snapshotsWhereInput
  }

  export type epoch_snapshotsUpdateToOneWithWhereWithoutUser_snapshotsInput = {
    where?: epoch_snapshotsWhereInput
    data: XOR<epoch_snapshotsUpdateWithoutUser_snapshotsInput, epoch_snapshotsUncheckedUpdateWithoutUser_snapshotsInput>
  }

  export type epoch_snapshotsUpdateWithoutUser_snapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    epoch?: IntFieldUpdateOperationsInput | number
    snapshot_time?: DateTimeFieldUpdateOperationsInput | Date | string
    lst_strategy?: lst_strategyUpdateOneWithoutEpoch_snapshotsNestedInput
  }

  export type epoch_snapshotsUncheckedUpdateWithoutUser_snapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    epoch?: IntFieldUpdateOperationsInput | number
    snapshot_time?: DateTimeFieldUpdateOperationsInput | Date | string
    lst_strategy?: lst_strategyUncheckedUpdateOneWithoutEpoch_snapshotsNestedInput
  }

  export type usersUpsertWithoutUser_snapshotsInput = {
    update: XOR<usersUpdateWithoutUser_snapshotsInput, usersUncheckedUpdateWithoutUser_snapshotsInput>
    create: XOR<usersCreateWithoutUser_snapshotsInput, usersUncheckedCreateWithoutUser_snapshotsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_snapshotsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_snapshotsInput, usersUncheckedUpdateWithoutUser_snapshotsInput>
  }

  export type usersUpdateWithoutUser_snapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    privy_id?: NullableStringFieldUpdateOperationsInput | string | null
    deposits?: depositsUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_snapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    privy_id?: NullableStringFieldUpdateOperationsInput | string | null
    deposits?: depositsUncheckedUpdateManyWithoutUsersNestedInput
    withdrawals?: withdrawalsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type depositsCreateWithoutUsersInput = {
    id?: string
    amount_sol: Decimal | DecimalJsLike | number | string
    type: string
    source_chain: string
    tx_hash: string
    deposited_at?: Date | string
  }

  export type depositsUncheckedCreateWithoutUsersInput = {
    id?: string
    amount_sol: Decimal | DecimalJsLike | number | string
    type: string
    source_chain: string
    tx_hash: string
    deposited_at?: Date | string
  }

  export type depositsCreateOrConnectWithoutUsersInput = {
    where: depositsWhereUniqueInput
    create: XOR<depositsCreateWithoutUsersInput, depositsUncheckedCreateWithoutUsersInput>
  }

  export type depositsCreateManyUsersInputEnvelope = {
    data: depositsCreateManyUsersInput | depositsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_snapshotsCreateWithoutUsersInput = {
    id?: string
    current_position: string
    sol_value: Decimal | DecimalJsLike | number | string
    epoch_snapshots: epoch_snapshotsCreateNestedOneWithoutUser_snapshotsInput
  }

  export type user_snapshotsUncheckedCreateWithoutUsersInput = {
    id?: string
    epoch_snapshot_id: string
    current_position: string
    sol_value: Decimal | DecimalJsLike | number | string
  }

  export type user_snapshotsCreateOrConnectWithoutUsersInput = {
    where: user_snapshotsWhereUniqueInput
    create: XOR<user_snapshotsCreateWithoutUsersInput, user_snapshotsUncheckedCreateWithoutUsersInput>
  }

  export type user_snapshotsCreateManyUsersInputEnvelope = {
    data: user_snapshotsCreateManyUsersInput | user_snapshotsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type withdrawalsCreateWithoutUsersInput = {
    id?: string
    amount_sol: Decimal | DecimalJsLike | number | string
    type: string
    destination_chain: string
    tx_hash?: string | null
    withdrawn_at?: Date | string
  }

  export type withdrawalsUncheckedCreateWithoutUsersInput = {
    id?: string
    amount_sol: Decimal | DecimalJsLike | number | string
    type: string
    destination_chain: string
    tx_hash?: string | null
    withdrawn_at?: Date | string
  }

  export type withdrawalsCreateOrConnectWithoutUsersInput = {
    where: withdrawalsWhereUniqueInput
    create: XOR<withdrawalsCreateWithoutUsersInput, withdrawalsUncheckedCreateWithoutUsersInput>
  }

  export type withdrawalsCreateManyUsersInputEnvelope = {
    data: withdrawalsCreateManyUsersInput | withdrawalsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type depositsUpsertWithWhereUniqueWithoutUsersInput = {
    where: depositsWhereUniqueInput
    update: XOR<depositsUpdateWithoutUsersInput, depositsUncheckedUpdateWithoutUsersInput>
    create: XOR<depositsCreateWithoutUsersInput, depositsUncheckedCreateWithoutUsersInput>
  }

  export type depositsUpdateWithWhereUniqueWithoutUsersInput = {
    where: depositsWhereUniqueInput
    data: XOR<depositsUpdateWithoutUsersInput, depositsUncheckedUpdateWithoutUsersInput>
  }

  export type depositsUpdateManyWithWhereWithoutUsersInput = {
    where: depositsScalarWhereInput
    data: XOR<depositsUpdateManyMutationInput, depositsUncheckedUpdateManyWithoutUsersInput>
  }

  export type depositsScalarWhereInput = {
    AND?: depositsScalarWhereInput | depositsScalarWhereInput[]
    OR?: depositsScalarWhereInput[]
    NOT?: depositsScalarWhereInput | depositsScalarWhereInput[]
    id?: UuidFilter<"deposits"> | string
    user_id?: UuidFilter<"deposits"> | string
    amount_sol?: DecimalFilter<"deposits"> | Decimal | DecimalJsLike | number | string
    type?: StringFilter<"deposits"> | string
    source_chain?: StringFilter<"deposits"> | string
    tx_hash?: StringFilter<"deposits"> | string
    deposited_at?: DateTimeFilter<"deposits"> | Date | string
  }

  export type user_snapshotsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_snapshotsWhereUniqueInput
    update: XOR<user_snapshotsUpdateWithoutUsersInput, user_snapshotsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_snapshotsCreateWithoutUsersInput, user_snapshotsUncheckedCreateWithoutUsersInput>
  }

  export type user_snapshotsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_snapshotsWhereUniqueInput
    data: XOR<user_snapshotsUpdateWithoutUsersInput, user_snapshotsUncheckedUpdateWithoutUsersInput>
  }

  export type user_snapshotsUpdateManyWithWhereWithoutUsersInput = {
    where: user_snapshotsScalarWhereInput
    data: XOR<user_snapshotsUpdateManyMutationInput, user_snapshotsUncheckedUpdateManyWithoutUsersInput>
  }

  export type withdrawalsUpsertWithWhereUniqueWithoutUsersInput = {
    where: withdrawalsWhereUniqueInput
    update: XOR<withdrawalsUpdateWithoutUsersInput, withdrawalsUncheckedUpdateWithoutUsersInput>
    create: XOR<withdrawalsCreateWithoutUsersInput, withdrawalsUncheckedCreateWithoutUsersInput>
  }

  export type withdrawalsUpdateWithWhereUniqueWithoutUsersInput = {
    where: withdrawalsWhereUniqueInput
    data: XOR<withdrawalsUpdateWithoutUsersInput, withdrawalsUncheckedUpdateWithoutUsersInput>
  }

  export type withdrawalsUpdateManyWithWhereWithoutUsersInput = {
    where: withdrawalsScalarWhereInput
    data: XOR<withdrawalsUpdateManyMutationInput, withdrawalsUncheckedUpdateManyWithoutUsersInput>
  }

  export type withdrawalsScalarWhereInput = {
    AND?: withdrawalsScalarWhereInput | withdrawalsScalarWhereInput[]
    OR?: withdrawalsScalarWhereInput[]
    NOT?: withdrawalsScalarWhereInput | withdrawalsScalarWhereInput[]
    id?: UuidFilter<"withdrawals"> | string
    user_id?: UuidFilter<"withdrawals"> | string
    amount_sol?: DecimalFilter<"withdrawals"> | Decimal | DecimalJsLike | number | string
    type?: StringFilter<"withdrawals"> | string
    destination_chain?: StringFilter<"withdrawals"> | string
    tx_hash?: StringNullableFilter<"withdrawals"> | string | null
    withdrawn_at?: DateTimeFilter<"withdrawals"> | Date | string
  }

  export type usersCreateWithoutWithdrawalsInput = {
    id?: string
    created_at?: Date | string
    privy_id?: string | null
    deposits?: depositsCreateNestedManyWithoutUsersInput
    user_snapshots?: user_snapshotsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWithdrawalsInput = {
    id?: string
    created_at?: Date | string
    privy_id?: string | null
    deposits?: depositsUncheckedCreateNestedManyWithoutUsersInput
    user_snapshots?: user_snapshotsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWithdrawalsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWithdrawalsInput, usersUncheckedCreateWithoutWithdrawalsInput>
  }

  export type usersUpsertWithoutWithdrawalsInput = {
    update: XOR<usersUpdateWithoutWithdrawalsInput, usersUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<usersCreateWithoutWithdrawalsInput, usersUncheckedCreateWithoutWithdrawalsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWithdrawalsInput, usersUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type usersUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    privy_id?: NullableStringFieldUpdateOperationsInput | string | null
    deposits?: depositsUpdateManyWithoutUsersNestedInput
    user_snapshots?: user_snapshotsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    privy_id?: NullableStringFieldUpdateOperationsInput | string | null
    deposits?: depositsUncheckedUpdateManyWithoutUsersNestedInput
    user_snapshots?: user_snapshotsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type user_snapshotsCreateManyEpoch_snapshotsInput = {
    id?: string
    user_id: string
    current_position: string
    sol_value: Decimal | DecimalJsLike | number | string
  }

  export type user_snapshotsUpdateWithoutEpoch_snapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    current_position?: StringFieldUpdateOperationsInput | string
    sol_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    users?: usersUpdateOneRequiredWithoutUser_snapshotsNestedInput
  }

  export type user_snapshotsUncheckedUpdateWithoutEpoch_snapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    current_position?: StringFieldUpdateOperationsInput | string
    sol_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type user_snapshotsUncheckedUpdateManyWithoutEpoch_snapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    current_position?: StringFieldUpdateOperationsInput | string
    sol_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type depositsCreateManyUsersInput = {
    id?: string
    amount_sol: Decimal | DecimalJsLike | number | string
    type: string
    source_chain: string
    tx_hash: string
    deposited_at?: Date | string
  }

  export type user_snapshotsCreateManyUsersInput = {
    id?: string
    epoch_snapshot_id: string
    current_position: string
    sol_value: Decimal | DecimalJsLike | number | string
  }

  export type withdrawalsCreateManyUsersInput = {
    id?: string
    amount_sol: Decimal | DecimalJsLike | number | string
    type: string
    destination_chain: string
    tx_hash?: string | null
    withdrawn_at?: Date | string
  }

  export type depositsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_sol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    source_chain?: StringFieldUpdateOperationsInput | string
    tx_hash?: StringFieldUpdateOperationsInput | string
    deposited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type depositsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_sol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    source_chain?: StringFieldUpdateOperationsInput | string
    tx_hash?: StringFieldUpdateOperationsInput | string
    deposited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type depositsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_sol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    source_chain?: StringFieldUpdateOperationsInput | string
    tx_hash?: StringFieldUpdateOperationsInput | string
    deposited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_snapshotsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    current_position?: StringFieldUpdateOperationsInput | string
    sol_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    epoch_snapshots?: epoch_snapshotsUpdateOneRequiredWithoutUser_snapshotsNestedInput
  }

  export type user_snapshotsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    epoch_snapshot_id?: StringFieldUpdateOperationsInput | string
    current_position?: StringFieldUpdateOperationsInput | string
    sol_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type user_snapshotsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    epoch_snapshot_id?: StringFieldUpdateOperationsInput | string
    current_position?: StringFieldUpdateOperationsInput | string
    sol_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type withdrawalsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_sol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    destination_chain?: StringFieldUpdateOperationsInput | string
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawn_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type withdrawalsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_sol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    destination_chain?: StringFieldUpdateOperationsInput | string
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawn_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type withdrawalsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount_sol?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    destination_chain?: StringFieldUpdateOperationsInput | string
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    withdrawn_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}