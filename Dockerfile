FROM node:14

# App Verz. anlegen
WORKDIR /usr/src/app

RUN git clone http://git.if-com.de/j.fischer/BusyBoxNode.git ./

# Abhängigkeiten installieren
#COPY package*.json ./
RUN npm install

# Programm kopieren
#COPY . .

#Port freigeben
EXPOSE 8080

CMD ["node", "server.js"]