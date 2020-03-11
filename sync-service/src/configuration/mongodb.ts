export const MongoConfig = {
    connectionString: (() => {
        // const user = process.env.MONGODB_USER || "dbUser"
        // const password = process.env.MONGODB_PASS || "yRftvqnDfsL6Inty"
        const host = process.env.MONGODB_HOST || "localhost"
        const port = process.env.MONGODB_PORT || 27017
        const server = process.env.MONGODB_SERVER || "dev-command-pod"
        return `mongodb://${host}:${port}/${server}`
    })()
}