FROM python:3.8

ADD . .

RUN pip install -r requirements.txt

ENTRYPOINT [ "python3", "/root/lsr_csv_to_elastic.py"]