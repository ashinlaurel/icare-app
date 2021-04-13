cd ~/icare-app/
sudo git fetch --all
sudo git reset --hard origin/landingPage
cd /var/www/
sudo rm -r build/
cd ~/icare-app/FrontEnd/
sudo mv build/ /var/www/
sudo systemctl restart nginx
sudo pm2 restart all

