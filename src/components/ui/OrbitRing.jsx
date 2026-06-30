import { motion } from 'framer-motion';

export function OrbitRing({ icons }) {
  const radius = 165;

  return (
    <div className="relative mx-auto flex h-[500px] w-full max-w-[620px] items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[100px]" />

      {/* Orbit Rings */}

      <div className="absolute h-[380px] w-[380px] rounded-full border border-white/10" />

      <div className="absolute h-[300px] w-[300px] rounded-full border border-white/5" />

      <div className="absolute h-[220px] w-[220px] rounded-full border border-white/5" />

      {/* Rotating Dashed Ring */}

      <motion.div
        className="absolute h-[380px] w-[380px] rounded-full border border-dashed border-violet-400/25"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Rotating Icons */}

      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {icons.map((Icon, index) => {

          const angle = (index / icons.length) * Math.PI * 2;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >

              {/* Counter Rotation */}

              <motion.div
                animate={{
                  rotate: -360,
                  y: [0, -6, 0],
                }}
                transition={{
                  rotate: {
                    duration: 32,
                    repeat: Infinity,
                    ease: "linear",
                  },

                  y: {
                    duration: 3 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.18,
                  rotate: 8,
                }}
                className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-xl transition-all duration-300"
              >

                {/* Purple Glow */}

                <div className="absolute inset-0 rounded-2xl bg-violet-500/20 blur-xl opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Blue Glow */}

                <div className="absolute inset-0 rounded-2xl shadow-[0_0_35px_rgba(59,130,246,.25)] group-hover:shadow-[0_0_50px_rgba(168,85,247,.55)] transition-all duration-300" />

                <Icon className="relative z-10 text-[30px] text-white" />

              </motion.div>

            </motion.div>
          );

        })}
      </motion.div>

      {/* Center Glow */}

      <motion.div
        className="absolute flex h-28 w-28 items-center justify-center rounded-full"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >

        <div className="absolute h-28 w-28 rounded-full bg-violet-500 blur-[55px] opacity-70" />
                <div className="absolute flex h-24 w-24 items-center justify-center rounded-full border border-purple-300/30 bg-gradient-to-br from-violet-600 via-purple-700 to-slate-950 shadow-[0_0_60px_rgba(168,85,247,.65)]">
          <div className="absolute h-16 w-16 rounded-full bg-violet-400/30 blur-2xl" />

          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-950/90 text-xl font-bold text-white">
            ✦
          </div>
        </div>
      </motion.div>

      {/* Animated Pulse Ring */}

      <motion.div
        className="absolute h-36 w-36 rounded-full border border-violet-400/20"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.05, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small Orbit Particles */}

      {[...Array(10)].map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const particleRadius = 195;

        return (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-violet-300/70"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translate(${Math.cos(angle) * particleRadius}px, ${Math.sin(angle) * particleRadius}px)`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Infinity,
            }}
          />
        );
      })}
    </div>
  );
}