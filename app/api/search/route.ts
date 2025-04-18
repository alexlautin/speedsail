import { NextResponse } from 'next/server';

// Main site pages
const pages = [
  {
    title: 'Home',
    path: '/',
    excerpt: "A series of videos dedicated to the art of sailing fast. The Fastest You've Ever Gone."
  },
  {
    title: 'About',
    path: '/about',
    excerpt: 'Alex: Recent graduate, passionate sailor, instructor, and founder of this site to share the joy of sailing.'
  },
  {
    title: 'Contact',
    path: '/contact',
    excerpt: 'Contact Alex at alex@speedsail.org or via LinkedIn.'
  },
  {
    title: 'Podcast',
    path: '/podcast',
    excerpt: 'Speedsail Podcast: Listen to interviews and stories about sailing fast.'
  },
  {
    title: 'Videos',
    path: '/videos',
    excerpt: 'Watch all episodes and interviews with top sailors.'
  },
];

// Videos from the Videos page
const videos = [
  {
    title: 'Episode 6',
    path: '/videos',
    excerpt: 'An interview with Rohan Rooney.'
  },
  {
    title: 'Episode 5',
    path: '/videos',
    excerpt: 'An interview with Dona Bergin.'
  },
  {
    title: 'Episode 4',
    path: '/videos',
    excerpt: 'An interview with Joshua Hyman.'
  },
  {
    title: 'Episode 3',
    path: '/videos',
    excerpt: 'An interview with Venos Spyrou.'
  },
  {
    title: 'Episode 2',
    path: '/videos',
    excerpt: 'An interview with Gonzalo Valverde Vargas.'
  },
  {
    title: 'Episode 1',
    path: '/videos',
    excerpt: 'An interview with Tripp Burd.'
  },
];

const allResults = [...pages, ...videos];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  if (!q || q.length < 2) {
    return NextResponse.json([]);
  }
  const query = q.toLowerCase();
  const results = allResults.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.excerpt.toLowerCase().includes(query)
  );
  return NextResponse.json(results);
}