import React, { useState } from 'react'
import { useRouter } from 'next/router'

interface Interest {
  id: number
  name: string
}

const INTEREST_OPTIONS: Interest[] = [
  { id: 1, name: 'Hiking' },
  { id: 2, name: 'Reading' },
  { id: 3, name: 'Cooking' },
  { id: 4, name: 'Music' },
  { id: 5, name: 'Sports' },
  { id: 6, name: 'Travel' },
  { id: 7, name: 'Movies' },
  { id: 8, name: 'Gaming' }
]

export const ProfileForm: React.FC = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [bio, setBio] = useState('')
  const [gender, setGender] = useState('')
  const [selectedInterests, setSelectedInterests] = useState<number[]>([])

  const handleInterestToggle = (interestId: number) => {
    setSelectedInterests(prev => 
      prev.includes(interestId)
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to backend
    const profileData = {
      name,
      age: parseInt(age),
      bio,
      gender,
      interests: selectedInterests
    }
    localStorage.setItem('userProfile', JSON.stringify(profileData))
    router.push('/swipe')
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full p-2 border rounded"
          required
          min="18"
          max="99"
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full p-2 border rounded"
          rows={4}
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        
        <div>
          <h3 className="mb-2 font-semibold">Select Interests</h3>
          <div className="grid grid-cols-4 gap-2">
            {INTEREST_OPTIONS.map((interest) => (
              <button
                key={interest.id}
                type="button"
                onClick={() => handleInterestToggle(interest.id)}
                className={`p-2 rounded ${
                  selectedInterests.includes(interest.id)
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                {interest.name}
              </button>
            ))}
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600"
        >
          Create Profile
        </button>
      </form>
    </div>
  )
}


