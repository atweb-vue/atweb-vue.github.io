// badges from 88x31.nl
const globbed = import.meta.glob('@/assets/badges/*', {query: '?no-inline', eager: true});

export const badgeUrls = globbed as Record<string, { default: string }>;
