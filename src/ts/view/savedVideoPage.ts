import { $ } from '../util.js';
import { getSavedVideos } from '../model/handleLocalStorage/articleManager.js';
import { savedVideoArticle, savedVideoSection } from './videoPage/index.js';
import { IVideoInfo } from '../model/IVideoInfo.js';

export const renderEmptyVideo = () => {
  ($('#saved-video-section') as HTMLDivElement).insertAdjacentHTML('beforeend', '<p>볼 영상이 없습니다.</p>');
};

export const renderVideo = (video: IVideoInfo): void => {
  ($('#saved-video-section') as HTMLDivElement).insertAdjacentHTML('beforeend', savedVideoArticle(video));
};

export const savedVideoPageRenderer = (): void => {
  $('#video-list')?.remove();
  $('header')?.insertAdjacentHTML('afterend', savedVideoSection());
  const savedVideoList = getSavedVideos();
  let unwatchedVideoList: IVideoInfo[] = savedVideoList.filter((video) => video.isWatched === false);
  if (unwatchedVideoList.length === 0) {
    renderEmptyVideo();
  }
  unwatchedVideoList.forEach((video) => {
    renderVideo(video);
  });
};

export const removeArticle = (article: HTMLDivElement) => {
  article.remove();
};
