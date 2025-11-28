function ProfileCard() {
  return (
    <div style={{
      width: '100%',
      minWidth: '320px',
      height: '246px',
      padding: '32.67px',
      boxSizing: 'border-box',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
      border: '1px solid #e5e7eb'
    }}>
      {/* Profile Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          {/* Profile Image */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            border: '2px solid #e5e7eb',
            flexShrink: 0
          }}>
            👤
          </div>
          
          {/* Profile Info */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            minWidth: 0
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              margin: 0,
              lineHeight: '24px',
              color: '#111827'
            }}>
              Alex Kim
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              margin: 0,
              lineHeight: '20px'
            }}>
              State University
            </p>
            <div style={{
              fontSize: '14px',
              color: '#059669',
              marginTop: '4px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span>✓</span>
              <span>Trust Score: 94</span>
            </div>
          </div>
        </div>

        {/* Settings Button */}
        <button style={{
          width: '44px',
          height: '44px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#f3f4f6',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          transition: 'all 0.2s',
          flexShrink: 0
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#e5e7eb';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#f3f4f6';
        }}
        >
          ⚙️
        </button>
      </div>

      {/* Stats */}
      <div style={{
        display: 'flex',
        gap: '16px',
        marginTop: '24px',
        paddingTop: '24px',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{
          flex: 1,
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '32px',
            marginBottom: '4px',
            color: '#111827'
          }}>
            94
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            lineHeight: '16px',
            fontWeight: '500'
          }}>
            신뢰도
          </div>
        </div>
        <div style={{
          flex: 1,
          textAlign: 'center',
          borderLeft: '1px solid #e5e7eb',
          borderRight: '1px solid #e5e7eb'
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '32px',
            marginBottom: '4px',
            color: '#111827'
          }}>
            12
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            lineHeight: '16px',
            fontWeight: '500'
          }}>
            딜 참여
          </div>
        </div>
        <div style={{
          flex: 1,
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '32px',
            marginBottom: '4px',
            color: '#059669'
          }}>
            ₩45,000
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            lineHeight: '16px',
            fontWeight: '500'
          }}>
            이번 달 절약액
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

