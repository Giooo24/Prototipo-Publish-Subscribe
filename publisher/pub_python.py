import pika
import time

connection = pika.BlockingConnection(pika.ConnectionParameters('192.168.1.88'))
channel = connection.channel()
channel.queue_declare(queue='test_queue')

while True:
    channel.basic_publish(exchange='', routing_key='test_queue', body='Mensaje del publicador en Python')
    print("Mensaje enviado desde publicador en Python")
    time.sleep(10)

connection.close()

