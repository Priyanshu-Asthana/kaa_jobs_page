# KIET AlmaConnect - Alumni Job Portal

A production-ready React + Vite web application for KIET alumni to explore job opportunities, network with fellow alumni, and stay updated with community news and events.

## Features

- **Job Portal**: Browse and apply to exclusive job opportunities posted by alumni
- **Guest Mode**: Explore jobs without login (limited to 5 jobs)
- **Guest Welcome Modal**: Appears on first visit with login incentives
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile
- **Authentication**: Login and signup with persistent state
- **Advanced Filtering**: Filter jobs by location, experience, and more
- **Sticky Header & Footer**: Always accessible navigation
- **Real-time Search**: Search jobs by title, company, or skills
- **Pagination**: Classic pagination for job listings
- **Alumni Directory**: Connect with alumni members
- **Events Management**: Explore networking events
- **News Feed**: Stay updated with alumni achievements
- **Redux State Management**: Centralized state for auth, guest mode, jobs, and filters
- **CSS Animations**: Smooth animations without Framer Motion

## Tech Stack

- **Frontend**: React 18.2 + Vite 5.0
- **Styling**: Tailwind CSS 3.3
- **State Management**: Redux Toolkit 1.9
- **Routing**: React Router DOM 6.20
- **Icons**: React Icons 4.12
- **Code Quality**: ESLint, Prettier

## Project Structure

```
src/
├── components/
│   ├── common/          # Shared components (ScrollToTopButton)
│   ├── layouts/         # Header, Footer
│   ├── jobs/            # Job-related components (JobCard, Filters, Pagination)
│   └── modals/          # Modals (GuestWelcome, Login, JobDetails)
├── pages/               # Page components (Home, Jobs, Events, etc.)
├── redux/
│   ├── store.js         # Redux store configuration
│   └── slices/          # Redux slices (auth, guest, jobs, filters)
├── data/
│   └── mockJobs.js      # Mock job data
├── utils/
│   ├── helpers.js       # Utility functions
│   └── api.js           # API configuration (ready for backend)
├── styles/
│   └── globals.css      # Global styles and animations
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## Getting Started

### Prerequisites

- Node.js 16+ and pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kiet-almaconnect
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
pnpm build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
pnpm preview
```

## Features Details

### Guest Mode System
- Automatically triggered when visiting Jobs page without login
- Shows welcome modal with login incentives
- Persists via localStorage
- Limits guest users to 5 jobs with upgrade banner
- Lock icon on apply button when not authenticated

### Jobs Page
- **Search**: Filter by title, company, or skills
- **Categories**: All Jobs, Software Engineering, Core Engineering, Internship, Management, Design
- **Filters**: 
  - Sort by (Newest First, Salary High to Low, etc.)
  - Posted by Alumni Only
  - Location (desktop sticky sidebar / mobile bottom sheet)
  - Experience Level
- **Job Card**: Shows company initials, job title, location, salary, posted time, skills, and apply button
- **Apply Logic**: 
  - Guests see lock icon and must login
  - Authenticated users can apply/undo (session-only, not persisted)
  - Applied state shows checkmark and Undo button
- **Pagination**: Classic Previous/1/2/Next navigation

### Responsive Design
- **Desktop**: Full sidebar filters, normal layout
- **Tablet**: Adjusted spacing and columns
- **Mobile**: Hamburger menu, bottom sheet filters, stacked layout

### State Management
- **Auth Slice**: Login/logout, user data persisted in localStorage
- **Guest Slice**: Guest mode state, shows modal on first visit
- **Jobs Slice**: Applied jobs (sessionStorage), search query, pagination
- **Filters Slice**: Sort, locations, experience, alumni only filter

### Header
- Sticky positioning with shadow
- Logo and navigation links
- Guest mode badge with slide animation
- Login/Logout button based on auth state
- Mobile hamburger menu with slide drawer

### Footer
- Navy background matching header
- 4 sections: Brand, Quick Links, Get Involved, Connect
- Social media links
- Copyright and legal links
- Fully responsive

## API Structure (Ready for Backend)

The app is structured to easily integrate with a backend:

```javascript
// Available endpoints in /src/utils/api.js
GET  /api/jobs
GET  /api/jobs/:id
GET  /api/jobs/search
POST /api/apply
GET  /api/applications
POST /api/auth/login
POST /api/auth/signup
POST /api/auth/logout
```

Currently using mock data from `mockJobs.js`, but the structure supports seamless migration to real API calls.

## Performance Optimizations

- **Code Splitting**: Lazy loaded pages with React.lazy()
- **Bundle Optimization**: Separate vendor chunks for React, Redux
- **CSS**: Tailwind CSS with purging for production
- **Animations**: CSS-only animations (no Framer Motion)
- **Responsive Images**: Proper img tags with alt text

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set build command: `pnpm build`
4. Set output directory: `dist`
5. Deploy!

### Environment Variables

Create a `.env.local` file:

```
VITE_API_URL=https://api.almaconnect.com
```

## Code Quality

- **ESLint**: Linting with React plugins
- **Prettier**: Code formatting
- **Format Code**: `pnpm format`
- **Lint Code**: `pnpm lint`

## Future Enhancements

1. Backend integration with real API calls
2. User profiles and applications tracking
3. Email notifications
4. Job recommendations
5. Video interviews
6. Company profiles
7. Alumni mentorship program
8. Advanced analytics

## License

This project is part of KIET Alumni Association.

## Support

For issues and feature requests, please contact the development team.

---

**Built with ❤️ using React + Vite**
