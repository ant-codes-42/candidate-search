// TODO: Create an interface for the Candidate objects returned by the API
export interface ICandidateList {
    readonly login: string, // username
    //readonly id: number,
    //readonly node_id: string,
    //readonly avatar_url: string, // For display
    //readonly gravatar_id: string,
    //readonly url: string, // Same as searchGitHubUser
    //readonly html_url: string,
    //readonly followers_url: string,
    //readonly following_url: string,
    //readonly gists_url: string,
    //readonly starred_url: string,
    //readonly subscriptions_url: string,
    //readonly organizations_url: string, // Possibly the orgs?
    //readonly repos_url: string,
    //readonly events_url: string,
    //readonly received_events_url: string,
    //readonly type: string,
    //readonly user_view_type: string,
    //readonly site_admin: boolean
}

export interface ICandidate {
    readonly login: string,
    //readonly id: number,
    //readonly node_id: string,
    readonly avatar_url: string, // Avatar
    //readonly gravatar_id: string,
    //readonly url: string,
    //readonly html_url: string,
    //readonly followers_url: string,
    //readonly following_url: string,
    //readonly gists_url: string,
    //readonly starred_url: string,
    //readonly subscriptions_url: string,
    //readonly organizations_url: string,
    //readonly repos_url: string,
    //readonly events_url: string,
    //readonly received_events_url: string,
    //readonly type: string,
    //readonly user_view_type: string,
    //readonly site_admin: boolean,
    readonly name: string, // Name
    readonly company: string | null, // Company
    //readonly blog: string,
    readonly location: string | null, // Location
    readonly email: string | null,
    //readonly hireable: string | null,
    readonly bio: string | null, // Bio
    //readonly twitter_username: string | null,
    //readonly public_repos: number,
    //readonly public_gists: number,
    //readonly followers: number,
    //readonly following: number,
    //readonly created_at: string,
    //readonly updated_at: string,
}