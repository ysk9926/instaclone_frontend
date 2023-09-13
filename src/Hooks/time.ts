export function timeDifference(currentTime: Date, previousTime: string) {
  const createdAtDate = new Date(previousTime);
  const diffInMilliseconds = currentTime.getTime() - createdAtDate.getTime();
  const minutes = Math.floor(diffInMilliseconds / (1000 * 60));
  return minutes;
}

export function formatTimeDifference(minutes: number): string {
  if (minutes < 1) {
    return "방금 전";
  } else if (minutes < 60) {
    return `${minutes}분 전`;
  } else {
    return "오래 전";
  }
}

export function getTimeAgoText(createdAt: string, currentTime: Date) {
  const createdAtTimestamp = Math.floor(+createdAt / 1000);
  const createdAtDate = new Date(createdAtTimestamp * 1000);
  const minutesAgo = timeDifference(currentTime, createdAtDate.toISOString());
  return formatTimeDifference(minutesAgo);
}
