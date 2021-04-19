
git pull
docker-compose down
echo "Deleting Virtuoso database"
sudo rm -rf /data/shapes-of-you/virtuoso
docker-compose up -d

# wget -O /usr/local/virtuoso-opensource/share/virtuoso/vad/ods_framework_dav.vad http://download3.openlinksw.com/uda/vad-vos-packages/7.2/ods_framework_dav.vad
# wget -O /usr/local/virtuoso-opensource/share/virtuoso/vad/ods_briefcase_dav.vad http://download3.openlinksw.com/uda/vad-vos-packages/7.2/ods_briefcase_dav.vad
# isql-v -U dba -P $ENDPOINT_PASSWORD exec="vad_install ('/usr/local/virtuoso-opensource/share/virtuoso/vad/ods_framework_dav.vad', 0)"
# isql-v -U dba -P $ENDPOINT_PASSWORD exec="vad_install ('/usr/local/virtuoso-opensource/share/virtuoso/vad/ods_briefcase_dav.vad', 0)"

# docker exec -it d2s-virtuoso isql-v -U dba -P $ENDPOINT_PASSWORD exec="vad_install ('/usr/local/virtuoso-opensource/share/virtuoso/vad/ods_framework_dav.vad', 0)"