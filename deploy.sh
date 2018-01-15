# Deploys to the robogals server
npm run build
ssh root@robogalsbrisbane.org "rm -rfv /var/www/htdocs/client/*"
scp -r build/* root@robogalsbrisbane.org:/var/www/htdocs/client/
