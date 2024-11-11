const amqp = require('amqplib');

async function publishMessage() {
    const connection = await amqp.connect('amqp://192.168.1.88');
    const channel = await connection.createChannel();
    const queue = 'test_queue';

    await channel.assertQueue(queue, { durable: false });

    setInterval(() => {
        const message = 'Mensaje del segundo publicador en JavaScript';
        channel.sendToQueue(queue, Buffer.from(message));
        console.log("Mensaje enviado desde el segundo publicador en JavaScript");
    }, 10000);
}

publishMessage().catch(console.error);

