import api from "../api/axiosInstance";

export const ApplicationService = {
  apply: (data) => api.post("/applications", data),

  update: (id, data) =>
    api.put(`/applications/${id}`, data),

  getAll: () => api.get("/applications"),
  getById: (id) => api.get(`/applications/${id}`),

  my: () => api.get("/applications/my"),

  byScheme: (schemeId) =>
    api.get(`/applications/scheme/${schemeId}`),

  byStatus: (status) =>
    api.get(`/applications/status/${status}`),

  updateStatus: (id, status) =>
    api.put(`/applications/${id}/status/${status}`),

  cancel: (id) =>
    api.put(`/applications/${id}/cancel`),

  delete: (id) => api.delete(`/applications/${id}`)
};