export const ServerConfig = {
    port: Number(process.env.PORT) || 8080,
    host: process.env.HOST || 'localhost'
}