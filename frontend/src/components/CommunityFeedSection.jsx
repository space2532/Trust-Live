import CommunityFeedCard from './CommunityFeedCard';

function CommunityFeedSection() {
  const feeds = [
    {
      author: '사라 김',
      time: '2시간 전',
      category: '룸메이트 찾기',
      title: '깔끔한 룸메이트 구해요!',
      content: '안녕하세요! 다음 달부터 2인실 공유할 룸메이트를 찾고 있습니다. 컴공 3학년이고 조용하고',
      likes: 24,
      comments: 12
    },
    {
      author: '알렉스 박',
      time: '5시간 전',
      category: '공동구매',
      title: '쌀 대량 구매 같이 하실 분?',
      content: '20kg 프리미엄 쌀 공동구매 진행합니다. 10명 모이면 1인당 15,000원 절약! 관심',
      likes: 45,
      comments: 28
    },
    {
      author: '제이미 리',
      time: '1일 전',
      category: '주거 팁',
      title: '저렴한 학생 주거지 베스트 3',
      content: '막 이사했는데 팁 공유하고 싶어요! 신촌 지역이 잘 찾아보면 좋은 매물이 많더라구요. 제가',
      likes: 67,
      comments: 19
    },
    {
      author: '크리스 최',
      time: '2일 전',
      category: '마켓플레이스',
      title: '책상과 의자 판매 - 거의 새것!',
      content: '곧 이사가서 책상(8만원)과 인체공학 의자(6만원) 판매합니다. 둘 다 1년 미만 사용. ',
      likes: 12,
      comments: 8
    }
  ];

  return (
    <div style={{
      width: '100%'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '700',
          margin: 0,
          lineHeight: '30px',
          color: '#111827',
          letterSpacing: '-0.5px'
        }}>
          커뮤니티 피드
        </h2>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '3px 0',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          fontSize: '16px',
          color: '#3b82f6',
          lineHeight: '24px',
          fontWeight: '500',
          transition: 'color 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#2563eb';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#3b82f6';
        }}
        >
          더보기
          <span style={{ width: '16px', height: '16px', fontSize: '16px' }}>→</span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="community-feed-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px',
        width: '100%'
      }}>
        {feeds.map((feed, index) => (
          <CommunityFeedCard
            key={index}
            author={feed.author}
            time={feed.time}
            category={feed.category}
            title={feed.title}
            content={feed.content}
            likes={feed.likes}
            comments={feed.comments}
          />
        ))}
      </div>
    </div>
  );
}

export default CommunityFeedSection;

