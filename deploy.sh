docker build -t gdeimpacta.azurecr.io/gde-web:latest -t gdeimpacta.azurecr.io/gde-web:$GIT_SHA -f ./web/Dockerfile ./web
docker build -t gdeimpacta.azurecr.io/gde-server:latest -t gdeimpacta.azurecr.io/gde-server:$GIT_SHA -f ./server/Dockerfile ./server

docker push gdeimpacta.azurecr.io/gde-web:latest
docker push gdeimpacta.azurecr.io/gde-server:latest

docker push gdeimpacta.azurecr.io/gde-web:$GIT_SHA
docker push gdeimpacta.azurecr.io/gde-server:$GIT_SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=gdeimpacta.azurecr.io/gde-server:$GIT_SHA
kubectl set image deployments/web-deployment web=gdeimpacta.azurecr.io/gde-web:$GIT_SHA