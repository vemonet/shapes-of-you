FROM python:3.9

WORKDIR /app
ADD . .

# RUN apt update && \
#     apt install -y git wget curl

RUN pip install -r requirements.txt

ENTRYPOINT [ "python", "index_shapes.py" ]
CMD [ "github", "topic:shacl-shapes" ]

# docker build -t shapes-etl .
# docker run -it -v $(pwd):/app -e API_GITHUB_TOKEN -e GITLAB_TOKEN -e GITEE_TOKEN shapes-etl github topic:shacl-shapes
# docker run -it --entrypoint bash shapes-etl 