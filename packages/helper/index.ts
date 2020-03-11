
export const createRedisPanelId = (projectId: String, panelName: String) => `${projectId}-${panelName}`
export const createPanelUpdateRabbitTopicName = (projectId: String, panelName: String) => `${projectId}-${panelName}`