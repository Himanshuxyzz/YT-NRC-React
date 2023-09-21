export function getMonthsAgo(timestamp) {
  const now = new Date();
  const date = new Date(timestamp);
  const monthsAgo =
    (now.getFullYear() - date.getFullYear()) * 12 +
    (now.getMonth() - date.getMonth());
  return `${monthsAgo} months ago`;
}

export function formatViewCount(count) {
  const num = parseInt(`${count}`);
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "m";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  } else {
    return num.toString();
  }
}
