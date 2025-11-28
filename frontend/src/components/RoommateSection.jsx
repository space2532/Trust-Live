function RoommateSection() {
  return (
    <div style={{
      width: '100%',
      minWidth: '320px',
      height: '445px',
      padding: '32.67px',
      boxSizing: 'border-box',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
      border: '1px solid #e5e7eb'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px'
      }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          margin: 0,
          lineHeight: '24px'
        }}>
          내 룸메이트
        </h3>
        <div style={{
          padding: '4px 12px',
          backgroundColor: '#dcfce7',
          borderRadius: '12px',
          fontSize: '14px',
          color: '#166534',
          lineHeight: '16px'
        }}>
          Active
        </div>
      </div>

      {/* Roommate Info */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: '#e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px'
        }}>
          👤
        </div>
        <div style={{
          flex: 1
        }}>
          <h4 style={{
            fontSize: '20px',
            fontWeight: '600',
            margin: 0,
            marginBottom: '4px',
            lineHeight: '24px'
          }}>
            Sarah Johnson
          </h4>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            margin: 0,
            lineHeight: '20px'
          }}>
            Move-in: Dec 1, 2025
          </p>
        </div>
      </div>

      {/* Match Score */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px',
        padding: '24px',
        backgroundColor: '#f9fafb',
        borderRadius: '12px',
        border: '1px solid #e5e7eb'
      }}>
        <div>
          <div style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '4px',
            lineHeight: '20px',
            color: '#111827'
          }}>
            매칭 점수
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            lineHeight: '16px'
          }}>
            라이프스타일 기반
          </div>
        </div>
        <div style={{
          width: '80px',
          height: '80px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          {/* Circular Progress */}
          <svg width="80" height="80" style={{ transform: 'rotate(-90deg)', position: 'absolute' }}>
            <circle
              cx="40"
              cy="40"
              r="32"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="6"
            />
            <circle
              cx="40"
              cy="40"
              r="32"
              fill="none"
              stroke="#10b981"
              strokeWidth="6"
              strokeDasharray={`${2 * Math.PI * 32 * 0.98} ${2 * Math.PI * 32}`}
              strokeLinecap="round"
              style={{ transition: 'stroke-dasharray 0.3s' }}
            />
          </svg>
          <div style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }}>
            <div style={{
              fontSize: '24px',
              fontWeight: '700',
              lineHeight: '28px',
              color: '#111827'
            }}>
              98%
            </div>
            <div style={{
              fontSize: '12px',
              color: '#6b7280',
              lineHeight: '16px',
              fontWeight: '500'
            }}>
              Match
            </div>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '24px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          padding: '6px 12px',
          backgroundColor: '#dbeafe',
          borderRadius: '14px',
          fontSize: '14px',
          color: '#1e40af',
          lineHeight: '16px',
          fontWeight: '500'
        }}>
          Early Bird
        </div>
        <div style={{
          padding: '6px 12px',
          backgroundColor: '#dbeafe',
          borderRadius: '14px',
          fontSize: '14px',
          color: '#1e40af',
          lineHeight: '16px',
          fontWeight: '500'
        }}>
          Clean Freak
        </div>
        <div style={{
          padding: '6px 12px',
          backgroundColor: '#dbeafe',
          borderRadius: '14px',
          fontSize: '14px',
          color: '#1e40af',
          lineHeight: '16px',
          fontWeight: '500'
        }}>
          Quiet Study
        </div>
      </div>

      {/* Message Button */}
      <button style={{
        width: '100%',
        height: '48px',
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#2563eb';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#3b82f6';
        e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
      }}
      >
        메시지 보내기
      </button>
    </div>
  );
}

export default RoommateSection;

