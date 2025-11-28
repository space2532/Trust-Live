import { Settings, CreditCard, LogOut, ChevronRight, FileText, User, Lock, Bell, Globe, MessageSquare, HelpCircle, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function MenuOptions() {
  const { language } = useLanguage();
  const [showSettingsPopup, setShowSettingsPopup] = useState(false);
  
  const menuItems = [
    { icon: MessageSquare, label: language === 'ko' ? '메시지' : 'Messages', color: 'text-foreground', onClick: () => {} },
    { icon: FileText, label: language === 'ko' ? '작성글' : 'My Posts', color: 'text-foreground', onClick: () => {} },
    { icon: Settings, label: language === 'ko' ? '계정 설정' : 'Account Settings', color: 'text-foreground', onClick: () => setShowSettingsPopup(true) },
    { icon: LogOut, label: language === 'ko' ? '로그아웃' : 'Log out', color: 'text-destructive', onClick: () => {} },
  ];

  const settingsOptions = [
    { icon: User, label: language === 'ko' ? '개인정보 수정' : 'Edit Profile', color: 'text-foreground' },
    { icon: Lock, label: language === 'ko' ? '비밀번호 변경' : 'Change Password', color: 'text-foreground' },
    { icon: Bell, label: language === 'ko' ? '알림 설정' : 'Notification Settings', color: 'text-foreground' },
    { icon: Globe, label: language === 'ko' ? '언어 설정' : 'Language Settings', color: 'text-foreground' },
    { icon: CreditCard, label: language === 'ko' ? '결제 수단 관리' : 'Payment Methods', color: 'text-foreground' },
    { icon: MessageSquare, label: language === 'ko' ? '의견 보내기' : 'Send Feedback', color: 'text-foreground' },
    { icon: HelpCircle, label: language === 'ko' ? '도움말' : 'Help', color: 'text-foreground' },
  ];

  return (
    <>
      <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className={`w-full flex items-center justify-between p-4 hover:bg-muted transition-colors ${
              index !== menuItems.length - 1 ? 'border-b border-border' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className={`text-sm ${item.color}`}>{item.label}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        ))}
      </div>

      {/* Settings Popup */}
      <AnimatePresence>
        {showSettingsPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowSettingsPopup(false)}
            />

            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl z-50 w-[90%] max-w-[480px] max-h-[80vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h3 className="text-foreground">{language === 'ko' ? '계정 설정' : 'Account Settings'}</h3>
                <button
                  onClick={() => setShowSettingsPopup(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Options List */}
              <div className="overflow-y-auto max-h-[calc(80vh-88px)]">
                {settingsOptions.map((option, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center justify-between p-5 hover:bg-muted transition-colors ${
                      index !== settingsOptions.length - 1 ? 'border-b border-border' : ''
                    }`}
                    onClick={() => {
                      // Handle option click
                      setShowSettingsPopup(false);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <option.icon className={`w-5 h-5 ${option.color}`} />
                      </div>
                      <span className={`text-sm ${option.color}`}>{option.label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}