const amqp = require('amqplib');

async function subscribeMessage() {
    const connection = await amqp.connect('amqp://192.168.1.88');
    const channel = await connection.createChannel();
    const queue = 'test_queue';

    await channel.assertQueue(queue, { durable: false });

    console.log("Esperando mensajes.");
    channel.consume(queue, (message) => {
        console.log(`Segundo suscriptor en JavaScript recibió: ${message.content.toString()}`);
    }, { noAck: true });
}

subscribeMessage().catch(console.error);

