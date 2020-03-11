"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRedisPanelId = (projectId, panelName) => `${projectId}-${panelName}`;
exports.createPanelUpdateRabbitTopicName = (projectId, panelName) => `${projectId}-${panelName}`;
