# Deploys to the robogals server
npm run build
ssh root@robogalsbrisbane.org "rm -rfv /var/www/client/*"
scp -r build/* root@robogalsbrisbane.org:/var/www/client/
