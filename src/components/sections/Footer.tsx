import { Mail, MapPin, Globe, Instagram, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 md:pt-20 pb-8 md:pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Left: Logo + Motto */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-2">
              <Link to="/">
                <img 
                  src="/media/vetro-logo-white.webp" 
                  alt="Vetrox Infinity Logo" 
                  className="w-16 h-10 md:w-20 md:h-12 object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://picsum.photos/seed/glass/100/100";
                  }}
                />
              </Link>
              <span className="font-heading font-bold text-xl md:text-2xl tracking-tighter">VETROX</span>
            </div>
            <p className="text-white/70 italic text-base md:text-lg">
              "Made by thousands, used by crores, processed by one"
            </p>
          </div>

          {/* Center: Address */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-white/50 uppercase tracking-widest text-[10px] md:text-xs font-bold">Headquarters</h4>
            <div className="flex gap-3 items-start">
              <MapPin size={18} md:size={20} className="text-white/50 shrink-0 mt-1" />
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                6/52, Diwana Rama Road<br />
                Chennai, Tamilnadu , India
              </p>
            </div>
          </div>

          {/* Right: Contact */}
          <div className="space-y-4 md:space-y-6 sm:col-span-2 lg:col-span-1">
            <h4 className="text-white/50 uppercase tracking-widest text-[10px] md:text-xs font-bold">Get in Touch</h4>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-8 lg:gap-4">
              <div className="flex gap-3 items-center">
                <Mail size={18} md:size={20} className="text-white/50" />
                <a href="mailto:info@vetrox.co.in" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">
                  info@vetrox.co.in
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={18} md:size={20} className="text-white/50" />
                <span className="text-white/80 text-sm md:text-base">www.vetrox.co.in</span>
              </div>
              <div className="flex gap-3 items-center">
                <Instagram size={18} md:size={20} className="text-white/50" />
                <a 
                  href="https://www.instagram.com/vetrox.co.in/?utm_source=ig_web_button_share_sheet" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-white transition-colors text-sm md:text-base"
                >
                  Follow on Instagram
                </a>
              </div>
              <div className="flex gap-3 items-center pt-2">
                <MessageSquare size={18} md:size={20} className="text-secondary" />
                <a href="#contact" className="text-secondary font-bold hover:text-white transition-colors text-sm md:text-base underline underline-offset-4">
                  Send Bulk Requirement
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 md:pt-12 text-center space-y-4">
          <p className="text-white/40 text-[10px] md:text-sm">
            © 2026 Vetrox.co.in. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/60 text-[10px] md:text-xs px-4">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary rounded-full animate-pulse shrink-0" />
            <p className="text-balance">This website is hosted on green energy to match our mission.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
