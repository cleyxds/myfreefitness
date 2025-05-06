type LogTypes = "created" | "updated" | "archived"

type Log = {
  // @WARN: serverTimestamp() does not work with arrayUnion, that's why we use Date
  timestamp: Date
  action: LogTypes
  actionBy: string
  details?: Record<string, unknown> // Optional field for additional information
}
