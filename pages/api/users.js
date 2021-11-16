import {executeQuery} from '../../lib/db.js';

export default async function handler(request, response) {
  const result = [];

  try {
    result = await executeQuery({
      query: 'SELECT * FROM users',
      values: []
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  return res.status(200).json({ users: result[0] })
}