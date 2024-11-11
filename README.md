
    <h1>Prototipo Publish/Subscribe con RabbitMQ</h1>
    <p>Este repositorio contiene un prototipo de mensajería Publish/Subscribe usando RabbitMQ. El sistema está distribuido en dos máquinas: una para el broker y los publicadores, y otra para los suscriptores. Incluye publicadores y suscriptores en Python y JavaScript.</p>

    <h2>Pasos de instalación y ejecución</h2>
    <ol>
        <li><strong>Iniciar el broker RabbitMQ</strong> en la máquina principal con Docker:
            <pre><code>sudo docker run -d --name rabbitmq-broker -p 5672:5672 -p 15672:15672 rabbitmq:3-management</code></pre>
        </li>
        <li><strong>Instalar dependencias</strong> para los scripts de cada lenguaje:
            <ul>
                <li>Python: <code>pip install pika</code></li>
                <li>JavaScript: <code>npm install amqplib</code></li>
            </ul>
        </li>
        <li><strong>Ejecutar publicadores</strong> en la máquina del broker:
            <pre><code>python pub_python.py
node pub_javascript.js</code></pre>
        </li>
        <li><strong>Ejecutar suscriptores</strong> en la máquina de suscriptores:
            <pre><code>python sub_python.py
node sub_javascript.js</code></pre>
        </li>
    </ol>
</html>
