import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('192.168.1.88'))
channel = connection.channel()
channel.queue_declare(queue='test_queue')

def callback(ch, method, properties, body):
    print(f"Suscriptor en Python recibió: {body}")

channel.basic_consume(queue='test_queue', on_message_callback=callback, auto_ack=True)
print("Esperando mensajes. Presiona CTRL+C para salir.")
channel.start_consuming()

