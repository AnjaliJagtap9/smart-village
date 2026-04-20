import api from "../api/axiosInstance";

export const SchemeService = {
  create: (data) => api.post("/schemes", data),
  update: (id, data) => api.put(`/schemes/${id}`, data),

  deactivate: (id) =>
    api.put(`/schemes/${id}/deactivate`),

  getAll: () => api.get("/schemes"),
  getActive: () => api.get("/schemes/active"),
  getById: (id) => api.get(`/schemes/${id}`),

  search: (name) =>
    api.get(`/schemes/search?name=${name}`),

  eligibility: (data) =>
    api.post("/schemes/eligibility", data),

  postedBy: (id) =>
    api.get(`/schemes/posted-by/${id}`)
};