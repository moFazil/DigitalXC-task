import React from "react";

const SecretSantaResult = ({ result }) => {
    return (
        <div className="flex flex-col items-center justify-center py-8">
            <h2 className="text-2xl font-bold text-teal-600 mb-6">Secret Santa Assignment</h2>
            <table className="table-auto bg-white border-collapse border border-gray-200 rounded-lg shadow-lg w-3/4">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-gray-700 font-semibold">Employee Name</th>
                        <th className="px-4 py-2 text-gray-700 font-semibold">Employee Email</th>
                        <th className="px-4 py-2 text-gray-700 font-semibold">Secret Child Name</th>
                        <th className="px-4 py-2 text-gray-700 font-semibold">Secret Child Email</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((result, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="border px-4 py-2">{result.employeeName}</td>
                            <td className="border px-4 py-2">{result.employeeEmail}</td>
                            <td className="border px-4 py-2">{result.secretChildName}</td>
                            <td className="border px-4 py-2">{result.secretChildEmail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SecretSantaResult;
