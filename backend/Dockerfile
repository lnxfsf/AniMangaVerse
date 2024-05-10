# in what env. build image
FROM python:3.11


ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# Allows docker to cache installed dependencies between builds
COPY requirements.txt requirements.txt
# run command
RUN pip install --no-cache-dir -r requirements.txt


# this is just getting whole code, and copying in container,and going into that folder
COPY . backend
WORKDIR /backend


# on this port, it will work
EXPOSE 5000


#ENTRYPOINT ["python", "manage.py"]
#CMD ["runserver", "0.0.0.0:8000"]

# gunicorn -w animanga_project.wsgi:application
# CMD ["gunicorn", "-w", "4", "animanga_project.wsgi:application", "--bind", "0.0.0.0:8000"]
CMD ["gunicorn","-w","4", "--bind", "0.0.0.0:5000", "app.wsgi:app"]


