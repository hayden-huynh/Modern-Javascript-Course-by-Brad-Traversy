class GitHub {
  constructor() {
    this.client_id = '966129fee922c01d5c87';
    this.client_secret = '8441489fc83a4e5860dcdb05a6a1be95124ad7aa';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`, {
      method: 'GET', 
      headers: {
        'User-Agent': 'request'
      }
    });

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`, {
      method: 'GET', 
      headers: {
        'User-Agent': 'request'
      }
    });

    const profile = await profileResponse.json();
    const profile = await repoResponse.json();

    return {
      profile, // Same as profile: profile
      repos
    }
  }
}