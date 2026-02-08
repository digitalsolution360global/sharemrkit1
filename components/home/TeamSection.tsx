"use client";

import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Ashish Singh",
    role: "Co-founder & Faculty",
    img: "/ashish.png",
    slug: "ashish-singh",
  },
  {
    name: "Nikhil Singh",
    role: "Co-founder & Faculty",
    img: "/nikhil.png",
    slug: "nikhil-singh",
  },
  {
    name: "Shobhit Bindal",
    role: "Derivatives Specialist & Trading Educator ",
    img: "/shobhit.jpeg",
    slug: "shobhit-bindal",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-950 py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-green-400 font-semibold mb-2">Our Experts</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn from experienced professionals who bring real-world trading
            expertise to the classroom.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <Link
              key={index}
              href={`/team/${member.slug}`}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-xl hover:shadow-green-500/30 transition duration-300 overflow-hidden">
                
                {/* Image */}
                <div className="relative w-full h-80 bg-white">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-contain group-hover:scale-105 transition"
                  />
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-green-400 font-medium mt-2">
                    {member.role}
                  </p>

                  <p className="text-gray-400 mt-4 text-sm group-hover:text-green-400 transition">
                    View Profile →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
