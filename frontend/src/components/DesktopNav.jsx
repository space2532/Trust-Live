function DesktopNav() {
  return (
    <nav style={{ 
      width: '100%', 
      height: '72.67px',
      display: 'flex',
      alignItems: 'center',
      padding: '16px 24px',
      boxSizing: 'border-box',
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
      borderBottom: '1px solid #e5e7eb'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '100%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '40px'
      }}>
        {/* Logo Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          height: '40px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            borderRadius: '8px',
            backgroundColor: '#f3f4f6'
          }}>
            🏠
          </div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            lineHeight: '28px',
            margin: 0,
            padding: 0,
            color: '#111827',
            letterSpacing: '-0.5px'
          }}>
            Trust-Live
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0px',
          height: '36px'
        }}>
          {[
            { label: '홈', width: '70px' },
            { label: '라이프스타일', width: '140px' },
            { label: '마켓', width: '84px' },
            { label: '커뮤니티', width: '112px' },
            { label: '마이페이지', width: '126px' }
          ].map((item, index) => {
            const isActive = index === 0; // 홈이 현재 페이지
            return (
            <button
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                height: '36px',
                width: item.width,
                border: 'none',
                background: isActive ? '#3b82f6' : 'transparent',
                cursor: 'pointer',
                fontSize: '16px',
                lineHeight: '20px',
                color: isActive ? '#ffffff' : '#4b5563',
                fontWeight: isActive ? '600' : '500',
                borderRadius: '20px',
                transition: 'all 0.2s',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.color = '#111827';
                } else {
                  e.currentTarget.style.backgroundColor = '#2563eb';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#4b5563';
                } else {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
            >
              <span style={{ 
                width: '16px', 
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px'
              }}>
                {index === 0 ? '🏠' : index === 1 ? '💼' : index === 2 ? '🛒' : index === 3 ? '💬' : '👤'}
              </span>
              <span>{item.label}</span>
            </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default DesktopNav;

