# Usa una imagen oficial de Ruby
FROM ruby:3.2.2

# Crea el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY Gemfile Gemfile.lock ./

# Instala dependencias
RUN bundle install

# Copia el resto del proyecto
COPY . .

# Expone el puerto 3000 (puerto de Rails)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["rails", "server", "-b", "0.0.0.0"]