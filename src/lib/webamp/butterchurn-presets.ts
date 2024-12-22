const pages = import.meta.glob('../../../node_modules/butterchurn-presets/presets/converted/*.json', { exhaustive: true });

export default pages as Record<string, () => Promise<object>>;
