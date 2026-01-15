import React from 'react';
import { ScanLine, ChevronLeft, Battery, Wifi, Signal, Search, Clock, ChevronRight, Circle, Droplet } from 'lucide-react';

type ScreenType = 'scan' | 'result' | 'history';

interface PhoneMockupProps {
  screen?: ScreenType;
  className?: string;
  animate?: boolean;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ screen = 'result', className = '', animate = false }) => {
  
  const StatusBar = ({ dark = false }) => (
    <div className={`flex justify-between items-center px-6 py-4 text-[10px] font-medium ${dark ? 'text-white' : 'text-black'} opacity-90 relative z-20`}>
      <span>9:41</span>
      <div className="flex space-x-1.5 items-center">
        <Signal size={10} />
        <Wifi size={10} />
        <Battery size={10} />
      </div>
    </div>
  );

  const ScanScreen = () => (
    <div className="flex flex-col h-full bg-black relative overflow-hidden text-white font-sans">
      <StatusBar dark />
      
      {/* Camera Viewport - CSS Built */}
      <div className="absolute inset-0 bg-[#151515] flex items-center justify-center">
         {/* Technical Grid Background */}
         <div className="absolute inset-0 opacity-10" 
              style={{
                  backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
              }}>
         </div>
         
         {/* Abstract Product Silhouette */}
         <div className="relative opacity-20 transform scale-95 blur-sm">
            {/* Lid */}
            <div className="w-20 h-8 mx-auto bg-gray-400 rounded-t-lg mb-1 shadow-inner"></div>
            {/* Jar Body */}
            <div className="w-32 h-44 bg-gray-300 rounded-3xl border-4 border-gray-400/50 relative overflow-hidden">
               {/* Label hint */}
               <div className="absolute top-12 left-0 right-0 h-20 bg-gray-400/30"></div>
               {/* Reflection */}
               <div className="absolute top-0 right-4 w-4 h-full bg-white/10 skew-x-12 blur-md"></div>
            </div>
         </div>

         {/* Vignette Overlay */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between p-6">
         {/* Top Bar */}
         <div className="flex justify-between items-center pt-2">
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors cursor-pointer">
              <ChevronLeft size={16} />
            </div>
            <div className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-medium tracking-wide flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-terracotta rounded-full animate-pulse"></div>
               Analyzing Label...
            </div>
            <div className="w-8"></div>
         </div>

         {/* Reticle / Focus Frame */}
         <div className="flex justify-center items-center flex-1 relative">
             <div className="w-64 h-64 border-[1.5px] border-white/30 rounded-[2rem] relative overflow-hidden">
                {/* Corner Markers */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-[3px] border-l-[3px] border-white rounded-tl-xl -mt-0.5 -ml-0.5"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-[3px] border-r-[3px] border-white rounded-tr-xl -mt-0.5 -mr-0.5"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[3px] border-l-[3px] border-white rounded-bl-xl -mb-0.5 -ml-0.5"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[3px] border-r-[3px] border-white rounded-br-xl -mb-0.5 -mr-0.5"></div>
                
                {/* Full Vertical Scan Line */}
                <div className="absolute left-0 right-0 h-[2px] bg-terracotta shadow-[0_0_20px_rgba(207,117,86,0.8)] animate-scan z-10"></div>
                <div className="absolute left-0 right-0 h-24 bg-gradient-to-t from-terracotta/20 to-transparent animate-scan z-0" style={{transform: 'translateY(-100%)'}}></div>
                
                {/* Product Detected Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-black shadow-lg whitespace-nowrap opacity-0 animate-[fadeIn_0.5s_ease-out_2s_forwards]">
                   Detecting Additives...
                </div>
             </div>
         </div>

         {/* Controls */}
         <div className="pb-8 flex flex-col items-center gap-6">
            <div className="flex items-center gap-8">
                <div className="text-white/70 text-xs font-medium cursor-pointer hover:text-white transition-colors">Manual</div>
                <div className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform group">
                   <div className="w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow"></div>
                </div>
                <div className="text-white/70 text-xs font-medium cursor-pointer hover:text-white transition-colors">Flash</div>
            </div>
         </div>
      </div>
    </div>
  );

  const HistoryScreen = () => (
    <div className="flex flex-col h-full bg-[#F9F9F9] relative text-black font-sans">
       <StatusBar />
       <div className="px-6 py-4">
          <h2 className="font-serif text-3xl mb-1">Scan History</h2>
          <p className="text-xs text-gray-500 uppercase tracking-widest">Recent Activity</p>
       </div>

       <div className="flex-1 overflow-hidden px-4 space-y-3">
          {[
            { name: "Almond Milk", status: "Clean", color: "text-green-600", bg: "bg-green-100" },
            { name: "Protein Bar", status: "Processd", color: "text-orange-600", bg: "bg-orange-100" },
            { name: "Greek Yogurt", status: "Clean", color: "text-green-600", bg: "bg-green-100" },
            { name: "Diet Soda", status: "Avoid", color: "text-red-600", bg: "bg-red-100" },
            { name: "Rolled Oats", status: "Clean", color: "text-green-600", bg: "bg-green-100" },
          ].map((item, i) => (
             <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                      <Search size={16} />
                   </div>
                   <div>
                      <div className="font-medium text-sm">{item.name}</div>
                      <div className="text-[10px] text-gray-400 flex items-center gap-1"><Clock size={8}/> {i + 2}h ago</div>
                   </div>
                </div>
                <div className={`px-2 py-1 rounded-md text-[10px] font-bold ${item.bg} ${item.color}`}>
                   {item.status}
                </div>
             </div>
          ))}
       </div>
    </div>
  );

  const ResultScreen = () => (
    <div className="flex flex-col h-full bg-white relative overflow-hidden text-black font-sans">
      <StatusBar />
      
      {/* Nav */}
      <div className="px-6 py-2 flex items-center justify-between sticky top-0 z-20 bg-white/80 backdrop-blur-sm">
        <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
           <ChevronLeft size={16} className="text-gray-500" />
        </div>
        <span className="font-serif text-lg">Report</span>
        <div className="w-8"></div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-4 pb-20 scrollbar-hide">
        
        {/* Product Representation - CSS Built */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full bg-white border border-gray-100 shadow-sm p-4 flex items-center justify-center relative">
             <div className="absolute inset-0 rounded-full border border-gray-50 scale-110 opacity-50 animate-pulse-slow"></div>
             
             {/* Icon Placeholder */}
             <div className="w-full h-full bg-terracotta/5 rounded-full flex items-center justify-center overflow-hidden relative">
                <div className="absolute bottom-0 w-full h-1/2 bg-terracotta/10"></div>
                <Droplet className="text-terracotta relative z-10 drop-shadow-sm" size={40} strokeWidth={1.5} fill="rgba(207,117,86, 0.2)" />
             </div>
          </div>
        </div>

        {/* Product Title */}
        <div className="text-center mb-8">
           <h3 className="font-serif text-2xl mb-1">Raw Organic Honey</h3>
           <p className="text-xs text-terracotta uppercase tracking-widest font-medium">Verified Pure</p>
        </div>

        {/* Safety Indicator - Central Number */}
        <div className="mb-8 flex flex-col items-center">
           <div className="text-5xl font-serif text-black mb-2 animate-fade-in">100</div>
           <div className="text-xs text-gray-400 uppercase tracking-widest">Purity Score</div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-3 mb-8">
           <div className="bg-[#F9F9F9] p-3 rounded-xl text-center">
              <div className="text-lg font-serif text-black">NO</div>
              <div className="text-[10px] text-gray-500 uppercase">Additives</div>
           </div>
           <div className="bg-[#F9F9F9] p-3 rounded-xl text-center">
              <div className="text-lg font-serif text-black">A+</div>
              <div className="text-[10px] text-gray-500 uppercase">Clean Grade</div>
           </div>
        </div>

        {/* Ingredients List */}
        <div className="space-y-3">
          <h4 className="font-serif text-lg">Ingredients Found</h4>
          {[
            { name: "Organic Honey", note: "100% Whole Food" },
            { name: "Bee Pollen", note: "Natural beneficial traces" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
               <span className="text-sm font-medium">{item.name}</span>
               <span className="text-xs text-green-600 mt-1">{item.note}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 z-20">
        <button className="w-full bg-black text-white py-4 rounded-full font-medium text-sm hover:scale-[1.02] transition-transform shadow-lg shadow-black/20 flex items-center justify-center gap-2">
          <ScanLine size={16} /> Scan Next Item
        </button>
      </div>
    </div>
  );

  const renderScreen = () => {
    switch (screen) {
      case 'scan': return <ScanScreen />;
      case 'history': return <HistoryScreen />;
      case 'result': default: return <ResultScreen />;
    }
  };

  return (
    <div className={`relative mx-auto border-[#1f1f1f] bg-[#1f1f1f] border-[14px] rounded-[3.5rem] h-[650px] w-[320px] shadow-2xl ring-1 ring-white/10 ${className}`}>
        {/* Screen Content */}
        <div className="rounded-[2.5rem] overflow-hidden w-full h-full bg-white relative">
            {renderScreen()}
        </div>
        {/* Dynamic Island Area */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 pointer-events-none"></div>
    </div>
  );
};

export default PhoneMockup;