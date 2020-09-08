docker build -t baxhenbasicarchjs.azurecr.io/basic-arch-js-web:latest -t baxhenbasicarchjs.azurecr.io/basic-arch-js-web:$GIT_SHA -f ./web/Dockerfile ./web
docker build -t baxhenbasicarchjs.azurecr.io/basic-arch-js-server:latest -t baxhenbasicarchjs.azurecr.io/basic-arch-js-server:$GIT_SHA -f ./server/Dockerfile ./server

docker push baxhenbasicarchjs.azurecr.io/basic-arch-js-web:latest
docker push baxhenbasicarchjs.azurecr.io/basic-arch-js-server:latest

docker push baxhenbasicarchjs.azurecr.io/basic-arch-js-web:$GIT_SHA
docker push baxhenbasicarchjs.azurecr.io/basic-arch-js-server:$GIT_SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=baxhenbasicarchjs.azurecr.io/basic-arch-js-server:$GIT_SHA
kubectl set image deployments/web-deployment web=baxhenbasicarchjs.azurecr.io/basic-arch-js-web:$GIT_SHA