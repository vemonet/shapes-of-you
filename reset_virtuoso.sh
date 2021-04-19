
git pull
docker-compose down
echo "Deleting Virtuoso database"
sudo rm -rf /data/shapes-of-you/virtuoso
docker-compose up -d

wait 10
# /virtuoso-entrypoint.sh

docker exec -it shapes-of-you-virtuoso apt update
docker exec -it shapes-of-you-virtuoso apt install -y wget

docker exec -it shapes-of-you-virtuoso wget -O /opt/virtuoso-opensource/vad/ods_framework_dav.vad http://download3.openlinksw.com/uda/vad-vos-packages/7.2/ods_framework_dav.vad
docker exec -it shapes-of-you-virtuoso wget -O /opt/virtuoso-opensource/vad/ods_briefcase_dav.vad http://download3.openlinksw.com/uda/vad-vos-packages/7.2/ods_briefcase_dav.vad
docker exec -it shapes-of-you-virtuoso isql -U dba -P $ENDPOINT_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/ods_framework_dav.vad', 0)"
docker exec -it shapes-of-you-virtuoso isql -U dba -P $ENDPOINT_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/ods_briefcase_dav.vad', 0)"

# docker exec -it shapes-of-you-virtuoso isql-v -U dba -P $ENDPOINT_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/ods_framework_dav.vad', 0)"
# docker exec -it shapes-of-you-virtuoso isql-v -U dba -P $ENDPOINT_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/ods_briefcase_dav.vad', 0)"

# docker exec -it shapes-of-you-virtuoso isql-v -U dba -P $ENDPOINT_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/ods_framework_dav.vad', 0)"