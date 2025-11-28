function LifeTipBanner() {
  return (
    <div style={{
      width: '100%',
      height: '120px',
      padding: '34px',
      boxSizing: 'border-box',
      backgroundColor: '#dcfce7',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      border: '1px solid #bbf7d0',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
    }}>
      {/* Icon */}
      <div style={{
        width: '48px',
        height: '48px',
        fontSize: '48px',
        lineHeight: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        💡
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        minWidth: 0
      }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          margin: 0,
          lineHeight: '24px',
          color: '#1f2937',
          letterSpacing: '-0.3px'
        }}>
          생활 팁
        </h3>
        <p style={{
          fontSize: '16px',
          color: '#4b5563',
          margin: 0,
          lineHeight: '24px',
          letterSpacing: '-0.2px'
        }}>
          기숙사 이웃들과 공동구매에 참여하여 돈을 절약하고 커뮤니티를 만드세요!
        </p>
      </div>
    </div>
  );
}

export default LifeTipBanner;

