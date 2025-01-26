import React from 'react'
import { motion } from 'framer-motion'

interface Profile {
  id: number
  name: string
  age: number
  bio: string
  interests: number[]
  imageUrl: string
}

interface SwipeCardProps {
  profile: Profile
  onSwipeLeft: () => void
  onSwipeRight: () => void
}

export const SwipeCard: React.FC<SwipeCardProps> = ({ 
  profile, 
  onSwipeLeft, 
  onSwipeRight 
}) => {
  const INTEREST_MAP: { [key: number]: string } = {
    1: 'Hiking', 2: 'Reading', 3: 'Cooking', 
    4: 'Music', 5: 'Sports', 6: 'Travel', 
    7: 'Movies', 8: 'Gaming'
  }

  return (
    <motion.div 
      className="relative w-80 h-[500px] bg-white rounded-xl shadow-lg overflow-hidden"
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      dragElastic={0.5}
      onDragEnd={(e, { offset, velocity }) => {
        if (offset.x < -100) onSwipeLeft()
        if (offset.x > 100) onSwipeRight()
      }}
    >
      <div 
        className="absolute w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${profile.imageUrl})` }}
      />
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{profile.name}, {profile.age}</h2>
        </div>
        <p className="mt-2">{profile.bio}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {profile.interests.map(interestId => (
            <span 
              key={interestId} 
              className="bg-pink-500 px-2 py-1 rounded-full text-xs"
            >
              {INTEREST_MAP[interestId]}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}


