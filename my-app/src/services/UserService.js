import api from "../api/axiosInstance";

export const UserService = {
  getAll: () => api.get("/users"),

  getById: (id) => api.get(`/users/${id}`),

  updateProfile: (data) =>
    api.put("/users/update-profile", data),

  adminUpdate: (id, data) =>
    api.put(`/users/admin/update/${id}`, data),

  assignRole: (id, role) =>
    api.put(`/users/assign-role/${id}?role=${role}`),

  byRole: (role) =>
    api.get(`/users/by-role?role=${role}`),

  block: (id) => api.put(`/users/block/${id}`),

  activate: (id) => api.put(`/users/activate/${id}`),

  active: () => api.get("/users/active")
};