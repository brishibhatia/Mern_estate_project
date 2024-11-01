// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// // https://vite.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://localhost:3000",
//         secure: false,
//       },
//     },
//   },
//   plugins: [react()],
// });
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Use HTTP if the backend is not using HTTPS
        changeOrigin: true,
        secure: false, // Set to false to avoid SSL issues (only needed if using HTTPS with self-signed certs)
      },
    },
  },
  plugins: [react()],
});
