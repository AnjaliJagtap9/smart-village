import api from "../api/axiosInstance";

export const ComplaintService = {
  getAll: () => api.get("/complaints"),
  getById: (id) => api.get(`/complaints/${id}`),

  create: (data) => api.post("/complaints", data),

  assign: (id, handlerId) =>
    api.put(`/complaints/${id}/assign/${handlerId}`),

  updateStatus: (id, status) =>
    api.put(`/complaints/${id}/status?status=${status}`),

  search: (title) =>
    api.get(`/complaints/search?title=${title}`),

  byStatus: (status) =>
    api.get(`/complaints/status?status=${status}`),

  byHandler: (id) =>
    api.get(`/complaints/handler/${id}`),

  recent: (since) =>
    api.get(`/complaints/recent?since=${since}`)
};