import { GameOverParams } from '@/types/api/home/index';
import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 游戏结束
 * @param data
 */
export function gameOver(data: GameOverParams): AxiosPromise {
	const seconds = Math.floor(Math.random() * (3600 - 1 + 1)) + 1;
	return request({
		url: `/sheep/v1/game/game_over?rank_score=1&rank_state=1&rank_time=${seconds}&rank_role=1&skin=1`,
		method: 'get',
		headers: {
			Host: 'cat-match.easygame2021.com',
			'User-Agent':
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.33',
			t: data.token
		}
	});
}
