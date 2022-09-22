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
		url: `/sheep/v1/game/game_over_ex?rank_score=1&rank_state=1&rank_time=${seconds}&rank_role=1&skin=1&MatchPlayInfo=CAMiBAgKEAAiBQgJEMUCIgUIDxCbAiIFCBEQ5AMiBQgDEKsCIgUIDBCcAiIFCA0Q9wEiBQgOEKQDIgUIARCQAiIFCAQQ9AEiBQgQEPoBIgUICxCMAiIFCAUQ3xgiBAgCEDIiBAgHECIiBQgIEP4FIgUIBhDNAiIFCAAQ+gE=`,
		method: 'post',
		headers: {
			"Host": 'cat-match.easygame2021.com',
			'User-Agent':
				'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/6.5.2.501 NetType/WIFI MiniGame WindowsWechat',
			"t": data.token,
			"Referer": "https://servicewechat.com/wx141bfb9b73c970a9/26/page-frame.html"
		}
	});
}
