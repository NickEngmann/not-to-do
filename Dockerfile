# .dockerignore
# node_modules
# npm-debug.log
# .git
# .gitignore
# .env
# .env.*
# *.md
# .vscode
# .idea
# dist
# .angular
# coverage
# e2e
# karma.conf.js
# protractor.conf.js
# tsconfig.spec.json
# tslint.json

FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production && \
    npm cache clean --force

COPY . .

EXPOSE 4200

CMD ["npm", "start"]