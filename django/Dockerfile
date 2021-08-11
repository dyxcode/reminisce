FROM python:3.9-slim
 
WORKDIR /server/django

COPY . /server/django

RUN pip install -r requirements.txt

CMD [ "sh", "-c", "bash start.sh" ]