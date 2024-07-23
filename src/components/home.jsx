import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, GitBranch, Code, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-slate-800 text-white min-h-screen font-changa ">
      <header className="text-center py-10 bg-slate-800">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to GitGuruji
        </h1>
        <p className="text-lg md:text-2xl">Master Git and GitHub with our step-by-step tutorials and interactive guides.</p>
      </header>

      <main className="py-10 px-4">
        <section className="flex flex-wrap justify-center gap-8 py-10">
          <Link to="/section/1/chapter/1" className="group w-full sm:w-2/5 md:w-1/4 p-6 bg-slate-700 hover:bg-slate-600 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">The Newbie Trail</h2>
            <p className="text-base mb-4">Learn the basics of Git and GitHub to get started with version control.</p>
            <ArrowRight className="text-white w-6 h-6 group-hover:text-yellow-500 transition duration-300 ease-in-out" />
          </Link>

          <Link to="/section/2/chapter/1" className="group w-full sm:w-2/5 md:w-1/4 p-6 bg-slate-700 hover:bg-slate-600 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">The Intermediate Path</h2>
            <p className="text-base mb-4">Dive deeper into advanced Git commands and techniques.</p>
            <ArrowRight className="text-white w-6 h-6 group-hover:text-yellow-500 transition duration-300 ease-in-out" />
          </Link>

          <Link to="/section/3/chapter/1" className="group w-full sm:w-2/5 md:w-1/4 p-6 bg-slate-700 hover:bg-slate-600 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">The Advanced Quest</h2>
            <p className="text-base mb-4">Learn pro tips and tricks to become a Git expert.</p>
            <ArrowRight className="text-white w-6 h-6 group-hover:text-yellow-500 transition duration-300 ease-in-out" />
          </Link>
        </section>

        <section className="bg-slate-800 py-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose GitGuruji
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <GitBranch className="text-yellow-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Tutorials</h3>
              <p className="text-base">From basic to advanced topics, we've got you covered.</p>
            </div>
            <div className="flex flex-col items-center">
              <Code className="text-yellow-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hands-on Learning</h3>
              <p className="text-base">Interactive exercises and real-world examples.</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="text-yellow-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-base">Join communities of learners and experts.</p>
            </div>
          </div>
        </section>

        <section className="py-10 text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Learners Say!!</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-slate-700 p-6 rounded-lg w-full sm:w-2/5 md:w-1/4">
              <Star className="text-yellow-500 w-6 h-6 mb-2" />
              <p className="italic">"Git Learning Hub made it so easy to understand Git and GitHub. The tutorials are clear and concise."</p>
              <p className="font-semibold mt-4">- Rahul Rai</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg w-full sm:w-2/5 md:w-1/4">
              <Star className="text-yellow-500 w-6 h-6 mb-2" />
              <p className="italic">"The hands-on exercises are fantastic. I feel much more confident using Git now."</p>
              <p className="font-semibold mt-4">- Aniket Kumar</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-800 py-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <Link to="/section/0/chapter/0" className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">Start Learning Now</Link>
        </section>
      </main>

     
    </div>
  );
};

export default Home;
