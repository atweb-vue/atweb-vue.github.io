// badges from 88x31.nl
const globbed = import.meta.glob('@/assets/badges/*', {query: '?url', eager: true});

export const badgeUrls = globbed as Record<string, { default: string }>;
