import latestKeywords from '../states/latestKeywords.js';
import {
  renderLatestKeywordList,
  renderSearchVideoList,
  renderVideoLoader,
} from '../viewControllers/searchModal.js';
import { initInfiniteScroll, searchVideo } from '../service.js';
import videoInfos from '../states/videoInfos.js';

async function handleVideoSearch(e) {
  e.preventDefault();

  const keyword = e.target.className.includes('js-latest-keyword')
    ? e.target.innerText // 최근 검색어 클릭 시
    : e.target.elements['video-search-input'].value; // 검색 input에 직접 입력 시
  latestKeywords.add(keyword);
  renderLatestKeywordList(latestKeywords.get());

  renderVideoLoader();
  const searchVideoList = await searchVideo(keyword);
  renderSearchVideoList(searchVideoList, videoInfos.get());

  if (searchVideoList.length) {
    initInfiniteScroll();
  }
}

export default handleVideoSearch;