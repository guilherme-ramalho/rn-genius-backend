import express from 'express';
import pusher from './services/pusher';

const app = express();

app.post('/startGamingRoom', (request, response) => {
  const { channelId, eventId } = request.body;

  pusher.trigger(channelId, eventId, {
    message: 'hello world',
  });

  return response.send('gaming room initialized');
});

app.listen(3333, () => {
  console.log('Server listening on port 3333');
});
