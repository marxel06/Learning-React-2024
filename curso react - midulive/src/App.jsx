import { useState } from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
    {
        userName: 'Max',
        name: "NameRandin",
        isFollowing : true
    },
    {
        userName: "pablo12",
        name: "pablo",
        isFollowing: false
    },
    {
        userName: "matiax",
        name: "matias",
        isFollowing: true
    },
    {
        userName: "alixa",
        name: "ali",
        isFollowing: true
    }
]

export function App () {
    return (
      <section className='App'>
        {
          users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
        }
      </section>
    )
}