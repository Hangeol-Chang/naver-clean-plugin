(function () {
  function cleanNaver() {
    // 제거 대상
    const removeIds = ['newsstand', 'feed'];
    for (const id of removeIds) {
      const el = document.getElementById(id);
      if (el) el.remove();
    }

    // 왼쪽 컬럼 숨기기 (newsstand/feed를 감싸는 컬럼)
    // 네이버 레이아웃: column_left / column_right 구조
    const leftCols = document.querySelectorAll(
      '[class*="column_left"]'
    );
    for (const col of leftCols) {
      // 왼쪽 컬럼 자체가 비었으면 숨김
      const hasVisibleChild = col.querySelector(':not(style):not(script)');
      if (!hasVisibleChild || col.innerHTML.trim() === '') {
        col.style.display = 'none';
      } else {
        // newsstand/feed 외 다른 콘텐츠가 남아있으면 그냥 둠
      }
    }

    centerRightColumn();
  }

  function centerRightColumn() {
    // 오른쪽 컬럼을 중앙 정렬
    const rightCols = document.querySelectorAll(
      '[class*="column_right"]'
    );
    for (const col of rightCols) {
      col.style.setProperty('margin-left', 'auto', 'important');
      col.style.setProperty('margin-right', 'auto', 'important');
      col.style.setProperty('float', 'none', 'important');
    }

    // 전체 레이아웃 컨테이너도 flex/block으로 중앙 정렬
    const layoutContainers = document.querySelectorAll(
      '[class*="Layout-module__wrap"],' +
      '[class*="layout_wrap"],' +
      '[class*="service_layout"]'
    );
    for (const container of layoutContainers) {
      container.style.setProperty('display', 'flex', 'important');
      container.style.setProperty('justify-content', 'center', 'important');
      container.style.setProperty('flex-wrap', 'wrap', 'important');
    }
  }

  // DOM이 이미 준비됐으면 바로 실행, 아니면 대기
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cleanNaver);
  } else {
    cleanNaver();
  }

  // 동적으로 로드되는 요소 대응 (MutationObserver)
  const observer = new MutationObserver(() => {
    const newsstand = document.getElementById('newsstand');
    const feed = document.getElementById('feed');
    if (newsstand || feed) {
      cleanNaver();
    }
  });

  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
