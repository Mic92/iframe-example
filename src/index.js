import jwt from 'jsonwebtoken';
import fs from 'fs';
import exec from 'child_process';

const main = () => {
  if (process.argv.length < 3) {
    console.log('Usage: node get-url.js <jwt-key>');
    process.exit(1);
  }
  const jwt_key_path = process.argv[2];
  const jwt_key = fs.readFileSync(jwt_key_path, 'utf8');

  const token = jwt.sign(
    { sub: "1001" },
    jwt_key,
    {
      expiresIn: '1h',
      algorithm: 'RS256',
    }
  );

  fs.writeFileSync('iframe.html', "<iframe src='https://grafana.monitoring-00-cluster.kuutamo.computer/d/example-dashboard/new-dashboard?auth_token=" + token + "' width='100%' height='100%' frameborder='0'></iframe>");
  exec.execSync("firefox iframe.html");
}

main();
