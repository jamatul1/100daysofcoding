/**------920. Number of Music Playlists---------- */
var numMusicPlaylists = function (n, goal, k) {
  let mod = Math.pow(10, 9) + 7;
  let dp = {};
  function generatePlaylist(total, taken) {
    // cases where we take all the n unique musics
    if (total === 0 && taken === n) return 1;
    // playlist is full of the all the n musics
    if (total === 0 || taken > n) return 0;
    if (dp[total + "," + taken] !== undefined) return dp[total + "," + taken];
    // choosing a new music
    let res = (n - taken) * generatePlaylist(total - 1, taken + 1);
    // choosing a old music
    if (taken > k) {
      res += (taken - k) * generatePlaylist(total - 1, taken);
    }
    dp[total + "," + taken] = res % mod;
    return dp[total + "," + taken];
  }
  return generatePlaylist(goal, 0);
};
