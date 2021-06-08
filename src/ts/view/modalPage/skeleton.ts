export const skeleton = (): string => {
  return `
  <article class="clip">
    <div class="preview-container skeleton">
    </div>
    <div class="content-container pt-2 px-1">
      <div class="skeleton"></div>
      <div>
        <div class="channel-name mt-1 skeleton">
        </div>
        <div class="meta skeleton">
          <p></p>
        </div>
        <div class="d-flex justify-end">
          <button class="btn">⬇️ 저장</button>
        </div>
      </div>
    </div>
  </article>`;
}