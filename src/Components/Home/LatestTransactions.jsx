import React from 'react';

function LatestTransactions() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-700">Latest Transactions</h3>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="text-left text-gray-600">To/From</th>
            <th className="text-left text-gray-600">Date</th>
            <th className="text-left text-gray-600">Amount</th>
            <th className="text-left text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="py-2">Elevate Agency</td>
            <td>2 Oct 2023</td>
            <td className="text-green-500">+1,500.00</td>
            <td className="text-green-500">Success</td>
          </tr>
       
        </tbody>
      </table>
    </div>
  );
}

export default LatestTransactions;
