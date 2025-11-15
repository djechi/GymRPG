const API_BASE_URL = 'http://localhost:5000';

const fetchClasses = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/classes`);
        if(!response.ok) {
            throw new Error('Fetching classes failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching classes:', error);
        throw error;
    }
};

export default fetchClasses;

