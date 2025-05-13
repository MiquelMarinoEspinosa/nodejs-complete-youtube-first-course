### Docker environment

Requires docker installed. In the near future `Dockerfile` and `compose.yaml` files will be created :)

- Initialize docker container
```
docker run -i -t -d --name node -v .:/app -w '/app' node:alpine
```

Access to docker container
```
docker exec -i -t node sh
```
