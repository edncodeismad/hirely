"use client";

import React, { useState, useEffect } from 'react'
import { Layout } from '@/components/Layout'
import { SwipeCard } from '@/components/SwipeCard'

const MOCK_PROFILES = [
  {
    id: 1,
    name: 'Emma',
    age: 28,
    bio: 'Adventure seeker and coffee lover',
    interests: [1, 6, 4],
    imageUrl: '/emma.jpg'
  },
  {
    id: 2,
    name: 'Alex',
    age: 32,
    bio: 'Tech enthusiast and weekend chef',
    interests: [3, 8, 2],
    imageUrl: '/alex.jpg'
  }
  // More profiles would be added dynamically
]

export default function SwipePage() {
  const [profiles, setProfiles] = useState(MOCK_PROFILES)
  const [currentProfile, setCurrentProfile] = useState(MOCK_PROFILES[0])

  const handleSwipeLeft = () => {
    // In a real app, you'd send a "dislike" to backend
    const newProfiles = profiles.slice(1)
    setProfiles(newProfiles)
    setCurrentProfile(newProfiles[0])
  }

  const handleSwipeRight = () => {
    // In a real app, you'd send a "like" to backend
    const newProfiles = profiles.slice(1)
    setProfiles(newProfiles)
    setCurrentProfile(newProfiles[0])
  }

  if (!currentProfile) {
    return (
      <Layout>
        <div className="text-center text-2xl">
          No more profiles to show
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="flex justify-center items-center h-[calc(100vh-100px)]">
        <SwipeCard 
          profile={currentProfile} 
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />
      </div>
    </Layout>
  )
}

