import { Hono } from 'hono';
import { env } from 'hono/adapter';

const app = new Hono();

app.get('/', (c) => {
  const { NAME } = env<{ NAME: string }>(c);

  return c.json({ msg: `Hello from ${NAME}` });
});

export default app;
