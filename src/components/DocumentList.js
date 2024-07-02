import React, { useState, useEffect } from 'react';
import DocumentCard from './DocumentCard';
import { fetchDocuments, addDocumentsToLocalStorage } from '../services/localStorageService.js';
import { DOCUMENTS_KEY, STORAGE_EXPIRATION_TIME } from '../constants/localStorage';

const DocumentList = () => {
    const [documents, setDocuments] = useState([]);
    const [draggedItem, setDraggedItem] = useState(null);

    useEffect(() => {
        const storedDocuments = fetchDocuments();
        // Fetch from API only if data is not present or if data is stale
        if (!storedDocuments.length || isDataStale()) {
            fetchDataFromAPI();
        } else {
            setDocuments(storedDocuments);
        }
    }, []);

    const fetchDataFromAPI = () => {
        fetch('http://localhost:3001/documents/')
            .then(response => response.json())
            .then(data => {
                setDocuments(data);
                addDocumentsToLocalStorage(data);
            })
            .catch(error => console.error('Error fetching documents:', error));
    };

    const handleDragStart = (e, index) => {
        const draggedDocument = documents[index];
        setDraggedItem(draggedDocument);
        e.dataTransfer.setData('text/html', e.target);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (index) => {
        const draggedOverItem = documents[index];

        if (draggedItem === draggedOverItem) {
            return;
        }

        const updatedDocuments = [...documents];
        const draggedIndex = updatedDocuments.indexOf(draggedItem);
        updatedDocuments.splice(draggedIndex, 1);
        updatedDocuments.splice(index, 0, draggedItem);
        setDocuments(updatedDocuments);
        addDocumentsToLocalStorage(updatedDocuments);
    };

    const handleDragEnd = () => {
        setDraggedItem(null);
    };

    const isDataStale = () => {
        const storedDocuments = fetchDocuments();
        if (storedDocuments.length > 0) {
            const { timestamp } = JSON.parse(localStorage.getItem(DOCUMENTS_KEY));
            return Date.now() - timestamp > STORAGE_EXPIRATION_TIME;
        }
        return true;
    };

    return (
        <div className="document-list">
            {documents.map((document, index) => (
                <DocumentCard
                    key={document.id}
                    document={document}
                    index={index}
                    handleDragStart={handleDragStart}
                    handleDragOver={handleDragOver}
                    handleDragEnd={handleDragEnd}
                />
            ))}
        </div>
    );
};

export default DocumentList;
