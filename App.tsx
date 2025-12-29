
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  Award,
  Users,
  Building2,
  ShieldCheck,
  Navigation,
  Mail,
  FileText
} from 'lucide-react';

// Reusable Components
const SectionHeader: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="mb-12 text-center">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-navy-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-navy-100' : 'text-warm-500'}`}>
        {subtitle}
      </p>
    )}
    <div className={`w-16 h-1 mx-auto mt-6 rounded-full ${light ? 'bg-white' : 'bg-navy-700'}`}></div>
  </div>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-warm-200 hover:shadow-xl transition-all duration-300 group">
    <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center text-navy-700 mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-navy-900">{title}</h3>
    <p className="text-warm-500 leading-relaxed">{description}</p>
  </div>
);

const PrivacyModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-3xl max-h-[80vh] overflow-y-auto p-8 shadow-2xl animate-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-navy-900">개인정보처리방침</h2>
          <button onClick={onClose} className="p-2 hover:bg-warm-100 rounded-full transition-colors"><X size={24} /></button>
        </div>
        <div className="text-warm-500 space-y-4 text-sm leading-relaxed">
          <p>청암공인중개사사무소(이하 '사무소')는 고객님의 개인정보를 중요시하며, '개인정보 보호법'을 준수하고 있습니다.</p>
          <h3 className="font-bold text-navy-900">1. 수집하는 개인정보 항목</h3>
          <p>사무소는 상담 및 서비스 제공을 위해 아래와 같은 개인정보를 수집할 수 있습니다: 성명, 연락처, 매물정보 등.</p>
          <h3 className="font-bold text-navy-900">2. 개인정보의 수집 및 이용목적</h3>
          <p>부동산 중개 상담 및 서비스 제공, 매물 정보 안내, 계약 관련 업무 수행.</p>
          <h3 className="font-bold text-navy-900">3. 개인정보의 보유 및 이용기간</h3>
          <p>원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 관련 법령에 따라 보존합니다.</p>
          <h3 className="font-bold text-navy-900">4. 개인정보의 파기절차 및 방법</h3>
          <p>전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</p>
        </div>
        <div className="mt-8">
          <button onClick={onClose} className="w-full bg-navy-900 text-white py-4 rounded-xl font-bold">닫기</button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "0507-1409-3400";
  const officeTel = "02-718-3450";
  const repName = "정현주";
  const officeName = "청암공인중개사사무소";
  const address = "서울특별시 마포구 백범로37길 16 삼성1차 아파트 105호";
  const email = "gkdlel134@naver.com";
  const kakaoNavUrl = "https://map.kakao.com/link/to/청암공인중개사사무소,37.5446,126.9531";

  return (
    <div className="min-h-screen">
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-navy-900 text-white p-2 rounded-lg">
              <Building2 size={24} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-navy-900' : 'text-white md:text-navy-900'}`}>
              신공덕청암 <span className="text-navy-500">부동산</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm lg:text-base">
            <a href="#about" className={`${isScrolled ? 'text-navy-700 hover:text-navy-900' : 'text-white md:text-navy-700 hover:text-black'} transition-colors`}>소개</a>
            <a href="#services" className={`${isScrolled ? 'text-navy-700 hover:text-navy-900' : 'text-white md:text-navy-700 hover:text-black'} transition-colors`}>전문분야</a>
            <a href="#location" className={`${isScrolled ? 'text-navy-700 hover:text-navy-900' : 'text-white md:text-navy-700 hover:text-black'} transition-colors`}>오시는 길</a>
            <a 
              href={`tel:${phoneNumber}`} 
              className="bg-navy-900 text-white px-6 py-2.5 rounded-full hover:bg-navy-800 transition-all flex items-center gap-2 shadow-lg shadow-navy-900/20"
            >
              <Phone size={18} />
              상담하기
            </a>
          </div>

          <button className="md:hidden p-2 text-navy-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-navy-900' : 'text-white'} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full bg-white shadow-2xl p-6 md:hidden animate-in slide-in-from-top duration-300">
            <div className="flex justify-between items-center mb-8">
               <span className="text-xl font-bold text-navy-900">신공덕청암 부동산</span>
               <button onClick={() => setIsMenuOpen(false)}><X size={28} /></button>
            </div>
            <div className="flex flex-col gap-6 text-lg font-medium">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-navy-700 border-b border-warm-200 pb-4">공인중개사 소개</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-navy-700 border-b border-warm-200 pb-4">중개 서비스</a>
              <a href="#location" onClick={() => setIsMenuOpen(false)} className="text-navy-700 border-b border-warm-200 pb-4">오시는 길</a>
              <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2 bg-navy-900 text-white py-4 rounded-xl">
                <Phone size={20} /> 전화 바로 연결
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000" 
            alt="City view background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-navy-500/20 backdrop-blur-md text-white px-4 py-2 rounded-full mb-6 border border-white/10">
              <Award size={18} className="text-navy-300" />
              <span className="text-sm font-semibold uppercase tracking-wider">신공덕동·공덕역 중개 전문가</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.15] tracking-tight">
              신공덕의 가치를 <br />
              <span className="text-navy-300 font-extrabold text-shadow-lg">가장 잘 아는 파트너</span>
            </h1>
            <p className="text-lg md:text-xl text-navy-100 mb-10 leading-[1.8] max-w-2xl font-light">
              단순한 집을 찾는 것을 넘어, <br className="md:hidden" />
              당신의 삶이 머무는 공간의 진정한 가치를 발견합니다. <br />
              <span className="font-medium text-white">20년 한결같은 신뢰로 함께하겠습니다.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-3 bg-white text-navy-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-navy-50 transition-all shadow-xl shadow-black/20"
              >
                상담 예약하기 <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
           <div className="w-[2px] h-10 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-navy-50 rounded-3xl -z-0"></div>
              <div className="absolute top-12 -left-8 bg-navy-900 text-white p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="text-4xl font-bold mb-1">20+</div>
                <div className="text-navy-300 font-medium">지역 전문성</div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <span className="text-navy-600 font-bold tracking-widest uppercase mb-4 block">Our Values</span>
              <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
                단순한 중개를 넘어 <br />
                <span className="text-navy-500">삶의 기반을 잇습니다.</span>
              </h2>
              <p className="text-lg text-warm-500 mb-8 leading-relaxed">
                {officeName}은 이 지역의 골목골목을 누구보다 깊이 이해하고 있습니다. 
                베테랑의 노련함과 전문가의 날카로운 분석력을 더해, 
                고객님이 놓치기 쉬운 세밀한 부분까지 하나하나 검토하여 안전한 계약을 보장합니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-navy-700 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">철저한 권리 분석</h4>
                    <p className="text-sm text-warm-500">법적 리스크를 사전에 완벽히 차단합니다.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-navy-700 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">실매물 정직 중개</h4>
                    <p className="text-sm text-warm-500">직접 확인한 투명한 정보만 전달합니다.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-navy-700 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">지역 밀착 케어</h4>
                    <p className="text-sm text-warm-500">신공덕동의 자산 가치 변화를 추적합니다.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-navy-700 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">책임 있는 사후 관리</h4>
                    <p className="text-sm text-warm-500">계약 이후까지 든든한 파트너가 됩니다.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-warm-50 rounded-2xl border border-warm-200 border-l-4 border-l-navy-900">
                <p className="italic text-navy-700 font-medium text-lg leading-relaxed">
                  "부동산 계약은 단순한 서류 작업이 아닙니다. <br className="hidden md:block" /> 누군가의 소중한 자산이자 꿈을 다루는 일이기에, <br className="hidden md:block" /> 저의 이름을 건 진심을 모든 계약서에 담습니다."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center text-white font-bold text-xl">정</div>
                  <div>
                    <span className="block font-bold text-navy-900 text-lg">대표 공인중개사 {repName} 드림</span>
                    <span className="text-sm text-warm-500">신공덕동 부동산 전문 컨설턴트</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-warm-100">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="전문 중개 서비스" 
            subtitle="신공덕동과 공덕역 인근의 모든 주거 및 상업용 부동산에 대한 전문 솔루션을 제공합니다." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Building2 size={32} />}
              title="아파트·빌라 매매"
              description="단지별 특징과 시세 흐름을 분석하여 최적의 매수·매도 타이밍을 제안합니다."
            />
            <ServiceCard 
              icon={<Clock size={32} />}
              title="전세·월세 임대차"
              description="임대인과 임차인 모두가 만족하는 합리적이고 안전한 계약을 지원합니다."
            />
            <ServiceCard 
              icon={<Users size={32} />}
              title="재개발·투자 상담"
              description="공덕 인근의 풍부한 개발 호재와 투자 가치를 정밀하게 분석해 드립니다."
            />
            <ServiceCard 
              icon={<ShieldCheck size={32} />}
              title="상가·오피스"
              description="유동 인구와 상권 분석을 바탕으로 성공적인 비즈니스 터전을 찾아드립니다."
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">오시는 길</h2>
              <p className="text-navy-500 font-medium mb-8 flex items-center gap-2">
                <Navigation size={18} /> 공덕역 6번 출구 도보 5분 거리
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-warm-50 transition-colors border border-transparent hover:border-warm-200">
                  <div className="bg-navy-900 p-3 rounded-full text-white shrink-0 shadow-lg shadow-navy-900/20">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1 text-lg">사무실 위치</h4>
                    <p className="text-warm-500 leading-relaxed font-medium">{address}</p>
                    <p className="text-sm text-navy-700 mt-2 bg-navy-50 inline-block px-2 py-1 rounded">삼성1차 아파트 105호</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-warm-50 transition-colors border border-transparent hover:border-warm-200">
                  <div className="bg-navy-50 p-3 rounded-full text-navy-900 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">문의 전화</h4>
                    <p className="text-warm-500 font-bold text-xl">{officeTel}</p>
                    <p className="text-xs text-warm-400 mt-1">상담 전화: {phoneNumber}</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-warm-50 transition-colors border border-transparent hover:border-warm-200">
                  <div className="bg-navy-50 p-3 rounded-full text-navy-900 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">영업 시간</h4>
                    <p className="text-warm-500">평일 09:30 ~ 19:30</p>
                    <p className="text-warm-500">토요일 10:00 ~ 17:00</p>
                    <p className="text-xs text-navy-400 mt-2 font-medium">* 일요일 및 공휴일은 예약제 운영</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href={kakaoNavUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-navy-900 text-white py-5 rounded-2xl font-bold hover:bg-navy-800 transition-all shadow-xl shadow-navy-900/20 active:scale-[0.98]"
                >
                  <Navigation size={22} /> 카카오맵 길찾기 시작
                </a>
              </div>
            </div>

            <div className="lg:w-2/3 w-full h-[550px] bg-warm-100 rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-warm-200 group">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.4751474945147!2d126.9504886!3d37.5438507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca27222165551%3A0xc68e7b9933096e73!2z7ISc7Jq47Yq567OE7IucIOu 마7Y-s6rWsIOyLoOqzteuNleuZmSAxNTU!5e0!3m2!1sko!2skr!4v1710000000000!5m2!1sko!2skr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="grayscale-[0.1] contrast-[1.05]"
               ></iframe>
               
               <div className="absolute top-8 left-8 right-8 md:right-auto md:w-72 bg-white/95 backdrop-blur-md p-5 rounded-[1.5rem] shadow-2xl border border-white/40 pointer-events-none transform transition-transform group-hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <Building2 size={20} />
                    </div>
                    <span className="font-bold text-navy-900">{officeName}</span>
                  </div>
                  <p className="text-sm text-warm-600 leading-relaxed">
                    <span className="text-navy-700 font-bold block mb-1">삼성1차 105호</span>
                    공덕역 6번 출구에서 신공덕 삼성아파트 방면으로 오시면 1층에 위치해 있습니다.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white pt-16 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white text-navy-900 p-1.5 rounded-lg">
                  <Building2 size={20} />
                </div>
                <span className="text-xl font-bold tracking-tight">신공덕청암 <span className="text-navy-400">부동산</span></span>
              </div>
              <p className="text-navy-300 mb-6 max-w-sm leading-relaxed text-sm">
                신공덕동의 자산 가치를 높이는 최고의 파트너가 되겠습니다. 
                정직한 분석과 진심을 다한 중개로 보답하겠습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setIsPrivacyOpen(true)} className="bg-navy-800 hover:bg-navy-700 px-3 py-1.5 rounded-full text-xs font-medium transition-colors text-navy-200">개인정보처리방침</button>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-bold mb-6 text-white/50 uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-4 text-navy-200 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> 공인중개사 소개</a></li>
                <li><a href="#services" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> 중개 서비스</a></li>
                <li><a href="#location" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> 오시는 길</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-sm font-bold mb-6 text-white/50 uppercase tracking-widest">Business Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm text-navy-200">
                <div className="space-y-3">
                  <p className="flex items-center gap-2"><span className="text-navy-500 font-semibold w-20">상호</span> {officeName}</p>
                  <p className="flex items-center gap-2"><span className="text-navy-500 font-semibold w-20">대표자</span> {repName}</p>
                  <p className="flex items-center gap-2"><span className="text-navy-500 font-semibold w-20">이메일</span> {email}</p>
                  <p className="flex items-center gap-2"><span className="text-navy-500 font-semibold w-20">개설번호</span> 11440-2019-00010</p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-center gap-2"><span className="text-navy-500 font-semibold w-20">TEL</span> {officeTel}</p>
                  <p className="flex items-center gap-2"><span className="text-navy-500 font-semibold w-20">FAX</span> {officeTel}</p>
                  <p className="flex items-center gap-2"><span className="text-navy-500 font-semibold w-20">사업자번호</span> 203-33-19557</p>
                  <p className="flex items-start gap-2"><span className="text-navy-500 font-semibold w-20 shrink-0">주소</span> <span>{address}</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-navy-800 text-center text-navy-500 text-xs tracking-wider">
            <p>&copy; 2024 Cheong-am Real Estate Office. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA (Mobile Focused) */}
      <div className="fixed bottom-6 left-6 right-6 z-50 flex gap-3 md:hidden">
        <a 
          href={`tel:${phoneNumber}`}
          className="flex-1 flex items-center justify-center gap-2 bg-navy-900 text-white py-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] font-bold text-lg active:scale-95 transition-transform"
        >
          <Phone size={24} /> 전화문의
        </a>
        <a 
          href="https://pf.kakao.com/"
          target="_blank"
          rel="noreferrer"
          className="w-20 flex items-center justify-center bg-[#FEE500] text-black py-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95 transition-transform"
        >
          <MessageCircle size={30} fill="currentColor" />
        </a>
      </div>

      {/* Desktop Floating (Bottom Right) */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col gap-4">
        <a 
          href="https://pf.kakao.com/"
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-16 h-16 bg-[#FEE500] text-black rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        >
          <MessageCircle size={28} fill="currentColor" />
          <span className="absolute right-full mr-4 bg-white text-navy-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-warm-200">
            카카오톡 실시간 문의
          </span>
        </a>
        <a 
          href={`tel:${phoneNumber}`}
          className="group relative flex items-center justify-center w-16 h-16 bg-navy-900 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        >
          <Phone size={28} />
          <span className="absolute right-full mr-4 bg-white text-navy-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-warm-200">
            전문가와 전화 상담
          </span>
        </a>
      </div>
    </div>
  );
};

export default App;
