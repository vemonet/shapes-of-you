
git pull
docker-compose down
echo "Deleting Virtuoso database"
sudo rm -rf /data/shapes-of-you/virtuoso
docker-compose up -d