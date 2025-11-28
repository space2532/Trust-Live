import { useState } from 'react';
import { RoommateSwipeCard } from './RoommateSwipeCard';
import { SwipeControls } from './SwipeControls';
import { DetailedAnalysisModal } from './DetailedAnalysisModal';
import { Users, Sliders } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function RoommateMatchingScreen() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const potentialRoommates = [
    {
      name: 'Sarah Johnson',
      age: 21,
      photo: 'https://images.unsplash.com/photo-1639654655546-68bc1f21e9e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDAyMzc3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      major: 'Computer Science',
      university: 'State University',
      matchPercentage: 98,
      attributes: ['Early Bird', 'Non-smoker', 'Clean Freak', 'Quiet Study'],
      analysisCategories: [
        { category: 'Sleep Schedule', match: 95, yourPreference: 'Early (10 PM - 6 AM)', theirPreference: 'Early (10:30 PM - 6:30 AM)' },
        { category: 'Cleanliness', match: 100, yourPreference: 'Very Clean', theirPreference: 'Very Clean' },
        { category: 'Noise Level', match: 98, yourPreference: 'Quiet', theirPreference: 'Very Quiet' },
        { category: 'Social Habits', match: 92, yourPreference: 'Small gatherings', theirPreference: 'Small gatherings' },
        { category: 'Study Habits', match: 100, yourPreference: 'Regular studier', theirPreference: 'Regular studier' },
      ],
    },
    {
      name: 'Michael Chen',
      age: 20,
      photo: 'https://images.unsplash.com/photo-1758639842438-718755aa57e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2NDEzNjU1OHww&ixlib=rb-4.1.0&q=80&w=1080',
      major: 'Business Administration',
      university: 'State University',
      matchPercentage: 94,
      attributes: ['Night Owl', 'Non-smoker', 'Organized', 'Social'],
      analysisCategories: [
        { category: 'Sleep Schedule', match: 85, yourPreference: 'Early (10 PM - 6 AM)', theirPreference: 'Late (12 AM - 8 AM)' },
        { category: 'Cleanliness', match: 95, yourPreference: 'Very Clean', theirPreference: 'Clean' },
        { category: 'Noise Level', match: 90, yourPreference: 'Quiet', theirPreference: 'Moderate' },
        { category: 'Social Habits', match: 98, yourPreference: 'Small gatherings', theirPreference: 'Small gatherings' },
        { category: 'Study Habits', match: 96, yourPreference: 'Regular studier', theirPreference: 'Regular studier' },
      ],
    },
    {
      name: 'Emma Rodriguez',
      age: 22,
      photo: 'https://images.unsplash.com/photo-1719861915316-449b8de4b0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwNjI3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      major: 'Psychology',
      university: 'State University',
      matchPercentage: 91,
      attributes: ['Early Bird', 'Non-smoker', 'Pet Lover', 'Active'],
      analysisCategories: [
        { category: 'Sleep Schedule', match: 92, yourPreference: 'Early (10 PM - 6 AM)', theirPreference: 'Early (11 PM - 7 AM)' },
        { category: 'Cleanliness', match: 88, yourPreference: 'Very Clean', theirPreference: 'Clean' },
        { category: 'Noise Level', match: 95, yourPreference: 'Quiet', theirPreference: 'Quiet' },
        { category: 'Social Habits', match: 85, yourPreference: 'Small gatherings', theirPreference: 'Medium gatherings' },
        { category: 'Study Habits', match: 95, yourPreference: 'Regular studier', theirPreference: 'Regular studier' },
      ],
    },
  ];

  const currentRoommate = potentialRoommates[currentIndex];

  const handleLike = () => {
    if (currentIndex < potentialRoommates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePass = () => {
    if (currentIndex < potentialRoommates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSuperLike = () => {
    if (currentIndex < potentialRoommates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            <h1 className="text-primary">{t('matching.title')}</h1>
          </div>
          <button className="p-2 hover:bg-muted rounded-full transition-colors">
            <Sliders className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </header>

      <main className="pt-4 px-4 max-w-md mx-auto">
        {/* Progress Indicator */}
        <div className="mb-4 bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">
              Reviewing {currentIndex + 1} of {potentialRoommates.length}
            </p>
            <p className="text-sm text-primary">{potentialRoommates.length - currentIndex - 1} remaining</p>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div 
              className="bg-primary h-full transition-all"
              style={{ width: `${((currentIndex + 1) / potentialRoommates.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Swipe Card */}
        {currentRoommate && (
          <RoommateSwipeCard 
            {...currentRoommate}
            onViewDetails={() => setShowAnalysis(true)}
          />
        )}

        {/* Swipe Controls */}
        <SwipeControls 
          onPass={handlePass}
          onLike={handleLike}
          onSuperLike={handleSuperLike}
          onUndo={handleUndo}
        />

        {/* Tips */}
        <div className="bg-secondary/10 border-2 border-secondary/30 rounded-[20px] p-4 flex gap-3">
          <span className="text-2xl flex-shrink-0">💡</span>
          <div>
            <p className="text-sm text-foreground mb-1">Matching Tip</p>
            <p className="text-sm text-muted-foreground">
              Check the detailed analysis to understand compatibility factors before making a decision!
            </p>
          </div>
        </div>
      </main>

      {/* Detailed Analysis Modal */}
      {currentRoommate && (
        <DetailedAnalysisModal 
          isOpen={showAnalysis}
          onClose={() => setShowAnalysis(false)}
          name={currentRoommate.name}
          matchPercentage={currentRoommate.matchPercentage}
          categories={currentRoommate.analysisCategories}
        />
      )}
    </div>
  );
}