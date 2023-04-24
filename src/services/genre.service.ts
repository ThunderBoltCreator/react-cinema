import { axiosClassic } from 'api/interceptors'

import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/config/api.config'

export const GenreService = {
	async getAll(searchTerm: string) {
		return await axiosClassic.get<IGenre[]>(getGenresUrl('/popular'), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
}
