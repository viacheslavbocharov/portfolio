import Container from '@/components/Container';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container>
      <div className="min-h-dvh flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-5xl font-bold text-accent mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="bg-accent text-white px-5 py-2.5 rounded-md hover:opacity-90 transition-all"
        >
          Go Home
        </Link>
      </div>
    </Container>
  );
}
