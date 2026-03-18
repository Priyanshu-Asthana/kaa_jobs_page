export default function Events() {
  const events = [
    {
      id: 1,
      title: 'Annual Alumni Meetup',
      date: 'March 20, 2024',
      location: 'KIET Campus',
      description: 'Join us for our annual alumni gathering with networking opportunities and career discussions.',
      attendees: 250,
    },
    {
      id: 2,
      title: 'Career Development Workshop',
      date: 'March 25, 2024',
      location: 'Virtual',
      description: 'Learn modern career strategies and personal branding tips from industry experts.',
      attendees: 180,
    },
    {
      id: 3,
      title: 'Tech Talk: AI & Future',
      date: 'April 2, 2024',
      location: 'KIET Auditorium',
      description: 'Discover the future of AI with talks from leading tech professionals.',
      attendees: 320,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-content-width py-12">
        <h1 className="text-4xl font-bold text-neutral-900 mb-2">Events</h1>
        <p className="text-neutral-600 mb-8">Connect with alumni through our exciting events and workshops</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{event.title}</h3>
              <p className="text-neutral-600 mb-4">{event.description}</p>
              <div className="space-y-2 text-sm text-neutral-600">
                <p>
                  <span className="font-semibold">Date:</span> {event.date}
                </p>
                <p>
                  <span className="font-semibold">Location:</span> {event.location}
                </p>
                <p>
                  <span className="font-semibold">Attendees:</span> {event.attendees}
                </p>
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
