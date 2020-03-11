DOCKER_RABBIT_NAME=command-post-rabbit
DOCKER_REDIS_NAME=command-post-redis

# RabbitMQ
docker pull rabbitmq
docker stop $DOCKER_RABBIT_NAME 2>/dev/null
docker rm $DOCKER_RABBIT_NAME 2>/dev/null
docker run -d --hostname local-rabbit --name $DOCKER_RABBIT_NAME rabbitmq:3

# Redis
docker pull redis
docker stop $DOCKER_REDIS_NAME 2>/dev/null
docker rm $DOCKER_REDIS_NAME 2>/dev/null
docker run --name $DOCKER_REDIS_NAME -d redis