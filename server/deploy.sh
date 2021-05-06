#!/bin/bash
docker build -t https://github.com/OrhayBenaim/automatic_garden .
docker push https://github.com/OrhayBenaim/automatic_garden


docker pull https://github.com/OrhayBenaim/automatic_garden
docker stop api-automatic-garden || true
docker rm api-automatic-garden || true
docker rmi https://github.com/OrhayBenaim/automatic_garden:current || true
docker tag https://github.com/OrhayBenaim/automatic_garden:latest https://github.com/OrhayBenaim/automatic_garden:current
docker run -d --restart always --name api-automatic-garden -p 3000:3000 https://github.com/OrhayBenaim/automatic_garden:current

