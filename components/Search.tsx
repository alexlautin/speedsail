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

// Fetch search results from API
async function fetchSearchResults(query: string): Promise<SearchResult[]> {
  if (!query || query.length < 2) return [];
  try {
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [mounted, setMounted] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ left: 0, top: 0, width: 300 });
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle search
  useEffect(() => {
    let ignore = false;
    if (searchQuery.length > 1) {
      fetchSearchResults(searchQuery).then(filtered => {
        if (!ignore) setResults(filtered);
      });
    } else {
      setResults([]);
    }
    return () => { ignore = true; };
  }, [searchQuery]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const dropdownWidth = rect.width > 300 ? rect.width : 300;
      let left = rect.left;
      // Ensure dropdown doesn't overflow right edge
      if (left + dropdownWidth > window.innerWidth - 16) { // 16px margin
        left = window.innerWidth - dropdownWidth - 16;
        if (left < 8) left = 8; // minimum margin
      }
      setDropdownPos({
        left,
        top: rect.bottom + 4,
        width: dropdownWidth
      });
    }
  }, [isOpen, mounted]);

  return (
    <>
      <button 
        ref={buttonRef}
        onClick={() => setIsOpen(true)} 
        className="text-white hover:text-gray-300 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {/* <span className="ml-2">Search</span> */}
      </button>
      {mounted && isOpen && createPortal(
        <div
          className="bg-white rounded shadow-lg z-[9999] max-h-96 overflow-y-auto"
          style={{ position: 'fixed', left: dropdownPos.left, top: dropdownPos.top, width: dropdownPos.width, minWidth: 300 }}
        >
          <div className="p-0">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              ref={inputRef}
            />
          </div>
          {searchQuery.length > 0 && (
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