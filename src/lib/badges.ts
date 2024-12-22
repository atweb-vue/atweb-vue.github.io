// badges from 88x31.nl
const globbed = import.meta.glob('@/assets/badges/*', {query: '?no-inline', eager: true, import: 'default'});

export const badgeUrls = globbed as Record<string, string>;
