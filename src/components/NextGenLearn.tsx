import React from 'react';
import { BookOpen, Users, MonitorPlay, GraduationCap, BarChart3, Handshake, Computer, MessageSquare } from 'lucide-react';

const NextGenLearn = () => {
  const features = [
    {
      title: 'Online Classes',
      description: 'Live and interactive classes led by experienced teachers with flexible schedules, recorded sessions, and doubt-clearing support.',
      icon: <MonitorPlay className="w-10 h-10 text-blue-500" />,
    },
    {
      title: 'Mentorship & Guidance',
      description: 'One-on-one mentorship from subject experts to help students set learning goals, track progress, and stay motivated.',
      icon: <Users className="w-10 h-10 text-blue-500" />,
    },
    {
      title: 'Digital Study Materials',
      description: 'Access to structured notes, e-books, practice tests, and revision guides — available anytime, anywhere.',
      icon: <BookOpen className="w-10 h-10 text-blue-500" />,
    },
    {
      title: 'Career Guidance',
      description: 'Personalized counseling to help students choose the right career path, prepare for competitive exams, and build future-ready skills.',
      icon: <GraduationCap className="w-10 h-10 text-blue-500" />,
    },
    {
      title: 'Tests & Assessments',
      description: 'Regular quizzes, mock exams, and performance reports to evaluate learning outcomes and strengthen weak areas.',
      icon: <BarChart3 className="w-10 h-10 text-blue-500" />,
    },
    {
      title: 'Parent–Teacher Connect',
      description: 'Seamless communication between parents and teachers with updates on performance, attendance, and progress reports.',
      icon: <Handshake className="w-10 h-10 text-blue-500" />,
    },
    {
      title: 'Flexible Learning Platform',
      description: 'A user-friendly online platform accessible on mobile, tablet, and desktop with smooth navigation and secure login.',
      icon: <Computer className="w-10 h-10 text-blue-500" />,
    },
    {
      title: 'Peer Learning & Community',
      description: 'Discussion forums, group projects, and study groups to encourage collaboration and peer-to-peer learning.',
      icon: <MessageSquare className="w-10 h-10 text-blue-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7FAFC] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMDEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[conic-gradient(at_20%_10%,#e0f2fe,transparent_30%)]" />
      
      <header className="relative   py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Welcome to the Future of Learning
          </span> */}
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            NextGen Learn
          </h1>
          <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
            Your journey to knowledge starts here with cutting-edge learning solutions.
          </p>
        </div>
      </header>

      <main className="relative py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="relative">
                Features & Services
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover a comprehensive suite of tools and resources designed to empower your learning journey.
            </p>
          </div> */}
          <div className="scroll-container">
            <div className="pause-animation">
              <div className="flex animate-scroll">
                {[...features, ...features, ...features].map((feature, index) => (
                  <div key={index} className="group relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:shadow-3xl transition-all duration-500 w-80 flex-shrink-0 mx-4 hover:-translate-y-2 border border-blue-200/20">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-50 group-hover:to-indigo-50 transition-colors duration-300">
                        {React.cloneElement(feature.icon, { className: 'w-8 h-8 text-blue-500 transition-transform duration-300 group-hover:scale-110' })}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NextGenLearn;






// import React from 'react';
// import { BookOpen, Users, MonitorPlay, GraduationCap, BarChart3, Handshake, Computer, MessageSquare } from 'lucide-react';

// const NextGenLearn = () => {
//   const features = [
//     {
//       title: 'Online Classes',
//       description: 'Live and interactive classes led by experienced teachers with flexible schedules, recorded sessions, and doubt-clearing support.',
//       icon: <MonitorPlay className="w-10 h-10" />,
//       gradient: 'from-blue-300 to-cyan-300',
//       bgGradient: 'from-blue-100/80 to-cyan-100/80',
//       shadowColor: 'shadow-blue-200/40',
//     },
//     {
//       title: 'Mentorship & Guidance',
//       description: 'One-on-one mentorship from subject experts to help students set learning goals, track progress, and stay motivated.',
//       icon: <Users className="w-10 h-10" />,
//       gradient: 'from-purple-300 to-pink-300',
//       bgGradient: 'from-purple-100/80 to-pink-100/80',
//       shadowColor: 'shadow-purple-200/40',
//     },
//     {
//       title: 'Digital Study Materials',
//       description: 'Access to structured notes, e-books, practice tests, and revision guides — available anytime, anywhere.',
//       icon: <BookOpen className="w-10 h-10" />,
//       gradient: 'from-green-300 to-emerald-300',
//       bgGradient: 'from-green-100/80 to-emerald-100/80',
//       shadowColor: 'shadow-green-200/40',
//     },
//     {
//       title: 'Career Guidance',
//       description: 'Personalized counseling to help students choose the right career path, prepare for competitive exams, and build future-ready skills.',
//       icon: <GraduationCap className="w-10 h-10" />,
//       gradient: 'from-orange-300 to-rose-300',
//       bgGradient: 'from-orange-100/80 to-rose-100/80',
//       shadowColor: 'shadow-orange-200/40',
//     },
//     {
//       title: 'Tests & Assessments',
//       description: 'Regular quizzes, mock exams, and performance reports to evaluate learning outcomes and strengthen weak areas.',
//       icon: <BarChart3 className="w-10 h-10" />,
//       gradient: 'from-indigo-300 to-violet-300',
//       bgGradient: 'from-indigo-100/80 to-violet-100/80',
//       shadowColor: 'shadow-indigo-200/40',
//     },
//     {
//       title: 'Parent–Teacher Connect',
//       description: 'Seamless communication between parents and teachers with updates on performance, attendance, and progress reports.',
//       icon: <Handshake className="w-10 h-10" />,
//       gradient: 'from-teal-300 to-cyan-300',
//       bgGradient: 'from-teal-100/80 to-cyan-100/80',
//       shadowColor: 'shadow-teal-200/40',
//     },
//     {
//       title: 'Flexible Learning Platform',
//       description: 'A user-friendly online platform accessible on mobile, tablet, and desktop with smooth navigation and secure login.',
//       icon: <Computer className="w-10 h-10" />,
//       gradient: 'from-violet-300 to-purple-300',
//       bgGradient: 'from-violet-100/80 to-purple-100/80',
//       shadowColor: 'shadow-violet-200/40',
//     },
//     {
//       title: 'Peer Learning & Community',
//       description: 'Discussion forums, group projects, and study groups to encourage collaboration and peer-to-peer learning.',
//       icon: <MessageSquare className="w-10 h-10" />,
//       gradient: 'from-pink-300 to-rose-300',
//       bgGradient: 'from-pink-100/80 to-rose-100/80',
//       shadowColor: 'shadow-pink-200/40',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
//       {/* Soft animated background elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-green-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
//         <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-orange-200/20 to-rose-200/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
//       </div>
      
//       {/* Gentle floating elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-3 h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-40 animate-bounce"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 4}s`,
//               animationDuration: `${4 + Math.random() * 3}s`
//             }}
//           />
//         ))}
//       </div>
      
//       <header className="relative py-20 text-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="inline-block px-6 py-3 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full mb-8 text-gray-700 font-medium shadow-lg">
//             ✨ Welcome to the Future of Learning
//           </div>
          
//           <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-gray-800 via-purple-700 to-blue-700 bg-clip-text text-transparent mb-6 tracking-tight">
//             NextGen Learn
//           </h1>
          
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
//             Transform your educational journey with cutting-edge learning solutions designed for the digital age
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-300/50">
//               Start Learning Today
//             </button>
//             <button className="px-8 py-4 bg-white/70 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-white/50 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
//               Explore Features
//             </button>
//           </div>
//         </div>
//       </header>

//       <main className="relative py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-gray-800 mb-6">
//               <span className="relative">
//                 Features & Services
//                 <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full"></span>
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Discover a comprehensive suite of tools and resources designed to empower your learning journey
//             </p>
//           </div>
          
//           <div className="relative">
//             {/* Scrolling container with soft gradient mask */}
//             <div className="overflow-hidden mask-gradient-soft">
//               <div className="flex animate-scroll-gentle space-x-6">
//                 {[...features, ...features, ...features].map((feature, index) => (
//                   <div 
//                     key={index} 
//                     className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-500 w-80 flex-shrink-0 border border-white/60 hover:bg-white/90 hover:-translate-y-2 hover:${feature.shadowColor} hover:shadow-xl`}
//                   >
//                     {/* Soft animated border */}
//                     <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-sm transition duration-500`}></div>
                    
//                     <div className="relative z-10 w-full">
//                       {/* Icon container with pastel background */}
//                       <div className={`inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${feature.bgGradient} group-hover:scale-110 transition-transform duration-300 shadow-md`}>
//                         {React.cloneElement(feature.icon, { 
//                           className: `w-10 h-10 text-gray-600 transition-all duration-300 group-hover:scale-110` 
//                         })}
//                       </div>
                      
//                       <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
//                         {feature.title}
//                       </h3>
                      
//                       <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
//                         {feature.description}
//                       </p>
                      
//                       {/* Soft decorative element */}
//                       <div className={`mt-6 w-12 h-1 bg-gradient-to-r ${feature.gradient} opacity-40 mx-auto rounded-full group-hover:opacity-70 transition-all duration-300`}></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Soft call to action section */}
//       <section className="relative py-20">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 border border-white/50 shadow-xl">
//             <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-purple-700 bg-clip-text text-transparent mb-6">
//               Ready to Transform Your Learning?
//             </h3>
//             <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//               Join thousands of students who have already elevated their education with NextGen Learn
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-300/50">
//                 Get Started Free
//               </button>
//               <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-white/60 hover:bg-white/90 transition-all duration-300 shadow-md">
//                 Schedule Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes scroll-gentle {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-33.333%);
//           }
//         }
        
//         .animate-scroll-gentle {
//           animation: scroll-gentle 35s linear infinite;
//         }
        
//         .animate-scroll-gentle:hover {
//           animation-play-state: paused;
//         }
        
//         .mask-gradient-soft {
//           mask: linear-gradient(90deg, transparent, white 15%, white 85%, transparent);
//           -webkit-mask: linear-gradient(90deg, transparent, white 15%, white 85%, transparent);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default NextGenLearn;