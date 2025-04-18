"use client"

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { createPortal } from "react-dom";

// Define the structure of search results
interface SearchResult {
  title: string;
  path: string;
  excerpt: string;
}

// Simple in-memory cache for search results
const searchCache: { [query: string]: SearchResult[] } = {};

// Fetch search results from API with cache
async function fetchSearchResults(query: string): Promise<SearchResult[]> {
  if (!query || query.length < 2) return [];
  if (searchCache[query]) return searchCache[query];
  try {
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    if (!res.ok) return [];
    const data = await res.json();
    searchCache[query] = data;
    return data;
  } catch {
    return [];
  }
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // Only search when button is clicked
  const [results, setResults] = useState<SearchResult[]>([]);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Only fetch when searchTerm changes (button click)
  useEffect(() => {
    let ignore = false;
    if (searchTerm.length > 1) {
      fetchSearchResults(searchTerm).then(filtered => {
        if (!ignore) setResults(filtered);
      });
    } else {
      setResults([]);
    }
    return () => { ignore = true; };
  }, [searchTerm]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    function handleClick(event: MouseEvent) {
      if (
        inputRef.current && !inputRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  return (
    <>
      <button 
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)} 
        className="text-white hover:text-gray-300 flex items-center"
        style={{ position: 'fixed', top: 32, right: 16, zIndex: 10000 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      {mounted && isOpen && createPortal(
        <div
          className="bg-white rounded shadow-lg z-[9999] max-h-96 overflow-y-auto"
          style={{ position: 'fixed', top: 64, right: 16, width: 340, minWidth: 300 }}
        >
          <div className="p-2 flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              ref={inputRef}
            />
            <button
              className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => {
                setSearchTerm(searchQuery);
                // Do NOT close the dropdown here
              }}
              disabled={searchQuery.length < 2}
              ref={buttonRef}
            >
              Search
            </button>
          </div>
          {searchTerm.length > 0 && (
            results.length > 0 ? (
              <div className="max-h-96 overflow-y-auto">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.path}
                    className="w-full text-left block px-4 py-3 hover:bg-gray-100 cursor-pointer border-t border-gray-100 z-50"
                    scroll={true}
                    passHref
                    prefetch={true}
                  >
                    <h3 className="text-sm font-medium text-gray-800">{result.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{result.excerpt}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="px-4 py-3 text-gray-600 text-sm border-t border-gray-100">
                No results found
              </div>
            )
          )}
        </div>,
        document.body
      )}
    </>
  );
}