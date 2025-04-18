import { NextResponse } from 'next/server';

const pages = [
  { title: 'Home', path: '/', excerpt: 'Welcome to the homepage.' },
  { title: 'About', path: '/about', excerpt: 'Learn more about us.' },
  { title: 'Contact', path: '/contact', excerpt: 'Get in touch with us.' },
  { title: 'Blog', path: '/blog', excerpt: 'Read our latest articles.' },
  // Add more pages as needed
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  if (!q || q.length < 2) {
    return NextResponse.json([]);
  }
  const query = q.toLowerCase();
  const results = pages.filter(page =>
    page.title.toLowerCase().includes(query) ||
    page.excerpt.toLowerCase().includes(query)
  );
  return NextResponse.json(results);
}
