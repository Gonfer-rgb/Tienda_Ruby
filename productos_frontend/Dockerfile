FROM node:18

WORKDIR /app

# Limpia la caché de npm y fuerza la instalación
RUN npm cache clean --force

# Copia archivos de dependencias
COPY package.json package-lock.json ./

# Instala dependencias con versión exacta de esbuild
RUN npm install --force && \
    npm install esbuild@0.25.3 --save-dev --save-exact

# Copia el resto de los archivos
COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]