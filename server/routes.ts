import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for ClearTone landing page
  app.get('/api/health', (req, res) => {
    res.json({ status: 'healthy' });
  });

  // Simple placeholder API for analytics in case we need to implement 
  // tracking of clicks or visitors later
  app.post('/api/track', (req, res) => {
    const { event, metadata } = req.body;
    console.log(`Track event: ${event}`, metadata);
    res.json({ success: true });
  });

  const httpServer = createServer(app);

  return httpServer;
}
