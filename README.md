### Docker environment

Requires docker installed. In the near future `Dockerfile` and `compose.yaml` files will be created :)

- Initialize docker container
```
docker build --build-arg USER_NAME=$(git config --global user.name) --build-arg USER_EMAIL=$(git config --global user.email) -t app/node .
```

```
docker run -i -t -d --rm --name app.node -v .:/app -v ~
/.ssh:/root/.ssh app/node
```

Access to docker container
```
docker exec -i -t app.node sh
```
