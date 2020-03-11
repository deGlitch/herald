export const RabbitConfig = {
    host: process.env.RABBIT_HOST || 'localhost',
    port: Number(process.env.RABBIT_PORT) || 4369
}