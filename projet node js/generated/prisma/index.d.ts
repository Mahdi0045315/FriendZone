
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
 * Model comment
 * 
 */
export type comment = $Result.DefaultSelection<Prisma.$commentPayload>
/**
 * Model follow
 * 
 */
export type follow = $Result.DefaultSelection<Prisma.$followPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model like
 * 
 */
export type like = $Result.DefaultSelection<Prisma.$likePayload>
/**
 * Model post
 * 
 */
export type post = $Result.DefaultSelection<Prisma.$postPayload>
/**
 * Model media
 * 
 */
export type media = $Result.DefaultSelection<Prisma.$mediaPayload>
/**
 * Model conversation
 * 
 */
export type conversation = $Result.DefaultSelection<Prisma.$conversationPayload>
/**
 * Model message
 * 
 */
export type message = $Result.DefaultSelection<Prisma.$messagePayload>
/**
 * Model notification
 * 
 */
export type notification = $Result.DefaultSelection<Prisma.$notificationPayload>
/**
 * Model share
 * 
 */
export type share = $Result.DefaultSelection<Prisma.$sharePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Comments
 * const comments = await prisma.comment.findMany()
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
   * // Fetch zero or more Comments
   * const comments = await prisma.comment.findMany()
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
   * `prisma.comment`: Exposes CRUD operations for the **comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.commentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follow`: Exposes CRUD operations for the **follow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follow.findMany()
    * ```
    */
  get follow(): Prisma.followDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.likeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.postDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.mediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.conversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.messageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.notificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.share`: Exposes CRUD operations for the **share** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shares
    * const shares = await prisma.share.findMany()
    * ```
    */
  get share(): Prisma.shareDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    comment: 'comment',
    follow: 'follow',
    user: 'user',
    like: 'like',
    post: 'post',
    media: 'media',
    conversation: 'conversation',
    message: 'message',
    notification: 'notification',
    share: 'share'
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
      modelProps: "comment" | "follow" | "user" | "like" | "post" | "media" | "conversation" | "message" | "notification" | "share"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      comment: {
        payload: Prisma.$commentPayload<ExtArgs>
        fields: Prisma.commentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          findFirst: {
            args: Prisma.commentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          findMany: {
            args: Prisma.commentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>[]
          }
          create: {
            args: Prisma.commentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          createMany: {
            args: Prisma.commentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.commentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          update: {
            args: Prisma.commentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          deleteMany: {
            args: Prisma.commentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.commentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.commentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      follow: {
        payload: Prisma.$followPayload<ExtArgs>
        fields: Prisma.followFieldRefs
        operations: {
          findUnique: {
            args: Prisma.followFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.followFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>
          }
          findFirst: {
            args: Prisma.followFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.followFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>
          }
          findMany: {
            args: Prisma.followFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>[]
          }
          create: {
            args: Prisma.followCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>
          }
          createMany: {
            args: Prisma.followCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.followDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>
          }
          update: {
            args: Prisma.followUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>
          }
          deleteMany: {
            args: Prisma.followDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.followUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.followUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followPayload>
          }
          aggregate: {
            args: Prisma.FollowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollow>
          }
          groupBy: {
            args: Prisma.followGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowGroupByOutputType>[]
          }
          count: {
            args: Prisma.followCountArgs<ExtArgs>
            result: $Utils.Optional<FollowCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      like: {
        payload: Prisma.$likePayload<ExtArgs>
        fields: Prisma.likeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.likeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.likeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          findFirst: {
            args: Prisma.likeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.likeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          findMany: {
            args: Prisma.likeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>[]
          }
          create: {
            args: Prisma.likeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          createMany: {
            args: Prisma.likeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.likeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          update: {
            args: Prisma.likeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          deleteMany: {
            args: Prisma.likeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.likeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.likeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.likeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.likeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      post: {
        payload: Prisma.$postPayload<ExtArgs>
        fields: Prisma.postFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          findFirst: {
            args: Prisma.postFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          findMany: {
            args: Prisma.postFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>[]
          }
          create: {
            args: Prisma.postCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          createMany: {
            args: Prisma.postCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.postDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          update: {
            args: Prisma.postUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          deleteMany: {
            args: Prisma.postDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.postUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.postGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.postCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      media: {
        payload: Prisma.$mediaPayload<ExtArgs>
        fields: Prisma.mediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          findFirst: {
            args: Prisma.mediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          findMany: {
            args: Prisma.mediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>[]
          }
          create: {
            args: Prisma.mediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          createMany: {
            args: Prisma.mediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          update: {
            args: Prisma.mediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          deleteMany: {
            args: Prisma.mediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.mediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.mediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      conversation: {
        payload: Prisma.$conversationPayload<ExtArgs>
        fields: Prisma.conversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.conversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.conversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationPayload>
          }
          findFirst: {
            args: Prisma.conversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.conversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationPayload>
          }
          findMany: {
            args: Prisma.conversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationPayload>[]
          }
          create: {
            args: Prisma.conversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationPayload>
          }
          createMany: {
            args: Prisma.conversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.conversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationPayload>
          }
          update: {
            args: Prisma.conversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationPayload>
          }
          deleteMany: {
            args: Prisma.conversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.conversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.conversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.conversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.conversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      message: {
        payload: Prisma.$messagePayload<ExtArgs>
        fields: Prisma.messageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          findFirst: {
            args: Prisma.messageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          findMany: {
            args: Prisma.messageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>[]
          }
          create: {
            args: Prisma.messageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          createMany: {
            args: Prisma.messageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.messageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          update: {
            args: Prisma.messageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          deleteMany: {
            args: Prisma.messageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.messageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.messageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.messageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      notification: {
        payload: Prisma.$notificationPayload<ExtArgs>
        fields: Prisma.notificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findFirst: {
            args: Prisma.notificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findMany: {
            args: Prisma.notificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          create: {
            args: Prisma.notificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          createMany: {
            args: Prisma.notificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.notificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          update: {
            args: Prisma.notificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          deleteMany: {
            args: Prisma.notificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.notificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.notificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      share: {
        payload: Prisma.$sharePayload<ExtArgs>
        fields: Prisma.shareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharePayload>
          }
          findFirst: {
            args: Prisma.shareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharePayload>
          }
          findMany: {
            args: Prisma.shareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharePayload>[]
          }
          create: {
            args: Prisma.shareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharePayload>
          }
          createMany: {
            args: Prisma.shareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.shareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharePayload>
          }
          update: {
            args: Prisma.shareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharePayload>
          }
          deleteMany: {
            args: Prisma.shareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.shareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharePayload>
          }
          aggregate: {
            args: Prisma.ShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShare>
          }
          groupBy: {
            args: Prisma.shareGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.shareCountArgs<ExtArgs>
            result: $Utils.Optional<ShareCountAggregateOutputType> | number
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
    comment?: commentOmit
    follow?: followOmit
    user?: userOmit
    like?: likeOmit
    post?: postOmit
    media?: mediaOmit
    conversation?: conversationOmit
    message?: messageOmit
    notification?: notificationOmit
    share?: shareOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    comment: number
    follow_follow_followerIdTouser: number
    follow_follow_followingIdTouser: number
    like: number
    message_message_recipientIdTouser: number
    message_message_senderIdTouser: number
    notification_notification_recipientIdTouser: number
    notification_notification_senderIdTouser: number
    post_post_userIdTouser: number
    share: number
    post_savedposts: number
    conversationAsUser1: number
    conversationAsUser2: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | UserCountOutputTypeCountCommentArgs
    follow_follow_followerIdTouser?: boolean | UserCountOutputTypeCountFollow_follow_followerIdTouserArgs
    follow_follow_followingIdTouser?: boolean | UserCountOutputTypeCountFollow_follow_followingIdTouserArgs
    like?: boolean | UserCountOutputTypeCountLikeArgs
    message_message_recipientIdTouser?: boolean | UserCountOutputTypeCountMessage_message_recipientIdTouserArgs
    message_message_senderIdTouser?: boolean | UserCountOutputTypeCountMessage_message_senderIdTouserArgs
    notification_notification_recipientIdTouser?: boolean | UserCountOutputTypeCountNotification_notification_recipientIdTouserArgs
    notification_notification_senderIdTouser?: boolean | UserCountOutputTypeCountNotification_notification_senderIdTouserArgs
    post_post_userIdTouser?: boolean | UserCountOutputTypeCountPost_post_userIdTouserArgs
    share?: boolean | UserCountOutputTypeCountShareArgs
    post_savedposts?: boolean | UserCountOutputTypeCountPost_savedpostsArgs
    conversationAsUser1?: boolean | UserCountOutputTypeCountConversationAsUser1Args
    conversationAsUser2?: boolean | UserCountOutputTypeCountConversationAsUser2Args
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollow_follow_followerIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollow_follow_followingIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessage_message_recipientIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessage_message_senderIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotification_notification_recipientIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotification_notification_senderIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPost_post_userIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shareWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPost_savedpostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversationAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversationAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    comment: number
    like: number
    media_media_postIdTopost: number
    notification: number
    share: number
    media_postvideos: number
    user_savedposts: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | PostCountOutputTypeCountCommentArgs
    like?: boolean | PostCountOutputTypeCountLikeArgs
    media_media_postIdTopost?: boolean | PostCountOutputTypeCountMedia_media_postIdTopostArgs
    notification?: boolean | PostCountOutputTypeCountNotificationArgs
    share?: boolean | PostCountOutputTypeCountShareArgs
    media_postvideos?: boolean | PostCountOutputTypeCountMedia_postvideosArgs
    user_savedposts?: boolean | PostCountOutputTypeCountUser_savedpostsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likeWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountMedia_media_postIdTopostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountShareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shareWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountMedia_postvideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountUser_savedpostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Count Type MediaCountOutputType
   */

  export type MediaCountOutputType = {
    post_postvideos: number
  }

  export type MediaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_postvideos?: boolean | MediaCountOutputTypeCountPost_postvideosArgs
  }

  // Custom InputTypes
  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaCountOutputType
     */
    select?: MediaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountPost_postvideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    userId: number | null
    postId: number | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    userId: number | null
    postId: number | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    userId: number
    postId: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment to aggregate.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type commentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
    orderBy?: commentOrderByWithAggregationInput | commentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: commentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    content: string
    createdAt: Date
    userId: number
    postId: number
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends commentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type commentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    post?: boolean | postDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type commentSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type commentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "userId" | "postId", ExtArgs["result"]["comment"]>
  export type commentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $commentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comment"
    objects: {
      post: Prisma.$postPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      createdAt: Date
      userId: number
      postId: number
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type commentGetPayload<S extends boolean | null | undefined | commentDefaultArgs> = $Result.GetResult<Prisma.$commentPayload, S>

  type commentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface commentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comment'], meta: { name: 'comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {commentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentFindUniqueArgs>(args: SelectSubset<T, commentFindUniqueArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentFindUniqueOrThrowArgs>(args: SelectSubset<T, commentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentFindFirstArgs>(args?: SelectSubset<T, commentFindFirstArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentFindFirstOrThrowArgs>(args?: SelectSubset<T, commentFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentFindManyArgs>(args?: SelectSubset<T, commentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {commentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends commentCreateArgs>(args: SelectSubset<T, commentCreateArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentCreateManyArgs>(args?: SelectSubset<T, commentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {commentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends commentDeleteArgs>(args: SelectSubset<T, commentDeleteArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {commentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentUpdateArgs>(args: SelectSubset<T, commentUpdateArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentDeleteManyArgs>(args?: SelectSubset<T, commentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentUpdateManyArgs>(args: SelectSubset<T, commentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {commentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends commentUpsertArgs>(args: SelectSubset<T, commentUpsertArgs<ExtArgs>>): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentCountArgs>(
      args?: Subset<T, commentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentGroupByArgs} args - Group by arguments.
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
      T extends commentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentGroupByArgs['orderBy'] }
        : { orderBy?: commentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, commentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comment model
   */
  readonly fields: commentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends postDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postDefaultArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the comment model
   */
  interface commentFieldRefs {
    readonly id: FieldRef<"comment", 'Int'>
    readonly content: FieldRef<"comment", 'String'>
    readonly createdAt: FieldRef<"comment", 'DateTime'>
    readonly userId: FieldRef<"comment", 'Int'>
    readonly postId: FieldRef<"comment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * comment findUnique
   */
  export type commentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment findUniqueOrThrow
   */
  export type commentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment findFirst
   */
  export type commentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment findFirstOrThrow
   */
  export type commentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment findMany
   */
  export type commentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment create
   */
  export type commentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The data needed to create a comment.
     */
    data: XOR<commentCreateInput, commentUncheckedCreateInput>
  }

  /**
   * comment createMany
   */
  export type commentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentCreateManyInput | commentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comment update
   */
  export type commentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The data needed to update a comment.
     */
    data: XOR<commentUpdateInput, commentUncheckedUpdateInput>
    /**
     * Choose, which comment to update.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment updateMany
   */
  export type commentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comment upsert
   */
  export type commentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The filter to search for the comment to update in case it exists.
     */
    where: commentWhereUniqueInput
    /**
     * In case the comment found by the `where` argument doesn't exist, create a new comment with this data.
     */
    create: XOR<commentCreateInput, commentUncheckedCreateInput>
    /**
     * In case the comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentUpdateInput, commentUncheckedUpdateInput>
  }

  /**
   * comment delete
   */
  export type commentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter which comment to delete.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment deleteMany
   */
  export type commentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comment without action
   */
  export type commentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
  }


  /**
   * Model follow
   */

  export type AggregateFollow = {
    _count: FollowCountAggregateOutputType | null
    _avg: FollowAvgAggregateOutputType | null
    _sum: FollowSumAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  export type FollowAvgAggregateOutputType = {
    id: number | null
    followerId: number | null
    followingId: number | null
  }

  export type FollowSumAggregateOutputType = {
    id: number | null
    followerId: number | null
    followingId: number | null
  }

  export type FollowMinAggregateOutputType = {
    id: number | null
    followerId: number | null
    followingId: number | null
    createdAt: Date | null
  }

  export type FollowMaxAggregateOutputType = {
    id: number | null
    followerId: number | null
    followingId: number | null
    createdAt: Date | null
  }

  export type FollowCountAggregateOutputType = {
    id: number
    followerId: number
    followingId: number
    createdAt: number
    _all: number
  }


  export type FollowAvgAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
  }

  export type FollowSumAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
  }

  export type FollowMinAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
    createdAt?: true
  }

  export type FollowMaxAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
    createdAt?: true
  }

  export type FollowCountAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
    createdAt?: true
    _all?: true
  }

  export type FollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which follow to aggregate.
     */
    where?: followWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followOrderByWithRelationInput | followOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: followWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned follows
    **/
    _count?: true | FollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowMaxAggregateInputType
  }

  export type GetFollowAggregateType<T extends FollowAggregateArgs> = {
        [P in keyof T & keyof AggregateFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow[P]>
      : GetScalarType<T[P], AggregateFollow[P]>
  }




  export type followGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followWhereInput
    orderBy?: followOrderByWithAggregationInput | followOrderByWithAggregationInput[]
    by: FollowScalarFieldEnum[] | FollowScalarFieldEnum
    having?: followScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowCountAggregateInputType | true
    _avg?: FollowAvgAggregateInputType
    _sum?: FollowSumAggregateInputType
    _min?: FollowMinAggregateInputType
    _max?: FollowMaxAggregateInputType
  }

  export type FollowGroupByOutputType = {
    id: number
    followerId: number
    followingId: number
    createdAt: Date
    _count: FollowCountAggregateOutputType | null
    _avg: FollowAvgAggregateOutputType | null
    _sum: FollowSumAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  type GetFollowGroupByPayload<T extends followGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowGroupByOutputType[P]>
            : GetScalarType<T[P], FollowGroupByOutputType[P]>
        }
      >
    >


  export type followSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
    user_follow_followerIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_follow_followingIdTouser?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>



  export type followSelectScalar = {
    id?: boolean
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
  }

  export type followOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "followerId" | "followingId" | "createdAt", ExtArgs["result"]["follow"]>
  export type followInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_follow_followerIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_follow_followingIdTouser?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $followPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "follow"
    objects: {
      user_follow_followerIdTouser: Prisma.$userPayload<ExtArgs>
      user_follow_followingIdTouser: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      followerId: number
      followingId: number
      createdAt: Date
    }, ExtArgs["result"]["follow"]>
    composites: {}
  }

  type followGetPayload<S extends boolean | null | undefined | followDefaultArgs> = $Result.GetResult<Prisma.$followPayload, S>

  type followCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<followFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowCountAggregateInputType | true
    }

  export interface followDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['follow'], meta: { name: 'follow' } }
    /**
     * Find zero or one Follow that matches the filter.
     * @param {followFindUniqueArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends followFindUniqueArgs>(args: SelectSubset<T, followFindUniqueArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {followFindUniqueOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends followFindUniqueOrThrowArgs>(args: SelectSubset<T, followFindUniqueOrThrowArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followFindFirstArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends followFindFirstArgs>(args?: SelectSubset<T, followFindFirstArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followFindFirstOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends followFindFirstOrThrowArgs>(args?: SelectSubset<T, followFindFirstOrThrowArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follow.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followWithIdOnly = await prisma.follow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends followFindManyArgs>(args?: SelectSubset<T, followFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follow.
     * @param {followCreateArgs} args - Arguments to create a Follow.
     * @example
     * // Create one Follow
     * const Follow = await prisma.follow.create({
     *   data: {
     *     // ... data to create a Follow
     *   }
     * })
     * 
     */
    create<T extends followCreateArgs>(args: SelectSubset<T, followCreateArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Follows.
     * @param {followCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends followCreateManyArgs>(args?: SelectSubset<T, followCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Follow.
     * @param {followDeleteArgs} args - Arguments to delete one Follow.
     * @example
     * // Delete one Follow
     * const Follow = await prisma.follow.delete({
     *   where: {
     *     // ... filter to delete one Follow
     *   }
     * })
     * 
     */
    delete<T extends followDeleteArgs>(args: SelectSubset<T, followDeleteArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follow.
     * @param {followUpdateArgs} args - Arguments to update one Follow.
     * @example
     * // Update one Follow
     * const follow = await prisma.follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends followUpdateArgs>(args: SelectSubset<T, followUpdateArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Follows.
     * @param {followDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends followDeleteManyArgs>(args?: SelectSubset<T, followDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends followUpdateManyArgs>(args: SelectSubset<T, followUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Follow.
     * @param {followUpsertArgs} args - Arguments to update or create a Follow.
     * @example
     * // Update or create a Follow
     * const follow = await prisma.follow.upsert({
     *   create: {
     *     // ... data to create a Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow we want to update
     *   }
     * })
     */
    upsert<T extends followUpsertArgs>(args: SelectSubset<T, followUpsertArgs<ExtArgs>>): Prisma__followClient<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follow.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends followCountArgs>(
      args?: Subset<T, followCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowAggregateArgs>(args: Subset<T, FollowAggregateArgs>): Prisma.PrismaPromise<GetFollowAggregateType<T>>

    /**
     * Group by Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followGroupByArgs} args - Group by arguments.
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
      T extends followGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: followGroupByArgs['orderBy'] }
        : { orderBy?: followGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, followGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the follow model
   */
  readonly fields: followFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__followClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_follow_followerIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_follow_followingIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the follow model
   */
  interface followFieldRefs {
    readonly id: FieldRef<"follow", 'Int'>
    readonly followerId: FieldRef<"follow", 'Int'>
    readonly followingId: FieldRef<"follow", 'Int'>
    readonly createdAt: FieldRef<"follow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * follow findUnique
   */
  export type followFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * Filter, which follow to fetch.
     */
    where: followWhereUniqueInput
  }

  /**
   * follow findUniqueOrThrow
   */
  export type followFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * Filter, which follow to fetch.
     */
    where: followWhereUniqueInput
  }

  /**
   * follow findFirst
   */
  export type followFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * Filter, which follow to fetch.
     */
    where?: followWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followOrderByWithRelationInput | followOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for follows.
     */
    cursor?: followWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * follow findFirstOrThrow
   */
  export type followFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * Filter, which follow to fetch.
     */
    where?: followWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followOrderByWithRelationInput | followOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for follows.
     */
    cursor?: followWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * follow findMany
   */
  export type followFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * Filter, which follows to fetch.
     */
    where?: followWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followOrderByWithRelationInput | followOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing follows.
     */
    cursor?: followWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * follow create
   */
  export type followCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * The data needed to create a follow.
     */
    data: XOR<followCreateInput, followUncheckedCreateInput>
  }

  /**
   * follow createMany
   */
  export type followCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many follows.
     */
    data: followCreateManyInput | followCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * follow update
   */
  export type followUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * The data needed to update a follow.
     */
    data: XOR<followUpdateInput, followUncheckedUpdateInput>
    /**
     * Choose, which follow to update.
     */
    where: followWhereUniqueInput
  }

  /**
   * follow updateMany
   */
  export type followUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update follows.
     */
    data: XOR<followUpdateManyMutationInput, followUncheckedUpdateManyInput>
    /**
     * Filter which follows to update
     */
    where?: followWhereInput
    /**
     * Limit how many follows to update.
     */
    limit?: number
  }

  /**
   * follow upsert
   */
  export type followUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * The filter to search for the follow to update in case it exists.
     */
    where: followWhereUniqueInput
    /**
     * In case the follow found by the `where` argument doesn't exist, create a new follow with this data.
     */
    create: XOR<followCreateInput, followUncheckedCreateInput>
    /**
     * In case the follow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<followUpdateInput, followUncheckedUpdateInput>
  }

  /**
   * follow delete
   */
  export type followDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    /**
     * Filter which follow to delete.
     */
    where: followWhereUniqueInput
  }

  /**
   * follow deleteMany
   */
  export type followDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which follows to delete
     */
    where?: followWhereInput
    /**
     * Limit how many follows to delete.
     */
    limit?: number
  }

  /**
   * follow without action
   */
  export type followDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    profilePic: string | null
    coverPic: string | null
    bio: string | null
    isAdmin: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    profilePic: string | null
    coverPic: string | null
    bio: string | null
    isAdmin: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    profilePic: number
    coverPic: number
    bio: number
    isAdmin: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    profilePic?: true
    coverPic?: true
    bio?: true
    isAdmin?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    profilePic?: true
    coverPic?: true
    bio?: true
    isAdmin?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    profilePic?: true
    coverPic?: true
    bio?: true
    isAdmin?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    profilePic: string | null
    coverPic: string | null
    bio: string | null
    isAdmin: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    profilePic?: boolean
    coverPic?: boolean
    bio?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    comment?: boolean | user$commentArgs<ExtArgs>
    follow_follow_followerIdTouser?: boolean | user$follow_follow_followerIdTouserArgs<ExtArgs>
    follow_follow_followingIdTouser?: boolean | user$follow_follow_followingIdTouserArgs<ExtArgs>
    like?: boolean | user$likeArgs<ExtArgs>
    message_message_recipientIdTouser?: boolean | user$message_message_recipientIdTouserArgs<ExtArgs>
    message_message_senderIdTouser?: boolean | user$message_message_senderIdTouserArgs<ExtArgs>
    notification_notification_recipientIdTouser?: boolean | user$notification_notification_recipientIdTouserArgs<ExtArgs>
    notification_notification_senderIdTouser?: boolean | user$notification_notification_senderIdTouserArgs<ExtArgs>
    post_post_userIdTouser?: boolean | user$post_post_userIdTouserArgs<ExtArgs>
    share?: boolean | user$shareArgs<ExtArgs>
    post_savedposts?: boolean | user$post_savedpostsArgs<ExtArgs>
    conversationAsUser1?: boolean | user$conversationAsUser1Args<ExtArgs>
    conversationAsUser2?: boolean | user$conversationAsUser2Args<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    profilePic?: boolean
    coverPic?: boolean
    bio?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "profilePic" | "coverPic" | "bio" | "isAdmin" | "createdAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | user$commentArgs<ExtArgs>
    follow_follow_followerIdTouser?: boolean | user$follow_follow_followerIdTouserArgs<ExtArgs>
    follow_follow_followingIdTouser?: boolean | user$follow_follow_followingIdTouserArgs<ExtArgs>
    like?: boolean | user$likeArgs<ExtArgs>
    message_message_recipientIdTouser?: boolean | user$message_message_recipientIdTouserArgs<ExtArgs>
    message_message_senderIdTouser?: boolean | user$message_message_senderIdTouserArgs<ExtArgs>
    notification_notification_recipientIdTouser?: boolean | user$notification_notification_recipientIdTouserArgs<ExtArgs>
    notification_notification_senderIdTouser?: boolean | user$notification_notification_senderIdTouserArgs<ExtArgs>
    post_post_userIdTouser?: boolean | user$post_post_userIdTouserArgs<ExtArgs>
    share?: boolean | user$shareArgs<ExtArgs>
    post_savedposts?: boolean | user$post_savedpostsArgs<ExtArgs>
    conversationAsUser1?: boolean | user$conversationAsUser1Args<ExtArgs>
    conversationAsUser2?: boolean | user$conversationAsUser2Args<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      comment: Prisma.$commentPayload<ExtArgs>[]
      follow_follow_followerIdTouser: Prisma.$followPayload<ExtArgs>[]
      follow_follow_followingIdTouser: Prisma.$followPayload<ExtArgs>[]
      like: Prisma.$likePayload<ExtArgs>[]
      message_message_recipientIdTouser: Prisma.$messagePayload<ExtArgs>[]
      message_message_senderIdTouser: Prisma.$messagePayload<ExtArgs>[]
      notification_notification_recipientIdTouser: Prisma.$notificationPayload<ExtArgs>[]
      notification_notification_senderIdTouser: Prisma.$notificationPayload<ExtArgs>[]
      post_post_userIdTouser: Prisma.$postPayload<ExtArgs>[]
      share: Prisma.$sharePayload<ExtArgs>[]
      post_savedposts: Prisma.$postPayload<ExtArgs>[]
      conversationAsUser1: Prisma.$conversationPayload<ExtArgs>[]
      conversationAsUser2: Prisma.$conversationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      profilePic: string | null
      coverPic: string | null
      bio: string | null
      isAdmin: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comment<T extends user$commentArgs<ExtArgs> = {}>(args?: Subset<T, user$commentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    follow_follow_followerIdTouser<T extends user$follow_follow_followerIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$follow_follow_followerIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    follow_follow_followingIdTouser<T extends user$follow_follow_followingIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$follow_follow_followingIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    like<T extends user$likeArgs<ExtArgs> = {}>(args?: Subset<T, user$likeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    message_message_recipientIdTouser<T extends user$message_message_recipientIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$message_message_recipientIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    message_message_senderIdTouser<T extends user$message_message_senderIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$message_message_senderIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notification_notification_recipientIdTouser<T extends user$notification_notification_recipientIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$notification_notification_recipientIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notification_notification_senderIdTouser<T extends user$notification_notification_senderIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$notification_notification_senderIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    post_post_userIdTouser<T extends user$post_post_userIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$post_post_userIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    share<T extends user$shareArgs<ExtArgs> = {}>(args?: Subset<T, user$shareArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    post_savedposts<T extends user$post_savedpostsArgs<ExtArgs> = {}>(args?: Subset<T, user$post_savedpostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversationAsUser1<T extends user$conversationAsUser1Args<ExtArgs> = {}>(args?: Subset<T, user$conversationAsUser1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversationAsUser2<T extends user$conversationAsUser2Args<ExtArgs> = {}>(args?: Subset<T, user$conversationAsUser2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly profilePic: FieldRef<"user", 'String'>
    readonly coverPic: FieldRef<"user", 'String'>
    readonly bio: FieldRef<"user", 'String'>
    readonly isAdmin: FieldRef<"user", 'Boolean'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.comment
   */
  export type user$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    where?: commentWhereInput
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    cursor?: commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * user.follow_follow_followerIdTouser
   */
  export type user$follow_follow_followerIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    where?: followWhereInput
    orderBy?: followOrderByWithRelationInput | followOrderByWithRelationInput[]
    cursor?: followWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * user.follow_follow_followingIdTouser
   */
  export type user$follow_follow_followingIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follow
     */
    select?: followSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follow
     */
    omit?: followOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followInclude<ExtArgs> | null
    where?: followWhereInput
    orderBy?: followOrderByWithRelationInput | followOrderByWithRelationInput[]
    cursor?: followWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * user.like
   */
  export type user$likeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    where?: likeWhereInput
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    cursor?: likeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * user.message_message_recipientIdTouser
   */
  export type user$message_message_recipientIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * user.message_message_senderIdTouser
   */
  export type user$message_message_senderIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * user.notification_notification_recipientIdTouser
   */
  export type user$notification_notification_recipientIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    cursor?: notificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * user.notification_notification_senderIdTouser
   */
  export type user$notification_notification_senderIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    cursor?: notificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * user.post_post_userIdTouser
   */
  export type user$post_post_userIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    where?: postWhereInput
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    cursor?: postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * user.share
   */
  export type user$shareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null
    where?: shareWhereInput
    orderBy?: shareOrderByWithRelationInput | shareOrderByWithRelationInput[]
    cursor?: shareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * user.post_savedposts
   */
  export type user$post_savedpostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    where?: postWhereInput
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    cursor?: postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * user.conversationAsUser1
   */
  export type user$conversationAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation
     */
    select?: conversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation
     */
    omit?: conversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationInclude<ExtArgs> | null
    where?: conversationWhereInput
    orderBy?: conversationOrderByWithRelationInput | conversationOrderByWithRelationInput[]
    cursor?: conversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * user.conversationAsUser2
   */
  export type user$conversationAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation
     */
    select?: conversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation
     */
    omit?: conversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationInclude<ExtArgs> | null
    where?: conversationWhereInput
    orderBy?: conversationOrderByWithRelationInput | conversationOrderByWithRelationInput[]
    cursor?: conversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type LikeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type LikeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
    postId: number | null
  }

  export type LikeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
    postId: number | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    postId: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type LikeSumAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type LikeMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which like to aggregate.
     */
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type likeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likeWhereInput
    orderBy?: likeOrderByWithAggregationInput | likeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: likeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: number
    createdAt: Date
    userId: number
    postId: number
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends likeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type likeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    post?: boolean | postDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>



  export type likeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type likeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "postId", ExtArgs["result"]["like"]>
  export type likeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $likePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "like"
    objects: {
      post: Prisma.$postPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      userId: number
      postId: number
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type likeGetPayload<S extends boolean | null | undefined | likeDefaultArgs> = $Result.GetResult<Prisma.$likePayload, S>

  type likeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<likeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface likeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['like'], meta: { name: 'like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {likeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends likeFindUniqueArgs>(args: SelectSubset<T, likeFindUniqueArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {likeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends likeFindUniqueOrThrowArgs>(args: SelectSubset<T, likeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends likeFindFirstArgs>(args?: SelectSubset<T, likeFindFirstArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends likeFindFirstOrThrowArgs>(args?: SelectSubset<T, likeFindFirstOrThrowArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends likeFindManyArgs>(args?: SelectSubset<T, likeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {likeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends likeCreateArgs>(args: SelectSubset<T, likeCreateArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {likeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends likeCreateManyArgs>(args?: SelectSubset<T, likeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Like.
     * @param {likeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends likeDeleteArgs>(args: SelectSubset<T, likeDeleteArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {likeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends likeUpdateArgs>(args: SelectSubset<T, likeUpdateArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {likeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends likeDeleteManyArgs>(args?: SelectSubset<T, likeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends likeUpdateManyArgs>(args: SelectSubset<T, likeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Like.
     * @param {likeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends likeUpsertArgs>(args: SelectSubset<T, likeUpsertArgs<ExtArgs>>): Prisma__likeClient<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends likeCountArgs>(
      args?: Subset<T, likeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeGroupByArgs} args - Group by arguments.
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
      T extends likeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: likeGroupByArgs['orderBy'] }
        : { orderBy?: likeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, likeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the like model
   */
  readonly fields: likeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__likeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends postDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postDefaultArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the like model
   */
  interface likeFieldRefs {
    readonly id: FieldRef<"like", 'Int'>
    readonly createdAt: FieldRef<"like", 'DateTime'>
    readonly userId: FieldRef<"like", 'Int'>
    readonly postId: FieldRef<"like", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * like findUnique
   */
  export type likeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter, which like to fetch.
     */
    where: likeWhereUniqueInput
  }

  /**
   * like findUniqueOrThrow
   */
  export type likeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter, which like to fetch.
     */
    where: likeWhereUniqueInput
  }

  /**
   * like findFirst
   */
  export type likeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter, which like to fetch.
     */
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * like findFirstOrThrow
   */
  export type likeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter, which like to fetch.
     */
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * like findMany
   */
  export type likeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing likes.
     */
    cursor?: likeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * like create
   */
  export type likeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * The data needed to create a like.
     */
    data: XOR<likeCreateInput, likeUncheckedCreateInput>
  }

  /**
   * like createMany
   */
  export type likeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many likes.
     */
    data: likeCreateManyInput | likeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * like update
   */
  export type likeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * The data needed to update a like.
     */
    data: XOR<likeUpdateInput, likeUncheckedUpdateInput>
    /**
     * Choose, which like to update.
     */
    where: likeWhereUniqueInput
  }

  /**
   * like updateMany
   */
  export type likeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update likes.
     */
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likeWhereInput
    /**
     * Limit how many likes to update.
     */
    limit?: number
  }

  /**
   * like upsert
   */
  export type likeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * The filter to search for the like to update in case it exists.
     */
    where: likeWhereUniqueInput
    /**
     * In case the like found by the `where` argument doesn't exist, create a new like with this data.
     */
    create: XOR<likeCreateInput, likeUncheckedCreateInput>
    /**
     * In case the like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<likeUpdateInput, likeUncheckedUpdateInput>
  }

  /**
   * like delete
   */
  export type likeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    /**
     * Filter which like to delete.
     */
    where: likeWhereUniqueInput
  }

  /**
   * like deleteMany
   */
  export type likeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to delete
     */
    where?: likeWhereInput
    /**
     * Limit how many likes to delete.
     */
    limit?: number
  }

  /**
   * like without action
   */
  export type likeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
  }


  /**
   * Model post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    userId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    userId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    userId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post to aggregate.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type postGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postWhereInput
    orderBy?: postOrderByWithAggregationInput | postOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: postScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    content: string
    createdAt: Date
    userId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends postGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type postSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    comment?: boolean | post$commentArgs<ExtArgs>
    like?: boolean | post$likeArgs<ExtArgs>
    media_media_postIdTopost?: boolean | post$media_media_postIdTopostArgs<ExtArgs>
    notification?: boolean | post$notificationArgs<ExtArgs>
    user_post_userIdTouser?: boolean | userDefaultArgs<ExtArgs>
    share?: boolean | post$shareArgs<ExtArgs>
    media_postvideos?: boolean | post$media_postvideosArgs<ExtArgs>
    user_savedposts?: boolean | post$user_savedpostsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type postSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type postOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "userId", ExtArgs["result"]["post"]>
  export type postInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | post$commentArgs<ExtArgs>
    like?: boolean | post$likeArgs<ExtArgs>
    media_media_postIdTopost?: boolean | post$media_media_postIdTopostArgs<ExtArgs>
    notification?: boolean | post$notificationArgs<ExtArgs>
    user_post_userIdTouser?: boolean | userDefaultArgs<ExtArgs>
    share?: boolean | post$shareArgs<ExtArgs>
    media_postvideos?: boolean | post$media_postvideosArgs<ExtArgs>
    user_savedposts?: boolean | post$user_savedpostsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $postPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "post"
    objects: {
      comment: Prisma.$commentPayload<ExtArgs>[]
      like: Prisma.$likePayload<ExtArgs>[]
      media_media_postIdTopost: Prisma.$mediaPayload<ExtArgs>[]
      notification: Prisma.$notificationPayload<ExtArgs>[]
      user_post_userIdTouser: Prisma.$userPayload<ExtArgs>
      share: Prisma.$sharePayload<ExtArgs>[]
      media_postvideos: Prisma.$mediaPayload<ExtArgs>[]
      user_savedposts: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type postGetPayload<S extends boolean | null | undefined | postDefaultArgs> = $Result.GetResult<Prisma.$postPayload, S>

  type postCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface postDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['post'], meta: { name: 'post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {postFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postFindUniqueArgs>(args: SelectSubset<T, postFindUniqueArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postFindUniqueOrThrowArgs>(args: SelectSubset<T, postFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postFindFirstArgs>(args?: SelectSubset<T, postFindFirstArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postFindFirstOrThrowArgs>(args?: SelectSubset<T, postFindFirstOrThrowArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends postFindManyArgs>(args?: SelectSubset<T, postFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {postCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends postCreateArgs>(args: SelectSubset<T, postCreateArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {postCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postCreateManyArgs>(args?: SelectSubset<T, postCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {postDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends postDeleteArgs>(args: SelectSubset<T, postDeleteArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {postUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postUpdateArgs>(args: SelectSubset<T, postUpdateArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {postDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postDeleteManyArgs>(args?: SelectSubset<T, postDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postUpdateManyArgs>(args: SelectSubset<T, postUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {postUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends postUpsertArgs>(args: SelectSubset<T, postUpsertArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postCountArgs>(
      args?: Subset<T, postCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postGroupByArgs} args - Group by arguments.
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
      T extends postGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postGroupByArgs['orderBy'] }
        : { orderBy?: postGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, postGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the post model
   */
  readonly fields: postFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comment<T extends post$commentArgs<ExtArgs> = {}>(args?: Subset<T, post$commentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    like<T extends post$likeArgs<ExtArgs> = {}>(args?: Subset<T, post$likeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media_media_postIdTopost<T extends post$media_media_postIdTopostArgs<ExtArgs> = {}>(args?: Subset<T, post$media_media_postIdTopostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notification<T extends post$notificationArgs<ExtArgs> = {}>(args?: Subset<T, post$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_post_userIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    share<T extends post$shareArgs<ExtArgs> = {}>(args?: Subset<T, post$shareArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media_postvideos<T extends post$media_postvideosArgs<ExtArgs> = {}>(args?: Subset<T, post$media_postvideosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_savedposts<T extends post$user_savedpostsArgs<ExtArgs> = {}>(args?: Subset<T, post$user_savedpostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the post model
   */
  interface postFieldRefs {
    readonly id: FieldRef<"post", 'Int'>
    readonly content: FieldRef<"post", 'String'>
    readonly createdAt: FieldRef<"post", 'DateTime'>
    readonly userId: FieldRef<"post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * post findUnique
   */
  export type postFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where: postWhereUniqueInput
  }

  /**
   * post findUniqueOrThrow
   */
  export type postFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where: postWhereUniqueInput
  }

  /**
   * post findFirst
   */
  export type postFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * post findFirstOrThrow
   */
  export type postFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * post findMany
   */
  export type postFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * post create
   */
  export type postCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * The data needed to create a post.
     */
    data: XOR<postCreateInput, postUncheckedCreateInput>
  }

  /**
   * post createMany
   */
  export type postCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postCreateManyInput | postCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * post update
   */
  export type postUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * The data needed to update a post.
     */
    data: XOR<postUpdateInput, postUncheckedUpdateInput>
    /**
     * Choose, which post to update.
     */
    where: postWhereUniqueInput
  }

  /**
   * post updateMany
   */
  export type postUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
  }

  /**
   * post upsert
   */
  export type postUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * The filter to search for the post to update in case it exists.
     */
    where: postWhereUniqueInput
    /**
     * In case the post found by the `where` argument doesn't exist, create a new post with this data.
     */
    create: XOR<postCreateInput, postUncheckedCreateInput>
    /**
     * In case the post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postUpdateInput, postUncheckedUpdateInput>
  }

  /**
   * post delete
   */
  export type postDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter which post to delete.
     */
    where: postWhereUniqueInput
  }

  /**
   * post deleteMany
   */
  export type postDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postWhereInput
    /**
     * Limit how many posts to delete.
     */
    limit?: number
  }

  /**
   * post.comment
   */
  export type post$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment
     */
    omit?: commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    where?: commentWhereInput
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    cursor?: commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * post.like
   */
  export type post$likeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null
    where?: likeWhereInput
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[]
    cursor?: likeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * post.media_media_postIdTopost
   */
  export type post$media_media_postIdTopostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    where?: mediaWhereInput
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    cursor?: mediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * post.notification
   */
  export type post$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    cursor?: notificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * post.share
   */
  export type post$shareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null
    where?: shareWhereInput
    orderBy?: shareOrderByWithRelationInput | shareOrderByWithRelationInput[]
    cursor?: shareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * post.media_postvideos
   */
  export type post$media_postvideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    where?: mediaWhereInput
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    cursor?: mediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * post.user_savedposts
   */
  export type post$user_savedpostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * post without action
   */
  export type postDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
  }


  /**
   * Model media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type MediaSumAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: number | null
    url: string | null
    type: string | null
    createdAt: Date | null
    postId: number | null
  }

  export type MediaMaxAggregateOutputType = {
    id: number | null
    url: string | null
    type: string | null
    createdAt: Date | null
    postId: number | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    url: number
    type: number
    createdAt: number
    postId: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    id?: true
    postId?: true
  }

  export type MediaSumAggregateInputType = {
    id?: true
    postId?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    url?: true
    type?: true
    createdAt?: true
    postId?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    url?: true
    type?: true
    createdAt?: true
    postId?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    url?: true
    type?: true
    createdAt?: true
    postId?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media to aggregate.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type mediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaWhereInput
    orderBy?: mediaOrderByWithAggregationInput | mediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: mediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: number
    url: string
    type: string
    createdAt: Date
    postId: number
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends mediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type mediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    postId?: boolean
    post_media_postIdTopost?: boolean | postDefaultArgs<ExtArgs>
    post_postvideos?: boolean | media$post_postvideosArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>



  export type mediaSelectScalar = {
    id?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    postId?: boolean
  }

  export type mediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "type" | "createdAt" | "postId", ExtArgs["result"]["media"]>
  export type mediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_media_postIdTopost?: boolean | postDefaultArgs<ExtArgs>
    post_postvideos?: boolean | media$post_postvideosArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $mediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "media"
    objects: {
      post_media_postIdTopost: Prisma.$postPayload<ExtArgs>
      post_postvideos: Prisma.$postPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      type: string
      createdAt: Date
      postId: number
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type mediaGetPayload<S extends boolean | null | undefined | mediaDefaultArgs> = $Result.GetResult<Prisma.$mediaPayload, S>

  type mediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface mediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['media'], meta: { name: 'media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {mediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mediaFindUniqueArgs>(args: SelectSubset<T, mediaFindUniqueArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mediaFindUniqueOrThrowArgs>(args: SelectSubset<T, mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mediaFindFirstArgs>(args?: SelectSubset<T, mediaFindFirstArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mediaFindFirstOrThrowArgs>(args?: SelectSubset<T, mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mediaFindManyArgs>(args?: SelectSubset<T, mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {mediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends mediaCreateArgs>(args: SelectSubset<T, mediaCreateArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {mediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mediaCreateManyArgs>(args?: SelectSubset<T, mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Media.
     * @param {mediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends mediaDeleteArgs>(args: SelectSubset<T, mediaDeleteArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {mediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mediaUpdateArgs>(args: SelectSubset<T, mediaUpdateArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {mediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mediaDeleteManyArgs>(args?: SelectSubset<T, mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mediaUpdateManyArgs>(args: SelectSubset<T, mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Media.
     * @param {mediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends mediaUpsertArgs>(args: SelectSubset<T, mediaUpsertArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends mediaCountArgs>(
      args?: Subset<T, mediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaGroupByArgs} args - Group by arguments.
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
      T extends mediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mediaGroupByArgs['orderBy'] }
        : { orderBy?: mediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the media model
   */
  readonly fields: mediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post_media_postIdTopost<T extends postDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postDefaultArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post_postvideos<T extends media$post_postvideosArgs<ExtArgs> = {}>(args?: Subset<T, media$post_postvideosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the media model
   */
  interface mediaFieldRefs {
    readonly id: FieldRef<"media", 'Int'>
    readonly url: FieldRef<"media", 'String'>
    readonly type: FieldRef<"media", 'String'>
    readonly createdAt: FieldRef<"media", 'DateTime'>
    readonly postId: FieldRef<"media", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * media findUnique
   */
  export type mediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media findUniqueOrThrow
   */
  export type mediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media findFirst
   */
  export type mediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media findFirstOrThrow
   */
  export type mediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media findMany
   */
  export type mediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media create
   */
  export type mediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * The data needed to create a media.
     */
    data: XOR<mediaCreateInput, mediaUncheckedCreateInput>
  }

  /**
   * media createMany
   */
  export type mediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many media.
     */
    data: mediaCreateManyInput | mediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * media update
   */
  export type mediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * The data needed to update a media.
     */
    data: XOR<mediaUpdateInput, mediaUncheckedUpdateInput>
    /**
     * Choose, which media to update.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media updateMany
   */
  export type mediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update media.
     */
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyInput>
    /**
     * Filter which media to update
     */
    where?: mediaWhereInput
    /**
     * Limit how many media to update.
     */
    limit?: number
  }

  /**
   * media upsert
   */
  export type mediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * The filter to search for the media to update in case it exists.
     */
    where: mediaWhereUniqueInput
    /**
     * In case the media found by the `where` argument doesn't exist, create a new media with this data.
     */
    create: XOR<mediaCreateInput, mediaUncheckedCreateInput>
    /**
     * In case the media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mediaUpdateInput, mediaUncheckedUpdateInput>
  }

  /**
   * media delete
   */
  export type mediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter which media to delete.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media deleteMany
   */
  export type mediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media to delete
     */
    where?: mediaWhereInput
    /**
     * Limit how many media to delete.
     */
    limit?: number
  }

  /**
   * media.post_postvideos
   */
  export type media$post_postvideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    where?: postWhereInput
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    cursor?: postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * media without action
   */
  export type mediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
  }


  /**
   * Model conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationAvgAggregateOutputType = {
    id: number | null
    user1Id: number | null
    user2Id: number | null
  }

  export type ConversationSumAggregateOutputType = {
    id: number | null
    user1Id: number | null
    user2Id: number | null
  }

  export type ConversationMinAggregateOutputType = {
    id: number | null
    user1Id: number | null
    user2Id: number | null
    createdAt: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: number | null
    user1Id: number | null
    user2Id: number | null
    createdAt: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    user1Id: number
    user2Id: number
    createdAt: number
    _all: number
  }


  export type ConversationAvgAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
  }

  export type ConversationSumAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
  }

  export type ConversationMinAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    createdAt?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    createdAt?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    createdAt?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversation to aggregate.
     */
    where?: conversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationOrderByWithRelationInput | conversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: conversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type conversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationWhereInput
    orderBy?: conversationOrderByWithAggregationInput | conversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: conversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _avg?: ConversationAvgAggregateInputType
    _sum?: ConversationSumAggregateInputType
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: number
    user1Id: number
    user2Id: number
    createdAt: Date
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends conversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type conversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    createdAt?: boolean
    user1?: boolean | userDefaultArgs<ExtArgs>
    user2?: boolean | userDefaultArgs<ExtArgs>
    messages?: boolean | conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>



  export type conversationSelectScalar = {
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    createdAt?: boolean
  }

  export type conversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user1Id" | "user2Id" | "createdAt", ExtArgs["result"]["conversation"]>
  export type conversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | userDefaultArgs<ExtArgs>
    user2?: boolean | userDefaultArgs<ExtArgs>
    messages?: boolean | conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $conversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "conversation"
    objects: {
      user1: Prisma.$userPayload<ExtArgs>
      user2: Prisma.$userPayload<ExtArgs>
      messages: Prisma.$messagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user1Id: number
      user2Id: number
      createdAt: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type conversationGetPayload<S extends boolean | null | undefined | conversationDefaultArgs> = $Result.GetResult<Prisma.$conversationPayload, S>

  type conversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<conversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface conversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conversation'], meta: { name: 'conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {conversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends conversationFindUniqueArgs>(args: SelectSubset<T, conversationFindUniqueArgs<ExtArgs>>): Prisma__conversationClient<$Result.GetResult<Prisma.$conversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {conversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends conversationFindUniqueOrThrowArgs>(args: SelectSubset<T, conversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__conversationClient<$Result.GetResult<Prisma.$conversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends conversationFindFirstArgs>(args?: SelectSubset<T, conversationFindFirstArgs<ExtArgs>>): Prisma__conversationClient<$Result.GetResult<Prisma.$conversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends conversationFindFirstOrThrowArgs>(args?: SelectSubset<T, conversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__conversationClient<$Result.GetResult<Prisma.$conversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends conversationFindManyArgs>(args?: SelectSubset<T, conversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {conversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends conversationCreateArgs>(args: SelectSubset<T, conversationCreateArgs<ExtArgs>>): Prisma__conversationClient<$Result.GetResult<Prisma.$conversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {conversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends conversationCreateManyArgs>(args?: SelectSubset<T, conversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversation.
     * @param {conversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends conversationDeleteArgs>(args: SelectSubset<T, conversationDeleteArgs<ExtArgs>>): Prisma__conversationClient<$Result.GetResult<Prisma.$conversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {conversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends conversationUpdateArgs>(args: SelectSubset<T, conversationUpdateArgs<ExtArgs>>): Prisma__conversationClient<$Result.GetResult<Prisma.$conversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {conversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends conversationDeleteManyArgs>(args?: SelectSubset<T, conversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends conversationUpdateManyArgs>(args: SelectSubset<T, conversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversation.
     * @param {conversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends conversationUpsertArgs>(args: SelectSubset<T, conversationUpsertArgs<ExtArgs>>): Prisma__conversationClient<$Result.GetResult<Prisma.$conversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends conversationCountArgs>(
      args?: Subset<T, conversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationGroupByArgs} args - Group by arguments.
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
      T extends conversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conversationGroupByArgs['orderBy'] }
        : { orderBy?: conversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, conversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the conversation model
   */
  readonly fields: conversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the conversation model
   */
  interface conversationFieldRefs {
    readonly id: FieldRef<"conversation", 'Int'>
    readonly user1Id: FieldRef<"conversation", 'Int'>
    readonly user2Id: FieldRef<"conversation", 'Int'>
    readonly createdAt: FieldRef<"conversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * conversation findUnique
   */
  export type conversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation
     */
    select?: conversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation
     */
    omit?: conversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationInclude<ExtArgs> | null
    /**
     * Filter, which conversation to fetch.
     */
    where: conversationWhereUniqueInput
  }

  /**
   * conversation findUniqueOrThrow
   */
  export type conversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation
     */
    select?: conversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation
     */
    omit?: conversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationInclude<ExtArgs> | null
    /**
     * Filter, which conversation to fetch.
     */
    where: conversationWhereUniqueInput
  }

  /**
   * conversation findFirst
   */
  export type conversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation
     */
    select?: conversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation
     */
    omit?: conversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationInclude<ExtArgs> | null
    /**
     * Filter, which conversation to fetch.
     */
    where?: conversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationOrderByWithRelationInput | conversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * conversation findFirstOrThrow
   */
  export type conversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation
     */
    select?: conversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation
     */
    omit?: conversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationInclude<ExtArgs> | null
    /**
     * Filter, which conversation to fetch.
     */
    where?: conversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationOrderByWithRelationInput | conversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * conversation findMany
   */
  export type conversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation
     */
    select?: conversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation
     */
    omit?: conversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationOrderByWithRelationInput | conversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing conversations.
     */
    cursor?: conversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * conversation create
   */
  export type conversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation
     */
    select?: conversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation
     */
    omit?: conversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationInclude<ExtArgs> | null
    /**
     * The data needed to create a conversation.
     */
    data: XOR<conversationCreateInput, conversationUncheckedCreateInput>
  }

  /**
   * conversation createMany
   */
  export type conversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conversations.
     */
    data: conversationCreateManyInput | conversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conversation update
   */
  export type conversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation
     */
    select?: conversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation
     */
    omit?: conversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationInclude<ExtArgs> | null
    /**
     * The data needed to update a conversation.
     */
    data: XOR<conversationUpdateInput, conversationUncheckedUpdateInput>
    /**
     * Choose, which conversation to update.
     */
    where: conversationWhereUniqueInput
  }

  /**
   * conversation updateMany
   */
  export type conversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conversations.
     */
    data: XOR<conversationUpdateManyMutationInput, conversationUncheckedUpdateManyInput>
    /**
     * Filter which conversations to update
     */
    where?: conversationWhereInput
    /**
     * Limit how many conversations to update.
     */
    limit?: number
  }

  /**
   * conversation upsert
   */
  export type conversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation
     */
    select?: conversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation
     */
    omit?: conversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationInclude<ExtArgs> | null
    /**
     * The filter to search for the conversation to update in case it exists.
     */
    where: conversationWhereUniqueInput
    /**
     * In case the conversation found by the `where` argument doesn't exist, create a new conversation with this data.
     */
    create: XOR<conversationCreateInput, conversationUncheckedCreateInput>
    /**
     * In case the conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conversationUpdateInput, conversationUncheckedUpdateInput>
  }

  /**
   * conversation delete
   */
  export type conversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation
     */
    select?: conversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation
     */
    omit?: conversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationInclude<ExtArgs> | null
    /**
     * Filter which conversation to delete.
     */
    where: conversationWhereUniqueInput
  }

  /**
   * conversation deleteMany
   */
  export type conversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to delete
     */
    where?: conversationWhereInput
    /**
     * Limit how many conversations to delete.
     */
    limit?: number
  }

  /**
   * conversation.messages
   */
  export type conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * conversation without action
   */
  export type conversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation
     */
    select?: conversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation
     */
    omit?: conversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationInclude<ExtArgs> | null
  }


  /**
   * Model message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    recipientId: number | null
    conversationId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    recipientId: number | null
    conversationId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    senderId: number | null
    recipientId: number | null
    conversationId: number | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    senderId: number | null
    recipientId: number | null
    conversationId: number | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    senderId: number
    recipientId: number
    conversationId: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    senderId?: true
    recipientId?: true
    conversationId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    senderId?: true
    recipientId?: true
    conversationId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    senderId?: true
    recipientId?: true
    conversationId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    senderId?: true
    recipientId?: true
    conversationId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    senderId?: true
    recipientId?: true
    conversationId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which message to aggregate.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type messageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
    orderBy?: messageOrderByWithAggregationInput | messageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: messageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    content: string
    createdAt: Date
    senderId: number
    recipientId: number
    conversationId: number
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends messageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type messageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    senderId?: boolean
    recipientId?: boolean
    conversationId?: boolean
    user_message_senderIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_message_recipientIdTouser?: boolean | userDefaultArgs<ExtArgs>
    conversation?: boolean | conversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type messageSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    senderId?: boolean
    recipientId?: boolean
    conversationId?: boolean
  }

  export type messageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "senderId" | "recipientId" | "conversationId", ExtArgs["result"]["message"]>
  export type messageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_message_senderIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_message_recipientIdTouser?: boolean | userDefaultArgs<ExtArgs>
    conversation?: boolean | conversationDefaultArgs<ExtArgs>
  }

  export type $messagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "message"
    objects: {
      user_message_senderIdTouser: Prisma.$userPayload<ExtArgs>
      user_message_recipientIdTouser: Prisma.$userPayload<ExtArgs>
      conversation: Prisma.$conversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      createdAt: Date
      senderId: number
      recipientId: number
      conversationId: number
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type messageGetPayload<S extends boolean | null | undefined | messageDefaultArgs> = $Result.GetResult<Prisma.$messagePayload, S>

  type messageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface messageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['message'], meta: { name: 'message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {messageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messageFindUniqueArgs>(args: SelectSubset<T, messageFindUniqueArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messageFindUniqueOrThrowArgs>(args: SelectSubset<T, messageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messageFindFirstArgs>(args?: SelectSubset<T, messageFindFirstArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messageFindFirstOrThrowArgs>(args?: SelectSubset<T, messageFindFirstOrThrowArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messageFindManyArgs>(args?: SelectSubset<T, messageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {messageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends messageCreateArgs>(args: SelectSubset<T, messageCreateArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messageCreateManyArgs>(args?: SelectSubset<T, messageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {messageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends messageDeleteArgs>(args: SelectSubset<T, messageDeleteArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {messageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messageUpdateArgs>(args: SelectSubset<T, messageUpdateArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messageDeleteManyArgs>(args?: SelectSubset<T, messageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messageUpdateManyArgs>(args: SelectSubset<T, messageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {messageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends messageUpsertArgs>(args: SelectSubset<T, messageUpsertArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messageCountArgs>(
      args?: Subset<T, messageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageGroupByArgs} args - Group by arguments.
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
      T extends messageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messageGroupByArgs['orderBy'] }
        : { orderBy?: messageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, messageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the message model
   */
  readonly fields: messageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_message_senderIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_message_recipientIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversation<T extends conversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, conversationDefaultArgs<ExtArgs>>): Prisma__conversationClient<$Result.GetResult<Prisma.$conversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the message model
   */
  interface messageFieldRefs {
    readonly id: FieldRef<"message", 'Int'>
    readonly content: FieldRef<"message", 'String'>
    readonly createdAt: FieldRef<"message", 'DateTime'>
    readonly senderId: FieldRef<"message", 'Int'>
    readonly recipientId: FieldRef<"message", 'Int'>
    readonly conversationId: FieldRef<"message", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * message findUnique
   */
  export type messageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message findUniqueOrThrow
   */
  export type messageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message findFirst
   */
  export type messageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message findFirstOrThrow
   */
  export type messageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message findMany
   */
  export type messageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message create
   */
  export type messageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The data needed to create a message.
     */
    data: XOR<messageCreateInput, messageUncheckedCreateInput>
  }

  /**
   * message createMany
   */
  export type messageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messageCreateManyInput | messageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * message update
   */
  export type messageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The data needed to update a message.
     */
    data: XOR<messageUpdateInput, messageUncheckedUpdateInput>
    /**
     * Choose, which message to update.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message updateMany
   */
  export type messageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * message upsert
   */
  export type messageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The filter to search for the message to update in case it exists.
     */
    where: messageWhereUniqueInput
    /**
     * In case the message found by the `where` argument doesn't exist, create a new message with this data.
     */
    create: XOR<messageCreateInput, messageUncheckedCreateInput>
    /**
     * In case the message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messageUpdateInput, messageUncheckedUpdateInput>
  }

  /**
   * message delete
   */
  export type messageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter which message to delete.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message deleteMany
   */
  export type messageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * message without action
   */
  export type messageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
  }


  /**
   * Model notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    recipientId: number | null
    senderId: number | null
    postId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    recipientId: number | null
    senderId: number | null
    postId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    type: string | null
    read: boolean | null
    createdAt: Date | null
    recipientId: number | null
    senderId: number | null
    postId: number | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    type: string | null
    read: boolean | null
    createdAt: Date | null
    recipientId: number | null
    senderId: number | null
    postId: number | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    read: number
    createdAt: number
    recipientId: number
    senderId: number
    postId: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    recipientId?: true
    senderId?: true
    postId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    recipientId?: true
    senderId?: true
    postId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    read?: true
    createdAt?: true
    recipientId?: true
    senderId?: true
    postId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    read?: true
    createdAt?: true
    recipientId?: true
    senderId?: true
    postId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    read?: true
    createdAt?: true
    recipientId?: true
    senderId?: true
    postId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notification to aggregate.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type notificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithAggregationInput | notificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: notificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    type: string
    read: boolean
    createdAt: Date
    recipientId: number
    senderId: number
    postId: number | null
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends notificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type notificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    read?: boolean
    createdAt?: boolean
    recipientId?: boolean
    senderId?: boolean
    postId?: boolean
    post?: boolean | notification$postArgs<ExtArgs>
    user_notification_recipientIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_notification_senderIdTouser?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type notificationSelectScalar = {
    id?: boolean
    type?: boolean
    read?: boolean
    createdAt?: boolean
    recipientId?: boolean
    senderId?: boolean
    postId?: boolean
  }

  export type notificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "read" | "createdAt" | "recipientId" | "senderId" | "postId", ExtArgs["result"]["notification"]>
  export type notificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | notification$postArgs<ExtArgs>
    user_notification_recipientIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_notification_senderIdTouser?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $notificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notification"
    objects: {
      post: Prisma.$postPayload<ExtArgs> | null
      user_notification_recipientIdTouser: Prisma.$userPayload<ExtArgs>
      user_notification_senderIdTouser: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      read: boolean
      createdAt: Date
      recipientId: number
      senderId: number
      postId: number | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type notificationGetPayload<S extends boolean | null | undefined | notificationDefaultArgs> = $Result.GetResult<Prisma.$notificationPayload, S>

  type notificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface notificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notification'], meta: { name: 'notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {notificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationFindUniqueArgs>(args: SelectSubset<T, notificationFindUniqueArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationFindFirstArgs>(args?: SelectSubset<T, notificationFindFirstArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationFindManyArgs>(args?: SelectSubset<T, notificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {notificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends notificationCreateArgs>(args: SelectSubset<T, notificationCreateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationCreateManyArgs>(args?: SelectSubset<T, notificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {notificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends notificationDeleteArgs>(args: SelectSubset<T, notificationDeleteArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {notificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationUpdateArgs>(args: SelectSubset<T, notificationUpdateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationDeleteManyArgs>(args?: SelectSubset<T, notificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationUpdateManyArgs>(args: SelectSubset<T, notificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {notificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends notificationUpsertArgs>(args: SelectSubset<T, notificationUpsertArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationCountArgs>(
      args?: Subset<T, notificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationGroupByArgs} args - Group by arguments.
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
      T extends notificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationGroupByArgs['orderBy'] }
        : { orderBy?: notificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notification model
   */
  readonly fields: notificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends notification$postArgs<ExtArgs> = {}>(args?: Subset<T, notification$postArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_notification_recipientIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_notification_senderIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the notification model
   */
  interface notificationFieldRefs {
    readonly id: FieldRef<"notification", 'Int'>
    readonly type: FieldRef<"notification", 'String'>
    readonly read: FieldRef<"notification", 'Boolean'>
    readonly createdAt: FieldRef<"notification", 'DateTime'>
    readonly recipientId: FieldRef<"notification", 'Int'>
    readonly senderId: FieldRef<"notification", 'Int'>
    readonly postId: FieldRef<"notification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * notification findUnique
   */
  export type notificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findUniqueOrThrow
   */
  export type notificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findFirst
   */
  export type notificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findFirstOrThrow
   */
  export type notificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findMany
   */
  export type notificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification create
   */
  export type notificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to create a notification.
     */
    data: XOR<notificationCreateInput, notificationUncheckedCreateInput>
  }

  /**
   * notification createMany
   */
  export type notificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notification update
   */
  export type notificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to update a notification.
     */
    data: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
    /**
     * Choose, which notification to update.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification updateMany
   */
  export type notificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notification upsert
   */
  export type notificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The filter to search for the notification to update in case it exists.
     */
    where: notificationWhereUniqueInput
    /**
     * In case the notification found by the `where` argument doesn't exist, create a new notification with this data.
     */
    create: XOR<notificationCreateInput, notificationUncheckedCreateInput>
    /**
     * In case the notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
  }

  /**
   * notification delete
   */
  export type notificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter which notification to delete.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification deleteMany
   */
  export type notificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notification.post
   */
  export type notification$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    where?: postWhereInput
  }

  /**
   * notification without action
   */
  export type notificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
  }


  /**
   * Model share
   */

  export type AggregateShare = {
    _count: ShareCountAggregateOutputType | null
    _avg: ShareAvgAggregateOutputType | null
    _sum: ShareSumAggregateOutputType | null
    _min: ShareMinAggregateOutputType | null
    _max: ShareMaxAggregateOutputType | null
  }

  export type ShareAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type ShareSumAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type ShareMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
    postId: number | null
  }

  export type ShareMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
    postId: number | null
  }

  export type ShareCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    postId: number
    _all: number
  }


  export type ShareAvgAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type ShareSumAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type ShareMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type ShareMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type ShareCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type ShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which share to aggregate.
     */
    where?: shareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shares to fetch.
     */
    orderBy?: shareOrderByWithRelationInput | shareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shares
    **/
    _count?: true | ShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareMaxAggregateInputType
  }

  export type GetShareAggregateType<T extends ShareAggregateArgs> = {
        [P in keyof T & keyof AggregateShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShare[P]>
      : GetScalarType<T[P], AggregateShare[P]>
  }




  export type shareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shareWhereInput
    orderBy?: shareOrderByWithAggregationInput | shareOrderByWithAggregationInput[]
    by: ShareScalarFieldEnum[] | ShareScalarFieldEnum
    having?: shareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareCountAggregateInputType | true
    _avg?: ShareAvgAggregateInputType
    _sum?: ShareSumAggregateInputType
    _min?: ShareMinAggregateInputType
    _max?: ShareMaxAggregateInputType
  }

  export type ShareGroupByOutputType = {
    id: number
    createdAt: Date
    userId: number
    postId: number
    _count: ShareCountAggregateOutputType | null
    _avg: ShareAvgAggregateOutputType | null
    _sum: ShareSumAggregateOutputType | null
    _min: ShareMinAggregateOutputType | null
    _max: ShareMaxAggregateOutputType | null
  }

  type GetShareGroupByPayload<T extends shareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareGroupByOutputType[P]>
            : GetScalarType<T[P], ShareGroupByOutputType[P]>
        }
      >
    >


  export type shareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    post?: boolean | postDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["share"]>



  export type shareSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type shareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "postId", ExtArgs["result"]["share"]>
  export type shareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $sharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "share"
    objects: {
      post: Prisma.$postPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      userId: number
      postId: number
    }, ExtArgs["result"]["share"]>
    composites: {}
  }

  type shareGetPayload<S extends boolean | null | undefined | shareDefaultArgs> = $Result.GetResult<Prisma.$sharePayload, S>

  type shareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareCountAggregateInputType | true
    }

  export interface shareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['share'], meta: { name: 'share' } }
    /**
     * Find zero or one Share that matches the filter.
     * @param {shareFindUniqueArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shareFindUniqueArgs>(args: SelectSubset<T, shareFindUniqueArgs<ExtArgs>>): Prisma__shareClient<$Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Share that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shareFindUniqueOrThrowArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shareFindUniqueOrThrowArgs>(args: SelectSubset<T, shareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shareClient<$Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Share that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shareFindFirstArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shareFindFirstArgs>(args?: SelectSubset<T, shareFindFirstArgs<ExtArgs>>): Prisma__shareClient<$Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Share that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shareFindFirstOrThrowArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shareFindFirstOrThrowArgs>(args?: SelectSubset<T, shareFindFirstOrThrowArgs<ExtArgs>>): Prisma__shareClient<$Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shares
     * const shares = await prisma.share.findMany()
     * 
     * // Get first 10 Shares
     * const shares = await prisma.share.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareWithIdOnly = await prisma.share.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends shareFindManyArgs>(args?: SelectSubset<T, shareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Share.
     * @param {shareCreateArgs} args - Arguments to create a Share.
     * @example
     * // Create one Share
     * const Share = await prisma.share.create({
     *   data: {
     *     // ... data to create a Share
     *   }
     * })
     * 
     */
    create<T extends shareCreateArgs>(args: SelectSubset<T, shareCreateArgs<ExtArgs>>): Prisma__shareClient<$Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shares.
     * @param {shareCreateManyArgs} args - Arguments to create many Shares.
     * @example
     * // Create many Shares
     * const share = await prisma.share.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shareCreateManyArgs>(args?: SelectSubset<T, shareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Share.
     * @param {shareDeleteArgs} args - Arguments to delete one Share.
     * @example
     * // Delete one Share
     * const Share = await prisma.share.delete({
     *   where: {
     *     // ... filter to delete one Share
     *   }
     * })
     * 
     */
    delete<T extends shareDeleteArgs>(args: SelectSubset<T, shareDeleteArgs<ExtArgs>>): Prisma__shareClient<$Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Share.
     * @param {shareUpdateArgs} args - Arguments to update one Share.
     * @example
     * // Update one Share
     * const share = await prisma.share.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shareUpdateArgs>(args: SelectSubset<T, shareUpdateArgs<ExtArgs>>): Prisma__shareClient<$Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shares.
     * @param {shareDeleteManyArgs} args - Arguments to filter Shares to delete.
     * @example
     * // Delete a few Shares
     * const { count } = await prisma.share.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shareDeleteManyArgs>(args?: SelectSubset<T, shareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shares
     * const share = await prisma.share.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shareUpdateManyArgs>(args: SelectSubset<T, shareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Share.
     * @param {shareUpsertArgs} args - Arguments to update or create a Share.
     * @example
     * // Update or create a Share
     * const share = await prisma.share.upsert({
     *   create: {
     *     // ... data to create a Share
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Share we want to update
     *   }
     * })
     */
    upsert<T extends shareUpsertArgs>(args: SelectSubset<T, shareUpsertArgs<ExtArgs>>): Prisma__shareClient<$Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shareCountArgs} args - Arguments to filter Shares to count.
     * @example
     * // Count the number of Shares
     * const count = await prisma.share.count({
     *   where: {
     *     // ... the filter for the Shares we want to count
     *   }
     * })
    **/
    count<T extends shareCountArgs>(
      args?: Subset<T, shareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Share.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShareAggregateArgs>(args: Subset<T, ShareAggregateArgs>): Prisma.PrismaPromise<GetShareAggregateType<T>>

    /**
     * Group by Share.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shareGroupByArgs} args - Group by arguments.
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
      T extends shareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shareGroupByArgs['orderBy'] }
        : { orderBy?: shareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, shareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the share model
   */
  readonly fields: shareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for share.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends postDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postDefaultArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the share model
   */
  interface shareFieldRefs {
    readonly id: FieldRef<"share", 'Int'>
    readonly createdAt: FieldRef<"share", 'DateTime'>
    readonly userId: FieldRef<"share", 'Int'>
    readonly postId: FieldRef<"share", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * share findUnique
   */
  export type shareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null
    /**
     * Filter, which share to fetch.
     */
    where: shareWhereUniqueInput
  }

  /**
   * share findUniqueOrThrow
   */
  export type shareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null
    /**
     * Filter, which share to fetch.
     */
    where: shareWhereUniqueInput
  }

  /**
   * share findFirst
   */
  export type shareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null
    /**
     * Filter, which share to fetch.
     */
    where?: shareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shares to fetch.
     */
    orderBy?: shareOrderByWithRelationInput | shareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shares.
     */
    cursor?: shareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shares.
     */
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * share findFirstOrThrow
   */
  export type shareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null
    /**
     * Filter, which share to fetch.
     */
    where?: shareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shares to fetch.
     */
    orderBy?: shareOrderByWithRelationInput | shareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shares.
     */
    cursor?: shareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shares.
     */
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * share findMany
   */
  export type shareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null
    /**
     * Filter, which shares to fetch.
     */
    where?: shareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shares to fetch.
     */
    orderBy?: shareOrderByWithRelationInput | shareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shares.
     */
    cursor?: shareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shares.
     */
    skip?: number
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * share create
   */
  export type shareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null
    /**
     * The data needed to create a share.
     */
    data: XOR<shareCreateInput, shareUncheckedCreateInput>
  }

  /**
   * share createMany
   */
  export type shareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shares.
     */
    data: shareCreateManyInput | shareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * share update
   */
  export type shareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null
    /**
     * The data needed to update a share.
     */
    data: XOR<shareUpdateInput, shareUncheckedUpdateInput>
    /**
     * Choose, which share to update.
     */
    where: shareWhereUniqueInput
  }

  /**
   * share updateMany
   */
  export type shareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shares.
     */
    data: XOR<shareUpdateManyMutationInput, shareUncheckedUpdateManyInput>
    /**
     * Filter which shares to update
     */
    where?: shareWhereInput
    /**
     * Limit how many shares to update.
     */
    limit?: number
  }

  /**
   * share upsert
   */
  export type shareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null
    /**
     * The filter to search for the share to update in case it exists.
     */
    where: shareWhereUniqueInput
    /**
     * In case the share found by the `where` argument doesn't exist, create a new share with this data.
     */
    create: XOR<shareCreateInput, shareUncheckedCreateInput>
    /**
     * In case the share was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shareUpdateInput, shareUncheckedUpdateInput>
  }

  /**
   * share delete
   */
  export type shareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null
    /**
     * Filter which share to delete.
     */
    where: shareWhereUniqueInput
  }

  /**
   * share deleteMany
   */
  export type shareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shares to delete
     */
    where?: shareWhereInput
    /**
     * Limit how many shares to delete.
     */
    limit?: number
  }

  /**
   * share without action
   */
  export type shareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null
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


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    userId: 'userId',
    postId: 'postId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const FollowScalarFieldEnum: {
    id: 'id',
    followerId: 'followerId',
    followingId: 'followingId',
    createdAt: 'createdAt'
  };

  export type FollowScalarFieldEnum = (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    profilePic: 'profilePic',
    coverPic: 'coverPic',
    bio: 'bio',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    postId: 'postId'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    createdAt: 'createdAt',
    postId: 'postId'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    user1Id: 'user1Id',
    user2Id: 'user2Id',
    createdAt: 'createdAt'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    senderId: 'senderId',
    recipientId: 'recipientId',
    conversationId: 'conversationId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    read: 'read',
    createdAt: 'createdAt',
    recipientId: 'recipientId',
    senderId: 'senderId',
    postId: 'postId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ShareScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    postId: 'postId'
  };

  export type ShareScalarFieldEnum = (typeof ShareScalarFieldEnum)[keyof typeof ShareScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const commentOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type commentOrderByRelevanceFieldEnum = (typeof commentOrderByRelevanceFieldEnum)[keyof typeof commentOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const userOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password: 'password',
    profilePic: 'profilePic',
    coverPic: 'coverPic',
    bio: 'bio'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const postOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type postOrderByRelevanceFieldEnum = (typeof postOrderByRelevanceFieldEnum)[keyof typeof postOrderByRelevanceFieldEnum]


  export const mediaOrderByRelevanceFieldEnum: {
    url: 'url',
    type: 'type'
  };

  export type mediaOrderByRelevanceFieldEnum = (typeof mediaOrderByRelevanceFieldEnum)[keyof typeof mediaOrderByRelevanceFieldEnum]


  export const messageOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type messageOrderByRelevanceFieldEnum = (typeof messageOrderByRelevanceFieldEnum)[keyof typeof messageOrderByRelevanceFieldEnum]


  export const notificationOrderByRelevanceFieldEnum: {
    type: 'type'
  };

  export type notificationOrderByRelevanceFieldEnum = (typeof notificationOrderByRelevanceFieldEnum)[keyof typeof notificationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type commentWhereInput = {
    AND?: commentWhereInput | commentWhereInput[]
    OR?: commentWhereInput[]
    NOT?: commentWhereInput | commentWhereInput[]
    id?: IntFilter<"comment"> | number
    content?: StringFilter<"comment"> | string
    createdAt?: DateTimeFilter<"comment"> | Date | string
    userId?: IntFilter<"comment"> | number
    postId?: IntFilter<"comment"> | number
    post?: XOR<PostScalarRelationFilter, postWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type commentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    post?: postOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    _relevance?: commentOrderByRelevanceInput
  }

  export type commentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentWhereInput | commentWhereInput[]
    OR?: commentWhereInput[]
    NOT?: commentWhereInput | commentWhereInput[]
    content?: StringFilter<"comment"> | string
    createdAt?: DateTimeFilter<"comment"> | Date | string
    userId?: IntFilter<"comment"> | number
    postId?: IntFilter<"comment"> | number
    post?: XOR<PostScalarRelationFilter, postWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type commentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: commentCountOrderByAggregateInput
    _avg?: commentAvgOrderByAggregateInput
    _max?: commentMaxOrderByAggregateInput
    _min?: commentMinOrderByAggregateInput
    _sum?: commentSumOrderByAggregateInput
  }

  export type commentScalarWhereWithAggregatesInput = {
    AND?: commentScalarWhereWithAggregatesInput | commentScalarWhereWithAggregatesInput[]
    OR?: commentScalarWhereWithAggregatesInput[]
    NOT?: commentScalarWhereWithAggregatesInput | commentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comment"> | number
    content?: StringWithAggregatesFilter<"comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"comment"> | Date | string
    userId?: IntWithAggregatesFilter<"comment"> | number
    postId?: IntWithAggregatesFilter<"comment"> | number
  }

  export type followWhereInput = {
    AND?: followWhereInput | followWhereInput[]
    OR?: followWhereInput[]
    NOT?: followWhereInput | followWhereInput[]
    id?: IntFilter<"follow"> | number
    followerId?: IntFilter<"follow"> | number
    followingId?: IntFilter<"follow"> | number
    createdAt?: DateTimeFilter<"follow"> | Date | string
    user_follow_followerIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_follow_followingIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type followOrderByWithRelationInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    user_follow_followerIdTouser?: userOrderByWithRelationInput
    user_follow_followingIdTouser?: userOrderByWithRelationInput
  }

  export type followWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    followerId_followingId?: followFollowerIdFollowingIdCompoundUniqueInput
    AND?: followWhereInput | followWhereInput[]
    OR?: followWhereInput[]
    NOT?: followWhereInput | followWhereInput[]
    followerId?: IntFilter<"follow"> | number
    followingId?: IntFilter<"follow"> | number
    createdAt?: DateTimeFilter<"follow"> | Date | string
    user_follow_followerIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_follow_followingIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "followerId_followingId">

  export type followOrderByWithAggregationInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    _count?: followCountOrderByAggregateInput
    _avg?: followAvgOrderByAggregateInput
    _max?: followMaxOrderByAggregateInput
    _min?: followMinOrderByAggregateInput
    _sum?: followSumOrderByAggregateInput
  }

  export type followScalarWhereWithAggregatesInput = {
    AND?: followScalarWhereWithAggregatesInput | followScalarWhereWithAggregatesInput[]
    OR?: followScalarWhereWithAggregatesInput[]
    NOT?: followScalarWhereWithAggregatesInput | followScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"follow"> | number
    followerId?: IntWithAggregatesFilter<"follow"> | number
    followingId?: IntWithAggregatesFilter<"follow"> | number
    createdAt?: DateTimeWithAggregatesFilter<"follow"> | Date | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    profilePic?: StringNullableFilter<"user"> | string | null
    coverPic?: StringNullableFilter<"user"> | string | null
    bio?: StringNullableFilter<"user"> | string | null
    isAdmin?: BoolFilter<"user"> | boolean
    createdAt?: DateTimeFilter<"user"> | Date | string
    comment?: CommentListRelationFilter
    follow_follow_followerIdTouser?: FollowListRelationFilter
    follow_follow_followingIdTouser?: FollowListRelationFilter
    like?: LikeListRelationFilter
    message_message_recipientIdTouser?: MessageListRelationFilter
    message_message_senderIdTouser?: MessageListRelationFilter
    notification_notification_recipientIdTouser?: NotificationListRelationFilter
    notification_notification_senderIdTouser?: NotificationListRelationFilter
    post_post_userIdTouser?: PostListRelationFilter
    share?: ShareListRelationFilter
    post_savedposts?: PostListRelationFilter
    conversationAsUser1?: ConversationListRelationFilter
    conversationAsUser2?: ConversationListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    coverPic?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    comment?: commentOrderByRelationAggregateInput
    follow_follow_followerIdTouser?: followOrderByRelationAggregateInput
    follow_follow_followingIdTouser?: followOrderByRelationAggregateInput
    like?: likeOrderByRelationAggregateInput
    message_message_recipientIdTouser?: messageOrderByRelationAggregateInput
    message_message_senderIdTouser?: messageOrderByRelationAggregateInput
    notification_notification_recipientIdTouser?: notificationOrderByRelationAggregateInput
    notification_notification_senderIdTouser?: notificationOrderByRelationAggregateInput
    post_post_userIdTouser?: postOrderByRelationAggregateInput
    share?: shareOrderByRelationAggregateInput
    post_savedposts?: postOrderByRelationAggregateInput
    conversationAsUser1?: conversationOrderByRelationAggregateInput
    conversationAsUser2?: conversationOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    profilePic?: StringNullableFilter<"user"> | string | null
    coverPic?: StringNullableFilter<"user"> | string | null
    bio?: StringNullableFilter<"user"> | string | null
    isAdmin?: BoolFilter<"user"> | boolean
    createdAt?: DateTimeFilter<"user"> | Date | string
    comment?: CommentListRelationFilter
    follow_follow_followerIdTouser?: FollowListRelationFilter
    follow_follow_followingIdTouser?: FollowListRelationFilter
    like?: LikeListRelationFilter
    message_message_recipientIdTouser?: MessageListRelationFilter
    message_message_senderIdTouser?: MessageListRelationFilter
    notification_notification_recipientIdTouser?: NotificationListRelationFilter
    notification_notification_senderIdTouser?: NotificationListRelationFilter
    post_post_userIdTouser?: PostListRelationFilter
    share?: ShareListRelationFilter
    post_savedposts?: PostListRelationFilter
    conversationAsUser1?: ConversationListRelationFilter
    conversationAsUser2?: ConversationListRelationFilter
  }, "id" | "username" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    coverPic?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    profilePic?: StringNullableWithAggregatesFilter<"user"> | string | null
    coverPic?: StringNullableWithAggregatesFilter<"user"> | string | null
    bio?: StringNullableWithAggregatesFilter<"user"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"user"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type likeWhereInput = {
    AND?: likeWhereInput | likeWhereInput[]
    OR?: likeWhereInput[]
    NOT?: likeWhereInput | likeWhereInput[]
    id?: IntFilter<"like"> | number
    createdAt?: DateTimeFilter<"like"> | Date | string
    userId?: IntFilter<"like"> | number
    postId?: IntFilter<"like"> | number
    post?: XOR<PostScalarRelationFilter, postWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type likeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    post?: postOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type likeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_postId?: likeUserIdPostIdCompoundUniqueInput
    AND?: likeWhereInput | likeWhereInput[]
    OR?: likeWhereInput[]
    NOT?: likeWhereInput | likeWhereInput[]
    createdAt?: DateTimeFilter<"like"> | Date | string
    userId?: IntFilter<"like"> | number
    postId?: IntFilter<"like"> | number
    post?: XOR<PostScalarRelationFilter, postWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "userId_postId">

  export type likeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: likeCountOrderByAggregateInput
    _avg?: likeAvgOrderByAggregateInput
    _max?: likeMaxOrderByAggregateInput
    _min?: likeMinOrderByAggregateInput
    _sum?: likeSumOrderByAggregateInput
  }

  export type likeScalarWhereWithAggregatesInput = {
    AND?: likeScalarWhereWithAggregatesInput | likeScalarWhereWithAggregatesInput[]
    OR?: likeScalarWhereWithAggregatesInput[]
    NOT?: likeScalarWhereWithAggregatesInput | likeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"like"> | number
    createdAt?: DateTimeWithAggregatesFilter<"like"> | Date | string
    userId?: IntWithAggregatesFilter<"like"> | number
    postId?: IntWithAggregatesFilter<"like"> | number
  }

  export type postWhereInput = {
    AND?: postWhereInput | postWhereInput[]
    OR?: postWhereInput[]
    NOT?: postWhereInput | postWhereInput[]
    id?: IntFilter<"post"> | number
    content?: StringFilter<"post"> | string
    createdAt?: DateTimeFilter<"post"> | Date | string
    userId?: IntFilter<"post"> | number
    comment?: CommentListRelationFilter
    like?: LikeListRelationFilter
    media_media_postIdTopost?: MediaListRelationFilter
    notification?: NotificationListRelationFilter
    user_post_userIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    share?: ShareListRelationFilter
    media_postvideos?: MediaListRelationFilter
    user_savedposts?: UserListRelationFilter
  }

  export type postOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    comment?: commentOrderByRelationAggregateInput
    like?: likeOrderByRelationAggregateInput
    media_media_postIdTopost?: mediaOrderByRelationAggregateInput
    notification?: notificationOrderByRelationAggregateInput
    user_post_userIdTouser?: userOrderByWithRelationInput
    share?: shareOrderByRelationAggregateInput
    media_postvideos?: mediaOrderByRelationAggregateInput
    user_savedposts?: userOrderByRelationAggregateInput
    _relevance?: postOrderByRelevanceInput
  }

  export type postWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: postWhereInput | postWhereInput[]
    OR?: postWhereInput[]
    NOT?: postWhereInput | postWhereInput[]
    content?: StringFilter<"post"> | string
    createdAt?: DateTimeFilter<"post"> | Date | string
    userId?: IntFilter<"post"> | number
    comment?: CommentListRelationFilter
    like?: LikeListRelationFilter
    media_media_postIdTopost?: MediaListRelationFilter
    notification?: NotificationListRelationFilter
    user_post_userIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    share?: ShareListRelationFilter
    media_postvideos?: MediaListRelationFilter
    user_savedposts?: UserListRelationFilter
  }, "id">

  export type postOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: postCountOrderByAggregateInput
    _avg?: postAvgOrderByAggregateInput
    _max?: postMaxOrderByAggregateInput
    _min?: postMinOrderByAggregateInput
    _sum?: postSumOrderByAggregateInput
  }

  export type postScalarWhereWithAggregatesInput = {
    AND?: postScalarWhereWithAggregatesInput | postScalarWhereWithAggregatesInput[]
    OR?: postScalarWhereWithAggregatesInput[]
    NOT?: postScalarWhereWithAggregatesInput | postScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"post"> | number
    content?: StringWithAggregatesFilter<"post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"post"> | Date | string
    userId?: IntWithAggregatesFilter<"post"> | number
  }

  export type mediaWhereInput = {
    AND?: mediaWhereInput | mediaWhereInput[]
    OR?: mediaWhereInput[]
    NOT?: mediaWhereInput | mediaWhereInput[]
    id?: IntFilter<"media"> | number
    url?: StringFilter<"media"> | string
    type?: StringFilter<"media"> | string
    createdAt?: DateTimeFilter<"media"> | Date | string
    postId?: IntFilter<"media"> | number
    post_media_postIdTopost?: XOR<PostScalarRelationFilter, postWhereInput>
    post_postvideos?: PostListRelationFilter
  }

  export type mediaOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
    post_media_postIdTopost?: postOrderByWithRelationInput
    post_postvideos?: postOrderByRelationAggregateInput
    _relevance?: mediaOrderByRelevanceInput
  }

  export type mediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mediaWhereInput | mediaWhereInput[]
    OR?: mediaWhereInput[]
    NOT?: mediaWhereInput | mediaWhereInput[]
    url?: StringFilter<"media"> | string
    type?: StringFilter<"media"> | string
    createdAt?: DateTimeFilter<"media"> | Date | string
    postId?: IntFilter<"media"> | number
    post_media_postIdTopost?: XOR<PostScalarRelationFilter, postWhereInput>
    post_postvideos?: PostListRelationFilter
  }, "id">

  export type mediaOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
    _count?: mediaCountOrderByAggregateInput
    _avg?: mediaAvgOrderByAggregateInput
    _max?: mediaMaxOrderByAggregateInput
    _min?: mediaMinOrderByAggregateInput
    _sum?: mediaSumOrderByAggregateInput
  }

  export type mediaScalarWhereWithAggregatesInput = {
    AND?: mediaScalarWhereWithAggregatesInput | mediaScalarWhereWithAggregatesInput[]
    OR?: mediaScalarWhereWithAggregatesInput[]
    NOT?: mediaScalarWhereWithAggregatesInput | mediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"media"> | number
    url?: StringWithAggregatesFilter<"media"> | string
    type?: StringWithAggregatesFilter<"media"> | string
    createdAt?: DateTimeWithAggregatesFilter<"media"> | Date | string
    postId?: IntWithAggregatesFilter<"media"> | number
  }

  export type conversationWhereInput = {
    AND?: conversationWhereInput | conversationWhereInput[]
    OR?: conversationWhereInput[]
    NOT?: conversationWhereInput | conversationWhereInput[]
    id?: IntFilter<"conversation"> | number
    user1Id?: IntFilter<"conversation"> | number
    user2Id?: IntFilter<"conversation"> | number
    createdAt?: DateTimeFilter<"conversation"> | Date | string
    user1?: XOR<UserScalarRelationFilter, userWhereInput>
    user2?: XOR<UserScalarRelationFilter, userWhereInput>
    messages?: MessageListRelationFilter
  }

  export type conversationOrderByWithRelationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    createdAt?: SortOrder
    user1?: userOrderByWithRelationInput
    user2?: userOrderByWithRelationInput
    messages?: messageOrderByRelationAggregateInput
  }

  export type conversationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: conversationWhereInput | conversationWhereInput[]
    OR?: conversationWhereInput[]
    NOT?: conversationWhereInput | conversationWhereInput[]
    user1Id?: IntFilter<"conversation"> | number
    user2Id?: IntFilter<"conversation"> | number
    createdAt?: DateTimeFilter<"conversation"> | Date | string
    user1?: XOR<UserScalarRelationFilter, userWhereInput>
    user2?: XOR<UserScalarRelationFilter, userWhereInput>
    messages?: MessageListRelationFilter
  }, "id">

  export type conversationOrderByWithAggregationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    createdAt?: SortOrder
    _count?: conversationCountOrderByAggregateInput
    _avg?: conversationAvgOrderByAggregateInput
    _max?: conversationMaxOrderByAggregateInput
    _min?: conversationMinOrderByAggregateInput
    _sum?: conversationSumOrderByAggregateInput
  }

  export type conversationScalarWhereWithAggregatesInput = {
    AND?: conversationScalarWhereWithAggregatesInput | conversationScalarWhereWithAggregatesInput[]
    OR?: conversationScalarWhereWithAggregatesInput[]
    NOT?: conversationScalarWhereWithAggregatesInput | conversationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"conversation"> | number
    user1Id?: IntWithAggregatesFilter<"conversation"> | number
    user2Id?: IntWithAggregatesFilter<"conversation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"conversation"> | Date | string
  }

  export type messageWhereInput = {
    AND?: messageWhereInput | messageWhereInput[]
    OR?: messageWhereInput[]
    NOT?: messageWhereInput | messageWhereInput[]
    id?: IntFilter<"message"> | number
    content?: StringFilter<"message"> | string
    createdAt?: DateTimeFilter<"message"> | Date | string
    senderId?: IntFilter<"message"> | number
    recipientId?: IntFilter<"message"> | number
    conversationId?: IntFilter<"message"> | number
    user_message_senderIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_message_recipientIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    conversation?: XOR<ConversationScalarRelationFilter, conversationWhereInput>
  }

  export type messageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    conversationId?: SortOrder
    user_message_senderIdTouser?: userOrderByWithRelationInput
    user_message_recipientIdTouser?: userOrderByWithRelationInput
    conversation?: conversationOrderByWithRelationInput
    _relevance?: messageOrderByRelevanceInput
  }

  export type messageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messageWhereInput | messageWhereInput[]
    OR?: messageWhereInput[]
    NOT?: messageWhereInput | messageWhereInput[]
    content?: StringFilter<"message"> | string
    createdAt?: DateTimeFilter<"message"> | Date | string
    senderId?: IntFilter<"message"> | number
    recipientId?: IntFilter<"message"> | number
    conversationId?: IntFilter<"message"> | number
    user_message_senderIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_message_recipientIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    conversation?: XOR<ConversationScalarRelationFilter, conversationWhereInput>
  }, "id">

  export type messageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    conversationId?: SortOrder
    _count?: messageCountOrderByAggregateInput
    _avg?: messageAvgOrderByAggregateInput
    _max?: messageMaxOrderByAggregateInput
    _min?: messageMinOrderByAggregateInput
    _sum?: messageSumOrderByAggregateInput
  }

  export type messageScalarWhereWithAggregatesInput = {
    AND?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[]
    OR?: messageScalarWhereWithAggregatesInput[]
    NOT?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"message"> | number
    content?: StringWithAggregatesFilter<"message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"message"> | Date | string
    senderId?: IntWithAggregatesFilter<"message"> | number
    recipientId?: IntWithAggregatesFilter<"message"> | number
    conversationId?: IntWithAggregatesFilter<"message"> | number
  }

  export type notificationWhereInput = {
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    id?: IntFilter<"notification"> | number
    type?: StringFilter<"notification"> | string
    read?: BoolFilter<"notification"> | boolean
    createdAt?: DateTimeFilter<"notification"> | Date | string
    recipientId?: IntFilter<"notification"> | number
    senderId?: IntFilter<"notification"> | number
    postId?: IntNullableFilter<"notification"> | number | null
    post?: XOR<PostNullableScalarRelationFilter, postWhereInput> | null
    user_notification_recipientIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_notification_senderIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type notificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    recipientId?: SortOrder
    senderId?: SortOrder
    postId?: SortOrderInput | SortOrder
    post?: postOrderByWithRelationInput
    user_notification_recipientIdTouser?: userOrderByWithRelationInput
    user_notification_senderIdTouser?: userOrderByWithRelationInput
    _relevance?: notificationOrderByRelevanceInput
  }

  export type notificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    type?: StringFilter<"notification"> | string
    read?: BoolFilter<"notification"> | boolean
    createdAt?: DateTimeFilter<"notification"> | Date | string
    recipientId?: IntFilter<"notification"> | number
    senderId?: IntFilter<"notification"> | number
    postId?: IntNullableFilter<"notification"> | number | null
    post?: XOR<PostNullableScalarRelationFilter, postWhereInput> | null
    user_notification_recipientIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_notification_senderIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type notificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    recipientId?: SortOrder
    senderId?: SortOrder
    postId?: SortOrderInput | SortOrder
    _count?: notificationCountOrderByAggregateInput
    _avg?: notificationAvgOrderByAggregateInput
    _max?: notificationMaxOrderByAggregateInput
    _min?: notificationMinOrderByAggregateInput
    _sum?: notificationSumOrderByAggregateInput
  }

  export type notificationScalarWhereWithAggregatesInput = {
    AND?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    OR?: notificationScalarWhereWithAggregatesInput[]
    NOT?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notification"> | number
    type?: StringWithAggregatesFilter<"notification"> | string
    read?: BoolWithAggregatesFilter<"notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"notification"> | Date | string
    recipientId?: IntWithAggregatesFilter<"notification"> | number
    senderId?: IntWithAggregatesFilter<"notification"> | number
    postId?: IntNullableWithAggregatesFilter<"notification"> | number | null
  }

  export type shareWhereInput = {
    AND?: shareWhereInput | shareWhereInput[]
    OR?: shareWhereInput[]
    NOT?: shareWhereInput | shareWhereInput[]
    id?: IntFilter<"share"> | number
    createdAt?: DateTimeFilter<"share"> | Date | string
    userId?: IntFilter<"share"> | number
    postId?: IntFilter<"share"> | number
    post?: XOR<PostScalarRelationFilter, postWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type shareOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    post?: postOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type shareWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_postId?: shareUserIdPostIdCompoundUniqueInput
    AND?: shareWhereInput | shareWhereInput[]
    OR?: shareWhereInput[]
    NOT?: shareWhereInput | shareWhereInput[]
    createdAt?: DateTimeFilter<"share"> | Date | string
    userId?: IntFilter<"share"> | number
    postId?: IntFilter<"share"> | number
    post?: XOR<PostScalarRelationFilter, postWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "userId_postId">

  export type shareOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: shareCountOrderByAggregateInput
    _avg?: shareAvgOrderByAggregateInput
    _max?: shareMaxOrderByAggregateInput
    _min?: shareMinOrderByAggregateInput
    _sum?: shareSumOrderByAggregateInput
  }

  export type shareScalarWhereWithAggregatesInput = {
    AND?: shareScalarWhereWithAggregatesInput | shareScalarWhereWithAggregatesInput[]
    OR?: shareScalarWhereWithAggregatesInput[]
    NOT?: shareScalarWhereWithAggregatesInput | shareScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"share"> | number
    createdAt?: DateTimeWithAggregatesFilter<"share"> | Date | string
    userId?: IntWithAggregatesFilter<"share"> | number
    postId?: IntWithAggregatesFilter<"share"> | number
  }

  export type commentCreateInput = {
    content: string
    createdAt?: Date | string
    post: postCreateNestedOneWithoutCommentInput
    user: userCreateNestedOneWithoutCommentInput
  }

  export type commentUncheckedCreateInput = {
    id?: number
    content: string
    createdAt?: Date | string
    userId: number
    postId: number
  }

  export type commentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postUpdateOneRequiredWithoutCommentNestedInput
    user?: userUpdateOneRequiredWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type commentCreateManyInput = {
    id?: number
    content: string
    createdAt?: Date | string
    userId: number
    postId: number
  }

  export type commentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type followCreateInput = {
    createdAt?: Date | string
    user_follow_followerIdTouser: userCreateNestedOneWithoutFollow_follow_followerIdTouserInput
    user_follow_followingIdTouser: userCreateNestedOneWithoutFollow_follow_followingIdTouserInput
  }

  export type followUncheckedCreateInput = {
    id?: number
    followerId: number
    followingId: number
    createdAt?: Date | string
  }

  export type followUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_follow_followerIdTouser?: userUpdateOneRequiredWithoutFollow_follow_followerIdTouserNestedInput
    user_follow_followingIdTouser?: userUpdateOneRequiredWithoutFollow_follow_followingIdTouserNestedInput
  }

  export type followUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type followCreateManyInput = {
    id?: number
    followerId: number
    followingId: number
    createdAt?: Date | string
  }

  export type followUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type followUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutUserInput
    post_savedposts?: postCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationCreateNestedManyWithoutUser2Input
  }

  export type userUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postUncheckedCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareUncheckedCreateNestedManyWithoutUserInput
    post_savedposts?: postUncheckedCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationUncheckedCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationUncheckedCreateNestedManyWithoutUser2Input
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutUserNestedInput
    post_savedposts?: postUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUpdateManyWithoutUser2NestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUncheckedUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUncheckedUpdateManyWithoutUserNestedInput
    post_savedposts?: postUncheckedUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUncheckedUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type userCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likeCreateInput = {
    createdAt?: Date | string
    post: postCreateNestedOneWithoutLikeInput
    user: userCreateNestedOneWithoutLikeInput
  }

  export type likeUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    postId: number
  }

  export type likeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postUpdateOneRequiredWithoutLikeNestedInput
    user?: userUpdateOneRequiredWithoutLikeNestedInput
  }

  export type likeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type likeCreateManyInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    postId: number
  }

  export type likeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type postCreateInput = {
    content: string
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutPostInput
    like?: likeCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaCreateNestedManyWithoutPost_media_postIdTopostInput
    notification?: notificationCreateNestedManyWithoutPostInput
    user_post_userIdTouser: userCreateNestedOneWithoutPost_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutPostInput
    media_postvideos?: mediaCreateNestedManyWithoutPost_postvideosInput
    user_savedposts?: userCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postUncheckedCreateInput = {
    id?: number
    content: string
    createdAt?: Date | string
    userId: number
    comment?: commentUncheckedCreateNestedManyWithoutPostInput
    like?: likeUncheckedCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaUncheckedCreateNestedManyWithoutPost_media_postIdTopostInput
    notification?: notificationUncheckedCreateNestedManyWithoutPostInput
    share?: shareUncheckedCreateNestedManyWithoutPostInput
    media_postvideos?: mediaUncheckedCreateNestedManyWithoutPost_postvideosInput
    user_savedposts?: userUncheckedCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutPostNestedInput
    like?: likeUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUpdateManyWithoutPost_media_postIdTopostNestedInput
    notification?: notificationUpdateManyWithoutPostNestedInput
    user_post_userIdTouser?: userUpdateOneRequiredWithoutPost_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutPostNestedInput
    media_postvideos?: mediaUpdateManyWithoutPost_postvideosNestedInput
    user_savedposts?: userUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type postUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    comment?: commentUncheckedUpdateManyWithoutPostNestedInput
    like?: likeUncheckedUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUncheckedUpdateManyWithoutPost_media_postIdTopostNestedInput
    notification?: notificationUncheckedUpdateManyWithoutPostNestedInput
    share?: shareUncheckedUpdateManyWithoutPostNestedInput
    media_postvideos?: mediaUncheckedUpdateManyWithoutPost_postvideosNestedInput
    user_savedposts?: userUncheckedUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type postCreateManyInput = {
    id?: number
    content: string
    createdAt?: Date | string
    userId: number
  }

  export type postUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type mediaCreateInput = {
    url: string
    type: string
    createdAt?: Date | string
    post_media_postIdTopost: postCreateNestedOneWithoutMedia_media_postIdTopostInput
    post_postvideos?: postCreateNestedManyWithoutMedia_postvideosInput
  }

  export type mediaUncheckedCreateInput = {
    id?: number
    url: string
    type: string
    createdAt?: Date | string
    postId: number
    post_postvideos?: postUncheckedCreateNestedManyWithoutMedia_postvideosInput
  }

  export type mediaUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post_media_postIdTopost?: postUpdateOneRequiredWithoutMedia_media_postIdTopostNestedInput
    post_postvideos?: postUpdateManyWithoutMedia_postvideosNestedInput
  }

  export type mediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
    post_postvideos?: postUncheckedUpdateManyWithoutMedia_postvideosNestedInput
  }

  export type mediaCreateManyInput = {
    id?: number
    url: string
    type: string
    createdAt?: Date | string
    postId: number
  }

  export type mediaUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type conversationCreateInput = {
    createdAt?: Date | string
    user1: userCreateNestedOneWithoutConversationAsUser1Input
    user2: userCreateNestedOneWithoutConversationAsUser2Input
    messages?: messageCreateNestedManyWithoutConversationInput
  }

  export type conversationUncheckedCreateInput = {
    id?: number
    user1Id: number
    user2Id: number
    createdAt?: Date | string
    messages?: messageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type conversationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: userUpdateOneRequiredWithoutConversationAsUser1NestedInput
    user2?: userUpdateOneRequiredWithoutConversationAsUser2NestedInput
    messages?: messageUpdateManyWithoutConversationNestedInput
  }

  export type conversationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user1Id?: IntFieldUpdateOperationsInput | number
    user2Id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type conversationCreateManyInput = {
    id?: number
    user1Id: number
    user2Id: number
    createdAt?: Date | string
  }

  export type conversationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user1Id?: IntFieldUpdateOperationsInput | number
    user2Id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messageCreateInput = {
    content: string
    createdAt?: Date | string
    user_message_senderIdTouser: userCreateNestedOneWithoutMessage_message_senderIdTouserInput
    user_message_recipientIdTouser: userCreateNestedOneWithoutMessage_message_recipientIdTouserInput
    conversation: conversationCreateNestedOneWithoutMessagesInput
  }

  export type messageUncheckedCreateInput = {
    id?: number
    content: string
    createdAt?: Date | string
    senderId: number
    recipientId: number
    conversationId: number
  }

  export type messageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_message_senderIdTouser?: userUpdateOneRequiredWithoutMessage_message_senderIdTouserNestedInput
    user_message_recipientIdTouser?: userUpdateOneRequiredWithoutMessage_message_recipientIdTouserNestedInput
    conversation?: conversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
  }

  export type messageCreateManyInput = {
    id?: number
    content: string
    createdAt?: Date | string
    senderId: number
    recipientId: number
    conversationId: number
  }

  export type messageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
  }

  export type notificationCreateInput = {
    type: string
    read?: boolean
    createdAt?: Date | string
    post?: postCreateNestedOneWithoutNotificationInput
    user_notification_recipientIdTouser: userCreateNestedOneWithoutNotification_notification_recipientIdTouserInput
    user_notification_senderIdTouser: userCreateNestedOneWithoutNotification_notification_senderIdTouserInput
  }

  export type notificationUncheckedCreateInput = {
    id?: number
    type: string
    read?: boolean
    createdAt?: Date | string
    recipientId: number
    senderId: number
    postId?: number | null
  }

  export type notificationUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postUpdateOneWithoutNotificationNestedInput
    user_notification_recipientIdTouser?: userUpdateOneRequiredWithoutNotification_notification_recipientIdTouserNestedInput
    user_notification_senderIdTouser?: userUpdateOneRequiredWithoutNotification_notification_senderIdTouserNestedInput
  }

  export type notificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificationCreateManyInput = {
    id?: number
    type: string
    read?: boolean
    createdAt?: Date | string
    recipientId: number
    senderId: number
    postId?: number | null
  }

  export type notificationUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type shareCreateInput = {
    createdAt?: Date | string
    post: postCreateNestedOneWithoutShareInput
    user: userCreateNestedOneWithoutShareInput
  }

  export type shareUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    postId: number
  }

  export type shareUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postUpdateOneRequiredWithoutShareNestedInput
    user?: userUpdateOneRequiredWithoutShareNestedInput
  }

  export type shareUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type shareCreateManyInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    postId: number
  }

  export type shareUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type shareUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostScalarRelationFilter = {
    is?: postWhereInput
    isNot?: postWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type commentOrderByRelevanceInput = {
    fields: commentOrderByRelevanceFieldEnum | commentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type commentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type commentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type commentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type commentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type commentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type followFollowerIdFollowingIdCompoundUniqueInput = {
    followerId: number
    followingId: number
  }

  export type followCountOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type followAvgOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type followMaxOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type followMinOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type followSumOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CommentListRelationFilter = {
    every?: commentWhereInput
    some?: commentWhereInput
    none?: commentWhereInput
  }

  export type FollowListRelationFilter = {
    every?: followWhereInput
    some?: followWhereInput
    none?: followWhereInput
  }

  export type LikeListRelationFilter = {
    every?: likeWhereInput
    some?: likeWhereInput
    none?: likeWhereInput
  }

  export type MessageListRelationFilter = {
    every?: messageWhereInput
    some?: messageWhereInput
    none?: messageWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: notificationWhereInput
    some?: notificationWhereInput
    none?: notificationWhereInput
  }

  export type PostListRelationFilter = {
    every?: postWhereInput
    some?: postWhereInput
    none?: postWhereInput
  }

  export type ShareListRelationFilter = {
    every?: shareWhereInput
    some?: shareWhereInput
    none?: shareWhereInput
  }

  export type ConversationListRelationFilter = {
    every?: conversationWhereInput
    some?: conversationWhereInput
    none?: conversationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type commentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type followOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type likeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type shareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type conversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePic?: SortOrder
    coverPic?: SortOrder
    bio?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePic?: SortOrder
    coverPic?: SortOrder
    bio?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePic?: SortOrder
    coverPic?: SortOrder
    bio?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type likeUserIdPostIdCompoundUniqueInput = {
    userId: number
    postId: number
  }

  export type likeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type likeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type likeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type likeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type likeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type MediaListRelationFilter = {
    every?: mediaWhereInput
    some?: mediaWhereInput
    none?: mediaWhereInput
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type mediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postOrderByRelevanceInput = {
    fields: postOrderByRelevanceFieldEnum | postOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type postCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type postAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type postMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type postMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type postSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type mediaOrderByRelevanceInput = {
    fields: mediaOrderByRelevanceFieldEnum | mediaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mediaCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
  }

  export type mediaAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type mediaMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
  }

  export type mediaMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
  }

  export type mediaSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type conversationCountOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    createdAt?: SortOrder
  }

  export type conversationAvgOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
  }

  export type conversationMaxOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    createdAt?: SortOrder
  }

  export type conversationMinOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    createdAt?: SortOrder
  }

  export type conversationSumOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
  }

  export type ConversationScalarRelationFilter = {
    is?: conversationWhereInput
    isNot?: conversationWhereInput
  }

  export type messageOrderByRelevanceInput = {
    fields: messageOrderByRelevanceFieldEnum | messageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type messageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    conversationId?: SortOrder
  }

  export type messageAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    conversationId?: SortOrder
  }

  export type messageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    conversationId?: SortOrder
  }

  export type messageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    conversationId?: SortOrder
  }

  export type messageSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    conversationId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PostNullableScalarRelationFilter = {
    is?: postWhereInput | null
    isNot?: postWhereInput | null
  }

  export type notificationOrderByRelevanceInput = {
    fields: notificationOrderByRelevanceFieldEnum | notificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type notificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    recipientId?: SortOrder
    senderId?: SortOrder
    postId?: SortOrder
  }

  export type notificationAvgOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    senderId?: SortOrder
    postId?: SortOrder
  }

  export type notificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    recipientId?: SortOrder
    senderId?: SortOrder
    postId?: SortOrder
  }

  export type notificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    recipientId?: SortOrder
    senderId?: SortOrder
    postId?: SortOrder
  }

  export type notificationSumOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    senderId?: SortOrder
    postId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type shareUserIdPostIdCompoundUniqueInput = {
    userId: number
    postId: number
  }

  export type shareCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type shareAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type shareMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type shareMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type shareSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type postCreateNestedOneWithoutCommentInput = {
    create?: XOR<postCreateWithoutCommentInput, postUncheckedCreateWithoutCommentInput>
    connectOrCreate?: postCreateOrConnectWithoutCommentInput
    connect?: postWhereUniqueInput
  }

  export type userCreateNestedOneWithoutCommentInput = {
    create?: XOR<userCreateWithoutCommentInput, userUncheckedCreateWithoutCommentInput>
    connectOrCreate?: userCreateOrConnectWithoutCommentInput
    connect?: userWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type postUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<postCreateWithoutCommentInput, postUncheckedCreateWithoutCommentInput>
    connectOrCreate?: postCreateOrConnectWithoutCommentInput
    upsert?: postUpsertWithoutCommentInput
    connect?: postWhereUniqueInput
    update?: XOR<XOR<postUpdateToOneWithWhereWithoutCommentInput, postUpdateWithoutCommentInput>, postUncheckedUpdateWithoutCommentInput>
  }

  export type userUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<userCreateWithoutCommentInput, userUncheckedCreateWithoutCommentInput>
    connectOrCreate?: userCreateOrConnectWithoutCommentInput
    upsert?: userUpsertWithoutCommentInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCommentInput, userUpdateWithoutCommentInput>, userUncheckedUpdateWithoutCommentInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userCreateNestedOneWithoutFollow_follow_followerIdTouserInput = {
    create?: XOR<userCreateWithoutFollow_follow_followerIdTouserInput, userUncheckedCreateWithoutFollow_follow_followerIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFollow_follow_followerIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutFollow_follow_followingIdTouserInput = {
    create?: XOR<userCreateWithoutFollow_follow_followingIdTouserInput, userUncheckedCreateWithoutFollow_follow_followingIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFollow_follow_followingIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutFollow_follow_followerIdTouserNestedInput = {
    create?: XOR<userCreateWithoutFollow_follow_followerIdTouserInput, userUncheckedCreateWithoutFollow_follow_followerIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFollow_follow_followerIdTouserInput
    upsert?: userUpsertWithoutFollow_follow_followerIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFollow_follow_followerIdTouserInput, userUpdateWithoutFollow_follow_followerIdTouserInput>, userUncheckedUpdateWithoutFollow_follow_followerIdTouserInput>
  }

  export type userUpdateOneRequiredWithoutFollow_follow_followingIdTouserNestedInput = {
    create?: XOR<userCreateWithoutFollow_follow_followingIdTouserInput, userUncheckedCreateWithoutFollow_follow_followingIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutFollow_follow_followingIdTouserInput
    upsert?: userUpsertWithoutFollow_follow_followingIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFollow_follow_followingIdTouserInput, userUpdateWithoutFollow_follow_followingIdTouserInput>, userUncheckedUpdateWithoutFollow_follow_followingIdTouserInput>
  }

  export type commentCreateNestedManyWithoutUserInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type followCreateNestedManyWithoutUser_follow_followerIdTouserInput = {
    create?: XOR<followCreateWithoutUser_follow_followerIdTouserInput, followUncheckedCreateWithoutUser_follow_followerIdTouserInput> | followCreateWithoutUser_follow_followerIdTouserInput[] | followUncheckedCreateWithoutUser_follow_followerIdTouserInput[]
    connectOrCreate?: followCreateOrConnectWithoutUser_follow_followerIdTouserInput | followCreateOrConnectWithoutUser_follow_followerIdTouserInput[]
    createMany?: followCreateManyUser_follow_followerIdTouserInputEnvelope
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
  }

  export type followCreateNestedManyWithoutUser_follow_followingIdTouserInput = {
    create?: XOR<followCreateWithoutUser_follow_followingIdTouserInput, followUncheckedCreateWithoutUser_follow_followingIdTouserInput> | followCreateWithoutUser_follow_followingIdTouserInput[] | followUncheckedCreateWithoutUser_follow_followingIdTouserInput[]
    connectOrCreate?: followCreateOrConnectWithoutUser_follow_followingIdTouserInput | followCreateOrConnectWithoutUser_follow_followingIdTouserInput[]
    createMany?: followCreateManyUser_follow_followingIdTouserInputEnvelope
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
  }

  export type likeCreateNestedManyWithoutUserInput = {
    create?: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput> | likeCreateWithoutUserInput[] | likeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[]
    createMany?: likeCreateManyUserInputEnvelope
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
  }

  export type messageCreateNestedManyWithoutUser_message_recipientIdTouserInput = {
    create?: XOR<messageCreateWithoutUser_message_recipientIdTouserInput, messageUncheckedCreateWithoutUser_message_recipientIdTouserInput> | messageCreateWithoutUser_message_recipientIdTouserInput[] | messageUncheckedCreateWithoutUser_message_recipientIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_recipientIdTouserInput | messageCreateOrConnectWithoutUser_message_recipientIdTouserInput[]
    createMany?: messageCreateManyUser_message_recipientIdTouserInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type messageCreateNestedManyWithoutUser_message_senderIdTouserInput = {
    create?: XOR<messageCreateWithoutUser_message_senderIdTouserInput, messageUncheckedCreateWithoutUser_message_senderIdTouserInput> | messageCreateWithoutUser_message_senderIdTouserInput[] | messageUncheckedCreateWithoutUser_message_senderIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_senderIdTouserInput | messageCreateOrConnectWithoutUser_message_senderIdTouserInput[]
    createMany?: messageCreateManyUser_message_senderIdTouserInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput = {
    create?: XOR<notificationCreateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput> | notificationCreateWithoutUser_notification_recipientIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput | notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_recipientIdTouserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput = {
    create?: XOR<notificationCreateWithoutUser_notification_senderIdTouserInput, notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput> | notificationCreateWithoutUser_notification_senderIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput | notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_senderIdTouserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type postCreateNestedManyWithoutUser_post_userIdTouserInput = {
    create?: XOR<postCreateWithoutUser_post_userIdTouserInput, postUncheckedCreateWithoutUser_post_userIdTouserInput> | postCreateWithoutUser_post_userIdTouserInput[] | postUncheckedCreateWithoutUser_post_userIdTouserInput[]
    connectOrCreate?: postCreateOrConnectWithoutUser_post_userIdTouserInput | postCreateOrConnectWithoutUser_post_userIdTouserInput[]
    createMany?: postCreateManyUser_post_userIdTouserInputEnvelope
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
  }

  export type shareCreateNestedManyWithoutUserInput = {
    create?: XOR<shareCreateWithoutUserInput, shareUncheckedCreateWithoutUserInput> | shareCreateWithoutUserInput[] | shareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shareCreateOrConnectWithoutUserInput | shareCreateOrConnectWithoutUserInput[]
    createMany?: shareCreateManyUserInputEnvelope
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[]
  }

  export type postCreateNestedManyWithoutUser_savedpostsInput = {
    create?: XOR<postCreateWithoutUser_savedpostsInput, postUncheckedCreateWithoutUser_savedpostsInput> | postCreateWithoutUser_savedpostsInput[] | postUncheckedCreateWithoutUser_savedpostsInput[]
    connectOrCreate?: postCreateOrConnectWithoutUser_savedpostsInput | postCreateOrConnectWithoutUser_savedpostsInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
  }

  export type conversationCreateNestedManyWithoutUser1Input = {
    create?: XOR<conversationCreateWithoutUser1Input, conversationUncheckedCreateWithoutUser1Input> | conversationCreateWithoutUser1Input[] | conversationUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: conversationCreateOrConnectWithoutUser1Input | conversationCreateOrConnectWithoutUser1Input[]
    createMany?: conversationCreateManyUser1InputEnvelope
    connect?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
  }

  export type conversationCreateNestedManyWithoutUser2Input = {
    create?: XOR<conversationCreateWithoutUser2Input, conversationUncheckedCreateWithoutUser2Input> | conversationCreateWithoutUser2Input[] | conversationUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: conversationCreateOrConnectWithoutUser2Input | conversationCreateOrConnectWithoutUser2Input[]
    createMany?: conversationCreateManyUser2InputEnvelope
    connect?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
  }

  export type commentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type followUncheckedCreateNestedManyWithoutUser_follow_followerIdTouserInput = {
    create?: XOR<followCreateWithoutUser_follow_followerIdTouserInput, followUncheckedCreateWithoutUser_follow_followerIdTouserInput> | followCreateWithoutUser_follow_followerIdTouserInput[] | followUncheckedCreateWithoutUser_follow_followerIdTouserInput[]
    connectOrCreate?: followCreateOrConnectWithoutUser_follow_followerIdTouserInput | followCreateOrConnectWithoutUser_follow_followerIdTouserInput[]
    createMany?: followCreateManyUser_follow_followerIdTouserInputEnvelope
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
  }

  export type followUncheckedCreateNestedManyWithoutUser_follow_followingIdTouserInput = {
    create?: XOR<followCreateWithoutUser_follow_followingIdTouserInput, followUncheckedCreateWithoutUser_follow_followingIdTouserInput> | followCreateWithoutUser_follow_followingIdTouserInput[] | followUncheckedCreateWithoutUser_follow_followingIdTouserInput[]
    connectOrCreate?: followCreateOrConnectWithoutUser_follow_followingIdTouserInput | followCreateOrConnectWithoutUser_follow_followingIdTouserInput[]
    createMany?: followCreateManyUser_follow_followingIdTouserInputEnvelope
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
  }

  export type likeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput> | likeCreateWithoutUserInput[] | likeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[]
    createMany?: likeCreateManyUserInputEnvelope
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutUser_message_recipientIdTouserInput = {
    create?: XOR<messageCreateWithoutUser_message_recipientIdTouserInput, messageUncheckedCreateWithoutUser_message_recipientIdTouserInput> | messageCreateWithoutUser_message_recipientIdTouserInput[] | messageUncheckedCreateWithoutUser_message_recipientIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_recipientIdTouserInput | messageCreateOrConnectWithoutUser_message_recipientIdTouserInput[]
    createMany?: messageCreateManyUser_message_recipientIdTouserInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput = {
    create?: XOR<messageCreateWithoutUser_message_senderIdTouserInput, messageUncheckedCreateWithoutUser_message_senderIdTouserInput> | messageCreateWithoutUser_message_senderIdTouserInput[] | messageUncheckedCreateWithoutUser_message_senderIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_senderIdTouserInput | messageCreateOrConnectWithoutUser_message_senderIdTouserInput[]
    createMany?: messageCreateManyUser_message_senderIdTouserInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput = {
    create?: XOR<notificationCreateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput> | notificationCreateWithoutUser_notification_recipientIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput | notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_recipientIdTouserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput = {
    create?: XOR<notificationCreateWithoutUser_notification_senderIdTouserInput, notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput> | notificationCreateWithoutUser_notification_senderIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput | notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_senderIdTouserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type postUncheckedCreateNestedManyWithoutUser_post_userIdTouserInput = {
    create?: XOR<postCreateWithoutUser_post_userIdTouserInput, postUncheckedCreateWithoutUser_post_userIdTouserInput> | postCreateWithoutUser_post_userIdTouserInput[] | postUncheckedCreateWithoutUser_post_userIdTouserInput[]
    connectOrCreate?: postCreateOrConnectWithoutUser_post_userIdTouserInput | postCreateOrConnectWithoutUser_post_userIdTouserInput[]
    createMany?: postCreateManyUser_post_userIdTouserInputEnvelope
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
  }

  export type shareUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<shareCreateWithoutUserInput, shareUncheckedCreateWithoutUserInput> | shareCreateWithoutUserInput[] | shareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shareCreateOrConnectWithoutUserInput | shareCreateOrConnectWithoutUserInput[]
    createMany?: shareCreateManyUserInputEnvelope
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[]
  }

  export type postUncheckedCreateNestedManyWithoutUser_savedpostsInput = {
    create?: XOR<postCreateWithoutUser_savedpostsInput, postUncheckedCreateWithoutUser_savedpostsInput> | postCreateWithoutUser_savedpostsInput[] | postUncheckedCreateWithoutUser_savedpostsInput[]
    connectOrCreate?: postCreateOrConnectWithoutUser_savedpostsInput | postCreateOrConnectWithoutUser_savedpostsInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
  }

  export type conversationUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<conversationCreateWithoutUser1Input, conversationUncheckedCreateWithoutUser1Input> | conversationCreateWithoutUser1Input[] | conversationUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: conversationCreateOrConnectWithoutUser1Input | conversationCreateOrConnectWithoutUser1Input[]
    createMany?: conversationCreateManyUser1InputEnvelope
    connect?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
  }

  export type conversationUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<conversationCreateWithoutUser2Input, conversationUncheckedCreateWithoutUser2Input> | conversationCreateWithoutUser2Input[] | conversationUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: conversationCreateOrConnectWithoutUser2Input | conversationCreateOrConnectWithoutUser2Input[]
    createMany?: conversationCreateManyUser2InputEnvelope
    connect?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type commentUpdateManyWithoutUserNestedInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutUserInput | commentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutUserInput | commentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: commentUpdateManyWithWhereWithoutUserInput | commentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type followUpdateManyWithoutUser_follow_followerIdTouserNestedInput = {
    create?: XOR<followCreateWithoutUser_follow_followerIdTouserInput, followUncheckedCreateWithoutUser_follow_followerIdTouserInput> | followCreateWithoutUser_follow_followerIdTouserInput[] | followUncheckedCreateWithoutUser_follow_followerIdTouserInput[]
    connectOrCreate?: followCreateOrConnectWithoutUser_follow_followerIdTouserInput | followCreateOrConnectWithoutUser_follow_followerIdTouserInput[]
    upsert?: followUpsertWithWhereUniqueWithoutUser_follow_followerIdTouserInput | followUpsertWithWhereUniqueWithoutUser_follow_followerIdTouserInput[]
    createMany?: followCreateManyUser_follow_followerIdTouserInputEnvelope
    set?: followWhereUniqueInput | followWhereUniqueInput[]
    disconnect?: followWhereUniqueInput | followWhereUniqueInput[]
    delete?: followWhereUniqueInput | followWhereUniqueInput[]
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
    update?: followUpdateWithWhereUniqueWithoutUser_follow_followerIdTouserInput | followUpdateWithWhereUniqueWithoutUser_follow_followerIdTouserInput[]
    updateMany?: followUpdateManyWithWhereWithoutUser_follow_followerIdTouserInput | followUpdateManyWithWhereWithoutUser_follow_followerIdTouserInput[]
    deleteMany?: followScalarWhereInput | followScalarWhereInput[]
  }

  export type followUpdateManyWithoutUser_follow_followingIdTouserNestedInput = {
    create?: XOR<followCreateWithoutUser_follow_followingIdTouserInput, followUncheckedCreateWithoutUser_follow_followingIdTouserInput> | followCreateWithoutUser_follow_followingIdTouserInput[] | followUncheckedCreateWithoutUser_follow_followingIdTouserInput[]
    connectOrCreate?: followCreateOrConnectWithoutUser_follow_followingIdTouserInput | followCreateOrConnectWithoutUser_follow_followingIdTouserInput[]
    upsert?: followUpsertWithWhereUniqueWithoutUser_follow_followingIdTouserInput | followUpsertWithWhereUniqueWithoutUser_follow_followingIdTouserInput[]
    createMany?: followCreateManyUser_follow_followingIdTouserInputEnvelope
    set?: followWhereUniqueInput | followWhereUniqueInput[]
    disconnect?: followWhereUniqueInput | followWhereUniqueInput[]
    delete?: followWhereUniqueInput | followWhereUniqueInput[]
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
    update?: followUpdateWithWhereUniqueWithoutUser_follow_followingIdTouserInput | followUpdateWithWhereUniqueWithoutUser_follow_followingIdTouserInput[]
    updateMany?: followUpdateManyWithWhereWithoutUser_follow_followingIdTouserInput | followUpdateManyWithWhereWithoutUser_follow_followingIdTouserInput[]
    deleteMany?: followScalarWhereInput | followScalarWhereInput[]
  }

  export type likeUpdateManyWithoutUserNestedInput = {
    create?: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput> | likeCreateWithoutUserInput[] | likeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[]
    upsert?: likeUpsertWithWhereUniqueWithoutUserInput | likeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: likeCreateManyUserInputEnvelope
    set?: likeWhereUniqueInput | likeWhereUniqueInput[]
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[]
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    update?: likeUpdateWithWhereUniqueWithoutUserInput | likeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: likeUpdateManyWithWhereWithoutUserInput | likeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[]
  }

  export type messageUpdateManyWithoutUser_message_recipientIdTouserNestedInput = {
    create?: XOR<messageCreateWithoutUser_message_recipientIdTouserInput, messageUncheckedCreateWithoutUser_message_recipientIdTouserInput> | messageCreateWithoutUser_message_recipientIdTouserInput[] | messageUncheckedCreateWithoutUser_message_recipientIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_recipientIdTouserInput | messageCreateOrConnectWithoutUser_message_recipientIdTouserInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutUser_message_recipientIdTouserInput | messageUpsertWithWhereUniqueWithoutUser_message_recipientIdTouserInput[]
    createMany?: messageCreateManyUser_message_recipientIdTouserInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutUser_message_recipientIdTouserInput | messageUpdateWithWhereUniqueWithoutUser_message_recipientIdTouserInput[]
    updateMany?: messageUpdateManyWithWhereWithoutUser_message_recipientIdTouserInput | messageUpdateManyWithWhereWithoutUser_message_recipientIdTouserInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type messageUpdateManyWithoutUser_message_senderIdTouserNestedInput = {
    create?: XOR<messageCreateWithoutUser_message_senderIdTouserInput, messageUncheckedCreateWithoutUser_message_senderIdTouserInput> | messageCreateWithoutUser_message_senderIdTouserInput[] | messageUncheckedCreateWithoutUser_message_senderIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_senderIdTouserInput | messageCreateOrConnectWithoutUser_message_senderIdTouserInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutUser_message_senderIdTouserInput | messageUpsertWithWhereUniqueWithoutUser_message_senderIdTouserInput[]
    createMany?: messageCreateManyUser_message_senderIdTouserInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutUser_message_senderIdTouserInput | messageUpdateWithWhereUniqueWithoutUser_message_senderIdTouserInput[]
    updateMany?: messageUpdateManyWithWhereWithoutUser_message_senderIdTouserInput | messageUpdateManyWithWhereWithoutUser_message_senderIdTouserInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput = {
    create?: XOR<notificationCreateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput> | notificationCreateWithoutUser_notification_recipientIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput | notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUser_notification_recipientIdTouserInput | notificationUpsertWithWhereUniqueWithoutUser_notification_recipientIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_recipientIdTouserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUser_notification_recipientIdTouserInput | notificationUpdateWithWhereUniqueWithoutUser_notification_recipientIdTouserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUser_notification_recipientIdTouserInput | notificationUpdateManyWithWhereWithoutUser_notification_recipientIdTouserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput = {
    create?: XOR<notificationCreateWithoutUser_notification_senderIdTouserInput, notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput> | notificationCreateWithoutUser_notification_senderIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput | notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUser_notification_senderIdTouserInput | notificationUpsertWithWhereUniqueWithoutUser_notification_senderIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_senderIdTouserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUser_notification_senderIdTouserInput | notificationUpdateWithWhereUniqueWithoutUser_notification_senderIdTouserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUser_notification_senderIdTouserInput | notificationUpdateManyWithWhereWithoutUser_notification_senderIdTouserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type postUpdateManyWithoutUser_post_userIdTouserNestedInput = {
    create?: XOR<postCreateWithoutUser_post_userIdTouserInput, postUncheckedCreateWithoutUser_post_userIdTouserInput> | postCreateWithoutUser_post_userIdTouserInput[] | postUncheckedCreateWithoutUser_post_userIdTouserInput[]
    connectOrCreate?: postCreateOrConnectWithoutUser_post_userIdTouserInput | postCreateOrConnectWithoutUser_post_userIdTouserInput[]
    upsert?: postUpsertWithWhereUniqueWithoutUser_post_userIdTouserInput | postUpsertWithWhereUniqueWithoutUser_post_userIdTouserInput[]
    createMany?: postCreateManyUser_post_userIdTouserInputEnvelope
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutUser_post_userIdTouserInput | postUpdateWithWhereUniqueWithoutUser_post_userIdTouserInput[]
    updateMany?: postUpdateManyWithWhereWithoutUser_post_userIdTouserInput | postUpdateManyWithWhereWithoutUser_post_userIdTouserInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
  }

  export type shareUpdateManyWithoutUserNestedInput = {
    create?: XOR<shareCreateWithoutUserInput, shareUncheckedCreateWithoutUserInput> | shareCreateWithoutUserInput[] | shareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shareCreateOrConnectWithoutUserInput | shareCreateOrConnectWithoutUserInput[]
    upsert?: shareUpsertWithWhereUniqueWithoutUserInput | shareUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: shareCreateManyUserInputEnvelope
    set?: shareWhereUniqueInput | shareWhereUniqueInput[]
    disconnect?: shareWhereUniqueInput | shareWhereUniqueInput[]
    delete?: shareWhereUniqueInput | shareWhereUniqueInput[]
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[]
    update?: shareUpdateWithWhereUniqueWithoutUserInput | shareUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: shareUpdateManyWithWhereWithoutUserInput | shareUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: shareScalarWhereInput | shareScalarWhereInput[]
  }

  export type postUpdateManyWithoutUser_savedpostsNestedInput = {
    create?: XOR<postCreateWithoutUser_savedpostsInput, postUncheckedCreateWithoutUser_savedpostsInput> | postCreateWithoutUser_savedpostsInput[] | postUncheckedCreateWithoutUser_savedpostsInput[]
    connectOrCreate?: postCreateOrConnectWithoutUser_savedpostsInput | postCreateOrConnectWithoutUser_savedpostsInput[]
    upsert?: postUpsertWithWhereUniqueWithoutUser_savedpostsInput | postUpsertWithWhereUniqueWithoutUser_savedpostsInput[]
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutUser_savedpostsInput | postUpdateWithWhereUniqueWithoutUser_savedpostsInput[]
    updateMany?: postUpdateManyWithWhereWithoutUser_savedpostsInput | postUpdateManyWithWhereWithoutUser_savedpostsInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
  }

  export type conversationUpdateManyWithoutUser1NestedInput = {
    create?: XOR<conversationCreateWithoutUser1Input, conversationUncheckedCreateWithoutUser1Input> | conversationCreateWithoutUser1Input[] | conversationUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: conversationCreateOrConnectWithoutUser1Input | conversationCreateOrConnectWithoutUser1Input[]
    upsert?: conversationUpsertWithWhereUniqueWithoutUser1Input | conversationUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: conversationCreateManyUser1InputEnvelope
    set?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    disconnect?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    delete?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    connect?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    update?: conversationUpdateWithWhereUniqueWithoutUser1Input | conversationUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: conversationUpdateManyWithWhereWithoutUser1Input | conversationUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: conversationScalarWhereInput | conversationScalarWhereInput[]
  }

  export type conversationUpdateManyWithoutUser2NestedInput = {
    create?: XOR<conversationCreateWithoutUser2Input, conversationUncheckedCreateWithoutUser2Input> | conversationCreateWithoutUser2Input[] | conversationUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: conversationCreateOrConnectWithoutUser2Input | conversationCreateOrConnectWithoutUser2Input[]
    upsert?: conversationUpsertWithWhereUniqueWithoutUser2Input | conversationUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: conversationCreateManyUser2InputEnvelope
    set?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    disconnect?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    delete?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    connect?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    update?: conversationUpdateWithWhereUniqueWithoutUser2Input | conversationUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: conversationUpdateManyWithWhereWithoutUser2Input | conversationUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: conversationScalarWhereInput | conversationScalarWhereInput[]
  }

  export type commentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutUserInput | commentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutUserInput | commentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: commentUpdateManyWithWhereWithoutUserInput | commentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type followUncheckedUpdateManyWithoutUser_follow_followerIdTouserNestedInput = {
    create?: XOR<followCreateWithoutUser_follow_followerIdTouserInput, followUncheckedCreateWithoutUser_follow_followerIdTouserInput> | followCreateWithoutUser_follow_followerIdTouserInput[] | followUncheckedCreateWithoutUser_follow_followerIdTouserInput[]
    connectOrCreate?: followCreateOrConnectWithoutUser_follow_followerIdTouserInput | followCreateOrConnectWithoutUser_follow_followerIdTouserInput[]
    upsert?: followUpsertWithWhereUniqueWithoutUser_follow_followerIdTouserInput | followUpsertWithWhereUniqueWithoutUser_follow_followerIdTouserInput[]
    createMany?: followCreateManyUser_follow_followerIdTouserInputEnvelope
    set?: followWhereUniqueInput | followWhereUniqueInput[]
    disconnect?: followWhereUniqueInput | followWhereUniqueInput[]
    delete?: followWhereUniqueInput | followWhereUniqueInput[]
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
    update?: followUpdateWithWhereUniqueWithoutUser_follow_followerIdTouserInput | followUpdateWithWhereUniqueWithoutUser_follow_followerIdTouserInput[]
    updateMany?: followUpdateManyWithWhereWithoutUser_follow_followerIdTouserInput | followUpdateManyWithWhereWithoutUser_follow_followerIdTouserInput[]
    deleteMany?: followScalarWhereInput | followScalarWhereInput[]
  }

  export type followUncheckedUpdateManyWithoutUser_follow_followingIdTouserNestedInput = {
    create?: XOR<followCreateWithoutUser_follow_followingIdTouserInput, followUncheckedCreateWithoutUser_follow_followingIdTouserInput> | followCreateWithoutUser_follow_followingIdTouserInput[] | followUncheckedCreateWithoutUser_follow_followingIdTouserInput[]
    connectOrCreate?: followCreateOrConnectWithoutUser_follow_followingIdTouserInput | followCreateOrConnectWithoutUser_follow_followingIdTouserInput[]
    upsert?: followUpsertWithWhereUniqueWithoutUser_follow_followingIdTouserInput | followUpsertWithWhereUniqueWithoutUser_follow_followingIdTouserInput[]
    createMany?: followCreateManyUser_follow_followingIdTouserInputEnvelope
    set?: followWhereUniqueInput | followWhereUniqueInput[]
    disconnect?: followWhereUniqueInput | followWhereUniqueInput[]
    delete?: followWhereUniqueInput | followWhereUniqueInput[]
    connect?: followWhereUniqueInput | followWhereUniqueInput[]
    update?: followUpdateWithWhereUniqueWithoutUser_follow_followingIdTouserInput | followUpdateWithWhereUniqueWithoutUser_follow_followingIdTouserInput[]
    updateMany?: followUpdateManyWithWhereWithoutUser_follow_followingIdTouserInput | followUpdateManyWithWhereWithoutUser_follow_followingIdTouserInput[]
    deleteMany?: followScalarWhereInput | followScalarWhereInput[]
  }

  export type likeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput> | likeCreateWithoutUserInput[] | likeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[]
    upsert?: likeUpsertWithWhereUniqueWithoutUserInput | likeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: likeCreateManyUserInputEnvelope
    set?: likeWhereUniqueInput | likeWhereUniqueInput[]
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[]
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    update?: likeUpdateWithWhereUniqueWithoutUserInput | likeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: likeUpdateManyWithWhereWithoutUserInput | likeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[]
  }

  export type messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserNestedInput = {
    create?: XOR<messageCreateWithoutUser_message_recipientIdTouserInput, messageUncheckedCreateWithoutUser_message_recipientIdTouserInput> | messageCreateWithoutUser_message_recipientIdTouserInput[] | messageUncheckedCreateWithoutUser_message_recipientIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_recipientIdTouserInput | messageCreateOrConnectWithoutUser_message_recipientIdTouserInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutUser_message_recipientIdTouserInput | messageUpsertWithWhereUniqueWithoutUser_message_recipientIdTouserInput[]
    createMany?: messageCreateManyUser_message_recipientIdTouserInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutUser_message_recipientIdTouserInput | messageUpdateWithWhereUniqueWithoutUser_message_recipientIdTouserInput[]
    updateMany?: messageUpdateManyWithWhereWithoutUser_message_recipientIdTouserInput | messageUpdateManyWithWhereWithoutUser_message_recipientIdTouserInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput = {
    create?: XOR<messageCreateWithoutUser_message_senderIdTouserInput, messageUncheckedCreateWithoutUser_message_senderIdTouserInput> | messageCreateWithoutUser_message_senderIdTouserInput[] | messageUncheckedCreateWithoutUser_message_senderIdTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_senderIdTouserInput | messageCreateOrConnectWithoutUser_message_senderIdTouserInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutUser_message_senderIdTouserInput | messageUpsertWithWhereUniqueWithoutUser_message_senderIdTouserInput[]
    createMany?: messageCreateManyUser_message_senderIdTouserInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutUser_message_senderIdTouserInput | messageUpdateWithWhereUniqueWithoutUser_message_senderIdTouserInput[]
    updateMany?: messageUpdateManyWithWhereWithoutUser_message_senderIdTouserInput | messageUpdateManyWithWhereWithoutUser_message_senderIdTouserInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput = {
    create?: XOR<notificationCreateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput> | notificationCreateWithoutUser_notification_recipientIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput | notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUser_notification_recipientIdTouserInput | notificationUpsertWithWhereUniqueWithoutUser_notification_recipientIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_recipientIdTouserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUser_notification_recipientIdTouserInput | notificationUpdateWithWhereUniqueWithoutUser_notification_recipientIdTouserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUser_notification_recipientIdTouserInput | notificationUpdateManyWithWhereWithoutUser_notification_recipientIdTouserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput = {
    create?: XOR<notificationCreateWithoutUser_notification_senderIdTouserInput, notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput> | notificationCreateWithoutUser_notification_senderIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput | notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUser_notification_senderIdTouserInput | notificationUpsertWithWhereUniqueWithoutUser_notification_senderIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_senderIdTouserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUser_notification_senderIdTouserInput | notificationUpdateWithWhereUniqueWithoutUser_notification_senderIdTouserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUser_notification_senderIdTouserInput | notificationUpdateManyWithWhereWithoutUser_notification_senderIdTouserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type postUncheckedUpdateManyWithoutUser_post_userIdTouserNestedInput = {
    create?: XOR<postCreateWithoutUser_post_userIdTouserInput, postUncheckedCreateWithoutUser_post_userIdTouserInput> | postCreateWithoutUser_post_userIdTouserInput[] | postUncheckedCreateWithoutUser_post_userIdTouserInput[]
    connectOrCreate?: postCreateOrConnectWithoutUser_post_userIdTouserInput | postCreateOrConnectWithoutUser_post_userIdTouserInput[]
    upsert?: postUpsertWithWhereUniqueWithoutUser_post_userIdTouserInput | postUpsertWithWhereUniqueWithoutUser_post_userIdTouserInput[]
    createMany?: postCreateManyUser_post_userIdTouserInputEnvelope
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutUser_post_userIdTouserInput | postUpdateWithWhereUniqueWithoutUser_post_userIdTouserInput[]
    updateMany?: postUpdateManyWithWhereWithoutUser_post_userIdTouserInput | postUpdateManyWithWhereWithoutUser_post_userIdTouserInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
  }

  export type shareUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<shareCreateWithoutUserInput, shareUncheckedCreateWithoutUserInput> | shareCreateWithoutUserInput[] | shareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: shareCreateOrConnectWithoutUserInput | shareCreateOrConnectWithoutUserInput[]
    upsert?: shareUpsertWithWhereUniqueWithoutUserInput | shareUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: shareCreateManyUserInputEnvelope
    set?: shareWhereUniqueInput | shareWhereUniqueInput[]
    disconnect?: shareWhereUniqueInput | shareWhereUniqueInput[]
    delete?: shareWhereUniqueInput | shareWhereUniqueInput[]
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[]
    update?: shareUpdateWithWhereUniqueWithoutUserInput | shareUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: shareUpdateManyWithWhereWithoutUserInput | shareUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: shareScalarWhereInput | shareScalarWhereInput[]
  }

  export type postUncheckedUpdateManyWithoutUser_savedpostsNestedInput = {
    create?: XOR<postCreateWithoutUser_savedpostsInput, postUncheckedCreateWithoutUser_savedpostsInput> | postCreateWithoutUser_savedpostsInput[] | postUncheckedCreateWithoutUser_savedpostsInput[]
    connectOrCreate?: postCreateOrConnectWithoutUser_savedpostsInput | postCreateOrConnectWithoutUser_savedpostsInput[]
    upsert?: postUpsertWithWhereUniqueWithoutUser_savedpostsInput | postUpsertWithWhereUniqueWithoutUser_savedpostsInput[]
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutUser_savedpostsInput | postUpdateWithWhereUniqueWithoutUser_savedpostsInput[]
    updateMany?: postUpdateManyWithWhereWithoutUser_savedpostsInput | postUpdateManyWithWhereWithoutUser_savedpostsInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
  }

  export type conversationUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<conversationCreateWithoutUser1Input, conversationUncheckedCreateWithoutUser1Input> | conversationCreateWithoutUser1Input[] | conversationUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: conversationCreateOrConnectWithoutUser1Input | conversationCreateOrConnectWithoutUser1Input[]
    upsert?: conversationUpsertWithWhereUniqueWithoutUser1Input | conversationUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: conversationCreateManyUser1InputEnvelope
    set?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    disconnect?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    delete?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    connect?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    update?: conversationUpdateWithWhereUniqueWithoutUser1Input | conversationUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: conversationUpdateManyWithWhereWithoutUser1Input | conversationUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: conversationScalarWhereInput | conversationScalarWhereInput[]
  }

  export type conversationUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<conversationCreateWithoutUser2Input, conversationUncheckedCreateWithoutUser2Input> | conversationCreateWithoutUser2Input[] | conversationUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: conversationCreateOrConnectWithoutUser2Input | conversationCreateOrConnectWithoutUser2Input[]
    upsert?: conversationUpsertWithWhereUniqueWithoutUser2Input | conversationUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: conversationCreateManyUser2InputEnvelope
    set?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    disconnect?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    delete?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    connect?: conversationWhereUniqueInput | conversationWhereUniqueInput[]
    update?: conversationUpdateWithWhereUniqueWithoutUser2Input | conversationUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: conversationUpdateManyWithWhereWithoutUser2Input | conversationUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: conversationScalarWhereInput | conversationScalarWhereInput[]
  }

  export type postCreateNestedOneWithoutLikeInput = {
    create?: XOR<postCreateWithoutLikeInput, postUncheckedCreateWithoutLikeInput>
    connectOrCreate?: postCreateOrConnectWithoutLikeInput
    connect?: postWhereUniqueInput
  }

  export type userCreateNestedOneWithoutLikeInput = {
    create?: XOR<userCreateWithoutLikeInput, userUncheckedCreateWithoutLikeInput>
    connectOrCreate?: userCreateOrConnectWithoutLikeInput
    connect?: userWhereUniqueInput
  }

  export type postUpdateOneRequiredWithoutLikeNestedInput = {
    create?: XOR<postCreateWithoutLikeInput, postUncheckedCreateWithoutLikeInput>
    connectOrCreate?: postCreateOrConnectWithoutLikeInput
    upsert?: postUpsertWithoutLikeInput
    connect?: postWhereUniqueInput
    update?: XOR<XOR<postUpdateToOneWithWhereWithoutLikeInput, postUpdateWithoutLikeInput>, postUncheckedUpdateWithoutLikeInput>
  }

  export type userUpdateOneRequiredWithoutLikeNestedInput = {
    create?: XOR<userCreateWithoutLikeInput, userUncheckedCreateWithoutLikeInput>
    connectOrCreate?: userCreateOrConnectWithoutLikeInput
    upsert?: userUpsertWithoutLikeInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLikeInput, userUpdateWithoutLikeInput>, userUncheckedUpdateWithoutLikeInput>
  }

  export type commentCreateNestedManyWithoutPostInput = {
    create?: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput> | commentCreateWithoutPostInput[] | commentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentCreateOrConnectWithoutPostInput | commentCreateOrConnectWithoutPostInput[]
    createMany?: commentCreateManyPostInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type likeCreateNestedManyWithoutPostInput = {
    create?: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput> | likeCreateWithoutPostInput[] | likeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[]
    createMany?: likeCreateManyPostInputEnvelope
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
  }

  export type mediaCreateNestedManyWithoutPost_media_postIdTopostInput = {
    create?: XOR<mediaCreateWithoutPost_media_postIdTopostInput, mediaUncheckedCreateWithoutPost_media_postIdTopostInput> | mediaCreateWithoutPost_media_postIdTopostInput[] | mediaUncheckedCreateWithoutPost_media_postIdTopostInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutPost_media_postIdTopostInput | mediaCreateOrConnectWithoutPost_media_postIdTopostInput[]
    createMany?: mediaCreateManyPost_media_postIdTopostInputEnvelope
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
  }

  export type notificationCreateNestedManyWithoutPostInput = {
    create?: XOR<notificationCreateWithoutPostInput, notificationUncheckedCreateWithoutPostInput> | notificationCreateWithoutPostInput[] | notificationUncheckedCreateWithoutPostInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutPostInput | notificationCreateOrConnectWithoutPostInput[]
    createMany?: notificationCreateManyPostInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutPost_post_userIdTouserInput = {
    create?: XOR<userCreateWithoutPost_post_userIdTouserInput, userUncheckedCreateWithoutPost_post_userIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutPost_post_userIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type shareCreateNestedManyWithoutPostInput = {
    create?: XOR<shareCreateWithoutPostInput, shareUncheckedCreateWithoutPostInput> | shareCreateWithoutPostInput[] | shareUncheckedCreateWithoutPostInput[]
    connectOrCreate?: shareCreateOrConnectWithoutPostInput | shareCreateOrConnectWithoutPostInput[]
    createMany?: shareCreateManyPostInputEnvelope
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[]
  }

  export type mediaCreateNestedManyWithoutPost_postvideosInput = {
    create?: XOR<mediaCreateWithoutPost_postvideosInput, mediaUncheckedCreateWithoutPost_postvideosInput> | mediaCreateWithoutPost_postvideosInput[] | mediaUncheckedCreateWithoutPost_postvideosInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutPost_postvideosInput | mediaCreateOrConnectWithoutPost_postvideosInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
  }

  export type userCreateNestedManyWithoutPost_savedpostsInput = {
    create?: XOR<userCreateWithoutPost_savedpostsInput, userUncheckedCreateWithoutPost_savedpostsInput> | userCreateWithoutPost_savedpostsInput[] | userUncheckedCreateWithoutPost_savedpostsInput[]
    connectOrCreate?: userCreateOrConnectWithoutPost_savedpostsInput | userCreateOrConnectWithoutPost_savedpostsInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type commentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput> | commentCreateWithoutPostInput[] | commentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentCreateOrConnectWithoutPostInput | commentCreateOrConnectWithoutPostInput[]
    createMany?: commentCreateManyPostInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type likeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput> | likeCreateWithoutPostInput[] | likeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[]
    createMany?: likeCreateManyPostInputEnvelope
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
  }

  export type mediaUncheckedCreateNestedManyWithoutPost_media_postIdTopostInput = {
    create?: XOR<mediaCreateWithoutPost_media_postIdTopostInput, mediaUncheckedCreateWithoutPost_media_postIdTopostInput> | mediaCreateWithoutPost_media_postIdTopostInput[] | mediaUncheckedCreateWithoutPost_media_postIdTopostInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutPost_media_postIdTopostInput | mediaCreateOrConnectWithoutPost_media_postIdTopostInput[]
    createMany?: mediaCreateManyPost_media_postIdTopostInputEnvelope
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
  }

  export type notificationUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<notificationCreateWithoutPostInput, notificationUncheckedCreateWithoutPostInput> | notificationCreateWithoutPostInput[] | notificationUncheckedCreateWithoutPostInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutPostInput | notificationCreateOrConnectWithoutPostInput[]
    createMany?: notificationCreateManyPostInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type shareUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<shareCreateWithoutPostInput, shareUncheckedCreateWithoutPostInput> | shareCreateWithoutPostInput[] | shareUncheckedCreateWithoutPostInput[]
    connectOrCreate?: shareCreateOrConnectWithoutPostInput | shareCreateOrConnectWithoutPostInput[]
    createMany?: shareCreateManyPostInputEnvelope
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[]
  }

  export type mediaUncheckedCreateNestedManyWithoutPost_postvideosInput = {
    create?: XOR<mediaCreateWithoutPost_postvideosInput, mediaUncheckedCreateWithoutPost_postvideosInput> | mediaCreateWithoutPost_postvideosInput[] | mediaUncheckedCreateWithoutPost_postvideosInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutPost_postvideosInput | mediaCreateOrConnectWithoutPost_postvideosInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutPost_savedpostsInput = {
    create?: XOR<userCreateWithoutPost_savedpostsInput, userUncheckedCreateWithoutPost_savedpostsInput> | userCreateWithoutPost_savedpostsInput[] | userUncheckedCreateWithoutPost_savedpostsInput[]
    connectOrCreate?: userCreateOrConnectWithoutPost_savedpostsInput | userCreateOrConnectWithoutPost_savedpostsInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type commentUpdateManyWithoutPostNestedInput = {
    create?: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput> | commentCreateWithoutPostInput[] | commentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentCreateOrConnectWithoutPostInput | commentCreateOrConnectWithoutPostInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutPostInput | commentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: commentCreateManyPostInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutPostInput | commentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: commentUpdateManyWithWhereWithoutPostInput | commentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type likeUpdateManyWithoutPostNestedInput = {
    create?: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput> | likeCreateWithoutPostInput[] | likeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[]
    upsert?: likeUpsertWithWhereUniqueWithoutPostInput | likeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: likeCreateManyPostInputEnvelope
    set?: likeWhereUniqueInput | likeWhereUniqueInput[]
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[]
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    update?: likeUpdateWithWhereUniqueWithoutPostInput | likeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: likeUpdateManyWithWhereWithoutPostInput | likeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[]
  }

  export type mediaUpdateManyWithoutPost_media_postIdTopostNestedInput = {
    create?: XOR<mediaCreateWithoutPost_media_postIdTopostInput, mediaUncheckedCreateWithoutPost_media_postIdTopostInput> | mediaCreateWithoutPost_media_postIdTopostInput[] | mediaUncheckedCreateWithoutPost_media_postIdTopostInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutPost_media_postIdTopostInput | mediaCreateOrConnectWithoutPost_media_postIdTopostInput[]
    upsert?: mediaUpsertWithWhereUniqueWithoutPost_media_postIdTopostInput | mediaUpsertWithWhereUniqueWithoutPost_media_postIdTopostInput[]
    createMany?: mediaCreateManyPost_media_postIdTopostInputEnvelope
    set?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    disconnect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    delete?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    update?: mediaUpdateWithWhereUniqueWithoutPost_media_postIdTopostInput | mediaUpdateWithWhereUniqueWithoutPost_media_postIdTopostInput[]
    updateMany?: mediaUpdateManyWithWhereWithoutPost_media_postIdTopostInput | mediaUpdateManyWithWhereWithoutPost_media_postIdTopostInput[]
    deleteMany?: mediaScalarWhereInput | mediaScalarWhereInput[]
  }

  export type notificationUpdateManyWithoutPostNestedInput = {
    create?: XOR<notificationCreateWithoutPostInput, notificationUncheckedCreateWithoutPostInput> | notificationCreateWithoutPostInput[] | notificationUncheckedCreateWithoutPostInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutPostInput | notificationCreateOrConnectWithoutPostInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutPostInput | notificationUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: notificationCreateManyPostInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutPostInput | notificationUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutPostInput | notificationUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutPost_post_userIdTouserNestedInput = {
    create?: XOR<userCreateWithoutPost_post_userIdTouserInput, userUncheckedCreateWithoutPost_post_userIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutPost_post_userIdTouserInput
    upsert?: userUpsertWithoutPost_post_userIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPost_post_userIdTouserInput, userUpdateWithoutPost_post_userIdTouserInput>, userUncheckedUpdateWithoutPost_post_userIdTouserInput>
  }

  export type shareUpdateManyWithoutPostNestedInput = {
    create?: XOR<shareCreateWithoutPostInput, shareUncheckedCreateWithoutPostInput> | shareCreateWithoutPostInput[] | shareUncheckedCreateWithoutPostInput[]
    connectOrCreate?: shareCreateOrConnectWithoutPostInput | shareCreateOrConnectWithoutPostInput[]
    upsert?: shareUpsertWithWhereUniqueWithoutPostInput | shareUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: shareCreateManyPostInputEnvelope
    set?: shareWhereUniqueInput | shareWhereUniqueInput[]
    disconnect?: shareWhereUniqueInput | shareWhereUniqueInput[]
    delete?: shareWhereUniqueInput | shareWhereUniqueInput[]
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[]
    update?: shareUpdateWithWhereUniqueWithoutPostInput | shareUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: shareUpdateManyWithWhereWithoutPostInput | shareUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: shareScalarWhereInput | shareScalarWhereInput[]
  }

  export type mediaUpdateManyWithoutPost_postvideosNestedInput = {
    create?: XOR<mediaCreateWithoutPost_postvideosInput, mediaUncheckedCreateWithoutPost_postvideosInput> | mediaCreateWithoutPost_postvideosInput[] | mediaUncheckedCreateWithoutPost_postvideosInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutPost_postvideosInput | mediaCreateOrConnectWithoutPost_postvideosInput[]
    upsert?: mediaUpsertWithWhereUniqueWithoutPost_postvideosInput | mediaUpsertWithWhereUniqueWithoutPost_postvideosInput[]
    set?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    disconnect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    delete?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    update?: mediaUpdateWithWhereUniqueWithoutPost_postvideosInput | mediaUpdateWithWhereUniqueWithoutPost_postvideosInput[]
    updateMany?: mediaUpdateManyWithWhereWithoutPost_postvideosInput | mediaUpdateManyWithWhereWithoutPost_postvideosInput[]
    deleteMany?: mediaScalarWhereInput | mediaScalarWhereInput[]
  }

  export type userUpdateManyWithoutPost_savedpostsNestedInput = {
    create?: XOR<userCreateWithoutPost_savedpostsInput, userUncheckedCreateWithoutPost_savedpostsInput> | userCreateWithoutPost_savedpostsInput[] | userUncheckedCreateWithoutPost_savedpostsInput[]
    connectOrCreate?: userCreateOrConnectWithoutPost_savedpostsInput | userCreateOrConnectWithoutPost_savedpostsInput[]
    upsert?: userUpsertWithWhereUniqueWithoutPost_savedpostsInput | userUpsertWithWhereUniqueWithoutPost_savedpostsInput[]
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutPost_savedpostsInput | userUpdateWithWhereUniqueWithoutPost_savedpostsInput[]
    updateMany?: userUpdateManyWithWhereWithoutPost_savedpostsInput | userUpdateManyWithWhereWithoutPost_savedpostsInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type commentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput> | commentCreateWithoutPostInput[] | commentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentCreateOrConnectWithoutPostInput | commentCreateOrConnectWithoutPostInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutPostInput | commentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: commentCreateManyPostInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutPostInput | commentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: commentUpdateManyWithWhereWithoutPostInput | commentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type likeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput> | likeCreateWithoutPostInput[] | likeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[]
    upsert?: likeUpsertWithWhereUniqueWithoutPostInput | likeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: likeCreateManyPostInputEnvelope
    set?: likeWhereUniqueInput | likeWhereUniqueInput[]
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[]
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[]
    update?: likeUpdateWithWhereUniqueWithoutPostInput | likeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: likeUpdateManyWithWhereWithoutPostInput | likeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[]
  }

  export type mediaUncheckedUpdateManyWithoutPost_media_postIdTopostNestedInput = {
    create?: XOR<mediaCreateWithoutPost_media_postIdTopostInput, mediaUncheckedCreateWithoutPost_media_postIdTopostInput> | mediaCreateWithoutPost_media_postIdTopostInput[] | mediaUncheckedCreateWithoutPost_media_postIdTopostInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutPost_media_postIdTopostInput | mediaCreateOrConnectWithoutPost_media_postIdTopostInput[]
    upsert?: mediaUpsertWithWhereUniqueWithoutPost_media_postIdTopostInput | mediaUpsertWithWhereUniqueWithoutPost_media_postIdTopostInput[]
    createMany?: mediaCreateManyPost_media_postIdTopostInputEnvelope
    set?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    disconnect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    delete?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    update?: mediaUpdateWithWhereUniqueWithoutPost_media_postIdTopostInput | mediaUpdateWithWhereUniqueWithoutPost_media_postIdTopostInput[]
    updateMany?: mediaUpdateManyWithWhereWithoutPost_media_postIdTopostInput | mediaUpdateManyWithWhereWithoutPost_media_postIdTopostInput[]
    deleteMany?: mediaScalarWhereInput | mediaScalarWhereInput[]
  }

  export type notificationUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<notificationCreateWithoutPostInput, notificationUncheckedCreateWithoutPostInput> | notificationCreateWithoutPostInput[] | notificationUncheckedCreateWithoutPostInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutPostInput | notificationCreateOrConnectWithoutPostInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutPostInput | notificationUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: notificationCreateManyPostInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutPostInput | notificationUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutPostInput | notificationUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type shareUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<shareCreateWithoutPostInput, shareUncheckedCreateWithoutPostInput> | shareCreateWithoutPostInput[] | shareUncheckedCreateWithoutPostInput[]
    connectOrCreate?: shareCreateOrConnectWithoutPostInput | shareCreateOrConnectWithoutPostInput[]
    upsert?: shareUpsertWithWhereUniqueWithoutPostInput | shareUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: shareCreateManyPostInputEnvelope
    set?: shareWhereUniqueInput | shareWhereUniqueInput[]
    disconnect?: shareWhereUniqueInput | shareWhereUniqueInput[]
    delete?: shareWhereUniqueInput | shareWhereUniqueInput[]
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[]
    update?: shareUpdateWithWhereUniqueWithoutPostInput | shareUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: shareUpdateManyWithWhereWithoutPostInput | shareUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: shareScalarWhereInput | shareScalarWhereInput[]
  }

  export type mediaUncheckedUpdateManyWithoutPost_postvideosNestedInput = {
    create?: XOR<mediaCreateWithoutPost_postvideosInput, mediaUncheckedCreateWithoutPost_postvideosInput> | mediaCreateWithoutPost_postvideosInput[] | mediaUncheckedCreateWithoutPost_postvideosInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutPost_postvideosInput | mediaCreateOrConnectWithoutPost_postvideosInput[]
    upsert?: mediaUpsertWithWhereUniqueWithoutPost_postvideosInput | mediaUpsertWithWhereUniqueWithoutPost_postvideosInput[]
    set?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    disconnect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    delete?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    update?: mediaUpdateWithWhereUniqueWithoutPost_postvideosInput | mediaUpdateWithWhereUniqueWithoutPost_postvideosInput[]
    updateMany?: mediaUpdateManyWithWhereWithoutPost_postvideosInput | mediaUpdateManyWithWhereWithoutPost_postvideosInput[]
    deleteMany?: mediaScalarWhereInput | mediaScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutPost_savedpostsNestedInput = {
    create?: XOR<userCreateWithoutPost_savedpostsInput, userUncheckedCreateWithoutPost_savedpostsInput> | userCreateWithoutPost_savedpostsInput[] | userUncheckedCreateWithoutPost_savedpostsInput[]
    connectOrCreate?: userCreateOrConnectWithoutPost_savedpostsInput | userCreateOrConnectWithoutPost_savedpostsInput[]
    upsert?: userUpsertWithWhereUniqueWithoutPost_savedpostsInput | userUpsertWithWhereUniqueWithoutPost_savedpostsInput[]
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutPost_savedpostsInput | userUpdateWithWhereUniqueWithoutPost_savedpostsInput[]
    updateMany?: userUpdateManyWithWhereWithoutPost_savedpostsInput | userUpdateManyWithWhereWithoutPost_savedpostsInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type postCreateNestedOneWithoutMedia_media_postIdTopostInput = {
    create?: XOR<postCreateWithoutMedia_media_postIdTopostInput, postUncheckedCreateWithoutMedia_media_postIdTopostInput>
    connectOrCreate?: postCreateOrConnectWithoutMedia_media_postIdTopostInput
    connect?: postWhereUniqueInput
  }

  export type postCreateNestedManyWithoutMedia_postvideosInput = {
    create?: XOR<postCreateWithoutMedia_postvideosInput, postUncheckedCreateWithoutMedia_postvideosInput> | postCreateWithoutMedia_postvideosInput[] | postUncheckedCreateWithoutMedia_postvideosInput[]
    connectOrCreate?: postCreateOrConnectWithoutMedia_postvideosInput | postCreateOrConnectWithoutMedia_postvideosInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
  }

  export type postUncheckedCreateNestedManyWithoutMedia_postvideosInput = {
    create?: XOR<postCreateWithoutMedia_postvideosInput, postUncheckedCreateWithoutMedia_postvideosInput> | postCreateWithoutMedia_postvideosInput[] | postUncheckedCreateWithoutMedia_postvideosInput[]
    connectOrCreate?: postCreateOrConnectWithoutMedia_postvideosInput | postCreateOrConnectWithoutMedia_postvideosInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
  }

  export type postUpdateOneRequiredWithoutMedia_media_postIdTopostNestedInput = {
    create?: XOR<postCreateWithoutMedia_media_postIdTopostInput, postUncheckedCreateWithoutMedia_media_postIdTopostInput>
    connectOrCreate?: postCreateOrConnectWithoutMedia_media_postIdTopostInput
    upsert?: postUpsertWithoutMedia_media_postIdTopostInput
    connect?: postWhereUniqueInput
    update?: XOR<XOR<postUpdateToOneWithWhereWithoutMedia_media_postIdTopostInput, postUpdateWithoutMedia_media_postIdTopostInput>, postUncheckedUpdateWithoutMedia_media_postIdTopostInput>
  }

  export type postUpdateManyWithoutMedia_postvideosNestedInput = {
    create?: XOR<postCreateWithoutMedia_postvideosInput, postUncheckedCreateWithoutMedia_postvideosInput> | postCreateWithoutMedia_postvideosInput[] | postUncheckedCreateWithoutMedia_postvideosInput[]
    connectOrCreate?: postCreateOrConnectWithoutMedia_postvideosInput | postCreateOrConnectWithoutMedia_postvideosInput[]
    upsert?: postUpsertWithWhereUniqueWithoutMedia_postvideosInput | postUpsertWithWhereUniqueWithoutMedia_postvideosInput[]
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutMedia_postvideosInput | postUpdateWithWhereUniqueWithoutMedia_postvideosInput[]
    updateMany?: postUpdateManyWithWhereWithoutMedia_postvideosInput | postUpdateManyWithWhereWithoutMedia_postvideosInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
  }

  export type postUncheckedUpdateManyWithoutMedia_postvideosNestedInput = {
    create?: XOR<postCreateWithoutMedia_postvideosInput, postUncheckedCreateWithoutMedia_postvideosInput> | postCreateWithoutMedia_postvideosInput[] | postUncheckedCreateWithoutMedia_postvideosInput[]
    connectOrCreate?: postCreateOrConnectWithoutMedia_postvideosInput | postCreateOrConnectWithoutMedia_postvideosInput[]
    upsert?: postUpsertWithWhereUniqueWithoutMedia_postvideosInput | postUpsertWithWhereUniqueWithoutMedia_postvideosInput[]
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutMedia_postvideosInput | postUpdateWithWhereUniqueWithoutMedia_postvideosInput[]
    updateMany?: postUpdateManyWithWhereWithoutMedia_postvideosInput | postUpdateManyWithWhereWithoutMedia_postvideosInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutConversationAsUser1Input = {
    create?: XOR<userCreateWithoutConversationAsUser1Input, userUncheckedCreateWithoutConversationAsUser1Input>
    connectOrCreate?: userCreateOrConnectWithoutConversationAsUser1Input
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutConversationAsUser2Input = {
    create?: XOR<userCreateWithoutConversationAsUser2Input, userUncheckedCreateWithoutConversationAsUser2Input>
    connectOrCreate?: userCreateOrConnectWithoutConversationAsUser2Input
    connect?: userWhereUniqueInput
  }

  export type messageCreateNestedManyWithoutConversationInput = {
    create?: XOR<messageCreateWithoutConversationInput, messageUncheckedCreateWithoutConversationInput> | messageCreateWithoutConversationInput[] | messageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messageCreateOrConnectWithoutConversationInput | messageCreateOrConnectWithoutConversationInput[]
    createMany?: messageCreateManyConversationInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<messageCreateWithoutConversationInput, messageUncheckedCreateWithoutConversationInput> | messageCreateWithoutConversationInput[] | messageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messageCreateOrConnectWithoutConversationInput | messageCreateOrConnectWithoutConversationInput[]
    createMany?: messageCreateManyConversationInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutConversationAsUser1NestedInput = {
    create?: XOR<userCreateWithoutConversationAsUser1Input, userUncheckedCreateWithoutConversationAsUser1Input>
    connectOrCreate?: userCreateOrConnectWithoutConversationAsUser1Input
    upsert?: userUpsertWithoutConversationAsUser1Input
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutConversationAsUser1Input, userUpdateWithoutConversationAsUser1Input>, userUncheckedUpdateWithoutConversationAsUser1Input>
  }

  export type userUpdateOneRequiredWithoutConversationAsUser2NestedInput = {
    create?: XOR<userCreateWithoutConversationAsUser2Input, userUncheckedCreateWithoutConversationAsUser2Input>
    connectOrCreate?: userCreateOrConnectWithoutConversationAsUser2Input
    upsert?: userUpsertWithoutConversationAsUser2Input
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutConversationAsUser2Input, userUpdateWithoutConversationAsUser2Input>, userUncheckedUpdateWithoutConversationAsUser2Input>
  }

  export type messageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<messageCreateWithoutConversationInput, messageUncheckedCreateWithoutConversationInput> | messageCreateWithoutConversationInput[] | messageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messageCreateOrConnectWithoutConversationInput | messageCreateOrConnectWithoutConversationInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutConversationInput | messageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: messageCreateManyConversationInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutConversationInput | messageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: messageUpdateManyWithWhereWithoutConversationInput | messageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type messageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<messageCreateWithoutConversationInput, messageUncheckedCreateWithoutConversationInput> | messageCreateWithoutConversationInput[] | messageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messageCreateOrConnectWithoutConversationInput | messageCreateOrConnectWithoutConversationInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutConversationInput | messageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: messageCreateManyConversationInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutConversationInput | messageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: messageUpdateManyWithWhereWithoutConversationInput | messageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutMessage_message_senderIdTouserInput = {
    create?: XOR<userCreateWithoutMessage_message_senderIdTouserInput, userUncheckedCreateWithoutMessage_message_senderIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMessage_message_senderIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutMessage_message_recipientIdTouserInput = {
    create?: XOR<userCreateWithoutMessage_message_recipientIdTouserInput, userUncheckedCreateWithoutMessage_message_recipientIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMessage_message_recipientIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type conversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<conversationCreateWithoutMessagesInput, conversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationCreateOrConnectWithoutMessagesInput
    connect?: conversationWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutMessage_message_senderIdTouserNestedInput = {
    create?: XOR<userCreateWithoutMessage_message_senderIdTouserInput, userUncheckedCreateWithoutMessage_message_senderIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMessage_message_senderIdTouserInput
    upsert?: userUpsertWithoutMessage_message_senderIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMessage_message_senderIdTouserInput, userUpdateWithoutMessage_message_senderIdTouserInput>, userUncheckedUpdateWithoutMessage_message_senderIdTouserInput>
  }

  export type userUpdateOneRequiredWithoutMessage_message_recipientIdTouserNestedInput = {
    create?: XOR<userCreateWithoutMessage_message_recipientIdTouserInput, userUncheckedCreateWithoutMessage_message_recipientIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMessage_message_recipientIdTouserInput
    upsert?: userUpsertWithoutMessage_message_recipientIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMessage_message_recipientIdTouserInput, userUpdateWithoutMessage_message_recipientIdTouserInput>, userUncheckedUpdateWithoutMessage_message_recipientIdTouserInput>
  }

  export type conversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<conversationCreateWithoutMessagesInput, conversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationCreateOrConnectWithoutMessagesInput
    upsert?: conversationUpsertWithoutMessagesInput
    connect?: conversationWhereUniqueInput
    update?: XOR<XOR<conversationUpdateToOneWithWhereWithoutMessagesInput, conversationUpdateWithoutMessagesInput>, conversationUncheckedUpdateWithoutMessagesInput>
  }

  export type postCreateNestedOneWithoutNotificationInput = {
    create?: XOR<postCreateWithoutNotificationInput, postUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: postCreateOrConnectWithoutNotificationInput
    connect?: postWhereUniqueInput
  }

  export type userCreateNestedOneWithoutNotification_notification_recipientIdTouserInput = {
    create?: XOR<userCreateWithoutNotification_notification_recipientIdTouserInput, userUncheckedCreateWithoutNotification_notification_recipientIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutNotification_notification_recipientIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutNotification_notification_senderIdTouserInput = {
    create?: XOR<userCreateWithoutNotification_notification_senderIdTouserInput, userUncheckedCreateWithoutNotification_notification_senderIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutNotification_notification_senderIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type postUpdateOneWithoutNotificationNestedInput = {
    create?: XOR<postCreateWithoutNotificationInput, postUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: postCreateOrConnectWithoutNotificationInput
    upsert?: postUpsertWithoutNotificationInput
    disconnect?: postWhereInput | boolean
    delete?: postWhereInput | boolean
    connect?: postWhereUniqueInput
    update?: XOR<XOR<postUpdateToOneWithWhereWithoutNotificationInput, postUpdateWithoutNotificationInput>, postUncheckedUpdateWithoutNotificationInput>
  }

  export type userUpdateOneRequiredWithoutNotification_notification_recipientIdTouserNestedInput = {
    create?: XOR<userCreateWithoutNotification_notification_recipientIdTouserInput, userUncheckedCreateWithoutNotification_notification_recipientIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutNotification_notification_recipientIdTouserInput
    upsert?: userUpsertWithoutNotification_notification_recipientIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutNotification_notification_recipientIdTouserInput, userUpdateWithoutNotification_notification_recipientIdTouserInput>, userUncheckedUpdateWithoutNotification_notification_recipientIdTouserInput>
  }

  export type userUpdateOneRequiredWithoutNotification_notification_senderIdTouserNestedInput = {
    create?: XOR<userCreateWithoutNotification_notification_senderIdTouserInput, userUncheckedCreateWithoutNotification_notification_senderIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutNotification_notification_senderIdTouserInput
    upsert?: userUpsertWithoutNotification_notification_senderIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutNotification_notification_senderIdTouserInput, userUpdateWithoutNotification_notification_senderIdTouserInput>, userUncheckedUpdateWithoutNotification_notification_senderIdTouserInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type postCreateNestedOneWithoutShareInput = {
    create?: XOR<postCreateWithoutShareInput, postUncheckedCreateWithoutShareInput>
    connectOrCreate?: postCreateOrConnectWithoutShareInput
    connect?: postWhereUniqueInput
  }

  export type userCreateNestedOneWithoutShareInput = {
    create?: XOR<userCreateWithoutShareInput, userUncheckedCreateWithoutShareInput>
    connectOrCreate?: userCreateOrConnectWithoutShareInput
    connect?: userWhereUniqueInput
  }

  export type postUpdateOneRequiredWithoutShareNestedInput = {
    create?: XOR<postCreateWithoutShareInput, postUncheckedCreateWithoutShareInput>
    connectOrCreate?: postCreateOrConnectWithoutShareInput
    upsert?: postUpsertWithoutShareInput
    connect?: postWhereUniqueInput
    update?: XOR<XOR<postUpdateToOneWithWhereWithoutShareInput, postUpdateWithoutShareInput>, postUncheckedUpdateWithoutShareInput>
  }

  export type userUpdateOneRequiredWithoutShareNestedInput = {
    create?: XOR<userCreateWithoutShareInput, userUncheckedCreateWithoutShareInput>
    connectOrCreate?: userCreateOrConnectWithoutShareInput
    upsert?: userUpsertWithoutShareInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutShareInput, userUpdateWithoutShareInput>, userUncheckedUpdateWithoutShareInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type postCreateWithoutCommentInput = {
    content: string
    createdAt?: Date | string
    like?: likeCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaCreateNestedManyWithoutPost_media_postIdTopostInput
    notification?: notificationCreateNestedManyWithoutPostInput
    user_post_userIdTouser: userCreateNestedOneWithoutPost_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutPostInput
    media_postvideos?: mediaCreateNestedManyWithoutPost_postvideosInput
    user_savedposts?: userCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postUncheckedCreateWithoutCommentInput = {
    id?: number
    content: string
    createdAt?: Date | string
    userId: number
    like?: likeUncheckedCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaUncheckedCreateNestedManyWithoutPost_media_postIdTopostInput
    notification?: notificationUncheckedCreateNestedManyWithoutPostInput
    share?: shareUncheckedCreateNestedManyWithoutPostInput
    media_postvideos?: mediaUncheckedCreateNestedManyWithoutPost_postvideosInput
    user_savedposts?: userUncheckedCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postCreateOrConnectWithoutCommentInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutCommentInput, postUncheckedCreateWithoutCommentInput>
  }

  export type userCreateWithoutCommentInput = {
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    follow_follow_followerIdTouser?: followCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutUserInput
    post_savedposts?: postCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationCreateNestedManyWithoutUser2Input
  }

  export type userUncheckedCreateWithoutCommentInput = {
    id?: number
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    follow_follow_followerIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postUncheckedCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareUncheckedCreateNestedManyWithoutUserInput
    post_savedposts?: postUncheckedCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationUncheckedCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationUncheckedCreateNestedManyWithoutUser2Input
  }

  export type userCreateOrConnectWithoutCommentInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCommentInput, userUncheckedCreateWithoutCommentInput>
  }

  export type postUpsertWithoutCommentInput = {
    update: XOR<postUpdateWithoutCommentInput, postUncheckedUpdateWithoutCommentInput>
    create: XOR<postCreateWithoutCommentInput, postUncheckedCreateWithoutCommentInput>
    where?: postWhereInput
  }

  export type postUpdateToOneWithWhereWithoutCommentInput = {
    where?: postWhereInput
    data: XOR<postUpdateWithoutCommentInput, postUncheckedUpdateWithoutCommentInput>
  }

  export type postUpdateWithoutCommentInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: likeUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUpdateManyWithoutPost_media_postIdTopostNestedInput
    notification?: notificationUpdateManyWithoutPostNestedInput
    user_post_userIdTouser?: userUpdateOneRequiredWithoutPost_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutPostNestedInput
    media_postvideos?: mediaUpdateManyWithoutPost_postvideosNestedInput
    user_savedposts?: userUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type postUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    like?: likeUncheckedUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUncheckedUpdateManyWithoutPost_media_postIdTopostNestedInput
    notification?: notificationUncheckedUpdateManyWithoutPostNestedInput
    share?: shareUncheckedUpdateManyWithoutPostNestedInput
    media_postvideos?: mediaUncheckedUpdateManyWithoutPost_postvideosNestedInput
    user_savedposts?: userUncheckedUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type userUpsertWithoutCommentInput = {
    update: XOR<userUpdateWithoutCommentInput, userUncheckedUpdateWithoutCommentInput>
    create: XOR<userCreateWithoutCommentInput, userUncheckedCreateWithoutCommentInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCommentInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCommentInput, userUncheckedUpdateWithoutCommentInput>
  }

  export type userUpdateWithoutCommentInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follow_follow_followerIdTouser?: followUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutUserNestedInput
    post_savedposts?: postUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUpdateManyWithoutUser2NestedInput
  }

  export type userUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follow_follow_followerIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUncheckedUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUncheckedUpdateManyWithoutUserNestedInput
    post_savedposts?: postUncheckedUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUncheckedUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type userCreateWithoutFollow_follow_followerIdTouserInput = {
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    follow_follow_followingIdTouser?: followCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutUserInput
    post_savedposts?: postCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationCreateNestedManyWithoutUser2Input
  }

  export type userUncheckedCreateWithoutFollow_follow_followerIdTouserInput = {
    id?: number
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follow_follow_followingIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postUncheckedCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareUncheckedCreateNestedManyWithoutUserInput
    post_savedposts?: postUncheckedCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationUncheckedCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationUncheckedCreateNestedManyWithoutUser2Input
  }

  export type userCreateOrConnectWithoutFollow_follow_followerIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFollow_follow_followerIdTouserInput, userUncheckedCreateWithoutFollow_follow_followerIdTouserInput>
  }

  export type userCreateWithoutFollow_follow_followingIdTouserInput = {
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followCreateNestedManyWithoutUser_follow_followerIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutUserInput
    post_savedposts?: postCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationCreateNestedManyWithoutUser2Input
  }

  export type userUncheckedCreateWithoutFollow_follow_followingIdTouserInput = {
    id?: number
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followerIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postUncheckedCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareUncheckedCreateNestedManyWithoutUserInput
    post_savedposts?: postUncheckedCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationUncheckedCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationUncheckedCreateNestedManyWithoutUser2Input
  }

  export type userCreateOrConnectWithoutFollow_follow_followingIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFollow_follow_followingIdTouserInput, userUncheckedCreateWithoutFollow_follow_followingIdTouserInput>
  }

  export type userUpsertWithoutFollow_follow_followerIdTouserInput = {
    update: XOR<userUpdateWithoutFollow_follow_followerIdTouserInput, userUncheckedUpdateWithoutFollow_follow_followerIdTouserInput>
    create: XOR<userCreateWithoutFollow_follow_followerIdTouserInput, userUncheckedCreateWithoutFollow_follow_followerIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFollow_follow_followerIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFollow_follow_followerIdTouserInput, userUncheckedUpdateWithoutFollow_follow_followerIdTouserInput>
  }

  export type userUpdateWithoutFollow_follow_followerIdTouserInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    follow_follow_followingIdTouser?: followUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutUserNestedInput
    post_savedposts?: postUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUpdateManyWithoutUser2NestedInput
  }

  export type userUncheckedUpdateWithoutFollow_follow_followerIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follow_follow_followingIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUncheckedUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUncheckedUpdateManyWithoutUserNestedInput
    post_savedposts?: postUncheckedUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUncheckedUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type userUpsertWithoutFollow_follow_followingIdTouserInput = {
    update: XOR<userUpdateWithoutFollow_follow_followingIdTouserInput, userUncheckedUpdateWithoutFollow_follow_followingIdTouserInput>
    create: XOR<userCreateWithoutFollow_follow_followingIdTouserInput, userUncheckedCreateWithoutFollow_follow_followingIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFollow_follow_followingIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFollow_follow_followingIdTouserInput, userUncheckedUpdateWithoutFollow_follow_followingIdTouserInput>
  }

  export type userUpdateWithoutFollow_follow_followingIdTouserInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutUserNestedInput
    post_savedposts?: postUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUpdateManyWithoutUser2NestedInput
  }

  export type userUncheckedUpdateWithoutFollow_follow_followingIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUncheckedUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUncheckedUpdateManyWithoutUserNestedInput
    post_savedposts?: postUncheckedUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUncheckedUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type commentCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    post: postCreateNestedOneWithoutCommentInput
  }

  export type commentUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    postId: number
  }

  export type commentCreateOrConnectWithoutUserInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput>
  }

  export type commentCreateManyUserInputEnvelope = {
    data: commentCreateManyUserInput | commentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type followCreateWithoutUser_follow_followerIdTouserInput = {
    createdAt?: Date | string
    user_follow_followingIdTouser: userCreateNestedOneWithoutFollow_follow_followingIdTouserInput
  }

  export type followUncheckedCreateWithoutUser_follow_followerIdTouserInput = {
    id?: number
    followingId: number
    createdAt?: Date | string
  }

  export type followCreateOrConnectWithoutUser_follow_followerIdTouserInput = {
    where: followWhereUniqueInput
    create: XOR<followCreateWithoutUser_follow_followerIdTouserInput, followUncheckedCreateWithoutUser_follow_followerIdTouserInput>
  }

  export type followCreateManyUser_follow_followerIdTouserInputEnvelope = {
    data: followCreateManyUser_follow_followerIdTouserInput | followCreateManyUser_follow_followerIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type followCreateWithoutUser_follow_followingIdTouserInput = {
    createdAt?: Date | string
    user_follow_followerIdTouser: userCreateNestedOneWithoutFollow_follow_followerIdTouserInput
  }

  export type followUncheckedCreateWithoutUser_follow_followingIdTouserInput = {
    id?: number
    followerId: number
    createdAt?: Date | string
  }

  export type followCreateOrConnectWithoutUser_follow_followingIdTouserInput = {
    where: followWhereUniqueInput
    create: XOR<followCreateWithoutUser_follow_followingIdTouserInput, followUncheckedCreateWithoutUser_follow_followingIdTouserInput>
  }

  export type followCreateManyUser_follow_followingIdTouserInputEnvelope = {
    data: followCreateManyUser_follow_followingIdTouserInput | followCreateManyUser_follow_followingIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type likeCreateWithoutUserInput = {
    createdAt?: Date | string
    post: postCreateNestedOneWithoutLikeInput
  }

  export type likeUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    postId: number
  }

  export type likeCreateOrConnectWithoutUserInput = {
    where: likeWhereUniqueInput
    create: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput>
  }

  export type likeCreateManyUserInputEnvelope = {
    data: likeCreateManyUserInput | likeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type messageCreateWithoutUser_message_recipientIdTouserInput = {
    content: string
    createdAt?: Date | string
    user_message_senderIdTouser: userCreateNestedOneWithoutMessage_message_senderIdTouserInput
    conversation: conversationCreateNestedOneWithoutMessagesInput
  }

  export type messageUncheckedCreateWithoutUser_message_recipientIdTouserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    senderId: number
    conversationId: number
  }

  export type messageCreateOrConnectWithoutUser_message_recipientIdTouserInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutUser_message_recipientIdTouserInput, messageUncheckedCreateWithoutUser_message_recipientIdTouserInput>
  }

  export type messageCreateManyUser_message_recipientIdTouserInputEnvelope = {
    data: messageCreateManyUser_message_recipientIdTouserInput | messageCreateManyUser_message_recipientIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type messageCreateWithoutUser_message_senderIdTouserInput = {
    content: string
    createdAt?: Date | string
    user_message_recipientIdTouser: userCreateNestedOneWithoutMessage_message_recipientIdTouserInput
    conversation: conversationCreateNestedOneWithoutMessagesInput
  }

  export type messageUncheckedCreateWithoutUser_message_senderIdTouserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    recipientId: number
    conversationId: number
  }

  export type messageCreateOrConnectWithoutUser_message_senderIdTouserInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutUser_message_senderIdTouserInput, messageUncheckedCreateWithoutUser_message_senderIdTouserInput>
  }

  export type messageCreateManyUser_message_senderIdTouserInputEnvelope = {
    data: messageCreateManyUser_message_senderIdTouserInput | messageCreateManyUser_message_senderIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type notificationCreateWithoutUser_notification_recipientIdTouserInput = {
    type: string
    read?: boolean
    createdAt?: Date | string
    post?: postCreateNestedOneWithoutNotificationInput
    user_notification_senderIdTouser: userCreateNestedOneWithoutNotification_notification_senderIdTouserInput
  }

  export type notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput = {
    id?: number
    type: string
    read?: boolean
    createdAt?: Date | string
    senderId: number
    postId?: number | null
  }

  export type notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput = {
    where: notificationWhereUniqueInput
    create: XOR<notificationCreateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput>
  }

  export type notificationCreateManyUser_notification_recipientIdTouserInputEnvelope = {
    data: notificationCreateManyUser_notification_recipientIdTouserInput | notificationCreateManyUser_notification_recipientIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type notificationCreateWithoutUser_notification_senderIdTouserInput = {
    type: string
    read?: boolean
    createdAt?: Date | string
    post?: postCreateNestedOneWithoutNotificationInput
    user_notification_recipientIdTouser: userCreateNestedOneWithoutNotification_notification_recipientIdTouserInput
  }

  export type notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput = {
    id?: number
    type: string
    read?: boolean
    createdAt?: Date | string
    recipientId: number
    postId?: number | null
  }

  export type notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput = {
    where: notificationWhereUniqueInput
    create: XOR<notificationCreateWithoutUser_notification_senderIdTouserInput, notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput>
  }

  export type notificationCreateManyUser_notification_senderIdTouserInputEnvelope = {
    data: notificationCreateManyUser_notification_senderIdTouserInput | notificationCreateManyUser_notification_senderIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type postCreateWithoutUser_post_userIdTouserInput = {
    content: string
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutPostInput
    like?: likeCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaCreateNestedManyWithoutPost_media_postIdTopostInput
    notification?: notificationCreateNestedManyWithoutPostInput
    share?: shareCreateNestedManyWithoutPostInput
    media_postvideos?: mediaCreateNestedManyWithoutPost_postvideosInput
    user_savedposts?: userCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postUncheckedCreateWithoutUser_post_userIdTouserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutPostInput
    like?: likeUncheckedCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaUncheckedCreateNestedManyWithoutPost_media_postIdTopostInput
    notification?: notificationUncheckedCreateNestedManyWithoutPostInput
    share?: shareUncheckedCreateNestedManyWithoutPostInput
    media_postvideos?: mediaUncheckedCreateNestedManyWithoutPost_postvideosInput
    user_savedposts?: userUncheckedCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postCreateOrConnectWithoutUser_post_userIdTouserInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutUser_post_userIdTouserInput, postUncheckedCreateWithoutUser_post_userIdTouserInput>
  }

  export type postCreateManyUser_post_userIdTouserInputEnvelope = {
    data: postCreateManyUser_post_userIdTouserInput | postCreateManyUser_post_userIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type shareCreateWithoutUserInput = {
    createdAt?: Date | string
    post: postCreateNestedOneWithoutShareInput
  }

  export type shareUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    postId: number
  }

  export type shareCreateOrConnectWithoutUserInput = {
    where: shareWhereUniqueInput
    create: XOR<shareCreateWithoutUserInput, shareUncheckedCreateWithoutUserInput>
  }

  export type shareCreateManyUserInputEnvelope = {
    data: shareCreateManyUserInput | shareCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type postCreateWithoutUser_savedpostsInput = {
    content: string
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutPostInput
    like?: likeCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaCreateNestedManyWithoutPost_media_postIdTopostInput
    notification?: notificationCreateNestedManyWithoutPostInput
    user_post_userIdTouser: userCreateNestedOneWithoutPost_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutPostInput
    media_postvideos?: mediaCreateNestedManyWithoutPost_postvideosInput
  }

  export type postUncheckedCreateWithoutUser_savedpostsInput = {
    id?: number
    content: string
    createdAt?: Date | string
    userId: number
    comment?: commentUncheckedCreateNestedManyWithoutPostInput
    like?: likeUncheckedCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaUncheckedCreateNestedManyWithoutPost_media_postIdTopostInput
    notification?: notificationUncheckedCreateNestedManyWithoutPostInput
    share?: shareUncheckedCreateNestedManyWithoutPostInput
    media_postvideos?: mediaUncheckedCreateNestedManyWithoutPost_postvideosInput
  }

  export type postCreateOrConnectWithoutUser_savedpostsInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutUser_savedpostsInput, postUncheckedCreateWithoutUser_savedpostsInput>
  }

  export type conversationCreateWithoutUser1Input = {
    createdAt?: Date | string
    user2: userCreateNestedOneWithoutConversationAsUser2Input
    messages?: messageCreateNestedManyWithoutConversationInput
  }

  export type conversationUncheckedCreateWithoutUser1Input = {
    id?: number
    user2Id: number
    createdAt?: Date | string
    messages?: messageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type conversationCreateOrConnectWithoutUser1Input = {
    where: conversationWhereUniqueInput
    create: XOR<conversationCreateWithoutUser1Input, conversationUncheckedCreateWithoutUser1Input>
  }

  export type conversationCreateManyUser1InputEnvelope = {
    data: conversationCreateManyUser1Input | conversationCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type conversationCreateWithoutUser2Input = {
    createdAt?: Date | string
    user1: userCreateNestedOneWithoutConversationAsUser1Input
    messages?: messageCreateNestedManyWithoutConversationInput
  }

  export type conversationUncheckedCreateWithoutUser2Input = {
    id?: number
    user1Id: number
    createdAt?: Date | string
    messages?: messageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type conversationCreateOrConnectWithoutUser2Input = {
    where: conversationWhereUniqueInput
    create: XOR<conversationCreateWithoutUser2Input, conversationUncheckedCreateWithoutUser2Input>
  }

  export type conversationCreateManyUser2InputEnvelope = {
    data: conversationCreateManyUser2Input | conversationCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type commentUpsertWithWhereUniqueWithoutUserInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutUserInput, commentUncheckedUpdateWithoutUserInput>
    create: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput>
  }

  export type commentUpdateWithWhereUniqueWithoutUserInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutUserInput, commentUncheckedUpdateWithoutUserInput>
  }

  export type commentUpdateManyWithWhereWithoutUserInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutUserInput>
  }

  export type commentScalarWhereInput = {
    AND?: commentScalarWhereInput | commentScalarWhereInput[]
    OR?: commentScalarWhereInput[]
    NOT?: commentScalarWhereInput | commentScalarWhereInput[]
    id?: IntFilter<"comment"> | number
    content?: StringFilter<"comment"> | string
    createdAt?: DateTimeFilter<"comment"> | Date | string
    userId?: IntFilter<"comment"> | number
    postId?: IntFilter<"comment"> | number
  }

  export type followUpsertWithWhereUniqueWithoutUser_follow_followerIdTouserInput = {
    where: followWhereUniqueInput
    update: XOR<followUpdateWithoutUser_follow_followerIdTouserInput, followUncheckedUpdateWithoutUser_follow_followerIdTouserInput>
    create: XOR<followCreateWithoutUser_follow_followerIdTouserInput, followUncheckedCreateWithoutUser_follow_followerIdTouserInput>
  }

  export type followUpdateWithWhereUniqueWithoutUser_follow_followerIdTouserInput = {
    where: followWhereUniqueInput
    data: XOR<followUpdateWithoutUser_follow_followerIdTouserInput, followUncheckedUpdateWithoutUser_follow_followerIdTouserInput>
  }

  export type followUpdateManyWithWhereWithoutUser_follow_followerIdTouserInput = {
    where: followScalarWhereInput
    data: XOR<followUpdateManyMutationInput, followUncheckedUpdateManyWithoutUser_follow_followerIdTouserInput>
  }

  export type followScalarWhereInput = {
    AND?: followScalarWhereInput | followScalarWhereInput[]
    OR?: followScalarWhereInput[]
    NOT?: followScalarWhereInput | followScalarWhereInput[]
    id?: IntFilter<"follow"> | number
    followerId?: IntFilter<"follow"> | number
    followingId?: IntFilter<"follow"> | number
    createdAt?: DateTimeFilter<"follow"> | Date | string
  }

  export type followUpsertWithWhereUniqueWithoutUser_follow_followingIdTouserInput = {
    where: followWhereUniqueInput
    update: XOR<followUpdateWithoutUser_follow_followingIdTouserInput, followUncheckedUpdateWithoutUser_follow_followingIdTouserInput>
    create: XOR<followCreateWithoutUser_follow_followingIdTouserInput, followUncheckedCreateWithoutUser_follow_followingIdTouserInput>
  }

  export type followUpdateWithWhereUniqueWithoutUser_follow_followingIdTouserInput = {
    where: followWhereUniqueInput
    data: XOR<followUpdateWithoutUser_follow_followingIdTouserInput, followUncheckedUpdateWithoutUser_follow_followingIdTouserInput>
  }

  export type followUpdateManyWithWhereWithoutUser_follow_followingIdTouserInput = {
    where: followScalarWhereInput
    data: XOR<followUpdateManyMutationInput, followUncheckedUpdateManyWithoutUser_follow_followingIdTouserInput>
  }

  export type likeUpsertWithWhereUniqueWithoutUserInput = {
    where: likeWhereUniqueInput
    update: XOR<likeUpdateWithoutUserInput, likeUncheckedUpdateWithoutUserInput>
    create: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput>
  }

  export type likeUpdateWithWhereUniqueWithoutUserInput = {
    where: likeWhereUniqueInput
    data: XOR<likeUpdateWithoutUserInput, likeUncheckedUpdateWithoutUserInput>
  }

  export type likeUpdateManyWithWhereWithoutUserInput = {
    where: likeScalarWhereInput
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyWithoutUserInput>
  }

  export type likeScalarWhereInput = {
    AND?: likeScalarWhereInput | likeScalarWhereInput[]
    OR?: likeScalarWhereInput[]
    NOT?: likeScalarWhereInput | likeScalarWhereInput[]
    id?: IntFilter<"like"> | number
    createdAt?: DateTimeFilter<"like"> | Date | string
    userId?: IntFilter<"like"> | number
    postId?: IntFilter<"like"> | number
  }

  export type messageUpsertWithWhereUniqueWithoutUser_message_recipientIdTouserInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutUser_message_recipientIdTouserInput, messageUncheckedUpdateWithoutUser_message_recipientIdTouserInput>
    create: XOR<messageCreateWithoutUser_message_recipientIdTouserInput, messageUncheckedCreateWithoutUser_message_recipientIdTouserInput>
  }

  export type messageUpdateWithWhereUniqueWithoutUser_message_recipientIdTouserInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutUser_message_recipientIdTouserInput, messageUncheckedUpdateWithoutUser_message_recipientIdTouserInput>
  }

  export type messageUpdateManyWithWhereWithoutUser_message_recipientIdTouserInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserInput>
  }

  export type messageScalarWhereInput = {
    AND?: messageScalarWhereInput | messageScalarWhereInput[]
    OR?: messageScalarWhereInput[]
    NOT?: messageScalarWhereInput | messageScalarWhereInput[]
    id?: IntFilter<"message"> | number
    content?: StringFilter<"message"> | string
    createdAt?: DateTimeFilter<"message"> | Date | string
    senderId?: IntFilter<"message"> | number
    recipientId?: IntFilter<"message"> | number
    conversationId?: IntFilter<"message"> | number
  }

  export type messageUpsertWithWhereUniqueWithoutUser_message_senderIdTouserInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutUser_message_senderIdTouserInput, messageUncheckedUpdateWithoutUser_message_senderIdTouserInput>
    create: XOR<messageCreateWithoutUser_message_senderIdTouserInput, messageUncheckedCreateWithoutUser_message_senderIdTouserInput>
  }

  export type messageUpdateWithWhereUniqueWithoutUser_message_senderIdTouserInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutUser_message_senderIdTouserInput, messageUncheckedUpdateWithoutUser_message_senderIdTouserInput>
  }

  export type messageUpdateManyWithWhereWithoutUser_message_senderIdTouserInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutUser_message_senderIdTouserInput>
  }

  export type notificationUpsertWithWhereUniqueWithoutUser_notification_recipientIdTouserInput = {
    where: notificationWhereUniqueInput
    update: XOR<notificationUpdateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedUpdateWithoutUser_notification_recipientIdTouserInput>
    create: XOR<notificationCreateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput>
  }

  export type notificationUpdateWithWhereUniqueWithoutUser_notification_recipientIdTouserInput = {
    where: notificationWhereUniqueInput
    data: XOR<notificationUpdateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedUpdateWithoutUser_notification_recipientIdTouserInput>
  }

  export type notificationUpdateManyWithWhereWithoutUser_notification_recipientIdTouserInput = {
    where: notificationScalarWhereInput
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserInput>
  }

  export type notificationScalarWhereInput = {
    AND?: notificationScalarWhereInput | notificationScalarWhereInput[]
    OR?: notificationScalarWhereInput[]
    NOT?: notificationScalarWhereInput | notificationScalarWhereInput[]
    id?: IntFilter<"notification"> | number
    type?: StringFilter<"notification"> | string
    read?: BoolFilter<"notification"> | boolean
    createdAt?: DateTimeFilter<"notification"> | Date | string
    recipientId?: IntFilter<"notification"> | number
    senderId?: IntFilter<"notification"> | number
    postId?: IntNullableFilter<"notification"> | number | null
  }

  export type notificationUpsertWithWhereUniqueWithoutUser_notification_senderIdTouserInput = {
    where: notificationWhereUniqueInput
    update: XOR<notificationUpdateWithoutUser_notification_senderIdTouserInput, notificationUncheckedUpdateWithoutUser_notification_senderIdTouserInput>
    create: XOR<notificationCreateWithoutUser_notification_senderIdTouserInput, notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput>
  }

  export type notificationUpdateWithWhereUniqueWithoutUser_notification_senderIdTouserInput = {
    where: notificationWhereUniqueInput
    data: XOR<notificationUpdateWithoutUser_notification_senderIdTouserInput, notificationUncheckedUpdateWithoutUser_notification_senderIdTouserInput>
  }

  export type notificationUpdateManyWithWhereWithoutUser_notification_senderIdTouserInput = {
    where: notificationScalarWhereInput
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserInput>
  }

  export type postUpsertWithWhereUniqueWithoutUser_post_userIdTouserInput = {
    where: postWhereUniqueInput
    update: XOR<postUpdateWithoutUser_post_userIdTouserInput, postUncheckedUpdateWithoutUser_post_userIdTouserInput>
    create: XOR<postCreateWithoutUser_post_userIdTouserInput, postUncheckedCreateWithoutUser_post_userIdTouserInput>
  }

  export type postUpdateWithWhereUniqueWithoutUser_post_userIdTouserInput = {
    where: postWhereUniqueInput
    data: XOR<postUpdateWithoutUser_post_userIdTouserInput, postUncheckedUpdateWithoutUser_post_userIdTouserInput>
  }

  export type postUpdateManyWithWhereWithoutUser_post_userIdTouserInput = {
    where: postScalarWhereInput
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyWithoutUser_post_userIdTouserInput>
  }

  export type postScalarWhereInput = {
    AND?: postScalarWhereInput | postScalarWhereInput[]
    OR?: postScalarWhereInput[]
    NOT?: postScalarWhereInput | postScalarWhereInput[]
    id?: IntFilter<"post"> | number
    content?: StringFilter<"post"> | string
    createdAt?: DateTimeFilter<"post"> | Date | string
    userId?: IntFilter<"post"> | number
  }

  export type shareUpsertWithWhereUniqueWithoutUserInput = {
    where: shareWhereUniqueInput
    update: XOR<shareUpdateWithoutUserInput, shareUncheckedUpdateWithoutUserInput>
    create: XOR<shareCreateWithoutUserInput, shareUncheckedCreateWithoutUserInput>
  }

  export type shareUpdateWithWhereUniqueWithoutUserInput = {
    where: shareWhereUniqueInput
    data: XOR<shareUpdateWithoutUserInput, shareUncheckedUpdateWithoutUserInput>
  }

  export type shareUpdateManyWithWhereWithoutUserInput = {
    where: shareScalarWhereInput
    data: XOR<shareUpdateManyMutationInput, shareUncheckedUpdateManyWithoutUserInput>
  }

  export type shareScalarWhereInput = {
    AND?: shareScalarWhereInput | shareScalarWhereInput[]
    OR?: shareScalarWhereInput[]
    NOT?: shareScalarWhereInput | shareScalarWhereInput[]
    id?: IntFilter<"share"> | number
    createdAt?: DateTimeFilter<"share"> | Date | string
    userId?: IntFilter<"share"> | number
    postId?: IntFilter<"share"> | number
  }

  export type postUpsertWithWhereUniqueWithoutUser_savedpostsInput = {
    where: postWhereUniqueInput
    update: XOR<postUpdateWithoutUser_savedpostsInput, postUncheckedUpdateWithoutUser_savedpostsInput>
    create: XOR<postCreateWithoutUser_savedpostsInput, postUncheckedCreateWithoutUser_savedpostsInput>
  }

  export type postUpdateWithWhereUniqueWithoutUser_savedpostsInput = {
    where: postWhereUniqueInput
    data: XOR<postUpdateWithoutUser_savedpostsInput, postUncheckedUpdateWithoutUser_savedpostsInput>
  }

  export type postUpdateManyWithWhereWithoutUser_savedpostsInput = {
    where: postScalarWhereInput
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyWithoutUser_savedpostsInput>
  }

  export type conversationUpsertWithWhereUniqueWithoutUser1Input = {
    where: conversationWhereUniqueInput
    update: XOR<conversationUpdateWithoutUser1Input, conversationUncheckedUpdateWithoutUser1Input>
    create: XOR<conversationCreateWithoutUser1Input, conversationUncheckedCreateWithoutUser1Input>
  }

  export type conversationUpdateWithWhereUniqueWithoutUser1Input = {
    where: conversationWhereUniqueInput
    data: XOR<conversationUpdateWithoutUser1Input, conversationUncheckedUpdateWithoutUser1Input>
  }

  export type conversationUpdateManyWithWhereWithoutUser1Input = {
    where: conversationScalarWhereInput
    data: XOR<conversationUpdateManyMutationInput, conversationUncheckedUpdateManyWithoutUser1Input>
  }

  export type conversationScalarWhereInput = {
    AND?: conversationScalarWhereInput | conversationScalarWhereInput[]
    OR?: conversationScalarWhereInput[]
    NOT?: conversationScalarWhereInput | conversationScalarWhereInput[]
    id?: IntFilter<"conversation"> | number
    user1Id?: IntFilter<"conversation"> | number
    user2Id?: IntFilter<"conversation"> | number
    createdAt?: DateTimeFilter<"conversation"> | Date | string
  }

  export type conversationUpsertWithWhereUniqueWithoutUser2Input = {
    where: conversationWhereUniqueInput
    update: XOR<conversationUpdateWithoutUser2Input, conversationUncheckedUpdateWithoutUser2Input>
    create: XOR<conversationCreateWithoutUser2Input, conversationUncheckedCreateWithoutUser2Input>
  }

  export type conversationUpdateWithWhereUniqueWithoutUser2Input = {
    where: conversationWhereUniqueInput
    data: XOR<conversationUpdateWithoutUser2Input, conversationUncheckedUpdateWithoutUser2Input>
  }

  export type conversationUpdateManyWithWhereWithoutUser2Input = {
    where: conversationScalarWhereInput
    data: XOR<conversationUpdateManyMutationInput, conversationUncheckedUpdateManyWithoutUser2Input>
  }

  export type postCreateWithoutLikeInput = {
    content: string
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaCreateNestedManyWithoutPost_media_postIdTopostInput
    notification?: notificationCreateNestedManyWithoutPostInput
    user_post_userIdTouser: userCreateNestedOneWithoutPost_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutPostInput
    media_postvideos?: mediaCreateNestedManyWithoutPost_postvideosInput
    user_savedposts?: userCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postUncheckedCreateWithoutLikeInput = {
    id?: number
    content: string
    createdAt?: Date | string
    userId: number
    comment?: commentUncheckedCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaUncheckedCreateNestedManyWithoutPost_media_postIdTopostInput
    notification?: notificationUncheckedCreateNestedManyWithoutPostInput
    share?: shareUncheckedCreateNestedManyWithoutPostInput
    media_postvideos?: mediaUncheckedCreateNestedManyWithoutPost_postvideosInput
    user_savedposts?: userUncheckedCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postCreateOrConnectWithoutLikeInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutLikeInput, postUncheckedCreateWithoutLikeInput>
  }

  export type userCreateWithoutLikeInput = {
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followCreateNestedManyWithoutUser_follow_followingIdTouserInput
    message_message_recipientIdTouser?: messageCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutUserInput
    post_savedposts?: postCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationCreateNestedManyWithoutUser2Input
  }

  export type userUncheckedCreateWithoutLikeInput = {
    id?: number
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followingIdTouserInput
    message_message_recipientIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postUncheckedCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareUncheckedCreateNestedManyWithoutUserInput
    post_savedposts?: postUncheckedCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationUncheckedCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationUncheckedCreateNestedManyWithoutUser2Input
  }

  export type userCreateOrConnectWithoutLikeInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLikeInput, userUncheckedCreateWithoutLikeInput>
  }

  export type postUpsertWithoutLikeInput = {
    update: XOR<postUpdateWithoutLikeInput, postUncheckedUpdateWithoutLikeInput>
    create: XOR<postCreateWithoutLikeInput, postUncheckedCreateWithoutLikeInput>
    where?: postWhereInput
  }

  export type postUpdateToOneWithWhereWithoutLikeInput = {
    where?: postWhereInput
    data: XOR<postUpdateWithoutLikeInput, postUncheckedUpdateWithoutLikeInput>
  }

  export type postUpdateWithoutLikeInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUpdateManyWithoutPost_media_postIdTopostNestedInput
    notification?: notificationUpdateManyWithoutPostNestedInput
    user_post_userIdTouser?: userUpdateOneRequiredWithoutPost_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutPostNestedInput
    media_postvideos?: mediaUpdateManyWithoutPost_postvideosNestedInput
    user_savedposts?: userUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type postUncheckedUpdateWithoutLikeInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    comment?: commentUncheckedUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUncheckedUpdateManyWithoutPost_media_postIdTopostNestedInput
    notification?: notificationUncheckedUpdateManyWithoutPostNestedInput
    share?: shareUncheckedUpdateManyWithoutPostNestedInput
    media_postvideos?: mediaUncheckedUpdateManyWithoutPost_postvideosNestedInput
    user_savedposts?: userUncheckedUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type userUpsertWithoutLikeInput = {
    update: XOR<userUpdateWithoutLikeInput, userUncheckedUpdateWithoutLikeInput>
    create: XOR<userCreateWithoutLikeInput, userUncheckedCreateWithoutLikeInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLikeInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLikeInput, userUncheckedUpdateWithoutLikeInput>
  }

  export type userUpdateWithoutLikeInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    message_message_recipientIdTouser?: messageUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutUserNestedInput
    post_savedposts?: postUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUpdateManyWithoutUser2NestedInput
  }

  export type userUncheckedUpdateWithoutLikeInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    message_message_recipientIdTouser?: messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUncheckedUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUncheckedUpdateManyWithoutUserNestedInput
    post_savedposts?: postUncheckedUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUncheckedUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type commentCreateWithoutPostInput = {
    content: string
    createdAt?: Date | string
    user: userCreateNestedOneWithoutCommentInput
  }

  export type commentUncheckedCreateWithoutPostInput = {
    id?: number
    content: string
    createdAt?: Date | string
    userId: number
  }

  export type commentCreateOrConnectWithoutPostInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput>
  }

  export type commentCreateManyPostInputEnvelope = {
    data: commentCreateManyPostInput | commentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type likeCreateWithoutPostInput = {
    createdAt?: Date | string
    user: userCreateNestedOneWithoutLikeInput
  }

  export type likeUncheckedCreateWithoutPostInput = {
    id?: number
    createdAt?: Date | string
    userId: number
  }

  export type likeCreateOrConnectWithoutPostInput = {
    where: likeWhereUniqueInput
    create: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput>
  }

  export type likeCreateManyPostInputEnvelope = {
    data: likeCreateManyPostInput | likeCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type mediaCreateWithoutPost_media_postIdTopostInput = {
    url: string
    type: string
    createdAt?: Date | string
    post_postvideos?: postCreateNestedManyWithoutMedia_postvideosInput
  }

  export type mediaUncheckedCreateWithoutPost_media_postIdTopostInput = {
    id?: number
    url: string
    type: string
    createdAt?: Date | string
    post_postvideos?: postUncheckedCreateNestedManyWithoutMedia_postvideosInput
  }

  export type mediaCreateOrConnectWithoutPost_media_postIdTopostInput = {
    where: mediaWhereUniqueInput
    create: XOR<mediaCreateWithoutPost_media_postIdTopostInput, mediaUncheckedCreateWithoutPost_media_postIdTopostInput>
  }

  export type mediaCreateManyPost_media_postIdTopostInputEnvelope = {
    data: mediaCreateManyPost_media_postIdTopostInput | mediaCreateManyPost_media_postIdTopostInput[]
    skipDuplicates?: boolean
  }

  export type notificationCreateWithoutPostInput = {
    type: string
    read?: boolean
    createdAt?: Date | string
    user_notification_recipientIdTouser: userCreateNestedOneWithoutNotification_notification_recipientIdTouserInput
    user_notification_senderIdTouser: userCreateNestedOneWithoutNotification_notification_senderIdTouserInput
  }

  export type notificationUncheckedCreateWithoutPostInput = {
    id?: number
    type: string
    read?: boolean
    createdAt?: Date | string
    recipientId: number
    senderId: number
  }

  export type notificationCreateOrConnectWithoutPostInput = {
    where: notificationWhereUniqueInput
    create: XOR<notificationCreateWithoutPostInput, notificationUncheckedCreateWithoutPostInput>
  }

  export type notificationCreateManyPostInputEnvelope = {
    data: notificationCreateManyPostInput | notificationCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutPost_post_userIdTouserInput = {
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
    share?: shareCreateNestedManyWithoutUserInput
    post_savedposts?: postCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationCreateNestedManyWithoutUser2Input
  }

  export type userUncheckedCreateWithoutPost_post_userIdTouserInput = {
    id?: number
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
    share?: shareUncheckedCreateNestedManyWithoutUserInput
    post_savedposts?: postUncheckedCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationUncheckedCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationUncheckedCreateNestedManyWithoutUser2Input
  }

  export type userCreateOrConnectWithoutPost_post_userIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPost_post_userIdTouserInput, userUncheckedCreateWithoutPost_post_userIdTouserInput>
  }

  export type shareCreateWithoutPostInput = {
    createdAt?: Date | string
    user: userCreateNestedOneWithoutShareInput
  }

  export type shareUncheckedCreateWithoutPostInput = {
    id?: number
    createdAt?: Date | string
    userId: number
  }

  export type shareCreateOrConnectWithoutPostInput = {
    where: shareWhereUniqueInput
    create: XOR<shareCreateWithoutPostInput, shareUncheckedCreateWithoutPostInput>
  }

  export type shareCreateManyPostInputEnvelope = {
    data: shareCreateManyPostInput | shareCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type mediaCreateWithoutPost_postvideosInput = {
    url: string
    type: string
    createdAt?: Date | string
    post_media_postIdTopost: postCreateNestedOneWithoutMedia_media_postIdTopostInput
  }

  export type mediaUncheckedCreateWithoutPost_postvideosInput = {
    id?: number
    url: string
    type: string
    createdAt?: Date | string
    postId: number
  }

  export type mediaCreateOrConnectWithoutPost_postvideosInput = {
    where: mediaWhereUniqueInput
    create: XOR<mediaCreateWithoutPost_postvideosInput, mediaUncheckedCreateWithoutPost_postvideosInput>
  }

  export type userCreateWithoutPost_savedpostsInput = {
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutUserInput
    conversationAsUser1?: conversationCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationCreateNestedManyWithoutUser2Input
  }

  export type userUncheckedCreateWithoutPost_savedpostsInput = {
    id?: number
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postUncheckedCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareUncheckedCreateNestedManyWithoutUserInput
    conversationAsUser1?: conversationUncheckedCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationUncheckedCreateNestedManyWithoutUser2Input
  }

  export type userCreateOrConnectWithoutPost_savedpostsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPost_savedpostsInput, userUncheckedCreateWithoutPost_savedpostsInput>
  }

  export type commentUpsertWithWhereUniqueWithoutPostInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutPostInput, commentUncheckedUpdateWithoutPostInput>
    create: XOR<commentCreateWithoutPostInput, commentUncheckedCreateWithoutPostInput>
  }

  export type commentUpdateWithWhereUniqueWithoutPostInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutPostInput, commentUncheckedUpdateWithoutPostInput>
  }

  export type commentUpdateManyWithWhereWithoutPostInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutPostInput>
  }

  export type likeUpsertWithWhereUniqueWithoutPostInput = {
    where: likeWhereUniqueInput
    update: XOR<likeUpdateWithoutPostInput, likeUncheckedUpdateWithoutPostInput>
    create: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput>
  }

  export type likeUpdateWithWhereUniqueWithoutPostInput = {
    where: likeWhereUniqueInput
    data: XOR<likeUpdateWithoutPostInput, likeUncheckedUpdateWithoutPostInput>
  }

  export type likeUpdateManyWithWhereWithoutPostInput = {
    where: likeScalarWhereInput
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyWithoutPostInput>
  }

  export type mediaUpsertWithWhereUniqueWithoutPost_media_postIdTopostInput = {
    where: mediaWhereUniqueInput
    update: XOR<mediaUpdateWithoutPost_media_postIdTopostInput, mediaUncheckedUpdateWithoutPost_media_postIdTopostInput>
    create: XOR<mediaCreateWithoutPost_media_postIdTopostInput, mediaUncheckedCreateWithoutPost_media_postIdTopostInput>
  }

  export type mediaUpdateWithWhereUniqueWithoutPost_media_postIdTopostInput = {
    where: mediaWhereUniqueInput
    data: XOR<mediaUpdateWithoutPost_media_postIdTopostInput, mediaUncheckedUpdateWithoutPost_media_postIdTopostInput>
  }

  export type mediaUpdateManyWithWhereWithoutPost_media_postIdTopostInput = {
    where: mediaScalarWhereInput
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyWithoutPost_media_postIdTopostInput>
  }

  export type mediaScalarWhereInput = {
    AND?: mediaScalarWhereInput | mediaScalarWhereInput[]
    OR?: mediaScalarWhereInput[]
    NOT?: mediaScalarWhereInput | mediaScalarWhereInput[]
    id?: IntFilter<"media"> | number
    url?: StringFilter<"media"> | string
    type?: StringFilter<"media"> | string
    createdAt?: DateTimeFilter<"media"> | Date | string
    postId?: IntFilter<"media"> | number
  }

  export type notificationUpsertWithWhereUniqueWithoutPostInput = {
    where: notificationWhereUniqueInput
    update: XOR<notificationUpdateWithoutPostInput, notificationUncheckedUpdateWithoutPostInput>
    create: XOR<notificationCreateWithoutPostInput, notificationUncheckedCreateWithoutPostInput>
  }

  export type notificationUpdateWithWhereUniqueWithoutPostInput = {
    where: notificationWhereUniqueInput
    data: XOR<notificationUpdateWithoutPostInput, notificationUncheckedUpdateWithoutPostInput>
  }

  export type notificationUpdateManyWithWhereWithoutPostInput = {
    where: notificationScalarWhereInput
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyWithoutPostInput>
  }

  export type userUpsertWithoutPost_post_userIdTouserInput = {
    update: XOR<userUpdateWithoutPost_post_userIdTouserInput, userUncheckedUpdateWithoutPost_post_userIdTouserInput>
    create: XOR<userCreateWithoutPost_post_userIdTouserInput, userUncheckedCreateWithoutPost_post_userIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPost_post_userIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPost_post_userIdTouserInput, userUncheckedUpdateWithoutPost_post_userIdTouserInput>
  }

  export type userUpdateWithoutPost_post_userIdTouserInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    share?: shareUpdateManyWithoutUserNestedInput
    post_savedposts?: postUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUpdateManyWithoutUser2NestedInput
  }

  export type userUncheckedUpdateWithoutPost_post_userIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    share?: shareUncheckedUpdateManyWithoutUserNestedInput
    post_savedposts?: postUncheckedUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUncheckedUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type shareUpsertWithWhereUniqueWithoutPostInput = {
    where: shareWhereUniqueInput
    update: XOR<shareUpdateWithoutPostInput, shareUncheckedUpdateWithoutPostInput>
    create: XOR<shareCreateWithoutPostInput, shareUncheckedCreateWithoutPostInput>
  }

  export type shareUpdateWithWhereUniqueWithoutPostInput = {
    where: shareWhereUniqueInput
    data: XOR<shareUpdateWithoutPostInput, shareUncheckedUpdateWithoutPostInput>
  }

  export type shareUpdateManyWithWhereWithoutPostInput = {
    where: shareScalarWhereInput
    data: XOR<shareUpdateManyMutationInput, shareUncheckedUpdateManyWithoutPostInput>
  }

  export type mediaUpsertWithWhereUniqueWithoutPost_postvideosInput = {
    where: mediaWhereUniqueInput
    update: XOR<mediaUpdateWithoutPost_postvideosInput, mediaUncheckedUpdateWithoutPost_postvideosInput>
    create: XOR<mediaCreateWithoutPost_postvideosInput, mediaUncheckedCreateWithoutPost_postvideosInput>
  }

  export type mediaUpdateWithWhereUniqueWithoutPost_postvideosInput = {
    where: mediaWhereUniqueInput
    data: XOR<mediaUpdateWithoutPost_postvideosInput, mediaUncheckedUpdateWithoutPost_postvideosInput>
  }

  export type mediaUpdateManyWithWhereWithoutPost_postvideosInput = {
    where: mediaScalarWhereInput
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyWithoutPost_postvideosInput>
  }

  export type userUpsertWithWhereUniqueWithoutPost_savedpostsInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutPost_savedpostsInput, userUncheckedUpdateWithoutPost_savedpostsInput>
    create: XOR<userCreateWithoutPost_savedpostsInput, userUncheckedCreateWithoutPost_savedpostsInput>
  }

  export type userUpdateWithWhereUniqueWithoutPost_savedpostsInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutPost_savedpostsInput, userUncheckedUpdateWithoutPost_savedpostsInput>
  }

  export type userUpdateManyWithWhereWithoutPost_savedpostsInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutPost_savedpostsInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    profilePic?: StringNullableFilter<"user"> | string | null
    coverPic?: StringNullableFilter<"user"> | string | null
    bio?: StringNullableFilter<"user"> | string | null
    isAdmin?: BoolFilter<"user"> | boolean
    createdAt?: DateTimeFilter<"user"> | Date | string
  }

  export type postCreateWithoutMedia_media_postIdTopostInput = {
    content: string
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutPostInput
    like?: likeCreateNestedManyWithoutPostInput
    notification?: notificationCreateNestedManyWithoutPostInput
    user_post_userIdTouser: userCreateNestedOneWithoutPost_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutPostInput
    media_postvideos?: mediaCreateNestedManyWithoutPost_postvideosInput
    user_savedposts?: userCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postUncheckedCreateWithoutMedia_media_postIdTopostInput = {
    id?: number
    content: string
    createdAt?: Date | string
    userId: number
    comment?: commentUncheckedCreateNestedManyWithoutPostInput
    like?: likeUncheckedCreateNestedManyWithoutPostInput
    notification?: notificationUncheckedCreateNestedManyWithoutPostInput
    share?: shareUncheckedCreateNestedManyWithoutPostInput
    media_postvideos?: mediaUncheckedCreateNestedManyWithoutPost_postvideosInput
    user_savedposts?: userUncheckedCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postCreateOrConnectWithoutMedia_media_postIdTopostInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutMedia_media_postIdTopostInput, postUncheckedCreateWithoutMedia_media_postIdTopostInput>
  }

  export type postCreateWithoutMedia_postvideosInput = {
    content: string
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutPostInput
    like?: likeCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaCreateNestedManyWithoutPost_media_postIdTopostInput
    notification?: notificationCreateNestedManyWithoutPostInput
    user_post_userIdTouser: userCreateNestedOneWithoutPost_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutPostInput
    user_savedposts?: userCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postUncheckedCreateWithoutMedia_postvideosInput = {
    id?: number
    content: string
    createdAt?: Date | string
    userId: number
    comment?: commentUncheckedCreateNestedManyWithoutPostInput
    like?: likeUncheckedCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaUncheckedCreateNestedManyWithoutPost_media_postIdTopostInput
    notification?: notificationUncheckedCreateNestedManyWithoutPostInput
    share?: shareUncheckedCreateNestedManyWithoutPostInput
    user_savedposts?: userUncheckedCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postCreateOrConnectWithoutMedia_postvideosInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutMedia_postvideosInput, postUncheckedCreateWithoutMedia_postvideosInput>
  }

  export type postUpsertWithoutMedia_media_postIdTopostInput = {
    update: XOR<postUpdateWithoutMedia_media_postIdTopostInput, postUncheckedUpdateWithoutMedia_media_postIdTopostInput>
    create: XOR<postCreateWithoutMedia_media_postIdTopostInput, postUncheckedCreateWithoutMedia_media_postIdTopostInput>
    where?: postWhereInput
  }

  export type postUpdateToOneWithWhereWithoutMedia_media_postIdTopostInput = {
    where?: postWhereInput
    data: XOR<postUpdateWithoutMedia_media_postIdTopostInput, postUncheckedUpdateWithoutMedia_media_postIdTopostInput>
  }

  export type postUpdateWithoutMedia_media_postIdTopostInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutPostNestedInput
    like?: likeUpdateManyWithoutPostNestedInput
    notification?: notificationUpdateManyWithoutPostNestedInput
    user_post_userIdTouser?: userUpdateOneRequiredWithoutPost_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutPostNestedInput
    media_postvideos?: mediaUpdateManyWithoutPost_postvideosNestedInput
    user_savedposts?: userUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type postUncheckedUpdateWithoutMedia_media_postIdTopostInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    comment?: commentUncheckedUpdateManyWithoutPostNestedInput
    like?: likeUncheckedUpdateManyWithoutPostNestedInput
    notification?: notificationUncheckedUpdateManyWithoutPostNestedInput
    share?: shareUncheckedUpdateManyWithoutPostNestedInput
    media_postvideos?: mediaUncheckedUpdateManyWithoutPost_postvideosNestedInput
    user_savedposts?: userUncheckedUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type postUpsertWithWhereUniqueWithoutMedia_postvideosInput = {
    where: postWhereUniqueInput
    update: XOR<postUpdateWithoutMedia_postvideosInput, postUncheckedUpdateWithoutMedia_postvideosInput>
    create: XOR<postCreateWithoutMedia_postvideosInput, postUncheckedCreateWithoutMedia_postvideosInput>
  }

  export type postUpdateWithWhereUniqueWithoutMedia_postvideosInput = {
    where: postWhereUniqueInput
    data: XOR<postUpdateWithoutMedia_postvideosInput, postUncheckedUpdateWithoutMedia_postvideosInput>
  }

  export type postUpdateManyWithWhereWithoutMedia_postvideosInput = {
    where: postScalarWhereInput
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyWithoutMedia_postvideosInput>
  }

  export type userCreateWithoutConversationAsUser1Input = {
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutUserInput
    post_savedposts?: postCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser2?: conversationCreateNestedManyWithoutUser2Input
  }

  export type userUncheckedCreateWithoutConversationAsUser1Input = {
    id?: number
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postUncheckedCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareUncheckedCreateNestedManyWithoutUserInput
    post_savedposts?: postUncheckedCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser2?: conversationUncheckedCreateNestedManyWithoutUser2Input
  }

  export type userCreateOrConnectWithoutConversationAsUser1Input = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutConversationAsUser1Input, userUncheckedCreateWithoutConversationAsUser1Input>
  }

  export type userCreateWithoutConversationAsUser2Input = {
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutUserInput
    post_savedposts?: postCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationCreateNestedManyWithoutUser1Input
  }

  export type userUncheckedCreateWithoutConversationAsUser2Input = {
    id?: number
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postUncheckedCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareUncheckedCreateNestedManyWithoutUserInput
    post_savedposts?: postUncheckedCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationUncheckedCreateNestedManyWithoutUser1Input
  }

  export type userCreateOrConnectWithoutConversationAsUser2Input = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutConversationAsUser2Input, userUncheckedCreateWithoutConversationAsUser2Input>
  }

  export type messageCreateWithoutConversationInput = {
    content: string
    createdAt?: Date | string
    user_message_senderIdTouser: userCreateNestedOneWithoutMessage_message_senderIdTouserInput
    user_message_recipientIdTouser: userCreateNestedOneWithoutMessage_message_recipientIdTouserInput
  }

  export type messageUncheckedCreateWithoutConversationInput = {
    id?: number
    content: string
    createdAt?: Date | string
    senderId: number
    recipientId: number
  }

  export type messageCreateOrConnectWithoutConversationInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutConversationInput, messageUncheckedCreateWithoutConversationInput>
  }

  export type messageCreateManyConversationInputEnvelope = {
    data: messageCreateManyConversationInput | messageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutConversationAsUser1Input = {
    update: XOR<userUpdateWithoutConversationAsUser1Input, userUncheckedUpdateWithoutConversationAsUser1Input>
    create: XOR<userCreateWithoutConversationAsUser1Input, userUncheckedCreateWithoutConversationAsUser1Input>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutConversationAsUser1Input = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutConversationAsUser1Input, userUncheckedUpdateWithoutConversationAsUser1Input>
  }

  export type userUpdateWithoutConversationAsUser1Input = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutUserNestedInput
    post_savedposts?: postUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser2?: conversationUpdateManyWithoutUser2NestedInput
  }

  export type userUncheckedUpdateWithoutConversationAsUser1Input = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUncheckedUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUncheckedUpdateManyWithoutUserNestedInput
    post_savedposts?: postUncheckedUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser2?: conversationUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type userUpsertWithoutConversationAsUser2Input = {
    update: XOR<userUpdateWithoutConversationAsUser2Input, userUncheckedUpdateWithoutConversationAsUser2Input>
    create: XOR<userCreateWithoutConversationAsUser2Input, userUncheckedCreateWithoutConversationAsUser2Input>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutConversationAsUser2Input = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutConversationAsUser2Input, userUncheckedUpdateWithoutConversationAsUser2Input>
  }

  export type userUpdateWithoutConversationAsUser2Input = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutUserNestedInput
    post_savedposts?: postUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUpdateManyWithoutUser1NestedInput
  }

  export type userUncheckedUpdateWithoutConversationAsUser2Input = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUncheckedUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUncheckedUpdateManyWithoutUserNestedInput
    post_savedposts?: postUncheckedUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUncheckedUpdateManyWithoutUser1NestedInput
  }

  export type messageUpsertWithWhereUniqueWithoutConversationInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutConversationInput, messageUncheckedUpdateWithoutConversationInput>
    create: XOR<messageCreateWithoutConversationInput, messageUncheckedCreateWithoutConversationInput>
  }

  export type messageUpdateWithWhereUniqueWithoutConversationInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutConversationInput, messageUncheckedUpdateWithoutConversationInput>
  }

  export type messageUpdateManyWithWhereWithoutConversationInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutConversationInput>
  }

  export type userCreateWithoutMessage_message_senderIdTouserInput = {
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageCreateNestedManyWithoutUser_message_recipientIdTouserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutUserInput
    post_savedposts?: postCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationCreateNestedManyWithoutUser2Input
  }

  export type userUncheckedCreateWithoutMessage_message_senderIdTouserInput = {
    id?: number
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipientIdTouserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postUncheckedCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareUncheckedCreateNestedManyWithoutUserInput
    post_savedposts?: postUncheckedCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationUncheckedCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationUncheckedCreateNestedManyWithoutUser2Input
  }

  export type userCreateOrConnectWithoutMessage_message_senderIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMessage_message_senderIdTouserInput, userUncheckedCreateWithoutMessage_message_senderIdTouserInput>
  }

  export type userCreateWithoutMessage_message_recipientIdTouserInput = {
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutUserInput
    post_savedposts?: postCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationCreateNestedManyWithoutUser2Input
  }

  export type userUncheckedCreateWithoutMessage_message_recipientIdTouserInput = {
    id?: number
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postUncheckedCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareUncheckedCreateNestedManyWithoutUserInput
    post_savedposts?: postUncheckedCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationUncheckedCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationUncheckedCreateNestedManyWithoutUser2Input
  }

  export type userCreateOrConnectWithoutMessage_message_recipientIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMessage_message_recipientIdTouserInput, userUncheckedCreateWithoutMessage_message_recipientIdTouserInput>
  }

  export type conversationCreateWithoutMessagesInput = {
    createdAt?: Date | string
    user1: userCreateNestedOneWithoutConversationAsUser1Input
    user2: userCreateNestedOneWithoutConversationAsUser2Input
  }

  export type conversationUncheckedCreateWithoutMessagesInput = {
    id?: number
    user1Id: number
    user2Id: number
    createdAt?: Date | string
  }

  export type conversationCreateOrConnectWithoutMessagesInput = {
    where: conversationWhereUniqueInput
    create: XOR<conversationCreateWithoutMessagesInput, conversationUncheckedCreateWithoutMessagesInput>
  }

  export type userUpsertWithoutMessage_message_senderIdTouserInput = {
    update: XOR<userUpdateWithoutMessage_message_senderIdTouserInput, userUncheckedUpdateWithoutMessage_message_senderIdTouserInput>
    create: XOR<userCreateWithoutMessage_message_senderIdTouserInput, userUncheckedCreateWithoutMessage_message_senderIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMessage_message_senderIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMessage_message_senderIdTouserInput, userUncheckedUpdateWithoutMessage_message_senderIdTouserInput>
  }

  export type userUpdateWithoutMessage_message_senderIdTouserInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutUserNestedInput
    post_savedposts?: postUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUpdateManyWithoutUser2NestedInput
  }

  export type userUncheckedUpdateWithoutMessage_message_senderIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUncheckedUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUncheckedUpdateManyWithoutUserNestedInput
    post_savedposts?: postUncheckedUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUncheckedUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type userUpsertWithoutMessage_message_recipientIdTouserInput = {
    update: XOR<userUpdateWithoutMessage_message_recipientIdTouserInput, userUncheckedUpdateWithoutMessage_message_recipientIdTouserInput>
    create: XOR<userCreateWithoutMessage_message_recipientIdTouserInput, userUncheckedCreateWithoutMessage_message_recipientIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMessage_message_recipientIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMessage_message_recipientIdTouserInput, userUncheckedUpdateWithoutMessage_message_recipientIdTouserInput>
  }

  export type userUpdateWithoutMessage_message_recipientIdTouserInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutUserNestedInput
    post_savedposts?: postUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUpdateManyWithoutUser2NestedInput
  }

  export type userUncheckedUpdateWithoutMessage_message_recipientIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUncheckedUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUncheckedUpdateManyWithoutUserNestedInput
    post_savedposts?: postUncheckedUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUncheckedUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type conversationUpsertWithoutMessagesInput = {
    update: XOR<conversationUpdateWithoutMessagesInput, conversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<conversationCreateWithoutMessagesInput, conversationUncheckedCreateWithoutMessagesInput>
    where?: conversationWhereInput
  }

  export type conversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: conversationWhereInput
    data: XOR<conversationUpdateWithoutMessagesInput, conversationUncheckedUpdateWithoutMessagesInput>
  }

  export type conversationUpdateWithoutMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: userUpdateOneRequiredWithoutConversationAsUser1NestedInput
    user2?: userUpdateOneRequiredWithoutConversationAsUser2NestedInput
  }

  export type conversationUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user1Id?: IntFieldUpdateOperationsInput | number
    user2Id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postCreateWithoutNotificationInput = {
    content: string
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutPostInput
    like?: likeCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaCreateNestedManyWithoutPost_media_postIdTopostInput
    user_post_userIdTouser: userCreateNestedOneWithoutPost_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutPostInput
    media_postvideos?: mediaCreateNestedManyWithoutPost_postvideosInput
    user_savedposts?: userCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postUncheckedCreateWithoutNotificationInput = {
    id?: number
    content: string
    createdAt?: Date | string
    userId: number
    comment?: commentUncheckedCreateNestedManyWithoutPostInput
    like?: likeUncheckedCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaUncheckedCreateNestedManyWithoutPost_media_postIdTopostInput
    share?: shareUncheckedCreateNestedManyWithoutPostInput
    media_postvideos?: mediaUncheckedCreateNestedManyWithoutPost_postvideosInput
    user_savedposts?: userUncheckedCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postCreateOrConnectWithoutNotificationInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutNotificationInput, postUncheckedCreateWithoutNotificationInput>
  }

  export type userCreateWithoutNotification_notification_recipientIdTouserInput = {
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutUserInput
    post_savedposts?: postCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationCreateNestedManyWithoutUser2Input
  }

  export type userUncheckedCreateWithoutNotification_notification_recipientIdTouserInput = {
    id?: number
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postUncheckedCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareUncheckedCreateNestedManyWithoutUserInput
    post_savedposts?: postUncheckedCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationUncheckedCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationUncheckedCreateNestedManyWithoutUser2Input
  }

  export type userCreateOrConnectWithoutNotification_notification_recipientIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutNotification_notification_recipientIdTouserInput, userUncheckedCreateWithoutNotification_notification_recipientIdTouserInput>
  }

  export type userCreateWithoutNotification_notification_senderIdTouserInput = {
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    post_post_userIdTouser?: postCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareCreateNestedManyWithoutUserInput
    post_savedposts?: postCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationCreateNestedManyWithoutUser2Input
  }

  export type userUncheckedCreateWithoutNotification_notification_senderIdTouserInput = {
    id?: number
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    post_post_userIdTouser?: postUncheckedCreateNestedManyWithoutUser_post_userIdTouserInput
    share?: shareUncheckedCreateNestedManyWithoutUserInput
    post_savedposts?: postUncheckedCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationUncheckedCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationUncheckedCreateNestedManyWithoutUser2Input
  }

  export type userCreateOrConnectWithoutNotification_notification_senderIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutNotification_notification_senderIdTouserInput, userUncheckedCreateWithoutNotification_notification_senderIdTouserInput>
  }

  export type postUpsertWithoutNotificationInput = {
    update: XOR<postUpdateWithoutNotificationInput, postUncheckedUpdateWithoutNotificationInput>
    create: XOR<postCreateWithoutNotificationInput, postUncheckedCreateWithoutNotificationInput>
    where?: postWhereInput
  }

  export type postUpdateToOneWithWhereWithoutNotificationInput = {
    where?: postWhereInput
    data: XOR<postUpdateWithoutNotificationInput, postUncheckedUpdateWithoutNotificationInput>
  }

  export type postUpdateWithoutNotificationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutPostNestedInput
    like?: likeUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUpdateManyWithoutPost_media_postIdTopostNestedInput
    user_post_userIdTouser?: userUpdateOneRequiredWithoutPost_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutPostNestedInput
    media_postvideos?: mediaUpdateManyWithoutPost_postvideosNestedInput
    user_savedposts?: userUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type postUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    comment?: commentUncheckedUpdateManyWithoutPostNestedInput
    like?: likeUncheckedUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUncheckedUpdateManyWithoutPost_media_postIdTopostNestedInput
    share?: shareUncheckedUpdateManyWithoutPostNestedInput
    media_postvideos?: mediaUncheckedUpdateManyWithoutPost_postvideosNestedInput
    user_savedposts?: userUncheckedUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type userUpsertWithoutNotification_notification_recipientIdTouserInput = {
    update: XOR<userUpdateWithoutNotification_notification_recipientIdTouserInput, userUncheckedUpdateWithoutNotification_notification_recipientIdTouserInput>
    create: XOR<userCreateWithoutNotification_notification_recipientIdTouserInput, userUncheckedCreateWithoutNotification_notification_recipientIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutNotification_notification_recipientIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutNotification_notification_recipientIdTouserInput, userUncheckedUpdateWithoutNotification_notification_recipientIdTouserInput>
  }

  export type userUpdateWithoutNotification_notification_recipientIdTouserInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutUserNestedInput
    post_savedposts?: postUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUpdateManyWithoutUser2NestedInput
  }

  export type userUncheckedUpdateWithoutNotification_notification_recipientIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUncheckedUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUncheckedUpdateManyWithoutUserNestedInput
    post_savedposts?: postUncheckedUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUncheckedUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type userUpsertWithoutNotification_notification_senderIdTouserInput = {
    update: XOR<userUpdateWithoutNotification_notification_senderIdTouserInput, userUncheckedUpdateWithoutNotification_notification_senderIdTouserInput>
    create: XOR<userCreateWithoutNotification_notification_senderIdTouserInput, userUncheckedCreateWithoutNotification_notification_senderIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutNotification_notification_senderIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutNotification_notification_senderIdTouserInput, userUncheckedUpdateWithoutNotification_notification_senderIdTouserInput>
  }

  export type userUpdateWithoutNotification_notification_senderIdTouserInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    post_post_userIdTouser?: postUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutUserNestedInput
    post_savedposts?: postUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUpdateManyWithoutUser2NestedInput
  }

  export type userUncheckedUpdateWithoutNotification_notification_senderIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    post_post_userIdTouser?: postUncheckedUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUncheckedUpdateManyWithoutUserNestedInput
    post_savedposts?: postUncheckedUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUncheckedUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type postCreateWithoutShareInput = {
    content: string
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutPostInput
    like?: likeCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaCreateNestedManyWithoutPost_media_postIdTopostInput
    notification?: notificationCreateNestedManyWithoutPostInput
    user_post_userIdTouser: userCreateNestedOneWithoutPost_post_userIdTouserInput
    media_postvideos?: mediaCreateNestedManyWithoutPost_postvideosInput
    user_savedposts?: userCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postUncheckedCreateWithoutShareInput = {
    id?: number
    content: string
    createdAt?: Date | string
    userId: number
    comment?: commentUncheckedCreateNestedManyWithoutPostInput
    like?: likeUncheckedCreateNestedManyWithoutPostInput
    media_media_postIdTopost?: mediaUncheckedCreateNestedManyWithoutPost_media_postIdTopostInput
    notification?: notificationUncheckedCreateNestedManyWithoutPostInput
    media_postvideos?: mediaUncheckedCreateNestedManyWithoutPost_postvideosInput
    user_savedposts?: userUncheckedCreateNestedManyWithoutPost_savedpostsInput
  }

  export type postCreateOrConnectWithoutShareInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutShareInput, postUncheckedCreateWithoutShareInput>
  }

  export type userCreateWithoutShareInput = {
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postCreateNestedManyWithoutUser_post_userIdTouserInput
    post_savedposts?: postCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationCreateNestedManyWithoutUser2Input
  }

  export type userUncheckedCreateWithoutShareInput = {
    id?: number
    username: string
    email: string
    password: string
    profilePic?: string | null
    coverPic?: string | null
    bio?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    comment?: commentUncheckedCreateNestedManyWithoutUserInput
    follow_follow_followerIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followerIdTouserInput
    follow_follow_followingIdTouser?: followUncheckedCreateNestedManyWithoutUser_follow_followingIdTouserInput
    like?: likeUncheckedCreateNestedManyWithoutUserInput
    message_message_recipientIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipientIdTouserInput
    message_message_senderIdTouser?: messageUncheckedCreateNestedManyWithoutUser_message_senderIdTouserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
    post_post_userIdTouser?: postUncheckedCreateNestedManyWithoutUser_post_userIdTouserInput
    post_savedposts?: postUncheckedCreateNestedManyWithoutUser_savedpostsInput
    conversationAsUser1?: conversationUncheckedCreateNestedManyWithoutUser1Input
    conversationAsUser2?: conversationUncheckedCreateNestedManyWithoutUser2Input
  }

  export type userCreateOrConnectWithoutShareInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutShareInput, userUncheckedCreateWithoutShareInput>
  }

  export type postUpsertWithoutShareInput = {
    update: XOR<postUpdateWithoutShareInput, postUncheckedUpdateWithoutShareInput>
    create: XOR<postCreateWithoutShareInput, postUncheckedCreateWithoutShareInput>
    where?: postWhereInput
  }

  export type postUpdateToOneWithWhereWithoutShareInput = {
    where?: postWhereInput
    data: XOR<postUpdateWithoutShareInput, postUncheckedUpdateWithoutShareInput>
  }

  export type postUpdateWithoutShareInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutPostNestedInput
    like?: likeUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUpdateManyWithoutPost_media_postIdTopostNestedInput
    notification?: notificationUpdateManyWithoutPostNestedInput
    user_post_userIdTouser?: userUpdateOneRequiredWithoutPost_post_userIdTouserNestedInput
    media_postvideos?: mediaUpdateManyWithoutPost_postvideosNestedInput
    user_savedposts?: userUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type postUncheckedUpdateWithoutShareInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    comment?: commentUncheckedUpdateManyWithoutPostNestedInput
    like?: likeUncheckedUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUncheckedUpdateManyWithoutPost_media_postIdTopostNestedInput
    notification?: notificationUncheckedUpdateManyWithoutPostNestedInput
    media_postvideos?: mediaUncheckedUpdateManyWithoutPost_postvideosNestedInput
    user_savedposts?: userUncheckedUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type userUpsertWithoutShareInput = {
    update: XOR<userUpdateWithoutShareInput, userUncheckedUpdateWithoutShareInput>
    create: XOR<userCreateWithoutShareInput, userUncheckedCreateWithoutShareInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutShareInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutShareInput, userUncheckedUpdateWithoutShareInput>
  }

  export type userUpdateWithoutShareInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUpdateManyWithoutUser_post_userIdTouserNestedInput
    post_savedposts?: postUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUpdateManyWithoutUser2NestedInput
  }

  export type userUncheckedUpdateWithoutShareInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUncheckedUpdateManyWithoutUser_post_userIdTouserNestedInput
    post_savedposts?: postUncheckedUpdateManyWithoutUser_savedpostsNestedInput
    conversationAsUser1?: conversationUncheckedUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type commentCreateManyUserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    postId: number
  }

  export type followCreateManyUser_follow_followerIdTouserInput = {
    id?: number
    followingId: number
    createdAt?: Date | string
  }

  export type followCreateManyUser_follow_followingIdTouserInput = {
    id?: number
    followerId: number
    createdAt?: Date | string
  }

  export type likeCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    postId: number
  }

  export type messageCreateManyUser_message_recipientIdTouserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    senderId: number
    conversationId: number
  }

  export type messageCreateManyUser_message_senderIdTouserInput = {
    id?: number
    content: string
    createdAt?: Date | string
    recipientId: number
    conversationId: number
  }

  export type notificationCreateManyUser_notification_recipientIdTouserInput = {
    id?: number
    type: string
    read?: boolean
    createdAt?: Date | string
    senderId: number
    postId?: number | null
  }

  export type notificationCreateManyUser_notification_senderIdTouserInput = {
    id?: number
    type: string
    read?: boolean
    createdAt?: Date | string
    recipientId: number
    postId?: number | null
  }

  export type postCreateManyUser_post_userIdTouserInput = {
    id?: number
    content: string
    createdAt?: Date | string
  }

  export type shareCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    postId: number
  }

  export type conversationCreateManyUser1Input = {
    id?: number
    user2Id: number
    createdAt?: Date | string
  }

  export type conversationCreateManyUser2Input = {
    id?: number
    user1Id: number
    createdAt?: Date | string
  }

  export type commentUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postUpdateOneRequiredWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type commentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type followUpdateWithoutUser_follow_followerIdTouserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_follow_followingIdTouser?: userUpdateOneRequiredWithoutFollow_follow_followingIdTouserNestedInput
  }

  export type followUncheckedUpdateWithoutUser_follow_followerIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type followUncheckedUpdateManyWithoutUser_follow_followerIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type followUpdateWithoutUser_follow_followingIdTouserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_follow_followerIdTouser?: userUpdateOneRequiredWithoutFollow_follow_followerIdTouserNestedInput
  }

  export type followUncheckedUpdateWithoutUser_follow_followingIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type followUncheckedUpdateManyWithoutUser_follow_followingIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postUpdateOneRequiredWithoutLikeNestedInput
  }

  export type likeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type likeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type messageUpdateWithoutUser_message_recipientIdTouserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_message_senderIdTouser?: userUpdateOneRequiredWithoutMessage_message_senderIdTouserNestedInput
    conversation?: conversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messageUncheckedUpdateWithoutUser_message_recipientIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
  }

  export type messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
  }

  export type messageUpdateWithoutUser_message_senderIdTouserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_message_recipientIdTouser?: userUpdateOneRequiredWithoutMessage_message_recipientIdTouserNestedInput
    conversation?: conversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messageUncheckedUpdateWithoutUser_message_senderIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
  }

  export type messageUncheckedUpdateManyWithoutUser_message_senderIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
  }

  export type notificationUpdateWithoutUser_notification_recipientIdTouserInput = {
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postUpdateOneWithoutNotificationNestedInput
    user_notification_senderIdTouser?: userUpdateOneRequiredWithoutNotification_notification_senderIdTouserNestedInput
  }

  export type notificationUncheckedUpdateWithoutUser_notification_recipientIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificationUpdateWithoutUser_notification_senderIdTouserInput = {
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postUpdateOneWithoutNotificationNestedInput
    user_notification_recipientIdTouser?: userUpdateOneRequiredWithoutNotification_notification_recipientIdTouserNestedInput
  }

  export type notificationUncheckedUpdateWithoutUser_notification_senderIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type postUpdateWithoutUser_post_userIdTouserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutPostNestedInput
    like?: likeUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUpdateManyWithoutPost_media_postIdTopostNestedInput
    notification?: notificationUpdateManyWithoutPostNestedInput
    share?: shareUpdateManyWithoutPostNestedInput
    media_postvideos?: mediaUpdateManyWithoutPost_postvideosNestedInput
    user_savedposts?: userUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type postUncheckedUpdateWithoutUser_post_userIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutPostNestedInput
    like?: likeUncheckedUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUncheckedUpdateManyWithoutPost_media_postIdTopostNestedInput
    notification?: notificationUncheckedUpdateManyWithoutPostNestedInput
    share?: shareUncheckedUpdateManyWithoutPostNestedInput
    media_postvideos?: mediaUncheckedUpdateManyWithoutPost_postvideosNestedInput
    user_savedposts?: userUncheckedUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type postUncheckedUpdateManyWithoutUser_post_userIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type shareUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postUpdateOneRequiredWithoutShareNestedInput
  }

  export type shareUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type shareUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type postUpdateWithoutUser_savedpostsInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutPostNestedInput
    like?: likeUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUpdateManyWithoutPost_media_postIdTopostNestedInput
    notification?: notificationUpdateManyWithoutPostNestedInput
    user_post_userIdTouser?: userUpdateOneRequiredWithoutPost_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutPostNestedInput
    media_postvideos?: mediaUpdateManyWithoutPost_postvideosNestedInput
  }

  export type postUncheckedUpdateWithoutUser_savedpostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    comment?: commentUncheckedUpdateManyWithoutPostNestedInput
    like?: likeUncheckedUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUncheckedUpdateManyWithoutPost_media_postIdTopostNestedInput
    notification?: notificationUncheckedUpdateManyWithoutPostNestedInput
    share?: shareUncheckedUpdateManyWithoutPostNestedInput
    media_postvideos?: mediaUncheckedUpdateManyWithoutPost_postvideosNestedInput
  }

  export type postUncheckedUpdateManyWithoutUser_savedpostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type conversationUpdateWithoutUser1Input = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user2?: userUpdateOneRequiredWithoutConversationAsUser2NestedInput
    messages?: messageUpdateManyWithoutConversationNestedInput
  }

  export type conversationUncheckedUpdateWithoutUser1Input = {
    id?: IntFieldUpdateOperationsInput | number
    user2Id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type conversationUncheckedUpdateManyWithoutUser1Input = {
    id?: IntFieldUpdateOperationsInput | number
    user2Id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationUpdateWithoutUser2Input = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: userUpdateOneRequiredWithoutConversationAsUser1NestedInput
    messages?: messageUpdateManyWithoutConversationNestedInput
  }

  export type conversationUncheckedUpdateWithoutUser2Input = {
    id?: IntFieldUpdateOperationsInput | number
    user1Id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type conversationUncheckedUpdateManyWithoutUser2Input = {
    id?: IntFieldUpdateOperationsInput | number
    user1Id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentCreateManyPostInput = {
    id?: number
    content: string
    createdAt?: Date | string
    userId: number
  }

  export type likeCreateManyPostInput = {
    id?: number
    createdAt?: Date | string
    userId: number
  }

  export type mediaCreateManyPost_media_postIdTopostInput = {
    id?: number
    url: string
    type: string
    createdAt?: Date | string
  }

  export type notificationCreateManyPostInput = {
    id?: number
    type: string
    read?: boolean
    createdAt?: Date | string
    recipientId: number
    senderId: number
  }

  export type shareCreateManyPostInput = {
    id?: number
    createdAt?: Date | string
    userId: number
  }

  export type commentUpdateWithoutPostInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutCommentNestedInput
  }

  export type commentUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type commentUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type likeUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutLikeNestedInput
  }

  export type likeUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type likeUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type mediaUpdateWithoutPost_media_postIdTopostInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post_postvideos?: postUpdateManyWithoutMedia_postvideosNestedInput
  }

  export type mediaUncheckedUpdateWithoutPost_media_postIdTopostInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post_postvideos?: postUncheckedUpdateManyWithoutMedia_postvideosNestedInput
  }

  export type mediaUncheckedUpdateManyWithoutPost_media_postIdTopostInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUpdateWithoutPostInput = {
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_notification_recipientIdTouser?: userUpdateOneRequiredWithoutNotification_notification_recipientIdTouserNestedInput
    user_notification_senderIdTouser?: userUpdateOneRequiredWithoutNotification_notification_senderIdTouserNestedInput
  }

  export type notificationUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
  }

  export type notificationUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
  }

  export type shareUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutShareNestedInput
  }

  export type shareUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type shareUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type mediaUpdateWithoutPost_postvideosInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post_media_postIdTopost?: postUpdateOneRequiredWithoutMedia_media_postIdTopostNestedInput
  }

  export type mediaUncheckedUpdateWithoutPost_postvideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type mediaUncheckedUpdateManyWithoutPost_postvideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type userUpdateWithoutPost_savedpostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutUserNestedInput
    conversationAsUser1?: conversationUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUpdateManyWithoutUser2NestedInput
  }

  export type userUncheckedUpdateWithoutPost_savedpostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUncheckedUpdateManyWithoutUserNestedInput
    follow_follow_followerIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followerIdTouserNestedInput
    follow_follow_followingIdTouser?: followUncheckedUpdateManyWithoutUser_follow_followingIdTouserNestedInput
    like?: likeUncheckedUpdateManyWithoutUserNestedInput
    message_message_recipientIdTouser?: messageUncheckedUpdateManyWithoutUser_message_recipientIdTouserNestedInput
    message_message_senderIdTouser?: messageUncheckedUpdateManyWithoutUser_message_senderIdTouserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
    post_post_userIdTouser?: postUncheckedUpdateManyWithoutUser_post_userIdTouserNestedInput
    share?: shareUncheckedUpdateManyWithoutUserNestedInput
    conversationAsUser1?: conversationUncheckedUpdateManyWithoutUser1NestedInput
    conversationAsUser2?: conversationUncheckedUpdateManyWithoutUser2NestedInput
  }

  export type userUncheckedUpdateManyWithoutPost_savedpostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    coverPic?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postUpdateWithoutMedia_postvideosInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentUpdateManyWithoutPostNestedInput
    like?: likeUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUpdateManyWithoutPost_media_postIdTopostNestedInput
    notification?: notificationUpdateManyWithoutPostNestedInput
    user_post_userIdTouser?: userUpdateOneRequiredWithoutPost_post_userIdTouserNestedInput
    share?: shareUpdateManyWithoutPostNestedInput
    user_savedposts?: userUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type postUncheckedUpdateWithoutMedia_postvideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    comment?: commentUncheckedUpdateManyWithoutPostNestedInput
    like?: likeUncheckedUpdateManyWithoutPostNestedInput
    media_media_postIdTopost?: mediaUncheckedUpdateManyWithoutPost_media_postIdTopostNestedInput
    notification?: notificationUncheckedUpdateManyWithoutPostNestedInput
    share?: shareUncheckedUpdateManyWithoutPostNestedInput
    user_savedposts?: userUncheckedUpdateManyWithoutPost_savedpostsNestedInput
  }

  export type postUncheckedUpdateManyWithoutMedia_postvideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type messageCreateManyConversationInput = {
    id?: number
    content: string
    createdAt?: Date | string
    senderId: number
    recipientId: number
  }

  export type messageUpdateWithoutConversationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_message_senderIdTouser?: userUpdateOneRequiredWithoutMessage_message_senderIdTouserNestedInput
    user_message_recipientIdTouser?: userUpdateOneRequiredWithoutMessage_message_recipientIdTouserNestedInput
  }

  export type messageUncheckedUpdateWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
  }

  export type messageUncheckedUpdateManyWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
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