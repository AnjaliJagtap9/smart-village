import api from "../api/axiosInstance";

export const AnnouncementService = {
  create: (data) => api.post("/announcements/post", data),
  update: (id, data) => api.put(`/announcements/${id}`, data),
  delete: (id) => api.delete(`/announcements/${id}`),

  getAll: () => api.get("/announcements"),
  getById: (id) => api.get(`/announcements/${id}`),

  filterByType: (type) =>
    api.get(`/announcements/type?type=${type}`),

  filterByStatus: (status) =>
    api.get(`/announcements/status?status=${status}`),

  search: (keyword) =>
    api.get(`/announcements/search?keyword=${keyword}`),

  recent: (since) =>
    api.get(`/announcements/recent?since=${since}`),

  updateStatus: (id, status) =>
    api.patch(`/announcements/${id}/status?status=${status}`),

  postedBy: (userId) =>
    api.get(`/announcements/posted-by/${userId}`)
};