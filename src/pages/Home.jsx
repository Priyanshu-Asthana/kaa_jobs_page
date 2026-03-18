import { Link } from 'react-router-dom';
import { IoArrowForward, IoBriefcase, IoPeople, IoCalendarOutline, IoNewspaperOutline } from 'react-icons/io5';

export default function Home() {
  const features = [
    {
      icon: <IoBriefcase size={32} />,
      title: 'Job Opportunities',
      description: 'Explore exclusive jobs shared by KIET Alumni Network',
      link: '/jobs',
    },
    {
      icon: <IoPeople size={32} />,
      title: 'Alumni Directory',
      description: 'Connect with alumni across industries and locations',
      link: '/directory',
    },
    {
      icon: <IoCalendarOutline size={32} />,
      title: 'Events',
      description: 'Attend networking events and career development workshops',
      link: '/events',
    },
    {
      icon: <IoNewspaperOutline size={32} />,
      title: 'News & Updates',
      description: 'Stay updated with latest alumni achievements and news',
      link: '/news',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-content-width">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Welcome to KIET AlmaConnect</h1>
            <p className="text-xl text-blue-100 mb-8">
              Reconnect with your KIET alumni community. Explore job opportunities, network with fellow alumni, and grow your career together.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Explore Jobs
                <IoArrowForward size={20} />
              </Link>
              <Link
                to="/directory"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
              >
                Find Alumni
                <IoArrowForward size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-content-width">
          <h2 className="text-4xl font-bold text-center mb-12">What You Can Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.link}
                to={feature.link}
                className="bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{feature.description}</p>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <IoArrowForward size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-content-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">5000+</div>
              <p className="text-neutral-600">Active Alumni Members</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-neutral-600">Job Opportunities</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-neutral-600">Partner Companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-content-width text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the KIET Alumni Network and unlock exclusive opportunities to grow your career and make meaningful connections.
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
