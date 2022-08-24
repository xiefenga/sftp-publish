import Client from 'ssh2-sftp-client';
import { createRequire } from 'module';
const sftp = new Client();
export const loadConfig = async (path) => {
    const require = createRequire(import.meta.url);
};
const config = {
    host: 'xiefeng.tech',
    port: 22,
    username: 'root',
    password: 'xf.1314.X'
};
sftp.connect(config)
    .then(() => sftp.list('/'))
    .then(data => data.forEach(item => console.log(item.name)))
    .catch(err => {
    console.log(err, 'catch error');
}).then(() => sftp.end());
//# sourceMappingURL=core.js.map