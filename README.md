## Aplicativo construido com Node, React e Docker para gestão de estoque

## Iniciando o projeto

- entre no diretório web e rode npm i
- entre no diretório server e rode npm i

para que o projeto funcione corretamente será necessário o preenchimento das seguintes
variáveis de ambiente:
Encontradas no arquivo docker-compose.yml:

- WEB_URL(url do front padrão localhost:3000 caso use ngrok para expor essa porta coloque o url do ngrok)
- MONGO_URI(uri de conexão do banco de dados MongoDB, criar um cluster no MongoATLAS ou colocar o uri de uma instância local)
- EMAIL(email do Gmail que será utilizado para enviar os emails da aplicação, configurar no gmail para autorizar uso de fontes não seguras)
- EMAIL_PASSWORD(senha do email)
- JWT_SECRET(string aleatória para a criptografia dos tokens)
- COMPANY_NAME(nome da empresa)
- FACEBOOK_URL(facebook da empresa)
- CENTRAL_AJUDA_URL(central de ajuda da empresa)

Encontradas no arquivo web/src/utils/environment.js:
-BASE_URL(o mesmo valor da variável citada acima WEB_URL)
