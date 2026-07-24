import Link from "next/link";

const team = [
  {
    name: "Ahmed Hassan",
    role: "CEO & Founder",
    bio: "Passionate about revolutionizing networking with technology",
  },
  {
    name: "Sara Mohamed",
    role: "Head of Design",
    bio: "Creating beautiful and intuitive user experiences",
  },
  {
    name: "Omar Khalid",
    role: "CTO",
    bio: "Building scalable solutions for the future of networking",
  },
];

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "100+", label: "Countries" },
  { value: "1M+", label: "Cards Shared" },
  { value: "99.9%", label: "Uptime" },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            We&apos;re on a Mission to{" "}
            <span className="gradient-text">Revolutionize Networking</span>
          </h1>
          <p className="text-muted text-lg">
            TapCard was born from a simple idea: sharing your professional
            information should be as easy as a tap. We&apos;re building the
            future of digital networking.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 dark:bg-slate-800/50 py-16 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted">
              <p>
                Founded in 2024, TapCard started with a frustration we all know
                too well: fumbling through business cards at networking events,
                losing contact information, and the environmental waste of
                printed cards.
              </p>
              <p>
                We believed there had to be a better way. So we created TapCard
                - a digital business card platform that combines cutting-edge
                NFC technology with elegant design to make sharing your
                professional information effortless.
              </p>
              <p>
                Today, over 50,000 professionals across 100+ countries use
                TapCard to make meaningful connections every day.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-xl font-semibold">Growing Fast</div>
                <div className="text-muted">Join our journey</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-muted">
            The passionate people behind TapCard
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-sm border border-gray-100 dark:border-slate-700"
            >
              <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <div className="text-primary text-sm mb-3">{member.role}</div>
              <p className="text-muted text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "💡",
              title: "Innovation",
              description:
                "We constantly push boundaries to bring you the latest in networking technology",
            },
            {
              icon: "🎨",
              title: "Design",
              description:
                "We believe networking tools should be as beautiful as they are functional",
            },
            {
              icon: "🤝",
              title: "Connection",
              description:
                "We exist to help people build meaningful professional relationships",
            },
          ].map((value, index) => (
            <div key={index} className="text-center p-8">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-bg rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-white/80 mb-8">
            Be part of the networking revolution
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}
