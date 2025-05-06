export function createLog(
  type: LogTypes,
  accountId: string,
  details?: Record<string, any>
): Log {
  const detailsSpread = details && !!Object.keys(details).length ? { details } : {}

  return {
    timestamp: new Date(),
    action: type,
    actionBy: accountId,
    ...detailsSpread,
  }
}
