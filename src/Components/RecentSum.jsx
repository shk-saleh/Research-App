import { useState } from 'react';
import { History } from 'lucide-react';



export const RecentSum = () => {


    const [recentSummaries, setRecentSummaries] = useState([
        { id: 1, title: 'Machine Learning Advances 2024', date: '2024-02-08' },
        { id: 2, title: 'Quantum Computing Research', date: '2024-02-07' }
      ]);


  return (
    
    <div>
        <div className="flex items-center gap-2 mb-6">
        <History className="h-5 w-5 text-blue-400" />
        <h3 className="text-xl font-semibold text-gray-100">Recent Summaries</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {recentSummaries.map((summary) => (
            <div
            key={summary.id}
            className="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 
            rounded-lg hover:bg-gray-800/50 transition-all"
            >
            <h4 className="font-medium text-gray-100 mb-2">{summary.title}</h4>
            <p className="text-sm text-gray-400">{summary.date}</p>
            </div>
        ))}
        </div>
    </div>

  )
}
