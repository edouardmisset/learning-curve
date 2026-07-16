export const BASE_WEBSITE_URL = 'https://edouardmisset.github.io' as const
export const GITHUB_PROFILE_URL = 'https://github.com/edouardmisset' as const
export const BASE_PATH = '/my-learning-curve' as const
export const WEBSITE_URL = BASE_WEBSITE_URL + BASE_PATH
export const REPO_URL = GITHUB_PROFILE_URL + BASE_PATH

// Factory function to create link helpers with or without base URL
const createLinks = (baseUrl = '') =>
  ({
    learn: (id: string = '') => `${baseUrl}/learn/${id}`,
    tutorials: (id: string = '') => `${baseUrl}/learn/tutorials/${id}`,
    guides: (id: string = '') => `${baseUrl}/learn/guides/${id}`,
    reference: (id: string = '') => `${baseUrl}/reference/${id}`,
    snippets: (id: string = '') => `${baseUrl}/snippets/${id}`,
    blog: () => `${baseUrl}/blog`,
  }) as const satisfies Record<string, (id?: string) => string>

// Paths without BASE_URL (for Starlight sidebar)
export const PATHS = createLinks('')

// Full URLs with BASE_URL (for MDX content)
export const LINKS = {
  home: () => BASE_PATH,
  ...createLinks(BASE_PATH),
} as const
