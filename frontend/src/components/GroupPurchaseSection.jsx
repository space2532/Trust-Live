import GroupPurchaseCard from './GroupPurchaseCard';

function GroupPurchaseSection() {
  const groupPurchases = [
    {
      title: '프리미엄 생수 팩',
      location: 'Dorm A Lobby',
      price: '₩15,000',
      originalPrice: '₩20,000',
      participants: 3,
      total: 5,
      discount: '30%',
      timeLeft: '3h left'
    },
    {
      title: '세탁 세제',
      location: 'Dorm B Lobby',
      price: '₩12,600',
      originalPrice: '₩18,000',
      participants: 4,
      total: 5,
      discount: '30%',
      timeLeft: '5h left'
    },
    {
      title: '청소 용품',
      location: 'Dorm A Lobby',
      price: '₩17,500',
      originalPrice: '₩25,000',
      participants: 2,
      total: 5,
      discount: '30%',
      timeLeft: '8h left'
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
          주변 공동구매
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
          전체보기
          <span style={{ width: '16px', height: '16px', fontSize: '16px' }}>→</span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="group-purchase-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '24px',
        width: '100%'
      }}>
        {groupPurchases.map((item, index) => (
          <GroupPurchaseCard
            key={index}
            title={item.title}
            location={item.location}
            price={item.price}
            originalPrice={item.originalPrice}
            participants={item.participants}
            total={item.total}
            discount={item.discount}
            timeLeft={item.timeLeft}
          />
        ))}
      </div>
    </div>
  );
}

export default GroupPurchaseSection;

