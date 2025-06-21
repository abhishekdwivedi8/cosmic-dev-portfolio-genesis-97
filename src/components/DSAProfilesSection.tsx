
import { Code, Trophy, ExternalLink } from "lucide-react";

const DSAProfilesSection = () => {
  const profiles = [
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/rkabhishekdwivedi/",
      icon: Code,
      gradient: "from-orange-500 to-yellow-500",
      hoverColor: "hover:shadow-orange-500/50"
    },
    {
      platform: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/r_abhishek/",
      icon: Trophy,
      gradient: "from-green-500 to-emerald-500",
      hoverColor: "hover:shadow-green-500/50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden" id="coding">
      {/* Fire Effect Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/15 via-red-500/25 to-pink-500/15 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-r from-red-500/20 via-rose-500/30 to-orange-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Coding <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Profiles</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            200+ problems solved across multiple platforms with consistent practice.
          </p>
        </div>

        {/* Simple Icon Links */}
        <div className="flex justify-center items-center gap-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {profiles.map((profile, index) => {
            const IconComponent = profile.icon;
            return (
              <a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-110 hover:shadow-2xl ${profile.hoverColor}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`p-6 bg-gradient-to-r ${profile.gradient} rounded-full group-hover:rotate-12 transition-transform duration-500 shadow-lg group-hover:shadow-2xl`}>
                  <IconComponent className="w-12 h-12 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                    {profile.platform}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">View Profile</span>
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${profile.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-xl`}></div>
              </a>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="inline-flex items-center gap-8 p-6 bg-gradient-to-r from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700/50">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-1">
                200+
              </div>
              <div className="text-sm text-slate-400">Problems Solved</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-1">
                2+
              </div>
              <div className="text-sm text-slate-400">Platforms</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-1">
                Daily
              </div>
              <div className="text-sm text-slate-400">Practice</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSAProfilesSection;
