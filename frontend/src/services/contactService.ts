import apiService from './api';
import { API_CONFIG } from '@/config/apiConfig';
import { ContactFormData, ContactResponse } from '@/types/contact';

export const contactService = {
  submitContact: async (data: ContactFormData): Promise<ContactResponse> => {
    return apiService.post<ContactResponse>(
      API_CONFIG.ENDPOINTS.CONTACT,
      data
    );
  },
};