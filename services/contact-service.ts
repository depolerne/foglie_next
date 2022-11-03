import request from "graphql-request";

import { GRAPHQL_BASE_URL } from "../graphql/apollo-client";

export interface IContactForm {
  name: string;
  email: string;
  message: string;
}

interface IContactService {
  sendMessageQuery: (name: string, email: string, message: string) => string;
  sendMessage: (query: string, name: string, email: string, message: string) => Promise<void>;
}

export const ContactService: IContactService = {
  sendMessageQuery: (name: string, email: string, message: string): string => {
    return `
        {
            sendMail (name: "${name}", email: "${email}", message: "${message}") {
                success
            }
        }
    `;
  },
  sendMessage: async (query: string, name: string, email: string, message: string): Promise<void> => {
    await request<void>(GRAPHQL_BASE_URL, query, { name, email, message });
  },
};
