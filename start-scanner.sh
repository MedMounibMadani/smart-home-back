#!/bin/sh
sleep 240

# run the sonar scanner
/opt/sonar-scanner/bin/sonar-scanner \
  -Dsonar.projectKey=smart-home-backend \
  -Dsonar.sources=/usr/src \
  -Dsonar.host.url=http://sonarqube:9000 \
  -Dsonar.login=sqa_2dce77d8a0ac3b66551994d62e40ce92dcb860d2        