// announcementService.js

// Function to fetch all announcements
export const getAnnouncements = async () => {
    // API call to retrieve announcements
    const response = await fetch('/api/announcements');
    return response.json();
};

// Function to fetch a single announcement by ID
export const getAnnouncementById = async (id) => {
    const response = await fetch(`/api/announcements/${id}`);
    return response.json();
};

// Function to create a new announcement
export const createAnnouncement = async (announcementData) => {
    const response = await fetch('/api/announcements', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(announcementData),
    });
    return response.json();
};

// Function to update an existing announcement
export const updateAnnouncement = async (id, announcementData) => {
    const response = await fetch(`/api/announcements/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(announcementData),
    });
    return response.json();
};

// Function to delete an announcement
export const deleteAnnouncement = async (id) => {
    const response = await fetch(`/api/announcements/${id}`, {
        method: 'DELETE',
    });
    return response.json();
};
