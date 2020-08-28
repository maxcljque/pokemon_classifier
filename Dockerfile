FROM fastdotai/fastai:2.0.2

COPY ./ /usr/src/app/
WORKDIR /usr/src/app/
RUN pip install -r requirements.txt

ENTRYPOINT ["python", "app.py"]
