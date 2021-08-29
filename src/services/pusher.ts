import Pusher from 'pusher';

const pusher = new Pusher({
  appId: '1257636',
  key: '2c44b5b14683ca33b856',
  secret: '3f4df93f7910c25e0d36',
  cluster: 'us2',
  useTLS: true,
});

export default pusher;
