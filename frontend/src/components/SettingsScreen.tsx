import { useState } from 'react';
import { 
  ChevronRight, 
  User, 
  Shield, 
  Lock, 
  Heart, 
  RefreshCw, 
  Bell, 
  ShoppingBag, 
  MessageCircle, 
  CreditCard, 
  MapPin, 
  Globe, 
  FileText, 
  HelpCircle, 
  ScrollText,
  Info,
  ArrowLeft,
  Check
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SettingsScreenProps {
  onBack?: () => void;
}

interface SettingsItemProps {
  icon: any;
  label: string;
  value?: string;
  showChevron?: boolean;
  badge?: string;
  badgeColor?: string;
  onClick?: () => void;
}

function SettingsItem({ icon: Icon, label, value, showChevron = true, badge, badgeColor, onClick }: SettingsItemProps) {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3.5 bg-white hover:bg-muted/50 transition-colors"
    >
      <Icon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
      <span className="flex-1 text-left text-foreground">{label}</span>
      {badge && (
        <span className={`text-sm px-3 py-1 rounded-full ${badgeColor || 'bg-secondary text-white'}`}>
          {badge}
        </span>
      )}
      {value && (
        <span className="text-sm text-muted-foreground">{value}</span>
      )}
      {showChevron && (
        <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
      )}
    </button>
  );
}

interface SettingsToggleProps {
  icon: any;
  label: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  highlighted?: boolean;
}

function SettingsToggle({ icon: Icon, label, enabled, onToggle, highlighted = false }: SettingsToggleProps) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3.5 bg-white ${highlighted ? 'border-l-4 border-secondary' : ''}`}>
      <Icon className={`w-5 h-5 ${highlighted ? 'text-secondary' : 'text-muted-foreground'} flex-shrink-0`} />
      <span className={`flex-1 text-foreground ${highlighted ? 'font-medium' : ''}`}>{label}</span>
      <button
        onClick={() => onToggle(!enabled)}
        className={`relative w-12 h-7 rounded-full transition-colors ${
          enabled ? 'bg-secondary' : 'bg-gray-300'
        }`}
      >
        <div
          className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
}

function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="px-4 py-2 bg-background">
      <h3 className="text-xs text-muted-foreground uppercase tracking-wide">{title}</h3>
    </div>
  );
}

export function SettingsScreen({ onBack }: SettingsScreenProps) {
  const { language, setLanguage, t } = useLanguage();
  const [searchingRoommate, setSearchingRoommate] = useState(true);
  const [newMatchAlerts, setNewMatchAlerts] = useState(true);
  const [groupBuyDeadlines, setGroupBuyDeadlines] = useState(true);
  const [chatMessages, setChatMessages] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const currentLanguageDisplay = language === 'ko' ? t('settings.korean') : t('settings.english');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center gap-3 max-w-md mx-auto">
          <button className="p-2 -ml-2 hover:bg-muted rounded-full transition-colors" onClick={onBack}>
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-primary">{t('settings.title')}</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto pb-8">
        {/* Account & Trust Section */}
        <SectionHeader title={t('settings.accountTrust')} />
        <div className="bg-white border-y border-border divide-y divide-border">
          <SettingsItem icon={User} label={t('settings.editProfile')} />
          <SettingsItem 
            icon={Shield} 
            label={t('settings.verification')} 
            badge={t('settings.verified')} 
            badgeColor="bg-secondary text-white"
            showChevron={false}
          />
          <SettingsItem icon={Lock} label={t('settings.changePassword')} />
        </div>

        {/* Matching Preferences Section */}
        <SectionHeader title={t('settings.matchingPreferences')} />
        <div className="bg-white border-y border-border divide-y divide-border">
          <SettingsToggle 
            icon={Heart} 
            label={t('settings.searchingRoommate')} 
            enabled={searchingRoommate}
            onToggle={setSearchingRoommate}
            highlighted={true}
          />
          <SettingsItem icon={RefreshCw} label={t('settings.retakeSurvey')} />
        </div>

        {/* Notifications Section */}
        <SectionHeader title={t('settings.notifications')} />
        <div className="bg-white border-y border-border divide-y divide-border">
          <SettingsToggle 
            icon={Bell} 
            label={t('settings.newMatchAlerts')} 
            enabled={newMatchAlerts}
            onToggle={setNewMatchAlerts}
          />
          <SettingsToggle 
            icon={ShoppingBag} 
            label={t('settings.groupBuyDeadlines')} 
            enabled={groupBuyDeadlines}
            onToggle={setGroupBuyDeadlines}
          />
          <SettingsToggle 
            icon={MessageCircle} 
            label={t('settings.chatMessages')} 
            enabled={chatMessages}
            onToggle={setChatMessages}
          />
        </div>

        {/* Payment & Location Section */}
        <SectionHeader title={t('settings.paymentLocation')} />
        <div className="bg-white border-y border-border divide-y divide-border">
          <SettingsItem icon={CreditCard} label={t('settings.paymentMethods')} />
          <SettingsItem icon={MapPin} label={t('settings.dormLocation')} />
        </div>

        {/* General & Support Section */}
        <SectionHeader title={t('settings.generalSupport')} />
        <div className="bg-white border-y border-border divide-y divide-border">
          <SettingsItem 
            icon={Globe} 
            label={t('settings.appLanguage')} 
            value={currentLanguageDisplay}
            onClick={() => setShowLanguageModal(true)}
          />
          <SettingsItem icon={Bell} label={t('settings.notice')} />
          <SettingsItem icon={HelpCircle} label={t('settings.helpCenter')} />
          <SettingsItem icon={ScrollText} label={t('settings.termsOfService')} />
          <SettingsItem 
            icon={Info} 
            label={t('settings.appVersion')} 
            value="v1.0.0" 
            showChevron={false}
          />
        </div>

        {/* Footer */}
        <div className="mt-8 space-y-4 px-4">
          <button className="w-full py-3 text-muted-foreground hover:text-foreground transition-colors">
            {t('settings.logout')}
          </button>
          <button className="w-full text-sm text-destructive hover:underline">
            {t('settings.deleteAccount')}
          </button>
        </div>
      </main>

      {/* Language Selection Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50" onClick={() => setShowLanguageModal(false)}>
          <div className="bg-white rounded-t-[24px] w-full max-w-md p-6 pb-8" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-foreground mb-4 text-center">{t('settings.selectLanguage')}</h2>
            
            <div className="space-y-2">
              <button
                onClick={() => {
                  setLanguage('ko');
                  setShowLanguageModal(false);
                }}
                className="w-full flex items-center justify-between px-4 py-4 bg-white hover:bg-muted rounded-[16px] border border-border transition-colors"
              >
                <span className="text-foreground">{t('settings.korean')}</span>
                {language === 'ko' && <Check className="w-5 h-5 text-secondary" />}
              </button>
              
              <button
                onClick={() => {
                  setLanguage('en');
                  setShowLanguageModal(false);
                }}
                className="w-full flex items-center justify-between px-4 py-4 bg-white hover:bg-muted rounded-[16px] border border-border transition-colors"
              >
                <span className="text-foreground">{t('settings.english')}</span>
                {language === 'en' && <Check className="w-5 h-5 text-secondary" />}
              </button>
            </div>

            <button
              onClick={() => setShowLanguageModal(false)}
              className="w-full mt-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('settings.cancel')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}