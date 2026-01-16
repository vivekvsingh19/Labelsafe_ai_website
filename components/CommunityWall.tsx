import React, { useState } from 'react';
import { MessageSquarePlus, User, Send } from 'lucide-react';

interface Comment {
  id: number;
  name: string;
  text: string;
  time: string;
  initials: string;
  color: string;
}

const CommunityWall: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      name: "Sarah Jenkins",
      text: "I'm tired of being confused by 'natural flavors' and chemical names. I signed up because I finally want to know what I'm eating without guessing.",
      time: "2h ago",
      initials: "SJ",
      color: "bg-purple-500"
    },
    {
      id: 2,
      name: "Maria Torres",
      text: "Keeping ultra-processed foods away from my family is a priority. I can't wait for an app that scans everything instantly before it goes in the cart.",
      time: "4h ago",
      initials: "MT",
      color: "bg-terracotta"
    },
    {
      id: 3,
      name: "Dr. Emily Ross",
      text: "Most apps purely count calories. I'm excited for a tool that finally identifies the inflammatory ingredients that actually impact metabolic health.",
      time: "5h ago",
      initials: "ER",
      color: "bg-blue-500"
    }
  ]);

  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");
  const [isWriting, setIsWriting] = useState(false);

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !newName.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      name: newName,
      text: newComment,
      time: "Just now",
      initials: newName.substring(0, 2).toUpperCase(),
      color: "bg-green-500"
    };

    setComments([comment, ...comments]);
    setNewComment("");
    setNewName("");
    setIsWriting(false);
  };

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-16 md:w-2/3 mx-auto">
          <span className="text-xs tracking-[0.2em] text-terracotta uppercase mb-4 block">Interactive Community</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Why are people joining?</h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
            See real reasons from the waitlist and add your own voice to the movement.
          </p>
          <button
            onClick={() => setIsWriting(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105"
          >
            <MessageSquarePlus size={18} />
            <span>Share your reason</span>
          </button>
        </div>

        {/* Writing Popup */}
        {isWriting && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in text-left">
            <div className="bg-[#111111] w-full max-w-lg rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative animate-slide-up">
              <button
                onClick={() => setIsWriting(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-2"
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8">
                <h3 className="font-serif text-2xl text-white mb-6">Write a Note</h3>
                <form onSubmit={handlePost}>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="I'm joining LabelSafe because..."
                    className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-terracotta/50 transition-colors resize-none h-32 text-lg font-light mb-4"
                    required
                    autoFocus
                  />
                  <div className="flex flex-col gap-4">
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-terracotta/50 transition-colors"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Post to Wall</span>
                      <Send size={16} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* The Wall - Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-[#111111] p-8 rounded-3xl border border-white/5 relative hover:translate-y-[-5px] transition-all duration-300 shadow-sm hover:shadow-terracotta/5 group animate-fade-in"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-terracotta/20 group-hover:text-terracotta/40 transition-colors">
                <MessageSquarePlus size={32} />
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light min-h-[80px]">
                "{comment.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${comment.color} flex items-center justify-center text-white font-bold text-sm shadow-lg border border-white/10`}>
                  {comment.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-base">{comment.name}</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">{comment.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommunityWall;
