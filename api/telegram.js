import https from 'https';

function sendMessage(token, chatId, text) {
  const data = JSON.stringify({
    chat_id: chatId,
    text: text
  });

  const options = {
    hostname: 'api.telegram.org',
    path: /bot${token}/sendMessage,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  const req = https.request(options);
  req.write(data);
  req.end();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).send('OK');
  }

  const update = req.body;

  if (update.message && update.message.text) {
    const chatId = update.message.chat.id;

    sendMessage(
      '8347537374:AAFl1J1PzZsGXmT1gaW9I7sTUCsdqRKTRZM',
      chatId,
      '✅ Бот работает и отвечает!'
    );
  }

  return res.status(200).send('OK');
}
