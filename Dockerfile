FROM node:14

# App Verz. anlegen
WORKDIR /usr/src/app

# Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# Programm kopieren
COPY . .

#Port freigeben
EXPOSE 8080

CMD ["node", "server.js"]