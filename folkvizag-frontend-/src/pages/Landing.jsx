import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Flame,
  Target,
  Users,
  MapPin,
  Calendar,
  Sparkles,
  ChevronRight,
  Heart,
  CheckCircle2,
  Bell,
  Plus,
  Home,
  User,
  Music,
  Clock3,
  HandHeart,
  BookOpen,
} from 'lucide-react';

import Button from '../components/ui/Button';

const Landing = ({ onLoginClick }) => {
  const programs = [
    {
      title: 'Youth Programs',
      description:
        'Engaging activities and learning experiences designed to inspire young minds.',
      icon: <Users size={25} />,
    },
    {
      title: 'Spiritual Sessions',
      description:
        'Participate in spiritual discussions, chanting and meaningful sessions.',
      icon: <Sparkles size={25} />,
    },
    {
      title: 'Workshops',
      description:
        'Learn, grow and explore through practical workshops and interactive activities.',
      icon: <BookOpen size={25} />,
    },
    {
      title: 'Events',
      description:
        'Discover festivals, kirtans, celebrations and community gatherings.',
      icon: <Calendar size={25} />,
    },
    {
      title: 'Seva',
      description:
        'Take part in meaningful service activities and contribute to the community.',
      icon: <HandHeart size={25} />,
    },
    {
      title: 'Yatras & Activities',
      description:
        'Join yatras, outings and other spiritual and community activities.',
      icon: <MapPin size={25} />,
    },
  ];

  const eventCards = [
    {
      title: 'Spiritual Gathering',
      category: 'Spiritual Session',
      date: 'Upcoming',
      icon: <Sparkles size={30} />,
    },
    {
      title: 'Community Event',
      category: 'Community',
      date: 'Upcoming',
      icon: <Users size={30} />,
    },
    {
      title: 'Seva Activity',
      category: 'Seva',
      date: 'Upcoming',
      icon: <Heart size={30} />,
    },
  ];

  const appFeatures = [
    'Event Bookings',
    'Digital ID Card',
    'Stay Approvals',
    'Sadhana Streaks',
  ];

  const quickAccess = [
    {
      title: 'Upcoming Events',
      icon: <Calendar size={18} />,
    },
    {
      title: 'Seva Activities',
      icon: <Heart size={18} />,
    },
    {
      title: 'Accommodation',
      icon: <Home size={18} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDF9F1] text-gray-900 overflow-x-hidden">

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">

          <div className="h-16 sm:h-[72px] bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-sm flex items-center justify-between px-4 sm:px-6">

            <a href="#" className="shrink-0">
              <img
                src="/logo.png"
                alt="Folk Vizag Logo"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </a>

            <div className="hidden xl:flex items-center gap-7">

              <a
                href="#about"
                className="text-sm font-medium text-gray-600 hover:text-[#FF9933] transition"
              >
                About
              </a>

              <a
                href="#programs"
                className="text-sm font-medium text-gray-600 hover:text-[#FF9933] transition"
              >
                Programs
              </a>

              <a
                href="#events"
                className="text-sm font-medium text-gray-600 hover:text-[#FF9933] transition"
              >
                Events
              </a>

              <a
                href="#seva"
                className="text-sm font-medium text-gray-600 hover:text-[#FF9933] transition"
              >
                Seva
              </a>

              <a
                href="#accommodation"
                className="text-sm font-medium text-gray-600 hover:text-[#FF9933] transition"
              >
                Accommodation
              </a>

              <a
                href="#gallery"
                className="text-sm font-medium text-gray-600 hover:text-[#FF9933] transition"
              >
                Gallery
              </a>

              <a
                href="#contact"
                className="text-sm font-medium text-gray-600 hover:text-[#FF9933] transition"
              >
                Contact
              </a>

            </div>

            <Button
              onClick={onLoginClick}
              className="px-5 sm:px-7 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-[#FF9933] transition-all"
            >
              Login
            </Button>

          </div>
        </div>
      </nav>


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">

        <div className="absolute top-20 right-[-120px] w-[420px] h-[420px] bg-orange-200/35 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute bottom-[-120px] left-[-120px] w-[420px] h-[420px] bg-yellow-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-orange-100 rounded-full shadow-sm">

              <span className="w-2 h-2 rounded-full bg-[#FF9933]" />

              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.16em]">
                Welcome to HKMV Folk
              </span>

            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[0.94]">

              Connect.

              <br />

              Participate.

              <br />

              <span className="text-[#FF9933]">
                Serve.
              </span>

            </h1>

            <p className="mt-7 max-w-xl text-base sm:text-lg text-gray-500 leading-8">
              Discover spiritual sessions, youth programs, workshops,
              events, seva, yatras and community activities through
              HKMV Folk.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <Button
                onClick={onLoginClick}
                className="px-7 py-4 bg-[#FF9933] text-white rounded-xl font-semibold shadow-lg hover:bg-[#e88822] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                Join HKMV Folk
                <ArrowRight size={18} />
              </Button>

              <a
                href="#events"
                className="px-7 py-4 border border-gray-200 bg-white rounded-xl font-semibold hover:border-[#FF9933] hover:text-[#FF9933] transition-all flex items-center justify-center gap-2"
              >
                Explore Events
                <ChevronRight size={18} />
              </a>

            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">

              {['Community', 'Spirituality', 'Seva'].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <CheckCircle2
                    size={17}
                    className="text-[#FF9933]"
                  />
                  {item}
                </div>
              ))}

            </div>

          </motion.div>


          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="order-1 lg:order-2 relative flex justify-center"
          >

            <div className="relative w-full max-w-[590px]">

              <div className="absolute inset-10 bg-orange-300/30 blur-[90px] rounded-full" />

              <motion.img
                src="/krishna_toy.png"
                alt="Krishna"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_30px_50px_rgba(255,153,51,0.25)]"
              />

              {/* Sadhana floating card */}

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-[15%] right-0 sm:right-[-15px] z-20 bg-white rounded-2xl shadow-xl border border-gray-100 p-4"
              >

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#FF9933] flex items-center justify-center">
                    <Flame size={21} />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                      Daily Sadhana
                    </p>

                    <p className="text-sm font-black text-gray-900">
                      Spiritual Practice
                    </p>
                  </div>

                </div>

              </motion.div>


              {/* Event floating card */}

              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute bottom-[14%] left-0 sm:left-[-15px] z-20 bg-white rounded-2xl shadow-xl border border-gray-100 p-4"
              >

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-xl bg-yellow-50 text-[#D99D00] flex items-center justify-center">
                    <Calendar size={21} />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                      Upcoming
                    </p>

                    <p className="text-sm font-black text-gray-900">
                      Community Events
                    </p>
                  </div>

                </div>

              </motion.div>

            </div>

          </motion.div>

        </div>
      </section>

            {/* =========================================================
          STATS
      ========================================================= */}

      <section className="px-4 sm:px-6 lg:px-8 pb-20">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

            {[
              {
                label: 'Sadhana Streaks',
                value: '15,000+',
                icon: <Flame size={23} />,
              },
              {
                label: 'Active Devotees',
                value: '2,500+',
                icon: <Users size={23} />,
              },
              {
                label: 'Events Hosted',
                value: '120+',
                icon: <Calendar size={23} />,
              },
              {
                label: 'Temple Stays',
                value: '500+',
                icon: <MapPin size={23} />,
              },
            ].map((stat, index) => (

              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >

                <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#FF9933] flex items-center justify-center mb-5">
                  {stat.icon}
                </div>

                <div className="text-2xl sm:text-4xl font-black text-gray-900">
                  {stat.value}
                </div>

                <p className="mt-2 text-xs sm:text-sm font-medium text-gray-400">
                  {stat.label}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section
        id="about"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>

              <p className="text-sm font-bold text-[#FF9933] uppercase tracking-[0.18em]">
                About HKMV Folk
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                A place to
                <span className="text-[#FF9933]">
                  {' '}connect
                </span>
                {' '}and participate.
              </h2>

            </div>

            <div>

              <p className="text-base sm:text-lg text-gray-500 leading-8">
                HKMV Folk brings spiritual sessions, youth programs,
                workshops, events, seva, yatras and other community
                activities together in one place.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">

                {[
                  'Spiritual Growth',
                  'Community',
                  'Events',
                  'Seva',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-4 py-3 bg-[#FDF9F1] rounded-xl text-sm font-semibold text-gray-700"
                  >
                    <CheckCircle2
                      size={17}
                      className="text-[#FF9933]"
                    />
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          PROGRAMS
      ========================================================= */}

      <section
        id="programs"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      >

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">

            <div className="max-w-2xl">

              <p className="text-sm font-bold text-[#FF9933] uppercase tracking-[0.18em]">
                Programs & Activities
              </p>

              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                Explore what
                <span className="text-[#FF9933]">
                  {' '}HKMV Folk
                </span>
                {' '}offers.
              </h2>

            </div>

            <a
              href="#contact"
              className="flex items-center gap-2 text-sm font-bold text-[#FF9933]"
            >
              Learn More
              <ArrowRight size={17} />
            </a>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

            {programs.map((program, index) => (

              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group bg-white rounded-3xl border border-gray-100 p-7 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all"
              >

                <div className="flex items-start justify-between">

                  <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#FF9933] flex items-center justify-center group-hover:bg-[#FF9933] group-hover:text-white transition-colors">
                    {program.icon}
                  </div>

                  <ChevronRight
                    size={20}
                    className="text-gray-300 group-hover:text-[#FF9933] transition-colors"
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm text-gray-500 leading-6">
                  {program.description}
                </p>

                <div className="mt-6 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#FF9933] transition">
                  Explore Program
                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          EVENTS
      ========================================================= */}

      {/* ================= EVENTS ================= */}

<section
  id="events"
  className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white"
>

  <div className="max-w-7xl mx-auto">

    {/* Events Heading */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 px-4 sm:px-6 lg:px-8">

      <div>
        <p className="text-sm font-bold text-[#FF9933] uppercase tracking-[0.18em]">
          Events
        </p>

        <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-gray-900">
          Upcoming Events
        </h2>

        <p className="mt-4 text-gray-500 max-w-xl leading-7">
          Explore upcoming HKMV Folk events and participate
          in spiritual, cultural and community activities.
        </p>
      </div>

      <a
        href="#events"
        className="flex items-center gap-2 text-sm font-bold text-[#FF9933] hover:gap-3 transition-all"
      >
        View All Events
        <ArrowRight size={17} />
      </a>

    </div>


    {/* Event Cards */}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 sm:px-6 lg:px-8">

      {[
        {
          title: 'Upcoming Festival',
          date: 'Coming Soon',
          type: 'Festival',
        },
        {
          title: 'Spiritual Session',
          date: 'Coming Soon',
          type: 'Spiritual',
        },
        {
          title: 'Community Activity',
          date: 'Coming Soon',
          type: 'Community',
        },
      ].map((event, index) => (

        <motion.div
          key={event.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.45,
            delay: index * 0.08,
          }}
          className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >

          {/* Event Image */}

          <div className="relative h-44 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 flex items-center justify-center">

            <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#FF9933] group-hover:scale-110 transition-transform duration-300">
              <Calendar size={30} strokeWidth={1.8} />
            </div>

            <span className="absolute top-4 left-4 px-3 py-1.5 bg-white rounded-full text-[10px] font-bold uppercase tracking-wider text-[#FF9933] shadow-sm">
              {event.type}
            </span>

          </div>


          {/* Event Content */}

          <div className="p-6">

            <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">

              <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center">
                <Calendar
                  size={14}
                  className="text-[#FF9933]"
                />
              </div>

              <span>{event.date}</span>

            </div>

            <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-[#FF9933] transition-colors">
              {event.title}
            </h3>

            <p className="mt-3 text-sm text-gray-500 leading-6">
              Discover upcoming HKMV Folk events and participate
              with the community.
            </p>

            <button
              onClick={onLoginClick}
              className="mt-6 w-full py-3.5 bg-gray-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#FF9933] transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Details
              <ArrowRight size={14} />
            </button>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>


      {/* =========================================================
          COMMUNITY / APP
      ========================================================= */}

      <section
        id="seva"
        className="py-20 lg:py-32 bg-gray-900 relative overflow-hidden rounded-[3rem] lg:rounded-[5rem] mx-4 lg:mx-12 my-20"
      >

        <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-orange-500/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="relative z-10">

            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-7">
              <Heart
                className="text-[#FF9933]"
                size={28}
              />
            </div>

            <p className="text-sm font-bold text-[#FF9933] uppercase tracking-[0.18em]">
              Community Experience
            </p>

            <h2 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.9]">
              Everything
              <br />
              <span className="text-[#FF9933]">
                in one place.
              </span>
            </h2>

            <p className="mt-7 text-lg text-gray-400 leading-8 max-w-lg">
              Access events, activities, seva, accommodation and
              spiritual experiences through a cleaner and easier
              digital interface.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

              {appFeatures.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 text-sm font-semibold text-white"
                >
                  <CheckCircle2
                    size={19}
                    className="text-[#FF9933] shrink-0"
                  />

                  {feature}
                </div>

              ))}

            </div>

          </div>


          {/* PHONE */}

          <div className="flex justify-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[330px]"
            >

              <div className="bg-gray-800 rounded-[3.4rem] p-3 shadow-2xl">

                <div className="bg-white rounded-[2.8rem] p-4">

                  <div className="bg-[#FDF9F1] rounded-[2.3rem] p-5 min-h-[580px]">

                    {/* PHONE HEADER */}

                    <div className="flex items-center justify-between mb-7">

                      <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-xl bg-[#FF9933] flex items-center justify-center text-white">
                          <User size={20} />
                        </div>

                        <div>

                          <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">
                            Member
                          </p>

                          <p className="font-bold text-gray-900">
                            HKMV Folk
                          </p>

                        </div>

                      </div>

                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                        <Bell
                          size={17}
                          className="text-[#FF9933]"
                        />
                      </div>

                    </div>


                    {/* DIGITAL CARD */}

                    <div className="bg-gray-900 rounded-3xl p-6 text-white mb-6 relative overflow-hidden">

                      <div className="absolute top-[-50px] right-[-40px] w-32 h-32 rounded-full bg-orange-500/10" />

                      <div className="flex justify-between relative z-10">

                        <img
                          src="/logo.png"
                          alt="Logo"
                          className="h-6 w-auto brightness-0 invert opacity-60"
                        />

                        <Sparkles
                          size={19}
                          className="text-[#FFD166]"
                        />

                      </div>

                      <div className="mt-12 relative z-10">

                        <p className="text-[9px] uppercase tracking-widest text-gray-500">
                          Digital Identity
                        </p>

                        <p className="mt-1 text-lg font-bold">
                          HKMV Folk
                        </p>

                      </div>

                    </div>


                    {/* QUICK ACCESS */}

                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1 mb-4">
                      Quick Access
                    </p>

                    <div className="space-y-3">

                      {quickAccess.map((item) => (

                        <div
                          key={item.title}
                          className="p-4 bg-white rounded-2xl flex items-center justify-between shadow-sm"
                        >

                          <div className="flex items-center gap-4">

                            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF9933] flex items-center justify-center">
                              {item.icon}
                            </div>

                            <span className="text-sm font-bold">
                              {item.title}
                            </span>

                          </div>

                          <ChevronRight
                            size={15}
                            className="text-gray-300"
                          />

                        </div>

                      ))}

                    </div>


                    {/* PHONE NAV */}

                    <div className="mt-8 h-14 bg-white rounded-full shadow-sm flex items-center justify-around">

                      <div className="w-9 h-9 rounded-full bg-[#FF9933] text-white flex items-center justify-center">
                        <Heart size={16} />
                      </div>

                      <Calendar
                        size={18}
                        className="text-gray-300"
                      />

                      <Home
                        size={18}
                        className="text-gray-300"
                      />

                      <User
                        size={18}
                        className="text-gray-300"
                      />

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* =========================================================
          ACCOMMODATION
      ========================================================= */}

      <section
        id="accommodation"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      >

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>

              <p className="text-sm font-bold text-[#FF9933] uppercase tracking-[0.18em]">
                Accommodation
              </p>

              <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">
                A clearer stay experience.
              </h2>

              <p className="mt-6 text-gray-500 leading-7 max-w-xl">
                Location, room information, facilities, photos,
                rules and availability can be presented clearly
                for devotees.
              </p>

              <Button
                onClick={onLoginClick}
                className="mt-7 px-7 py-4 bg-[#FF9933] text-white rounded-xl font-semibold hover:bg-[#e88822] transition-all"
              >
                Request Accommodation
              </Button>

            </div>


            <div className="grid grid-cols-2 gap-4">

              {[
                'Location',
                'Room Information',
                'Facilities',
                'Availability',
                'Photos',
                'Rules',
              ].map((item, index) => (

                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
                >

                  <CheckCircle2
                    size={22}
                    className="text-[#FF9933]"
                  />

                  <p className="mt-4 font-semibold text-gray-800">
                    {item}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          GALLERY
      ========================================================= */}

      <section
        id="gallery"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="mb-12">

            <p className="text-sm font-bold text-[#FF9933] uppercase tracking-[0.18em]">
              Gallery
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">
              Activities in pictures.
            </h2>

            <p className="mt-4 text-gray-500 max-w-xl">
              A visual space for events, festivals, seva activities,
              workshops and community moments.
            </p>

          </div>


          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

            {[
              'Events',
              'Youth Activities',
              'Seva',
              'Workshops',
              'Festivals',
              'Yatras',
            ].map((item, index) => (

              <div
                key={item}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-yellow-50 border border-gray-100 flex items-end p-5 min-h-[180px] ${
                  index === 0 || index === 3
                    ? 'lg:col-span-2'
                    : ''
                }`}
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-orange-200/20 transition-opacity" />

                <span className="relative z-10 px-4 py-2 bg-white rounded-full text-sm font-bold shadow-sm">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm font-bold text-[#FF9933] uppercase tracking-[0.18em]">
            Community
          </p>

          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">
            What Our Community Says
          </h2>

          <div className="mt-10 bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm">

            <div className="flex justify-center gap-1 text-[#FF9933]">

              {[1, 2, 3, 4, 5].map((item) => (
                <span key={item}>★</span>
              ))}

            </div>

            <p className="mt-6 text-lg text-gray-500 leading-8 max-w-2xl mx-auto">
              Genuine participant experiences and testimonials
              can be displayed here to highlight the impact of
              HKMV Folk activities.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto relative overflow-hidden bg-white rounded-[3rem] shadow-xl border border-gray-100 p-10 sm:p-16 lg:p-24 text-center">

          <div className="absolute top-[-120px] left-[-120px] w-72 h-72 bg-orange-100/60 rounded-full blur-3xl" />

          <div className="absolute bottom-[-120px] right-[-120px] w-72 h-72 bg-yellow-100/60 rounded-full blur-3xl" />

          <div className="relative z-10">

            <div className="w-20 h-20 bg-orange-50 text-[#FF9933] rounded-3xl flex items-center justify-center mx-auto">
              <Sparkles size={36} />
            </div>

            <h2 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight">

              Join
              <span className="text-[#FF9933]">
                {' '}HKMV Folk.
              </span>

            </h2>

            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-8">
              Discover events, activities, seva, sadhana and
              community experiences in one place.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

              <Button
                onClick={onLoginClick}
                className="px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold hover:bg-[#FF9933] transition-all"
              >
                Join HKMV Folk
              </Button>

              <a
                href="#events"
                className="px-10 py-5 border border-gray-200 rounded-2xl font-bold hover:border-[#FF9933] hover:text-[#FF9933] transition-all"
              >
                Explore Events
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section
        id="contact"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="max-w-2xl">

            <p className="text-sm font-bold text-[#FF9933] uppercase tracking-[0.18em]">
              Contact
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">
              Get in touch.
            </h2>

            <p className="mt-4 text-gray-500 leading-7">
              Have questions about programs, events, seva or
              accommodation? Connect with HKMV Folk.
            </p>

          </div>


          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="p-7 bg-[#FDF9F1] rounded-3xl border border-orange-50">

              <MapPin
                className="text-[#FF9933]"
                size={26}
              />

              <h3 className="mt-5 font-bold text-gray-900">
                Address
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                HKMV Folk / Temple Location
              </p>

            </div>


            <div className="p-7 bg-[#FDF9F1] rounded-3xl border border-orange-50">

              <Music
                className="text-[#FF9933]"
                size={26}
              />

              <h3 className="mt-5 font-bold text-gray-900">
                Phone / Email
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Contact information can be added here.
              </p>

            </div>


            <div className="p-7 bg-[#FDF9F1] rounded-3xl border border-orange-50">

              <MapPin
                className="text-[#FF9933]"
                size={26}
              />

              <h3 className="mt-5 font-bold text-gray-900">
                Location / Map
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Map and location details can be displayed here.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="py-16 px-6 lg:px-12 bg-white border-t border-gray-100">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

            <div className="flex flex-col items-center md:items-start gap-3">

              <img
                src="/logo.png"
                alt="Folk Vizag Logo"
                className="h-10 w-auto object-contain"
              />

              <p className="text-xs text-gray-400">
                Connecting people through spirituality,
                community and seva.
              </p>

            </div>


            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-500">

              <a
                href="#about"
                className="hover:text-[#FF9933] transition"
              >
                About
              </a>

              <a
                href="#programs"
                className="hover:text-[#FF9933] transition"
              >
                Programs
              </a>

              <a
                href="#events"
                className="hover:text-[#FF9933] transition"
              >
                Events
              </a>

              <a
                href="#gallery"
                className="hover:text-[#FF9933] transition"
              >
                Gallery
              </a>

              <a
                href="#contact"
                className="hover:text-[#FF9933] transition"
              >
                Contact
              </a>

            </div>


            <div className="flex flex-col items-center md:items-end gap-3">

              <div className="flex gap-3">

                {[1, 2, 3].map((item) => (

                  <div
                    key={item}
                    className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#FF9933] transition"
                  >
                    <Music size={16} />
                  </div>

                ))}

              </div>

              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} FOLK VIZAG
              </p>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default Landing;