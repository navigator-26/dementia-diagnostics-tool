import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private apiUrl = 'https://dialogflow.googleapis.com/v2/projects/hack-team-remindit/agent/sessions/YOUR_SESSION_ID:detectIntent';
  private apiKey = 'API_KEY'; 
  constructor() {}

  async sendMessage(message: string): Promise<any> {
    try {
      const response = await axios.post(this.apiUrl, {
        queryInput: {
          text: {
            text: message,
            languageCode: 'en-US',
          },
        },
      }, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data.queryResult;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
}