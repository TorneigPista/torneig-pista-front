FROM node:24

WORKDIR /app

COPY ./rootCA.pem /usr/local/share/ca-certificates/rootCA.crt
RUN update-ca-certificates

ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/rootCA.crt
