import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

export default function Directory() {
  const [searchQuery, setSearchQuery] = useState('');

  const alumni = [
    { id: 1, name: 'Rajesh Kumar', batch: '2020', company: 'Google', role: 'Software Engineer' },
    { id: 2, name: 'Priya Sharma', batch: '2019', company: 'Microsoft', role: 'Product Manager' },
    { id: 3, name: 'Arun Singh', batch: '2021', company: 'Amazon', role: 'DevOps Engineer' },
    { id: 4, name: 'Neha Gupta', batch: '2020', company: 'Adobe', role: 'UX Designer' },
    { id: 5, name: 'Vikram Patel', batch: '2018', company: 'McKinsey', role: 'Consultant' },
    { id: 6, name: 'Anjali Verma', batch: '2019', company: 'Flipkart', role: 'Data Scientist' },
  ];

  const filtered = alumni.filter(
    (a) =>
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-content-width py-12">
        <h1 className="text-4xl font-bold text-neutral-900 mb-2">Alumni Directory</h1>
        <p className="text-neutral-600 mb-8">Connect with alumni across industries and locations</p>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or company..."
              className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Directory List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((alumnus) => (
            <div key={alumnus.id} className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {alumnus.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900">{alumnus.name}</h3>
                  <p className="text-sm text-neutral-600">Batch {alumnus.batch}</p>
                </div>
              </div>
              <p className="text-sm text-neutral-700 mb-4">
                <span className="font-semibold">{alumnus.role}</span> at {alumnus.company}
              </p>
              <button className="w-full px-4 py-2 border border-primary text-primary rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
