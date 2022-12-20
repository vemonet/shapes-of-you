
# git pull
# docker-compose down
# # echo "Deleting Virtuoso database"
# # sudo rm -rf /data/shapes-of-you/virtuoso
# docker-compose up -d
# https://medium.com/virtuoso-blog/five-simple-steps-to-experience-the-power-of-a-semantic-web-of-linked-data-using-virtuoso-3e016d01dfbe
# https://vos.openlinksw.com/owiki/wiki/VOS/VirtGraphProtocolCURLExamples

# wait 10

export DBA_PASSWORD=$(cat .env | grep VIRTUOSO_PASSWORD | sed 's/VIRTUOSO_PASSWORD=//g')


# docker exec -it $LDP_CONTAINER virtuoso apt update

docker-compose exec virtuoso apt update
docker-compose exec virtuoso apt install -y wget

# Install VAD packages framework and briefcase
docker-compose exec virtuoso wget -O /opt/virtuoso-opensource/vad/ods_framework_dav.vad http://download3.openlinksw.com/uda/vad-vos-packages/7.2/ods_framework_dav.vad
docker-compose exec virtuoso wget -O /opt/virtuoso-opensource/vad/ods_briefcase_dav.vad http://download3.openlinksw.com/uda/vad-vos-packages/7.2/ods_briefcase_dav.vad
docker-compose exec virtuoso isql -U dba -P $DBA_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/ods_framework_dav.vad', 0)"
docker-compose exec virtuoso isql -U dba -P $DBA_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/ods_briefcase_dav.vad', 0)"

# Create ldp user (but not the folder, cf. http://docs.openlinksw.com/virtuoso/usermodel/#vumuseroptions)
# docker-compose exec virtuoso isql -U dba -P $DBA_PASSWORD exec="user_create ('ldp', '$DBA_PASSWORD', vector('DAV_ENABLE', 1, 'HOME', '/DAV/home/ldp/'));"

# Create /DAV/ldp folder
docker-compose exec virtuoso isql -U dba -P $DBA_PASSWORD exec="select DB.DBA.DAV_COL_CREATE ('/DAV/ldp/','110100100R', 'dav','dav','dav', '${DBA_PASSWORD}');"

docker-compose exec virtuoso isql -U dba -P $DBA_PASSWORD exec="select DB.DBA.DAV_COL_CREATE ('/DAV/ldp/github/','110100100R', 'dav','dav','dav', '${DBA_PASSWORD}');"
docker-compose exec virtuoso isql -U dba -P $DBA_PASSWORD exec="select DB.DBA.DAV_COL_CREATE ('/DAV/ldp/gitlab/','110100100R', 'dav','dav','dav', '${DBA_PASSWORD}');"
docker-compose exec virtuoso isql -U dba -P $DBA_PASSWORD exec="select DB.DBA.DAV_COL_CREATE ('/DAV/ldp/gitee/','110100100R', 'dav','dav','dav', '${DBA_PASSWORD}');"
docker-compose exec virtuoso isql -U dba -P $DBA_PASSWORD exec="select DB.DBA.DAV_COL_CREATE ('/DAV/ldp/apis/','110100100R', 'dav','dav','dav', '${DBA_PASSWORD}');"
docker-compose exec virtuoso isql -U dba -P $DBA_PASSWORD exec="select DB.DBA.DAV_COL_CREATE ('/DAV/ldp/endpoints/','110100100R', 'dav','dav','dav', '${DBA_PASSWORD}');"

docker-compose exec virtuoso isql -U dba -P $DBA_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/fct_dav.vad', 0);"

# Enable LDP props on a folder
# DB.DBA.DAV_PROP_SET ('/DAV/ldp/', 'LDP', 'ldp:BasicContainer', 'dav','dav', 1);


# docker-compose exec virtuoso isql-v -U dba -P $DBA_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/ods_framework_dav.vad', 0)"
# docker-compose exec virtuoso isql-v -U dba -P $DBA_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/ods_briefcase_dav.vad', 0)"

# docker-compose exec virtuoso isql-v -U dba -P $DBA_PASSWORD exec="vad_install ('/opt/virtuoso-opensource/vad/ods_framework_dav.vad', 0)"