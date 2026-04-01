FROM node:20

WORKDIR /app

# Copy file package trước để tận dụng cache
COPY package*.json ./

RUN npm install

# Copy phần còn lại
COPY . .

CMD ["npm", "test"]