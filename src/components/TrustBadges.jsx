export default function TrustBadges() {
  const badges = [
    { icon: '✓', title: 'Sanitized Cars', subtitle: 'Before every trip', color: 'green' },
    { icon: '🔄', title: 'Free Cancellation', subtitle: 'Up to 24 hours', color: 'blue' },
    { icon: '🛡️', title: 'Insurance Coverage', subtitle: 'Comprehensive', color: 'purple' },
    { icon: '📞', title: '24x7 Support', subtitle: 'Roadside assistance', color: 'orange' }
  ];

  return (
    <div className="bg-white border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3">
              <div className={`w-12 h-12 bg-${badge.color}-100 rounded-full flex items-center justify-center`}>
                <span className="text-2xl">{badge.icon}</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">{badge.title}</p>
                <p className="text-xs text-gray-500">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}