// vite.config.ts
import { defineConfig } from "file:///E:/FrontEnd/UIKit/node_modules/vite/dist/node/index.js";
import dts from "file:///E:/FrontEnd/UIKit/node_modules/vite-plugin-dts/dist/index.mjs";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "file:///E:/FrontEnd/UIKit/node_modules/glob/dist/esm/index.js";
import react from "file:///E:/FrontEnd/UIKit/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\FrontEnd\\UIKit";
var __vite_injected_original_import_meta_url = "file:///E:/FrontEnd/UIKit/vite.config.ts";
var entries = Object.fromEntries(
  glob.sync("src/components/**/*.{ts,tsx}").map((file) => [
    relative(
      "src/components",
      file.slice(0, file.length - extname(file).length)
    ),
    fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
  ])
);
var outputBase = {
  globals: {
    react: "React",
    "react-dom": "ReactDOM",
    "react/jsx-runtime": "jsxRuntime",
    "classnames/bind": "cn",
    classnames: "classnames"
  }
};
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: resolve(__vite_injected_original_dirname, "tsconfig.lib.json")
    })
  ],
  define: {
    "process.env": {}
  },
  build: {
    emptyOutDir: true,
    outDir: "./dist",
    lib: {
      name: "uikit",
      entry: resolve(__vite_injected_original_dirname, "src/components/index.ts")
    },
    ssr: true,
    copyPublicDir: false,
    // https://vitejs.dev/config/build-options.html#build-rollupoptions
    rollupOptions: {
      external: ["react", "react-dom"],
      input: entries,
      output: [
        {
          ...outputBase,
          exports: "named",
          format: "esm",
          interop: "esModule"
        }
      ],
      plugins: []
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxGcm9udEVuZFxcXFxVSUtpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcRnJvbnRFbmRcXFxcVUlLaXRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0Zyb250RW5kL1VJS2l0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XHJcbmltcG9ydCB7IGV4dG5hbWUsIHJlbGF0aXZlLCByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gXCJub2RlOnVybFwiO1xyXG5pbXBvcnQgeyBnbG9iIH0gZnJvbSBcImdsb2JcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuICBnbG9iXHJcbiAgICAuc3luYyhcInNyYy9jb21wb25lbnRzLyoqLyoue3RzLHRzeH1cIilcclxuICAgIC5tYXAoKGZpbGUpID0+IFtcclxuICAgICAgcmVsYXRpdmUoXHJcbiAgICAgICAgXCJzcmMvY29tcG9uZW50c1wiLFxyXG4gICAgICAgIGZpbGUuc2xpY2UoMCwgZmlsZS5sZW5ndGggLSBleHRuYW1lKGZpbGUpLmxlbmd0aCksXHJcbiAgICAgICksXHJcbiAgICAgIGZpbGVVUkxUb1BhdGgobmV3IFVSTChmaWxlLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgIF0pLFxyXG4pO1xyXG5cclxuY29uc3Qgb3V0cHV0QmFzZSA9IHtcclxuICBnbG9iYWxzOiB7XHJcbiAgICByZWFjdDogXCJSZWFjdFwiLFxyXG4gICAgXCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxyXG4gICAgXCJyZWFjdC9qc3gtcnVudGltZVwiOiBcImpzeFJ1bnRpbWVcIixcclxuICAgIFwiY2xhc3NuYW1lcy9iaW5kXCI6IFwiY25cIixcclxuICAgIGNsYXNzbmFtZXM6IFwiY2xhc3NuYW1lc1wiLFxyXG4gIH0sXHJcbn07XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBkdHMoe1xyXG4gICAgICB0c2NvbmZpZ1BhdGg6IHJlc29sdmUoX19kaXJuYW1lLCBcInRzY29uZmlnLmxpYi5qc29uXCIpLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBkZWZpbmU6IHtcclxuICAgIFwicHJvY2Vzcy5lbnZcIjoge30sXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICBvdXREaXI6IFwiLi9kaXN0XCIsXHJcbiAgICBsaWI6IHtcclxuICAgICAgbmFtZTogXCJ1aWtpdFwiLFxyXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2NvbXBvbmVudHMvaW5kZXgudHNcIiksXHJcbiAgICB9LFxyXG4gICAgc3NyOiB0cnVlLFxyXG4gICAgY29weVB1YmxpY0RpcjogZmFsc2UsXHJcbiAgICAvLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL2J1aWxkLW9wdGlvbnMuaHRtbCNidWlsZC1yb2xsdXBvcHRpb25zXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcclxuICAgICAgaW5wdXQ6IGVudHJpZXMsXHJcbiAgICAgIG91dHB1dDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIC4uLm91dHB1dEJhc2UsXHJcbiAgICAgICAgICBleHBvcnRzOiBcIm5hbWVkXCIsXHJcbiAgICAgICAgICBmb3JtYXQ6IFwiZXNtXCIsXHJcbiAgICAgICAgICBpbnRlcm9wOiBcImVzTW9kdWxlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgcGx1Z2luczogW10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJPLFNBQVMsb0JBQW9CO0FBQ3hRLE9BQU8sU0FBUztBQUNoQixTQUFTLFNBQVMsVUFBVSxlQUFlO0FBQzNDLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsWUFBWTtBQUNyQixPQUFPLFdBQVc7QUFMbEIsSUFBTSxtQ0FBbUM7QUFBc0csSUFBTSwyQ0FBMkM7QUFPaE0sSUFBTSxVQUFVLE9BQU87QUFBQSxFQUNyQixLQUNHLEtBQUssOEJBQThCLEVBQ25DLElBQUksQ0FBQyxTQUFTO0FBQUEsSUFDYjtBQUFBLE1BQ0U7QUFBQSxNQUNBLEtBQUssTUFBTSxHQUFHLEtBQUssU0FBUyxRQUFRLElBQUksRUFBRSxNQUFNO0FBQUEsSUFDbEQ7QUFBQSxJQUNBLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLEVBQzlDLENBQUM7QUFDTDtBQUVBLElBQU0sYUFBYTtBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLHFCQUFxQjtBQUFBLElBQ3JCLG1CQUFtQjtBQUFBLElBQ25CLFlBQVk7QUFBQSxFQUNkO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixjQUFjLFFBQVEsa0NBQVcsbUJBQW1CO0FBQUEsSUFDdEQsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLGVBQWUsQ0FBQztBQUFBLEVBQ2xCO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxhQUFhO0FBQUEsSUFDYixRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxNQUFNO0FBQUEsTUFDTixPQUFPLFFBQVEsa0NBQVcseUJBQXlCO0FBQUEsSUFDckQ7QUFBQSxJQUNBLEtBQUs7QUFBQSxJQUNMLGVBQWU7QUFBQTtBQUFBLElBRWYsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOO0FBQUEsVUFDRSxHQUFHO0FBQUEsVUFDSCxTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsVUFDUixTQUFTO0FBQUEsUUFDWDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVMsQ0FBQztBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
