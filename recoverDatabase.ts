import fs from 'fs';
import path from 'path';

import { Pool } from 'mysql2/promise';
import connection from './src/models/connection';

export default async function recreateDatabase(conn: Pool) {
  try {
    const filePath = path.resolve(__dirname, 'Trybesmith.sql');
    const dbContent = fs.readFileSync(filePath).toString();
    const queries = dbContent.split(';').filter((p) => p.trim());
    for (let i = 0; i < queries.length; i += 1) { 
      const query = queries[i];
      // eslint-disable-next-line no-await-in-loop
      await conn.query(query);
    }
  } catch (error) {
    console.log('Banco Falha em restaurar o Banco', error);
  }
}

recreateDatabase(connection)
  .then(async () => {
    console.log('Banco Restaurado com sucesso');
    await connection.end();
    process.exit(0);
  });
