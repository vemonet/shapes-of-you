
git pull
docker-compose down
echo "Deleting Virtuoso database"
sudo rm -rf /data/shapes-of-you/virtuoso
docker-compose up -d

wait 10
# /virtuoso-entrypoint.sh

export ENDPOINT_PASSWORD="password"
export LDP_CONTAINER="shapes-of-you-virtuoso"

docker exec -it $LDP_CONTAINER apt update
docker exec -it $LDP_CONTAINER apt install -y wget

# Install VAD packages framework and briefcase
docker exec -it $LDP_CONTAINER wget -O /opt/virtuoso-opensource/vad/ods_framework_dav.vad http://download3.openlinksw.com/uda/vad-vos-packages/7.2/ods_framework_dav.vad
docker exec -it $LDP_CONTAINER wget -O /opt/virtuoso-opensource/vad/ods_briefcase_dav.vad http://download3.openlinksw.com/uda/vad-vos-packages/7.2/ods_briefcase_dav.vad
docker exec -it $LDP_CONTAINER isql -U dba -P $ENDPOINT_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/ods_framework_dav.vad', 0)"
docker exec -it $LDP_CONTAINER isql -U dba -P $ENDPOINT_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/ods_briefcase_dav.vad', 0)"

# Create ldp user (but not the folder, cf. http://docs.openlinksw.com/virtuoso/usermodel/#vumuseroptions)
docker exec -it $LDP_CONTAINER isql -U dba -P $ENDPOINT_PASSWORD exec="user_create ('ldp', '$ENDPOINT_PASSWORD', vector('DAV_ENABLE', 1, 'HOME', '/DAV/home/ldp/'));"


# Enable LDP props on a folder
# DB.DBA.DAV_PROP_SET ('/DAV/ldp/', 'LDP', 'ldp:BasicContainer', 'dav','dav', 1);


# docker exec -it $LDP_CONTAINER isql-v -U dba -P $ENDPOINT_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/ods_framework_dav.vad', 0)"
# docker exec -it $LDP_CONTAINER isql-v -U dba -P $ENDPOINT_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/ods_briefcase_dav.vad', 0)"

# docker exec -it $LDP_CONTAINER isql-v -U dba -P $ENDPOINT_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/ods_framework_dav.vad', 0)"