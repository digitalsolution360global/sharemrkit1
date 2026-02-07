import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Top-Rated Share Market Course in Ghaziabad | SMSA Trading Academy",
  description:
    "Join SMSA, the leading trading academy in Ghaziabad, for expert-led share market courses. Master technical analysis, options trading, and investment strategies with practical, live-market training designed for beginners and pros alike.",
};

const services = [
  {
    title: "Mutual Fund",
    desc: "Professionally managed mutual funds to grow your wealth safely.",
    img: "/services/mutual-fund.jpeg",
  },
  {
    title: "Bonds",
    desc: "Low-risk bond investments with fixed and stable returns.",
    img: "/services/bonds.jpeg",
  },
  {
    title: "Fixed Deposit",
    desc: "Guaranteed returns through secure and high-interest fixed deposits.",
    img: "/services/fixed-deposit.jpeg",
  },
  {
    title: "Insurance",
    desc: "Complete insurance solutions for life, health, and asset protection.",
    img: "/services/insurance.jpeg",
  },
  {
    title: "Algo Trading",
    desc: "Smart algorithm-based trading for faster and data-driven decisions.",
    img: "/services/algo-trading.jpeg",
  },
];

export default function ServicesDetailPage() {
  return (
    <div className="bg-white text-black">
      {/* ================= BANNER ================= */}
      <section
        className="relative h-[55vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner/b1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <p className="text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-[#7ED321]">Home</Link> / Services
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Best Share Market Course in <span className="text-[#7ED321]">Ghaziabad</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-200">
            Reliable financial services designed for growth, stability & security.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart Financial <span className="text-[#7ED321]">Solutions</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            We offer a complete range of investment and financial services tailored to help you build long-term wealth with confidence.
            Our expert-driven approach focuses on safety, consistency, and informed decision-making.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-top hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
