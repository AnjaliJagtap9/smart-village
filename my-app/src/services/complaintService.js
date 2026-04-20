// complaintService.js

// Function to submit a complaint
export const submitComplaint = async (complaintData) => {
    const response = await fetch('/api/complaints', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(complaintData),
    });
    return response.json();
};

// Function to get all complaints
export const getComplaints = async () => {
    const response = await fetch('/api/complaints');
    return response.json();
};

// Function to get a specific complaint by ID
export const getComplaintById = async (id) => {
    const response = await fetch(`/api/complaints/${id}`);
    return response.json();
};

// Function to update a complaint
export const updateComplaint = async (id, complaintData) => {
    const response = await fetch(`/api/complaints/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(complaintData),
    });
    return response.json();
};

// Function to delete a complaint
export const deleteComplaint = async (id) => {
    const response = await fetch(`/api/complaints/${id}`, {
        method: 'DELETE',
    });
    return response.json();
};