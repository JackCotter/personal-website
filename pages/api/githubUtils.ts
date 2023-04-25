import { Octokit, App } from "octokit";
import { GetResponseTypeFromEndpointMethod, GetResponseDataTypeFromEndpointMethod } from "@octokit/types"
import { Endpoints } from "@octokit/types"

var octokit:Octokit;

type getStatsType = Endpoints["GET /repos/{owner}/{repo}/stats/contributors"]["response"];

export const githubUtils = {
    login: async () => {
        octokit = new Octokit({
            auth: "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"
        })
        return octokit
    },
    getCommits: async (owner:string, repo:string): Promise<getStatsType> =>  {
        const response = await octokit.request('GET /repos/{owner}/{repo}/stats/contributors', {
            owner: owner,
            repo: repo,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        return response;
    }

}