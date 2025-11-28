function CommunityFeedCard({ author, time, category, title, content, likes, comments }) {
  return (
    <div style={{
      width: '100%',
      minWidth: '260px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
      padding: '24.67px',
      boxSizing: 'border-box',
      border: '1px solid #e5e7eb',
      transition: 'all 0.2s',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
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
      {/* Author Info */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '18px'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: '#e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px'
        }}>
          👤
        </div>
        <div>
          <div style={{
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '20px',
            marginBottom: '2px'
          }}>
            {author}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#9ca3af',
            lineHeight: '16px'
          }}>
            {time}
          </div>
        </div>
      </div>

      {/* Category */}
      <div style={{
        display: 'inline-block',
        width: 'fit-content',
        padding: '4px 12px',
        backgroundColor: category === '공동구매' 
          ? '#dcfce7' 
          : category === '마켓플레이스' 
          ? '#fed7aa' 
          : '#dbeafe',
        borderRadius: '12px',
        fontSize: '14px',
        color: category === '공동구매' 
          ? '#166534' 
          : category === '마켓플레이스' 
          ? '#9a3412' 
          : '#1e40af',
        lineHeight: '16px',
        marginBottom: '12px',
        fontWeight: '500',
        whiteSpace: 'nowrap'
      }}>
        {category}
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        margin: 0,
        marginBottom: '8px',
        lineHeight: '20px',
        color: '#1f2937'
      }}>
        {title}
      </h3>

      {/* Content */}
      <p style={{
        fontSize: '14px',
        color: '#6b7280',
        margin: 0,
        marginBottom: '16px',
        lineHeight: '20px',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>
        {content}
      </p>

      {/* Actions */}
      <div style={{
        display: 'flex',
        gap: '16px',
        paddingTop: '8.67px',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '14px',
          color: '#6b7280',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'color 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#ef4444';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#6b7280';
        }}
        >
          <span style={{ width: '16px', height: '16px', fontSize: '16px' }}>❤️</span>
          {likes}
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '14px',
          color: '#6b7280',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'color 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#3b82f6';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#6b7280';
        }}
        >
          <span style={{ width: '16px', height: '16px', fontSize: '16px' }}>💬</span>
          {comments}
        </div>
      </div>
    </div>
  );
}

export default CommunityFeedCard;

