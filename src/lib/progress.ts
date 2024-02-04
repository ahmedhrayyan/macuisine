import NProgress from "nprogress";

NProgress.configure({ speed: 400, trickle: false });

let progressIntervalId: number | null = null;

export function startProgress() {
  if (progressIntervalId) return;
  NProgress.start();
  progressIntervalId = window.setInterval(() => NProgress.inc(), 500);
}

export function removeProgress() {
  if (progressIntervalId) {
    NProgress.done();
    window.clearInterval(progressIntervalId);
  }
}
