// Example usage of Redis client
import { redis } from './redis';

async function example() {
  await redis.set('key', 'value');
  const value = await redis.get('key');
  console.log('Redis value:', value);
}

example();
