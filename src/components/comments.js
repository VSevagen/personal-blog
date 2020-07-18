import React from "react"
import { DiscussionEmbed } from "disqus-react"

export default function Comments() {
    const disqusConfig = {
        shortname: 'sevagenblog',
        // config: { identifier: slug, title },
    }
    return (
        <div>
            <DiscussionEmbed {...disqusConfig} />
        </div>
    );
}