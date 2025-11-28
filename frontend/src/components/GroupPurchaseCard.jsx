function GroupPurchaseCard({ title, location, price, originalPrice, participants, total, discount, timeLeft, image }) {
  const progress = (participants / total) * 100;

  return (
    <div style={{
      width: '100%',
      minWidth: '240px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
      overflow: 'hidden',
      border: '1px solid #e5e7eb',
      transition: 'all 0.2s',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      {/* Image Section */}
      <div style={{
        width: '100%',
        height: '230px',
        backgroundColor: '#e5e7eb',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '48px'
      }}>
        {image || '🛒'}
        {/* Discount Badge */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          padding: '5px 11px',
          backgroundColor: '#ef4444',
          color: '#ffffff',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '700',
          lineHeight: '16px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}>
          {discount} OFF
        </div>
        {/* Time Left Badge */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          padding: '5px 12px',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: '#ffffff',
          borderRadius: '4px',
          fontSize: '14px',
          lineHeight: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <span style={{ width: '12px', height: '12px' }}>⏰</span>
          {timeLeft}
        </div>
      </div>

      {/* Content Section */}
      <div style={{
        padding: '22px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Title */}
        <h3 style={{
          fontSize: '18px',
          fontWeight: '600',
          margin: 0,
          marginBottom: '12px',
          lineHeight: '20px'
        }}>
          {title}
        </h3>

        {/* Location */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          marginBottom: '12px',
          fontSize: '14px',
          color: '#6b7280'
        }}>
          <span style={{ width: '12px', height: '12px' }}>📍</span>
          {location}
        </div>

        {/* Price */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '16px'
        }}>
          <span style={{
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '28px',
            color: '#111827'
          }}>
            {price}
          </span>
          <span style={{
            fontSize: '14px',
            color: '#9ca3af',
            textDecoration: 'line-through',
            lineHeight: '16px'
          }}>
            {originalPrice}
          </span>
        </div>

        {/* Progress */}
        <div style={{
          marginBottom: '16px',
          marginTop: 'auto'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '6px',
            fontSize: '14px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{ width: '12px', height: '12px' }}>👥</span>
              <span>{participants}/{total}</span>
            </div>
            <span style={{
              fontWeight: '500'
            }}>
              {Math.round(progress)}%
            </span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: '#e5e7eb',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: '#10b981',
              transition: 'width 0.3s'
            }} />
          </div>
        </div>

        {/* Button */}
        <button style={{
          width: '100%',
          height: '44px',
          backgroundColor: '#10b981',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
          marginTop: 'auto'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#059669';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#10b981';
          e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
        }}
        >
          참여하기
        </button>
      </div>
    </div>
  );
}

export default GroupPurchaseCard;

