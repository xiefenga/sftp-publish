import { resolve } from 'node:path'
import type { ConnectOptions } from 'ssh2-sftp-client'

const defaultConfigFilename = 'publishrc.js'

export const defaultConfigPath = resolve(process.cwd(), defaultConfigFilename)

export interface PublishConfig {
  connection: ConnectOptions
  source: string
  dest: string
}

const isObject = (obj: any): boolean => {
  return obj instanceof Object
}

const validateConfig = (config: any): config is PublishConfig => {
  return isObject(config) && isObject(config.connection) && typeof config.source === 'string' && typeof config.dest === 'string'
}

export const loadConfig = async (path: string): Promise<PublishConfig> => {
  const config = await import(path)
  if (validateConfig(config)) {
    return config
  } else {
    throw new TypeError("")
  }
}