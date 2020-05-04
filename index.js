import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    siteName: "Example Router"
  }
});

export default app;
