export const getCompanyInitials = (companyName) => {
  return companyName
    .split(' ')
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
};

export const getAvatarColor = (index) => {
  const colors = [
    'bg-blue-600',
    'bg-purple-600',
    'bg-indigo-600',
    'bg-teal-600',
    'bg-cyan-600',
    'bg-red-600',
    'bg-orange-600',
    'bg-pink-600',
  ];
  return colors[index % colors.length];
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const filterJobs = (jobs, searchQuery, selectedCategory, filters) => {
  let filtered = jobs;

  // Search filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.skills.some((skill) => skill.toLowerCase().includes(query))
    );
  }

  // Category filter
  if (selectedCategory !== 'All Jobs') {
    filtered = filtered.filter((job) => job.category === selectedCategory);
  }

  // Location filter
  if (filters.locations.length > 0) {
    filtered = filtered.filter((job) =>
      filters.locations.some((loc) => job.location.includes(loc))
    );
  }

  // Experience filter
  if (filters.experience.length > 0) {
    filtered = filtered.filter((job) => filters.experience.includes(job.experience));
  }

  // Alumni only filter
  if (filters.alumniOnly) {
    filtered = filtered.filter((job) => job.postedBy === 'alumni');
  }

  // Sort
  const sorted = [...filtered];
  if (filters.sortBy === 'Salary: High to Low') {
    sorted.sort((a, b) => {
      const salaryA = parseInt(a.salary.match(/\d+/)[0]);
      const salaryB = parseInt(b.salary.match(/\d+/)[0]);
      return salaryB - salaryA;
    });
  } else if (filters.sortBy === 'Salary: Low to High') {
    sorted.sort((a, b) => {
      const salaryA = parseInt(a.salary.match(/\d+/)[0]);
      const salaryB = parseInt(b.salary.match(/\d+/)[0]);
      return salaryA - salaryB;
    });
  }

  return sorted;
};

export const formatTimeAgo = (timeStr) => {
  return timeStr;
};
