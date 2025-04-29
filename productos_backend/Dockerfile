FROM ruby:3.2.2

# Instala dependencias
RUN apt-get update && apt-get install -y postgresql-client

WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY . .

# Añade esta línea para limpiar posibles archivos PID existentes
RUN rm -f /app/tmp/pids/server.pid

EXPOSE 3000
CMD ["sh", "-c", "rm -f /app/tmp/pids/server.pid && rails server -b 0.0.0.0"]
