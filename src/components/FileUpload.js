import { useState } from "react";
import { uploadCSV } from "../services/api";

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (file) {
            const response = await uploadCSV(file);
            setMessage(response);
        } else {
            setMessage('Please select a file to upload');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="file-upload-container flex flex-col items-center justify-center animate-fade-in">
                <input 
                    type="file" 
                    onChange={handleFileChange} 
                    className="mb-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                />
                <button 
                    type="submit" 
                    className="px-6 py-2 bg-orange-400 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 ease-in-out"
                >
                    Upload
                </button>
            </form>
            {message && (
                <p className="mt-4 text-xl font-semibold text-green-600 animate-fade-in">
                    {message}
                </p>
            )}
        </div>
    );
};

export default FileUpload;
