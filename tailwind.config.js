/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 0.5s ease-out',
        'zoom-in': 'zoomIn 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        'shake': 'shake 0.8s ease-in-out',
        'flip-in': 'flipIn 0.7s ease-out forwards',
        'success-particles': 'fadeOut 2s ease-out forwards',
        'particle-disperse': 'particleDisperse 1.5s ease-out forwards',
        'particle-disperse-smooth': 'particleDisperseSmooth 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'gradient-pulse': 'gradientPulse 5s ease-in-out infinite',
        'pulse-smooth': 'pulseSmooth 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-smooth': 'bounceSmooth 0.6s ease-out',
        'shake-smooth': 'shakeSmooth 1s cubic-bezier(0.4, 0, 0.6, 1)',
        'flip-in-smooth': 'flipInSmooth 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'zoom-in-smooth': 'zoomInSmooth 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(234, 179, 8, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(234, 179, 8, 0.8)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        bounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        flipIn: {
          '0%': { opacity: '0', transform: 'rotateY(90deg)' },
          '100%': { opacity: '1', transform: 'rotateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        particleDisperse: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
          '100%': { transform: 'translate(-50%, -150px) scale(0)', opacity: '0' },
        },
        particleDisperseSmooth: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
          '100%': { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0)`, opacity: '0' },
        },
        gradientPulse: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseSmooth: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        bounceSmooth: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.97)' },
        },
        shakeSmooth: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
        flipInSmooth: {
          '0%': { opacity: '0', transform: 'rotateY(90deg)' },
          '100%': { opacity: '1', transform: 'rotateY(0)' },
        },
        zoomInSmooth: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};