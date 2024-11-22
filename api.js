const twilio = require('twilio');
const accountSid = 'SEU_ACCOUNT_SID';
const authToken = 'SEU_AUTH_TOKEN';

const client = new twilio(accountSid, authToken);

client.messages
  .create({
    from: 'whatsapp:+14155238886', // Número do Twilio
    to: 'whatsapp:+5511912345678', // Seu número
    body: 'Olá! Mensagem via Twilio WhatsApp API',
  })
  .then((message) => console.log(message.sid))
  .catch((error) => console.error(error));
