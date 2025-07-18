
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.10.1
 * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
 */
Prisma.prismaVersion = {
  client: "6.10.1",
  engine: "9b628578b3b7cae625e8c927178f15a170e74a9c"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Sqlx_migrationsScalarFieldEnum = {
  version: 'version',
  description: 'description',
  installed_on: 'installed_on',
  success: 'success',
  checksum: 'checksum',
  execution_time: 'execution_time'
};

exports.Prisma.Api_request_logsScalarFieldEnum = {
  id: 'id',
  endpoint: 'endpoint',
  lst_symbol: 'lst_symbol',
  request_status: 'request_status',
  response_time_ms: 'response_time_ms',
  error_message: 'error_message',
  retry_count: 'retry_count',
  created_at: 'created_at'
};

exports.Prisma.DepositsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  amount: 'amount',
  type: 'type',
  source_chain: 'source_chain',
  tx_hash: 'tx_hash',
  deposited_at: 'deposited_at'
};

exports.Prisma.Epoch_snapshotsScalarFieldEnum = {
  id: 'id',
  epoch: 'epoch',
  snapshot_time: 'snapshot_time'
};

exports.Prisma.Lst_apy_dataScalarFieldEnum = {
  id: 'id',
  lst_symbol: 'lst_symbol',
  apy_type: 'apy_type',
  apy_value: 'apy_value',
  collected_at: 'collected_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Lst_holder_dataScalarFieldEnum = {
  id: 'id',
  lst_symbol: 'lst_symbol',
  total_holders: 'total_holders',
  total_supply: 'total_supply',
  collected_at: 'collected_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Lst_strategyScalarFieldEnum = {
  id: 'id',
  epoch_snapshot_id: 'epoch_snapshot_id',
  chosen_lst: 'chosen_lst',
  decided_at: 'decided_at'
};

exports.Prisma.Lst_tokensScalarFieldEnum = {
  id: 'id',
  symbol: 'symbol',
  mint_address: 'mint_address',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Lst_tvl_dataScalarFieldEnum = {
  id: 'id',
  lst_symbol: 'lst_symbol',
  tvl_value: 'tvl_value',
  collected_at: 'collected_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.User_snapshotsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  epoch_snapshot_id: 'epoch_snapshot_id',
  current_position: 'current_position',
  sol_value: 'sol_value'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  privy_id: 'privy_id'
};

exports.Prisma.WithdrawalsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  amount: 'amount',
  type: 'type',
  destination_chain: 'destination_chain',
  tx_hash: 'tx_hash',
  withdrawn_at: 'withdrawn_at'
};

exports.Prisma.User_earningsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  epoch_snapshot_id: 'epoch_snapshot_id',
  earned_value: 'earned_value',
  calculated_at: 'calculated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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
  withdrawals: 'withdrawals',
  user_earnings: 'user_earnings'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
