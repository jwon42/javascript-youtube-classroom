interface IVideoInfo {
  videoId: string,
  videoTitle: string,
  publishedAt: string,
  channelId: string,
  channelTitle: string
}
export const modalArticle = (obj: IVideoInfo): string => {
  return `
  <article class="clip">
    <div class="preview-container">
      <iframe loading="lazy" width="100%" height="118" src="https://www.youtube.com/embed/${obj.videoId}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
    <div class="content-container pt-2 px-1">
      <h3>${obj.videoTitle}</h3>
      <div>
        <a href="https://www.youtube.com/channel/${obj.channelId}" target="_blank"
          class="channel-name mt-1">
          ${obj.channelTitle}
        </a>
        <div class="meta">
          <p>${obj.publishedAt}</p>
        </div>
        <div class="d-flex justify-end">
          <button class="btn">⬇️ 저장</button>
        </div>
      </div>
    </div>
  </article>`;
}