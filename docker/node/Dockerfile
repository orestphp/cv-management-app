FROM node:20.9.0-alpine3.17

WORKDIR /app

# Install python and pip via apk (System packages)
# This bypasses the "externally-managed-environment" error
RUN apk add --no-cache python3 py3-pip build-base

# Create a virtual environment for any python-based node tools
RUN python3 -m venv /venv
ENV PATH="/venv/bin:$PATH"

# Fix Yarn conflicts
RUN rm -f /usr/local/bin/yarnpkg /usr/local/bin/yarn \
    && npm install -g yarn@1.21.1

# Set permissions
RUN chown -R node:node /app
USER node

# Copy files relative to the context (the project root '.')
COPY --chown=node:node frontend/package.json frontend/yarn.lock ./

RUN yarn install --frozen-lockfile

COPY --chown=node:node frontend ./

CMD ["yarn", "run", "dev"]