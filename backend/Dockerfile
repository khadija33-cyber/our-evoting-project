FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install
# If you need production dependencies only: RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Exposer le port
EXPOSE 5000

# Démarrer l'application
CMD ["npm", "start"]

