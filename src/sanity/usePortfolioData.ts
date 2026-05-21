import {useQuery} from '@tanstack/react-query'

import {portfolioDataQueryOptions} from './queries'

export function usePortfolioData() {
  return useQuery(portfolioDataQueryOptions)
}
