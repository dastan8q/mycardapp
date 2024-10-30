// page.tsx
import React from 'react';

const ProfileCard: React.FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-300 to-blue-600 p-4 shadow-2xl overflow-visible">
      <main className="relative flex flex-col md:flex-row items-center bg-black text-white rounded-lg shadow-lg md:max-w-2xl p-6 overflow-visible">
        <img
          src="/image.jpeg"
          alt="Img mujer"
          className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full md:rounded-lg absolute -translate-y-12 -translate-x-0 md:-translate-x-12 md:translate-y-0"
        />
        <section className="mt-24 md:mt-0 md:ml-48 text-center md:text-left">
          <h2 className="text-2xl font-semibold">Jess Wilson</h2>
          <p className="text-gray-400">UX Engineer</p>
          <p className="mt-4 text-gray-500">
            Empowering users through captivating interfaces, turning ideas into pixel-perfect realities.
          </p>
          <div className="mt-6 flex space-x-3 space-y-0 md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <button className="px-4 py-2 border border-white rounded-full w-32">Profile</button>
            <button className="px-4 py-2 bg-white text-black rounded-full w-32">Follow</button>
          </div>
        </section>
      </main>
    </section>
  );
};

export default ProfileCard;
