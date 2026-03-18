export default function News() {
  const news = [
    {
      id: 1,
      title: 'KIET Alumni Leads Innovation at Tech Giant',
      excerpt: 'Discover how our alumnus is revolutionizing AI research at one of the worlds leading tech companies.',
      date: '2024-03-10',
      category: 'Achievement',
    },
    {
      id: 2,
      title: 'Alumni Scholarship Program Launches',
      excerpt: 'We are proud to announce a new scholarship initiative to support underprivileged students from KIET.',
      date: '2024-03-08',
      category: 'Announcement',
    },
    {
      id: 3,
      title: 'Startup Founded by KIET Grads Raises Funding',
      excerpt: 'Read about the journey of our alumni founders who just secured Series A funding for their edtech startup.',
      date: '2024-03-05',
      category: 'Success Story',
    },
    {
      id: 4,
      title: 'KIET Alumni Network Crosses 5000 Members',
      excerpt: 'Celebrate this milestone as our alumni network continues to grow stronger across the globe.',
      date: '2024-03-01',
      category: 'Milestone',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-content-width py-12">
        <h1 className="text-4xl font-bold text-neutral-900 mb-2">Latest News</h1>
        <p className="text-neutral-600 mb-8">Stay updated with alumni achievements and news</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((article) => (
            <article key={article.id} className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">{article.category}</span>
                <span className="text-sm text-neutral-500">{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{article.title}</h3>
              <p className="text-neutral-600 mb-4">{article.excerpt}</p>
              <a href="#" className="text-primary font-semibold hover:text-primary-dark transition-colors">
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
