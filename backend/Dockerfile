FROM python:3.11

WORKDIR /app
COPY requirements.txt /app/
RUN python3 -m pip install -r requirements.txt
COPY . /app/
EXPOSE 8000

CMD ["python3", "main.py"]
