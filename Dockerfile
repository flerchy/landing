    FROM python:3.7

ENV WORKDIR /opt/spa
ENV PORT 8080

WORKDIR $WORKDIR

# copy files
ADD ./requirements.txt ./requirements.txt
RUN pip install -r requirements.txt

# add $WORKDIR to the $PYTHONPATH
ENV PYTHONPATH $PYTHONPATH:$WORKDIR

EXPOSE $PORT

# copy project files
ADD . .

CMD ["python", "spa/main.py"]
