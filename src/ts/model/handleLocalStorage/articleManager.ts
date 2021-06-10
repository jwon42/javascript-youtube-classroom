import { IVideoInfo } from "../IVideoInfo.js";

export const getSavedVideos = (): IVideoInfo[] => {
  const savedVideosStr: string | null = localStorage.getItem("savedVideos");
  if (!savedVideosStr) {
    return [];
  }
  let savedVideosList: IVideoInfo[]  = JSON.parse(savedVideosStr);
  return savedVideosList;
}

export const saveVideo = (video: IVideoInfo) => {
  const savedVideosList: IVideoInfo[] = getSavedVideos();
  video.saved = "yes";
  savedVideosList.push(video);
  localStorage.setItem("savedVideos", JSON.stringify(savedVideosList));
}

export const unsaveVideo = (videoId: string) => {
  let savedVideosList: IVideoInfo[] = getSavedVideos();
  savedVideosList = savedVideosList.filter((video)=>video.videoId !== videoId);
  localStorage.setItem("savedVideos", JSON.stringify(savedVideosList));
}

export const isSavedVideo = (videoId: string): boolean => {
  const savedVideosList: IVideoInfo[] = getSavedVideos();
  let ret: boolean = false;
  savedVideosList.forEach((video) => {
    if (video.videoId === videoId) {
      ret = true;
    }
  })
  return ret;
}