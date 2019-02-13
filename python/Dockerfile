# Download python image
FROM python

# Copying files app.py and requirements.txt to the root directory with name app.py and requirements.txt
COPY app.py /app.py
COPY requirements.txt /requirements.txt

# Running the command inside the container to install the dependencies
RUN pip install -r requirements.txt

# Setting the first command to be run inside the container
ENTRYPOINT ["python"]

# Running our app.py application
CMD ["app.py"]