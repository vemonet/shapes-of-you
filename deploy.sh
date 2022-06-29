#!/bin/bash

ssh ids3 'cd /data/deploy-services/shapes-of-you ; git pull ; docker-compose up --force-recreate --remove-orphans -d'
