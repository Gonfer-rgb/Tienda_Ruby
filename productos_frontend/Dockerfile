# Usa una imagen oficial de Node.js
FROM node:18

# Crea el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json ./

# Instala dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Expone el puerto 5173 (puerto de Vite)
EXPOSE 5173

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]