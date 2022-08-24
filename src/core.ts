import Client from 'ssh2-sftp-client'
import type { ConnectOptions } from 'ssh2-sftp-client'

import { loadConfig } from './util.js'


export const publish = async (config: ConnectOptions) => {
  const sftp = new Client()

  await sftp.connect(config)

  const data = await sftp.list('/')

  data.forEach(item => console.log(item.name))
}

console.log(
  loadConfig('./publishrc')
)




