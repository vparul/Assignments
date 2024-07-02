import { DOCUMENTS_KEY, STORAGE_EXPIRATION_TIME } from "../constants/localStorage";

// Function to fetch documents from localStorage
export const fetchDocuments = () => {
  const storedDocuments = localStorage.getItem(DOCUMENTS_KEY);
  if (storedDocuments) {
    const { data, timestamp } = JSON.parse(storedDocuments);
    if (!isDataStale(timestamp)) {
      return data;
    }
  }
  return [];
};

// Function to add documents to localStorage
export const addDocumentsToLocalStorage = (documents) => {
  const dataToStore = {
    data: documents,
    timestamp: Date.now(),
  };
  localStorage.setItem(DOCUMENTS_KEY, JSON.stringify(dataToStore));
};

// Function to check if data is stale (older than 4 hours)
const isDataStale = (timestamp) => {
  return Date.now() - timestamp > STORAGE_EXPIRATION_TIME;
};
