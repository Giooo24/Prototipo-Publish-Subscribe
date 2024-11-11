# Prototipo Publish/Subscribe con RabbitMQ

Este repositorio contiene un prototipo de mensajería Publish/Subscribe utilizando RabbitMQ. El sistema está distribuido en dos máquinas: una para el broker y los publicadores, y otra para los suscriptores. Los publicadores y suscriptores están implementados en Python y JavaScript.

## Requisitos

- Docker (para ejecutar el contenedor de RabbitMQ)
- Python 3 y `pika` para el cliente de Python
- Node.js y `amqplib` para el cliente de JavaScript

### Iniciar el broker RabbitMQ

Ejecutar el siguiente comando en la máquina principal para iniciar el broker RabbitMQ:

sudo docker run -d --name rabbitmq-broker -p 5672:5672 -p 15672:15672 rabbitmq:3-management

Posteriormente, ejecutar los publisher en la misma máquina y en la segunda máquina los subscriber. Para esta segunda máquina se utilizó Multipass, que  permite crear VMs Ubuntu.

## Video de Ejecución

Ejecución del prototipo en el siguiente enlace: [Video de Ejecución](https://youtu.be/4oWaccE2DOY)

